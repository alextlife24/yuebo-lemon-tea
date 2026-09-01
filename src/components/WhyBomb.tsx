"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CupDoodle, LemonDoodle, WaveDivider } from "./Doodles";
import { Float, Reveal } from "./Reveal";
import { Bubbles, Container, SectionHeading } from "./ui";

export function WhyBomb() {
  const reduce = useReducedMotion();

  return (
    <section
      id="why-bomb"
      aria-labelledby="why-bomb-title"
      className="relative overflow-hidden bg-tea-brown py-24 text-cream sm:py-28"
    >
      <WaveDivider
        className="absolute top-0 left-0 -mt-[1px] rotate-180"
        fill="var(--color-paper)"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,rgba(247,216,61,0.16),transparent_55%),radial-gradient(ellipse_at_85%_80%,rgba(168,102,36,0.35),transparent_55%)]"
      />
      <Bubbles className="opacity-25" color="rgba(247,216,61,0.35)" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <SectionHeading
                en="The Story"
                align="left"
                tone="cream"
                title={
                  <>
                    為什麼叫
                    <span className="text-lemon">「炸彈」</span>？
                  </>
                }
              />
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-8 max-w-xl font-serif-tc text-[1.08rem] leading-[2.3] text-cream/85 sm:text-[1.15rem]">
                當一整顆檸檬放進茶裡，
                <br />
                就像一顆黃色的小炸彈沉進杯中。
                <br />
                <br />
                檸檬碰上茶湯與冰塊，
                <br />
                杯子裡冒出的氣泡，
                <br />
                也成為約伯炸彈檸檬茶最有趣的招牌畫面。
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <motion.p
                aria-label="BOOM"
                animate={
                  reduce
                    ? undefined
                    : { scale: [1, 1.06, 1], rotate: [-3, -1, -3] }
                }
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-10 inline-block origin-left font-display text-5xl tracking-[0.08em] text-lemon drop-shadow-[0_6px_0_rgba(168,102,36,0.55)] sm:text-6xl"
              >
                BOOM！🍋
              </motion.p>
            </Reveal>
          </div>

          {/* 視覺：杯子 + 沉下去的檸檬 */}
          <Reveal delay={0.1} className="relative mx-auto w-full max-w-[320px]">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full bg-lemon/12 blur-2xl"
            />
            <div className="relative">
              <Float duration={9} distance={10} rotate={1.5}>
                <CupDoodle className="mx-auto w-full drop-shadow-[0_18px_36px_rgba(0,0,0,0.35)]" />
              </Float>

              <motion.div
                aria-hidden
                initial={{ y: reduce ? 0 : -70, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 1.1,
                  ease: [0.34, 1.4, 0.64, 1],
                  delay: 0.2,
                }}
                className="absolute top-[38%] left-1/2 w-20 -translate-x-1/2 sm:w-24"
              >
                <Float duration={5} distance={7} rotate={6}>
                  <LemonDoodle className="w-full" />
                </Float>
              </motion.div>

              <Bubbles className="opacity-70" color="rgba(255,248,220,0.6)" />
            </div>

            <p className="mt-8 text-center font-display text-xs tracking-[0.3em] text-cream/45">
              ONE WHOLE LEMON · ICE · BLACK TEA · HONEY
            </p>
          </Reveal>
        </div>
      </Container>

      <WaveDivider
        className="absolute bottom-0 left-0 -mb-[1px]"
        fill="var(--color-paper)"
      />
    </section>
  );
}
