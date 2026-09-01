"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { contact, stores } from "@/content/site";

/**
 * 手機版底部固定操作列。
 * 花蓮旅客多用手機查詢，導航／電話／產品必須一鍵可達。
 */
export function MobileActionBar() {
  const reduce = useReducedMotion();
  const mainStore = stores[0];

  const items = [
    {
      href: mainStore.mapUrl,
      icon: "📍",
      label: "導航",
      sub: "復興街總店",
      external: true,
    },
    {
      href: contact.mobileTel,
      icon: "📞",
      label: "電話",
      sub: contact.mobile,
      external: true,
    },
    { href: "/products", icon: "🍋", label: "產品", sub: "招牌必喝" },
  ];

  return (
    <motion.nav
      aria-label="快速操作"
      initial={reduce ? false : { y: 90 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-tea-brown/85 bg-tea-brown/97 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
    >
      <ul className="grid grid-cols-3">
        {items.map((item) => {
          const inner = (
            <>
              <span aria-hidden className="text-xl leading-none">
                {item.icon}
              </span>
              <span className="text-[0.82rem] font-bold text-cream">
                {item.label}
              </span>
              <span className="text-[0.62rem] text-cream/55">{item.sub}</span>
            </>
          );
          const cls =
            "flex flex-col items-center justify-center gap-0.5 px-2 py-2.5 transition-colors active:bg-tea-amber/35";

          return (
            <li
              key={item.label}
              className="border-r border-cream/12 last:border-0"
            >
              {item.external ? (
                <a
                  href={item.href}
                  className={cls}
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {inner}
                </a>
              ) : (
                <Link href={item.href} className={cls}>
                  {inner}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
