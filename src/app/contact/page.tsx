import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GroupOrder } from "@/components/GroupOrder";
import { SocialGrid } from "@/components/SocialGrid";
import { Reveal } from "@/components/Reveal";
import { Btn, Container, SectionHeading } from "@/components/ui";
import { WaveDivider } from "@/components/Doodles";
import { contact, social, stores } from "@/content/site";

export const metadata: Metadata = {
  title: "聯絡我們",
  description:
    "約伯賞茶聯絡方式：0980-347-540 / 03-8355555。團體訂購與宅配相關詢問，歡迎來電洽詢。",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: "📞",
    en: "CALL",
    title: "電話洽詢",
    body: "訂購、團體訂單、宅配詢問，直接來電最快。",
    action: { label: contact.mobile, href: contact.mobileTel },
    second: { label: contact.landline, href: contact.landlineTel },
  },
  {
    icon: "💬",
    en: "SOCIAL",
    title: "社群私訊",
    body: "最新消息、每日供應狀況，都會公告在社群。",
    action: { label: "前往 Facebook", href: social.facebook },
    second: social.instagram
      ? { label: "前往 Instagram", href: social.instagram }
      : null,
  },
  {
    icon: "📍",
    en: "VISIT",
    title: "直接來店",
    body: "復興街總店與將軍府店，都在花蓮市區。",
    action: { label: "Google Maps 導航", href: stores[0].mapUrl },
    second: { label: "查看門市資訊", href: "/stores" },
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="聯絡我們"
        en="Contact"
        title="有問題，直接打給我們。"
        lead={"手機版按下電話號碼即可撥號。\n本網站不提供線上付款。"}
      />

      <section className="bg-cream pt-16 sm:pt-20" aria-labelledby="channels">
        <Container>
          <Reveal>
            <SectionHeading en="Get in Touch" title="聯絡方式" />
          </Reveal>

          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {channels.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 0.08}>
                <div className="paper-card grain flex h-full flex-col rounded-3xl p-7">
                  <span aria-hidden className="text-3xl">
                    {c.icon}
                  </span>
                  <p className="mt-4 font-display text-xs tracking-[0.28em] text-tea-amber">
                    {c.en}
                  </p>
                  <h3 className="mt-2 font-serif-tc text-xl font-bold text-tea-brown">
                    {c.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-[1.95] text-tea-brown/72">
                    {c.body}
                  </p>
                  <div className="mt-6 flex flex-col gap-2.5">
                    <Btn href={c.action.href}>{c.action.label}</Btn>
                    {c.second && (
                      <Btn href={c.second.href} variant="outline">
                        {c.second.label}
                      </Btn>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          {/* 門市地址速覽 */}
          <Reveal delay={0.2}>
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {stores.map((s) => (
                <div
                  key={s.id}
                  className="rounded-3xl border-2 border-dashed border-tea-amber/40 bg-paper/70 p-7"
                >
                  <p className="font-display text-xs tracking-[0.24em] text-tea-amber">
                    {s.badge}
                  </p>
                  <h3 className="mt-2 font-serif-tc text-lg font-bold text-tea-brown">
                    {s.name}
                  </h3>
                  <address className="mt-3 text-[0.95rem] leading-[1.9] text-tea-brown/75 not-italic">
                    {s.address}
                    {s.addressNote && (
                      <>
                        <br />
                        {s.addressNote}
                      </>
                    )}
                  </address>
                  <p className="mt-3 text-sm text-tea-brown/60">{s.hoursNote}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* 沒有官方 Email 時不虛構，保留 placeholder 說明 */}
          <Reveal delay={0.26}>
            <p className="mt-10 text-center text-sm leading-relaxed text-tea-brown/55">
              {contact.email ? (
                <a
                  href={`mailto:${contact.email}`}
                  className="underline decoration-lemon decoration-2 underline-offset-4"
                >
                  {contact.email}
                </a>
              ) : (
                <>
                  目前未公開官方 Email。若之後要新增，請於{" "}
                  <code className="rounded bg-lemon/40 px-1.5 py-0.5 font-mono text-[0.85em] text-tea-brown">
                    src/content/site.ts
                  </code>{" "}
                  的 <code className="font-mono">contact.email</code> 填入即可。
                </>
              )}
            </p>
          </Reveal>
        </Container>
        <WaveDivider className="mt-16 -mb-[1px]" fill="var(--color-paper)" />
      </section>

      <GroupOrder />
      <SocialGrid />
    </>
  );
}
