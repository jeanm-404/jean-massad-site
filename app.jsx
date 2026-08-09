/* global React, ReactDOM */
const { useState, useMemo, useRef, useEffect } = React;

// Hand-painted ".md" — dot, then m (three humps), then d.
// Same brush as the old ".com": 2.8 stroke, round caps, tiny wobble.
function MdMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 44 32" aria-hidden="true">
      {/* dot */}
      <circle cx="5" cy="24" r="2.6" fill="currentColor" />
      {/* m — three humps (borrowed from the old .com) */}
      <g transform="translate(-38 0)">
        <path
          d="M51 24 c-0.1 -2.6 -0.2 -5.2 -0.1 -7.8 c0 -1 0 -2 0.1 -3 m-0.2 3.2 c0.7 -1.6 2.7 -2.5 4.3 -1.8 c1.5 0.7 2.3 2.4 1.9 4 c0 1.8 0 3.6 0 5.4 m0 -5.6 c0.5 -1.7 2.5 -2.7 4.2 -2.2 c1.7 0.6 2.7 2.5 2.1 4.2 c0 1.2 0 2.4 0 3.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      {/* d — hand-drawn bowl + tall stem */}
      <path
        d="M37 7.5 c0.4 5.3 0.5 10.7 0.3 16.1 m-0.2 -8.4 c-0.7 -1.7 -2.7 -2.6 -4.4 -2 c-1.8 0.7 -2.7 2.7 -2.1 4.5 c0.6 1.8 2.5 2.8 4.3 2.3 c1.5 -0.4 2.4 -1.9 2.2 -3.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


// Brand marks for the intro chips
function KonpoMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 62 62" fill="currentColor" aria-hidden="true">
      <path d="M13.5752 33.9356C21.0719 33.9356 27.1493 40.0131 27.1494 47.5098C27.1494 55.0066 21.072 61.084 13.5752 61.084C6.07832 61.084 0.000976562 55.0067 0.000976562 47.5098C0.00114046 40.0131 6.07843 33.9356 13.5752 33.9356ZM37.9141 37.9112C43.213 32.609 51.8074 32.612 57.1094 37.9112C62.4114 43.2105 62.4112 51.8059 57.1094 57.1084C51.8104 62.411 43.2161 62.4078 37.9141 57.1084C32.612 51.809 32.612 43.2137 37.9141 37.9112ZM13.5742 3.8115e-05C20.6616 3.8115e-05 26.4782 5.43181 27.0928 12.3594C21.0431 13.8702 16.5617 19.3408 16.5615 25.8584C16.5615 26.1783 16.5725 26.4961 16.5938 26.8106C15.6226 27.0312 14.6121 27.1485 13.5742 27.1485C6.07738 27.1484 0 21.0711 0 13.5743C3.55627e-05 6.07744 6.0774 7.36788e-05 13.5742 3.8115e-05ZM37.9131 3.97562C43.212 -1.32673 51.8064 -1.32368 57.1084 3.97562C62.4105 9.27503 62.4105 17.8704 57.1084 23.1729C53.6507 26.6329 48.7901 27.8329 44.3564 26.7774C44.3762 26.4737 44.3887 26.1671 44.3887 25.8584C44.3885 19.388 39.9714 13.9493 33.9883 12.3926C34.2552 9.32257 35.5632 6.32569 37.9131 3.97562Z" />
    </svg>
  );
}
function SurgeMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 30 42" fill="currentColor" aria-hidden="true">
      <path d="M28.7014 21.9551C27.8928 20.5552 26.6771 19.4347 25.216 18.7429C23.7549 18.051 22.1177 17.8206 20.5224 18.0822L25.7835 15.0449C26.6892 14.5224 27.4831 13.8266 28.1199 12.9973C28.7567 12.1679 29.2239 11.2213 29.4949 10.2114C29.7658 9.20146 29.8352 8.14807 29.6991 7.11134C29.5629 6.07462 29.2239 5.07486 28.7014 4.16916C28.1789 3.26345 27.4831 2.46953 26.6537 1.83273C25.8244 1.19593 24.8777 0.728712 23.8678 0.45776C22.8579 0.186809 21.8045 0.117428 20.7678 0.253578C19.7311 0.389727 18.7313 0.728741 17.8256 1.25126L4.02971 9.20916C2.40974 10.1363 1.16721 11.6034 0.519375 13.3538C-0.128465 15.1043 -0.140391 17.0268 0.485682 18.7852C1.11175 20.5435 2.33599 22.0259 3.94432 22.9731C5.55266 23.9202 7.44275 24.2719 9.28412 23.9666L4.02307 27.0039C3.11664 27.526 2.32204 28.2217 1.68471 29.0512C1.04739 29.8806 0.579851 30.8276 0.308843 31.8379C0.0378341 32.8483 -0.031327 33.9021 0.105316 34.9392C0.241959 35.9763 0.581725 36.9762 1.10518 37.8819C1.62746 38.7881 2.32328 39.5825 3.15284 40.2196C3.9824 40.8567 4.92941 41.3241 5.93973 41.5949C6.95004 41.8657 8.00383 41.9346 9.04082 41.7978C10.0778 41.661 11.0777 41.3211 11.9832 40.7976L25.7769 32.8397C26.6831 32.3174 27.4775 31.6216 28.1146 30.792C28.7517 29.9625 29.219 29.0154 29.4898 28.0051C29.7606 26.9948 29.8296 25.941 29.6928 24.904C29.556 23.8671 29.2161 22.8672 28.6925 21.9617L28.7014 21.9551Z" />
    </svg>
  );
}

function ScrollNav() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // reveal only when scrolling back up (with a little hysteresis so
    // momentum wobble doesn't flicker it), hide on the way down
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y <= 180) setVisible(false);
      else if (y < lastY - 4) setVisible(true);
      else if (y > lastY + 4) setVisible(false);
      lastY = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`scroll-nav ${visible ? 'scroll-nav--on' : ''}`} aria-hidden={!visible}>
      <div className="scroll-nav-blur" aria-hidden="true" />
      <div className="scroll-nav-inner">
        <a href="#top" className="scroll-nav-avatar" aria-label="Back to top">
          <span className="block-portrait block-portrait--jean scroll-nav-portrait" />
        </a>
        <a href="#top" className="scroll-nav-name" aria-label="jean dot md">
          <span className="scroll-nav-name-text">jean</span>
          <MdMark className="scroll-nav-dotcom" />
        </a>
        <div className="scroll-nav-spacer" />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Velvet UI "Signature" voice — ui.confirm (success) chime.
// Ported from velvet-ui's live-synthesis engine: two rising hits
// + a sparkle tone, synthesized fresh each play (small pitch and
// volume jitter), through a short noise-burst reverb.
// ─────────────────────────────────────────────────────────────
const SIGNATURE = {
  baseHz: 118, decayMs: 46, attackMs: 1, waveform: 'sine',
  bodyDropPct: 9, bodyLp: 540,
  transient: { amt: 0.16, hz: 420, shape: 'lowpass', ms: 12 },
  sub: 0.23, pitchVarPct: 2, volJitterPct: 5,
  reverbWet: 0.18, layerSpreadMs: 3,
};
const UI_CONFIRM = {
  hits: [
    { pitch: 1.04, gain: 0.56, glide: 1.03 },
    { dt: 0.104, pitch: 1.68, gain: 0.5, glide: 1.1 },
  ],
  tone: { dt: 0.106, pitch: 4.9, gain: 0.085, decay: 1.3, glide: 1.04, jitter: 0.08 },
  decay: 1.72, reverb: 0.92, transient: 0.42, sub: 0.28,
};

let _actx = null, _master = null, _reverb = null, _noise = null;
const rand = (a, b) => a + Math.random() * (b - a);

function initAudio() {
  if (_actx) { if (_actx.state === 'suspended') _actx.resume(); return; }
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
  lp.type = 'lowpass'; lp.frequency.value = 2200;
  const wet = _actx.createGain();
  wet.gain.value = 1;
  _reverb.connect(lp); lp.connect(wet); wet.connect(comp);
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
  const dec = (v.decayMs / 1000) * (ev.decay || 1);
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
    bus.connect(send); send.connect(_reverb);
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
    src.connect(f); f.connect(g); g.connect(bus);
    src.start(at); src.stop(at + 0.06);
  }

  // Body — sine with downward glide through a lowpass
  const t0 = at + spread;
  const osc = ctx.createOscillator();
  osc.type = v.waveform;
  osc.frequency.setValueAtTime(freq, t0);
  const glideTo = hit.glide ? freq * hit.glide : Math.max(40, freq * (1 - v.bodyDropPct / 100));
  osc.frequency.exponentialRampToValueAtTime(glideTo, t0 + atk + 0.7 * dec);
  const bodyLp = ctx.createBiquadFilter();
  bodyLp.type = 'lowpass'; bodyLp.frequency.value = v.bodyLp; bodyLp.Q.value = 0.5;
  const bodyG = ctx.createGain();
  bodyG.gain.setValueAtTime(0, t0);
  bodyG.gain.linearRampToValueAtTime(gain, t0 + rise);
  bodyG.gain.exponentialRampToValueAtTime(8e-4, t0 + rise + dec);
  bodyG.gain.linearRampToValueAtTime(1e-4, t0 + rise + dec + tail);
  osc.connect(bodyLp); bodyLp.connect(bodyG); bodyG.connect(bus);
  osc.start(t0); osc.stop(t0 + rise + dec + tail + 0.05);

  // Sub — octave-down support
  if (subAmt > 0.01) {
    const t1 = at + 2 * spread;
    const r1 = Math.max(rise + 0.004, 0.008);
    const sub = ctx.createOscillator();
    sub.type = 'sine'; sub.frequency.value = freq / 2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t1);
    g.gain.linearRampToValueAtTime(subAmt * gain, t1 + r1);
    g.gain.exponentialRampToValueAtTime(8e-4, t1 + r1 + dec);
    g.gain.linearRampToValueAtTime(1e-4, t1 + r1 + dec + tail);
    sub.connect(g); g.connect(bus);
    sub.start(t1); sub.stop(t1 + r1 + dec + tail + 0.05);
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
    tOsc.connect(tLp); tLp.connect(tG); tG.connect(bus);
    tOsc.start(tAt); tOsc.stop(tAt + 0.006 + tDec + tail + 0.05);
  }
}

// toggle.off — the settle-down counterpart (also from velvet's map)
const TOGGLE_OFF = {
  hits: [{ pitch: 0.87, gain: 0.46, glide: 0.975 }],
  decay: 0.32, transient: 0.42, sub: 0.24, reverb: 0.22,
};

// state.change — velvet's soft single-hit tick, quieter than ui.confirm.
// Rising for a project unfolding, falling for it tucking back in.
const STATE_UP = {
  hits: [{ pitch: 1.22, gain: 0.4, glide: 1.06 }],
  decay: 0.55, transient: 0.5, sub: 0.18, reverb: 0.3,
};
const STATE_DOWN = {
  hits: [{ pitch: 1.02, gain: 0.36, glide: 0.94 }],
  decay: 0.48, transient: 0.5, sub: 0.18, reverb: 0.26,
};

function playEvent(ev) {
  try {
    initAudio();
    if (!_actx) return;
    const now = _actx.currentTime + 0.002;
    ev.hits.forEach((hit) => playHit(now + (hit.dt || 0), SIGNATURE, ev, hit));
  } catch (e) { /* sound is a bonus layer, never the message */ }
}
function playConfirm() { playEvent(UI_CONFIRM); }
function playToggleOff() { playEvent(TOGGLE_OFF); }
function playStateChange(opening) { playEvent(opening ? STATE_UP : STATE_DOWN); }

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
  _hapticEl.style.cssText =
    'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;margin:0;padding:0;border:0;pointer-events:none;z-index:-1';
  document.body.appendChild(_hapticEl);
}
function haptic(ms = 12) {
  try {
    if (navigator.vibrate) { navigator.vibrate(ms); return; }
    ensureHapticEl();
    if (_hapticEl) _hapticEl.click(); // iOS: fixed-intensity tick, ms is ignored
  } catch (e) { /* no haptics — fine */ }
}

// ─────────────────────────────────────────────────────────────
// Gate — the site opens dark with a single light switch.
// Flipping it floods the page white and starts the reveal.
// ─────────────────────────────────────────────────────────────
function Gate({ onEnter, entering }) {
  const [on, setOn] = useState(false);     // click registered
  const [lit, setLit] = useState(false);   // the switch finally gave in
  const [gone, setGone] = useState(false);
  const knobRef = useRef(null);
  const inputRef = useRef(null);

  // Delayed ticks are Android-only (vibrate). iOS gates ALL synthetic
  // switch clicks — confirmed on-device — so there the choreography is
  // just the native tap tick; no point re-clicking anything.
  const tick = (ms) => {
    try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) { /* fine */ }
  };

  const flip = () => {
    if (on) return;
    setOn(true);
    const knob = knobRef.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // The knob struggles: shoves forward, slips back, strains, loses
    // grip, then breaks free. The lights only come on when it lands.
    const SUCCESS = reduced || !window.__anime ? 0 : 1350;
    // Haptics follow the struggle. The press tick comes from the native
    // switch itself; these are the slips and the win.
    if (SUCCESS > 0) {
      setTimeout(() => tick(8), 300);   // slips back
      setTimeout(() => tick(8), 960);   // loses grip
    }
    setTimeout(() => tick(24), SUCCESS); // breaks free — lights on
    if (knob) {
      if (reduced) {
        knob.style.transform = 'translateX(52px)';
      } else if (window.__anime) {
        window.__anime.animate(knob, {
          x: [
            { to: 15, duration: 300, ease: 'outQuad' },   // first shove
            { to: 4,  duration: 280, ease: 'outQuad' },   // slips back
            { to: 33, duration: 380, ease: 'inOutQuad' }, // strains harder
            { to: 21, duration: 240, ease: 'outQuad' },   // loses grip
            { to: 52, duration: 420, ease: 'outBounce' }, // breaks free
          ],
        });
      } else {
        // CDN fallback: plain CSS transition
        knob.style.transition = 'transform .45s cubic-bezier(.3, .8, .3, 1)';
        knob.style.transform = 'translateX(52px)';
      }
    }
    // Success: track fills, chime plays, dots become the grid
    setTimeout(() => {
      setLit(true);
      playConfirm();
    }, SUCCESS);
    setTimeout(onEnter, SUCCESS + 600);
    setTimeout(() => setGone(true), SUCCESS + 1500);
  };

  if (gone) return null;
  // A real native switch input (invisible, full-size) sits under the
  // finger: on iOS the tap toggles an actual switch control, so the
  // system haptic fires natively — no programmatic .click() to gate.
  return (
    <div className={`gate ${lit ? 'gate--on' : ''} ${entering ? 'gate--fadein' : ''}`}>
      <label className={`gate-toggle ${lit ? 'gate-toggle--on' : ''}`}>
        <input
          type="checkbox"
          switch=""
          className="gate-toggle-input"
          ref={inputRef}
          checked={on}
          onChange={flip}
          aria-label="Turn on the lights"
        />
        <span className="gate-toggle-knob" ref={knobRef} />
      </label>
    </div>
  );
}

// Mini toggle in the footer — flips the site back off.
function FooterToggle({ onClose }) {
  const [on, setOn] = useState(true);
  const knobRef = useRef(null);
  // Set the ON position once, imperatively — keeping it out of the
  // style prop means React re-renders never fight anime mid-slide.
  useEffect(() => {
    if (knobRef.current) knobRef.current.style.transform = 'translateX(26px)';
  }, []);
  const flip = () => {
    if (!on) return;
    setOn(false);
    playToggleOff(); // press haptic comes from the native switch itself
    const knob = knobRef.current;
    if (knob) {
      if (window.__anime) {
        window.__anime.animate(knob, { x: 0, duration: 340, ease: 'outQuad' });
      } else {
        knob.style.transition = 'transform .3s ease';
        knob.style.transform = 'translateX(0px)';
      }
    }
    setTimeout(onClose, 420);
  };
  return (
    <label className={`gate-toggle gate-toggle--mini ${on ? 'gate-toggle--on' : ''}`}>
      <input
        type="checkbox"
        switch=""
        className="gate-toggle-input"
        checked={on}
        onChange={flip}
        aria-label="Turn off the lights"
      />
      <span className="gate-toggle-knob" ref={knobRef} />
    </label>
  );
}

function App() {
  const [gateKey, setGateKey] = useState(0);
  const [sessionKey, setSessionKey] = useState(0);  // resets the footer toggle

  // Park the iOS haptic switch in the DOM before the first tap ever lands.
  useEffect(() => { ensureHapticEl(); }, []);

  const enter = () => {
    document.documentElement.setAttribute('data-reveal', 'go');
  };

  // Footer toggle: lights out — the dark gate fades in OVER the live
  // page, then the reset (hide content, scroll top) happens unseen
  // behind the opaque overlay. No flash, just a fade back to start.
  const close = () => {
    setGateKey((k) => k + 1);   // fresh Gate fades in (gate--fadein)
    // Everything else resets ONLY once the gate is fully opaque —
    // including the footer toggle, so it never visibly snaps back ON.
    setTimeout(() => {
      document.documentElement.setAttribute('data-reveal', 'pending');
      window.scrollTo(0, 0);
      setSessionKey((k) => k + 1);
    }, 700);
  };

  // Snap divider bands to the whiteboard grid: nudge each one down so
  // its top rule sits exactly on a background line. Re-runs when late
  // layout shifts things (fonts, masonry images, resizes).
  useEffect(() => {
    const snap = () => {
      const cell = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--board-cell')
      ) || 32;
      const cont = document.querySelector('.container');
      const vw = document.documentElement.clientWidth;
      // Snap the whiteboard width so BOTH edges and every masonry
      // column edge land on grid lines:
      //   W = (cols·k + (cols-1) + 2·padCells) · cell
      if (cont && vw >= cell * 8) {
        const masonry = document.querySelector('.feed-masonry');
        const cols = masonry
          ? parseInt(getComputedStyle(masonry).columnCount, 10) || 3
          : 3;
        const padCells = Math.round(
          parseFloat(getComputedStyle(cont).paddingLeft) / cell
        );
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
      medias.forEach((m) => {
        m.style.height = '';
        m.classList.remove('asset-media--locked');
      });
      const heights = medias.map((m) => m.getBoundingClientRect().height);
      medias.forEach((m, i) => {
        if (heights[i] > 0) {
          m.style.height = `${Math.max(cell * 3, Math.round(heights[i] / cell) * cell)}px`;
          m.classList.add('asset-media--locked');
        }
      });
      document.querySelectorAll('.board-divider').forEach((d) => {
        d.style.marginTop = '0px';
        const y = d.getBoundingClientRect().top + window.scrollY;
        const rem = ((y % cell) + cell) % cell;
        if (rem > 0.5 && rem < cell - 0.5) d.style.marginTop = `${cell - rem}px`;
      });
      // Phase-align the full-width grid pattern to the container origin
      const grid = document.querySelector('.board-grid');
      if (cont && grid) {
        const cr = cont.getBoundingClientRect();
        const gr = grid.getBoundingClientRect();
        const shift = (((cr.left - gr.left) % cell) + cell) % cell;
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

  return (
    <div className="page">
      <Gate key={gateKey} entering={gateKey > 0} onEnter={enter} />
      <main className="container">
        <div className="board-grid" aria-hidden="true" />
        <div className="board-cover board-cover--hero" aria-hidden="true" />
        <div className="board-cover board-cover--foot" aria-hidden="true" />
        <div className="board-topline" aria-hidden="true" />
        <Headline />
        <header className="top-row">
          <div className="top-intro">
            <Intro />
          </div>
          <div className="top-elsewhere reveal" style={{ '--reveal-delay': '4900ms' }}>
            <Footer />
          </div>
        </header>

        <div className="board-divider reveal" style={{ '--reveal-delay': '5300ms' }} aria-hidden="true" />

        <section className="grid-area">
          <AssetsFeed />
        </section>

        <div className="board-divider reveal" style={{ '--reveal-delay': '7600ms' }} aria-hidden="true" />

        <div className="reveal" style={{ '--reveal-delay': '7800ms' }}>
          <Colophon key={sessionKey} onClose={close} />
        </div>
      </main>
    </div>);

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
let ASCII_CACHE = null;     // base ascii grid (string[rows] of length cols)
let ASCII_LOADING = false;
let ASCII_LISTENERS = [];

function loadAsciiPortrait() {
  if (ASCII_CACHE) return Promise.resolve(ASCII_CACHE);
  return new Promise((resolve) => {
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
          const idx = Math.max(0, Math.min(ASCII_RAMP.length - 1,
            Math.floor(t * (ASCII_RAMP.length - 1))));
          line += ASCII_RAMP[idx];
        }
        rows.push(line);
      }
      ASCII_CACHE = rows;
      ASCII_LISTENERS.forEach((fn) => fn(rows));
      ASCII_LISTENERS = [];
    };
    img.onerror = () => {
      ASCII_LISTENERS.forEach((fn) => fn(null));
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
  if (t < 0.18) return '#5c6370';      // comment grey (faintest)
  if (t < 0.40) return '#abb2bf';      // foreground default
  if (t < 0.62) return '#61afef';      // function blue
  if (t < 0.80) return '#c678dd';      // keyword purple
  if (t < 0.92) return '#e5c07b';      // accent yellow
  return '#e06c75';                    // highlight red (densest)
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
    out.push(
      curColor
        ? React.createElement('span', { key: key++, style: { color: curColor } }, buf)
        : buf
    );
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
    const jitter = jitterRows.has(r) ? (Math.random() < 0.5 ? -1 : 1) : 0;
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
function sdSubtract(a, b) { return Math.max(a, -b); }
function logoSDF(x, y) {
  const R = 0.34;          // circle radius
  const D = 0.42;          // half-distance between circle centers
  const BITE_R = 0.20;     // bite radius
  // Centers
  const TL = [-D,  D];
  const TR = [ D,  D];
  const BL = [-D, -D];
  const BR = [ D, -D];

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
          const fore = Math.abs(cosA);          // 0..1
          const edge = Math.min(1, -d / 0.05);
          const sIdx = Math.max(2, Math.min(SHADE.length - 1,
            Math.floor(2 + fore * (SHADE.length - 5) + edge * 2)));
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
  return (
    <span
      className="block-portrait block-portrait--jean"
      aria-hidden="true"
    />
  );
}

// ─────────────────────────────────────────────────────────────
// BragSlot — three "angles" on the same brag, swap with a subtle slider
// ─────────────────────────────────────────────────────────────
const BRAG_VARIANTS = [
  {
    id: 'awards',
    label: 'awards',
    render: () => (
      <>My work has been enjoyed by the folks from Awwwards and Webby's, survived the crowds at Product Hunt, torn apart in HackerNews, seen in the background of a Tim Cook Keynote, loved by Terry Crews, featured on the cover of Forbes, smiled from the top of the App Store, called "ok" by a President and, mainly, applauded by my parents.</>
    )
  },
  {
    id: 'clients',
    label: 'clients',
    render: () => (
      <>I've designed for Apple, Google, Stripe, Shopify, Linear, Vercel, Notion, Figma, Loom and a handful of teams I'm not allowed to name. Also for a coffee shop in Bilbao that paid me in espresso for six months.</>
    )
  },
  {
    id: 'specialty',
    label: 'specialty',
    render: () => (
      <>I focus on early-stage product design — branding, visual identity, marketing sites, and product UI for software teams between pre-seed and Series B. I'm at my best when I can shape the whole thing end to end, from positioning to the last pixel.</>
    )
  }
];

function BragSlot() {
  const [idx, setIdx] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const change = (i) => {
    if (i === idx) return;
    setTransitioning(true);
    setTimeout(() => {
      setIdx(i);
      setTransitioning(false);
    }, 140);
  };

  const variant = BRAG_VARIANTS[idx];

  return (
    <div className="brag-slot">
      <div className="brag-slider" role="tablist" aria-label="Switch perspective">
        <div className="brag-track" aria-hidden="true">
          <div
            className="brag-thumb"
            style={{ left: `${(idx / (BRAG_VARIANTS.length - 1)) * 100}%` }}
          />
        </div>
        <div className="brag-ticks">
          {BRAG_VARIANTS.map((v, i) => (
            <button
              key={v.id}
              role="tab"
              aria-selected={i === idx}
              className={`brag-tick ${i === idx ? 'brag-tick--on' : ''}`}
              onClick={() => change(i)}
            >
              <span className="brag-dot" aria-hidden="true" />
              <span className="brag-label mono">{v.label}</span>
            </button>
          ))}
        </div>
      </div>

      <p className={`intro-paragraph brag-text ${transitioning ? 'brag-text--out' : ''}`}>
        {variant.render()}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Headline — typographical opener; meaning words in ink,
// connectors muted. Reveals word-by-word before the intro.
// ─────────────────────────────────────────────────────────────
const HEADLINE_SEGMENTS = [
  ['Design from napkin sketch through production and scale.', 'ink'],
  ['With style.', 'hand'],   // handwritten kicker — Gochi Hand, muted gray
];
const HEADLINE_TONES = { muted: 'hl-muted', hand: 'hl-muted hl-hand' };

function Headline() {
  const START = 1300;
  const STEP = 40;
  let w = 0;
  // Eyebrow reveals word-by-word, then the big statement follows.
  let u = 0;
  const T = () => ({ '--reveal-delay': `${150 + u++ * 350}ms` });
  const W = (text) =>
    text.split(' ').filter(Boolean).map((w, k) => (
      <span key={`${w}-${k}-${u}`} className="reveal-word" style={T()}>{w + ' '}</span>
    ));
  const C = (node, key, trail) => (
    <span key={key} className="reveal-word" style={T()}>{node}{trail ? ' ' : ''}</span>
  );
  return (
    <section className="headline-block" data-screen-label="00 Headline">
      <p className="headline-eyebrow">
        {C(<span className="chip">Jean<img className="chip-avatar" src="jean-avatar.png" alt="" /></span>, 'jean', true)}
        {C(<a href="https://konpo.studio" target="_blank" rel="noreferrer" className="chip">Konpo<KonpoMark className="chip-logo chip-logo--konpo" /></a>, 'konpo', true)}
        {C(<a href="https://surgehq.ai" target="_blank" rel="noreferrer" className="chip">Surge<SurgeMark className="chip-logo chip-logo--surge" /></a>, 'surge')}
      </p>
      <h1 className="headline">
        {HEADLINE_SEGMENTS.map(([text, tone], si) => (
          <React.Fragment key={si}>
            {text.split(' ').map((word, wi) => {
              const delay = START + w * STEP;
              w++;
              return (
                <span
                  key={wi}
                  className={`reveal-word ${HEADLINE_TONES[tone] || ''}`}
                  style={{ '--reveal-delay': `${delay}ms` }}
                >
                  {word + ' '}
                </span>
              );
            })}
          </React.Fragment>
        ))}
      </h1>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Intro
// ─────────────────────────────────────────────────────────────
// Word-by-word reveal helper. `start` = first-word delay (ms), `step` = per-word ms.
// Returns: array of <span class="reveal-word"> with staggered --reveal-delay,
// and exposes the next available delay on the returned array via `.end`.
function Words({ text, start, step, children }) {
  // text is a string; or children can be ReactNodes interleaved (treated as one "word").
  const words = text.split(/(\s+)/); // keep whitespace
  let idx = 0;
  const out = words.map((w, i) => {
    if (/^\s+$/.test(w)) return w;
    const delay = start + idx * step;
    idx++;
    return (
      <span key={i} className="reveal-word" style={{ '--reveal-delay': `${delay}ms` }}>{w}</span>
    );
  });
  return <>{out}{children}</>;
}

// Tiny play button after the name — says "Jean Massad" out loud.
// Plays uploads/jean-name.mp3 if Jean has recorded one; until then it
// falls back to speech synthesis with a French voice for the Jean part.
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
        const u = new SpeechSynthesisUtterance('Jean Massad');
        const fr = window.speechSynthesis.getVoices().find((v) => v.lang && v.lang.startsWith('fr'));
        if (fr) u.voice = fr;
        u.rate = 0.85;
        u.onend = done;
        u.onerror = done;
        window.speechSynthesis.speak(u);
      } catch (e) { done(); }
    };
    const audio = new Audio('uploads/jean-name.mp3');
    audio.onended = done;
    audio.onerror = fallback;
    audio.play().catch(fallback);
  };
  return (
    <button
      type="button"
      className={`name-play ${playing ? 'name-play--on' : ''}`}
      onClick={play}
      aria-label="Hear my name"
      title="Hear my name"
    >
      <svg viewBox="0 0 10 10" width="7" height="7" aria-hidden="true">
        <path d="M2 1.2v7.6L8.4 5 2 1.2z" fill="currentColor" />
      </svg>
    </button>
  );
}

function Intro() {
  // Each chunk fades in with its own delay so the bio reads in like it's being typed-but-not.
  const D = (ms) => ({ '--reveal-delay': `${ms}ms` });
  // Per-word stagger config
  const WORD_STEP = 28;     // ms between words (brisk but still reads in)
  const CHUNK_GAP = 260;    // pause between paragraphs
  // Word-counter helper: track running delay across chunks
  let t = 1700; // first word delay (after the headline finishes)
  const wordDelay = () => { const d = t; t += WORD_STEP; return d; };
  const pause = (ms) => { t += ms; };
  const W = (text) => {
    const parts = text.split(/(\s+)/);
    return parts.map((p, i) => {
      if (/^\s+$/.test(p) || p === '') return p;
      const delay = wordDelay();
      return <span key={i} className="reveal-word" style={{ '--reveal-delay': `${delay}ms` }}>{p}</span>;
    });
  };
  // Wrap an inline element (link, etc.) as a single revealing unit
  const I = (node) => {
    const delay = wordDelay();
    return <span className="reveal-word" style={{ '--reveal-delay': `${delay}ms` }}>{node}</span>;
  };

  return (
    <section className="intro" data-screen-label="01 Intro" style={{ padding: "0px" }}>
      <p className="intro-paragraph">
        {W("On the grind since I could download Photoshop off a sketchy torrent site.")}
        <br /><br />
        {(() => { pause(CHUNK_GAP); return null; })()}
        {W("Over ten years through the design spectrum. Brand. Websites. Product. Systems. F500. Unicorns. Startups. Governments.")}
        <br /><br />
        {(() => { pause(CHUNK_GAP); return null; })()}
        {W("I'm Jean Massad")}
        {I(<NamePlay />)}
        {W(". The first and only designer at ")}
        {I(<a className="hand-word hand-word--surge" href="https://www.surgehq.ai" target="_blank" rel="noreferrer">Surge AI</a>)}
        {W(", the data engine behind the world's frontier labs, and I run a sharp little design studio called ")}
        {I(<a className="hand-word hand-word--konpo" href="https://www.konpo.studio" target="_blank" rel="noreferrer">Konpo</a>)}
        {W(". Through the studio, I've lived a thousand design lives with some amazing people.")}
        <br /><br />
        {(() => { pause(CHUNK_GAP); return null; })()}
        {W('My work has won over Awwwards and the Webbys, survived Product Hunt, been torn apart on Hacker News, shown up behind Tim Cook in a keynote, been loved by Terry Crews, made the cover of Forbes, smiled from the top of the App Store, been called "ok" by a President and, mainly, applauded by my parents.')}
        <br /><br />
        {(() => { pause(CHUNK_GAP); return null; })()}
        {W("When I'm not busy training my AI replacement, I chase ")}
        {I(
          <a href="#" className="ulink ulink--media" data-media="snow">
            ski
            <span className="media-pop">
              <span className="media-pop-img media-pop-img--snow" />
            </span>
          </a>
        )}
        {W(' and ')}
        {I(
          <a href="#" className="ulink ulink--media" data-media="surf">
            surf
            <span className="media-pop">
              <span className="media-pop-img media-pop-img--surf" />
            </span>
          </a>
        )}
        {W('.')}
      </p>

      {/* GitHub contribution map — hidden for now, lives on in `elsewhere`.
          Re-enable with <ContribMap /> (API + styles all still wired). */}

    </section>);

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
  start: '2025-07-06', // day 0 of the baked string (a Sunday)
  total: 1,
  levels: '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000',
};

function ContribMap() {
  const [data, setData] = useState(() => {
    const t0 = new Date(CONTRIB_FALLBACK.start + 'T00:00:00');
    const days = [...CONTRIB_FALLBACK.levels].map((l, i) => {
      const d = new Date(t0); d.setDate(t0.getDate() + i);
      // format in local time — toISOString() shifts to UTC and can slip a day
      const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      return { d: iso, l: +l, c: null }; // count unknown in the baked fallback
    });
    return { total: CONTRIB_FALLBACK.total, days };
  });
  useEffect(() => {
    fetch('/api/contributions')
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => { if (j && j.days && j.days.length) setData(j); })
      .catch(() => {});
  }, []);

  // GitHub-style week columns, Sunday-first; pad the partial edge weeks
  const weeks = [];
  let col = new Array(new Date(data.days[0].d + 'T00:00:00').getDay()).fill(null);
  for (const day of data.days) {
    col.push(day);
    if (col.length === 7) { weeks.push(col); col = []; }
  }
  if (col.length) { while (col.length < 7) col.push(null); weeks.push(col); }

  const BASE = 4800; // after the bio's last words settle
  return (
    <div className="contrib">
      <div className="contrib-head reveal" style={{ '--reveal-delay': `${BASE}ms` }}>
        <a className="footer-label contrib-label mono" href="https://github.com/jeanm-404" target="_blank" rel="noreferrer">github</a>
        <span className="contrib-count mono">{data.total} contribution{data.total === 1 ? '' : 's'} — last year</span>
      </div>
      <div className="contrib-grid" role="img" aria-label={`${data.total} GitHub contributions in the last year`}>
        {weeks.map((w, wi) => (
          <div className="contrib-week" key={wi}>
            {w.map((day, di) => (day ? (
              <span
                key={di}
                className="contrib-cell"
                data-level={day.l}
                style={{ '--reveal-delay': `${BASE + 150 + wi * 12}ms` }}
                title={day.c == null ? day.d : `${day.c || 'No'} contribution${day.c === 1 ? '' : 's'} on ${day.d}`}
              />
            ) : (
              <span key={di} className="contrib-cell contrib-cell--pad" />
            )))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Assets feed — a quiet masonry of work assets:
// images, videos, gifs, and live component demos.
// ─────────────────────────────────────────────────────────────

// Live demo: toggle (velvet-style state change)
function DemoToggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      className={`demo-toggle ${on ? 'demo-toggle--on' : ''}`}
      role="switch"
      aria-checked={on}
      onClick={() => setOn(!on)}
    >
      <span className="demo-toggle-knob" />
    </button>
  );
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
  return (
    <button type="button" className={`demo-book ${booked ? 'demo-book--done' : ''}`} onClick={book}>
      {booked ? 'Booked ✓' : 'Book'}
    </button>
  );
}

// Live demo: segmented control
function DemoSegment() {
  const [idx, setIdx] = useState(0);
  const opts = ['Day', 'Week', 'Month'];
  return (
    <div className="demo-segment" role="tablist">
      {opts.map((o, i) => (
        <button
          key={o}
          type="button"
          role="tab"
          aria-selected={i === idx}
          className={`demo-segment-btn ${i === idx ? 'demo-segment-btn--on' : ''}`}
          onClick={() => setIdx(i)}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

// The feed: Konpo case-study hero loops. cat drives the filter rail;
// desc/scope feed the expanded view. href opens the full case study.
const WORK_CATS = ['All', 'Brand', 'Websites', 'Product', 'Systems'];
const CASE = {
  fyler: { href: 'https://www.konpo.studio/work/fyler-search-engine',
    desc: 'A search engine with taste — brand, marketing site, and product UI for an AI-native search startup.', scope: ['Website', 'Product', 'Brand'] },
  compsych: { href: 'https://www.konpo.studio/work/compsych',
    desc: 'Rebrand for the world’s largest provider of employee mental-health and absence programs.', scope: ['Brand', 'Website'] },
  coachable: { href: 'https://www.konpo.studio/work/coachable',
    desc: 'Identity and website for a coaching platform helping people build financial independence through tech careers.', scope: ['Brand', 'Website'] },
  systemone: { href: 'https://www.konpo.studio/work/system-one',
    desc: 'Brand and website for System One — film-led storytelling with a quiet, confident system.', scope: ['Brand', 'Website'] },
  ili: { href: 'https://www.konpo.studio/work/ili-digital',
    desc: 'Brand and web presence for ILI.DIGITAL — a venture studio turning industry expertise into digital products.', scope: ['Brand', 'Website'] },
  hutte: { href: 'https://www.konpo.studio/work/hutte',
    desc: 'Brand identity for Hutte, the visual home for Salesforce DevOps — logo, emojis, and a system that scales.', scope: ['Brand', 'Product'] },
};
const A = (proj, file, title, cat, aspect) => ({
  type: 'video', src: `uploads/cases/${file}.mp4`, title, cat, aspect, ...CASE[proj],
});
// nexus assets (pulled from the are.na channel) — mixed images + videos
const N = (type, file, title, cat, aspect) => ({
  type, src: `uploads/cases/nexus/${file}`, title, cat, aspect, ...CASE.ili,
});
// One cover per project; clicking it unfolds the project's other cards
// inline, in the same column — no popup, the scroll just keeps going.
const PROJECTS = [
  { key: 'fyler', industry: 'AI', org: 'Startup', title: 'Fyler', cat: 'Websites', tag: 'Search Engine', sub: 'Brand, marketing site, and product UI for AI-native search.',
    cover: A('fyler', 'fyler-hero', 'Fyler', 'Websites', '16 / 9'),
    cards: [
      A('fyler', 'fyler-interface', 'Interface', 'Product', '16 / 9'),
      A('fyler', 'fyler-palettes', 'Palettes', 'Systems', '1 / 1'),
      A('fyler', 'fyler-darklight', 'Dark / Light', 'Product', '3 / 2'),
    ] },
  { key: 'compsych', industry: 'Healthcare', org: 'Enterprise', title: 'ComPsych', cat: 'Brand', tag: 'Mental Health', sub: 'Rebranding the world\u2019s largest employee mental-health provider.',
    cover: A('compsych', 'compsych-moodboard', 'ComPsych', 'Brand', '4 / 3'),
    cards: [
      A('compsych', 'compsych-logo', 'Logo', 'Brand', '16 / 9'),
      A('compsych', 'compsych-graphics', 'Graphics', 'Brand', '1 / 1'),
      A('compsych', 'compsych-website', 'Website', 'Websites', '4 / 3'),
    ] },
  { key: 'coachable', industry: 'Coaching', org: 'Startup', title: 'Coachable', cat: 'Brand', tag: 'Career Coaching', sub: 'Identity and website for career-changing coaching.',
    cover: A('coachable', 'coachable-hero', 'Coachable', 'Brand', '4 / 3'),
    cards: [
      A('coachable', 'coachable-proposals', 'Proposals', 'Brand', '8 / 5'),
      A('coachable', 'coachable-color', 'Color', 'Systems', '16 / 9'),
      A('coachable', 'coachable-phone', 'Mobile', 'Product', '4 / 5'),
    ] },
  { key: 'systemone', industry: 'Entertainment', org: 'Startup', title: 'System One', cat: 'Websites', tag: 'Entertainment', sub: 'Brand and website for film-led storytelling.',
    cover: A('systemone', 'systemone-intro', 'System One', 'Websites', '16 / 9'),
    cards: [
      A('systemone', 'systemone-logo', 'Logo', 'Brand', '3 / 2'),
      A('systemone', 'systemone-girl', 'Film', 'Websites', '4 / 5'),
      A('systemone', 'systemone-stories', 'Stories', 'Websites', '3 / 2'),
    ] },
  // ILI.DIGITAL runs on the "Nexus" are.na channel — a longer, mixed
  // image/video stack that stress-tests the inline-expand pattern.
  { key: 'ili', industry: 'Venture', org: 'Enterprise', title: 'ILI.DIGITAL', cat: 'Websites', tag: 'Venture Studio', sub: 'The Nexus brand system, from logo to product.',
    cover: N('video', 'hero.mp4', 'ILI.DIGITAL', 'Websites', '16 / 9'),
    cards: [
      N('video', 'reveal.mp4', 'Reveal', 'Brand', '21 / 9'),
      N('video', 'logos-2.mp4', 'Logos', 'Brand', '4 / 3'),
      N('image', 'type-ii.webp', 'Typography', 'Systems', '3 / 2'),
      N('image', 'system-color.webp', 'Color', 'Systems', '3 / 2'),
      N('image', 'button-system.webp', 'Buttons', 'Systems', '2 / 3'),
      N('image', 'icon-system.webp', 'Icons', 'Systems', '6 / 5'),
      N('video', 'smile.mp4', 'Smile', 'Brand', '4 / 3'),
      N('video', 'frames.mp4', 'Frames', 'Brand', '6 / 5'),
      N('image', 'website-ii.webp', 'Website', 'Websites', '16 / 9'),
      N('video', 'charts.mp4', 'Charts', 'Product', '3 / 2'),
      N('image', 'poster.webp', 'Poster', 'Brand', '3 / 4'),
      N('image', 'book.png', 'Book', 'Brand', '16 / 9'),
      N('video', 'animation.mp4', 'Animation', 'Brand', '21 / 9'),
    ] },
  { key: 'hutte', industry: 'DevTools', org: 'Startup', title: 'Hutte', cat: 'Brand', tag: 'Salesforce DevOps', sub: 'Identity and product for the home of Salesforce DevOps.',
    cover: A('hutte', 'hutte-logo', 'Hutte', 'Brand', '3 / 2'),
    cards: [
      A('hutte', 'hutte-emojis', 'Emojis', 'Brand', '1 / 1'),
      A('hutte', 'hutte-tablet', 'Tablet', 'Brand', '4 / 3'),
      A('hutte', 'hutte-salesforce', 'Salesforce', 'Product', '16 / 9'),
    ] },
];

const DEMOS = { toggle: DemoToggle, book: DemoBook, segment: DemoSegment };

// ARTIFACTS — small self-initiated craft pieces (often AI-assisted)
// that blend into the client work, rauno.me/craft-style. Shape:
//   { title, type: 'video'|'image'|'component', src|demo, aspect,
//     desc, href?, at? }
// `at` slots the artifact in at that tile index (omit → appended).
// Artifacts carry scope 'Fun' and no industry/org, so they show under
// All + Scope:Fun and step back when a client filter is active.
const ARTIFACTS = [
  { title: 'Switch', type: 'component', demo: 'toggle', aspect: '4 / 3', at: 5,
    desc: 'The site’s entry gate, isolated — a real native switch, velvet chime and all.',
    cat: 'Fun', scope: ['Craft'] },
];

// Video that only downloads + plays while it's near the viewport. This
// keeps us from decoding a dozen clips at once (the smoothness killer)
// and defers below-the-fold bytes until they're actually scrolled to.
function LazyVideo({ src, aspect }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true; // belt-and-suspenders for autoplay policies
    let loaded = false;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries[0].isIntersecting;
        if (vis) {
          if (!loaded) { el.src = src; loaded = true; }
          const p = el.play();
          if (p && p.catch) p.catch(() => {});
        } else if (loaded) {
          el.pause();
        }
      },
      { rootMargin: '150px 0px', threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [src]);
  return (
    <div className="asset-media asset-media--video" style={{ aspectRatio: aspect }}>
      <video ref={ref} muted loop playsInline preload="none" />
    </div>
  );
}

function AssetMedia({ asset }) {
  if (asset.type === 'image') {
    // with an explicit aspect the image cover-fills immediately — lazy
    // loads inside folds land after snap() has already run
    return (
      <div
        className={`asset-media asset-media--img${asset.aspect ? ' asset-media--fixed' : ''}`}
        style={asset.aspect ? { aspectRatio: asset.aspect } : undefined}
      >
        <img src={asset.src} alt={asset.title} loading="lazy" decoding="async" />
      </div>
    );
  }
  if (asset.type === 'video') {
    if (asset.src) {
      return <LazyVideo src={asset.src} aspect={asset.aspect} />;
    }
    return (
      <div className="asset-media asset-media--canvas" style={{ aspectRatio: asset.aspect }}>
        <span className="asset-play" aria-hidden="true">
          <svg viewBox="0 0 16 16" width="13" height="13">
            <path d="M5 3.2v9.6L13 8 5 3.2z" fill="currentColor" />
          </svg>
        </span>
      </div>
    );
  }
  if (asset.type === 'gif') {
    return (
      <div className="asset-media asset-media--canvas" style={{ aspectRatio: asset.aspect }}>
        <span className="asset-gif mono" aria-hidden="true">GIF</span>
      </div>
    );
  }
  // component — live demo on a quiet canvas
  const Demo = DEMOS[asset.demo] || DemoToggle;
  return (
    <div className="asset-media asset-media--canvas" style={{ aspectRatio: asset.aspect }}>
      <Demo />
    </div>
  );
}

// Expanded view — recent.design-style detail overlay.
// Rendered through a portal: the container creates a stacking context
// (z-index: 1), which would trap the modal underneath the sticky nav.
function WorkModal({ asset, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);
  return ReactDOM.createPortal(
    <div className="work-modal" onClick={onClose} role="dialog" aria-modal="true" aria-label={asset.title}>
      <div className="work-modal-panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="work-modal-close mono" onClick={onClose} aria-label="Close">✕ CLOSE</button>
        <div className="work-modal-media">
          {asset.type === 'image' ? (
            <img src={asset.src} alt={asset.title} />
          ) : asset.type === 'component' ? (
            <div className="work-modal-demo">
              {React.createElement(DEMOS[asset.demo] || DemoToggle)}
            </div>
          ) : (
            <video src={asset.src} autoPlay muted loop playsInline />
          )}
        </div>
        <div className="work-modal-body">
          <h3 className="work-modal-title">{asset.title}</h3>
          <p className="work-modal-desc">{asset.desc}</p>
          <div className="work-info">
            <div className="work-info-row">
              <span className="work-info-label">Category</span>
              <span className="work-info-value">{asset.cat}</span>
            </div>
            {asset.scope && (
            <div className="work-info-row">
              <span className="work-info-label">Scope</span>
              <span className="work-info-value work-info-value--stack">
                {asset.scope.map((sc) => <span key={sc}>{sc}</span>)}
              </span>
            </div>
            )}
            {asset.href && (
              <div className="work-info-row">
                <span className="work-info-label">Case study</span>
                <span className="work-info-value">
                  <a className="ulink" href={asset.href} target="_blank" rel="noreferrer">konpo.studio ↗</a>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
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
// second card drops a few cells below the first — enough offset to keep
// the canvas feel without opening half-a-card of dead scroll per row
const COVER_MTS = [[0, 3], [0, 2], [0, 4]];
function coverSlot(rowIdx, colIdx, desktop) {
  if (!desktop) return null;                 // only desktop staggers
  const spans = COVER_SPANS[rowIdx % COVER_SPANS.length];
  const mts = COVER_MTS[rowIdx % COVER_MTS.length];
  return { '--cspan': spans[colIdx] || 6, '--cmt': mts[colIdx] || 0 };
}

// Tap-vs-scroll guard for full-tile tap targets: the switch/button fills
// the whole tile, so a scroll flick that starts on it would otherwise fire.
// If the pointer travelled more than a few px between press and release,
// treat it as a scroll and cancel the activation (and the outside-close).
function useTapGuard(threshold = 10) {
  const downRef = useRef(null);
  return {
    onPointerDown: (e) => { downRef.current = [e.clientX, e.clientY]; },
    onClickCapture: (e) => {
      const d = downRef.current;
      downRef.current = null;
      if (d && Math.hypot(e.clientX - d[0], e.clientY - d[1]) > threshold) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
  };
}

// One tile in the flat feed — cover or piece, identical anatomy: FIG
// label, framed media, meta row. Clicking opens the shot's info overlay
// (WorkModal) — no inline expansion, the feed itself stays calm.
function FeedTile({ tile, index, onOpen, slotStyle }) {
  const guard = useTapGuard();
  return (
    <div className="proj" style={slotStyle || undefined}>
      <button
        type="button"
        className="asset-tile asset-tile--cover reveal"
        style={{ '--reveal-delay': `${5700 + Math.min(index, 8) * 100}ms` }}
        onClick={onOpen}
        aria-haspopup="dialog"
        aria-label={`${tile.asset.title} — details`}
        {...guard}
      >
        <span className="asset-fig mono">{tile.fig}</span>
        <div className="asset-frame">
          <AssetMedia asset={tile.asset} />
        </div>
        <div className="asset-meta">
          <span className="asset-meta-left">
            <span className="asset-title">{tile.asset.title}</span>
          </span>
          <span className="asset-note mono">{tile.note.toUpperCase()}</span>
        </div>
      </button>
    </div>
  );
}

// Display names for the scope filter (data keeps the original cats)
const SCOPE_LABELS = { Websites: 'Web' };
const FILTER_GROUPS = [
  ['industry', 'Industry'],
  ['org', 'Organization'],
  ['scope', 'Scope'],
];

function AssetsFeed() {
  const [cols, setCols] = useState(feedColCount);
  const [desktop, setDesktop] = useState(feedIsDesktop);
  const [active, setActive] = useState(null);   // the shot open in the info overlay
  const [filters, setFilters] = useState({ industry: null, org: null, scope: null });
  useEffect(() => {
    const onResize = () => { setCols(feedColCount()); setDesktop(feedIsDesktop()); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const openShot = (asset) => { setActive(asset); playStateChange(true); haptic(10); };
  const closeShot = () => { setActive(null); playStateChange(false); };
  const setFilter = (dim, val) => {
    setFilters((f) => ({ ...f, [dim]: f[dim] === val ? null : val })); // tap again = off
    haptic(8);
    // relayout snapped heights + dividers after the grid re-deals
    setTimeout(() => window.dispatchEvent(new Event('resize')), 60);
  };
  // Flat feed: every project contributes its cover then its pieces, in
  // order — one continuous scroll, no folding. Artifacts slot in where
  // their `at` says. FIG numbers run straight through the FULL feed and
  // stay stable under filtering — figures are identity, not position.
  const tiles = [];
  PROJECTS.forEach((p) => {
    tiles.push({ asset: p.cover, note: p.tag || p.cat, key: p.key,
      industry: p.industry, org: p.org, scope: SCOPE_LABELS[p.cover.cat] || p.cover.cat });
    p.cards.forEach((a, j) => tiles.push({ asset: a, note: a.cat, key: `${p.key}-${j}`,
      industry: p.industry, org: p.org, scope: SCOPE_LABELS[a.cat] || a.cat }));
  });
  ARTIFACTS.forEach((a, i) => {
    const tile = { asset: a, note: 'Artifact', key: `artifact-${i}`, scope: 'Fun' };
    if (a.at != null && a.at <= tiles.length) tiles.splice(a.at, 0, tile);
    else tiles.push(tile);
  });
  tiles.forEach((t, i) => { t.fig = `FIG_${String(i + 1).padStart(3, '0')}`; });
  // Chip values derive from the data — tag a project gov/unicorn (or an
  // artifact Fun) and its chip appears here on its own.
  const uniq = (xs) => Array.from(new Set(xs.filter(Boolean)));
  const values = {
    industry: uniq(tiles.map((t) => t.industry)),
    org: uniq(tiles.map((t) => t.org)),
    scope: uniq(tiles.map((t) => t.scope)),
  };
  const visible = tiles.filter((t) =>
    FILTER_GROUPS.every(([dim]) => !filters[dim] || t[dim] === filters[dim]));
  // Row-major grid; desktop subdivides into 12 tracks so tiles take
  // varied spans + offsets (coverSlot), tablet/mobile one track per tile.
  const trackCount = desktop ? 12 : cols;
  const rows = [];
  for (let i = 0; i < visible.length; i += cols) rows.push(visible.slice(i, i + cols));
  return (
    <section className="feed-section" data-screen-label="02 Work">
      {/* a quiet word on whose work this is — right under the divider */}
      <p className="feed-note reveal" style={{ '--reveal-delay': '5300ms' }}>
        The work below is <a className="hand-word hand-word--konpo" href="https://www.konpo.studio" target="_blank" rel="noreferrer">Konpo’s</a>.
        Which is, on many days, a trench coat with me inside it. Plus a few brilliant
        designers I call when a project deserves better than my average motion skills.
      </p>
      <div className="feed-filters reveal" style={{ '--reveal-delay': '5450ms' }}>
        {FILTER_GROUPS.map(([dim, label]) => (
          <div className="filter-row" key={dim}>
            <span className="filter-label mono">{label}</span>
            <div className="filter-chips">
              <button
                type="button"
                className={`fchip mono ${filters[dim] == null ? 'fchip--on' : ''}`}
                onClick={() => setFilter(dim, null)}
              >
                All
              </button>
              {values[dim].map((v) => (
                <button
                  type="button"
                  className={`fchip mono ${filters[dim] === v ? 'fchip--on' : ''}`}
                  onClick={() => setFilter(dim, v)}
                  key={v}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        className="feed-masonry"
        style={{ gridTemplateColumns: `repeat(${trackCount}, minmax(0, 1fr))` }}
      >
        {rows.map((row, ri) =>
          row.map((t, ci) => (
            <FeedTile
              tile={t}
              index={ri * cols + ci}
              onOpen={() => openShot(t.asset)}
              slotStyle={coverSlot(ri, ci, desktop)}
              key={t.key}
            />
          ))
        )}
      </div>
      {visible.length === 0 && (
        <p className="feed-empty mono">NOTHING HERE YET — LOOSEN A FILTER</p>
      )}
      {active && <WorkModal asset={active} onClose={closeShot} />}
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────
const GLITCH_CHARS = '!<>-_\\/[]{}—=+*^?#________';

function GlitchLink({ from, to, href = '#' }) {
  const [display, setDisplay] = useState(from);
  const rafRef = useRef(null);
  const startRef = useRef(0);
  const targetRef = useRef(from);

  const startScramble = (target) => {
    targetRef.current = target;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const startStr = display;
    const len = Math.max(startStr.length, target.length);
    // Per-char "lock" times — each character settles at a different point
    const locks = Array.from({ length: len }, (_, i) => {
      const start = Math.floor(Math.random() * 5);
      const end = start + 5 + Math.floor(Math.random() * 7);
      return [start, end];
    });
    startRef.current = performance.now();

    const tick = (now) => {
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

  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }, []);

  return (
    <a
      href={href}
      className="ulink glitch-link"
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => startScramble(to)}
      onMouseLeave={() => startScramble(from)}
      onFocus={() => startScramble(to)}
      onBlur={() => startScramble(from)}
    >
      <span className="glitch-link-text">{display}</span>
    </a>
  );
}

const ELSEWHERE_LINKS = [
  { from: 'Substack ↗', to: 'Stuff I sometimes write ↗', href: 'https://konpo.substack.com/' },
  { from: 'LinkedIn ↗', to: 'Polished me ↗', href: 'https://www.linkedin.com/in/jeanmassad/' },
  { from: 'Insta ↗',    to: 'Mainly snow and surf ↗', href: 'https://www.instagram.com/heychacho/' },
  { from: 'Are.na ↗',   to: 'Curated work ↗', href: 'https://www.are.na/jean-massad-b5kb-hfgjv0/channels' },
  { from: 'Dribbble ↗', to: 'I need to update this ↗', href: 'https://dribbble.com/jeanmassad' },
  { from: 'GitHub ↗',   to: 'The lines between design and code have blurred ↗', href: 'https://github.com/jeanm-404' },
];

function Footer() {
  return (
    <footer className="footer" data-screen-label="03 Footer">
      <div className="footer-row">
        <div className="footer-col">
          <div className="footer-label mono">elsewhere</div>
          <ul className="footer-links">
            {ELSEWHERE_LINKS.map((l, i) => (
              <li key={l.from} className="reveal" style={{ '--reveal-delay': `${5000 + i * 140}ms` }}>
                <GlitchLink from={l.from} to={l.to} href={l.href} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>);

}

function Colophon({ onClose }) {
  return (
    <div className="colophon" data-screen-label="04 Colophon">
      <FooterToggle onClose={onClose} />
      <div className="colophon-rule" aria-hidden="true" />
      <p className="footer-note">
        Made on a rainy Basque day.<br />Powered by Yorkshire Tea.
      </p>
    </div>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);