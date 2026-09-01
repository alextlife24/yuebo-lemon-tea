import Link from "next/link";
import { brand, contact, nav, social, stores } from "@/content/site";
import { LemonDoodle, WaveDivider } from "./Doodles";
import { Container } from "./ui";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 bg-tea-brown pb-20 text-cream lg:pb-0">
      <WaveDivider
        className="absolute -top-[1px] left-0 -translate-y-full"
        fill="#46301F"
        flip
      />

      <Container className="grain relative py-14 sm:py-16">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          {/* 品牌 */}
          <div>
            <div className="flex items-center gap-3">
              <LemonDoodle className="h-11 w-11 animate-float-slow" />
              <div>
                <p className="font-serif-tc text-xl font-bold">
                  {brand.nameZh}
                </p>
                <p className="font-display text-[0.72rem] tracking-[0.26em] text-lemon">
                  {brand.nameEn.toUpperCase()}
                </p>
              </div>
            </div>
            <p className="mt-5 font-serif-tc text-lg text-lemon-soft">
              {brand.tagline}
            </p>
            <p className="mt-2 font-display text-sm tracking-[0.24em] text-cream/55">
              HUALIEN, TAIWAN
            </p>
            <p className="mt-5 max-w-sm text-sm leading-loose text-cream/70">
              {brand.slogans[0]}
            </p>
          </div>

          {/* 門市 */}
          <div>
            <h2 className="font-display text-sm tracking-[0.26em] text-lemon">
              STORES
            </h2>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed">
              {stores.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/stores"
                    className="font-semibold text-cream transition-colors hover:text-lemon"
                  >
                    {s.name}
                  </Link>
                  <p className="mt-1 text-cream/60">{s.address}</p>
                  {s.addressNote && (
                    <p className="text-cream/60">{s.addressNote}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* 聯絡 + 社群 */}
          <div>
            <h2 className="font-display text-sm tracking-[0.26em] text-lemon">
              CONTACT
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a
                  href={contact.mobileTel}
                  className="font-semibold transition-colors hover:text-lemon"
                >
                  📞 {contact.mobile}
                </a>
              </li>
              <li>
                <a
                  href={contact.landlineTel}
                  className="text-cream/75 transition-colors hover:text-lemon"
                >
                  ☎ {contact.landline}
                </a>
              </li>
            </ul>

            <h2 className="mt-8 font-display text-sm tracking-[0.26em] text-lemon">
              FOLLOW
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2.5 text-sm">
              <li>
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-cream/25 px-4 py-2 transition-colors hover:border-lemon hover:text-lemon"
                >
                  Facebook
                </a>
              </li>
              {social.instagram && (
                <li>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-cream/25 px-4 py-2 transition-colors hover:border-lemon hover:text-lemon"
                  >
                    Instagram
                  </a>
                </li>
              )}
              <li>
                <a
                  href={stores[0].mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-cream/25 px-4 py-2 transition-colors hover:border-lemon hover:text-lemon"
                >
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 次要導覽 */}
        <nav
          aria-label="頁尾導覽"
          className="mt-12 border-t border-cream/12 pt-7"
        >
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/70">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-lemon"
                >
                  {item.zh}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-7 flex flex-col gap-2 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.nameZh} {brand.nameEn}. All Rights Reserved.
          </p>
          <p className="font-display tracking-[0.2em]">
            MADE IN HUALIEN 🍋 TAIWAN
          </p>
        </div>
      </Container>
    </footer>
  );
}
