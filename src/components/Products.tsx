import Image from "next/image";
import { contact, products, type Product } from "@/content/site";
import { Reveal } from "./Reveal";
import { Btn, Container, SectionHeading, Tag } from "./ui";

export function ProductCard({ p, index = 0 }: { p: Product; index?: number }) {
  return (
    <Reveal as="li" delay={index * 0.08} className="h-full">
      <article className="group paper-card grain flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
        <div className="relative overflow-hidden bg-cream/70">
          <Image
            src={p.image}
            alt={p.imageAlt}
            width={800}
            height={1000}
            loading="lazy"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 44vw, 30vw"
            className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]"
          />
          {p.signature && (
            <span className="absolute top-4 left-4 rounded-full border-2 border-tea-brown bg-lemon px-3 py-1 font-display text-[0.68rem] tracking-[0.2em] text-tea-brown">
              SIGNATURE
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="font-serif-tc text-2xl font-bold text-tea-brown">
            {p.emoji} {p.name}
          </h3>
          <p className="mt-1.5 font-display text-[0.72rem] tracking-[0.24em] text-tea-amber">
            {p.nameEn.toUpperCase()}
          </p>
          <p className="mt-4 flex-1 text-[0.95rem] leading-[1.95] text-tea-brown/75">
            {p.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.limitTag && <Tag tone="lemon">🔥 {p.limitTag}</Tag>}
            {p.note && <Tag tone="leaf">{p.note}</Tag>}
          </div>

          {/* 沒有官方公布價格，一律導向電話／門市詢問 */}
          <p className="mt-5 border-t border-tea-brown/10 pt-4 text-xs text-tea-brown/55">
            價格與供應狀況請洽門市或來電詢問。
          </p>
        </div>
      </article>
    </Reveal>
  );
}

/** 首頁的「其他產品」區塊（不含招牌） */
export function OtherProducts() {
  const others = products.filter((p) => !p.signature);

  return (
    <section
      id="products"
      aria-labelledby="products-title"
      className="relative py-20 sm:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            en="Products"
            title="不只是一杯飲料"
            lead={"除了招牌炸彈檸檬茶，\n還有可以帶回家的花蓮味道。"}
          />
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-7 sm:grid-cols-2">
          {others.map((p, i) => (
            <ProductCard key={p.id} p={p} index={i} />
          ))}
        </ul>

        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Btn href="/products">看全部產品</Btn>
            <Btn href={contact.mobileTel} variant="outline">
              📞 電話詢問 {contact.mobile}
            </Btn>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/** 產品頁用的完整列表 */
export function AllProducts() {
  return (
    <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p, i) => (
        <ProductCard key={p.id} p={p} index={i} />
      ))}
    </ul>
  );
}
