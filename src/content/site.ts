/**
 * ─────────────────────────────────────────────────────────────
 *  約伯賞茶 ｜ 網站內容設定檔
 *  所有文案、電話、地址、社群連結都集中在這個檔案。
 *  想改網站內容，改這裡就好，不需要動到元件程式碼。
 *
 *  ⚠️ 標示 TODO 的欄位為 placeholder，請填入官方正式資料後再上線。
 * ─────────────────────────────────────────────────────────────
 */

export const brand = {
  nameZh: "約伯賞茶",
  nameZhFull: "約伯賞茶｜手工炸彈檸檬茶",
  nameEn: "Yue Bo Lemon Tea",
  nameEnAlt: "Job Lemon Bomb Tea",
  tagline: "手工炸彈檸檬茶",
  location: "Hualien, Taiwan",
  slogans: [
    "一顆檸檬，一杯花蓮的味道。",
    "酸得剛好，甜得自然。",
    "來到花蓮，喝一杯會冒泡的炸彈檸檬茶。",
    "純手工，小時候的味道。",
  ],
  /** 上線前請改成正式網域，OG 圖與 sitemap 會用到 */
  siteUrl: "https://example.com", // TODO: 換成正式網域
};

export const contact = {
  /** 主要行動電話（手機版可直接撥號） */
  mobile: "0980-347-540",
  mobileTel: "tel:0980347540",
  /** 市話 */
  landline: "03-8355555",
  landlineTel: "tel:038355555",
  /** TODO: 若有官方 Email 請填入，沒有就保持 null，網站會自動隱藏 */
  email: null as string | null,
};

export const social = {
  /** TODO: 換成官方 Facebook 粉專網址 */
  facebook: "https://www.facebook.com/",
  /** TODO: 若有官方 Instagram 請填入；沒有就設成 null，按鈕會自動隱藏 */
  instagram: null as string | null,
  facebookFollowers: "4,000+",
};

export type Store = {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  address: string;
  addressNote?: string;
  phones: { label: string; display: string; href: string }[];
  hoursNote: string;
  description: string;
  mapUrl: string;
  imageAlt: string;
  image: string;
};

export const stores: Store[] = [
  {
    id: "fuxing",
    name: "復興街總店",
    subtitle: "約伯賞茶 炸彈檸檬茶",
    badge: "總店 / MAIN STORE",
    address: "970 花蓮縣花蓮市復興街85號",
    phones: [
      { label: "手機", display: contact.mobile, href: contact.mobileTel },
      { label: "市話", display: contact.landline, href: contact.landlineTel },
    ],
    hoursNote: "實際營業時間及售完時間依官方最新公告為準。",
    description:
      "藏在花蓮市區巷弄裡的老位置，來復興街吃完小吃，順手帶一杯冰涼的炸彈檸檬茶。",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("約伯賞茶 花蓮市復興街85號"),
    image: "/images/store-fuxing.svg", // TODO: 換成復興街總店實拍照
    imageAlt: "約伯賞茶復興街總店店面",
  },
  {
    id: "general",
    name: "將軍府店",
    subtitle: "約伯炸彈檸檬茶｜花蓮將軍府1936",
    badge: "分店 / BRANCH",
    address: "花蓮縣花蓮市中正路622巷6號",
    addressNote: "花蓮將軍府1936園區",
    phones: [{ label: "洽詢", display: contact.mobile, href: contact.mobileTel }],
    hoursNote: "實際營業時間及售完時間依官方最新公告為準。",
    description:
      "在日式歷史建築的庭院裡，喝一杯屬於花蓮的炸彈檸檬茶。",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("花蓮將軍府1936 花蓮市中正路622巷6號"),
    image: "/images/store-general.svg", // TODO: 換成將軍府店實拍照
    imageAlt: "花蓮將軍府1936 日式老屋庭院",
  },
];

export type Product = {
  id: string;
  emoji: string;
  name: string;
  nameEn: string;
  description: string;
  note?: string;
  limitTag?: string;
  image: string;
  imageAlt: string;
  signature?: boolean;
};

export const products: Product[] = [
  {
    id: "bomb-lemon-tea",
    emoji: "🍋",
    name: "炸彈檸檬茶",
    nameEn: "Bomb Lemon Tea",
    description:
      "一整顆檸檬進入茶中，檸檬的酸香、紅茶的茶韻與蜂蜜的自然甜味交織，清爽、不膩，是約伯賞茶最具代表性的招牌飲品。",
    limitTag: "每日限量 100 杯",
    image: "/images/product-bomb-lemon-tea.svg", // TODO: 換成炸彈檸檬茶實拍照
    imageAlt: "約伯賞茶招牌手工炸彈檸檬茶，一整顆新鮮檸檬沉在紅茶裡",
    signature: true,
  },
  {
    id: "lemon-juice",
    emoji: "🧴",
    name: "極品檸檬原汁",
    nameEn: "Pure Lemon Juice",
    description:
      "保留檸檬最直接的酸香，適合喜歡自己調製飲品、氣泡水或料理的人。",
    image: "/images/product-lemon-juice.svg", // TODO: 換成檸檬原汁實拍照
    imageAlt: "極品檸檬原汁瓶裝",
  },
  {
    id: "little-angel",
    emoji: "🍪",
    name: "手工小天使",
    nameEn: "Handmade Little Angel",
    description: "花蓮特色手工點心／伴手禮。",
    note: "每人限購 2 包",
    image: "/images/product-little-angel.svg", // TODO: 換成手工小天使實拍照
    imageAlt: "手工小天使花蓮伴手禮包裝",
  },
];

export const features = [
  {
    no: "01",
    title: "一整顆新鮮檸檬",
    body: "不是只有檸檬香，\n而是真正看得到檸檬。",
  },
  {
    no: "02",
    title: "手工調製",
    body: "每一杯現點現做，\n保留屬於手作飲品的溫度。",
  },
  {
    no: "03",
    title: "紅茶 × 檸檬 × 蜂蜜",
    body: "簡單的材料，\n透過比例呈現不同層次。",
  },
  {
    no: "04",
    title: "每日限量",
    body: "每天限量製作，\n售完為止。",
  },
];

/**
 * 社群 / 媒體聲量。
 * ⚠️ 這裡只寫「可查證」的敘述，請勿加入未經證實的獲獎或官方合作。
 */
export const buzz = [
  {
    value: "1,000+",
    label: "Google 評論",
    note: "則數依 Google 商家最新顯示為準",
  },
  {
    value: social.facebookFollowers,
    label: "Facebook 追蹤者",
    note: "追蹤數依粉專最新顯示為準",
  },
  {
    value: "2",
    label: "花蓮門市",
    note: "復興街總店 × 將軍府店",
  },
  {
    value: "100",
    label: "每日限量杯數",
    note: "售完為止",
  },
];

/**
 * 曾被旅遊 / 美食內容介紹（非官方代言或合作）。
 * TODO: 若要保留此區塊，請補上實際報導連結；沒有連結時只呈現類別名稱。
 */
export const mediaMentions = [
  { name: "旅遊 / 美食電視節目", url: null as string | null },
  { name: "花蓮在地旅遊媒體", url: null as string | null },
  { name: "美食部落客", url: null as string | null },
  { name: "社群創作者", url: null as string | null },
];

/** Instagram / Facebook 風格圖片牆（先用手繪 placeholder，之後替換成實拍） */
export const gallery = [
  { src: "/images/gallery-01.svg", alt: "冰涼的炸彈檸檬茶" }, // TODO: 換成實拍照
  { src: "/images/gallery-02.svg", alt: "一整顆新鮮黃檸檬" },
  { src: "/images/gallery-03.svg", alt: "手工現做過程" },
  { src: "/images/gallery-04.svg", alt: "店門口排隊人潮" },
  { src: "/images/gallery-05.svg", alt: "花蓮旅行風景" },
  { src: "/images/gallery-06.svg", alt: "將軍府店日式老屋" },
  { src: "/images/gallery-07.svg", alt: "手工小天使伴手禮" },
  { src: "/images/gallery-08.svg", alt: "顧客手拿檸檬茶合照" },
];

export const nav = [
  { href: "/", en: "HOME", zh: "首頁" },
  { href: "/about", en: "ABOUT", zh: "品牌故事" },
  { href: "/drink", en: "DRINK", zh: "炸彈檸檬茶" },
  { href: "/products", en: "PRODUCTS", zh: "產品" },
  { href: "/stores", en: "STORES", zh: "門市" },
  { href: "/contact", en: "CONTACT", zh: "聯絡我們" },
];
