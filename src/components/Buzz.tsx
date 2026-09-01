import { buzz, mediaMentions, social } from "@/content/site";
import { SparkleDoodle } from "./Doodles";
import { Reveal } from "./Reveal";
import { Btn, Container, SectionHeading } from "./ui";

export function Buzz() {
  return (
    <section
      id="buzz"
      aria-labelledby="buzz-title"
      className="relative py-20 sm:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            en="Word of Mouth"
            title="大家都在喝"
            lead="花蓮人與旅客一起排隊的那杯檸檬茶。"
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {buzz.map((b, i) => (
            <Reveal as="li" key={b.label} delay={i * 0.07}>
              <div className="paper-card grain flex h-full flex-col items-center rounded-3xl px-5 py-8 text-center transition-transform duration-300 hover:-translate-y-1.5">
                <SparkleDoodle
                  aria-hidden
                  className="h-5 w-5 text-lemon"
                />
                <p className="mt-3 font-display text-4xl leading-none tracking-tight text-tea-brown sm:text-[2.75rem]">
                  {b.value}
                </p>
                <p className="mt-3 font-serif-tc text-base font-bold text-tea-amber">
                  {b.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-tea-brown/55">
                  {b.note}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* 媒體介紹（非官方合作／代言） */}
        <Reveal delay={0.15}>
          <div className="mt-14 rounded-3xl border-2 border-dashed border-tea-amber/35 bg-cream/50 px-6 py-8 sm:px-10">
            <h3 className="text-center font-serif-tc text-xl font-bold text-tea-brown">
              曾被旅遊、美食內容介紹
            </h3>
            <ul className="mt-6 flex flex-wrap justify-center gap-3">
              {mediaMentions.map((m) => (
                <li key={m.name}>
                  {m.url ? (
                    <a
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-tea-brown/25 bg-paper px-4 py-2 text-sm text-tea-brown transition-colors hover:border-tea-amber hover:text-tea-amber"
                    >
                      {m.name}
                    </a>
                  ) : (
                    <span className="inline-flex rounded-full border border-tea-brown/20 bg-paper px-4 py-2 text-sm text-tea-brown/70">
                      {m.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center text-xs leading-relaxed text-tea-brown/55">
              以上為曾被介紹的內容類型，非官方合作或代言。
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex justify-center">
            <Btn href={social.facebook} variant="outline">
              看看大家怎麼說
            </Btn>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
