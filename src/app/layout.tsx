import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { brand, social, stores } from "@/content/site";

/* ── 字型 ─────────────────────────────────────
   中文字型檔案較大，改用 preload:false + swap，
   避免拖慢首次載入。 */
const notoSansTC = Noto_Sans_TC({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc",
  display: "swap",
  preload: false,
});

const notoSerifTC = Noto_Serif_TC({
  weight: ["500", "700", "900"],
  variable: "--font-noto-serif-tc",
  display: "swap",
  preload: false,
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

/* ── SEO ─────────────────────────────────────── */

const title = "約伯賞茶｜花蓮炸彈檸檬茶｜花蓮必喝特色飲品";
const description =
  "花蓮在地人氣飲品約伯賞茶，招牌手工炸彈檸檬茶以新鮮檸檬、紅茶與蜂蜜調製。復興街總店與花蓮將軍府店，來花蓮旅行別錯過這杯清爽的花蓮味。";

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: {
    default: title,
    template: `%s｜${brand.nameZh} ${brand.nameEn}`,
  },
  description,
  keywords: [
    "花蓮美食",
    "花蓮飲料",
    "花蓮檸檬茶",
    "炸彈檸檬茶",
    "約伯賞茶",
    "花蓮必喝",
    "花蓮伴手禮",
    "將軍府美食",
    "復興街美食",
    "Hualien food",
    "Hualien drinks",
    "lemon tea",
  ],
  applicationName: brand.nameZh,
  authors: [{ name: brand.nameZh }],
  creator: brand.nameZh,
  publisher: brand.nameZh,
  category: "food & drink",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: brand.siteUrl,
    siteName: `${brand.nameZh} ${brand.nameEn}`,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#F7D83D",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

/* ── Schema.org 結構化資料 ───────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${brand.siteUrl}/#organization`,
      name: `${brand.nameZh}｜${brand.tagline}`,
      alternateName: [brand.nameEn, brand.nameEnAlt],
      url: brand.siteUrl,
      description,
      sameAs: [social.facebook, social.instagram].filter(Boolean),
      areaServed: "花蓮縣",
    },
    ...stores.map((s) => ({
      "@type": ["CafeOrCoffeeShop", "LocalBusiness"],
      "@id": `${brand.siteUrl}/stores#${s.id}`,
      name: `${brand.nameZh} ${s.name}`,
      alternateName: s.subtitle,
      description: s.description,
      url: `${brand.siteUrl}/stores`,
      telephone: s.phones[0].display,
      servesCuisine: "手工檸檬茶飲",
      parentOrganization: { "@id": `${brand.siteUrl}/#organization` },
      address: {
        "@type": "PostalAddress",
        addressCountry: "TW",
        addressRegion: "花蓮縣",
        addressLocality: "花蓮市",
        streetAddress: s.addressNote
          ? `${s.address}（${s.addressNote}）`
          : s.address,
      },
      hasMap: s.mapUrl,
      // TODO: 取得官方正式營業時間後，補上 openingHoursSpecification
    })),
    {
      "@type": "WebSite",
      "@id": `${brand.siteUrl}/#website`,
      url: brand.siteUrl,
      name: `${brand.nameZh} ${brand.nameEn}`,
      inLanguage: "zh-Hant-TW",
      publisher: { "@id": `${brand.siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="zh-Hant-TW"
      className={`${notoSansTC.variable} ${notoSerifTC.variable} ${bebas.variable}`}
    >
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only rounded-full bg-lemon px-4 py-2 font-semibold text-tea-brown focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60]"
        >
          跳到主要內容
        </a>

        <Navbar />
        <main id="main">
          {children}
        </main>
        <Footer />
        <MobileActionBar />

        <script
          type="application/ld+json"
          // Schema.org 結構化資料（LocalBusiness）
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
