"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brand, contact, nav } from "@/content/site";
import { LemonDoodle } from "./Doodles";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 換頁時自動收合選單
  useEffect(() => setOpen(false), [pathname]);

  // 選單開啟時鎖住背景捲動 + Esc 關閉
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-tea-brown/12 bg-paper/92 shadow-[0_6px_24px_-18px_rgba(70,48,31,0.6)] backdrop-blur-md"
          : "border-b border-transparent bg-paper/70 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="主要導覽"
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:py-4"
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5"
          aria-label={`${brand.nameZh} 回到首頁`}
        >
          <LemonDoodle className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:rotate-12 sm:h-10 sm:w-10" />
          <span className="leading-tight">
            <span className="block font-serif-tc text-[1.05rem] font-bold tracking-tight text-tea-brown sm:text-lg">
              {brand.nameZh}
            </span>
            <span className="block font-display text-[0.62rem] tracking-[0.22em] text-tea-amber sm:text-[0.68rem]">
              HUALIEN LEMON TEA
            </span>
          </span>
        </Link>

        {/* 桌面版選單 */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`group flex flex-col items-center rounded-lg px-3 py-1.5 transition-colors xl:px-4 ${
                  isActive(item.href)
                    ? "text-tea-amber"
                    : "text-tea-brown/80 hover:text-tea-amber"
                }`}
              >
                <span className="font-display text-[0.72rem] tracking-[0.2em]">
                  {item.en}
                </span>
                <span className="text-[0.82rem] font-medium">{item.zh}</span>
                <span
                  className={`mt-0.5 h-[3px] rounded-full bg-lemon transition-all duration-300 ${
                    isActive(item.href) ? "w-6" : "w-0 group-hover:w-6"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* 桌面版 CTA */}
        <Link
          href="/stores"
          className="hidden shrink-0 rounded-full border-2 border-tea-brown bg-lemon px-5 py-2.5 text-sm font-bold text-tea-brown shadow-[0_4px_0_0_#46301F] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#46301F] lg:inline-flex lg:items-center lg:gap-1.5"
        >
          找到我們 🍋
        </Link>

        {/* 手機版漢堡 */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "關閉選單" : "開啟選單"}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-tea-brown/25 bg-cream text-tea-brown transition-colors hover:border-tea-brown lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-[2.5px] w-5 rounded-full bg-current transition-all duration-300 ${
                open ? "top-[7px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute top-[7px] left-0 block h-[2.5px] w-5 rounded-full bg-current transition-all duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[2.5px] w-5 rounded-full bg-current transition-all duration-300 ${
                open ? "top-[7px] -rotate-45" : "top-[14px]"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* 手機版選單 */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-tea-brown/12 bg-paper/98 backdrop-blur-md lg:hidden"
          >
            <ul className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i + 0.05, duration: 0.3 }}
                  className="border-b border-tea-brown/10 last:border-0"
                >
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`flex items-baseline gap-3 py-3.5 ${
                      isActive(item.href) ? "text-tea-amber" : "text-tea-brown"
                    }`}
                  >
                    <span className="font-display text-xs tracking-[0.22em] text-tea-amber/80">
                      {item.en}
                    </span>
                    <span className="text-[1.05rem] font-semibold">
                      {item.zh}
                    </span>
                    {isActive(item.href) && (
                      <span className="ml-auto text-lemon">●</span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mx-auto flex max-w-6xl gap-3 px-5 pb-5 sm:px-8">
              <Link
                href="/stores"
                className="flex flex-1 items-center justify-center rounded-full border-2 border-tea-brown bg-lemon px-4 py-3 text-sm font-bold text-tea-brown shadow-[0_4px_0_0_#46301F]"
              >
                找到我們 🍋
              </Link>
              <a
                href={contact.mobileTel}
                className="flex flex-1 items-center justify-center rounded-full border-2 border-tea-brown/35 px-4 py-3 text-sm font-bold text-tea-brown"
              >
                📞 {contact.mobile}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
