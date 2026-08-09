// api/weather.ts
// Vercel Edge Function. No API keys, no dependencies.
//
// The ladder:
//   1. Geo headers look sane            -> visitor's weather, no city named
//   2. VPN (timezone mismatch) or
//      blocked (no geo headers) or
//      visitor weather fetch fails      -> report MY weather as an availability status
//   3. Open-Meteo unreachable entirely  -> one static line
//
// Worst case, the joke gets vaguer. Never wronger.
//
// Preview any state: /api/weather?force=<key>
// (or ?wx=<key> on the page itself; the widget forwards it)

export const config = { runtime: "edge" };

// ---------------------------------------------------------------------------
// COPY. Edit freely. {t} interpolates the temperature (F for US visitors).
// Buckets with more than one line rotate randomly.
// ---------------------------------------------------------------------------

const VISITOR: Record<string, string[]> = {
  extreme: ["{t}°. Forget everything I said about going outside. Hydrate."],
  hot: ["{t}° and sunny. Even I think you should close this tab."],
  mild: ["Clear and {t}°. You've reached the end of this site anyway. Go."],
  coldclear: ["Cold and bright. Coffee-walk weather. Take the long way."],
  overcast: ["Grey out. The sky is one big softbox. Go shoot something."],
  drizzle: ["Drizzle. Even the sky won't commit today."],
  rain: [
    "Raining. Perfect weather to finally finish that thing. You know the one.",
    "Raining. Go out anyway. There's no bad weather, only bad jackets.",
  ],
  storm: ["Storm outside. Free lighting design. Watch it from indoors."],
  snow: ["Snowing? I'd already be gone."],
  fog: ["Fog. The world's at 20% opacity. Wait for it to load."],
  night: ["{t}° and dark. Nothing here can't wait till morning."],
};

// When the visitor's sky is unreadable, check mine instead.
// Line = opener (why yours failed) + status (what mine says about replies).
const OPENER = {
  vpn: "Can't read your weather through that VPN. Respect.",
  unknown: "Couldn't read your sky.",
} as const;

const HOME_STATUS = {
  offshore: "Meanwhile it's offshore here. Replies may be slow.",
  clear: "It's sunny here, so I might be outside. Leave a message.",
  rain: "It's raining here, so I'm at the desk. Good time to email.",
  grey: "Grey here. I'm at the desk. Email lands quick today.",
  night: "It's dark here. Replies resume at first light.",
} as const;

const DOWN =
  "Couldn't read any weather, yours or mine. Assume it's nice. Act accordingly.";

// Meteocon filenames (uploads/weather/<icon>.svg) per bucket/status.
const ICONS: Record<string, string> = {
  extreme: "thermometer-warmer",
  hot: "clear-day",
  mild: "clear-day",
  coldclear: "thermometer-colder",
  overcast: "overcast",
  drizzle: "drizzle",
  rain: "rain",
  storm: "thunderstorms-rain",
  snow: "snow",
  fog: "fog",
  night: "clear-night",
};
const HOME_ICONS: Record<keyof typeof HOME_STATUS, string> = {
  offshore: "wind",
  clear: "clear-day",
  rain: "rain",
  grey: "overcast",
  night: "clear-night",
};
const DOWN_ICON = "not-available";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

// Home coordinates (Donostia). Never shown to the visitor.
const HOME = { lat: 43.32, lon: -1.98 };

// North-facing beaches: offshore wind blows from the south.
const OFFSHORE = { from: 140, to: 220, minSpeed: 4 }; // degrees, km/h

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

type Payload = { line: string; icon: string };

export default async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const force = url.searchParams.get("force");

  let out: Payload;
  try {
    out = force ? await forced(force) : await live(req, url);
  } catch {
    out = { line: DOWN, icon: DOWN_ICON };
  }

  return new Response(JSON.stringify(out), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      // Per-visitor content: never share via CDN cache.
      "cache-control": "private, max-age=900",
    },
  });
}

// ---------------------------------------------------------------------------
// Modes
// ---------------------------------------------------------------------------

async function live(req: Request, url: URL): Promise<Payload> {
  const h = req.headers;
  const lat = h.get("x-vercel-ip-latitude");
  const lon = h.get("x-vercel-ip-longitude");
  const ipTz = h.get("x-vercel-ip-timezone");
  const browserTz = url.searchParams.get("tz");
  const useF = h.get("x-vercel-ip-country") === "US";

  // Browser timezone disagrees with IP timezone -> someone's tunneling.
  const tunneling = Boolean(browserTz && ipTz && browserTz !== ipTz);

  if (!lat || !lon) return homeLine("unknown");
  if (tunneling) return homeLine("vpn");

  try {
    return visitorLine(await meteo(lat, lon), useF);
  } catch {
    return homeLine("unknown"); // their fetch failed; fall back to mine
  }
}

function visitorLine(cur: Current, useF: boolean): Payload {
  const key = bucket(cur.weather_code, cur.temperature_2m, cur.is_day === 1);
  return {
    line: fill(pick(VISITOR[key]), cur.temperature_2m, useF),
    icon: ICONS[key] ?? DOWN_ICON,
  };
}

async function homeLine(reason: keyof typeof OPENER): Promise<Payload> {
  const status = homeStatus(await meteo(HOME.lat, HOME.lon));
  return {
    line: `${OPENER[reason]} ${HOME_STATUS[status]}`,
    icon: HOME_ICONS[status],
  };
}

// ---------------------------------------------------------------------------
// Weather -> bucket mapping
// ---------------------------------------------------------------------------

// WMO weather codes, visitor side.
function bucket(code: number, tempC: number, isDay: boolean): string {
  if (code >= 95) return "storm";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "rain";
  if ([51, 53, 55, 56, 57].includes(code)) return "drizzle";
  if ([45, 48].includes(code)) return "fog";
  if (code === 3) return "overcast";

  // Clear-ish (0, 1, 2) from here down.
  if (!isDay) return "night";
  if (tempC >= 35) return "extreme";
  if (tempC >= 28) return "hot";
  if (tempC >= 12) return "mild";
  return "coldclear";
}

// My side: weather as availability status.
function homeStatus(cur: Current): keyof typeof HOME_STATUS {
  const code = cur.weather_code;
  const wet = code >= 51;

  if (cur.is_day !== 1) return "night";
  if (
    !wet &&
    code <= 3 &&
    cur.wind_direction_10m >= OFFSHORE.from &&
    cur.wind_direction_10m <= OFFSHORE.to &&
    cur.wind_speed_10m >= OFFSHORE.minSpeed
  ) {
    return "offshore";
  }
  if (code <= 2) return "clear";
  if (wet) return "rain";
  return "grey";
}

// ---------------------------------------------------------------------------
// Open-Meteo (keyless)
// ---------------------------------------------------------------------------

type Current = {
  temperature_2m: number;
  weather_code: number;
  is_day: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
};

async function meteo(lat: string | number, lon: string | number): Promise<Current> {
  const u =
    "https://api.open-meteo.com/v1/forecast" +
    `?latitude=${lat}&longitude=${lon}` +
    "&current=temperature_2m,weather_code,is_day,wind_speed_10m,wind_direction_10m";

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 3500);
  try {
    const r = await fetch(u, { signal: ctrl.signal });
    if (!r.ok) throw new Error(`open-meteo ${r.status}`);
    const j = await r.json();
    if (!j?.current) throw new Error("open-meteo: missing current block");
    return j.current as Current;
  } finally {
    clearTimeout(timer);
  }
}

// ---------------------------------------------------------------------------
// Helpers + preview mode
// ---------------------------------------------------------------------------

function fill(line: string, tempC: number, useF: boolean): string {
  const t = Math.round(useF ? (tempC * 9) / 5 + 32 : tempC);
  return line.replace("{t}", String(t));
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ?force= keys:
//   Visitor buckets: extreme hot mild coldclear overcast drizzle rain storm snow fog night
//   Home mode:       vpn | blocked            (live Donostia status)
//                    vpn-offshore, blocked-rain, vpn-night, ...  (pinned status)
//   Static:          down
async function forced(key: string): Promise<Payload> {
  if (key === "down") return { line: DOWN, icon: DOWN_ICON };

  const [mode, status] = key.split("-");
  if (mode === "vpn" || mode === "blocked") {
    const reason = mode === "vpn" ? "vpn" : "unknown";
    if (status && status in HOME_STATUS) {
      const s = status as keyof typeof HOME_STATUS;
      return { line: `${OPENER[reason]} ${HOME_STATUS[s]}`, icon: HOME_ICONS[s] };
    }
    return homeLine(reason);
  }

  if (key in VISITOR) {
    const sampleTemp: Record<string, number> = {
      extreme: 38,
      hot: 31,
      mild: 21,
      coldclear: 5,
      night: 16,
    };
    return {
      line: fill(pick(VISITOR[key]), sampleTemp[key] ?? 20, false),
      icon: ICONS[key] ?? DOWN_ICON,
    };
  }

  return { line: DOWN, icon: DOWN_ICON };
}
