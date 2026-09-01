import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SignatureDrink } from "@/components/SignatureDrink";
import { WhyBomb } from "@/components/WhyBomb";
import { Features } from "@/components/Features";
import { StoresSection } from "@/components/Stores";
import { Reveal } from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/ui";
import {
  HoneyDoodle,
  LemonDoodle,
  TeaLeafDoodle,
} from "@/components/Doodles";

export const metadata: Metadata = {
  title: "炸彈檸檬茶",
  description:
    "約伯賞茶招牌手工炸彈檸檬茶：一整顆新鮮檸檬、紅茶與蜂蜜，酸甜清爽、每日限量現做，是來花蓮必喝的特色飲品。",
  alternates: { canonical: "/drink" },
};

const recipe = [
  {
    Icon: LemonDoodle,
    title: "一整顆新鮮檸檬",
    body: "看得到、聞得到的檸檬香氣，是這杯的主角。",
  },
  {
    Icon: TeaLeafDoodle,
    title: "紅茶",
    body: "茶韻負責把酸味托住，讓整杯喝起來不刺口。",
  },
  {
    Icon: HoneyDoodle,
    title: "蜂蜜",
    body: "自然的甜度收尾，甜而不膩，是小時候的味道。",
  },
];

export default function DrinkPage() {
  return (
    <>
      <PageHero
        crumb="炸彈檸檬茶"
        en="Signature Drink"
        title={
          <>
            一整顆檸檬
            <br />
            在杯子裡炸開。
          </>
        }
        lead={"酸得剛好，甜得自然。\n每日限量 100 杯，售完為止。"}
      />

      <SignatureDrink />

      {/* 配方三元素 */}
      <section className="py-20 sm:py-24" aria-labelledby="recipe">
        <Container>
          <Reveal>
            <SectionHeading
              en="The Recipe"
              title="三種材料，一個比例"
              lead="材料簡單，難的是每天都調成一樣的味道。"
            />
          </Reveal>

          <ul className="mt-14 grid gap-6 sm:grid-cols-3">
            {recipe.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 0.09}>
                <div className="paper-card grain flex h-full flex-col items-center rounded-3xl px-6 py-9 text-center transition-transform duration-300 hover:-translate-y-1.5">
                  <r.Icon aria-hidden className="h-16 w-16" />
                  <h3 className="mt-6 font-serif-tc text-xl font-bold text-tea-brown">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.95] text-tea-brown/72">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-12 max-w-2xl rounded-3xl border-2 border-dashed border-tea-amber/40 bg-cream/50 p-6 text-center text-sm leading-relaxed text-tea-brown/65">
              甜度、冰塊與客製化選項，以及詳細品項與價格，
              <br className="hidden sm:block" />
              請以門市現場公告為準，或來電洽詢。
            </p>
          </Reveal>
        </Container>
      </section>

      <WhyBomb />
      <Features />
      <StoresSection />
    </>
  );
}
