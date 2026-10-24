// Feed renditions + media manifest. Run `npm run media` after adding or
// replacing anything in uploads/cases (needs ffmpeg with libsvtav1).
//
// For every still: WebP widths the feed can pick from (640…1600, only
// below the source width), a 12px blurred placeholder, a content hash.
// For every clip: 720 + 1280 wide feed files in H.264 and AV1, WebP
// posters at both widths, an AV1 copy of the full clip for the lightbox
// when the source is wider than 1280, a placeholder and hashes.
//
// Everything lands in uploads/feed/ (same tree as uploads/, minus the
// "uploads/" prefix) and the index goes to media.js as window.MEDIA,
// keyed by the path app.jsx uses (placeholders go to media-lqip.json,
// which the page fetches on its own). Files are only rebuilt when missing
// or older than their source, so reruns are cheap.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFile } = require('child_process');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const OUT = 'uploads/feed';
const DIRS = ['uploads/cases', 'uploads/cases/nexus', 'uploads/artifacts'];
const IMG_W = [640, 960, 1280, 1600];
const JOBS = 3; // ffmpeg processes at once (SVT-AV1 is multithreaded already)

const abs = (p) => path.join(ROOT, p);
const hash = (p) => crypto.createHash('sha1').update(fs.readFileSync(abs(p))).digest('hex').slice(0, 8);
const stale = (out, src) => !fs.existsSync(abs(out)) || fs.statSync(abs(out)).mtimeMs < fs.statSync(abs(src)).mtimeMs;
const stem = (src) => src.replace(/^uploads\//, '').replace(/\.[a-z0-9]+$/i, '');
const run = (cmd, args) => new Promise((ok, fail) =>
  execFile(cmd, args, { cwd: ROOT, env: { ...process.env, SVT_LOG: '1' }, maxBuffer: 1 << 26 },
    (err, stdout, stderr) => (err ? fail(new Error(`${cmd} ${args.join(' ')}\n${stderr}`)) : ok(stdout))));

async function lqip(input) {
  const buf = await sharp(input).resize({ width: 12 }).webp({ quality: 40 }).toBuffer();
  return `data:image/webp;base64,${buf.toString('base64')}`;
}

async function image(src) {
  const meta = await sharp(abs(src)).metadata();
  const entry = { w: meta.width, v: { o: hash(src) }, q: await lqip(abs(src)) };
  for (const w of IMG_W) {
    if (meta.width <= w * 1.1) continue; // not worth a rendition this close to the source
    const out = `${OUT}/${stem(src)}-${w}.webp`;
    if (stale(out, src)) {
      fs.mkdirSync(path.dirname(abs(out)), { recursive: true });
      await sharp(abs(src)).resize({ width: w }).webp({ quality: 78, effort: 6 }).toFile(abs(out));
    }
    entry.v[w] = hash(out);
  }
  return entry;
}

// queue of ffmpeg jobs, JOBS at a time
const queue = [];
function job(fn) { return new Promise((ok, fail) => queue.push(() => fn().then(ok, fail))); }
function drain() {
  let live = 0;
  return new Promise((done) => {
    const next = () => {
      if (!queue.length && !live) return done();
      while (live < JOBS && queue.length) {
        live++;
        queue.shift()().finally(() => { live--; next(); });
      }
    };
    next();
  });
}

const H264 = (w) => ['-an', '-vf', `scale='min(${w},iw)':-2:flags=lanczos`, '-c:v', 'libx264', '-preset', 'slow',
  '-crf', '27', '-pix_fmt', 'yuv420p', '-movflags', '+faststart'];
// CRF 50 matched or beat H.264 CRF 27 on VMAF at 40-50% of the size
// (hutte-hero, coachable-figma, compsych-moodboard at 720)
const AV1 = (w, crf) => ['-an', ...(w ? ['-vf', `scale='min(${w},iw)':-2:flags=lanczos`] : []), '-c:v', 'libsvtav1',
  '-preset', '6', '-crf', String(crf), '-g', '240', '-pix_fmt', 'yuv420p', '-svtav1-params', 'tune=0',
  '-movflags', '+faststart'];

function encode(src, out, args) {
  if (!stale(out, src)) return Promise.resolve();
  fs.mkdirSync(path.dirname(abs(out)), { recursive: true });
  const tmp = out.replace(/(\.[a-z0-9]+)$/i, '.part$1');
  return job(async () => {
    await run('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-i', src, ...args, tmp]);
    fs.renameSync(abs(tmp), abs(out));
    console.log('  ✓', out);
  });
}

async function poster(src, out, w) {
  if (!stale(out, src)) return;
  fs.mkdirSync(path.dirname(abs(out)), { recursive: true });
  // first frame as PNG on stdout (as a Buffer, hence no run())
  const buf = await new Promise((ok, fail) => execFile('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-i', src,
    '-frames:v', '1', '-vf', `scale='min(${w},iw)':-2:flags=lanczos`, '-f', 'image2pipe', '-c:v', 'png', '-'],
  { cwd: ROOT, encoding: 'buffer', maxBuffer: 1 << 26 }, (e, so) => (e ? fail(e) : ok(so))));
  await sharp(buf).webp({ quality: 78, effort: 6 }).toFile(abs(out));
}

async function video(src) {
  const probe = JSON.parse(await run('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'json', src]));
  const { width: w, height: h } = probe.streams[0];
  const s = `${OUT}/${stem(src)}`;
  const lite = src.replace(/\.mp4$/, '-lite.mp4');
  const plan = [];
  // a 1280 H.264 feed file already exists for the heavy clips (the old
  // -lite renditions); everything else plays its original at that tier
  if (fs.existsSync(abs(lite))) {
    fs.mkdirSync(path.dirname(abs(`${s}-1280.mp4`)), { recursive: true });
    fs.renameSync(abs(lite), abs(`${s}-1280.mp4`));
  }
  if (w > 760) {
    plan.push(encode(src, `${s}-720.mp4`, H264(720)));
    plan.push(encode(src, `${s}-720.av1.mp4`, AV1(720, 50)));
  }
  plan.push(encode(src, `${s}-1280.av1.mp4`, AV1(1280, 50)));
  if (w > 1280) plan.push(encode(src, `${s}.av1.mp4`, AV1(0, 44)));
  if (w > 760) await poster(src, `${s}-720-poster.webp`, 720);
  await poster(src, `${s}-1280-poster.webp`, 1280);
  return { w, h, plan, s };
}

function videoEntry({ w, h, s }, src) {
  const v = { o: hash(src) };
  const has = (p) => fs.existsSync(abs(p));
  const size = (p) => fs.statSync(abs(p)).size;
  // an AV1 file only earns its place when it's ≥10% under the H.264 it replaces
  const wins = (av1, h264) => has(av1) && size(av1) < size(h264) * 0.9;
  if (has(`${s}-720.mp4`)) v.h720 = hash(`${s}-720.mp4`);
  if (v.h720 && wins(`${s}-720.av1.mp4`, `${s}-720.mp4`)) v.a720 = hash(`${s}-720.av1.mp4`);
  if (has(`${s}-1280.mp4`)) v.h1280 = hash(`${s}-1280.mp4`);
  if (wins(`${s}-1280.av1.mp4`, v.h1280 ? `${s}-1280.mp4` : src)) v.a1280 = hash(`${s}-1280.av1.mp4`);
  if (wins(`${s}.av1.mp4`, src)) v.af = hash(`${s}.av1.mp4`);
  if (has(`${s}-720-poster.webp`)) v.p720 = hash(`${s}-720-poster.webp`);
  v.p1280 = hash(`${s}-1280-poster.webp`);
  return { w, h, v };
}

(async () => {
  const files = DIRS.flatMap((d) => fs.readdirSync(abs(d))
    .filter((f) => /\.(webp|mp4)$/i.test(f) && !/-lite\.mp4$/.test(f))
    .map((f) => `${d}/${f}`));
  const media = {};
  const vids = [];
  for (const src of files) {
    if (src.endsWith('.webp')) media[src] = await image(src);
    else vids.push([src, await video(src)]);
  }
  console.log(`${Object.keys(media).length} stills indexed, ${queue.length} clip encodes queued`);
  await drain();
  for (const [src, info] of vids) {
    media[src] = videoEntry(info, src);
    media[src].q = await lqip(abs(`${info.s}-1280-poster.webp`));
  }
  // placeholders ride in their own file, fetched while the gate is up,
  // so the ~18KB of base64 stays off the render-critical script
  const q = {};
  for (const [src, m] of Object.entries(media)) { q[src] = m.q; delete m.q; }
  fs.writeFileSync(abs('media-lqip.json'), JSON.stringify(q));
  const lqipUrl = `media-lqip.json?v=${hash('media-lqip.json')}`;
  const body = `// generated by scripts/media.js, do not edit\nwindow.MEDIA_LQIP = '${lqipUrl}';\nwindow.MEDIA = ${JSON.stringify(media)};\n`;
  fs.writeFileSync(abs('media.js'), body);
  console.log(`media.js: ${Object.keys(media).length} entries, ${(body.length / 1024).toFixed(1)} KB; media-lqip.json ${(fs.statSync(abs('media-lqip.json')).size / 1024).toFixed(1)} KB`);
})().catch((e) => { console.error(e); process.exit(1); });
