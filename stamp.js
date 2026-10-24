// Post-build: stamp every local asset URL with a content hash, so a
// changed file always gets a new URL and anything carrying ?v= can be
// cached for a year (vercel.json). The HTML itself is max-age=0 on
// Vercel, so new URLs are picked up on the next load. Covers:
//   styles.css   url(uploads/...) hover images (stamped first, so the
//                stylesheet's own hash includes them)
//   index.html   local src/href .js/.css files + the vendor module import
//   sitemap.xml  <lastmod>, and the ProfilePage dateModified, to today
// Media in the feed is stamped by scripts/media.js (window.MEDIA).
// Run by `npm run build`.
const fs = require('fs');
const crypto = require('crypto');
const hash = (f) => crypto.createHash('sha1').update(fs.readFileSync(f)).digest('hex').slice(0, 8);

let css = fs.readFileSync('styles.css', 'utf8');
let nCss = 0;
css = css.replace(/url\((["']?)(uploads\/[^"')?]+)(\?v=[^"')]*)?\1\)/g, (m, q, file) => {
  if (!fs.existsSync(file)) return m;
  nCss++;
  return `url(${q}${file}?v=${hash(file)}${q})`;
});
fs.writeFileSync('styles.css', css);

let html = fs.readFileSync('index.html', 'utf8');
let n = 0;
const stamp = (file) => (fs.existsSync(file) ? (n++, `${file}?v=${hash(file)}`) : file);
html = html.replace(/((?:src|href)=")([^":?#]+\.(?:js|css))(\?v=[^"]*)?"/g, (m, pre, file) => `${pre}${stamp(file)}"`);
html = html.replace(/(from ')\.\/([^':?#]+\.js)(\?v=[^']*)?'/g, (m, pre, file) => `${pre}./${stamp(file)}'`);
// last-modified date for search engines: sitemap + the ProfilePage node
const today = new Date().toISOString().slice(0, 10);
html = html.replace(/("dateModified": ")[0-9-]+(")/, `$1${today}$2`);
fs.writeFileSync('index.html', html);
fs.writeFileSync('sitemap.xml', fs.readFileSync('sitemap.xml', 'utf8').replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${today}</lastmod>`));
console.log(`stamped ${n} asset URLs in index.html, ${nCss} image URLs in styles.css, lastmod ${today}`);
