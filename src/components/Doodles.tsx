/**
 * 手繪 doodle 元件（純 SVG，無 client JS）。
 * 全部使用 currentColor 或品牌色，方便在任何區塊重複使用。
 */

type SvgProps = React.SVGProps<SVGSVGElement>;

export function LemonDoodle({ className, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden {...rest}>
      <g transform="rotate(-12 60 52)">
        <ellipse
          cx="60"
          cy="54"
          rx="42"
          ry="35"
          fill="#F7D83D"
          stroke="#46301F"
          strokeWidth="3.5"
        />
        <path
          d="M18 54q-9 0-11-3"
          fill="none"
          stroke="#46301F"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M102 54q9 0 11-3"
          fill="none"
          stroke="#46301F"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <ellipse
          cx="46"
          cy="40"
          rx="10"
          ry="5"
          fill="#FFFBE0"
          opacity="0.8"
          transform="rotate(-24 46 40)"
        />
        <path
          d="M62 20q24-18 34-1q-22 15-34 1z"
          fill="#6F843D"
          stroke="#46301F"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
}

export function LemonSliceDoodle({ className, ...rest }: SvgProps) {
  const segs = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4;
    const r = 30;
    const p = (o: number) =>
      `${(Math.cos(a + o) * r).toFixed(1)} ${(Math.sin(a + o) * r).toFixed(1)}`;
    return (
      <path
        key={i}
        d={`M0 0L${p(-0.3)}A${r} ${r} 0 0 1 ${p(0.3)}Z`}
        fill="#FBEB9B"
        stroke="#FFFDF2"
        strokeWidth="2"
      />
    );
  });
  return (
    <svg viewBox="-45 -45 90 90" className={className} aria-hidden {...rest}>
      <circle r="42" fill="#F7D83D" stroke="#46301F" strokeWidth="3.5" />
      <circle r="34" fill="#FFF7C9" />
      {segs}
    </svg>
  );
}

export function TeaLeafDoodle({ className, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden {...rest}>
      <path
        d="M20 82C20 40 52 16 86 14c2 36-22 68-66 68z"
        fill="#6F843D"
        stroke="#46301F"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M26 78C42 56 62 34 84 18"
        fill="none"
        stroke="#46301F"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HoneyDoodle({ className, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 100 110" className={className} aria-hidden {...rest}>
      <path
        d="M50 6c14 20 26 34 26 50a26 26 0 1 1-52 0c0-16 12-30 26-50z"
        fill="#A86624"
        stroke="#46301F"
        strokeWidth="3.5"
      />
      <ellipse cx="40" cy="58" rx="7" ry="11" fill="#FFF8DC" opacity="0.55" />
    </svg>
  );
}

export function CupDoodle({ className, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 100 120" className={className} aria-hidden {...rest}>
      <rect
        x="18"
        y="16"
        width="64"
        height="12"
        rx="6"
        fill="#FFF8DC"
        stroke="#46301F"
        strokeWidth="3.5"
      />
      <path
        d="M22 30h56l-8 76a6 6 0 0 1-6 6H36a6 6 0 0 1-6-6z"
        fill="#A86624"
        stroke="#46301F"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="74" r="15" fill="#F7D83D" stroke="#46301F" strokeWidth="3" />
      <path
        d="M52 8l6 20"
        stroke="#6F843D"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MountainDoodle({ className, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 240 90" className={className} aria-hidden {...rest}>
      <path d="M0 88L52 20l44 68z" fill="#6F843D" opacity="0.85" />
      <path d="M66 88L128 8l62 80z" fill="#8FA45C" />
      <path d="M150 88L200 30l40 58z" fill="#6F843D" opacity="0.7" />
    </svg>
  );
}

export function WaveDoodle({ className, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 240 40" className={className} aria-hidden {...rest}>
      {[0, 14, 28].map((y) => (
        <path
          key={y}
          d={`M0 ${y + 6}q20-10 40 0t40 0t40 0t40 0t40 0t40 0`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity={1 - y / 60}
        />
      ))}
    </svg>
  );
}

export function SparkleDoodle({ className, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden {...rest}>
      <path
        d="M20 2c2 11 7 16 18 18-11 2-16 7-18 18-2-11-7-16-18-18 11-2 16-7 18-18z"
        fill="currentColor"
      />
    </svg>
  );
}

/** 波浪分隔線（區塊之間的手作感過場） */
export function WaveDivider({
  className = "",
  fill = "var(--color-paper)",
  flip = false,
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      className={`block w-full ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden
    >
      <path
        d="M0 34c120 26 240 34 360 22s240-42 360-44 240 26 360 34 240-6 360-24v48H0z"
        fill={fill}
      />
    </svg>
  );
}
