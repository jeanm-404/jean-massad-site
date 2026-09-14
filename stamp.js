// Post-build: stamp index.html's asset URLs with a content hash so browsers
// (iOS Safari especially) can never keep serving a stale app.compiled.js or
// styles.css after a deploy. The HTML itself is max-age=0 on Vercel, so a
// changed URL is picked up on the next load. Run by `npm run build`.
const fs = require('fs');
const crypto = require('crypto');
const hash = (f) => crypto.createHash('sha1').update(fs.readFileSync(f)).digest('hex').slice(0, 8);
const v = { 'app.compiled.js': hash('app.compiled.js'), 'styles.css': hash('styles.css') };
let html = fs.readFileSync('index.html', 'utf8');
let n = 0;
for (const [file, h] of Object.entries(v)) {
  html = html.replace(new RegExp(`(["'])${file.replace('.', '\\.')}(\\?v=[^"']*)?(["'])`, 'g'), (m, q1, _q, q2) => { n++; return `${q1}${file}?v=${h}${q2}`; });
}
fs.writeFileSync('index.html', html);
console.log(`stamped ${n} asset URLs → app.compiled.js?v=${v['app.compiled.js']} styles.css?v=${v['styles.css']}`);
