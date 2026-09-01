import Link from "next/link";
import type { ReactNode } from "react";
import { LemonDoodle, LemonSliceDoodle, WaveDivider } from "./Doodles";
import { Container } from "./ui";

/** 子頁面共用的頁首（沿用首頁的 Design System） */
export function PageHero({
  en,
  title,
  lead,
  crumb,
}: {
  en: string;
  title: ReactNode;
  lead?: ReactNode;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_82%_10%,rgba(247,216,61,0.32),transparent_55%)]"
      />
      <LemonSliceDoodle
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -top-4 right-4 w-24 opacity-45 sm:w-32 lg:right-16 lg:w-40"
      />
      <LemonDoodle
        aria-hidden
        className="animate-sway pointer-events-none absolute right-24 bottom-6 w-16 opacity-35 sm:w-20 lg:right-48"
      />

      <Container>
        <div className="rise-in">
          <nav aria-label="麵包屑" className="text-sm text-tea-brown/55">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-tea-amber">
                  首頁
                </Link>
              </li>
              <li aria-hidden>／</li>
              <li className="text-tea-amber">{crumb}</li>
            </ol>
          </nav>

          <p className="mt-7 font-display text-sm tracking-[0.34em] text-tea-amber uppercase">
            {en}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif-tc text-[2.25rem] leading-[1.2] font-bold tracking-tight text-tea-brown sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          {lead && (
            <p className="mt-6 max-w-2xl text-[1.02rem] leading-[2.1] whitespace-pre-line text-tea-brown/75">
              {lead}
            </p>
          )}
        </div>
      </Container>

      <WaveDivider
        className="mt-14 -mb-[1px]"
        fill="var(--color-cream)"
      />
    </section>
  );
}
