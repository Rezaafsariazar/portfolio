// Sun-and-shadow plate: top-down block, shadows follow an illustrative sun arc.
const NS = 'http://www.w3.org/2000/svg';
const svg = document.getElementById('map') as unknown as SVGSVGElement | null;
const L = document.getElementById('plate')?.dataset ?? {};

type Attrs = Record<string, string | number>;
function el(name: string, attrs: Attrs, parent: Element | null = svg): SVGElement {
  const n = document.createElementNS(NS, name);
  for (const k in attrs) n.setAttribute(k, String(attrs[k]));
  parent?.appendChild(n);
  return n as SVGElement;
}

if (svg) {
  const buildings = [
    { x: 70, y: 60, w: 80, h: 56, m: 34 },
    { x: 190, y: 50, w: 52, h: 90, m: 52 },
    { x: 278, y: 70, w: 70, h: 50, m: 22 },
    { x: 60, y: 190, w: 62, h: 70, m: 44 },
    { x: 160, y: 210, w: 96, h: 48, m: 18 },
    { x: 296, y: 180, w: 56, h: 78, m: 30 },
  ];
  const trees = [[150, 160, 12, 9], [262, 164, 10, 8], [36, 150, 9, 7], [366, 150, 10, 8], [130, 285, 11, 8]];
  const PX_PER_M = 2.4;

  el('rect', { x: 0, y: 0, width: 400, height: 320, fill: 'var(--ground)' });
  for (const [x, y, w, h] of [[0, 150, 400, 24], [160, 0, 22, 320], [0, 276, 400, 6]])
    el('rect', { x, y, width: w, height: h, fill: 'var(--line)', opacity: 0.8 });

  // Grid ticks + sun path with hour marks
  const gridG = el('g', { stroke: 'var(--muted)', 'stroke-width': 0.4, opacity: 0.35 });
  for (let x = 50; x < 400; x += 50) el('line', { x1: x, y1: 0, x2: x, y2: 320 }, gridG);
  for (let y = 40; y < 320; y += 40) el('line', { x1: 0, y1: y, x2: 400, y2: y }, gridG);
  const sunAt = (t: number) => {
    const a = ((80 + t * 200) * Math.PI) / 180;
    return [200 + Math.sin(a) * 168 * 0.9, 160 - Math.cos(a) * 130 * 0.9];
  };
  const pts: string[] = [];
  for (let i = 0; i <= 40; i++) pts.push(sunAt(i / 40).map((n) => n.toFixed(1)).join(','));
  el('polyline', { points: pts.join(' '), fill: 'none', stroke: 'var(--sun)', 'stroke-width': 1, 'stroke-dasharray': '3 4', opacity: 0.8 });
  for (const h of [6, 9, 12, 15, 18]) {
    const [x, y] = sunAt((h * 60 - 360) / 840);
    el('circle', { cx: x, cy: y, r: 2, fill: 'var(--sun)' });
    el('text', { x, y: y + 13, 'text-anchor': 'middle', 'font-size': 8, fill: 'var(--muted)', 'font-family': 'IBM Plex Mono, monospace' }).textContent = String(h).padStart(2, '0');
  }
  // Scale bar: 120 units = 50 m at 2.4 units/m
  el('rect', { x: 268, y: 298, width: 120, height: 4, fill: 'var(--ink)' });
  el('rect', { x: 328, y: 298, width: 60, height: 4, fill: 'var(--surface)', stroke: 'var(--ink)', 'stroke-width': 0.6 });
  el('text', { x: 268, y: 294, 'font-size': 8, fill: 'var(--ink)', 'font-family': 'IBM Plex Mono, monospace' }).textContent = '0';
  el('text', { x: 388, y: 294, 'text-anchor': 'end', 'font-size': 8, fill: 'var(--ink)', 'font-family': 'IBM Plex Mono, monospace' }).textContent = '50 m';

  const shadowG = el('g', { fill: 'var(--shadow)', opacity: 0.34 });
  const treeShadowG = el('g', { fill: 'var(--shadow)', opacity: 0.3 });
  for (const b of buildings)
    el('rect', { x: b.x, y: b.y, width: b.w, height: b.h, fill: 'var(--building)', stroke: 'var(--muted)', 'stroke-width': 0.8 });
  for (const t of trees) el('circle', { cx: t[0], cy: t[1], r: t[2], fill: 'var(--accent)', opacity: 0.75 });
  const sunDot = el('circle', { r: 9, fill: 'var(--sun)' });
  const sunRing = el('circle', { r: 15, fill: 'none', stroke: 'var(--sun)', 'stroke-width': 1, opacity: 0.5 });
  el('text', { x: 380, y: 20, 'text-anchor': 'middle', 'font-size': 11, fill: 'var(--muted)', 'font-family': 'IBM Plex Mono, monospace' }).textContent = 'N';
  el('path', { d: 'M380 24 L376 36 L380 33 L384 36 Z', fill: 'var(--muted)' });

  const $ = (id: string) => document.getElementById(id)!;
  const hour = $('hour') as HTMLInputElement;
  const pad = (n: number) => String(n).padStart(2, '0');

  const draw = () => {
    const min = +hour.value;
    const t = (min - 360) / (1200 - 360);
    document.documentElement.style.setProperty('--sx', t.toFixed(3));
    document.documentElement.style.setProperty('--sy', Math.sin(Math.PI * t).toFixed(3));
    const elev = 8 + Math.sin(Math.PI * t) * 52;
    const azim = 80 + t * 200;
    const a = (azim * Math.PI) / 180;
    const sx = Math.sin(a), sy = -Math.cos(a);
    const dx = -sx, dy = -sy;
    const tan = Math.tan((elev * Math.PI) / 180);

    $('clock').textContent = `${pad(Math.floor(min / 60))}:${pad(min % 60)}`;
    $('alt').textContent = `${L.alt} ${elev.toFixed(0)}°`;
    $('az').textContent = `${L.az} ${azim.toFixed(0)}°`;
    $('phase').textContent = elev < 20 ? L.low : elev > 45 ? L.high : L.mid;
    hour.setAttribute('aria-valuetext', $('clock').textContent!);

    const cx = 200 + sx * 168 * 0.9, cy = 160 + sy * 130 * 0.9;
    for (const n of [sunDot, sunRing]) { n.setAttribute('cx', String(cx)); n.setAttribute('cy', String(cy)); }

    shadowG.textContent = '';
    treeShadowG.textContent = '';
    for (const b of buildings) {
      const len = Math.min(b.m / tan, 90) * PX_PER_M * 0.55;
      const ox = dx * len, oy = dy * len;
      const c = [[b.x, b.y], [b.x + b.w, b.y], [b.x + b.w, b.y + b.h], [b.x, b.y + b.h]];
      for (let i = 0; i < 4; i++) {
        const p = c[i], q = c[(i + 1) % 4];
        el('polygon', { points: [p, q, [q[0] + ox, q[1] + oy], [p[0] + ox, p[1] + oy]].join(' ') }, shadowG);
      }
      el('rect', { x: b.x + ox, y: b.y + oy, width: b.w, height: b.h }, shadowG);
    }
    for (const tr of trees) {
      const len = Math.min(tr[3] / tan, 40) * PX_PER_M * 0.5;
      el('circle', { cx: tr[0] + dx * len, cy: tr[1] + dy * len, r: tr[2] }, treeShadowG);
    }
  };
  hour.addEventListener('input', draw);
  draw();
}

// Copy email
const copyBtn = document.getElementById('copy');
copyBtn?.addEventListener('click', async () => {
  const text = document.getElementById('mail')?.textContent?.trim() ?? '';
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = copyBtn.dataset.copied ?? 'Copied';
  } catch {
    const r = document.createRange();
    r.selectNodeContents(document.getElementById('mail')!);
    getSelection()?.removeAllRanges();
    getSelection()?.addRange(r);
    copyBtn.textContent = copyBtn.dataset.fail ?? 'Ctrl+C';
  }
  setTimeout(() => (copyBtn.textContent = copyBtn.dataset.label ?? 'Copy'), 1800);
});

// Theme toggle
document.getElementById('theme')?.addEventListener('click', () => {
  const r = document.documentElement;
  const cur = r.getAttribute('data-theme');
  const dark = cur ? cur === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  const next = dark ? 'light' : 'dark';
  r.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch {}
});
