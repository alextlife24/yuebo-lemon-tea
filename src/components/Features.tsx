import { features } from "@/content/site";
import {
  CupDoodle,
  HoneyDoodle,
  LemonDoodle,
  LemonSliceDoodle,
} from "./Doodles";
import { Reveal } from "./Reveal";
import { Container, SectionHeading } from "./ui";

const icons = [LemonDoodle, CupDoodle, HoneyDoodle, LemonSliceDoodle];

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative py-20 sm:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            en="Why Yue Bo"
            title="真材實料，才有小時候的味道"
            lead={"沒有複雜的配方，\n只有每天重複做好的那幾件事。"}
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal as="li" key={f.no} delay={i * 0.08}>
                <article className="group paper-card grain relative flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <span
                    aria-hidden
                    className="font-display text-5xl leading-none text-lemon transition-colors duration-300 group-hover:text-tea-amber"
                  >
                    {f.no}
                  </span>
                  <Icon
                    aria-hidden
                    className="mt-5 h-12 w-12 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                  />
                  <h3 className="mt-5 font-serif-tc text-xl font-bold text-tea-brown">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.95] whitespace-pre-line text-tea-brown/72">
                    {f.body}
                  </p>
                  <span
                    aria-hidden
                    className="mt-6 block h-[3px] w-8 rounded-full bg-lemon transition-all duration-300 group-hover:w-16"
                  />
                </article>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
