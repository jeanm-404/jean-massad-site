# jean-massad.vercel.app

Personal portfolio for Jean Massad — a light-switch entry gate, a quiet
whiteboard-grid layout, and a feed of case-study covers that expand
inline into a canvas of project pieces (no modals — you just keep
scrolling).

**Live:** https://jean-massad.vercel.app

## Stack

No framework. Static HTML + React 18 (UMD) with the JSX **precompiled**
ahead of time — no build server, no bundler.

- `app.jsx` — the whole app (the source you edit)
- `app.compiled.js` — `app.jsx` compiled to plain JS (what production runs)
- `styles.css` — all styles
- `index.html` — production entry: minified React + `app.compiled.js`
- `dev.html` — local entry: dev React + in-browser Babel + live `app.jsx`
- `api/contributions.js` — Vercel function proxying the GitHub contribution graph
- `uploads/cases/` — case-study videos (H.264, ≤1280px) and images

## Develop

```bash
npm install
python3 -m http.server 8766        # or any static server
# open http://localhost:8766/dev.html   ← live-compiles app.jsx on refresh
```

Edit `app.jsx` and refresh `dev.html` to see changes instantly.

## Build & deploy

`index.html` runs the precompiled `app.compiled.js`, so **rebuild before
deploying**:

```bash
npm run build      # app.jsx  ->  app.compiled.js
npm run deploy     # build, then `vercel deploy --prod`
```

## Notes

- Videos are transcoded with ffmpeg (≤1280px, CRF 27, audio stripped) and
  lazy-loaded — they download and play only when scrolled into view.
- Pristine video originals and `node_modules/` are gitignored.
