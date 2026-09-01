import { contact } from "@/content/site";
import { LemonDoodle, LemonSliceDoodle, WaveDivider } from "./Doodles";
import { Reveal } from "./Reveal";
import { Btn, Container } from "./ui";

export function GroupOrder() {
  return (
    <section
      id="group-order"
      aria-labelledby="group-order-title"
      className="relative overflow-hidden bg-lemon py-20 sm:py-24"
    >
      <WaveDivider
        className="absolute top-0 left-0 -mt-[1px] rotate-180"
        fill="var(--color-paper)"
      />

      <LemonSliceDoodle
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -top-6 -left-8 w-36 opacity-30 sm:w-48"
      />
      <LemonDoodle
        aria-hidden
        className="animate-sway pointer-events-none absolute -right-6 bottom-2 w-40 opacity-30 sm:w-52"
      />

      <Container className="grain relative text-center">
        <Reveal>
          <p className="font-display text-sm tracking-[0.34em] text-tea-brown/70 uppercase">
            Group Order &amp; Delivery
          </p>
          <h2
            id="group-order-title"
            className="mt-4 font-serif-tc text-3xl leading-snug font-bold text-tea-brown sm:text-4xl lg:text-[2.9rem]"
          >
            想把花蓮的味道
            <br className="sm:hidden" />
            帶回家？
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[1.02rem] leading-[2.1] text-tea-brown/80">
            接受團體訂單與宅配相關詢問。
            <br />
            訂購方式、數量與運送安排，歡迎直接來電洽詢。
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <a
            href={contact.mobileTel}
            className="mt-9 inline-flex flex-col items-center rounded-3xl border-2 border-tea-brown bg-paper/85 px-8 py-5 transition-transform duration-200 hover:-translate-y-1 sm:px-12"
          >
            <span className="font-display text-[0.68rem] tracking-[0.3em] text-tea-amber">
              CALL US
            </span>
            <span className="mt-1 font-display text-3xl tracking-[0.06em] text-tea-brown sm:text-4xl">
              {contact.mobile}
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Btn href={contact.mobileTel} variant="brown" size="lg">
              📞 電話詢問
            </Btn>
            <Btn href="/contact" variant="outline" size="lg">
              聯絡我們
            </Btn>
          </div>
          <p className="mt-6 text-xs text-tea-brown/60">
            本網站不提供線上付款，訂購一律以電話洽詢與官方公告為準。
          </p>
        </Reveal>
      </Container>

      <WaveDivider
        className="absolute bottom-0 left-0 -mb-[1px]"
        fill="var(--color-paper)"
      />
    </section>
  );
}
