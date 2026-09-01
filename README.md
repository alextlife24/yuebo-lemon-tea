# 約伯賞茶｜手工炸彈檸檬茶 官方網站

花蓮在地飲品品牌「約伯賞茶」的官方網站。
Next.js 15（App Router）+ TypeScript + Tailwind CSS v4 + Framer Motion。

---

## 快速開始

安裝套件：

```bash
npm install
```

開發模式（http://localhost:3000）：

```bash
npm run dev
```

正式版建置與啟動：

```bash
npm run build
```

```bash
npm run start
```

---

## 我想改東西，該改哪個檔案？

### 1. 文案、電話、地址、社群連結 → `src/content/site.ts`

網站幾乎所有可變內容都集中在這個檔案，**不需要動元件程式碼**：

| 區塊 | 說明 |
| --- | --- |
| `brand` | 品牌名稱、slogan、正式網域（`siteUrl`）、頁尾 Demo 標示 |
| `contact` | 手機 / 市話 / Email（手機版會自動變成可撥號連結） |
| `stats` | **需店家確認的數字**：Google 評論、FB 追蹤、每日限量杯數、限購包數 |
| `social` | Facebook 網址（Instagram 為 `null`，全站相關按鈕自動隱藏） |
| `stores` | 兩間門市的名稱、地址、電話、Google Maps 連結、照片 |
| `products` | 產品名稱、介紹、限量標籤、照片 |
| `features` | 品牌四大特色卡片 |
| `buzz` / `mediaMentions` | 社群聲量與「曾被介紹」的內容類型 |
| `gallery` | Instagram 風格圖片牆 |
| `nav` | 導覽列項目 |

> ⚠️ `stats` 裡的數字（1,000+ Google 評論、4,000+ FB 追蹤、每日 100 杯、限購 2 包）
> 尚未經店家正式確認，請確認後直接修改該區塊，全站會同步更新。

### 2. 圖片 → `public/images/`

目前放的是自動產生的**手繪風格插畫（SVG）**，可直接上線。
拿到實拍照片後有兩種做法：

- **最簡單**：把照片存成同檔名的 `.jpg` / `.webp`，然後在 `src/content/site.ts`
  把對應路徑的副檔名改掉（例如 `/images/product-bomb-lemon-tea.svg` → `.jpg`）。
- 想重新產生插畫：`node scripts/gen-placeholders.mjs`

需要替換的圖片清單：

```
product-bomb-lemon-tea.svg   招牌炸彈檸檬茶
product-lemon-juice.svg      極品檸檬原汁
product-little-angel.svg     手工小天使
store-fuxing.svg             復興街總店店面
store-general.svg            將軍府店 / 日式老屋
hualien-travel.svg           花蓮街景、山與海
gallery-01 ~ gallery-08.svg  社群圖片牆
```

建議尺寸：產品 4:5 直式、門市與風景 3:2 橫式、社群牆 1:1 正方形。

### 3. 品牌故事 → `src/app/about/page.tsx`

目前只寫品牌精神與兩間門市，沒有虛構創辦年份或創辦人故事。
拿到老闆的正式說法後，在這個檔案新增一段即可。

### 4. 配色與字型 → `src/app/globals.css`

所有品牌色都定義在 `@theme` 區塊：

```
--color-lemon        #F7D83D
--color-cream        #FFF8DC
--color-tea-amber    #A86624
--color-tea-brown    #46301F
--color-leaf         #6F843D
--color-paper        #FAF8F1
```

---

## 頁面結構

| 路徑 | 內容 |
| --- | --- |
| `/` | 首頁（Hero、招牌、特色、炸彈故事、產品、花蓮旅行、門市、團體訂購、聲量、社群） |
| `/about` | 品牌故事 |
| `/drink` | 炸彈檸檬茶 |
| `/products` | 全部產品 |
| `/stores` | 門市資訊 |
| `/contact` | 聯絡我們 |

`/sitemap.xml`、`/robots.txt`、OG 分享圖（`/opengraph-image`）都會自動產生。

---

## 已內建的項目

- **響應式 / Mobile First**：手機、平板、桌機三種版型
- **手機版底部固定操作列**：📍 導航、📞 電話（`tel:0980347540`）、🍋 產品
- **桌機 Sticky Navbar／手機 Hamburger Menu**
- **SEO**：Title、Meta Description、Keywords、Open Graph、Twitter Card、
  `LocalBusiness` / `CafeOrCoffeeShop` Schema.org 結構化資料（兩間門市各一筆）
- **效能**：`next/image` 自動 lazy loading、中文字型 `display: swap`、
  首屏標題改用 CSS 進場動畫（不必等 JS hydration 就看得到）
- **無障礙**：語意化標籤、skip link、`aria-*`、鍵盤 focus 樣式、
  尊重 `prefers-reduced-motion`

---

## 刻意沒有做的事

依品牌方要求，網站**不虛構**任何無法查證的資訊：

- 沒有標示任何產品價格（一律導向「請洽門市或來電詢問」）
- 沒有創辦年份、創辦人故事、食材產地
- 沒有得獎紀錄、官方合作、媒體推薦語（只寫「曾被旅遊、美食內容介紹」的類型）
- 沒有假的購物車或線上付款流程（訂購一律走電話洽詢）
- 營業時間一律標示「實際營業時間及售完時間依官方最新公告為準」

需要補這些資料時，請填入真實來源後再放上網站。

---

## 上線前檢查清單

- [x] `src/content/site.ts` → `brand.siteUrl` 已設為 https://yuebo-lemon-tea.vercel.app
- [x] Facebook 粉專網址已填入（店家目前沒有 Instagram，維持 `null`）
- [ ] `stats` 內的數字請店家確認
- [ ] 換上實拍照片
- [ ] 補上品牌故事（取得官方說法後）
- [ ] 確認兩間門市的 Google Maps 連結指到正確位置
- [ ] 如果有官方營業時間，於 `src/app/layout.tsx` 的 JSON-LD 補上
      `openingHoursSpecification`
