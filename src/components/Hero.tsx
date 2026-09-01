import Image from "next/image";
import { brand } from "@/content/site";
import {
  LemonDoodle,
  LemonSliceDoodle,
  MountainDoodle,
  TeaLeafDoodle,
  WaveDivider,
} from "./Doodles";
import { Float } from "./Reveal";
import { Btn, Bubbles, Container, Tag } from "./ui";

/**
 * 首屏進場動畫刻意使用 CSS（.rise-in）而非 JS，
 * 這樣即使 JS 還沒 hydration，第一眼就看得到標題與 CTA。
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      {/* 背景光暈 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_18%,rgba(247,216,61,0.34),transparent_58%),radial-gradient(ellipse_at_6%_72%,rgba(111,132,61,0.16),transparent_52%)]"
      />

      <Container className="relative pt-10 sm:pt-14 lg:pt-20">
        <MountainDoodle
          aria-hidden
          className="pointer-events-none absolute right-0 -bottom-3 -z-10 w-[58%] max-w-[520px] opacity-[0.13] lg:w-[38%]"
        />

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* ── 左側文字 ── */}
          <div className="relative z-10">
            <div className="rise-in flex flex-wrap items-center gap-2.5">
              <Tag tone="lemon">花蓮在地人氣飲品</Tag>
              <Tag tone="leaf">每日限量</Tag>
              <Tag tone="amber">手工製作</Tag>
            </div>

            <h1
              id="hero-title"
              className="rise-in mt-6 font-serif-tc text-[2.75rem] leading-[1.14] font-bold tracking-tight text-tea-brown [animation-delay:0.1s] sm:text-6xl lg:text-[4.25rem]"
            >
              花蓮的一顆
              <br />
              <span className="hand-underline">炸彈檸檬</span>{" "}
              <span className="inline-block align-middle">
                <Float duration={5.5} distance={9} rotate={8}>
                  <LemonDoodle className="inline-block h-[0.95em] w-[1.1em] drop-shadow-[0_6px_10px_rgba(70,48,31,0.18)]" />
                </Float>
              </span>
            </h1>

            <p className="rise-in mt-7 max-w-xl text-[1.05rem] leading-[2.1] text-tea-brown/80 [animation-delay:0.2s] sm:text-lg">
              一整顆新鮮檸檬，碰上紅茶與蜂蜜。
              <br />
              酸、甜、茶香，在杯子裡炸開。
            </p>

            <div className="rise-in mt-9 flex flex-col gap-3 [animation-delay:0.3s] sm:flex-row sm:flex-wrap">
              <Btn href="/drink" size="lg">
                看看炸彈檸檬茶 🍋
              </Btn>
              <Btn href="/stores" variant="outline" size="lg">
                找到我們
              </Btn>
            </div>

            <p className="rise-in mt-8 font-serif-tc text-[0.95rem] tracking-wide text-tea-amber [animation-delay:0.42s]">
              「{brand.slogans[0]}」
            </p>
          </div>

          {/* ── 右側產品視覺 ── */}
          <div className="rise-in relative mx-auto w-full max-w-[440px] [animation-delay:0.15s] lg:max-w-none">
            {/* 手繪圓形底 */}
            <div
              aria-hidden
              className="absolute inset-x-2 top-8 bottom-6 -z-10 rounded-[46%_54%_48%_52%/52%_46%_54%_48%] bg-lemon/45 blur-[2px]"
            />
            <div
              aria-hidden
              className="absolute inset-x-6 top-12 bottom-10 -z-10 rounded-[52%_48%_54%_46%/46%_54%_48%_52%] border-2 border-dashed border-tea-amber/35"
            />

            <Float duration={8} distance={12} rotate={1.2}>
              <div className="grain relative overflow-hidden rounded-[2rem] border-2 border-tea-brown/15 bg-cream/60 shadow-[0_2px_4px_rgba(70,48,31,0.08),0_28px_60px_-26px_rgba(70,48,31,0.5)]">
                <Image
                  src="/images/product-bomb-lemon-tea.svg"
                  alt="約伯賞茶招牌手工炸彈檸檬茶，一整顆新鮮檸檬沉在紅茶裡"
                  width={800}
                  height={1000}
                  priority
                  sizes="(max-width: 1024px) 90vw, 46vw"
                  className="h-auto w-full"
                />
                <Bubbles className="opacity-70" />
              </div>
            </Float>

            {/* 漂浮裝飾 */}
            <Float
              duration={6.5}
              distance={18}
              rotate={10}
              className="absolute -top-3 -left-5 w-16 sm:w-20 lg:-left-8 lg:w-24"
            >
              <LemonSliceDoodle className="w-full drop-shadow-[0_8px_14px_rgba(70,48,31,0.2)]" />
            </Float>
            <Float
              duration={9}
              delay={0.8}
              distance={14}
              rotate={-8}
              className="absolute top-1/4 -right-3 w-14 sm:w-16 lg:-right-6 lg:w-20"
            >
              <LemonDoodle className="w-full drop-shadow-[0_8px_14px_rgba(70,48,31,0.2)]" />
            </Float>
            <Float
              duration={7.5}
              delay={0.4}
              distance={12}
              rotate={12}
              className="absolute -bottom-2 -left-2 w-12 sm:w-14 lg:w-16"
            >
              <TeaLeafDoodle className="w-full drop-shadow-[0_6px_12px_rgba(70,48,31,0.18)]" />
            </Float>

            {/* 限量印章 */}
            <div className="stamp-in absolute -right-1 -bottom-4 rounded-2xl border-[3px] border-double border-tea-amber bg-paper/95 px-4 py-2.5 text-center shadow-paper sm:-right-4 sm:px-5">
              <span className="block font-display text-[0.6rem] tracking-[0.28em] text-tea-amber">
                LIMITED
              </span>
              <span className="block font-display text-xl leading-none tracking-[0.08em] text-tea-brown sm:text-2xl">
                100 CUPS
              </span>
              <span className="block font-display text-[0.6rem] tracking-[0.28em] text-tea-amber">
                PER DAY
              </span>
            </div>
          </div>
        </div>
      </Container>

      {/* 跑馬燈 */}
      <div className="relative mt-14 overflow-hidden border-y-2 border-tea-brown/12 bg-lemon/85 py-3 sm:mt-20">
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex items-center gap-8">
              {brand.slogans.map((s) => (
                <span
                  key={s}
                  className="flex items-center gap-8 font-serif-tc text-sm font-semibold text-tea-brown sm:text-base"
                >
                  {s}
                  <span aria-hidden className="text-tea-amber">
                    🍋
                  </span>
                </span>
              ))}
              <span className="font-display text-sm tracking-[0.3em] text-tea-brown/70">
                HUALIEN · TAIWAN · SINCE THE OLD DAYS
              </span>
              <span aria-hidden className="text-tea-amber">
                🍋
              </span>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider className="-mb-[1px]" fill="var(--color-cream)" />
    </section>
  );
}
