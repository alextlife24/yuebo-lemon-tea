/**
 * 產生手繪風格的 placeholder 圖片（SVG）。
 * 之後拿到實拍照片，直接把 public/images/ 底下同名檔案換掉即可
 * （副檔名改成 .jpg / .webp 的話，記得同步更新 src/content/site.ts）。
 *
 *   node scripts/gen-placeholders.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";

const OUT = "public/images";
mkdirSync(OUT, { recursive: true });

const C = {
  lemon: "#F7D83D",
  lemonSoft: "#FBEB9B",
  lemonDeep: "#E2BD1E",
  cream: "#FFF8DC",
  paper: "#FAF8F1",
  amber: "#A86624",
  brown: "#46301F",
  leaf: "#6F843D",
  leafSoft: "#8FA45C",
  sea: "#7FA8B8",
};

const FONT = "'Noto Sans TC','PingFang TC','Microsoft JhengHei',sans-serif";

const defs = `
<defs>
  <linearGradient id="tea" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#C98D47"/>
    <stop offset="60%" stop-color="${C.amber}"/>
    <stop offset="100%" stop-color="#8A5019"/>
  </linearGradient>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#FFF3C4"/>
    <stop offset="100%" stop-color="${C.paper}"/>
  </linearGradient>
  <radialGradient id="lemonG" cx="35%" cy="30%">
    <stop offset="0%" stop-color="#FFF0A8"/>
    <stop offset="70%" stop-color="${C.lemon}"/>
    <stop offset="100%" stop-color="${C.lemonDeep}"/>
  </radialGradient>
  <filter id="grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2"/>
  </filter>
</defs>`;

/**
 * 紙張底色 + 插畫 + 顆粒質感。
 * 圖面上不放任何「PLACEHOLDER／替換」字樣，
 * 這些插畫本身就是可直接上線的視覺；日後換成實拍照即可。
 * labelZh 只用於 SVG 的 aria-label（無障礙描述），不會顯示在畫面上。
 */
function frame(w, h, inner, labelZh, _labelEn, bg = C.paper) {
  const alt = labelZh.replace(/^替換：/, "").replace(/實拍照$/, "");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${alt}">
${defs}
<rect width="${w}" height="${h}" fill="${bg}"/>
${inner}
<rect width="${w}" height="${h}" filter="url(#grain)" opacity="0.05"/>
</svg>`;
}

/** 一顆檸檬（可帶葉子） */
const lemon = (x, y, r, rot = -12, leafOn = true) => `
<g transform="translate(${x} ${y}) rotate(${rot})">
  <ellipse rx="${r}" ry="${r * 0.84}" fill="url(#lemonG)" stroke="${C.brown}" stroke-width="${r * 0.06}"/>
  <path d="M ${-r} 0 q ${-r * 0.22} 0 ${-r * 0.26} ${-r * 0.06}" fill="none" stroke="${C.brown}" stroke-width="${r * 0.06}" stroke-linecap="round"/>
  <path d="M ${r} 0 q ${r * 0.22} 0 ${r * 0.26} ${-r * 0.06}" fill="none" stroke="${C.brown}" stroke-width="${r * 0.06}" stroke-linecap="round"/>
  <ellipse cx="${-r * 0.34}" cy="${-r * 0.34}" rx="${r * 0.22}" ry="${r * 0.13}" fill="#FFFBE0" opacity="0.75" transform="rotate(-22 ${-r * 0.34} ${-r * 0.34})"/>
  ${leafOn ? `<path d="M ${r * 0.1} ${-r * 0.82} q ${r * 0.55} ${-r * 0.42} ${r * 0.72} ${r * 0.02} q ${-r * 0.5} ${r * 0.36} ${-r * 0.72} ${-r * 0.02} z" fill="${C.leaf}" stroke="${C.brown}" stroke-width="${r * 0.05}"/>` : ""}
</g>`;

/** 檸檬切片 */
const slice = (x, y, r, rot = 0) => {
  let seg = "";
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4;
    const x1 = (Math.cos(a - 0.3) * r * 0.72).toFixed(1);
    const y1 = (Math.sin(a - 0.3) * r * 0.72).toFixed(1);
    const x2 = (Math.cos(a + 0.3) * r * 0.72).toFixed(1);
    const y2 = (Math.sin(a + 0.3) * r * 0.72).toFixed(1);
    seg += `<path d="M 0 0 L ${x1} ${y1} A ${r * 0.72} ${r * 0.72} 0 0 1 ${x2} ${y2} Z" fill="${C.lemonSoft}" stroke="#FFFDF2" stroke-width="${r * 0.05}"/>`;
  }
  return `<g transform="translate(${x} ${y}) rotate(${rot})">
    <circle r="${r}" fill="${C.lemon}" stroke="${C.brown}" stroke-width="${r * 0.07}"/>
    <circle r="${r * 0.82}" fill="#FFF7C9"/>
    ${seg}
  </g>`;
};

const iceCube = (x, y, s, rot) => `
<g transform="translate(${x} ${y}) rotate(${rot})" opacity="0.72">
  <rect x="${-s / 2}" y="${-s / 2}" width="${s}" height="${s}" rx="${s * 0.22}" fill="#FFFFFF" fill-opacity="0.55" stroke="#FFFFFF" stroke-width="2"/>
  <path d="M ${-s * 0.22} ${-s * 0.22} L ${s * 0.16} ${s * 0.1}" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.9"/>
</g>`;

const bubbles = (cx, cy, n, spread, seed = 1) =>
  Array.from({ length: n }, (_, i) => {
    const r = 4 + ((i * 7 + seed * 5) % 11);
    const x = cx + (((i * 37 + seed * 13) % spread) - spread / 2);
    const y = cy - ((i * 53 + seed * 29) % (spread * 1.4));
    return `<circle cx="${x}" cy="${y.toFixed(1)}" r="${r}" fill="#FFFFFF" fill-opacity="0.5" stroke="#FFFFFF" stroke-opacity="0.85" stroke-width="1.5"/>`;
  }).join("");

/* ── 1. 炸彈檸檬茶 ─────────────────────────── */
const cupPath =
  "M 262 322 L 538 322 L 497 862 Q 493 898 457 898 L 343 898 Q 307 898 303 862 Z";
const bombTea = `
<g>
  <ellipse cx="400" cy="915" rx="150" ry="26" fill="${C.amber}" opacity="0.12"/>
  <rect x="404" y="150" width="20" height="200" rx="10" fill="${C.leaf}" transform="rotate(9 414 250)"/>
  <path d="${cupPath}" fill="#FFFFFF" fill-opacity="0.55" stroke="${C.brown}" stroke-width="7" stroke-linejoin="round"/>
  <clipPath id="cupClip"><path d="${cupPath}"/></clipPath>
  <g clip-path="url(#cupClip)">
    <rect x="250" y="392" width="300" height="520" fill="url(#tea)"/>
    ${iceCube(348, 448, 76, -14)}
    ${iceCube(452, 432, 64, 18)}
    ${slice(478, 704, 44, 20)}
    ${slice(322, 690, 40, -16)}
    ${lemon(400, 596, 92, -10, false)}
    ${slice(400, 848, 38, 8)}
    ${bubbles(400, 856, 12, 170, 3)}
    <rect x="250" y="392" width="300" height="14" fill="#FFFFFF" opacity="0.4"/>
  </g>
  <rect x="246" y="286" width="308" height="42" rx="16" fill="${C.cream}" stroke="${C.brown}" stroke-width="7"/>
  <path d="M 262 288 q 138 -52 276 0" fill="${C.cream}" stroke="${C.brown}" stroke-width="7" stroke-linecap="round"/>
  <g transform="rotate(-2.5 400 760)">
    <rect x="302" y="720" width="196" height="82" rx="12" fill="${C.paper}" fill-opacity="0.94" stroke="${C.brown}" stroke-width="5"/>
    <text x="400" y="762" text-anchor="middle" font-family="${FONT}" font-size="30" font-weight="700" fill="${C.brown}">約伯賞茶</text>
    <text x="400" y="788" text-anchor="middle" font-family="${FONT}" font-size="14" fill="${C.amber}" letter-spacing="2.5">BOMB LEMON TEA</text>
  </g>
  ${lemon(146, 234, 52, -18)}
  ${lemon(662, 302, 42, 14)}
  ${slice(676, 706, 44, -8)}
</g>`;
writeFileSync(
  `${OUT}/product-bomb-lemon-tea.svg`,
  frame(800, 1000, bombTea, "替換：炸彈檸檬茶實拍照", "PLACEHOLDER / BOMB LEMON TEA"),
);

/* ── 2. 極品檸檬原汁 ───────────────────────── */
const bottlePath =
  "M 344 300 q -110 96 -110 236 v 268 q 0 60 62 60 h 208 q 62 0 62 -60 v -268 q 0 -140 -110 -236 z";
const juice = `
<g>
  <ellipse cx="400" cy="905" rx="140" ry="24" fill="${C.amber}" opacity="0.12"/>
  <rect x="352" y="190" width="96" height="86" rx="14" fill="${C.leaf}" stroke="${C.brown}" stroke-width="7"/>
  <rect x="344" y="262" width="112" height="46" rx="12" fill="${C.cream}" stroke="${C.brown}" stroke-width="7"/>
  <path d="${bottlePath}" fill="#FFFFFF" fill-opacity="0.5" stroke="${C.brown}" stroke-width="7"/>
  <clipPath id="bClip"><path d="${bottlePath}"/></clipPath>
  <g clip-path="url(#bClip)">
    <rect x="220" y="430" width="360" height="440" fill="${C.lemon}"/>
    <rect x="220" y="430" width="360" height="16" fill="#FFFFFF" opacity="0.45"/>
    ${bubbles(400, 812, 10, 230, 7)}
  </g>
  <rect x="256" y="552" width="288" height="190" rx="10" fill="${C.paper}" fill-opacity="0.95" stroke="${C.brown}" stroke-width="5"/>
  ${slice(400, 616, 42, 12)}
  <text x="400" y="700" text-anchor="middle" font-family="${FONT}" font-size="34" font-weight="700" fill="${C.brown}">極品檸檬原汁</text>
  <text x="400" y="728" text-anchor="middle" font-family="${FONT}" font-size="15" fill="${C.amber}" letter-spacing="4">PURE LEMON JUICE</text>
  ${lemon(156, 302, 54, -16)}
  ${lemon(650, 382, 44, 12)}
</g>`;
writeFileSync(
  `${OUT}/product-lemon-juice.svg`,
  frame(800, 1000, juice, "替換：極品檸檬原汁實拍照", "PLACEHOLDER / LEMON JUICE"),
);

/* ── 3. 手工小天使 ─────────────────────────── */
let zig = "M 236 268 ";
for (let i = 0; i < 12; i++) zig += `l 27 ${i % 2 === 0 ? -22 : 22} `;
const angel = `
<g>
  <ellipse cx="400" cy="900" rx="150" ry="24" fill="${C.amber}" opacity="0.12"/>
  <path d="M 236 268 h 328 v 560 q 0 46 -46 46 h -236 q -46 0 -46 -46 z" fill="${C.cream}" stroke="${C.brown}" stroke-width="7"/>
  <path d="${zig}" fill="none" stroke="${C.brown}" stroke-width="7" stroke-linejoin="round"/>
  <rect x="286" y="366" width="228" height="330" rx="14" fill="${C.paper}" stroke="${C.amber}" stroke-width="4" stroke-dasharray="9 7"/>
  <ellipse cx="400" cy="398" rx="34" ry="10" fill="none" stroke="${C.lemon}" stroke-width="6"/>
  <circle cx="400" cy="470" r="58" fill="${C.lemonSoft}" stroke="${C.brown}" stroke-width="5"/>
  <circle cx="382" cy="462" r="5" fill="${C.brown}"/><circle cx="418" cy="462" r="5" fill="${C.brown}"/>
  <path d="M 384 490 q 16 16 32 0" fill="none" stroke="${C.brown}" stroke-width="5" stroke-linecap="round"/>
  <text x="400" y="596" text-anchor="middle" font-family="${FONT}" font-size="36" font-weight="700" fill="${C.brown}">手工小天使</text>
  <text x="400" y="628" text-anchor="middle" font-family="${FONT}" font-size="15" fill="${C.amber}" letter-spacing="4">HANDMADE</text>
  <text x="400" y="668" text-anchor="middle" font-family="${FONT}" font-size="19" fill="${C.leaf}">花蓮伴手禮</text>
  ${lemon(164, 338, 50, -16)}
  ${lemon(648, 422, 42, 14)}
</g>`;
writeFileSync(
  `${OUT}/product-little-angel.svg`,
  frame(800, 1000, angel, "替換：手工小天使實拍照", "PLACEHOLDER / LITTLE ANGEL"),
);

/* ── 4. 復興街總店 ─────────────────────────── */
const stripes = Array.from(
  { length: 9 },
  (_, i) =>
    `<rect x="${150 + i * 100}" y="256" width="50" height="84" fill="${C.paper}" opacity="${i % 2 ? 0.85 : 0.3}"/>`,
).join("");
const shop = `
<rect width="1200" height="800" fill="url(#sky)"/>
<g stroke="${C.brown}" stroke-width="6" stroke-linejoin="round">
  <rect x="150" y="250" width="900" height="466" fill="${C.cream}"/>
  <rect x="150" y="168" width="900" height="88" rx="8" fill="${C.amber}"/>
  <path d="M 150 256 h 900 l -40 84 h -820 z" fill="${C.lemon}"/>
</g>
<clipPath id="awning"><path d="M 150 256 h 900 l -40 84 h -820 z"/></clipPath>
<g clip-path="url(#awning)">${stripes}</g>
<path d="M 150 256 h 900 l -40 84 h -820 z" fill="none" stroke="${C.brown}" stroke-width="6" stroke-linejoin="round"/>
<text x="600" y="228" text-anchor="middle" font-family="${FONT}" font-size="44" font-weight="700" fill="${C.cream}" letter-spacing="6">約伯賞茶 · 炸彈檸檬茶</text>
<g stroke="${C.brown}" stroke-width="6">
  <rect x="640" y="400" width="200" height="316" fill="${C.paper}"/>
  <rect x="890" y="430" width="120" height="180" fill="${C.paper}"/>
  <rect x="250" y="424" width="290" height="190" rx="8" fill="${C.paper}"/>
</g>
<text x="395" y="500" text-anchor="middle" font-family="${FONT}" font-size="32" font-weight="700" fill="${C.brown}">每日限量</text>
<text x="395" y="556" text-anchor="middle" font-family="${FONT}" font-size="26" fill="${C.amber}" letter-spacing="3">100 CUPS / DAY</text>
${lemon(1004, 302, 46, -14)}
${lemon(1076, 380, 34, 12)}
<g>
  <path d="M 180 716 q -60 -80 -18 -140 q 30 44 18 140" fill="${C.leaf}"/>
  <path d="M 180 716 q 60 -70 20 -132 q -34 40 -20 132" fill="${C.leafSoft}"/>
</g>
<rect x="0" y="716" width="1200" height="84" fill="${C.paper}"/>
<path d="M 0 716 h 1200" stroke="${C.brown}" stroke-width="6"/>`;
writeFileSync(
  `${OUT}/store-fuxing.svg`,
  frame(1200, 800, shop, "替換：復興街總店實拍照", "PLACEHOLDER / FUXING ST. STORE"),
);

/* ── 5. 將軍府店（日式老屋） ───────────────── */
const roofLines = Array.from(
  { length: 11 },
  (_, i) =>
    `<path d="M ${180 + i * 76} 334 L 600 188" stroke="#7B471A" stroke-width="4" fill="none"/>`,
).join("");
const shoji = Array.from(
  { length: 5 },
  (_, i) =>
    `<rect x="${250 + i * 140}" y="392" width="110" height="200" fill="${C.paper}"/><path d="M ${250 + i * 140} 492 h 110 M ${305 + i * 140} 392 v 200" stroke="${C.brown}" stroke-width="4"/>`,
).join("");
const jp = `
<rect width="1200" height="800" fill="url(#sky)"/>
<g stroke="${C.brown}" stroke-width="6" stroke-linejoin="round">
  <path d="M 130 340 L 600 168 L 1070 340 Z" fill="${C.amber}"/>
  <rect x="190" y="356" width="820" height="290" fill="${C.cream}"/>
</g>
${roofLines}
<g stroke="${C.brown}" stroke-width="5">${shoji}</g>
<rect x="190" y="642" width="820" height="30" fill="#8A5019" stroke="${C.brown}" stroke-width="5"/>
<g stroke="${C.brown}" stroke-width="5">
  <path d="M 1028 512 h 114 l -20 -36 h -74 z" fill="#8A5019"/>
  <rect x="1044" y="512" width="82" height="76" rx="8" fill="${C.lemonSoft}"/>
  <rect x="1070" y="588" width="30" height="70" fill="#8A5019"/>
  <rect x="1042" y="654" width="86" height="20" rx="6" fill="#8A5019"/>
</g>
<g>
  <rect x="86" y="556" width="26" height="118" fill="#7B471A"/>
  <circle cx="99" cy="508" r="74" fill="${C.leaf}"/>
  <circle cx="50" cy="552" r="46" fill="${C.leafSoft}"/>
  <circle cx="150" cy="548" r="42" fill="${C.leafSoft}"/>
</g>
${lemon(978, 232, 44, -14)}
<rect x="0" y="674" width="1200" height="126" fill="${C.paper}"/>
<path d="M 0 674 h 1200" stroke="${C.brown}" stroke-width="6"/>
<text x="600" y="736" text-anchor="middle" font-family="${FONT}" font-size="34" font-weight="700" fill="${C.brown}" letter-spacing="4">花蓮將軍府 1936</text>`;
writeFileSync(
  `${OUT}/store-general.svg`,
  frame(1200, 800, jp, "替換：將軍府店實拍照", "PLACEHOLDER / GENERAL RESIDENCE 1936"),
);

/* ── 6. 花蓮風景（山與海） ─────────────────── */
const waves = Array.from(
  { length: 4 },
  (_, i) =>
    `<path d="M 0 ${512 + i * 42} q 100 -26 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0" fill="none" stroke="#FFFFFF" stroke-opacity="0.7" stroke-width="5"/>`,
).join("");
const scenery = `
<rect width="1200" height="800" fill="url(#sky)"/>
<circle cx="962" cy="176" r="76" fill="${C.lemon}" opacity="0.92"/>
<path d="M 0 470 L 250 250 L 430 470 Z" fill="${C.leaf}"/>
<path d="M 300 470 L 560 208 L 830 470 Z" fill="${C.leafSoft}"/>
<path d="M 700 470 L 950 290 L 1200 470 Z" fill="${C.leaf}" opacity="0.85"/>
<rect x="0" y="470" width="1200" height="200" fill="${C.sea}" opacity="0.55"/>
${waves}
<rect x="0" y="666" width="1200" height="134" fill="${C.paper}"/>
${lemon(150, 618, 54, -14)}
${slice(1058, 630, 46, 16)}
<text x="600" y="756" text-anchor="middle" font-family="${FONT}" font-size="32" font-weight="700" fill="${C.brown}" letter-spacing="6">花蓮 · 山與海</text>`;
writeFileSync(
  `${OUT}/hualien-travel.svg`,
  frame(1200, 800, scenery, "替換：花蓮街景／山海實拍照", "PLACEHOLDER / HUALIEN"),
);

/* ── 7. Instagram 風格圖片牆 ───────────────── */
const queue = Array.from(
  { length: 4 },
  (_, i) =>
    `<g transform="translate(${112 + i * 100} 300)"><circle cy="-58" r="32" fill="${C.amber}"/><path d="M -38 88 q 0 -82 38 -82 q 38 0 38 82 z" fill="${C.leaf}"/></g>`,
).join("");
const jpTile = Array.from(
  { length: 3 },
  (_, i) =>
    `<rect x="${168 + i * 110}" y="292" width="80" height="120" fill="${C.paper}" stroke="${C.brown}" stroke-width="4"/>`,
).join("");
const tiles = [
  { zh: "炸彈檸檬茶", inner: `${lemon(300, 246, 96)}${bubbles(300, 452, 12, 220, 2)}` },
  { zh: "一整顆新鮮檸檬", inner: lemon(300, 268, 118, -8) },
  {
    zh: "手工現做過程",
    inner: `${slice(300, 246, 96, 14)}<path d="M 128 400 q 172 72 344 0" fill="none" stroke="${C.brown}" stroke-width="8" stroke-linecap="round"/>`,
  },
  { zh: "排隊人潮", inner: queue },
  {
    zh: "花蓮旅行",
    inner: `<path d="M 40 400 L 190 208 L 320 400 Z" fill="${C.leaf}"/><path d="M 240 400 L 400 228 L 560 400 Z" fill="${C.leafSoft}"/><circle cx="470" cy="148" r="54" fill="${C.lemon}"/><path d="M 20 434 q 90 -24 180 0 t 180 0 t 180 0" fill="none" stroke="${C.sea}" stroke-width="8"/>`,
  },
  {
    zh: "將軍府店",
    inner: `<path d="M 80 262 L 300 148 L 520 262 Z" fill="${C.amber}"/><rect x="130" y="262" width="340" height="178" fill="${C.cream}" stroke="${C.brown}" stroke-width="6"/>${jpTile}`,
  },
  {
    zh: "手工小天使",
    inner: `<rect x="190" y="176" width="220" height="264" fill="${C.cream}" stroke="${C.brown}" stroke-width="6"/><circle cx="300" cy="300" r="62" fill="${C.lemonSoft}" stroke="${C.brown}" stroke-width="5"/><circle cx="282" cy="290" r="6" fill="${C.brown}"/><circle cx="320" cy="290" r="6" fill="${C.brown}"/><path d="M 282 318 q 18 16 36 0" fill="none" stroke="${C.brown}" stroke-width="5" stroke-linecap="round"/>`,
  },
  {
    zh: "顧客照片",
    inner: `<g transform="translate(290 278)"><circle cy="-88" r="50" fill="${C.amber}"/><path d="M -72 128 q 0 -120 72 -120 q 72 0 72 120 z" fill="${C.leaf}"/><rect x="78" y="-36" width="64" height="108" rx="12" fill="${C.lemon}" stroke="${C.brown}" stroke-width="5"/></g>`,
  },
];
tiles.forEach((t, i) => {
  const n = String(i + 1).padStart(2, "0");
  writeFileSync(
    `${OUT}/gallery-${n}.svg`,
    frame(600, 600, t.inner, `替換：${t.zh}`, `PLACEHOLDER / ${n}`, i % 2 ? C.cream : C.paper),
  );
});

console.log("✓ placeholder 圖片已產生於 " + OUT);
