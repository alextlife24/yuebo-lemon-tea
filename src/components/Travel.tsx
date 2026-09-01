import Image from "next/image";
import { LemonDoodle, WaveDivider, WaveDoodle } from "./Doodles";
import { Reveal } from "./Reveal";
import { Btn, Container, SectionHeading, Tag } from "./ui";

const moments = [
  { icon: "🏔️", text: "山與海只差十分鐘車程" },
  { icon: "🏮", text: "日式老屋與老街的午後" },
  { icon: "🍜", text: "復興街附近的人氣小吃" },
  { icon: "🍋", text: "手上那杯冰涼的檸檬茶" },
];

export function Travel() {
  return (
    <section
      id="travel"
      aria-labelledby="travel-title"
      className="relative overflow-hidden bg-cream py-24 sm:py-28"
    >
      <WaveDivider
        className="absolute top-0 left-0 -mt-[1px] rotate-180"
        fill="var(--color-paper)"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(247,216,61,0.4),transparent_45%)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div
              aria-hidden
              className="absolute -inset-2 -z-10 rounded-[2.4rem] border-2 border-dashed border-tea-amber/35"
              style={{ transform: "rotate(2deg)" }}
            />
            <div className="grain overflow-hidden rounded-[2rem] border-2 border-tea-brown/15 shadow-paper">
              <Image
                src="/images/hualien-travel.svg"
                alt="花蓮的山與海，旅途中的風景"
                width={1200}
                height={800}
                loading="lazy"
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="h-auto w-full"
              />
            </div>
            <LemonDoodle
              aria-hidden
              className="animate-float absolute -top-6 -left-4 w-16 drop-shadow-[0_8px_14px_rgba(70,48,31,0.2)] sm:w-20"
            />
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionHeading
                en="Hualien Trip"
                align="left"
                title={
                  <>
                    一杯檸檬茶
                    <br />
                    也是一段花蓮旅行。
                  </>
                }
              />
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-8 max-w-xl font-serif-tc text-[1.05rem] leading-[2.3] text-tea-brown/80">
                來花蓮旅行，
                <br />
                吃完復興街附近的人氣小吃，
                <br />
                再拿上一杯冰涼的炸彈檸檬茶，
                <br />
                慢慢走在花蓮街上。
              </p>
              <p className="mt-7 max-w-xl font-serif-tc text-[1.05rem] leading-[2.3] text-tea-amber">
                有時候，
                <br />
                旅行記住的不是景點，
                <br />
                而是一個味道。
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-9 flex flex-wrap gap-2.5">
                {moments.map((m) => (
                  <li key={m.text}>
                    <Tag tone="cream">
                      <span aria-hidden>{m.icon}</span>
                      {m.text}
                    </Tag>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-9">
                <Btn href="/stores">安排一杯的行程 🍋</Btn>
              </div>
            </Reveal>

            <WaveDoodle
              aria-hidden
              className="mt-10 w-48 text-tea-amber/35"
            />
          </div>
        </div>
      </Container>

      <WaveDivider
        className="absolute bottom-0 left-0 -mb-[1px]"
        fill="var(--color-paper)"
      />
    </section>
  );
}
