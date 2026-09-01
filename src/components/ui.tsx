import Link from "next/link";
import type { ReactNode } from "react";

/* ── 按鈕 ─────────────────────────────────────── */

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "brown";
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold " +
  "border-2 transition-all duration-200 will-change-transform " +
  "hover:-translate-y-0.5 active:translate-y-0 focus-visible:-translate-y-0.5";

const variants = {
  primary:
    "bg-lemon text-tea-brown border-tea-brown shadow-[0_4px_0_0_#46301F] hover:shadow-[0_6px_0_0_#46301F] active:shadow-[0_2px_0_0_#46301F]",
  brown:
    "bg-tea-brown text-cream border-tea-brown shadow-[0_4px_0_0_#A86624] hover:shadow-[0_6px_0_0_#A86624] active:shadow-[0_2px_0_0_#A86624]",
  outline:
    "bg-transparent text-tea-brown border-tea-brown/40 hover:border-tea-brown hover:bg-cream",
} as const;

const sizes = {
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base sm:text-lg",
} as const;

export function Btn({
  href,
  children,
  variant = "primary",
  size = "md",
  external,
  className = "",
  ariaLabel,
}: BtnProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const isExternal =
    external ?? (/^https?:/.test(href) || href.startsWith("tel:"));

  if (isExternal) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={cls}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} aria-label={ariaLabel} className={cls}>
      {children}
    </Link>
  );
}

/* ── 小標籤 ───────────────────────────────────── */

export function Tag({
  children,
  tone = "lemon",
}: {
  children: ReactNode;
  tone?: "lemon" | "leaf" | "amber" | "cream";
}) {
  const tones = {
    lemon: "bg-lemon/85 text-tea-brown border-tea-brown/25",
    leaf: "bg-leaf/15 text-leaf border-leaf/35",
    amber: "bg-tea-amber/12 text-tea-amber border-tea-amber/30",
    cream: "bg-cream text-tea-brown border-tea-brown/20",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide sm:text-[0.8rem] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/* ── 區塊標題 ─────────────────────────────────── */

export function SectionHeading({
  en,
  title,
  lead,
  align = "center",
  tone = "brown",
}: {
  en?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  tone?: "brown" | "cream";
}) {
  const isCenter = align === "center";
  const titleColor = tone === "cream" ? "text-cream" : "text-tea-brown";
  const enColor = tone === "cream" ? "text-lemon" : "text-tea-amber";
  const leadColor = tone === "cream" ? "text-cream/80" : "text-tea-brown/75";

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      {en && (
        <p
          className={`font-display text-sm tracking-[0.34em] uppercase ${enColor}`}
        >
          {en}
        </p>
      )}
      <h2
        className={`mt-3 font-serif-tc text-3xl leading-[1.28] font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-[1.02rem] leading-[2] whitespace-pre-line ${leadColor} ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/* ── 復古印章 ─────────────────────────────────── */

export function Stamp({
  top,
  main,
  bottom,
  className = "",
}: {
  top: string;
  main: string;
  bottom?: string;
  className?: string;
}) {
  return (
    <div
      className={`stamp inline-flex flex-col items-center rounded-xl px-6 py-4 text-tea-amber ${className}`}
      role="img"
      aria-label={`${top} ${main} ${bottom ?? ""}`}
    >
      <span className="font-display text-[0.7rem] tracking-[0.3em]">{top}</span>
      <span className="font-display text-3xl leading-none tracking-[0.12em] sm:text-4xl">
        {main}
      </span>
      {bottom && (
        <span className="font-display text-[0.7rem] tracking-[0.3em]">
          {bottom}
        </span>
      )}
    </div>
  );
}

/* ── 氣泡動畫（純 CSS，無 JS） ────────────────── */

const BUBBLE_SEEDS = [
  { left: "8%", size: 10, delay: 0, dur: 6.5 },
  { left: "20%", size: 16, delay: 1.4, dur: 7.8 },
  { left: "33%", size: 8, delay: 2.6, dur: 5.9 },
  { left: "46%", size: 20, delay: 0.7, dur: 8.6 },
  { left: "58%", size: 11, delay: 3.2, dur: 6.9 },
  { left: "70%", size: 14, delay: 1.9, dur: 7.4 },
  { left: "82%", size: 9, delay: 4.1, dur: 6.2 },
  { left: "92%", size: 17, delay: 2.2, dur: 8.1 },
];

export function Bubbles({
  className = "",
  color = "rgba(255,255,255,0.55)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {BUBBLE_SEEDS.map((b, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full border"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            background: color,
            borderColor: "rgba(255,255,255,0.75)",
            animation: `bubble ${b.dur}s ease-in ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ── 版面容器 ─────────────────────────────────── */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
