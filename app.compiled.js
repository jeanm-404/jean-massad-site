function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, ReactDOM */
const {
  useState,
  useMemo,
  useRef,
  useEffect
} = React;

// Hand-painted ".md" — dot, then m (three humps), then d.
// Same brush as the old ".com": 2.8 stroke, round caps, tiny wobble.
function MdMark({
  className
}) {
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 44 32",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "24",
    r: "2.6",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(-38 0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M51 24 c-0.1 -2.6 -0.2 -5.2 -0.1 -7.8 c0 -1 0 -2 0.1 -3 m-0.2 3.2 c0.7 -1.6 2.7 -2.5 4.3 -1.8 c1.5 0.7 2.3 2.4 1.9 4 c0 1.8 0 3.6 0 5.4 m0 -5.6 c0.5 -1.7 2.5 -2.7 4.2 -2.2 c1.7 0.6 2.7 2.5 2.1 4.2 c0 1.2 0 2.4 0 3.6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M37 7.5 c0.4 5.3 0.5 10.7 0.3 16.1 m-0.2 -8.4 c-0.7 -1.7 -2.7 -2.6 -4.4 -2 c-1.8 0.7 -2.7 2.7 -2.1 4.5 c0.6 1.8 2.5 2.8 4.3 2.3 c1.5 -0.4 2.4 -1.9 2.2 -3.4",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

// Brand marks for the intro chips
function KonpoMark({
  className
}) {
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 62 62",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.5752 33.9356C21.0719 33.9356 27.1493 40.0131 27.1494 47.5098C27.1494 55.0066 21.072 61.084 13.5752 61.084C6.07832 61.084 0.000976562 55.0067 0.000976562 47.5098C0.00114046 40.0131 6.07843 33.9356 13.5752 33.9356ZM37.9141 37.9112C43.213 32.609 51.8074 32.612 57.1094 37.9112C62.4114 43.2105 62.4112 51.8059 57.1094 57.1084C51.8104 62.411 43.2161 62.4078 37.9141 57.1084C32.612 51.809 32.612 43.2137 37.9141 37.9112ZM13.5742 3.8115e-05C20.6616 3.8115e-05 26.4782 5.43181 27.0928 12.3594C21.0431 13.8702 16.5617 19.3408 16.5615 25.8584C16.5615 26.1783 16.5725 26.4961 16.5938 26.8106C15.6226 27.0312 14.6121 27.1485 13.5742 27.1485C6.07738 27.1484 0 21.0711 0 13.5743C3.55627e-05 6.07744 6.0774 7.36788e-05 13.5742 3.8115e-05ZM37.9131 3.97562C43.212 -1.32673 51.8064 -1.32368 57.1084 3.97562C62.4105 9.27503 62.4105 17.8704 57.1084 23.1729C53.6507 26.6329 48.7901 27.8329 44.3564 26.7774C44.3762 26.4737 44.3887 26.1671 44.3887 25.8584C44.3885 19.388 39.9714 13.9493 33.9883 12.3926C34.2552 9.32257 35.5632 6.32569 37.9131 3.97562Z"
  }));
}
function SurgeMark({
  className
}) {
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 30 42",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M28.7014 21.9551C27.8928 20.5552 26.6771 19.4347 25.216 18.7429C23.7549 18.051 22.1177 17.8206 20.5224 18.0822L25.7835 15.0449C26.6892 14.5224 27.4831 13.8266 28.1199 12.9973C28.7567 12.1679 29.2239 11.2213 29.4949 10.2114C29.7658 9.20146 29.8352 8.14807 29.6991 7.11134C29.5629 6.07462 29.2239 5.07486 28.7014 4.16916C28.1789 3.26345 27.4831 2.46953 26.6537 1.83273C25.8244 1.19593 24.8777 0.728712 23.8678 0.45776C22.8579 0.186809 21.8045 0.117428 20.7678 0.253578C19.7311 0.389727 18.7313 0.728741 17.8256 1.25126L4.02971 9.20916C2.40974 10.1363 1.16721 11.6034 0.519375 13.3538C-0.128465 15.1043 -0.140391 17.0268 0.485682 18.7852C1.11175 20.5435 2.33599 22.0259 3.94432 22.9731C5.55266 23.9202 7.44275 24.2719 9.28412 23.9666L4.02307 27.0039C3.11664 27.526 2.32204 28.2217 1.68471 29.0512C1.04739 29.8806 0.579851 30.8276 0.308843 31.8379C0.0378341 32.8483 -0.031327 33.9021 0.105316 34.9392C0.241959 35.9763 0.581725 36.9762 1.10518 37.8819C1.62746 38.7881 2.32328 39.5825 3.15284 40.2196C3.9824 40.8567 4.92941 41.3241 5.93973 41.5949C6.95004 41.8657 8.00383 41.9346 9.04082 41.7978C10.0778 41.661 11.0777 41.3211 11.9832 40.7976L25.7769 32.8397C26.6831 32.3174 27.4775 31.6216 28.1146 30.792C28.7517 29.9625 29.219 29.0154 29.4898 28.0051C29.7606 26.9948 29.8296 25.941 29.6928 24.904C29.556 23.8671 29.2161 22.8672 28.6925 21.9617L28.7014 21.9551Z"
  }));
}
function ScrollNav() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // reveal only when scrolling back up (with a little hysteresis so
    // momentum wobble doesn't flicker it), hide on the way down
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y <= 180) setVisible(false);else if (y < lastY - 4) setVisible(true);else if (y > lastY + 4) setVisible(false);
      lastY = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: `scroll-nav ${visible ? 'scroll-nav--on' : ''}`,
    "aria-hidden": !visible
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-nav-blur",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "scroll-nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "scroll-nav-avatar",
    "aria-label": "Back to top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block-portrait block-portrait--jean scroll-nav-portrait"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "scroll-nav-name",
    "aria-label": "jean dot md"
  }, /*#__PURE__*/React.createElement("span", {
    className: "scroll-nav-name-text"
  }, "jean"), /*#__PURE__*/React.createElement(MdMark, {
    className: "scroll-nav-dotcom"
  })), /*#__PURE__*/React.createElement("div", {
    className: "scroll-nav-spacer"
  })));
}

// ─────────────────────────────────────────────────────────────
// Velvet UI "Signature" voice — ui.confirm (success) chime.
// Ported from velvet-ui's live-synthesis engine: two rising hits
// + a sparkle tone, synthesized fresh each play (small pitch and
// volume jitter), through a short noise-burst reverb.
// ─────────────────────────────────────────────────────────────
const SIGNATURE = {
  baseHz: 118,
  decayMs: 46,
  attackMs: 1,
  waveform: 'sine',
  bodyDropPct: 9,
  bodyLp: 540,
  transient: {
    amt: 0.16,
    hz: 420,
    shape: 'lowpass',
    ms: 12
  },
  sub: 0.23,
  pitchVarPct: 2,
  volJitterPct: 5,
  reverbWet: 0.18,
  layerSpreadMs: 3
};
const UI_CONFIRM = {
  hits: [{
    pitch: 1.04,
    gain: 0.56,
    glide: 1.03
  }, {
    dt: 0.104,
    pitch: 1.68,
    gain: 0.5,
    glide: 1.1
  }],
  tone: {
    dt: 0.106,
    pitch: 4.9,
    gain: 0.085,
    decay: 1.3,
    glide: 1.04,
    jitter: 0.08
  },
  decay: 1.72,
  reverb: 0.92,
  transient: 0.42,
  sub: 0.28
};
let _actx = null,
  _master = null,
  _reverb = null,
  _noise = null;
const rand = (a, b) => a + Math.random() * (b - a);
function initAudio() {
  if (_actx) {
    if (_actx.state === 'suspended') _actx.resume();
    return;
  }
  _actx = new (window.AudioContext || window.webkitAudioContext)();
  const comp = _actx.createDynamicsCompressor();
  comp.connect(_actx.destination);
  _master = _actx.createGain();
  _master.gain.value = 1;
  _master.connect(comp);
  // Short decaying noise burst as the reverb impulse
  const irLen = Math.floor(0.1 * _actx.sampleRate);
  const ir = _actx.createBuffer(2, irLen, _actx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = ir.getChannelData(ch);
    for (let i = 0; i < irLen; i++) d[i] = (2 * Math.random() - 1) * Math.pow(1 - i / irLen, 3);
  }
  _reverb = _actx.createConvolver();
  _reverb.buffer = ir;
  const lp = _actx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = 2200;
  const wet = _actx.createGain();
  wet.gain.value = 1;
  _reverb.connect(lp);
  lp.connect(wet);
  wet.connect(comp);
  // White-noise buffer for transients
  const nLen = Math.floor(0.2 * _actx.sampleRate);
  _noise = _actx.createBuffer(1, nLen, _actx.sampleRate);
  const nd = _noise.getChannelData(0);
  for (let i = 0; i < nLen; i++) nd[i] = 2 * Math.random() - 1;
}
function playHit(at, v, ev, hit) {
  const ctx = _actx;
  const detune = rand(-v.pitchVarPct, v.pitchVarPct) / 100;
  const freq = v.baseHz * (hit.pitch || 1) * (1 + detune);
  const gain = 0.8 * (hit.gain || 1) * (1 + rand(-v.volJitterPct, v.volJitterPct) / 100);
  const atk = Math.max(0.001, v.attackMs / 1000);
  const dec = v.decayMs / 1000 * (ev.decay || 1);
  const rise = Math.max(atk, 0.003);
  const tail = Math.max(0.006, Math.min(0.018, 0.22 * dec));
  const spread = Math.max(0, (v.layerSpreadMs + rand(-1, 1)) / 1000);
  const trAmt = v.transient.amt * (ev.transient !== undefined ? ev.transient : 1);
  const subAmt = v.sub * (ev.sub !== undefined ? ev.sub : 1);
  const wetAmt = Math.min(0.6, v.reverbWet * (ev.reverb || 1));
  const bus = ctx.createGain();
  bus.gain.value = 1;
  bus.connect(_master);
  if (wetAmt > 0.001) {
    const send = ctx.createGain();
    send.gain.value = wetAmt;
    bus.connect(send);
    send.connect(_reverb);
  }

  // Transient — filtered noise tick
  if (trAmt > 0.02) {
    const src = ctx.createBufferSource();
    src.buffer = _noise;
    const f = ctx.createBiquadFilter();
    f.type = v.transient.shape;
    f.frequency.value = v.transient.hz;
    f.Q.value = v.transient.shape === 'lowpass' ? 0.5 : 0.8;
    const g = ctx.createGain();
    g.gain.setValueAtTime(1e-4, at);
    g.gain.linearRampToValueAtTime(trAmt * gain * 0.6, at + 0.0015);
    g.gain.exponentialRampToValueAtTime(1e-4, at + 0.0015 + v.transient.ms / 1000);
    src.connect(f);
    f.connect(g);
    g.connect(bus);
    src.start(at);
    src.stop(at + 0.06);
  }

  // Body — sine with downward glide through a lowpass
  const t0 = at + spread;
  const osc = ctx.createOscillator();
  osc.type = v.waveform;
  osc.frequency.setValueAtTime(freq, t0);
  const glideTo = hit.glide ? freq * hit.glide : Math.max(40, freq * (1 - v.bodyDropPct / 100));
  osc.frequency.exponentialRampToValueAtTime(glideTo, t0 + atk + 0.7 * dec);
  const bodyLp = ctx.createBiquadFilter();
  bodyLp.type = 'lowpass';
  bodyLp.frequency.value = v.bodyLp;
  bodyLp.Q.value = 0.5;
  const bodyG = ctx.createGain();
  bodyG.gain.setValueAtTime(0, t0);
  bodyG.gain.linearRampToValueAtTime(gain, t0 + rise);
  bodyG.gain.exponentialRampToValueAtTime(8e-4, t0 + rise + dec);
  bodyG.gain.linearRampToValueAtTime(1e-4, t0 + rise + dec + tail);
  osc.connect(bodyLp);
  bodyLp.connect(bodyG);
  bodyG.connect(bus);
  osc.start(t0);
  osc.stop(t0 + rise + dec + tail + 0.05);

  // Sub — octave-down support
  if (subAmt > 0.01) {
    const t1 = at + 2 * spread;
    const r1 = Math.max(rise + 0.004, 0.008);
    const sub = ctx.createOscillator();
    sub.type = 'sine';
    sub.frequency.value = freq / 2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t1);
    g.gain.linearRampToValueAtTime(subAmt * gain, t1 + r1);
    g.gain.exponentialRampToValueAtTime(8e-4, t1 + r1 + dec);
    g.gain.linearRampToValueAtTime(1e-4, t1 + r1 + dec + tail);
    sub.connect(g);
    g.connect(bus);
    sub.start(t1);
    sub.stop(t1 + r1 + dec + tail + 0.05);
  }

  // Sparkle tone — high partial that gives the "success" lift
  if (ev.tone) {
    const t = ev.tone;
    const jit = detune * (t.jitter !== undefined ? t.jitter : 0.35);
    const tAt = at + (t.dt || 0);
    const tDec = dec * (t.decay || 1);
    const tFreq = v.baseHz * t.pitch * (1 + jit);
    const tGlide = t.glide ? tFreq * t.glide : 0.98 * tFreq;
    const tOsc = ctx.createOscillator();
    tOsc.type = 'sine';
    tOsc.frequency.setValueAtTime(tFreq, tAt);
    tOsc.frequency.exponentialRampToValueAtTime(tGlide, tAt + tDec);
    const tLp = ctx.createBiquadFilter();
    tLp.type = 'lowpass';
    tLp.frequency.value = Math.max(880, Math.min(2400, 2.2 * v.bodyLp));
    tLp.Q.value = 0.45;
    const tG = ctx.createGain();
    tG.gain.setValueAtTime(0, tAt);
    tG.gain.linearRampToValueAtTime(t.gain * gain, tAt + 0.006);
    tG.gain.exponentialRampToValueAtTime(8e-4, tAt + 0.006 + tDec);
    tG.gain.linearRampToValueAtTime(1e-4, tAt + 0.006 + tDec + tail);
    tOsc.connect(tLp);
    tLp.connect(tG);
    tG.connect(bus);
    tOsc.start(tAt);
    tOsc.stop(tAt + 0.006 + tDec + tail + 0.05);
  }
}

// toggle.off — the settle-down counterpart (also from velvet's map)
const TOGGLE_OFF = {
  hits: [{
    pitch: 0.87,
    gain: 0.46,
    glide: 0.975
  }],
  decay: 0.32,
  transient: 0.42,
  sub: 0.24,
  reverb: 0.22
};

// state.change — velvet's soft single-hit tick, quieter than ui.confirm.
// Rising for a project unfolding, falling for it tucking back in.
const STATE_UP = {
  hits: [{
    pitch: 1.22,
    gain: 0.4,
    glide: 1.06
  }],
  decay: 0.55,
  transient: 0.5,
  sub: 0.18,
  reverb: 0.3
};
const STATE_DOWN = {
  hits: [{
    pitch: 1.02,
    gain: 0.36,
    glide: 0.94
  }],
  decay: 0.48,
  transient: 0.5,
  sub: 0.18,
  reverb: 0.26
};
function playEvent(ev) {
  try {
    initAudio();
    if (!_actx) return;
    const now = _actx.currentTime + 0.002;
    ev.hits.forEach(hit => playHit(now + (hit.dt || 0), SIGNATURE, ev, hit));
  } catch (e) {/* sound is a bonus layer, never the message */}
}
function playConfirm() {
  playEvent(UI_CONFIRM);
}
function playToggleOff() {
  playEvent(TOGGLE_OFF);
}
function playStateChange(opening) {
  playEvent(opening ? STATE_UP : STATE_DOWN);
}

// ─── haptics — like the audio, a bonus layer, never the message ───
// Android: Vibration API. iOS Safari 17.4+: no vibrate(), but clicking a
// native `<input type="checkbox" switch>` fires the system haptic tick —
// works from a user gesture and for ~seconds of transient activation after.
let _hapticEl = null;
function ensureHapticEl() {
  if (_hapticEl || typeof document === 'undefined' || !document.body) return;
  _hapticEl = document.createElement('input');
  _hapticEl.type = 'checkbox';
  _hapticEl.setAttribute('switch', '');
  _hapticEl.setAttribute('aria-hidden', 'true');
  _hapticEl.tabIndex = -1;
  // iOS only ticks when the control is INSIDE the viewport — offscreen
  // (left:-99px) or display:none silences it. 1px, invisible, top-left.
  _hapticEl.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;margin:0;padding:0;border:0;pointer-events:none;z-index:-1';
  document.body.appendChild(_hapticEl);
}
function haptic(ms = 12) {
  try {
    if (navigator.vibrate) {
      navigator.vibrate(ms);
      return;
    }
    ensureHapticEl();
    if (_hapticEl) _hapticEl.click(); // iOS: fixed-intensity tick, ms is ignored
  } catch (e) {/* no haptics — fine */}
}

// ─────────────────────────────────────────────────────────────
// Gate — the site opens dark with a single light switch.
// Flipping it floods the page white and starts the reveal.
// ─────────────────────────────────────────────────────────────
// ─── the blueprint sheet: traced from the REAL page ─────────────
// The site is already laid out behind the gate (held at opacity 0 by
// data-reveal="pending"), so the draft measures the actual DOM: every
// text line of the headline / lede / bio, the eyebrow chips, the
// elsewhere rows, any tile inside the viewport, plus the frame's true
// width. When the flood comes, the content lands exactly where its
// block was drawn.
// the whiteboard frame = the container's CONTENT box: its top-left
// corner is the rulers' origin, its width the blueprint's dimension
function frameRect() {
  const cont = document.querySelector('.container');
  if (!cont) return null;
  const b = cont.getBoundingClientRect();
  const cs = getComputedStyle(cont);
  const pl = parseFloat(cs.paddingLeft) || 0;
  const pr = parseFloat(cs.paddingRight) || 0;
  const pt = parseFloat(cs.paddingTop) || 0;
  return {
    x: b.left + pl,
    y: b.top + pt,
    w: b.width - pl - pr,
    h: b.height - pt
  };
}
function lineRects(el) {
  if (!el) return [];
  const range = document.createRange();
  range.selectNodeContents(el);
  const lines = [];
  Array.from(range.getClientRects()).forEach(r => {
    if (r.width < 1 || r.height < 1) return;
    const l = lines.find(L => Math.abs(L.top - r.top) < r.height * 0.6);
    if (l) {
      l.left = Math.min(l.left, r.left);
      l.right = Math.max(l.right, r.right);
      l.top = Math.min(l.top, r.top);
      l.bottom = Math.max(l.bottom, r.bottom);
    } else lines.push({
      left: r.left,
      right: r.right,
      top: r.top,
      bottom: r.bottom
    });
  });
  return lines.map(L => ({
    x: L.left,
    y: L.top,
    w: L.right - L.left,
    h: L.bottom - L.top
  }));
}
function measureBlueprint() {
  const vh = window.innerHeight;
  const blocks = [];
  const push = (kind, i, r) => {
    if (!r || r.w < 1 || r.h < 1 || r.y > vh + 24 || r.y + r.h < -24) return;
    blocks.push({
      kind,
      i,
      x: Math.round(r.x),
      y: Math.round(r.y),
      w: Math.round(r.w),
      h: Math.round(r.h)
    });
  };
  const rect = el => {
    if (!el) return null;
    const b = el.getBoundingClientRect();
    return {
      x: b.left,
      y: b.top,
      w: b.width,
      h: b.height
    };
  };
  const q = s => document.querySelector(s);
  const qa = s => Array.from(document.querySelectorAll(s));
  // `i` is the draw order (stagger group), top of the page first
  qa('.headline-eyebrow .chip').forEach(el => push('control', 0, rect(el)));
  lineRects(q('.headline')).forEach((r, k) => push('head', 1 + Math.min(k, 1), r));
  lineRects(q('.intro-heading')).forEach(r => push('text', 3, r));
  // the four folds: the list's top rule, then each row's label, + glyph
  // and the hairline under it (collapsed — that's how the page lands)
  const folds = q('.folds');
  if (folds) {
    const r = rect(folds);
    push('line', 4, {
      x: r.x,
      y: r.y,
      w: r.w,
      h: 1
    });
  }
  qa('.fold').forEach((li, k) => {
    const g = 4 + Math.min(k, 1);
    lineRects(li.querySelector('.fold-label')).forEach(t => push('text', g, t));
    push('control', g, rect(li.querySelector('.fold-glyph')));
    const r = rect(li);
    if (r) push('line', g, {
      x: r.x,
      y: r.y + r.h - 1,
      w: r.w,
      h: 1
    });
  });
  qa('.asset-tile').forEach((el, k) => push('media', 6 + Math.min(k, 2), rect(el)));
  return {
    blocks,
    frame: frameRect()
  };
}
function Gate({
  onEnter,
  entering,
  count = 1,
  blueprint = false
}) {
  const [on, setOn] = useState(false); // click registered
  const [lit, setLit] = useState(false); // the switch finally gave in
  const [gone, setGone] = useState(false);
  const [draft, setDraft] = useState(null); // { blocks, frame } while the blueprint beat runs
  const [warm, setWarm] = useState({
    done: WARM.done,
    total: WARM.total
  });
  const knobRefs = useRef([]); // one knob per switch — all move as one
  const inputRef = useRef(null);

  // warmup progress feeds the sheet's counter
  useEffect(() => {
    const onWarm = w => setWarm({
      done: w.done,
      total: w.total
    });
    WARM.listeners.add(onWarm);
    return () => WARM.listeners.delete(onWarm);
  }, []);
  // the page rulers highlight the frame's extent while the draft is up
  useEffect(() => {
    document.documentElement.classList.toggle('bp-draft', !!draft);
    return () => document.documentElement.classList.remove('bp-draft');
  }, [draft]);

  // Delayed ticks are Android-only (vibrate). iOS gates ALL synthetic
  // switch clicks — confirmed on-device — so there the choreography is
  // just the native tap tick; no point re-clicking anything.
  const tick = ms => {
    try {
      if (navigator.vibrate) navigator.vibrate(ms);
    } catch (e) {/* fine */}
  };
  const flip = () => {
    if (on) return;
    setOn(true);
    const knobs = knobRefs.current.filter(Boolean);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // The knob struggles: shoves forward, slips back, strains, loses
    // grip, then breaks free. The lights only come on when it lands.
    // With a multiplied gate, EVERY knob runs the struggle in unison.
    const SUCCESS = reduced || !window.__anime ? 0 : 1350;
    // Haptics follow the struggle. The press tick comes from the native
    // switch itself; these are the slips and the win.
    if (SUCCESS > 0) {
      setTimeout(() => tick(8), 300); // slips back
      setTimeout(() => tick(8), 960); // loses grip
    }
    setTimeout(() => tick(24), SUCCESS); // breaks free — lights on
    knobs.forEach(knob => {
      if (reduced) {
        knob.style.transform = 'translateX(52px)';
      } else if (window.__anime) {
        window.__anime.animate(knob, {
          x: [{
            to: 15,
            duration: 300,
            ease: 'outQuad'
          },
          // first shove
          {
            to: 4,
            duration: 280,
            ease: 'outQuad'
          },
          // slips back
          {
            to: 33,
            duration: 380,
            ease: 'inOutQuad'
          },
          // strains harder
          {
            to: 21,
            duration: 240,
            ease: 'outQuad'
          },
          // loses grip
          {
            to: 52,
            duration: 420,
            ease: 'outBounce'
          } // breaks free
          ]
        });
      } else {
        // CDN fallback: plain CSS transition
        knob.style.transition = 'transform .45s cubic-bezier(.3, .8, .3, 1)';
        knob.style.transform = 'translateX(52px)';
      }
    });
    // Success: track fills, chime plays, the page floods in
    const flood = () => {
      setLit(true);
      playConfirm();
      // the page starts landing while the blue is still lifting — the
      // blueprint hands straight over to the content it traced
      setTimeout(onEnter, 250);
      setTimeout(() => setGone(true), 1100);
    };
    if (!blueprint || reduced) {
      setTimeout(flood, SUCCESS);
      return;
    }
    // First visit: the DRAFT beat between the knob landing and the
    // flood. The switch steps aside and the page gets drawn on the
    // blue like a Figma sheet — rulers, 100px grid, hatched wireframe —
    // while the asset warmup finishes behind it. Held at least MIN so
    // the drawing reads, stretched until the warmup is done, never
    // past MAX (a slow network must not hold the door).
    setTimeout(() => {
      setDraft(measureBlueprint());
      // ?bp=hold parks the sheet for design review — any click floods
      if (new URLSearchParams(window.location.search).get('bp') === 'hold') {
        window.addEventListener('pointerdown', flood, {
          once: true
        });
        return;
      }
      const t0 = performance.now();
      const MIN = 1700,
        MAX = 2800;
      const check = () => {
        const el = performance.now() - t0;
        const warmDone = WARM.total === 0 || WARM.done >= WARM.total;
        if (el >= MAX || el >= MIN && warmDone) flood();else setTimeout(check, 100);
      };
      check();
    }, SUCCESS + 180);
  };
  const pad = n => String(n).padStart(3, '0');
  const warmDone = warm.total > 0 && warm.done >= warm.total;
  if (gone) return null;
  // A real native switch input (invisible, full-size) sits under the
  // finger: on iOS the tap toggles an actual switch control, so the
  // system haptic fires natively — no programmatic .click() to gate.
  // Each return trip doubles the field (2, 4, 8 …) — flipping ANY
  // switch flips them ALL: one shared `on/lit` state, one knob anim.
  return /*#__PURE__*/React.createElement("div", {
    className: `gate ${lit ? 'gate--on' : ''} ${entering ? 'gate--fadein' : ''} ${draft ? 'gate--draft' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `gate-field ${count > 1 ? 'gate-field--many' : ''}`
  }, Array.from({
    length: count
  }, (_, i) => /*#__PURE__*/React.createElement("label", {
    key: i,
    className: `gate-toggle ${lit ? 'gate-toggle--on' : ''}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    switch: "",
    className: "gate-toggle-input",
    ref: i === 0 ? inputRef : undefined,
    checked: on,
    onChange: flip,
    "aria-label": "Turn on the lights"
  }), /*#__PURE__*/React.createElement("span", {
    className: "gate-toggle-knob",
    ref: el => {
      knobRefs.current[i] = el;
    }
  })))), draft && /*#__PURE__*/React.createElement("div", {
    className: "bp-stage",
    "aria-hidden": "true"
  }, draft.frame && /*#__PURE__*/React.createElement("div", {
    className: "bp-dim",
    style: {
      top: Math.max(34, draft.frame.y - 14),
      left: draft.frame.x,
      width: draft.frame.w
    }
  }, /*#__PURE__*/React.createElement("b", null, Math.round(draft.frame.w))), draft.blocks.map((b, k) => /*#__PURE__*/React.createElement("i", {
    key: k,
    className: `bp-block bp-block--${b.kind}`,
    style: {
      '--i': b.i,
      left: b.x,
      top: b.y,
      width: b.w,
      height: b.h
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "bp-fig"
  }, "FIG_000 \xB7 DRAFT"), /*#__PURE__*/React.createElement("span", {
    className: "bp-progress"
  }, warmDone ? 'ASSETS WARM ✓' : `WARMING ASSETS ${pad(warm.done)}/${pad(warm.total)}`)));
}

// ─── rulers — Figma's, on the whiteboard ───────────────────────
// Fixed strips along the top + left edge: minor ticks every 10px,
// majors every 100px, numbers just past each major (the vertical ones
// read bottom-to-top). Origin (0,0) = the frame's top-left corner, so
// the x-axis runs negative into the left margin and the y-axis counts
// down the page as you scroll. White on the gate's blue, hairline grey
// on paper; ≤900px they only live while the gate is up. The origin is
// also published as html vars so the gate's grid phase-locks to it.
// A cursor tracker rides both strips (Photoshop's ruler marker): a blue
// hair at the pointer's x / y with its frame coordinate. It is driven
// straight through the DOM (--cx/--cy + textContent), never a
// re-render per mousemove; the y readout also refreshes on scroll.
function Rulers() {
  const [m, setM] = useState({
    x0: 0,
    oy: 0,
    w: window.innerWidth,
    h: window.innerHeight,
    fw: 0
  });
  const rootRef = useRef(null);
  const cxRef = useRef(null);
  const cyRef = useRef(null);
  useEffect(() => {
    let raf = 0,
      ptrRaf = 0;
    const origin = {
      x0: 0,
      oy: 0
    };
    const ptr = {
      x: -1,
      y: -1,
      on: false
    };
    const track = () => {
      ptrRaf = 0;
      const root = rootRef.current;
      if (!root) return;
      root.classList.toggle('rulers--track', ptr.on);
      if (!ptr.on) return;
      root.style.setProperty('--cx', `${ptr.x}px`);
      root.style.setProperty('--cy', `${ptr.y}px`);
      if (cxRef.current) cxRef.current.textContent = Math.round(ptr.x - origin.x0);
      if (cyRef.current) cyRef.current.textContent = Math.round(ptr.y - origin.oy);
    };
    const queueTrack = () => {
      if (!ptrRaf) ptrRaf = requestAnimationFrame(track);
    };
    const measure = () => {
      raf = 0;
      const r = frameRect() || {
        x: 0,
        y: 0,
        w: 0
      };
      const x0 = Math.round(r.x);
      const oy = Math.round(r.y); // the origin's current viewport y
      origin.x0 = x0;
      origin.oy = oy;
      setM({
        x0,
        oy,
        w: window.innerWidth,
        h: window.innerHeight,
        fw: Math.round(r.w)
      });
      const html = document.documentElement.style;
      html.setProperty('--x0', `${x0}px`);
      html.setProperty('--y0v', `${oy}px`);
      queueTrack();
    };
    const queue = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    const move = e => {
      if (e.pointerType && e.pointerType !== 'mouse') return; // no cursor to track on touch
      ptr.x = e.clientX;
      ptr.y = e.clientY;
      ptr.on = true;
      queueTrack();
    };
    const leave = () => {
      ptr.on = false;
      queueTrack();
    };
    measure();
    const late = setTimeout(measure, 1300); // after snap() settles the frame width
    window.addEventListener('scroll', queue, {
      passive: true
    });
    window.addEventListener('resize', queue);
    window.addEventListener('load', queue);
    window.addEventListener('pointermove', move, {
      passive: true
    });
    document.documentElement.addEventListener('pointerleave', leave);
    window.addEventListener('blur', leave);
    return () => {
      clearTimeout(late);
      cancelAnimationFrame(raf);
      cancelAnimationFrame(ptrRaf);
      window.removeEventListener('scroll', queue);
      window.removeEventListener('resize', queue);
      window.removeEventListener('load', queue);
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
      window.removeEventListener('blur', leave);
    };
  }, []);
  const labels = (size, origin) => {
    const out = [];
    for (let v = Math.ceil(-origin / 100) * 100; v <= size - origin; v += 100) out.push(v);
    return out;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "rulers",
    ref: rootRef,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ruler ruler--x",
    style: {
      '--o': `${m.x0}px`
    }
  }, labels(m.w, m.x0).map(v => /*#__PURE__*/React.createElement("span", {
    key: v,
    style: {
      left: m.x0 + v
    }
  }, v)), /*#__PURE__*/React.createElement("i", {
    className: "ruler-sel",
    style: {
      left: m.x0,
      width: m.fw
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: "ruler-cursor"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ruler-cursor-val",
    ref: cxRef
  })), /*#__PURE__*/React.createElement("div", {
    className: "ruler ruler--y",
    style: {
      '--o': `${m.oy}px`
    }
  }, labels(m.h, m.oy).map(v => /*#__PURE__*/React.createElement("span", {
    key: v,
    style: {
      top: m.oy + v
    }
  }, v)), /*#__PURE__*/React.createElement("i", {
    className: "ruler-cursor"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ruler-cursor-val",
    ref: cyRef
  })), /*#__PURE__*/React.createElement("div", {
    className: "ruler-corner"
  }));
}

// "Gimmie More" — outline button at the feed's end: press it and the
// feed deals another hand of shots. (The only switch left down there
// is the lights-out one in the colophon.) Hidden once everything's dealt.
function MoreToggle({
  onMore
}) {
  const [busy, setBusy] = useState(false);
  const pull = () => {
    if (busy) return;
    setBusy(true);
    playStateChange(true); // velvet up-chirp: more is coming
    haptic(10);
    onMore();
    setTimeout(() => setBusy(false), 650);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "more-row"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `more-btn mono ${busy ? 'more-btn--busy' : ''}`,
    onClick: pull,
    "aria-label": "Gimmie more \u2014 load more work"
  }, "GIMMIE MORE"));
}
function App() {
  // Park the iOS haptic switch in the DOM before the first tap ever lands.
  useEffect(() => {
    ensureHapticEl();
    startWarmup();
  }, []);

  // A reload always starts at the top — the gate is the front door, so
  // the browser's scroll restoration would strand you mid-feed behind it.
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);
  const enter = () => {
    document.documentElement.setAttribute('data-reveal', 'go');
  };

  // The lights-out loop: the colophon switch sends you back to the blue
  // loading screen, where the gate switches have DOUBLED (2, 4, 8 … 512).
  // `gateGen` keys the Gate so each return mounts a fresh one; resetting
  // data-reveal makes the whole entrance replay when you flip back in.
  const [gateGen, setGateGen] = useState(0);
  const lightsOut = () => {
    document.documentElement.setAttribute('data-reveal', 'pending');
    window.scrollTo(0, 0); // instant — the blue screen already covers it
    setGateGen(g => g + 1);
  };

  // Snap divider bands to the whiteboard grid: nudge each one down so
  // its top rule sits exactly on a background line. Re-runs when late
  // layout shifts things (fonts, masonry images, resizes).
  useEffect(() => {
    const snap = () => {
      const cell = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--board-cell')) || 32;
      const cont = document.querySelector('.container');
      const vw = document.documentElement.clientWidth;
      // Snap the whiteboard width so BOTH edges and every masonry
      // column edge land on grid lines:
      //   W = (cols·k + (cols-1) + 2·padCells) · cell
      if (cont && vw >= cell * 8) {
        const masonry = document.querySelector('.feed-masonry');
        const cols = masonry ? parseInt(getComputedStyle(masonry).columnCount, 10) || 3 : 3;
        const padCells = Math.round(parseFloat(getComputedStyle(cont).paddingLeft) / cell);
        // the filter rail (5 cells) + its gap (1 cell) sit beside the
        // masonry on desktop; on mobile the rail stacks above it
        const railEl = document.querySelector('.work-rail');
        const railUnits = railEl && vw > 900 ? 6 : 0;
        const maxUnits = Math.floor(Math.min(vw, 1920) / cell);
        const k = Math.floor((maxUnits - (cols - 1) - 2 * padCells - railUnits) / cols);
        const units = cols * k + (cols - 1) + 2 * padCells + railUnits;
        cont.style.maxWidth = `${units * cell}px`;
      }
      // Lock media heights to whole cells (batch reads, then writes)
      const medias = Array.from(document.querySelectorAll('.asset-media'));
      medias.forEach(m => {
        m.style.height = '';
        m.classList.remove('asset-media--locked');
      });
      const heights = medias.map(m => m.getBoundingClientRect().height);
      medias.forEach((m, i) => {
        if (heights[i] > 0) {
          m.style.height = `${Math.max(cell * 3, Math.round(heights[i] / cell) * cell)}px`;
          m.classList.add('asset-media--locked');
        }
      });
      document.querySelectorAll('.board-divider').forEach(d => {
        // the note band keeps a 2-cell base margin (same rhythm as the
        // gap above `elsewhere`) — snap nudges on TOP of it, instead of
        // stomping it to zero like the plain dividers
        const base = d.classList.contains('board-divider--note') ? cell * 2 : 0;
        d.style.marginTop = `${base}px`;
        const y = d.getBoundingClientRect().top + window.scrollY;
        const rem = (y % cell + cell) % cell;
        if (rem > 0.5 && rem < cell - 0.5) d.style.marginTop = `${base + cell - rem}px`;
      });
      // Phase-align the full-width grid pattern to the container origin
      const grid = document.querySelector('.board-grid');
      if (cont && grid) {
        const cr = cont.getBoundingClientRect();
        const gr = grid.getBoundingClientRect();
        const shift = ((cr.left - gr.left) % cell + cell) % cell;
        grid.style.backgroundPositionX = `${shift}px`;
      }
      // Size the paper masks: hero band ends at the first divider,
      // footer band starts at the second
      const divs = document.querySelectorAll('.board-divider');
      const heroCover = document.querySelector('.board-cover--hero');
      const footCover = document.querySelector('.board-cover--foot');
      if (cont && divs.length >= 2 && heroCover && footCover) {
        const contTop = cont.getBoundingClientRect().top + window.scrollY;
        const d0Top = divs[0].getBoundingClientRect().top + window.scrollY;
        const d1Bottom = divs[1].getBoundingClientRect().bottom + window.scrollY;
        heroCover.style.height = `${Math.max(0, d0Top - contTop)}px`;
        footCover.style.top = `${Math.max(0, d1Bottom - contTop - 1)}px`;
      }
    };
    snap();
    const late = setTimeout(snap, 1200);
    window.addEventListener('load', snap);
    window.addEventListener('resize', snap);
    return () => {
      clearTimeout(late);
      window.removeEventListener('load', snap);
      window.removeEventListener('resize', snap);
    };
  }, []);

  // Arm the hover-pop images once the page has loaded and gone idle —
  // keeps ~1.3MB of pop art out of the first paint's way (see the
  // .pops-armed rules in styles.css)
  useEffect(() => {
    let idleId, timeoutId;
    const arm = () => document.body.classList.add('pops-armed');
    const onIdle = () => {
      if ('requestIdleCallback' in window) idleId = requestIdleCallback(arm, {
        timeout: 4000
      });else timeoutId = setTimeout(arm, 2500);
    };
    if (document.readyState === 'complete') onIdle();else window.addEventListener('load', onIdle, {
      once: true
    });
    return () => {
      window.removeEventListener('load', onIdle);
      if (idleId) cancelIdleCallback(idleId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement(Rulers, null), /*#__PURE__*/React.createElement(Gate, {
    key: gateGen,
    entering: gateGen > 0,
    blueprint: gateGen === 0,
    onEnter: enter,
    count: Math.min(1 << gateGen, 512)
  }), /*#__PURE__*/React.createElement("main", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "board-grid",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "board-cover board-cover--hero",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "board-cover board-cover--foot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "board-topline",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(Headline, null), /*#__PURE__*/React.createElement("header", {
    className: "top-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "top-intro"
  }, /*#__PURE__*/React.createElement(Intro, null))), /*#__PURE__*/React.createElement("section", {
    className: "grid-area"
  }, /*#__PURE__*/React.createElement(AssetsFeed, null)), /*#__PURE__*/React.createElement("div", {
    className: "board-divider reveal",
    style: {
      '--reveal-delay': '3600ms'
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      '--reveal-delay': '3800ms'
    }
  }, /*#__PURE__*/React.createElement(Colophon, null))));
}

// ─────────────────────────────────────────────────────────────
// Jean's avatar — hover to expand + glitchy ASCII portrait
// We sample brightness from the avatar PNG once, map each cell to a
// character on a brightness ramp, and on hover render it with subtle
// per-frame glitching: a small % of cells swap to a neighbor char
// each tick.
// ─────────────────────────────────────────────────────────────
// (legacy SDF helpers kept dead-code-eliminated below — unused)

// ─── ASCII portrait sampler ───────────────────────────────────
// Sample brightness from /jean-avatar.png on a cols×rows grid and
// map each cell to a character on a brightness ramp.
const ASCII_RAMP = ' .\'`,:;-~=+*ic?lI/\\()1{}[]rxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B$@';
const ASCII_COLS = 64;
const ASCII_ROWS = 38;
let ASCII_CACHE = null; // base ascii grid (string[rows] of length cols)
let ASCII_LOADING = false;
let ASCII_LISTENERS = [];
function loadAsciiPortrait() {
  if (ASCII_CACHE) return Promise.resolve(ASCII_CACHE);
  return new Promise(resolve => {
    ASCII_LISTENERS.push(resolve);
    if (ASCII_LOADING) return;
    ASCII_LOADING = true;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = ASCII_COLS;
      canvas.height = ASCII_ROWS;
      const ctx = canvas.getContext('2d');
      // contrast bump via filter then draw
      ctx.filter = 'grayscale(1) contrast(1.25) brightness(1.05)';
      ctx.drawImage(img, 0, 0, ASCII_COLS, ASCII_ROWS);
      const data = ctx.getImageData(0, 0, ASCII_COLS, ASCII_ROWS).data;
      const rows = [];
      for (let r = 0; r < ASCII_ROWS; r++) {
        let line = '';
        for (let c = 0; c < ASCII_COLS; c++) {
          const i = (r * ASCII_COLS + c) * 4;
          // luminance
          const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
          // map dark -> dense, light -> sparse (so dark hair is # and light is .)
          const t = 1 - lum / 255;
          const idx = Math.max(0, Math.min(ASCII_RAMP.length - 1, Math.floor(t * (ASCII_RAMP.length - 1))));
          line += ASCII_RAMP[idx];
        }
        rows.push(line);
      }
      ASCII_CACHE = rows;
      ASCII_LISTENERS.forEach(fn => fn(rows));
      ASCII_LISTENERS = [];
    };
    img.onerror = () => {
      ASCII_LISTENERS.forEach(fn => fn(null));
      ASCII_LISTENERS = [];
    };
    img.src = 'jean-avatar.png';
  });
}

// Map a char's index in ASCII_RAMP to a "code editor" color category.
// Mimics VS Code / One Dark syntax tones across the brightness ramp.
function codeColorFor(ch) {
  const i = ASCII_RAMP.indexOf(ch);
  if (ch === ' ' || i < 0) return null;
  const t = i / (ASCII_RAMP.length - 1);
  // 5 buckets across brightness, like syntax categories
  if (t < 0.18) return '#5c6370'; // comment grey (faintest)
  if (t < 0.40) return '#abb2bf'; // foreground default
  if (t < 0.62) return '#61afef'; // function blue
  if (t < 0.80) return '#c678dd'; // keyword purple
  if (t < 0.92) return '#e5c07b'; // accent yellow
  return '#e06c75'; // highlight red (densest)
}

// Render the (possibly glitched) ASCII as colored spans for a code-editor feel.
function colorizeAscii(text) {
  if (!text) return null;
  // group runs of same color into single spans for fewer DOM nodes
  const out = [];
  let buf = '';
  let curColor = null;
  let key = 0;
  const flush = () => {
    if (!buf) return;
    out.push(curColor ? React.createElement('span', {
      key: key++,
      style: {
        color: curColor
      }
    }, buf) : buf);
    buf = '';
  };
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '\n') {
      flush();
      out.push('\n');
      curColor = null;
      continue;
    }
    const color = codeColorFor(ch);
    if (color !== curColor) {
      flush();
      curColor = color;
    }
    buf += ch;
  }
  flush();
  return out;
}
// from the ramp, and add a tiny horizontal jitter on a couple of rows.
function glitchAscii(base, intensity) {
  if (!base) return '';
  const rows = base.length;
  const cols = base[0].length;
  // intensity: 0..1 (target ~3% at full)
  const flipP = 0.030 * intensity;
  const out = [];
  // pick 0–2 jitter rows for this frame
  const jitterRows = new Set();
  if (Math.random() < 0.45) jitterRows.add(Math.floor(Math.random() * rows));
  if (Math.random() < 0.20) jitterRows.add(Math.floor(Math.random() * rows));
  for (let r = 0; r < rows; r++) {
    const src = base[r];
    let line = '';
    const jitter = jitterRows.has(r) ? Math.random() < 0.5 ? -1 : 1 : 0;
    for (let c = 0; c < cols; c++) {
      const sc = c - jitter;
      const ch = sc >= 0 && sc < cols ? src[sc] : ' ';
      if (ch !== ' ' && Math.random() < flipP) {
        // swap to a near-brightness character
        const idx = ASCII_RAMP.indexOf(ch);
        if (idx >= 0) {
          const delta = (Math.random() < 0.5 ? -1 : 1) * (1 + Math.floor(Math.random() * 3));
          const nIdx = Math.max(0, Math.min(ASCII_RAMP.length - 1, idx + delta));
          line += ASCII_RAMP[nIdx];
          continue;
        }
      }
      line += ch;
    }
    out.push(line);
  }
  return out.join('\n');
}

// (legacy: kept so future SDF use doesn't break — unused on this page)
function sdCircle(px, py, cx, cy, r) {
  return Math.hypot(px - cx, py - cy) - r;
}
function sdSubtract(a, b) {
  return Math.max(a, -b);
}
function logoSDF(x, y) {
  const R = 0.34; // circle radius
  const D = 0.42; // half-distance between circle centers
  const BITE_R = 0.20; // bite radius
  // Centers
  const TL = [-D, D];
  const TR = [D, D];
  const BL = [-D, -D];
  const BR = [D, -D];

  // Circles
  let tl = sdCircle(x, y, TL[0], TL[1], R);
  let tr = sdCircle(x, y, TR[0], TR[1], R);
  const bl = sdCircle(x, y, BL[0], BL[1], R);
  const br = sdCircle(x, y, BR[0], BR[1], R);

  // Bites — small circles whose centers sit on the inner-bottom edge of each
  // top circle, taking a chunk out toward the logo center.
  // For TL: bite is positioned toward the center (i.e. lower-right of TL).
  const biteTL = sdCircle(x, y, TL[0] + R * 0.78, TL[1] - R * 0.78, BITE_R);
  const biteTR = sdCircle(x, y, TR[0] - R * 0.78, TR[1] - R * 0.78, BITE_R);
  tl = sdSubtract(tl, biteTL);
  tr = sdSubtract(tr, biteTR);
  return Math.min(tl, tr, bl, br);
}
const SHADE = ' .,:;~=+*o#%@';
function renderPeaceFrame(angle, cols, rows) {
  // "Card-spin" 3D: the logo is a flat silhouette (no thickness).
  // Y-axis rotation projects to: x_screen = x_logo * cos(angle).
  // When |cos(angle)| is small the card is edge-on — show a thin bar.
  // Add a gentle X-tilt nod for life.
  const cosA = Math.cos(angle);
  const tilt = Math.sin(angle * 0.5) * 0.18;
  const cosT = Math.cos(tilt);
  const sinT = Math.sin(tilt);
  const scale = Math.min(cols / 2.4, rows / 1.1);
  const cx = cols / 2;
  const cy = rows / 2;
  let out = '';
  for (let r = 0; r < rows; r++) {
    let line = '';
    for (let c = 0; c < cols; c++) {
      // screen → world (chars are ~2× tall, undo)
      const wx = (c - cx) / scale;
      const wy = -(r - cy) / (scale * 0.5);

      // Inverse tilt (around X): turns screen (wy) back to logo y'.
      // Treat z=0 since silhouette is flat — un-tilt is just yU = wy/cosT.
      const yU = wy / Math.max(0.0001, cosT);

      // Inverse Y-rotation for a flat silhouette: xL = wx / cosA.
      // When cosA ≈ 0 the card is edge-on — render a thin spine instead.
      let shade = 0;
      const EDGE_ON = Math.abs(cosA) < 0.06;
      if (EDGE_ON) {
        // edge-on: show a vertical spine if this column is near x=0 in screen
        if (Math.abs(wx) < 0.04 && yU > -0.95 && yU < 0.95) {
          shade = SHADE.length - 1;
        }
      } else {
        const xL = wx / cosA;
        const d = logoSDF(xL, yU);
        if (d <= 0) {
          // Foreshortening dims the silhouette as it tilts toward edge-on
          const fore = Math.abs(cosA); // 0..1
          const edge = Math.min(1, -d / 0.05);
          const sIdx = Math.max(2, Math.min(SHADE.length - 1, Math.floor(2 + fore * (SHADE.length - 5) + edge * 2)));
          shade = sIdx;
        }
      }
      line += shade ? SHADE[shade] : ' ';
    }
    out += line + (r < rows - 1 ? '\n' : '');
  }
  return out;
}
function JeanAvatar() {
  return /*#__PURE__*/React.createElement("span", {
    className: "block-portrait block-portrait--jean",
    "aria-hidden": "true"
  });
}

// ─────────────────────────────────────────────────────────────
// BragSlot — three "angles" on the same brag, swap with a subtle slider
// ─────────────────────────────────────────────────────────────
const BRAG_VARIANTS = [{
  id: 'awards',
  label: 'awards',
  render: () => /*#__PURE__*/React.createElement(React.Fragment, null, "My work has been enjoyed by the folks from Awwwards and Webby's, survived the crowds at Product Hunt, torn apart in HackerNews, seen in the background of a Tim Cook Keynote, loved by Terry Crews, featured on the cover of Forbes, smiled from the top of the App Store, called \"ok\" by a President and, mainly, applauded by my parents.")
}, {
  id: 'clients',
  label: 'clients',
  render: () => /*#__PURE__*/React.createElement(React.Fragment, null, "I've designed for Apple, Google, Stripe, Shopify, Linear, Vercel, Notion, Figma, Loom and a handful of teams I'm not allowed to name. Also for a coffee shop in Bilbao that paid me in espresso for six months.")
}, {
  id: 'specialty',
  label: 'specialty',
  render: () => /*#__PURE__*/React.createElement(React.Fragment, null, "I focus on early-stage product design \u2014 branding, visual identity, marketing sites, and product UI for software teams between pre-seed and Series B. I'm at my best when I can shape the whole thing end to end, from positioning to the last pixel.")
}];
function BragSlot() {
  const [idx, setIdx] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const change = i => {
    if (i === idx) return;
    setTransitioning(true);
    setTimeout(() => {
      setIdx(i);
      setTransitioning(false);
    }, 140);
  };
  const variant = BRAG_VARIANTS[idx];
  return /*#__PURE__*/React.createElement("div", {
    className: "brag-slot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brag-slider",
    role: "tablist",
    "aria-label": "Switch perspective"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brag-track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brag-thumb",
    style: {
      left: `${idx / (BRAG_VARIANTS.length - 1) * 100}%`
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "brag-ticks"
  }, BRAG_VARIANTS.map((v, i) => /*#__PURE__*/React.createElement("button", {
    key: v.id,
    role: "tab",
    "aria-selected": i === idx,
    className: `brag-tick ${i === idx ? 'brag-tick--on' : ''}`,
    onClick: () => change(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "brag-dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "brag-label mono"
  }, v.label))))), /*#__PURE__*/React.createElement("p", {
    className: `intro-paragraph brag-text ${transitioning ? 'brag-text--out' : ''}`
  }, variant.render()));
}

// ─────────────────────────────────────────────────────────────
// Headline — typographical opener; meaning words in ink,
// connectors muted. Reveals word-by-word before the intro.
// ─────────────────────────────────────────────────────────────
const HEADLINE_SEGMENTS = [['Design from napkin sketch through final_final release.', 'ink']];
const HEADLINE_TONES = {
  muted: 'hl-muted',
  hand: 'hl-muted hl-hand'
};
function Headline() {
  const START = 500; // the gate is fully transparent at ~750ms after the flood
  const STEP = 40;
  let w = 0;
  // Eyebrow reveals word-by-word, then the big statement follows.
  let u = 0;
  const T = () => ({
    '--reveal-delay': `${u++ * 150}ms`
  });
  const W = text => text.split(' ').filter(Boolean).map((w, k) => /*#__PURE__*/React.createElement("span", {
    key: `${w}-${k}-${u}`,
    className: "reveal-word",
    style: T()
  }, w + ' '));
  const C = (node, key, trail) => /*#__PURE__*/React.createElement("span", {
    key: key,
    className: "reveal-word",
    style: T()
  }, node, trail ? ' ' : '');
  // Hovering (or focusing) a chip spotlights its bio passages: stamp
  // html[data-bio-focus] and let CSS dim every .bio-part but that tag.
  const bio = key => ({
    onMouseEnter: () => document.documentElement.setAttribute('data-bio-focus', key),
    onMouseLeave: () => document.documentElement.removeAttribute('data-bio-focus'),
    onFocus: () => document.documentElement.setAttribute('data-bio-focus', key),
    onBlur: () => document.documentElement.removeAttribute('data-bio-focus')
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "headline-block",
    "data-screen-label": "00 Headline"
  }, /*#__PURE__*/React.createElement("p", {
    className: "headline-eyebrow"
  }, C(/*#__PURE__*/React.createElement("span", _extends({
    className: "chip"
  }, bio('jean')), "Jean", /*#__PURE__*/React.createElement("img", {
    className: "chip-avatar",
    src: "jean-avatar.png",
    alt: ""
  })), 'jean', true), C(/*#__PURE__*/React.createElement("span", _extends({
    className: "chip"
  }, bio('konpo')), "Konpo", /*#__PURE__*/React.createElement(KonpoMark, {
    className: "chip-logo chip-logo--konpo"
  })), 'konpo', true), C(/*#__PURE__*/React.createElement("span", _extends({
    className: "chip"
  }, bio('surge')), "Surge", /*#__PURE__*/React.createElement(SurgeMark, {
    className: "chip-logo chip-logo--surge"
  })), 'surge')), /*#__PURE__*/React.createElement("h1", {
    className: "headline"
  }, HEADLINE_SEGMENTS.map(([text, tone], si) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: si
  }, text.split(' ').map((word, wi) => {
    const delay = START + w * STEP;
    w++;
    return /*#__PURE__*/React.createElement("span", {
      key: wi,
      className: `reveal-word ${HEADLINE_TONES[tone] || ''}`,
      style: {
        '--reveal-delay': `${delay}ms`
      }
    }, word + ' ');
  })))));
}

// ─────────────────────────────────────────────────────────────
// Intro
// ─────────────────────────────────────────────────────────────
// Word-by-word reveal helper. `start` = first-word delay (ms), `step` = per-word ms.
// Returns: array of <span class="reveal-word"> with staggered --reveal-delay,
// and exposes the next available delay on the returned array via `.end`.
function Words({
  text,
  start,
  step,
  children
}) {
  // text is a string; or children can be ReactNodes interleaved (treated as one "word").
  const words = text.split(/(\s+)/); // keep whitespace
  let idx = 0;
  const out = words.map((w, i) => {
    if (/^\s+$/.test(w)) return w;
    const delay = start + idx * step;
    idx++;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "reveal-word",
      style: {
        '--reveal-delay': `${delay}ms`
      }
    }, w);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, out, children);
}

// Tiny play button after the name. Plays uploads/jean-name.mp3 —
// baked with macOS "Fred" (purposely robotic): "My name is pronounced
// Zhawn. The French way, even though I'm not French." Speech-synthesis
// fallback only if the file ever 404s.
function NamePlay() {
  const [playing, setPlaying] = useState(false);
  const play = () => {
    if (playing) return;
    setPlaying(true);
    const done = () => setPlaying(false);
    let fellBack = false;
    const fallback = () => {
      if (fellBack) return;
      fellBack = true;
      try {
        // "Zhawn" — the French Jean, from a plain English voice
        const u = new SpeechSynthesisUtterance("My name is pronounced Zhawn. The French way, even though I'm not French.");
        u.rate = 0.95;
        u.onend = done;
        u.onerror = done;
        window.speechSynthesis.speak(u);
      } catch (e) {
        done();
      }
    };
    const audio = new Audio('uploads/jean-name.mp3');
    audio.onended = done;
    audio.onerror = fallback;
    audio.play().catch(fallback);
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `name-play ${playing ? 'name-play--on' : ''}`,
    onClick: play,
    "aria-label": "Hear my name",
    title: "Hear my name"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "15",
    height: "15",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 10v3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 6v11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 3v18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 8v7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 5v13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 10v3"
  })));
}

// Bio "reasoning effort" — the quiet dial that swaps the bio between
// four intensities (folded in from scratch/intensity.html). Bare track,
// four detents, accent thumb, level word; no label (Jean's call).
const EFFORT_LEVELS = ['Low', 'Medium', 'Max', 'Ultracode'];
// Dial hidden for now (Jean, 2026-08-31) — bio stays pinned to Max.
// Flip to true to bring the toggle (and the ghost height-lock) back.
const SHOW_EFFORT_DIAL = false;
function EffortDial({
  level,
  onPick,
  delay = 0
}) {
  // touch devices: the input is inert (see the pointer:coarse CSS) and
  // a tap ANYWHERE on the dial steps to the next level, wrapping at the
  // end — dragging a 150px slider with a thumb is fiddly on a phone
  const stepOnTouch = () => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      onPick((level + 1) % EFFORT_LEVELS.length);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "vol reveal",
    style: {
      '--reveal-delay': `${delay}ms`
    },
    "aria-label": "Bio reasoning effort",
    onClick: stepOnTouch
  }, /*#__PURE__*/React.createElement("span", {
    className: "vol-track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vol-line",
    "aria-hidden": "true"
  }), [0, 33.3, 66.6, 100].map(x => /*#__PURE__*/React.createElement("span", {
    className: "vol-tick",
    style: {
      left: `${x}%`
    },
    "aria-hidden": "true",
    key: x
  })), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "3",
    step: "1",
    value: level,
    "aria-valuetext": EFFORT_LEVELS[level],
    onChange: e => onPick(+e.target.value)
  })), /*#__PURE__*/React.createElement("span", {
    className: "vol-level mono"
  }, EFFORT_LEVELS[level]));
}

// DORMANT since 2026-09-14 — the dial-driven bio (four reasoning-effort
// levels). The live Intro below renders the Max copy as four folds; this
// stays for the copy + the dial plumbing (render <IntroDial /> to revive).
function IntroDial() {
  // Reasoning-effort level for the bio (0 Low → 3 Ultracode). Default
  // High — the classic full bio. The lede + .md line stay constant.
  const [level, setLevel] = useState(2);
  // First render joins the big page reveal; after any dial change the
  // bio re-types with a brisk near-zero stagger instead.
  const swapped = useRef(false);
  const pickLevel = v => {
    swapped.current = true;
    setLevel(v);
    haptic(6);
  };
  // Each chunk fades in with its own delay so the bio reads in like it's being typed-but-not.
  const D = ms => ({
    '--reveal-delay': `${ms}ms`
  });
  // Per-word stagger config
  const WORD_STEP = swapped.current ? 12 : 28; // ms between words
  const CHUNK_GAP = swapped.current ? 120 : 260; // pause between paragraphs
  // Word-counter helper: track running delay across chunks
  let t = 900; // first word delay (after the headline finishes)
  const wordDelay = () => {
    const d = t;
    t += WORD_STEP;
    return d;
  };
  const pause = ms => {
    t += ms;
  };
  const W = text => {
    const parts = text.split(/(\s+)/);
    return parts.map((p, i) => {
      if (/^\s+$/.test(p) || p === '') return p;
      const delay = wordDelay();
      return /*#__PURE__*/React.createElement("span", {
        key: i,
        className: "reveal-word",
        style: {
          '--reveal-delay': `${delay}ms`
        }
      }, p);
    });
  };
  // Wrap an inline element (link, etc.) as a single revealing unit
  const I = node => {
    const delay = wordDelay();
    return /*#__PURE__*/React.createElement("span", {
      className: "reveal-word",
      style: {
        '--reveal-delay': `${delay}ms`
      }
    }, node);
  };
  // Hover-image word (konpo.studio's about-section pops) — underlined
  // span, photo pops above on hover; `tall` = portrait art, narrower
  const POP = (word, img, tall) => I(/*#__PURE__*/React.createElement("span", {
    className: "ulink ulink--media"
  }, word, /*#__PURE__*/React.createElement("span", {
    className: `media-pop${tall ? ' media-pop--tall' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: `media-pop-img media-pop-img--${img}`
  }))));
  const Gap = () => {
    pause(CHUNK_GAP);
    return null;
  };
  const Surge = (label = 'Surge AI') => I(/*#__PURE__*/React.createElement("a", {
    className: "brand-word brand-word--surge",
    href: "https://www.surgehq.ai",
    target: "_blank",
    rel: "noreferrer"
  }, label));
  const Konpo = () => I(/*#__PURE__*/React.createElement("a", {
    className: "brand-word brand-word--konpo",
    href: "https://www.konpo.studio",
    target: "_blank",
    rel: "noreferrer"
  }, "Konpo"));

  // The four bios. Built ONLY for the active level (W()/I() consume the
  // shared delay counter, so building more than one would skew delays).
  // The President is the constant that scales with the effort.
  const renderBio = lv => {
    if (lv === 0) return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "bio-part",
      "data-bio": "jean"
    }, W("I'm Jean"), I(/*#__PURE__*/React.createElement(NamePlay, null)), W('. I push pixels around a screen.')), /*#__PURE__*/React.createElement("br", null), Gap(), /*#__PURE__*/React.createElement("span", {
      className: "bio-part",
      "data-bio": "jean"
    }, W('Some of them ship.')), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), Gap(), /*#__PURE__*/React.createElement("span", {
      className: "bio-part",
      "data-bio": "jean"
    }, W('Sometimes '), POP('ski', 'snow'), W(' and '), POP('surf', 'surf'), W('.')));
    if (lv === 1) return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "bio-part",
      "data-bio": "jean"
    }, W("I'm Jean Massad"), I(/*#__PURE__*/React.createElement(NamePlay, null))), /*#__PURE__*/React.createElement("span", {
      className: "bio-part",
      "data-bio": "surge"
    }, W('. Designer at '), Surge()), /*#__PURE__*/React.createElement("span", {
      className: "bio-part",
      "data-bio": "konpo"
    }, W(' and a nimble studio called '), Konpo(), W('.')), /*#__PURE__*/React.createElement("span", {
      className: "bio-part",
      "data-bio": "jean"
    }, W(' I can design logos and apps.')), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), Gap(), /*#__PURE__*/React.createElement("span", {
      className: "bio-part"
    }, W('Some of them were liked by people online. Some of them got torn apart. Both were educational.')), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), Gap(), /*#__PURE__*/React.createElement("span", {
      className: "bio-part"
    }, W('A president glanced at one of them once.')), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), Gap(), /*#__PURE__*/React.createElement("span", {
      className: "bio-part",
      "data-bio": "jean"
    }, W('Off hours I attempt '), POP('ski', 'snow'), W(' and '), POP('surf', 'surf'), W('.')));
    if (lv === 3) return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "bio-part",
      "data-bio": "jean"
    }, W("I'm Jean Massad"), I(/*#__PURE__*/React.createElement(NamePlay, null))), /*#__PURE__*/React.createElement("span", {
      className: "bio-part",
      "data-bio": "surge"
    }, W('. The only designer at a $30B company, '), Surge(), W('.')), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "bio-part",
      "data-bio": "konpo"
    }, W('I also run my own studio, '), Konpo(), W(", where we've partnered with Social Networks, designed world-class fitness products with an Apple team, branded the world's largest mental health provider and redesigned a state bank's mobile products. We shipped a design app with millions of daily active users, featured by the App Store, and deployed a design system that touches 160M people.")), /*#__PURE__*/React.createElement("span", {
      className: "bio-part"
    }, W(' 30+ industry awards along the way.')), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), Gap(), /*#__PURE__*/React.createElement("span", {
      className: "bio-part"
    }, W('A sitting '), POP('President', 'president', true), W(' reviewed my work and said it was "ok". It actually was.')), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), Gap(), /*#__PURE__*/React.createElement("span", {
      className: "bio-part",
      "data-bio": "jean"
    }, POP('Ski', 'snow'), W(' and '), POP('surf', 'surf'), W(' wait for me, not the other way around.')));
    // lv === 2 — High: the classic full bio
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "bio-part",
      "data-bio": "jean"
    }, W("I'm Jean Massad"), I(/*#__PURE__*/React.createElement(NamePlay, null))), /*#__PURE__*/React.createElement("span", {
      className: "bio-part",
      "data-bio": "surge"
    }, W('. Designer at '), Surge(), W(", the data engine behind the world's leading frontier labs. ")), /*#__PURE__*/React.createElement("span", {
      className: "bio-part",
      "data-bio": "konpo"
    }, W('I also run a nimble studio called '), Konpo(), W(', where we passionately hate on traditional agency dynamics. ')), /*#__PURE__*/React.createElement("span", {
      className: "bio-part"
    }, W('I work through the design spectrum across brand, product and systems for startups, F500, gov and everything in between.')), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), Gap(), /*#__PURE__*/React.createElement("span", {
      className: "bio-part"
    }, W('My work has won over '), POP('Awwwards', 'awwwards', true), W(' and the '), POP('Webbys', 'webby', true), W(', survived '), POP('Product Hunt', 'producthunt'), W(', been torn apart on Hacker News, shown up behind '), POP('Tim Cook', 'timcook'), W(' in a keynote, been loved by '), POP('Terry Crews', 'terrycrews', true), W(', made the cover of '), POP('Forbes', 'forbes', true), W(' and smiled from the top of the '), POP('App Store', 'appstore'), W('.')), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), Gap(), /*#__PURE__*/React.createElement("span", {
      className: "bio-part"
    }, W('It\'s been called "ok" by a '), POP('President', 'president', true), W('.')), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), Gap(), /*#__PURE__*/React.createElement("span", {
      className: "bio-part",
      "data-bio": "jean"
    }, W("When I'm not busy training my AI replacement, I chase "), POP('ski', 'snow'), W(' and '), POP('surf', 'surf'), W('.')));
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "intro",
    "data-screen-label": "01 Intro",
    style: {
      padding: "0px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "intro-heading bio-part",
    "data-bio": "jean"
  }, W("In the design trenches ever since I got Photoshop off a sketchy torrent site. "), W("Think of me as an .md file but, like, human.")), SHOW_EFFORT_DIAL && /*#__PURE__*/React.createElement(EffortDial, {
    level: level,
    onPick: pickLevel,
    delay: (() => {
      const d = t;
      pause(220);
      return d;
    })()
  }), /*#__PURE__*/React.createElement("div", {
    className: "bio-stack"
  }, (SHOW_EFFORT_DIAL ? [0, 1, 2, 3] : [level]).map(lv => {
    const active = lv === level;
    const saved = t;
    // only the ACTIVE level advances the reveal clock — ghosts
    // render with throwaway delays and hand the clock back
    if (active) {
      if (swapped.current) t = 0;else pause(CHUNK_GAP);
    }
    const content = renderBio(lv);
    if (!active) t = saved;
    return /*#__PURE__*/React.createElement("p", {
      className: `intro-paragraph bio-layer${active ? '' : ' bio-layer--ghost'}`,
      "aria-hidden": active ? undefined : true,
      key: `${lv}-${active ? `on-${swapped.current}` : 'off'}`
    }, content);
  })));
}

// ─── the folds — Who / What / Why / Where ─────────────────────────
// The bio is a list of ruled rows in the elsewhere idiom (13px label,
// hairline under each row, a + that turns into ×). A row opens to its
// passage, which types in with the brisk stagger; `elsewhere` itself is
// the last fold (Where). All collapsed by default (Jean, 2026-09-14).
function Fold({
  id,
  label,
  open,
  onToggle,
  delay,
  children
}) {
  // the passage mounts on first open (so its words type in) and stays
  // mounted after, so closing can animate the height back down
  const everOpen = useRef(open);
  if (open) everOpen.current = true;
  // the row clips while it opens; once landed the clip lifts so the
  // hover pops inside can escape the row — re-clipped the moment it closes
  const [settled, setSettled] = useState(false);
  useEffect(() => {
    if (!open) {
      setSettled(false);
      return undefined;
    }
    // transitionend is the fast path; the timer covers reduced-motion
    // (no transition → no event) and background tabs
    const id = setTimeout(() => setSettled(true), 600);
    return () => clearTimeout(id);
  }, [open]);
  return /*#__PURE__*/React.createElement("li", {
    className: `fold reveal${open ? ' fold--open' : ''}${settled ? ' fold--settled' : ''}`,
    style: {
      '--reveal-delay': `${delay}ms`
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fold-row",
    "aria-expanded": open,
    "aria-controls": `fold-${id}`,
    onClick: onToggle
  }, /*#__PURE__*/React.createElement("span", {
    className: "fold-label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "fold-glyph",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fold-body",
    id: `fold-${id}`,
    "aria-hidden": !open,
    onTransitionEnd: e => {
      if (e.target === e.currentTarget && open) setSettled(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fold-inner"
  }, everOpen.current && children)));
}
function Intro() {
  const [open, setOpen] = useState(() => new Set());
  const toggle = id => {
    const opening = !open.has(id);
    setOpen(prev => {
      const n = new Set(prev);
      if (opening) n.add(id);else n.delete(id);
      return n;
    });
    playStateChange(opening);
    haptic(6);
  };
  // Per-word stagger: one clock for the page reveal (the lede), and a
  // fresh brisk clock per fold — its passage types in when it opens
  const typer = (start, step, gap) => {
    let t = start;
    const next = () => {
      const d = t;
      t += step;
      return d;
    };
    const W = text => text.split(/(\s+)/).map((p, i) => /^\s+$/.test(p) || p === '' ? p : /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "reveal-word",
      style: {
        '--reveal-delay': `${next()}ms`
      }
    }, p));
    const I = node => /*#__PURE__*/React.createElement("span", {
      className: "reveal-word",
      style: {
        '--reveal-delay': `${next()}ms`
      }
    }, node);
    // Hover-image word (konpo.studio's about-section pops) — underlined
    // span, photo pops above on hover; `tall` = portrait art, narrower
    const POP = (word, img, tall) => I(/*#__PURE__*/React.createElement("span", {
      className: "ulink ulink--media"
    }, word, /*#__PURE__*/React.createElement("span", {
      className: `media-pop${tall ? ' media-pop--tall' : ''}`
    }, /*#__PURE__*/React.createElement("span", {
      className: `media-pop-img media-pop-img--${img}`
    }))));
    const Gap = () => {
      t += gap;
      return null;
    };
    const Surge = (label = 'Surge AI') => I(/*#__PURE__*/React.createElement("a", {
      className: "brand-word brand-word--surge",
      href: "https://www.surgehq.ai",
      target: "_blank",
      rel: "noreferrer"
    }, label));
    const Konpo = () => I(/*#__PURE__*/React.createElement("a", {
      className: "brand-word brand-word--konpo",
      href: "https://www.konpo.studio",
      target: "_blank",
      rel: "noreferrer"
    }, "Konpo"));
    return {
      W,
      I,
      POP,
      Gap,
      Surge,
      Konpo
    };
  };
  const lede = typer(900, 28, 260);
  // Passages are wrapped in .bio-part spans tagged by who they're about —
  // hovering an eyebrow chip (Jean/Konpo/Surge) sets html[data-bio-focus]
  // and CSS dims every part but that tag.
  const who = (({
    W,
    I,
    Surge,
    Konpo
  }) => /*#__PURE__*/React.createElement("p", {
    className: "intro-paragraph"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bio-part",
    "data-bio": "jean"
  }, W("I'm Jean Massad"), I(/*#__PURE__*/React.createElement(NamePlay, null))), /*#__PURE__*/React.createElement("span", {
    className: "bio-part",
    "data-bio": "surge"
  }, W('. Designer at '), Surge(), W(", the data engine behind the world's leading frontier labs. ")), /*#__PURE__*/React.createElement("span", {
    className: "bio-part",
    "data-bio": "konpo"
  }, W('I also run a nimble studio called '), Konpo(), W(', where we passionately hate on traditional agency dynamics.'))))(typer(0, 14, 120));
  const what = (({
    W,
    POP,
    Gap
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "intro-paragraph"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bio-part"
  }, W('I work through the design spectrum across brand, product and systems for startups, F500, gov and everything in between.'))), Gap(), /*#__PURE__*/React.createElement("p", {
    className: "intro-paragraph"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bio-part"
  }, W('My work has won over '), POP('Awwwards', 'awwwards', true), W(' and the '), POP('Webbys', 'webby', true), W(', survived '), POP('Product Hunt', 'producthunt'), W(', been torn apart on Hacker News, shown up behind '), POP('Tim Cook', 'timcook'), W(' in a keynote, been loved by '), POP('Terry Crews', 'terrycrews', true), W(', made the cover of '), POP('Forbes', 'forbes', true), W(' and smiled from the top of the '), POP('App Store', 'appstore'), W('.'))), Gap(), /*#__PURE__*/React.createElement("p", {
    className: "intro-paragraph"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bio-part"
  }, W('It\'s been called "ok" by a '), POP('President', 'president', true), W('.')))))(typer(0, 14, 120));
  const why = (({
    W,
    POP
  }) => /*#__PURE__*/React.createElement("p", {
    className: "intro-paragraph"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bio-part",
    "data-bio": "jean"
  }, W("When I'm not busy training my AI replacement, I chase "), POP('ski', 'snow'), W(' and '), POP('surf', 'surf'), W('.'))))(typer(0, 14, 120));
  // Where = elsewhere, folded in: the same ruled link rows, one step in
  const where = /*#__PURE__*/React.createElement("ul", {
    className: "footer-links fold-links"
  }, ELSEWHERE_LINKS.map((l, i) => /*#__PURE__*/React.createElement("li", {
    key: l.from,
    className: "reveal",
    style: {
      '--reveal-delay': `${i * 90}ms`
    }
  }, /*#__PURE__*/React.createElement(GlitchLink, {
    from: l.from,
    to: l.to,
    href: l.href
  }))));
  const FOLDS = [['who', 'Who', who], ['what', 'What', what], ['why', 'Why', why], ['where', 'Where', where]];
  return /*#__PURE__*/React.createElement("section", {
    className: "intro",
    "data-screen-label": "01 Intro",
    style: {
      padding: "0px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "intro-heading bio-part",
    "data-bio": "jean"
  }, lede.W("In the design trenches ever since I got Photoshop off a sketchy torrent site. "), lede.W("Think of me as an .md file but, like, human.")), /*#__PURE__*/React.createElement("ul", {
    className: "folds"
  }, FOLDS.map(([id, label, body], i) => /*#__PURE__*/React.createElement(Fold, {
    key: id,
    id: id,
    label: label,
    delay: 1700 + i * 140,
    open: open.has(id),
    onToggle: () => toggle(id)
  }, body))));
}

// ─────────────────────────────────────────────────────────────
// GitHub contribution map — accent blue instead of GitHub green.
// Live data comes from /api/contributions (a Vercel function that
// proxies github.com — no CORS on their calendar HTML). The baked
// string below is the fallback for local dev / API hiccups.
// Note: GitHub's anonymous view only counts PUBLIC contributions;
// flip "Include private contributions" on the profile to fill it in.
// ─────────────────────────────────────────────────────────────
const CONTRIB_FALLBACK = {
  start: '2025-07-06',
  // day 0 of the baked string (a Sunday)
  total: 1,
  levels: '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000'
};
function ContribMap() {
  const [data, setData] = useState(() => {
    const t0 = new Date(CONTRIB_FALLBACK.start + 'T00:00:00');
    const days = [...CONTRIB_FALLBACK.levels].map((l, i) => {
      const d = new Date(t0);
      d.setDate(t0.getDate() + i);
      // format in local time — toISOString() shifts to UTC and can slip a day
      const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      return {
        d: iso,
        l: +l,
        c: null
      }; // count unknown in the baked fallback
    });
    return {
      total: CONTRIB_FALLBACK.total,
      days
    };
  });
  useEffect(() => {
    fetch('/api/contributions').then(r => r.ok ? r.json() : null).then(j => {
      if (j && j.days && j.days.length) setData(j);
    }).catch(() => {});
  }, []);

  // GitHub-style week columns, Sunday-first; pad the partial edge weeks
  const weeks = [];
  let col = new Array(new Date(data.days[0].d + 'T00:00:00').getDay()).fill(null);
  for (const day of data.days) {
    col.push(day);
    if (col.length === 7) {
      weeks.push(col);
      col = [];
    }
  }
  if (col.length) {
    while (col.length < 7) col.push(null);
    weeks.push(col);
  }
  const BASE = 4800; // after the bio's last words settle
  return /*#__PURE__*/React.createElement("div", {
    className: "contrib"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contrib-head reveal",
    style: {
      '--reveal-delay': `${BASE}ms`
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "footer-label contrib-label mono",
    href: "https://github.com/jeanm-404",
    target: "_blank",
    rel: "noreferrer"
  }, "github"), /*#__PURE__*/React.createElement("span", {
    className: "contrib-count mono"
  }, data.total, " contribution", data.total === 1 ? '' : 's', " \u2014 last year")), /*#__PURE__*/React.createElement("div", {
    className: "contrib-grid",
    role: "img",
    "aria-label": `${data.total} GitHub contributions in the last year`
  }, weeks.map((w, wi) => /*#__PURE__*/React.createElement("div", {
    className: "contrib-week",
    key: wi
  }, w.map((day, di) => day ? /*#__PURE__*/React.createElement("span", {
    key: di,
    className: "contrib-cell",
    "data-level": day.l,
    style: {
      '--reveal-delay': `${BASE + 150 + wi * 12}ms`
    },
    title: day.c == null ? day.d : `${day.c || 'No'} contribution${day.c === 1 ? '' : 's'} on ${day.d}`
  }) : /*#__PURE__*/React.createElement("span", {
    key: di,
    className: "contrib-cell contrib-cell--pad"
  }))))));
}

// ─────────────────────────────────────────────────────────────
// Assets feed — a quiet masonry of work assets:
// images, videos, gifs, and live component demos.
// ─────────────────────────────────────────────────────────────

// Live demo: toggle (velvet-style state change)
function DemoToggle() {
  const [on, setOn] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `demo-toggle ${on ? 'demo-toggle--on' : ''}`,
    role: "switch",
    "aria-checked": on,
    onClick: () => setOn(!on)
  }, /*#__PURE__*/React.createElement("span", {
    className: "demo-toggle-knob"
  }));
}

// Live demo: booking button (commits, then resets)
function DemoBook() {
  const [booked, setBooked] = useState(false);
  const timerRef = useRef(null);
  useEffect(() => () => clearTimeout(timerRef.current), []);
  const book = () => {
    if (booked) return;
    setBooked(true);
    timerRef.current = setTimeout(() => setBooked(false), 1800);
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `demo-book ${booked ? 'demo-book--done' : ''}`,
    onClick: book
  }, booked ? 'Booked ✓' : 'Book');
}

// Live demo: segmented control
function DemoSegment() {
  const [idx, setIdx] = useState(0);
  const opts = ['Day', 'Week', 'Month'];
  return /*#__PURE__*/React.createElement("div", {
    className: "demo-segment",
    role: "tablist"
  }, opts.map((o, i) => /*#__PURE__*/React.createElement("button", {
    key: o,
    type: "button",
    role: "tab",
    "aria-selected": i === idx,
    className: `demo-segment-btn ${i === idx ? 'demo-segment-btn--on' : ''}`,
    onClick: () => setIdx(i)
  }, o)));
}

// The feed: Konpo case-study hero loops. cat drives the filter rail;
// desc/scope feed the expanded view. href opens the full case study.
const WORK_CATS = ['All', 'Brand', 'Websites', 'Product', 'Systems'];
const CASE = {
  surge: {
    href: 'https://www.konpo.studio/?news=surge-ai',
    desc: 'Brand and website for Surge AI — the data engine behind the world’s leading frontier labs.',
    scope: ['Brand', 'Website']
  },
  fyler: {
    href: 'https://www.konpo.studio/work/fyler-search-engine',
    desc: 'A search engine with taste — brand, marketing site, and product UI for an AI-native search startup.',
    scope: ['Website', 'Product', 'Brand']
  },
  compsych: {
    href: 'https://www.konpo.studio/work/compsych',
    desc: 'Rebrand for the world’s largest provider of employee mental-health and absence programs.',
    scope: ['Brand', 'Website']
  },
  coachable: {
    href: 'https://www.konpo.studio/work/coachable',
    desc: 'Identity and website for a coaching platform helping people build financial independence through tech careers.',
    scope: ['Brand', 'Website']
  },
  systemone: {
    href: 'https://www.konpo.studio/work/system-one',
    desc: 'Brand and website for System One — film-led storytelling with a quiet, confident system.',
    scope: ['Brand', 'Website']
  },
  ili: {
    href: 'https://www.konpo.studio/work/ili-digital',
    desc: 'Brand and web presence for ILI.DIGITAL — a venture studio turning industry expertise into digital products.',
    scope: ['Brand', 'Website']
  },
  hutte: {
    href: 'https://www.konpo.studio/work/hutte',
    desc: 'Brand identity for Hutte, the visual home for Salesforce DevOps — logo, emojis, and a system that scales.',
    scope: ['Brand', 'Product']
  }
};
// Clips with a light feed rendition on disk: <name>-lite.mp4 = the same
// clip capped at 1280px, H.264 CRF 27, silent, faststart (ffmpeg libx264
// -preset slow), kept only where it saved ≥25%. The feed autoplays the
// light file (`src`); the lightbox plays the untouched original (`full`).
const LITE = new Set(['coachable-bento', 'coachable-figma', 'coachable-grow', 'coachable-home-page', 'coachable-logo', 'coachable-menu', 'coachable-portraits', 'coachable-typeface', 'hutte-fields', 'hutte-flow', 'hutte-hero', 'hutte-members', 'hutte-onboarding', 'hutte-slider', 'hutte-social-a', 'hutte-social-b', 'ili-figma', 'systemone-live', 'systemone-scrolling-type', 'systemone-services']);
const clip = src => {
  const m = src.match(/([^/]+)\.mp4$/);
  return m && LITE.has(m[1]) ? {
    src: src.replace(/\.mp4$/, '-lite.mp4'),
    full: src
  } : {
    src
  };
};
const A = (proj, file, title, cat, aspect) => ({
  type: 'video',
  ...clip(`uploads/cases/${file}.mp4`),
  title,
  cat,
  aspect,
  ...CASE[proj]
});
// nexus assets (pulled from the are.na channel) — mixed images + videos
const N = (type, file, title, cat, aspect) => ({
  type,
  ...(type === 'video' ? clip(`uploads/cases/nexus/${file}`) : {
    src: `uploads/cases/nexus/${file}`
  }),
  title,
  cat,
  aspect,
  ...CASE.ili
});
// generic case asset — any media type, full filename, project's CASE meta
const P = (proj, type, file, title, cat, aspect) => ({
  type,
  ...(type === 'video' ? clip(`uploads/cases/${file}`) : {
    src: `uploads/cases/${file}`
  }),
  title,
  cat,
  aspect,
  ...CASE[proj]
});
// One cover per project; clicking it unfolds the project's other cards
// inline, in the same column — no popup, the scroll just keeps going.
const PROJECTS = [{
  key: 'surge',
  industry: 'AI',
  org: 'Unicorn',
  title: 'Surge AI',
  cat: 'Brand',
  tag: 'Frontier Data',
  sub: 'Brand and website for the data engine behind frontier AI.',
  cover: A('surge', 'surge-logo', 'Surge AI', 'Brand', '16 / 9'),
  cards: [A('surge', 'surge-website', 'Website', 'Websites', '16 / 9'), P('surge', 'image', 'surge-pair-left.jpg', 'Duo I', 'Brand', '1900 / 2160'), P('surge', 'image', 'surge-font-use.jpg', 'Font in Use', 'Systems', '16 / 9'), P('surge', 'image', 'surge-research.jpg', 'Research', 'Brand', '3840 / 2266'), P('surge', 'image', 'surge-chart.jpg', 'Charts', 'Product', '16 / 9'), P('surge', 'image', 'surge-web-overview.jpg', 'Web Overview', 'Websites', '16 / 9'), P('surge', 'image', 'surge-screens.jpg', 'Screens', 'Websites', '16 / 9'), P('surge', 'image', 'surge-poster-right.jpg', 'Poster II', 'Brand', '1900 / 2160'), P('surge', 'image', 'surge-product.jpg', 'Product', 'Product', '16 / 9'), P('surge', 'image', 'surge-typography.jpg', 'Typography', 'Systems', '16 / 9'), P('surge', 'image', 'surge-palette-16.jpg', 'Palette', 'Systems', '16 / 9'), A('surge', 'surge-palette', 'Color', 'Systems', '16 / 9'), P('surge', 'image', 'surge-primary.jpg', 'Primary', 'Systems', '16 / 9'), P('surge', 'image', 'surge-icon-examples.jpg', 'Icon Examples', 'Systems', '1900 / 2160'), P('surge', 'image', 'surge-icon-corner.jpg', 'Icon Corner', 'Systems', '16 / 9'), A('surge', 'surge-icons', 'Icons', 'Systems', '16 / 9'), P('surge', 'image', 'surge-spacing.png', 'Spacing', 'Systems', '16 / 9'), P('surge', 'image', 'surge-grid.jpg', 'Grid', 'Systems', '16 / 9'), {
    type: 'embed',
    title: 'Frontier Skyline',
    src: 'https://surge-mirror.vercel.app/frontier-minimal.html?view=scores&revision=dark-toggle&theme=dark',
    preview: 'uploads/artifacts/surge-skyline.png',
    aspect: '16 / 9',
    desc: 'Benchmark skylines for the Surge Intelligence Index — every model on every board, one glance. Live prototype, embedded.',
    cat: 'IDK',
    scope: ['Craft', 'Data viz']
  }, {
    type: 'embed',
    title: 'Radial Horizon',
    src: 'https://surge-mirror.vercel.app/compare.html?prototype=frontier&models=fable-5%2Cgpt-5.6-sol%2Cgemini-3.5-flash%2Ckimi-k3&view=all&theme=dark#tw=theme:dark',
    preview: 'uploads/artifacts/surge-radial.png',
    aspect: '16 / 9',
    desc: 'A cross-board radial horizon comparing four frontier models across nine Surge benches. Live prototype, embedded.',
    cat: 'IDK',
    scope: ['Craft', 'Data viz']
  }]
}, {
  key: 'fyler',
  industry: 'AI',
  org: 'Startup',
  title: 'Fyler',
  cat: 'Websites',
  tag: 'Search Engine',
  sub: 'Brand, marketing site, and product UI for AI-native search.',
  cover: P('fyler', 'image', 'fyler-moodboard-brand.jpg', 'Fyler', 'Brand', '1600 / 1034'),
  cards: [A('fyler', 'fyler-walkthrough', 'Walkthrough', 'Product', '3 / 2'), A('fyler', 'fyler-showcase', 'Showcase', 'Product', '16 / 9'), A('fyler', 'fyler-interface', 'Interface', 'Product', '16 / 9'), P('fyler', 'image', 'fyler-inside-search.jpg', 'Inside Search', 'Product', '16 / 9'), P('fyler', 'image', 'fyler-rich-weather.jpg', 'Weather', 'Product', '1571 / 2031'), P('fyler', 'image', 'fyler-widget-discovery.jpg', 'Discovery Widget', 'Product', '1600 / 996'), P('fyler', 'image', 'fyler-widget-graphic.jpg', 'Graphic Widget', 'Product', '1600 / 996'), P('fyler', 'image', 'fyler-widget-mobile.jpg', 'Mobile Widget', 'Product', '1600 / 996'), P('fyler', 'image', 'fyler-widget-comparative.jpg', 'Comparative Widget', 'Product', '1600 / 996'), A('fyler', 'fyler-ds-cards', 'System Cards', 'Systems', '1280 / 828'), P('fyler', 'image', 'fyler-ds-1.jpg', 'Design System I', 'Systems', '1600 / 1034'), P('fyler', 'image', 'fyler-ds-2.jpg', 'Design System II', 'Systems', '1600 / 1033'), P('fyler', 'image', 'fyler-ds-3.jpg', 'Design System III', 'Systems', '1600 / 1034'), P('fyler', 'image', 'fyler-ds-4.jpg', 'Design System IV', 'Systems', '1600 / 1033'), P('fyler', 'image', 'fyler-typography.jpg', 'Typography', 'Systems', '1600 / 930'), A('fyler', 'fyler-insp-type', 'Type Inspiration', 'Brand', '1280 / 826'), A('fyler', 'fyler-insp-icons', 'Icon Inspiration', 'Brand', '1280 / 712'), A('fyler', 'fyler-insp-patterns', 'Pattern Inspiration', 'Brand', '16 / 9'), A('fyler', 'fyler-insp-palettes', 'Palette Inspiration', 'Brand', '16 / 9'), A('fyler', 'fyler-darklight', 'Dark / Light', 'Product', '3 / 2'), P('fyler', 'image', 'fyler-moodboard-1.jpg', 'Moodboard', 'Brand', '1600 / 1034')]
}, {
  key: 'compsych',
  industry: 'Healthcare',
  org: 'Enterprise',
  title: 'ComPsych',
  cat: 'Brand',
  tag: 'Mental Health',
  sub: 'Rebranding the world\u2019s largest employee mental-health provider.',
  cover: A('compsych', 'compsych-hero', 'ComPsych', 'Brand', '4 / 3'),
  cards: [A('compsych', 'compsych-symbol', 'Symbol', 'Brand', '16 / 9'), A('compsych', 'compsych-logo', 'Logo', 'Brand', '16 / 9'), A('compsych', 'compsych-moodboard', 'Moodboard', 'Brand', '4 / 3'), A('compsych', 'compsych-positioning', 'Positioning', 'Brand', '16 / 9'), A('compsych', 'compsych-messaging', 'Messaging', 'Brand', '16 / 9'), P('compsych', 'image', 'compsych-pillars.jpg', 'Pillars', 'Brand', '16 / 9'), P('compsych', 'image', 'compsych-model.jpg', 'Brand Model', 'Brand', '16 / 9'), A('compsych', 'compsych-kerning', 'Kerning', 'Brand', '4 / 3'), A('compsych', 'compsych-wordmark-details', 'Wordmark Details', 'Brand', '600 / 700'), P('compsych', 'image', 'compsych-identity.jpg', 'Identity', 'Brand', '3200 / 1870'), P('compsych', 'image', 'compsych-wordmark-a.webp', 'Wordmark', 'Brand', '1000 / 701'), A('compsych', 'compsych-graphics', 'Graphics', 'Brand', '1 / 1'), A('compsych', 'compsych-palette-font', 'Palette & Font', 'Systems', '20 / 13'), P('compsych', 'image', 'compsych-font-use.jpg', 'Font in Use', 'Systems', '16 / 9'), P('compsych', 'image', 'compsych-percentage.jpg', 'Data', 'Systems', '3727 / 2096'), A('compsych', 'compsych-guidelines', 'Guidelines', 'Systems', '4 / 3'), A('compsych', 'compsych-brand-hub', 'Brand Hub', 'Systems', '960 / 538'), A('compsych', 'compsych-button', 'Buttons', 'Systems', '16 / 9'), P('compsych', 'image', 'compsych-posters.webp', 'Posters I', 'Brand', '800 / 891'), P('compsych', 'image', 'compsych-posters-b.webp', 'Posters II', 'Brand', '800 / 891'), P('compsych', 'image', 'compsych-print.jpg', 'Print', 'Brand', '16 / 9'), A('compsych', 'compsych-website', 'Website', 'Websites', '4 / 3'), A('compsych', 'compsych-web-preview', 'Web Preview', 'Websites', '16 / 9'), A('compsych', 'compsych-loading', 'Loading', 'Websites', '16 / 9'), A('compsych', 'compsych-elements', 'Elements', 'Websites', '10 / 7'), P('compsych', 'image', 'compsych-awards.jpg', 'Awards', 'Brand', '2110 / 1406')]
}, {
  key: 'coachable',
  industry: 'Coaching',
  org: 'Startup',
  title: 'Coachable',
  cat: 'Brand',
  tag: 'Career Coaching',
  sub: 'Identity and website for career-changing coaching.',
  cover: A('coachable', 'coachable-hero', 'Coachable', 'Brand', '4 / 3'),
  cards: [A('coachable', 'coachable-figma', 'Figma File', 'Brand', '640 / 361'), A('coachable', 'coachable-proposals', 'Proposals', 'Brand', '8 / 5'), A('coachable', 'coachable-logo', 'Logo', 'Brand', '1920 / 1211'), A('coachable', 'coachable-numerals', 'Numerals', 'Brand', '8 / 5'), A('coachable', 'coachable-motif', 'Motif', 'Brand', '1 / 1'), A('coachable', 'coachable-expand', 'Expand', 'Brand', '1 / 1'), A('coachable', 'coachable-color', 'Color', 'Systems', '16 / 9'), P('coachable', 'image', 'coachable-cards.webp', 'Cards', 'Brand', '1601 / 1602'), P('coachable', 'image', 'coachable-print.webp', 'Print Set', 'Brand', '1 / 1'), A('coachable', 'coachable-code', 'Code', 'Brand', '128 / 71'), P('coachable', 'image', 'coachable-weights.webp', 'Weights', 'Systems', '1600 / 1601'), P('coachable', 'image', 'coachable-focus.webp', 'Focus', 'Brand', '1601 / 1602'), A('coachable', 'coachable-mark', 'Mark', 'Brand', '4 / 3'), P('coachable', 'image', 'coachable-stickers.webp', 'Stickers', 'Brand', '1601 / 1602'), P('coachable', 'image', 'coachable-packaging.webp', 'Packaging', 'Brand', '1 / 1'), P('coachable', 'image', 'coachable-keynote.webp', 'Keynote', 'Brand', '4851 / 3061'), A('coachable', 'coachable-home-page', 'Home Page', 'Websites', '16 / 9'), A('coachable', 'coachable-portraits', 'Portraits', 'Websites', '128 / 89'), P('coachable', 'image', 'coachable-site-screens.webp', 'Site Screens', 'Websites', '4851 / 3034'), A('coachable', 'coachable-menu', 'Menu', 'Websites', '1501 / 996'), A('coachable', 'coachable-phone', 'Mobile', 'Product', '4 / 5'), P('coachable', 'image', 'coachable-phone-hand.webp', 'Phone in Hand', 'Websites', '4935 / 3358'), A('coachable', 'coachable-grow', 'Grow', 'Websites', '320 / 261'), P('coachable', 'image', 'coachable-at-work.webp', 'At Work', 'Websites', '2402 / 3301'), P('coachable', 'image', 'coachable-booking.webp', 'Booking', 'Product', '2402 / 3301'), P('coachable', 'image', 'coachable-sections.webp', 'Web Sections', 'Websites', '4851 / 3034'), A('coachable', 'coachable-bento', 'Bento', 'Systems', '4 / 3'), P('coachable', 'image', 'coachable-remote.webp', 'Remote', 'Brand', '4851 / 2731'), A('coachable', 'coachable-typeface', 'Typeface', 'Systems', '8 / 5'), P('coachable', 'image', 'coachable-grid.webp', 'Grid', 'Systems', '4851 / 3034'), P('coachable', 'image', 'coachable-palette.webp', 'Palette', 'Systems', '4851 / 2773')]
}, {
  key: 'systemone',
  industry: 'Entertainment',
  org: 'Startup',
  title: 'System One',
  cat: 'Websites',
  tag: 'Entertainment',
  sub: 'Brand and website for film-led storytelling.',
  cover: A('systemone', 'systemone-intro', 'System One', 'Websites', '16 / 9'),
  cards: [A('systemone', 'systemone-logo', 'Logo', 'Brand', '3 / 2'), A('systemone', 'systemone-scrolling-type', 'Scrolling Type', 'Websites', '3 / 2'), P('systemone', 'image', 'systemone-app-icon.jpeg', 'App Icon', 'Brand', '1592 / 2149'), A('systemone', 'systemone-girl', 'Film', 'Websites', '4 / 5'), P('systemone', 'image', 'systemone-website.jpeg', 'Website', 'Websites', '3224 / 2149'), A('systemone', 'systemone-services', 'Services', 'Websites', '3 / 2'), P('systemone', 'image', 'systemone-in-hand.jpeg', 'In Hand', 'Product', '1593 / 2149'), A('systemone', 'systemone-live', 'Live', 'Brand', '16 / 9'), P('systemone', 'image', 'systemone-mobile.webp', 'Mobile', 'Product', '1323 / 1790'), P('systemone', 'image', 'systemone-dashboard.jpeg', 'Dashboard', 'Product', '3222 / 2149'), P('systemone', 'image', 'systemone-artist.jpeg', 'Artist Page', 'Product', '1592 / 2149'), P('systemone', 'image', 'systemone-stage.jpeg', 'On Stage', 'Brand', '1593 / 2149'), P('systemone', 'image', 'systemone-billboard.jpeg', 'Billboard', 'Brand', '3226 / 2149'), P('systemone', 'image', 'systemone-ooh.jpeg', 'OOH', 'Brand', '3226 / 2149'), P('systemone', 'image', 'systemone-poster.jpeg', 'Poster', 'Brand', '3222 / 2149'), P('systemone', 'image', 'systemone-cards.jpeg', 'Cards', 'Brand', '3222 / 2149'), A('systemone', 'systemone-stories', 'Stories', 'Websites', '3 / 2'), P('systemone', 'image', 'systemone-tagline.jpeg', 'Tagline', 'Brand', '3222 / 2149'), P('systemone', 'image', 'systemone-scheme-a.webp', 'Scheme I', 'Systems', '3842 / 2163'), P('systemone', 'image', 'systemone-scheme-b.webp', 'Scheme II', 'Systems', '1921 / 1081'), A('systemone', 'systemone-outro', 'Outro', 'Brand', '16 / 9'), P('systemone', 'image', 'systemone-numbers.png', 'Numbers', 'Websites', '124 / 37')]
},
// ILI.DIGITAL runs on the "Nexus" are.na channel — a longer, mixed
// image/video stack that stress-tests the inline-expand pattern.
{
  key: 'ili',
  industry: 'Venture',
  org: 'Enterprise',
  title: 'ILI.DIGITAL',
  cat: 'Websites',
  tag: 'Venture Studio',
  sub: 'The Nexus brand system, from logo to product.',
  cover: N('video', 'hero.mp4', 'ILI.DIGITAL', 'Websites', '16 / 9'),
  cards: [A('ili', 'ili-figma', 'Figma File', 'Brand', '96 / 47'), N('video', 'logos-2.mp4', 'Logos', 'Brand', '4 / 3'), N('video', 'detail.mp4', 'Logo Detail', 'Brand', '4 / 5'), N('image', 'technical-logo.png', 'Blueprint', 'Brand', '14 / 17'), N('video', 'reveal.mp4', 'Reveal', 'Brand', '21 / 9'), P('ili', 'image', 'ili-palette.webp', 'Palette', 'Systems', '647 / 140'), P('ili', 'image', 'ili-typeface.webp', 'Söhne', 'Systems', '246 / 217'), P('ili', 'image', 'ili-principles.webp', 'Fast, Focused', 'Brand', '771 / 656'), N('image', 'type.webp', 'Glyphs', 'Systems', '166 / 67'), N('image', 'status.webp', 'Portrait', 'Brand', '967 / 543'), P('ili', 'image', 'ili-print.png', 'Print', 'Brand', '1505 / 837'), N('video', 'smile.mp4', 'Smile', 'Brand', '4 / 3'), N('image', 'bade.webp', 'Badge', 'Brand', '743 / 1008'), N('image', 'poster.webp', 'Poster', 'Brand', '3 / 4'), N('image', 'corner.webp', 'Signage', 'Brand', '1505 / 874'), N('image', 'system.webp', 'Objects', 'Brand', '768 / 805'), N('image', 'website.webp', 'Web Hero', 'Websites', '539 / 337'), N('video', 'categories.mp4', 'Categories', 'Websites', '320 / 217'), N('video', 'animation.mp4', 'Animation', 'Brand', '21 / 9'), P('ili', 'image', 'ili-strategies.webp', 'AI Strategies', 'Websites', '31 / 17'), N('image', 'website-ii.webp', 'Website', 'Websites', '16 / 9'), A('ili', 'ili-statement', 'Statement', 'Websites', '160 / 101'), N('video', 'frames.mp4', 'Frames', 'Brand', '6 / 5'), N('image', 'category-ii.webp', 'Editorial', 'Websites', '403 / 255'), N('image', 'site-category.webp', 'People', 'Websites', '31 / 18'), N('image', 'footer.webp', 'Digital Builder', 'Websites', '62 / 41'), N('image', 'system-i.webp', 'Type Scale', 'Systems', '1600 / 1067'), N('image', 'system-color.webp', 'Color', 'Systems', '3 / 2'), N('image', 'type-sysrtem.webp', 'Type System', 'Systems', '3218 / 2037'), N('image', 'icon-system.webp', 'Icons', 'Systems', '6 / 5'), N('video', 'iconography.mp4', 'Iconography', 'Systems', '31 / 18'), N('image', 'form-field.webp', 'Form Field', 'Systems', '3276 / 1987'), N('image', 'button-system.webp', 'Buttons', 'Systems', '2 / 3'), N('image', 'tags.webp', 'Tags', 'Systems', '67 / 90'), N('image', 'spacing.webp', 'Spacing', 'Systems', '3222 / 2149'), N('image', 'type-ii.webp', 'Typography', 'Systems', '3 / 2'), N('image', 'technical-smile.webp', 'Smile Blueprint', 'Systems', '1638 / 899'), N('video', 'charts.mp4', 'Charts', 'Product', '3 / 2'), N('image', 'book.jpg', 'Book', 'Brand', '16 / 9')]
}, {
  key: 'hutte',
  industry: 'DevTools',
  org: 'Startup',
  title: 'Hutte',
  cat: 'Brand',
  tag: 'Salesforce DevOps',
  sub: 'Identity and product for the home of Salesforce DevOps.',
  cover: A('hutte', 'hutte-logo', 'Hutte', 'Brand', '3 / 2'),
  cards: [A('hutte', 'hutte-hero', 'Hero', 'Websites', '16 / 9'), P('hutte', 'image', 'hutte-glyphs.png', 'Glyph Set', 'Systems', '1611 / 1882'), P('hutte', 'image', 'hutte-founders.jpeg', 'Founders', 'Brand', '1611 / 1121'), P('hutte', 'image', 'hutte-color.webp', 'Color', 'Systems', '200 / 127'), P('hutte', 'image', 'hutte-keyboard.webp', 'Keyboard', 'Brand', '700 / 521'), A('hutte', 'hutte-emojis', 'Emojis', 'Brand', '1 / 1'), A('hutte', 'hutte-logo-reduction', 'Logo Reduction', 'Brand', '160 / 81'), P('hutte', 'image', 'hutte-team.jpeg', 'Team', 'Brand', '248 / 165'), P('hutte', 'image', 'hutte-beanie.webp', 'Beanie', 'Brand', '1 / 1'), P('hutte', 'image', 'hutte-flag.webp', 'Flag', 'Brand', '2761 / 2022'), P('hutte', 'image', 'hutte-bottle.webp', 'Bottle', 'Brand', '1378 / 919'), A('hutte', 'hutte-social-a', 'Social I', 'Brand', '480 / 289'), P('hutte', 'image', 'hutte-landing.jpeg', 'Landing', 'Websites', '1593 / 1792'), P('hutte', 'image', 'hutte-landing-b.jpeg', 'Landing II', 'Websites', '797 / 896'), P('hutte', 'image', 'hutte-outdoors.jpeg', 'Outdoors', 'Brand', '3221 / 2241'), A('hutte', 'hutte-social-b', 'Social II', 'Brand', '120 / 67'), P('hutte', 'image', 'hutte-remote.jpeg', 'Remote', 'Product', '3222 / 2041'), P('hutte', 'image', 'hutte-screens.webp', 'Screens', 'Product', '75 / 56'), A('hutte', 'hutte-tablet', 'Tablet', 'Brand', '4 / 3'), A('hutte', 'hutte-flow', 'Flow', 'Product', '1920 / 1091'), A('hutte', 'hutte-salesforce', 'Salesforce', 'Product', '16 / 9'), P('hutte', 'image', 'hutte-isometric.jpeg', 'Isometric', 'Websites', '3222 / 2041'), A('hutte', 'hutte-slider', 'Slider', 'Websites', '1920 / 1043'), A('hutte', 'hutte-members', 'Members', 'Product', '1920 / 1037'), A('hutte', 'hutte-onboarding', 'Onboarding', 'Product', '128 / 85'), P('hutte', 'image', 'hutte-app.webp', 'App', 'Product', '669 / 754'), P('hutte', 'image', 'hutte-timeline.webp', 'Timeline', 'Product', '669 / 754'), P('hutte', 'image', 'hutte-type-ramp.webp', 'Type Ramp', 'Systems', '70 / 39'), A('hutte', 'hutte-fields', 'Fields', 'Systems', '640 / 363'), P('hutte', 'image', 'hutte-cards.webp', 'Cards', 'Systems', '2720 / 751'), P('hutte', 'image', 'hutte-icon-set.webp', 'Icon Set', 'Systems', '679 / 228'), P('hutte', 'image', 'hutte-data-table.webp', 'Data Table', 'Systems', '1357 / 513')]
}];
const DEMOS = {
  toggle: DemoToggle,
  book: DemoBook,
  segment: DemoSegment
};

// ARTIFACTS — small self-initiated craft pieces (often AI-assisted)
// that blend into the client work, rauno.me/craft-style. Shape:
//   { title, type: 'video'|'image'|'component', src|demo, aspect,
//     desc, href?, at? }
// `at` slots the artifact in at that tile index (omit → appended).
// Artifacts carry scope 'IDK' and no industry/org, so they show under
// All + Scope:IDK and step back when a client filter is active.
// Standalone artifacts (rauno.me/craft-style) — currently empty: the
// Surge embeds live in the Surge project's cards, and the Switch demo
// was cut. Drop entries here to interleave pieces into the feed
// ({ title, type, src|demo|preview, aspect, desc, at }).
const ARTIFACTS = [];

// ─── asset warmup ─────────────────────────────────────────────
// The blue gate is dead time, so the moment the app mounts we spend
// it fetching what the first screen will paint — every poster/image
// of the first deal, then the first few cover clips — into the HTTP
// cache. LazyVideo/AssetMedia then hit cache instead of the network
// when the reveal runs. Progress feeds the blueprint's counter.
// every clip ships a "<name>-poster.jpg" first frame; light renditions
// (<name>-lite.mp4) share the original's poster
const posterOf = src => src.replace(/(-lite)?\.mp4$/, '-poster.jpg');
const WARM = {
  total: 0,
  done: 0,
  started: false,
  listeners: new Set()
};
function startWarmup() {
  if (WARM.started) return;
  WARM.started = true;
  const flat = PROJECTS.flatMap(p => [p.cover, ...p.cards]);
  const light = flat.slice(0, 30).map(a => a.type === 'video' ? posterOf(a.src) : a.type === 'image' ? a.src : a.preview).filter(Boolean);
  // the clips are the heavy part — skipped for data-saver visitors
  const saveData = navigator.connection && navigator.connection.saveData;
  const clips = saveData ? [] : flat.filter(a => a.type === 'video').slice(0, 6).map(a => a.src);
  WARM.total = light.length + clips.length;
  const notify = () => WARM.listeners.forEach(fn => fn(WARM));
  const get = url => fetch(url).then(r => r.ok ? r.blob() : null).catch(() => null).then(() => {
    WARM.done++;
    notify();
  });
  // light assets four at a time, then the clips one by one — no
  // bandwidth fight with the reveal's own first paints
  const queue = light.slice();
  let running = 0;
  new Promise(resolve => {
    const next = () => {
      if (!queue.length && running === 0) return resolve();
      while (queue.length && running < 4) {
        running++;
        get(queue.shift()).then(() => {
          running--;
          next();
        });
      }
    };
    next();
  }).then(async () => {
    for (const c of clips) await get(c);
  });
}

// Video that only downloads + plays while it's near the viewport. This
// keeps us from decoding a dozen clips at once (the smoothness killer)
// and defers below-the-fold bytes until they're actually scrolled to.
// Two rings: within a viewport of the fold the clip starts BUFFERING
// (src set, preload auto) so frames are ready by the time it shows;
// within 150px it plays — through PLAYERS, which caps how many clips
// decode at once. The overflow holds its poster until a slot frees.
const PLAYERS = {
  max: 4,
  active: new Set(),
  waiting: new Set()
};
function playerWants(el) {
  if (PLAYERS.active.has(el)) return;
  if (PLAYERS.active.size < PLAYERS.max) {
    PLAYERS.active.add(el);
    PLAYERS.waiting.delete(el);
    const p = el.play();
    if (p && p.catch) p.catch(() => {});
  } else {
    PLAYERS.waiting.add(el);
  }
}
function playerStops(el) {
  PLAYERS.waiting.delete(el);
  el.pause();
  if (PLAYERS.active.delete(el)) {
    const next = PLAYERS.waiting.values().next().value;
    if (next) playerWants(next);
  }
}
function LazyVideo({
  src,
  aspect
}) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false); // poster painted or first frame decoded
  // the poster is ~40KB, so the tile paints in one round-trip instead of
  // waiting on megabytes of video
  const poster = posterOf(src);
  useEffect(() => {
    const im = new Image();
    im.onload = () => setReady(true); // poster visible → shimmer off
    im.src = poster;
    const el = ref.current;
    if (!el) return;
    el.muted = true; // belt-and-suspenders for autoplay policies
    let loaded = false;
    const onData = () => setReady(true); // fallback if the poster 404s
    el.addEventListener('loadeddata', onData);
    // ahead-of-time buffering only pays on a decent link — on a slow or
    // data-saver connection the near ring just reads the header, so the
    // clips actually on screen keep the bandwidth
    const load = () => {
      if (loaded) return;
      loaded = true;
      // (effectiveType only — Chrome's `downlink` estimate is capped and
      // reads ~2 Mbps on an idle 200 Mbps line)
      const c = navigator.connection;
      const slow = c && (c.saveData || c.effectiveType && c.effectiveType !== '4g');
      el.src = src;
      el.preload = slow ? 'metadata' : 'auto';
    };
    const near = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) load();
    }, {
      rootMargin: '100% 0px',
      threshold: 0
    });
    const vis = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        load();
        playerWants(el);
      } else if (loaded) playerStops(el);
    }, {
      rootMargin: '150px 0px',
      threshold: 0.01
    });
    near.observe(el);
    vis.observe(el);
    return () => {
      near.disconnect();
      vis.disconnect();
      playerStops(el);
      el.removeEventListener('loadeddata', onData);
    };
  }, [src]);
  return /*#__PURE__*/React.createElement("div", {
    className: `asset-media asset-media--video ${ready ? 'asset-media--ready' : ''}`,
    style: {
      aspectRatio: aspect
    }
  }, /*#__PURE__*/React.createElement("video", {
    ref: ref,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "none",
    poster: poster
  }));
}
function AssetMedia({
  asset
}) {
  // skeleton control for the image branches — cleared on load (or
  // immediately when the image is already in cache)
  const [ready, setReady] = useState(false);
  const imgRef = el => {
    if (el && el.complete && el.naturalWidth > 0 && !ready) setReady(true);
  };
  if (asset.type === 'image') {
    // with an explicit aspect the image cover-fills immediately — lazy
    // loads inside folds land after snap() has already run
    return /*#__PURE__*/React.createElement("div", {
      className: `asset-media asset-media--img${asset.aspect ? ' asset-media--fixed' : ''} ${ready ? 'asset-media--ready' : ''}`,
      style: asset.aspect ? {
        aspectRatio: asset.aspect
      } : undefined
    }, /*#__PURE__*/React.createElement("img", {
      ref: imgRef,
      src: asset.src,
      alt: asset.title,
      loading: "lazy",
      decoding: "async",
      onLoad: () => setReady(true)
    }));
  }
  if (asset.type === 'embed') {
    // live-prototype artifact: the tile shows a captured preview — the
    // real page loads as an iframe in the shot overlay
    return /*#__PURE__*/React.createElement("div", {
      className: `asset-media asset-media--img asset-media--fixed ${ready ? 'asset-media--ready' : ''}`,
      style: {
        aspectRatio: asset.aspect
      }
    }, /*#__PURE__*/React.createElement("img", {
      ref: imgRef,
      src: asset.preview,
      alt: asset.title,
      loading: "lazy",
      decoding: "async",
      onLoad: () => setReady(true)
    }));
  }
  if (asset.type === 'video') {
    if (asset.src) {
      return /*#__PURE__*/React.createElement(LazyVideo, {
        src: asset.src,
        aspect: asset.aspect
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "asset-media asset-media--canvas",
      style: {
        aspectRatio: asset.aspect
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "asset-play",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 16 16",
      width: "13",
      height: "13"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 3.2v9.6L13 8 5 3.2z",
      fill: "currentColor"
    }))));
  }
  if (asset.type === 'gif') {
    return /*#__PURE__*/React.createElement("div", {
      className: "asset-media asset-media--canvas",
      style: {
        aspectRatio: asset.aspect
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "asset-gif mono",
      "aria-hidden": "true"
    }, "GIF"));
  }
  // component — live demo on a quiet canvas
  const Demo = DEMOS[asset.demo] || DemoToggle;
  return /*#__PURE__*/React.createElement("div", {
    className: "asset-media asset-media--canvas",
    style: {
      aspectRatio: asset.aspect
    }
  }, /*#__PURE__*/React.createElement(Demo, null));
}

// Expanded view — recent.design-style detail overlay.
// Rendered through a portal: the container creates a stacking context
// (z-index: 1), which would trap the modal underneath the sticky nav.
function WorkModal({
  tile,
  onClose
}) {
  const asset = tile.asset;
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);
  // Bare lightbox: no panel — the asset expands to the largest size that
  // fits the viewport (aspect kept, never overflows, mobile included)
  // over a heavily blurred page. The tile chrome (FIG / title / category)
  // lives HERE, as a quiet caption pinned to the bottom edge — the feed
  // tiles themselves carry no text.
  const stop = e => e.stopPropagation();
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    className: "work-modal",
    onClick: onClose,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": asset.title
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "work-modal-close mono",
    onClick: onClose,
    "aria-label": "Close"
  }, "\u2715 CLOSE"), /*#__PURE__*/React.createElement("div", {
    className: "work-modal-caption"
  }, /*#__PURE__*/React.createElement("span", {
    className: "work-modal-caption-title"
  }, asset.title), /*#__PURE__*/React.createElement("span", {
    className: "work-modal-caption-meta mono"
  }, tile.fig, " \xB7 ", (tile.note || '').toUpperCase())), asset.type === 'image' ? /*#__PURE__*/React.createElement("img", {
    className: "work-lightbox-media",
    src: asset.src,
    alt: asset.title,
    style: {
      aspectRatio: asset.aspect
    },
    onClick: stop
  }) : asset.type === 'component' ? /*#__PURE__*/React.createElement("div", {
    className: "work-lightbox-demo",
    onClick: stop
  }, React.createElement(DEMOS[asset.demo] || DemoToggle)) : asset.type === 'embed' ? /*#__PURE__*/React.createElement("div", {
    className: "work-lightbox-embed",
    style: {
      aspectRatio: asset.aspect || '16 / 9'
    },
    onClick: stop
  }, /*#__PURE__*/React.createElement("iframe", {
    src: asset.src,
    title: asset.title,
    loading: "lazy",
    allow: "fullscreen"
  })) : /*#__PURE__*/React.createElement("video", {
    className: "work-lightbox-media",
    src: asset.full || asset.src,
    poster: asset.src && posterOf(asset.src),
    style: {
      aspectRatio: asset.aspect
    },
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    onClick: stop
  })), document.body);
}

// Flat masonry feed of every shot. Clicking a tile opens its project's
// info overlay (WorkModal) — no inline expansion.
function feedColCount() {
  // covers per row: 1 on phones, 2 everywhere else
  return window.innerWidth <= 480 ? 1 : 2;
}
function feedIsDesktop() {
  return window.innerWidth >= 901;
}

// Cover stagger (desktop only): the 2 covers in each row get varied
// widths (spans summing to 12) + vertical offsets, cycling per row, so
// the feed itself reads like a canvas. Mobile / tablet stay uniform.
const COVER_SPANS = [[7, 5], [5, 7], [8, 4]];
// one card in each row drops a few cells below its neighbour — the
// dropped SIDE alternates per row so the feed weaves down the page
// instead of always sagging right; offsets stay shy of half a card
// so no row opens dead scroll
const COVER_MTS = [[0, 4], [3, 0], [0, 5]];
function coverSlot(rowIdx, colIdx, desktop, row) {
  if (!desktop) return null; // only desktop staggers
  // a project cover owns its row: ~80% wide (10 of 12 tracks, on-grid),
  // anchored LEFT with clean air on the right — the recurring full-row
  // shape is what marks "new project starts here"
  if (row && row[0] && row[0].cover) return {
    '--cspan': 10,
    '--cmt': 0
  };
  // a tile left alone when the next cover closed its row early
  if (row && row.length === 1) return {
    '--cspan': 7,
    '--cmt': 0
  };
  const spans = COVER_SPANS[rowIdx % COVER_SPANS.length];
  const mts = COVER_MTS[rowIdx % COVER_MTS.length];
  return {
    '--cspan': spans[colIdx] || 6,
    '--cmt': mts[colIdx] || 0
  };
}

// Tap-vs-scroll guard for full-tile tap targets: the switch/button fills
// the whole tile, so a scroll flick that starts on it would otherwise fire.
// If the pointer travelled more than a few px between press and release,
// treat it as a scroll and cancel the activation (and the outside-close).
function useTapGuard(threshold = 10) {
  const downRef = useRef(null);
  return {
    onPointerDown: e => {
      downRef.current = [e.clientX, e.clientY];
    },
    onClickCapture: e => {
      const d = downRef.current;
      downRef.current = null;
      if (d && Math.hypot(e.clientX - d[0], e.clientY - d[1]) > threshold) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  };
}

// One tile in the flat feed — cover or piece, identical anatomy: just
// the framed media (recent.design-style — no FIG, no title, no category
// on the tile; all of that surfaces in the WorkModal on tap). Clicking
// opens the shot's info overlay — no inline expansion, the feed stays calm.
function FeedTile({
  tile,
  index,
  onOpen,
  slotStyle,
  batchStart,
  initialLoad
}) {
  const guard = useTapGuard();
  // Entrance is locked at FIRST mount and never recomputed — otherwise a
  // later class flip would re-trigger the animation (the page-load reveal
  // carries a ~6s delay, which is what made Gimmie More deals invisible).
  const entrance = useRef(null);
  if (entrance.current === null) {
    entrance.current = initialLoad ? {
      cls: 'reveal',
      style: {
        '--reveal-delay': `${2600 + Math.min(index, 8) * 100}ms`
      }
    } : {
      cls: 'asset-tile--dealt',
      style: {
        '--deal-delay': `${Math.max(0, index - batchStart) * 70}ms`
      }
    };
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "proj",
    style: slotStyle || undefined
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: `asset-tile asset-tile--cover ${entrance.current.cls}`,
    style: entrance.current.style,
    onClick: onOpen,
    "aria-haspopup": "dialog",
    "aria-label": `${tile.asset.title} — details`
  }, guard), /*#__PURE__*/React.createElement("div", {
    className: "asset-frame"
  }, /*#__PURE__*/React.createElement(AssetMedia, {
    asset: tile.asset
  }))));
}

// Display names for the scope filter (data keeps the original cats)
const SCOPE_LABELS = {
  Websites: 'Website'
};
// Fixed menu order for scope; anything untagged lands after these
const SCOPE_ORDER = ['IDK', 'Brand', 'Website', 'Product', 'Systems'];
const FILTER_GROUPS = [['industry', 'Industry'], ['org', 'Org Type'], ['scope', 'Scope']];

// Seeded Fisher-Yates — the shuffle must be PURE per render (seed in
// state), or every re-render would deal a different order
function mulberry32(seed) {
  let a = seed | 0;
  return () => {
    a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function seededShuffle(list, seed) {
  const rnd = mulberry32(seed);
  const out = list.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// Dice next to the sticky filter — a BINARY shuffle mode: on rolls the
// feed into a random order (solid accent pill), off restores the
// natural order. The die spring-tumbles on every flip.
function DiceButton({
  active,
  onToggle
}) {
  const [rolling, setRolling] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `fdice ${active ? 'fdice--on' : ''}`,
    onClick: () => {
      setRolling(true);
      onToggle();
    },
    "aria-pressed": active,
    "aria-label": "Shuffle the work",
    title: active ? 'Shuffle off' : 'Shuffle'
  }, /*#__PURE__*/React.createElement("svg", {
    className: rolling ? 'fdice-die fdice-die--roll' : 'fdice-die',
    onAnimationEnd: () => setRolling(false),
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "4.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.4",
    cy: "8.4",
    r: "0.9",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15.6",
    cy: "8.4",
    r: "0.9",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "0.9",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.4",
    cy: "15.6",
    r: "0.9",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15.6",
    cy: "15.6",
    r: "0.9",
    fill: "currentColor",
    stroke: "none"
  })));
}

// ONE filter chip — a single pill that opens a grouped menu (Industry /
// Org Type / Scope headers with their values). Only one value can be
// active across ALL dimensions; picking the active value again clears.
// The chip lives ONLY in the sticky capsule — the resting band carries
// no filters (Jean: "only show filters when scrolling").
function FilterMenu({
  filter,
  groups,
  onPick
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDown = e => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  const isOn = (dim, v) => !!filter && filter.dim === dim && filter.val === v;
  const pick = (dim, v) => {
    onPick(isOn(dim, v) ? null : {
      dim,
      val: v
    }); // tap-again clears
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("span", {
    className: `fselect-wrap ${open ? 'fselect-wrap--open' : ''}`,
    ref: rootRef
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `fselect fselect--icon ${filter ? 'fselect--on' : ''}`,
    onClick: () => setOpen(o => !o),
    "aria-haspopup": "menu",
    "aria-expanded": open,
    "aria-label": filter ? `Filtered: ${filter.val}` : 'Filter the work',
    title: filter ? filter.val : 'Filter'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "fmenu fmenu--grouped",
    role: "menu",
    "aria-label": "Filter work"
  }, groups.map(([dim, label, options]) => /*#__PURE__*/React.createElement("div", {
    className: "fmenu-group",
    key: dim
  }, /*#__PURE__*/React.createElement("div", {
    className: "fmenu-label mono",
    "aria-hidden": "true"
  }, label), options.map(v => /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "menuitemradio",
    "aria-checked": isOn(dim, v),
    className: `fmenu-item mono ${isOn(dim, v) ? 'fmenu-item--on' : ''}`,
    onClick: () => pick(dim, v),
    key: v
  }, v))))));
}
function AssetsFeed() {
  const PAGE = 14; // tiles per Gimmie More pull
  const FIRST_DEAL = 28; // tiles before the toggle appears (Jean: 2× the pull)
  const [cols, setCols] = useState(feedColCount);
  const [desktop, setDesktop] = useState(feedIsDesktop);
  const [active, setActive] = useState(null); // the shot open in the info overlay
  // ONE active filter across all dimensions: { dim, val } | null
  const [filter, setFilterOn] = useState(null);
  // dice roll: null = natural order, otherwise the shuffle seed
  const [shuffleSeed, setShuffleSeed] = useState(null);
  const [limit, setLimit] = useState(FIRST_DEAL); // grown by the Gimmie More switch
  // Entrance bookkeeping: tiles mounted at page load join the big page
  // reveal; tiles mounted after any interaction (deal/filter) cascade in
  // one by one from `dealStart` instead.
  const initialLoad = useRef(true);
  const [dealStart, setDealStart] = useState(0);
  useEffect(() => {
    const onResize = () => {
      setCols(feedColCount());
      setDesktop(feedIsDesktop());
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const openShot = tile => {
    setActive(tile);
    playStateChange(true);
    haptic(10);
  };
  const closeShot = () => {
    setActive(null);
    playStateChange(false);
  };
  // shared re-deal choreography: cascade from the top + snap relayout,
  // then glide to the feed start — the change always comes from the
  // sticky controls deep in the page, and without the glide scroll
  // anchoring dumps you at a random height
  const redeal = () => {
    initialLoad.current = false;
    setDealStart(0);
    setLimit(FIRST_DEAL);
    haptic(8);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      const first = document.querySelector('.feed-masonry .asset-tile');
      if (first) {
        const cell = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--board-cell')) || 32;
        // land ONE cell above the first tile — the band stays above the
        // viewport, so the sticky controls never blink away (3 cells
        // used to overshoot past the band's trigger line); instant, so
        // no anchored in-between frame paints
        const y = first.getBoundingClientRect().top + window.scrollY - cell;
        window.scrollTo({
          top: y,
          behavior: 'auto'
        });
      }
    }, 60);
  };
  const setFilter = next => {
    setFilterOn(next); // shuffle is a mode — filtering doesn't clear it
    redeal();
  };
  const toggleShuffle = () => {
    setShuffleSeed(s => s === null ? Math.floor(Math.random() * 1e9) : null);
    redeal();
  };
  // Flat feed: every project contributes its cover then its pieces, in
  // order — one continuous scroll, no folding. Artifacts slot in where
  // their `at` says. FIG numbers run straight through the FULL feed and
  // stay stable under filtering — figures are identity, not position.
  const tiles = [];
  PROJECTS.forEach(p => {
    // covers are flagged: they start a fresh row, large and LEFT, so
    // scanning the feed shows where each project begins
    tiles.push({
      asset: p.cover,
      note: p.tag || p.cat,
      key: p.key,
      cover: true,
      industry: p.industry,
      org: p.org,
      scope: SCOPE_LABELS[p.cover.cat] || p.cover.cat
    });
    p.cards.forEach((a, j) => tiles.push({
      asset: a,
      note: a.cat,
      key: `${p.key}-${j}`,
      industry: p.industry,
      org: p.org,
      scope: SCOPE_LABELS[a.cat] || a.cat
    }));
  });
  ARTIFACTS.forEach((a, i) => {
    // artifacts may carry industry/org (e.g. Surge pieces file under
    // AI / Unicorn); scope is always IDK
    const tile = {
      asset: a,
      note: 'Artifact',
      key: `artifact-${i}`,
      scope: 'IDK',
      industry: a.industry,
      org: a.org
    };
    if (a.at != null && a.at <= tiles.length) tiles.splice(a.at, 0, tile);else tiles.push(tile);
  });
  tiles.forEach((t, i) => {
    t.fig = `FIG_${String(i + 1).padStart(3, '0')}`;
  });
  // Chip values derive from the data — tag a project gov/unicorn (or an
  // artifact Fun) and its chip appears here on its own.
  const uniq = xs => Array.from(new Set(xs.filter(Boolean)));
  const values = {
    industry: uniq(tiles.map(t => t.industry)),
    org: uniq(tiles.map(t => t.org)),
    scope: uniq(tiles.map(t => t.scope)).sort((a, b) => {
      const ia = SCOPE_ORDER.indexOf(a),
        ib = SCOPE_ORDER.indexOf(b);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    })
  };
  const visible = tiles.filter(t => !filter || t[filter.dim] === filter.val);
  // dice roll shuffles the deal order — FIGs don't move, they're
  // identity (assigned on the full list above), not position
  const ordered = shuffleSeed === null ? visible : seededShuffle(visible, shuffleSeed);
  // Deal only `limit` tiles; the Gimmie More switch below grows it.
  const dealt = ordered.slice(0, limit);
  const hasMore = visible.length > dealt.length;
  // Row-major grid; desktop subdivides into 12 tracks so tiles take
  // varied spans + offsets (coverSlot), tablet/mobile one track per tile.
  // A project COVER always opens a fresh row (large, left) — if one
  // would land mid-row, the row closes early and the tile before it
  // sits alone.
  const trackCount = desktop ? 12 : cols;
  const rows = [];
  let row = [];
  dealt.forEach(t => {
    if (t.cover) {
      // covers own their row outright — close whatever was open
      if (row.length) {
        rows.push(row);
        row = [];
      }
      rows.push([t]);
      return;
    }
    row.push(t);
    if (row.length === cols) {
      rows.push(row);
      row = [];
    }
  });
  if (row.length) rows.push(row);
  return /*#__PURE__*/React.createElement("section", {
    className: "feed-section",
    "data-screen-label": "02 Work"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feed-masonry",
    style: {
      gridTemplateColumns: `repeat(${trackCount}, minmax(0, 1fr))`
    }
  }, (() => {
    // rows vary in length (covers break them early), so the deal
    // index runs flat across the whole grid
    let flatIdx = 0;
    return rows.map((row, ri) => row.map((t, ci) => /*#__PURE__*/React.createElement(FeedTile, {
      tile: t,
      index: flatIdx++,
      onOpen: () => openShot(t),
      slotStyle: coverSlot(ri, ci, desktop, row),
      batchStart: dealStart,
      initialLoad: initialLoad.current,
      key: t.key
    })));
  })()), visible.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "feed-empty mono"
  }, "NOTHING HERE YET \u2014 LOOSEN A FILTER"), hasMore && /*#__PURE__*/React.createElement(MoreToggle, {
    onMore: () => {
      // The new tiles land ABOVE the toggle, and scroll anchoring
      // keeps the toggle pinned under the cursor — so without a
      // nudge the deal happens off-screen. Glide to the first
      // fresh tile so the reveal is actually seen.
      const prev = dealt.length;
      initialLoad.current = false;
      setDealStart(prev); // fresh tiles cascade from here
      setLimit(l => l + PAGE);
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
        const first = document.querySelectorAll('.feed-masonry .asset-tile')[prev];
        if (first) {
          const cell = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--board-cell')) || 32;
          const y = first.getBoundingClientRect().top + window.scrollY - cell * 2;
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
      }, 120);
    }
  }), active && /*#__PURE__*/React.createElement(WorkModal, {
    tile: active,
    onClose: closeShot
  }));
}

// ─────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────
const GLITCH_CHARS = '!<>-_\\/[]{}—=+*^?#________';
function GlitchLink({
  from,
  to,
  href = '#',
  className = '',
  newTab = true
}) {
  const [display, setDisplay] = useState(from);
  const rafRef = useRef(null);
  const startRef = useRef(0);
  const targetRef = useRef(from);
  const startScramble = target => {
    targetRef.current = target;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const startStr = display;
    const len = Math.max(startStr.length, target.length);
    // Per-char "lock" times — each character settles at a different point
    const locks = Array.from({
      length: len
    }, (_, i) => {
      const start = Math.floor(Math.random() * 5);
      const end = start + 5 + Math.floor(Math.random() * 7);
      return [start, end];
    });
    startRef.current = performance.now();
    const tick = now => {
      const elapsed = (now - startRef.current) / 30; // ~30ms per "frame"
      let out = '';
      let done = 0;
      for (let i = 0; i < len; i++) {
        const targetCh = target[i] ?? '';
        const [s, e] = locks[i];
        if (elapsed < s) {
          out += startStr[i] ?? '';
        } else if (elapsed < e) {
          out += GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        } else {
          out += targetCh;
          done++;
        }
      }
      setDisplay(out);
      if (done < len) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };
  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    className: 'ulink glitch-link' + (className ? ' ' + className : ''),
    target: newTab ? '_blank' : undefined,
    rel: newTab ? 'noreferrer' : undefined,
    onMouseEnter: () => startScramble(to),
    onMouseLeave: () => startScramble(from),
    onFocus: () => startScramble(to),
    onBlur: () => startScramble(from)
  }, /*#__PURE__*/React.createElement("span", {
    className: "glitch-link-text"
  }, display));
}
const ELSEWHERE_LINKS = [{
  from: 'Substack ↗',
  to: 'Stuff I sometimes write ↗',
  href: 'https://konpo.substack.com/'
}, {
  from: 'LinkedIn ↗',
  to: 'Polished me ↗',
  href: 'https://www.linkedin.com/in/jeanmassad/'
}, {
  from: 'Insta ↗',
  to: 'Mainly snow and surf ↗',
  href: 'https://www.instagram.com/heychacho/'
}, {
  from: 'Are.na ↗',
  to: 'Curated work ↗',
  href: 'https://www.are.na/jean-massad-b5kb-hfgjv0/channels'
}, {
  from: 'Dribbble ↗',
  to: 'I need to update this ↗',
  href: 'https://dribbble.com/jeanmassad'
}, {
  from: 'GitHub ↗',
  to: 'AI has turned me into a coding monkey with fire ↗',
  href: 'https://github.com/jeanm-404'
}];
function Footer({
  startDelay = 6200
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer",
    "data-screen-label": "03 Footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-label mono"
  }, "elsewhere"), /*#__PURE__*/React.createElement("ul", {
    className: "footer-links"
  }, ELSEWHERE_LINKS.map((l, i) => /*#__PURE__*/React.createElement("li", {
    key: l.from,
    className: "reveal",
    style: {
      '--reveal-delay': `${startDelay + i * 140}ms`
    }
  }, /*#__PURE__*/React.createElement(GlitchLink, {
    from: l.from,
    to: l.to,
    href: l.href
  })))))));
}

// Weather callout — the visitor's sky, or mine as an availability
// status (api/weather.ts; ported from the Astro handoff). No location
// prompt, no spinner; if everything fails the line simply never shows.
// Preview states with ?wx=rain, ?wx=vpn, ?wx=down, …
function WeatherLine() {
  const [wx, setWx] = useState(null); // { line, icon }
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const force = new URLSearchParams(window.location.search).get('wx');
    const cached = !force && sessionStorage.getItem('wx-v2');
    if (cached) {
      try {
        setWx(JSON.parse(cached));
        return;
      } catch (e) {/* refetch */}
    }
    const params = new URLSearchParams({
      tz: Intl.DateTimeFormat().resolvedOptions().timeZone || ''
    });
    if (force) params.set('force', force);
    fetch('/api/weather?' + params.toString()).then(r => r.json()).then(data => {
      if (!data || !data.line) return;
      if (!force) sessionStorage.setItem('wx-v2', JSON.stringify(data));
      setWx(data);
    }).catch(() => {/* no line beats a broken line */});
  }, []);
  useEffect(() => {
    if (!wx) return;
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(raf);
  }, [wx]);
  if (!wx) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: `wx-block ${entered ? 'wx-in' : ''}`,
    role: "status"
  }, wx.icon && /*#__PURE__*/React.createElement("img", {
    className: "wx-icon",
    src: `uploads/weather/${wx.icon}.svg`,
    alt: "",
    width: "72",
    height: "72"
  }), /*#__PURE__*/React.createElement("p", {
    className: "wx-line"
  }, wx.line));
}

// The weather widget's old spot: ONE light switch, resting ON — the
// inverse of the entry gate. Flip it off and the lights go out: back
// to the blue loading screen, where the gate switches have multiplied.
function OffSwitch({
  onOff
}) {
  const [off, setOff] = useState(false); // true while the flip-off plays
  const busy = useRef(false);
  const flip = () => {
    if (busy.current) return;
    busy.current = true;
    setOff(true);
    playToggleOff();
    haptic(10);
    setTimeout(() => {
      onOff();
      // back ON for the next visit — the blue screen hides the reset
      setTimeout(() => {
        setOff(false);
        busy.current = false;
      }, 700);
    }, 520);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `tfield ${off ? 'tfield--off' : ''}`
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "tfield-switch",
    onClick: flip,
    "aria-label": "Lights out \u2014 back to the start"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tfield-knob"
  })));
}

/* ------------------------------------------------------------------
   HoloCard — the footer "avatar": Jean as a Stage 2 rare-holo card.
   Hover tilts it and lights the Konpo-mark foil; click/tap/Enter picks
   it up (springs to the viewport centre, enlarges to ~440px, a single
   360° flip shows the Konpo back), click again / backdrop / Esc puts
   it down. On touch devices the picked-up card follows the phone's
   tilt (DeviceOrientation, permission asked inside the tap on iOS).
   Pointer state is written straight to CSS vars — no React re-render
   per frame. Source of truth for markup/CSS: scratch/holo-card.html.
   ------------------------------------------------------------------ */
const HC_DEFS = '<defs><symbol id="hc-e-water" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="#3aa0ea" stroke="#fff" stroke-width="1.6"/><circle cx="16" cy="16" r="15" fill="url(#hc-wg)" opacity=".9"/><path d="M16 6.5c3.6 5 6.3 8.6 6.3 12.1a6.3 6.3 0 0 1-12.6 0C9.7 15.1 12.4 11.5 16 6.5z" fill="#fff"/><path d="M13.2 18.2c0 1.4.7 2.6 1.9 3.2" stroke="#3aa0ea" stroke-width="1.4" fill="none" stroke-linecap="round"/></symbol><radialGradient id="hc-wg" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#8fd3ff"/><stop offset="1" stop-color="#1f6fc2"/></radialGradient><symbol id="hc-e-figma" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="#1e1e1e" stroke="#fff" stroke-width="1.6"/><circle cx="16" cy="16" r="15" fill="url(#hc-fg)" opacity=".9"/><g transform="translate(9.67 6.5) scale(.3333)"><path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 1 1-19 0z"/><path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/><path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/><path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/></g></symbol><radialGradient id="hc-fg" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#3a3a3a"/><stop offset="1" stop-color="#111"/></radialGradient><symbol id="hc-e-claude" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="#d97757" stroke="#fff" stroke-width="1.6"/><circle cx="16" cy="16" r="15" fill="url(#hc-cg)" opacity=".9"/><g transform="translate(6.5 6.5) scale(.79)"><path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" fill="#fff"/></g></symbol><radialGradient id="hc-cg" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#e9a08a"/><stop offset="1" stop-color="#b8542f"/></radialGradient><symbol id="hc-e-jira" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="#1868db" stroke="#fff" stroke-width="1.6"/><circle cx="16" cy="16" r="15" fill="url(#hc-jg)" opacity=".9"/><g transform="translate(7 7) scale(.75)"><path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z" fill="#fff"/></g></symbol><radialGradient id="hc-jg" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#4c9aff"/><stop offset="1" stop-color="#0747a6"/></radialGradient><symbol id="hc-e-snow" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="#8fd0f5" stroke="#fff" stroke-width="1.6"/><circle cx="16" cy="16" r="15" fill="url(#hc-sg)" opacity=".9"/><g stroke="#fff" stroke-width="1.7" stroke-linecap="round" fill="none"><path d="M16 6.5v19M7.8 11.25l16.4 9.5M7.8 20.75l16.4-9.5"/><path d="M13.2 8.6L16 10.4l2.8-1.8M13.2 23.4L16 21.6l2.8 1.8M8.9 14.6l2.9-1.6.2-3.3M23.1 17.4l-2.9 1.6-.2 3.3M8.9 17.4l2.9 1.6.2 3.3M23.1 14.6l-2.9-1.6-.2-3.3"/></g></symbol><radialGradient id="hc-sg" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#c9ecff"/><stop offset="1" stop-color="#4aa3dd"/></radialGradient><symbol id="hc-e-surf" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="#1f5fc2" stroke="#fff" stroke-width="1.6"/><circle cx="16" cy="16" r="15" fill="url(#hc-ug)" opacity=".9"/><path d="M6.5 22.5c2.6-.2 3.6-2.4 5.2-4.6 2.2-3.1 5.3-6 9.4-5.6 3 .3 5 2.4 5.7 5.2-1.3-1.5-3-2.1-4.8-1.6 1.7 1.2 2.3 3 1.9 4.9-.6-1.6-1.9-2.5-3.4-2.6-2.2-.1-3.4 1.7-5.4 3.2-2.3 1.7-5.3 2.2-8.6 1.1z" fill="#fff"/><path d="M8 24.6c5.4 1.4 10.9 1.4 16.4 0" stroke="#fff" stroke-width="1.6" stroke-linecap="round" fill="none"/></symbol><radialGradient id="hc-ug" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#5aa5f0"/><stop offset="1" stop-color="#123f8f"/></radialGradient><symbol id="hc-e-hn" viewBox="0 0 32 32"><rect x="1.5" y="1.5" width="29" height="29" rx="4" fill="#fff" stroke="#fff" stroke-width="1.6"/><path transform="translate(2.5 2.5) scale(1.125)" fill="#ff6600" fill-rule="evenodd" d="M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z"/></symbol><symbol id="hc-star" viewBox="0 0 24 24"><path d="M12 2.2l2.95 6.35 6.95.8-5.15 4.75 1.4 6.85L12 17.5l-6.15 3.45 1.4-6.85L2.1 9.35l6.95-.8z" fill="#fff" stroke="#0f1a2e" stroke-width="1.2" stroke-linejoin="round"/></symbol><symbol id="hc-set-rain" viewBox="0 0 32 32"><path d="M9 20a5 5 0 0 1 .6-9.96A7 7 0 0 1 23 12a4.5 4.5 0 0 1 .5 8H9z" fill="#fff" stroke="#0f1a2e" stroke-width="1.2" stroke-linejoin="round"/><g stroke="#fff" stroke-width="1.8" stroke-linecap="round"><path d="M12 23.5l-1.5 4"/><path d="M17 23.5l-1.5 4"/><path d="M22 23.5l-1.5 4"/></g></symbol></defs>';
const HC_BACK = '<svg class="hc-mark" viewBox="-1.6 -1.6 79.2 79.2"><path d="M4.63768 47.3768C10.8177 41.1926 20.8417 41.1963 27.0254 47.3768C33.209 53.5573 33.209 63.5822 27.0254 69.7664C20.8454 75.9506 10.8213 75.947 4.63768 69.7664C-1.54587 63.5859 -1.54592 53.5609 4.63768 47.3768ZM47.3799 47.3768C53.5599 41.193 63.583 41.1965 69.7666 47.3768C75.9502 53.5573 75.9502 63.5822 69.7666 69.7664C63.5867 75.9504 53.5635 75.9466 47.3799 69.7664C41.1962 63.5859 41.1962 53.561 47.3799 47.3768ZM4.63768 4.63653C10.8176 -1.54735 20.8417 -1.54354 27.0254 4.63653C29.5008 7.11068 30.984 10.2016 31.4775 13.4149C24.2363 15.8276 19.0149 22.6598 19.0146 30.7117C19.0146 30.9214 19.0193 31.1308 19.0264 31.3387C13.9895 32.3707 8.54638 30.9329 4.63768 27.0262C-1.54557 20.8456 -1.54584 10.8206 4.63768 4.63653ZM47.3789 4.63653C53.5588 -1.54746 63.5829 -1.54356 69.7666 4.63653C75.9502 10.8171 75.9502 20.842 69.7666 27.0262C65.8806 30.9148 60.4752 32.3552 55.4599 31.3533C55.4673 31.1406 55.4726 30.9263 55.4726 30.7117C55.4724 22.6305 50.2128 15.7787 42.9306 13.3895C43.4285 10.1859 44.9107 7.10499 47.3789 4.63653Z" fill="#fff"/></svg><svg class="hc-wordmark" viewBox="42.0265 0 87.9925 26.7738"><path d="M42.0265 21.7259V1.0946H45.6396V10.562L54.7195 1.0946H59.2437L49.4726 11.3789L59.5579 21.7259H54.7823L45.6396 12.4785V21.7259H42.0265Z" fill="#fff"/><path d="M58.7144 13.9342C58.7144 9.37856 62.3275 5.82829 66.946 5.82829C71.5645 5.82829 75.1462 9.37856 75.1462 13.9342C75.1462 18.4899 71.5331 22.0401 66.946 22.0401C62.3589 22.0401 58.7144 18.4899 58.7144 13.9342ZM63.4586 10.4625C61.542 12.379 61.542 15.4894 63.4586 17.4059C65.3751 19.3224 68.4855 19.3224 70.402 17.4059C72.3185 15.4894 72.3185 12.379 70.402 10.4625C68.4855 8.54598 65.3751 8.54598 63.4586 10.4625Z" fill="#fff"/><path d="M77.4717 21.7259V6.14248H80.802V7.74481C81.8074 6.55092 83.4097 5.82829 85.3891 5.82829C89.2221 5.82829 91.9555 8.56169 91.9555 12.866V21.7259H88.4681V13.1802C88.4681 10.6353 87.0857 9.12721 84.8236 9.12721C82.5614 9.12721 80.9591 10.6981 80.9591 13.1802V21.7259H77.4717Z" fill="#fff"/><path d="M113.587 13.9342C113.587 9.37856 117.2 5.82829 121.818 5.82829C126.437 5.82829 130.019 9.37856 130.019 13.9342C130.019 18.4899 126.406 22.0401 121.818 22.0401C117.231 22.0401 113.587 18.4899 113.587 13.9342ZM118.331 10.4625C116.415 12.379 116.415 15.4894 118.331 17.4059C120.248 19.3224 123.358 19.3224 125.274 17.4059C127.191 15.4894 127.191 12.379 125.274 10.4625C123.358 8.54598 120.248 8.54598 118.331 10.4625Z" fill="#fff"/><path d="M95.1286 26.7738V6.14248H98.4589V8.21609C99.59 6.70801 101.475 5.82829 103.674 5.82829C108.136 5.82829 111.875 9.36285 111.875 13.9185C111.875 18.4742 108.136 22.0401 103.674 22.0401C101.569 22.0401 99.7785 21.2233 98.616 19.8094V26.7738H95.1286ZM100.025 10.4468C98.1081 12.3633 98.1081 15.4737 100.025 17.3902C101.941 19.3067 105.052 19.3067 106.968 17.3902C108.885 15.4737 108.885 12.3633 106.968 10.4468C105.052 8.53027 101.941 8.53027 100.025 10.4468Z" fill="#fff"/></svg><span class="hc-url">jean.md</span>';
function HoloCard() {
  const rootRef = useRef(null);
  const backdropRef = useRef(null);
  useEffect(() => {
    const card = rootRef.current,
      backdrop = backdropRef.current;
    if (!card) return;
    const scene = card.parentElement;
    const box = card.querySelector('.hc-translater');
    // laid out at natural size, shown scaled down: REST is the resting scale (96/440 ≈ .218)
    const natW = card.offsetWidth || 440,
      natH = card.offsetHeight || natW / .718;
    const REST = (scene.getBoundingClientRect().width || 96) / natW;
    const rotator = card.querySelector('.hc-rotator');
    const host = card.closest('.reveal');
    const clamp = (v, a = 0, b = 100) => Math.min(Math.max(v, a), b);
    const round = (v, p = 3) => parseFloat(v.toFixed(p));
    const adjust = (v, a, b, c, d) => round(c + (d - c) * (v - a) / (b - a));
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = matchMedia('(pointer: coarse)').matches;

    // the reveal wrapper keeps filter: blur(0) (fill-mode both) → stacking context + containing
    // block that would trap the flight and the fixed backdrop; drop its animation once it has played
    const freeHost = () => {
      if (host) host.style.animation = 'none';
    };
    if (host) host.addEventListener('animationend', freeHost, {
      once: true
    });
    class Spring {
      constructor(init, k, d) {
        this.cur = {
          ...init
        };
        this.target = {
          ...init
        };
        this.v = {};
        for (const key in init) this.v[key] = 0;
        this.k = k;
        this.d = d;
      }
      set(target, k, d) {
        Object.assign(this.target, target);
        if (k != null) this.k = k;
        if (d != null) this.d = d;
      }
      step(f) {
        const n = Math.ceil(f),
          h = f / n;
        for (let i = 0; i < n; i++) for (const key in this.cur) {
          const delta = this.target[key] - this.cur[key];
          this.v[key] = this.v[key] * (1 - this.d * h) + delta * this.k * h;
          this.cur[key] += this.v[key] * h;
        }
        let moving = false;
        for (const key in this.cur) {
          if (Math.abs(this.target[key] - this.cur[key]) > .01 || Math.abs(this.v[key]) > .01) moving = true;else {
            this.cur[key] = this.target[key];
            this.v[key] = 0;
          }
        }
        return moving;
      }
    }
    const INTERACT = {
        k: .07,
        d: .32
      },
      SNAP = {
        k: .012,
        d: .09
      },
      POP = {
        k: .033,
        d: .45
      };
    const rotate = new Spring({
      x: 0,
      y: 0
    }, INTERACT.k, INTERACT.d);
    const glare = new Spring({
      x: 50,
      y: 50,
      o: 0
    }, INTERACT.k, INTERACT.d);
    const bg = new Spring({
      x: 50,
      y: 50
    }, INTERACT.k, INTERACT.d);
    const scale = new Spring({
      s: REST
    }, .05, .3);
    const translate = new Spring({
      x: 0,
      y: 0
    }, POP.k, POP.d);
    const rotDelta = new Spring({
      x: 0,
      y: 0
    }, POP.k, POP.d);
    const springs = [rotate, glare, bg, scale, translate, rotDelta];
    const TILT = 14,
      POP_W = 440;
    let raf = null,
      last = 0,
      alive = true;
    let active = false,
      firstPop = true,
      popScale = 1,
      interacting = false,
      leaveTimer = null;
    const render = () => {
      const r = rotate.cur,
        g = glare.cur,
        b = bg.cur,
        st = card.style;
      st.setProperty('--rotate-x', round(r.x + rotDelta.cur.x) + 'deg');
      st.setProperty('--rotate-y', round(r.y + rotDelta.cur.y) + 'deg');
      st.setProperty('--pointer-x', round(g.x) + '%');
      st.setProperty('--pointer-y', round(g.y) + '%');
      st.setProperty('--pointer-from-center', clamp(Math.hypot(g.x - 50, g.y - 50) / 50, 0, 1));
      st.setProperty('--pointer-from-top', round(g.y / 100));
      st.setProperty('--pointer-from-left', round(g.x / 100));
      st.setProperty('--card-opacity', round(clamp(g.o, 0, 1)));
      st.setProperty('--background-x', round(b.x) + '%');
      st.setProperty('--background-y', round(b.y) + '%');
      st.setProperty('--card-scale', round(scale.cur.s));
      st.setProperty('--translate-x', round(translate.cur.x) + 'px');
      st.setProperty('--translate-y', round(translate.cur.y) + 'px');
    };
    const tick = t => {
      if (!alive) return;
      const f = last ? clamp((t - last) / (1000 / 60), .2, 8) : 1;
      last = t;
      const moving = springs.map(s => s.step(f)).some(Boolean);
      render();
      raf = moving ? requestAnimationFrame(tick) : (last = 0, null);
    };
    const kick = () => {
      if (raf == null) raf = requestAnimationFrame(tick);
    };
    const aim = (px, py, k = INTERACT.k, d = INTERACT.d) => {
      const cx = px - 50,
        cy = py - 50;
      rotate.set({
        x: round(-(cx / 50) * TILT),
        y: round(cy / 50 * TILT)
      }, k, d);
      glare.set({
        x: round(px),
        y: round(py),
        o: 1
      }, k, d);
      bg.set({
        x: adjust(px, 0, 100, 37, 63),
        y: adjust(py, 0, 100, 33, 67)
      }, k, d);
      if (!active) scale.set({
        s: REST * 1.035
      }, .05, .3);
      kick();
    };
    const rest = () => {
      if (active && orientOn) return; // the phone's tilt owns the pose while picked up
      rotate.set({
        x: 0,
        y: 0
      }, SNAP.k, SNAP.d);
      glare.set({
        x: 50,
        y: 50,
        o: 0
      }, SNAP.k, SNAP.d);
      bg.set({
        x: 50,
        y: 50
      }, SNAP.k, SNAP.d);
      if (!active) scale.set({
        s: REST
      }, .05, .3);
      kick();
    };

    // --- pointer ---------------------------------------------------------
    const onMove = e => {
      stopShowcase();
      clearTimeout(leaveTimer);
      interacting = true;
      const rect = box.getBoundingClientRect();
      aim(clamp(round(100 * (e.clientX - rect.left) / rect.width)), clamp(round(100 * (e.clientY - rect.top) / rect.height)));
    };
    const onLeave = () => {
      interacting = false;
      clearTimeout(leaveTimer);
      leaveTimer = setTimeout(rest, 320);
    };
    const onUp = e => {
      if (e.pointerType !== 'mouse') onLeave();
    };
    box.addEventListener('pointermove', onMove);
    box.addEventListener('pointerdown', onMove);
    box.addEventListener('pointerleave', onLeave);
    box.addEventListener('pointerup', onUp);
    box.addEventListener('pointercancel', onLeave);

    // --- phone tilt (picked-up card on touch devices) ----------------------
    let orientOn = false,
      orientBase = null;
    const onOrient = e => {
      if (!active || e.gamma == null || e.beta == null) return;
      if (!orientBase) orientBase = {
        g: e.gamma,
        b: e.beta
      };
      const gx = clamp(e.gamma - orientBase.g, -16, 16),
        by = clamp(e.beta - orientBase.b, -18, 18);
      rotate.set({
        x: round(-(gx / 16) * TILT),
        y: round(by / 18 * TILT)
      }, INTERACT.k, INTERACT.d);
      glare.set({
        x: adjust(gx, -16, 16, 0, 100),
        y: adjust(by, -18, 18, 0, 100),
        o: 1
      }, INTERACT.k, INTERACT.d);
      bg.set({
        x: adjust(gx, -16, 16, 37, 63),
        y: adjust(by, -18, 18, 33, 67)
      }, INTERACT.k, INTERACT.d);
      kick();
    };
    const enableOrientation = () => {
      if (orientOn || !coarse || typeof DeviceOrientationEvent === 'undefined') return;
      const start = () => {
        if (!alive || orientOn) return;
        orientOn = true;
        orientBase = null;
        addEventListener('deviceorientation', onOrient);
      };
      try {
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
          DeviceOrientationEvent.requestPermission().then(res => {
            if (res === 'granted') start();
          }).catch(() => {});
        } else start();
      } catch (_) {}
    };

    // --- pick up / put down -----------------------------------------------
    const center = () => {
      const r = card.getBoundingClientRect(); // .hc itself never transforms → its resting box
      translate.set({
        x: round(innerWidth / 2 - r.x - r.width / 2),
        y: round(innerHeight / 2 - r.y - r.height / 2)
      }, POP.k, POP.d);
    };
    const popover = () => {
      stopShowcase();
      freeHost();
      popScale = Math.min(innerWidth / natW * .9, innerHeight / natH * .9, POP_W / natW); // 1 = crisp 1:1 raster
      const delay = firstPop ? 1000 : 100;
      if (firstPop) rotDelta.set({
        x: 360,
        y: 0
      }, POP.k, POP.d);
      firstPop = false;
      active = true;
      orientBase = null;
      center();
      scale.set({
        s: popScale
      }, POP.k, POP.d);
      card.classList.add('hc--active');
      scene.classList.add('hc-scene--active');
      backdrop.classList.add('hc--on');
      rotator.setAttribute('aria-pressed', 'true');
      setTimeout(rest, delay);
      kick();
    };
    const retreat = () => {
      active = false;
      scale.set({
        s: REST
      }, POP.k, POP.d);
      translate.set({
        x: 0,
        y: 0
      }, POP.k, POP.d);
      rotDelta.set({
        x: 0,
        y: 0
      }, POP.k, POP.d);
      card.classList.remove('hc--active');
      backdrop.classList.remove('hc--on');
      rotator.setAttribute('aria-pressed', 'false');
      setTimeout(() => {
        if (!active) scene.classList.remove('hc-scene--active');
      }, 900);
      setTimeout(rest, 100);
      kick();
    };
    const toggle = () => {
      if (active) {
        retreat();
        playStateChange(false);
      } else {
        enableOrientation();
        popover();
        playStateChange(true);
        haptic(8);
      }
    };
    let downAt = null;
    const onDown = e => {
      downAt = {
        x: e.clientX,
        y: e.clientY
      };
    };
    const onClick = e => {
      if (downAt && Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y) > 8) return;
      toggle();
    };
    const onKey = e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    };
    const onBackdrop = () => {
      if (active) retreat();
    };
    const onEsc = e => {
      if (e.key === 'Escape' && active) retreat();
    };
    let repositionTimer;
    const reposition = () => {
      clearTimeout(repositionTimer);
      repositionTimer = setTimeout(() => {
        if (active) center();
      }, 300);
    };
    box.addEventListener('pointerdown', onDown);
    box.addEventListener('click', onClick);
    rotator.addEventListener('keydown', onKey);
    backdrop.addEventListener('click', onBackdrop);
    document.addEventListener('keydown', onEsc);
    addEventListener('resize', reposition);
    addEventListener('scroll', reposition, {
      passive: true
    });

    // --- showcase: one slow orbit the first time the card scrolls into view ---
    let showcaseRaf = null,
      showcaseStart = 0,
      shown = false;
    const SHOW_MS = 5200;
    const showcase = t => {
      if (!showcaseStart) showcaseStart = t;
      const p = (t - showcaseStart) / SHOW_MS;
      if (p >= 1) {
        showcaseRaf = null;
        showcaseStart = 0;
        rest();
        return;
      }
      const ease = Math.sin(p * Math.PI),
        a = -Math.PI * .75 + p * Math.PI * 2.1;
      aim(50 + Math.cos(a) * 34 * ease, 50 + Math.sin(a) * 30 * ease, .04, .28);
      showcaseRaf = requestAnimationFrame(showcase);
    };
    const stopShowcase = () => {
      if (showcaseRaf) cancelAnimationFrame(showcaseRaf);
      showcaseRaf = null;
      showcaseStart = 0;
    };
    const io = new IntersectionObserver(entries => {
      if (shown || reduced) return;
      if (entries.some(en => en.isIntersecting)) {
        shown = true;
        io.disconnect();
        setTimeout(() => {
          if (alive && !interacting && !active) showcaseRaf = requestAnimationFrame(showcase);
        }, 600);
      }
    }, {
      threshold: .6
    });
    io.observe(scene);

    // debug hooks (used by the pane checks): pose parks the pointer, settle advances physics synchronously
    window.__hc = {
      pose: (x, y) => aim(x, y, .3, .6),
      settle: ms => {
        const n = Math.round(ms / (1000 / 60));
        for (let i = 0; i < n; i++) springs.forEach(sp => sp.step(1));
        render();
      },
      pick: toggle
    };
    render();
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      stopShowcase();
      io.disconnect();
      clearTimeout(leaveTimer);
      clearTimeout(repositionTimer);
      box.removeEventListener('pointermove', onMove);
      box.removeEventListener('pointerdown', onMove);
      box.removeEventListener('pointerleave', onLeave);
      box.removeEventListener('pointerup', onUp);
      box.removeEventListener('pointercancel', onLeave);
      box.removeEventListener('pointerdown', onDown);
      box.removeEventListener('click', onClick);
      rotator.removeEventListener('keydown', onKey);
      backdrop.removeEventListener('click', onBackdrop);
      document.removeEventListener('keydown', onEsc);
      removeEventListener('resize', reposition);
      removeEventListener('scroll', reposition);
      removeEventListener('deviceorientation', onOrient);
      if (host) host.removeEventListener('animationend', freeHost);
      delete window.__hc;
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "hc-host"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hc-backdrop",
    ref: backdropRef
  }), /*#__PURE__*/React.createElement("div", {
    className: "hc-scene"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hc",
    ref: rootRef,
    "data-rarity": "rare holo",
    "data-type": "figma"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hc-translater"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hc-rotator",
    role: "button",
    tabIndex: 0,
    "aria-pressed": "false",
    "aria-label": "Jean, rare holo card \u2014 pick up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hc-front"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hc-frame"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hc-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hc-stage"
  }, "Stage 2"), /*#__PURE__*/React.createElement("span", {
    className: "hc-name"
  }, "Jean"), /*#__PURE__*/React.createElement("span", {
    className: "hc-hp"
  }, /*#__PURE__*/React.createElement("small", null, "HP"), /*#__PURE__*/React.createElement("b", null, "180")), /*#__PURE__*/React.createElement("svg", {
    className: "hc-type"
  }, /*#__PURE__*/React.createElement("use", {
    href: "#hc-e-figma"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hc-art-frame"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hc-art"
  }, /*#__PURE__*/React.createElement("img", {
    src: "holo/avatar-hi.webp",
    alt: "Jean, in Konpo blue",
    draggable: "false"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hc-preevo"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hc-preevo-img",
    src: "holo/preevo.jpg",
    alt: "Jean, aged four, as a wise man",
    draggable: "false"
  }), /*#__PURE__*/React.createElement("span", null, "Evolves from mini him")), /*#__PURE__*/React.createElement("div", {
    className: "hc-info"
  }, /*#__PURE__*/React.createElement("span", null, "NO. 032"), /*#__PURE__*/React.createElement("span", null, "Designer Pok\xE9mon"), /*#__PURE__*/React.createElement("span", null, "WT: 40 open tabs")), /*#__PURE__*/React.createElement("div", {
    className: "hc-body"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hc-nm hc-nm--ability"
  }, "Deep End")), /*#__PURE__*/React.createElement("p", {
    className: "hc-desc"
  }, "Throw this Pok\xE9mon at your biggest design mess. Each turn, it comes out the other side: mess shipped, all damage healed.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hc-nm"
  }, "Zero to One"), /*#__PURE__*/React.createElement("span", {
    className: "hc-dmg"
  }, "60+")), /*#__PURE__*/React.createElement("p", {
    className: "hc-desc"
  }, "Design the whole product, research to release, no hand-offs. Does 20 more damage for each stage this Pok\xE9mon shipped itself.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hc-nm"
  }, "Systemize"), /*#__PURE__*/React.createElement("span", {
    className: "hc-dmg"
  }, "50\xD7")), /*#__PURE__*/React.createElement("p", {
    className: "hc-desc"
  }, "Turn every screen in play into tokens and components. Does 50 damage times the number of teams shipping on the system."))), /*#__PURE__*/React.createElement("div", {
    className: "hc-rule"
  }, /*#__PURE__*/React.createElement("b", null, "Yorkshire Tea rule"), /*#__PURE__*/React.createElement("span", null, "Brew once a turn: heal 30 damage from this Pok\xE9mon.")), /*#__PURE__*/React.createElement("div", {
    className: "hc-wrr"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "hc-lbl"
  }, "weakness"), /*#__PURE__*/React.createElement("span", {
    className: "hc-val"
  }, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: "#hc-e-jira"
  })), "\xD72")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "hc-lbl"
  }, "resistance"), /*#__PURE__*/React.createElement("span", {
    className: "hc-val"
  }, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: "#hc-e-hn"
  })), "\u221230")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "hc-lbl"
  }, "retreat"), /*#__PURE__*/React.createElement("span", {
    className: "hc-val"
  }, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: "#hc-e-snow"
  })), /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: "#hc-e-surf"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "hc-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hc-l"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hc-reg"
  }, "J"), /*#__PURE__*/React.createElement("span", null, "Illus. Jean Massad")), /*#__PURE__*/React.createElement("span", {
    className: "hc-r"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "hc-setsym"
  }, /*#__PURE__*/React.createElement("use", {
    href: "#hc-set-rain"
  })), /*#__PURE__*/React.createElement("span", null, "032/198"), /*#__PURE__*/React.createElement("svg", {
    className: "hc-rarity",
    title: "rare"
  }, /*#__PURE__*/React.createElement("use", {
    href: "#hc-star"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "hc-copy"
  }, "\xA92026 Konpo \xB7 jean.md \xB7 Rainy Basque Afternoon set"), /*#__PURE__*/React.createElement("div", {
    className: "hc-shine"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hc-shine hc-shine--art"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hc-glare"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hc-back",
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: HC_BACK
    }
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: "0",
    height: "0",
    style: {
      position: 'absolute'
    },
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: HC_DEFS
    }
  }));
}
function Colophon() {
  return /*#__PURE__*/React.createElement("div", {
    className: "colophon",
    "data-screen-label": "04 Colophon"
  }, /*#__PURE__*/React.createElement(HoloCard, null), /*#__PURE__*/React.createElement(GlitchLink, {
    className: "footer-contact",
    from: "Contact",
    to: "jeanmassad@gmail.com",
    href: "mailto:jeanmassad@gmail.com",
    newTab: false
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
