import Image from "next/image";
import { products } from "@/content/site";
import { LemonSliceDoodle, WaveDivider } from "./Doodles";
import { Reveal } from "./Reveal";
import { Btn, Bubbles, Container, SectionHeading, Stamp, Tag } from "./ui";

const signature = products.find((p) => p.signature) ?? products[0];

export function SignatureDrink() {
  return (
    <section
      id="signature"
      aria-labelledby="signature-title"
      className="relative bg-cream pt-16 pb-20 sm:pt-20 sm:pb-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            en="Signature"
            title={
              <>
                第一次來？
                <br className="sm:hidden" />
                先喝這杯。
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* 產品圖 */}
          <Reveal className="relative mx-auto w-full max-w-[380px] lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[2.4rem] bg-lemon/35"
              style={{ transform: "rotate(-3deg)" }}
            />
            <div className="grain relative overflow-hidden rounded-[2rem] border-2 border-tea-brown/15 bg-paper shadow-paper">
              <Image
                src={signature.image}
                alt={signature.imageAlt}
                width={800}
                height={1000}
                loading="lazy"
                sizes="(max-width: 1024px) 88vw, 38vw"
                className="h-auto w-full"
              />
              <Bubbles className="opacity-60" />
            </div>
            <LemonSliceDoodle
              aria-hidden
              className="animate-float absolute -right-4 -bottom-5 w-20 drop-shadow-[0_8px_14px_rgba(70,48,31,0.2)] sm:w-24"
            />
          </Reveal>

          {/* 說明 */}
          <div>
            <Reveal delay={0.08}>
              <div className="flex flex-wrap items-center gap-2.5">
                <Tag tone="amber">SIGNATURE 招牌</Tag>
                <Tag tone="leaf">一整顆新鮮檸檬</Tag>
              </div>

              <h3 className="mt-5 font-serif-tc text-3xl font-bold text-tea-brown sm:text-4xl">
                {signature.emoji} {signature.name}
              </h3>
              <p className="mt-2 font-display text-sm tracking-[0.26em] text-tea-amber">
                {signature.nameEn.toUpperCase()}
              </p>

              <p className="mt-7 max-w-xl text-[1.02rem] leading-[2.1] text-tea-brown/80">
                {signature.description}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-9 flex flex-col items-start gap-6 rounded-3xl border-2 border-dashed border-tea-amber/40 bg-paper/70 p-6 sm:flex-row sm:items-center sm:gap-8">
                <Stamp top="LIMITED" main="100 CUPS" bottom="PER DAY" />
                <div>
                  <p className="font-serif-tc text-xl font-bold text-tea-brown">
                    每日限量 100 杯
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-tea-brown/70">
                    手工現做、每日限量製作，售完為止。
                    <br />
                    實際販售與售完時間依官方最新公告為準。
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Btn href="#why-bomb">為什麼叫炸彈檸檬茶？</Btn>
                <Btn href="/stores" variant="outline">
                  來店喝一杯
                </Btn>
              </div>
            </Reveal>
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
