import type { Metadata } from "next";
import { LemonDoodle } from "@/components/Doodles";
import { Btn, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "找不到頁面",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[62vh] flex-col items-center justify-center py-24 text-center">
      <LemonDoodle aria-hidden className="animate-float w-28" />
      <p className="mt-8 font-display text-6xl tracking-tight text-tea-amber">
        404
      </p>
      <h1 className="mt-4 font-serif-tc text-2xl font-bold text-tea-brown sm:text-3xl">
        這杯我們沒有做過
      </h1>
      <p className="mt-4 max-w-md text-[0.98rem] leading-[1.95] text-tea-brown/70">
        你要找的頁面不存在，或已經被移動了。
        <br />
        不如先回首頁，看看今天的炸彈檸檬茶。
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Btn href="/">回到首頁 🍋</Btn>
        <Btn href="/stores" variant="outline">
          找到我們
        </Btn>
      </div>
    </Container>
  );
}
