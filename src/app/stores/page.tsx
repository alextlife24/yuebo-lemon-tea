import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StoresSection } from "@/components/Stores";
import { Travel } from "@/components/Travel";
import { GroupOrder } from "@/components/GroupOrder";
import { Reveal } from "@/components/Reveal";
import { Btn, Container, SectionHeading } from "@/components/ui";
import { WaveDivider } from "@/components/Doodles";
import { contact, stores } from "@/content/site";

export const metadata: Metadata = {
  title: "門市",
  description:
    "約伯賞茶門市資訊：花蓮市復興街85號總店，以及花蓮將軍府1936 園區內的將軍府店。提供 Google Maps 導航與電話預訂。",
  alternates: { canonical: "/stores" },
};

export default function StoresPage() {
  return (
    <>
      <PageHero
        crumb="門市"
        en="Store Locations"
        title="兩間店，都在花蓮市區。"
        lead={"復興街總店與將軍府店，\n散步、騎車都到得了。"}
      />

      {/* 快速卡片 */}
      <section className="bg-cream pt-16 sm:pt-20" aria-labelledby="quick">
        <Container>
          <Reveal>
            <SectionHeading
              en="Quick Access"
              title="現在就出發"
              lead="點一下就能導航或撥號。"
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-3">
            {stores.map((s, i) => (
              <Reveal as="li" key={s.id} delay={i * 0.08}>
                <a
                  href={s.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="paper-card grain flex h-full flex-col rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <span aria-hidden className="text-2xl">
                    📍
                  </span>
                  <span className="mt-3 font-serif-tc text-lg font-bold text-tea-brown">
                    {s.name}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-tea-brown/70">
                    {s.address}
                  </span>
                  <span className="mt-4 font-display text-xs tracking-[0.24em] text-tea-amber">
                    GOOGLE MAPS →
                  </span>
                </a>
              </Reveal>
            ))}

            <Reveal as="li" delay={0.16}>
              <a
                href={contact.mobileTel}
                className="grain flex h-full flex-col rounded-3xl border-2 border-tea-brown bg-lemon p-6 shadow-[0_4px_0_0_#46301F] transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span aria-hidden className="text-2xl">
                  📞
                </span>
                <span className="mt-3 font-serif-tc text-lg font-bold text-tea-brown">
                  電話預訂 / 詢問
                </span>
                <span className="mt-2 font-display text-2xl tracking-wide text-tea-brown">
                  {contact.mobile}
                </span>
                <span className="mt-4 font-display text-xs tracking-[0.24em] text-tea-brown/70">
                  TAP TO CALL →
                </span>
              </a>
            </Reveal>
          </ul>
        </Container>
        <WaveDivider className="mt-16 -mb-[1px]" fill="var(--color-paper)" />
      </section>

      <StoresSection withHeading={false} />

      <Container className="pb-6">
        <Reveal>
          <div className="rounded-3xl border-2 border-dashed border-tea-amber/40 bg-cream/50 p-7 text-center sm:p-9">
            <h2 className="font-serif-tc text-xl font-bold text-tea-brown">
              營業時間
            </h2>
            <p className="mt-3 text-[0.97rem] leading-[1.95] text-tea-brown/75">
              實際營業時間及售完時間依官方最新公告為準。
              <br />
              出發前建議先來電確認，避免撲空。
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Btn href={contact.mobileTel}>📞 {contact.mobile}</Btn>
              <Btn href={contact.landlineTel} variant="outline">
                ☎ {contact.landline}
              </Btn>
            </div>
          </div>
        </Reveal>
      </Container>

      <Travel />
      <GroupOrder />
    </>
  );
}
