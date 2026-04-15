"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { contato } from "@/lib/data";

const chapters = [
  { num: "01", label: "Manifesto", href: "#v2-manifesto" },
  { num: "02", label: "Números", href: "#v2-stats" },
  { num: "03", label: "Masterplan", href: "#v2-masterplan" },
  { num: "04", label: "Capítulos", href: "#v2-chapters" },
  { num: "05", label: "Galeria", href: "#v2-gallery" },
  { num: "06", label: "Localização", href: "#v2-location" },
  { num: "07", label: "Granlote", href: "#v2-granlote" },
  { num: "08", label: "Contato", href: "#v2-form" },
];

export function V2Sidebar() {
  const [active, setActive] = useState("v2-manifesto");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    chapters.forEach((c) => {
      const el = document.getElementById(c.href.slice(1));
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[100px] flex-col justify-between border-r border-off-white/10 bg-earth-deep py-10 lg:flex">
        <a href="#v2-top" className="flex justify-center">
          <Image
            src="/logo/gran-reserva-treviso.svg"
            alt="Gran Reserva Treviso"
            width={70}
            height={60}
            className="h-14 w-auto brightness-0 invert"
          />
        </a>

        <nav className="flex flex-col gap-6 px-5">
          {chapters.map((c) => {
            const isActive = active === c.href.slice(1);
            return (
              <a
                key={c.num}
                href={c.href}
                className={cn(
                  "group flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] transition-colors",
                  isActive ? "text-ocre-light" : "text-off-white/40 hover:text-off-white/80"
                )}
              >
                <span className="font-serif">{c.num}</span>
                <span
                  className={cn(
                    "hidden h-px transition-all",
                    isActive ? "w-6 bg-ocre-light" : "w-3 bg-off-white/30"
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.15em]">
            <a href="/" className="text-off-white/40 hover:text-off-white/80">v1</a>
            <span className="font-serif text-ocre-light">v2</span>
            <a href="/v3" className="text-off-white/40 hover:text-off-white/80">v3</a>
          </div>
          <a
            href={`https://wa.me/${contato.whatsappNumero}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[0.18em] text-off-white/50 hover:text-ocre-light"
            style={{ writingMode: "vertical-rl" }}
          >
            Falar agora
          </a>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between bg-earth-deep/90 px-5 py-4 backdrop-blur-xl lg:hidden">
        <a href="#v2-top">
          <Image
            src="/logo/gran-reserva-treviso.svg"
            alt="Gran Reserva Treviso"
            width={140}
            height={40}
            className="h-9 w-auto brightness-0 invert"
          />
        </a>
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          aria-label="Menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-off-white/25 text-off-white"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </button>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-earth-deep transition-opacity duration-500 lg:hidden",
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <Image
            src="/logo/gran-reserva-treviso.svg"
            alt=""
            width={140}
            height={40}
            className="h-9 w-auto brightness-0 invert"
          />
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            aria-label="Fechar"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-off-white/25 text-off-white"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="mt-12 flex flex-col gap-6 px-8">
          {chapters.map((c) => (
            <a
              key={c.num}
              href={c.href}
              onClick={() => setDrawerOpen(false)}
              className="flex items-baseline gap-5 text-off-white"
            >
              <span className="font-serif text-xs text-ocre-light">{c.num}</span>
              <span className="font-display text-3xl font-light">{c.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
