import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AllProducts } from "@/components/Products";
import { GroupOrder } from "@/components/GroupOrder";
import { SocialGrid } from "@/components/SocialGrid";
import { Reveal } from "@/components/Reveal";
import { Btn, Container, SectionHeading } from "@/components/ui";
import { WaveDivider } from "@/components/Doodles";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "產品",
  description:
    "約伯賞茶產品介紹：招牌手工炸彈檸檬茶、極品檸檬原汁、手工小天使花蓮伴手禮。價格與供應狀況請洽門市。",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        crumb="產品"
        en="Products"
        title="可以喝，也可以帶回家。"
        lead={"招牌炸彈檸檬茶、極品檸檬原汁、手工小天使，\n都是花蓮的味道。"}
      />

      <section className="bg-cream pt-16 sm:pt-20" aria-labelledby="all">
        <Container>
          <Reveal>
            <SectionHeading en="All Items" title="全部產品" />
          </Reveal>
          <div className="mt-12">
            <AllProducts />
          </div>

          <Reveal delay={0.2}>
            <div className="mt-14 rounded-3xl border-2 border-dashed border-tea-amber/40 bg-paper/70 p-7 sm:p-9">
              <h3 className="font-serif-tc text-xl font-bold text-tea-brown">
                關於價格與供應
              </h3>
              <ul className="mt-4 space-y-2.5 text-[0.95rem] leading-[1.9] text-tea-brown/75">
                <li>· 本網站不公布未經官方確認的價格，請以門市現場公告為準。</li>
                <li>· 招牌炸彈檸檬茶每日限量 100 杯，售完為止。</li>
                <li>· 手工小天使每人限購 2 包。</li>
                <li>· 團體訂購與宅配相關詢問，歡迎來電洽詢。</li>
              </ul>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Btn href={contact.mobileTel}>📞 {contact.mobile}</Btn>
                <Btn href="/stores" variant="outline">
                  查看門市資訊
                </Btn>
              </div>
            </div>
          </Reveal>
        </Container>
        <WaveDivider className="mt-16 -mb-[1px]" fill="var(--color-paper)" />
      </section>

      <GroupOrder />
      <SocialGrid />
    </>
  );
}
