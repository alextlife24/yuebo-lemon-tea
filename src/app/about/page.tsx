import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Features } from "@/components/Features";
import { Travel } from "@/components/Travel";
import { GroupOrder } from "@/components/GroupOrder";
import { Reveal } from "@/components/Reveal";
import { Btn, Container, SectionHeading, Tag } from "@/components/ui";
import { LemonDoodle, WaveDivider } from "@/components/Doodles";
import { brand, stores } from "@/content/site";

export const metadata: Metadata = {
  title: "品牌故事",
  description:
    "約伯賞茶來自台灣花蓮，以手工炸彈檸檬茶為招牌，用新鮮檸檬、紅茶與蜂蜜調製出屬於花蓮的味道。",
  alternates: { canonical: "/about" },
};

const values = [
  { zh: "花蓮在地", en: "LOCAL" },
  { zh: "手工製作", en: "HANDMADE" },
  { zh: "新鮮檸檬", en: "FRESH" },
  { zh: "小時候的味道", en: "NOSTALGIC" },
  { zh: "每日限量", en: "LIMITED" },
  { zh: "真材實料", en: "HONEST" },
  { zh: "夏日清爽", en: "REFRESHING" },
  { zh: "旅行必喝", en: "MUST TRY" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="品牌故事"
        en="About"
        title={
          <>
            一家在花蓮
            <br />
            慢慢做檸檬茶的店。
          </>
        }
        lead={"沒有華麗的招牌，\n只有每天現做的那一杯。"}
      />

      {/* 品牌精神 */}
      {/* overflow-x-clip：右側旋轉裝飾底板的收邊，理由同 SignatureDrink */}
      <section
        className="overflow-x-clip bg-cream pt-20 sm:pt-24"
        aria-labelledby="spirit"
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
            <div>
              <Reveal>
                <SectionHeading
                  en="Our Spirit"
                  align="left"
                  title="我們想留住的味道"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8 max-w-xl space-y-6 text-[1.02rem] leading-[2.15] text-tea-brown/80">
                  <p>
                    約伯賞茶是一個來自台灣花蓮的在地飲品品牌。招牌的「手工炸彈檸檬茶」，
                    把新鮮檸檬搭配紅茶與蜂蜜，以品牌獨家比例製作，呈現酸甜清爽、
                    帶有濃厚花蓮在地特色的風味。
                  </p>
                  <p>
                    我們不追求做得又快又多，而是把心力放在每一杯的比例上——
                    檸檬要夠新鮮、茶湯要夠清爽、甜度要剛剛好。
                    每天限量製作、售完為止，是為了讓每一杯都維持一樣的味道。
                  </p>
                  <p className="font-serif-tc text-lg text-tea-amber">
                    「{brand.slogans[3]}」
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <ul className="mt-9 flex flex-wrap gap-2.5">
                  {values.map((v) => (
                    <li key={v.zh}>
                      <Tag tone="lemon">{v.zh}</Tag>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="relative">
              <div
                aria-hidden
                className="absolute -inset-1.5 -z-10 rounded-[2.6rem] bg-lemon/35 sm:-inset-3"
                style={{ transform: "rotate(3deg)" }}
              />
              <div className="grain overflow-hidden rounded-[2rem] border-2 border-tea-brown/15 shadow-paper">
                <Image
                  src="/images/store-fuxing.svg"
                  alt="約伯賞茶復興街總店店面"
                  width={1200}
                  height={800}
                  loading="lazy"
                  sizes="(max-width: 1024px) 92vw, 42vw"
                  className="h-auto w-full"
                />
              </div>
              <LemonDoodle
                aria-hidden
                className="animate-float absolute -top-7 -right-4 w-20 drop-shadow-[0_8px_14px_rgba(70,48,31,0.2)]"
              />
            </Reveal>
          </div>
        </Container>
        <WaveDivider className="mt-20 -mb-[1px]" fill="var(--color-paper)" />
      </section>

      {/* 兩間門市 */}
      <section className="py-20 sm:py-24" aria-labelledby="where">
        <Container>
          <Reveal>
            <SectionHeading
              en="Where We Are"
              title="兩間店，一樣的味道"
              lead={"復興街總店與將軍府店，都在花蓮市區，\n散步或騎車就能到。"}
            />
          </Reveal>

          <ul className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {stores.map((s, i) => (
              <Reveal as="li" key={s.id} delay={i * 0.1}>
                <div className="paper-card grain flex h-full flex-col rounded-3xl p-7 sm:p-8">
                  <p className="font-display text-xs tracking-[0.24em] text-tea-amber">
                    {s.badge}
                  </p>
                  <h3 className="mt-3 font-serif-tc text-2xl font-bold text-tea-brown">
                    {s.name}
                  </h3>
                  <p className="mt-4 flex-1 text-[0.97rem] leading-[1.95] text-tea-brown/75">
                    {s.description}
                  </p>
                  <address className="mt-5 text-sm leading-relaxed text-tea-brown/60 not-italic">
                    📍 {s.address}
                    {s.addressNote && (
                      <>
                        <br />
                        <span className="pl-5">{s.addressNote}</span>
                      </>
                    )}
                  </address>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.18}>
            <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Btn href="/drink">先看看招牌炸彈檸檬茶 🍋</Btn>
              <Btn href="/stores" variant="outline">
                門市與導航
              </Btn>
            </div>
          </Reveal>
        </Container>
      </section>

      <Features />
      <Travel />
      <GroupOrder />
    </>
  );
}
