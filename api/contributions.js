// Proxies GitHub's public contribution calendar for the feed under the bio.
// GitHub serves this HTML without CORS headers, so the browser can't fetch it
// directly — this function parses it into JSON and caches at the edge.
export default async function handler(req, res) {
  try {
    const r = await fetch('https://github.com/users/jeanm-404/contributions', {
      headers: { 'user-agent': 'jean-massad.vercel.app contribution map' },
    });
    if (!r.ok) throw new Error(`github ${r.status}`);
    const html = await r.text();

    // attribute order inside the <td> varies — pull each attr independently
    const days = [];
    for (const m of html.matchAll(/<td([^>]*data-date="[^>]*)>/g)) {
      const attrs = m[1];
      const d = attrs.match(/data-date="([\d-]+)"/);
      const l = attrs.match(/data-level="(\d)"/);
      const id = attrs.match(/id="([^"]+)"/);
      if (d && l) days.push({ d: d[1], l: +l[1], id: id ? id[1] : '', c: 0 });
    }
    // counts live in per-cell tooltips keyed by the td id
    const tipRe = /<tool-tip[^>]*for="([^"]+)"[^>]*>(\d+|No) contributions?/g;
    const counts = {};
    for (let m; (m = tipRe.exec(html)); ) {
      counts[m[1]] = m[2] === 'No' ? 0 : +m[2];
    }
    for (const day of days) {
      day.c = counts[day.id] || 0;
      delete day.id;
    }
    days.sort((a, b) => (a.d < b.d ? -1 : 1));
    const total = days.reduce((s, x) => s + x.c, 0);

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.status(200).json({ total, days });
  } catch (e) {
    res.status(502).json({ error: String(e) });
  }
}
