import { ImageResponse } from "next/og";
import { brand } from "@/content/site";

export const alt =
  "約伯賞茶｜花蓮炸彈檸檬茶 — 一整顆新鮮檸檬，碰上紅茶與蜂蜜";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** OG 圖上會用到的中文字，只抓這些字的字型子集，檔案才夠小 */
const SUBSET = "約伯賞茶手工炸彈檸檬花蓮必喝特色飲品一整顆新鮮碰上紅與蜂蜜每日限量杯";

/**
 * 從 Google Fonts 取得可被 satori 使用的 TTF 子集。
 * 取不到（例如離線 build）就回傳 null，改用純英文版面，不會讓 build 失敗。
 */
async function loadFont(): Promise<ArrayBuffer | null> {
  try {
    const cssUrl =
      "https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@700&text=" +
      encodeURIComponent(SUBSET);
    const css = await fetch(cssUrl).then((r) => r.text());
    const src = css.match(
      /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
    );
    if (!src) return null;
    return await fetch(src[1]).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const font = await loadFont();
  const hasCJK = font !== null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, #FFF8DC 0%, #FAF8F1 45%, #F7D83D 100%)",
          fontFamily: hasCJK ? "NotoSerifTC" : "sans-serif",
        }}
      >
        {/* 裝飾檸檬 */}
        <div
          style={{
            position: "absolute",
            right: -110,
            top: -90,
            width: 460,
            height: 400,
            borderRadius: "50%",
            background: "#F7D83D",
            border: "12px solid #46301F",
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 130,
            bottom: -140,
            width: 300,
            height: 260,
            borderRadius: "50%",
            background: "#FBEB9B",
            border: "10px solid #46301F",
            opacity: 0.65,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 22,
            background: "#A86624",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 72px",
            width: 900,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 9,
              color: "#A86624",
              whiteSpace: "nowrap",
            }}
          >
            HUALIEN · TAIWAN
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 22,
              fontSize: 72,
              lineHeight: 1.2,
              fontWeight: 700,
              color: "#46301F",
            }}
          >
            <span style={{ whiteSpace: "nowrap" }}>
              {hasCJK ? "花蓮的一顆" : "ONE WHOLE LEMON"}
            </span>
            <span style={{ whiteSpace: "nowrap" }}>
              {hasCJK ? "炸彈檸檬" : "BOMB LEMON TEA"}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 30,
              color: "#46301F",
              opacity: 0.82,
              whiteSpace: "nowrap",
            }}
          >
            {hasCJK
              ? "一整顆新鮮檸檬，碰上紅茶與蜂蜜"
              : "Fresh lemon, black tea & honey"}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 44,
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                flexShrink: 0,
                padding: "12px 28px",
                borderRadius: 999,
                background: "#46301F",
                color: "#FFF8DC",
                fontSize: 28,
                whiteSpace: "nowrap",
              }}
            >
              {hasCJK ? "約伯賞茶" : brand.nameEn}
            </div>
            <div
              style={{
                display: "flex",
                flexShrink: 0,
                padding: "12px 26px",
                borderRadius: 999,
                border: "4px solid #46301F",
                color: "#46301F",
                fontSize: 22,
                letterSpacing: 3,
                whiteSpace: "nowrap",
              }}
            >
              LIMITED 100 CUPS / DAY
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font
        ? [{ name: "NotoSerifTC", data: font, style: "normal", weight: 700 }]
        : [],
    },
  );
}
