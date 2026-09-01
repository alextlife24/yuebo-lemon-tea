import Image from "next/image";
import { gallery, social } from "@/content/site";
import { WaveDivider } from "./Doodles";
import { Reveal } from "./Reveal";
import { Btn, Container, SectionHeading } from "./ui";

export function SocialGrid() {
  return (
    <section
      id="social"
      aria-labelledby="social-title"
      className="relative bg-cream py-20 sm:py-24"
    >
      <WaveDivider
        className="absolute top-0 left-0 -mt-[1px] rotate-180"
        fill="var(--color-paper)"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            en="Follow Us"
            title="今天喝檸檬了嗎？🍋"
            lead="拍下你的那一杯，標記我們，一起分享花蓮的味道。"
          />
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {gallery.map((g, i) => (
            <Reveal as="li" key={g.src} delay={(i % 4) * 0.06}>
              <figure className="group grain relative aspect-square overflow-hidden rounded-2xl border-2 border-tea-brown/12 bg-paper shadow-paper">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 46vw, 23vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-tea-brown/85 px-3 py-2 text-center text-[0.72rem] text-cream transition-transform duration-300 group-hover:translate-y-0">
                  {g.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Btn href={social.facebook} size="lg">
              追蹤 Facebook
            </Btn>
            {/* 店家目前沒有 Instagram，填入網址後這顆按鈕才會出現 */}
            {social.instagram && (
              <Btn href={social.instagram} variant="outline" size="lg">
                追蹤 Instagram
              </Btn>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
