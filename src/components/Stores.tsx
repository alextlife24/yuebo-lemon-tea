import Image from "next/image";
import { stores, type Store } from "@/content/site";
import { Reveal } from "./Reveal";
import { Btn, Container, SectionHeading, Tag } from "./ui";

const directionsUrl = (s: Store) =>
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(`${s.addressNote ? s.addressNote + " " : ""}${s.address}`);

function StoreCard({ s, index }: { s: Store; index: number }) {
  const isBranch = s.id === "general";

  return (
    <Reveal as="article" delay={index * 0.1} className="h-full">
      <div className="paper-card grain flex h-full flex-col overflow-hidden rounded-3xl transition-shadow duration-300 hover:shadow-lift">
        <div className="relative aspect-[3/2] overflow-hidden bg-cream/70">
          <Image
            src={s.image}
            alt={s.imageAlt}
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 92vw, 44vw"
            className="object-cover"
          />
          <span className="absolute top-4 left-4 rounded-full border-2 border-tea-brown bg-lemon px-3 py-1 font-display text-[0.66rem] tracking-[0.18em] text-tea-brown">
            {s.badge}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <h3 className="font-serif-tc text-2xl font-bold text-tea-brown sm:text-[1.7rem]">
            {s.name}
          </h3>
          <p className="mt-1.5 text-sm text-tea-amber">{s.subtitle}</p>

          <p className="mt-5 text-[0.95rem] leading-[1.95] text-tea-brown/75">
            {s.description}
          </p>

          <dl className="mt-6 space-y-3 text-[0.93rem]">
            <div className="flex gap-3">
              <dt className="shrink-0 pt-0.5 text-tea-amber" aria-label="地址">
                📍
              </dt>
              <dd className="text-tea-brown/85">
                <address className="not-italic">
                  {s.address}
                  {s.addressNote && (
                    <>
                      <br />
                      <span className="text-tea-brown/60">{s.addressNote}</span>
                    </>
                  )}
                </address>
              </dd>
            </div>

            <div className="flex gap-3">
              <dt className="shrink-0 pt-0.5 text-tea-amber" aria-label="電話">
                📞
              </dt>
              <dd className="flex flex-wrap gap-x-4 gap-y-1">
                {s.phones.map((p) => (
                  <a
                    key={p.display}
                    href={p.href}
                    className="font-semibold text-tea-brown underline decoration-lemon decoration-2 underline-offset-4 transition-colors hover:text-tea-amber"
                  >
                    {p.display}
                    <span className="ml-1 text-xs font-normal text-tea-brown/50">
                      （{p.label}）
                    </span>
                  </a>
                ))}
              </dd>
            </div>

            <div className="flex gap-3">
              <dt
                className="shrink-0 pt-0.5 text-tea-amber"
                aria-label="營業時間"
              >
                🕒
              </dt>
              <dd className="text-tea-brown/70">{s.hoursNote}</dd>
            </div>
          </dl>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            {isBranch ? (
              <>
                <Btn href={directionsUrl(s)} className="sm:flex-1">
                  前往將軍府
                </Btn>
                <Btn href={s.mapUrl} variant="outline" className="sm:flex-1">
                  Google Maps
                </Btn>
              </>
            ) : (
              <>
                <Btn href={s.mapUrl} className="sm:flex-1">
                  Google Maps 導航
                </Btn>
                <Btn
                  href={s.phones[0].href}
                  variant="outline"
                  className="sm:flex-1"
                >
                  電話預訂
                </Btn>
              </>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function StoresSection({
  withHeading = true,
}: {
  withHeading?: boolean;
}) {
  return (
    <section
      id="stores"
      aria-labelledby="stores-title"
      className="relative py-20 sm:py-24"
    >
      <Container>
        {withHeading && (
          <Reveal>
            <SectionHeading
              en="Store Locations"
              title="來花蓮，找我們喝一杯"
              lead={"復興街總店與將軍府店，\n都在花蓮市區，散步就能到。"}
            />
          </Reveal>
        )}

        <div
          className={`grid gap-8 lg:grid-cols-2 ${withHeading ? "mt-14" : ""}`}
        >
          {stores.map((s, i) => (
            <StoreCard key={s.id} s={s} index={i} />
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-tea-brown/60">
            <Tag tone="amber">
              ⚠️ 實際營業時間及售完時間依官方最新公告為準
            </Tag>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
