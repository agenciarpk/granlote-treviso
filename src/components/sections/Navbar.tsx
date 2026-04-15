"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { contato } from "@/lib/data";

const links = [
  { label: "Empreendimento", href: "#manifesto" },
  { label: "Masterplan", href: "#masterplan" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
  { label: "Granlote", href: "#granlote" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-off-white/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(75,62,47,0.08)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3" aria-label="Gran Reserva Treviso">
            <Image
              src="/logo/gran-reserva-treviso.svg"
              alt="Gran Reserva Treviso"
              width={180}
              height={44}
              priority
              className={cn(
                "h-9 w-auto transition-all duration-500 md:h-11",
                scrolled ? "" : "brightness-0 invert"
              )}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "text-[13px] tracking-[0.05em] font-light transition-colors",
                  scrolled
                    ? "text-earth hover:text-ocre"
                    : "text-off-white/90 hover:text-off-white"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Version switcher */}
          <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.15em] lg:flex">
            <span className={cn("font-serif", scrolled ? "text-ocre" : "text-ocre-light")}>v1</span>
            <a href="/v2" className={cn("transition", scrolled ? "text-earth/50 hover:text-earth" : "text-off-white/40 hover:text-off-white/80")}>v2</a>
            <a href="/v3" className={cn("transition", scrolled ? "text-earth/50 hover:text-earth" : "text-off-white/40 hover:text-off-white/80")}>v3</a>
            <span className={cn("mx-2 h-4 w-px", scrolled ? "bg-earth/15" : "bg-off-white/20")} />
          </div>

          {/* CTA desktop */}
          <a
            href={`https://wa.me/${contato.whatsappNumero}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden rounded-full border px-5 py-2.5 text-[12px] tracking-[0.12em] uppercase transition-all lg:inline-flex",
              scrolled
                ? "border-ocre bg-ocre text-off-white hover:bg-ocre-deep"
                : "border-off-white/40 bg-off-white/10 text-off-white backdrop-blur-md hover:bg-off-white hover:text-earth-deep"
            )}
          >
            Falar agora
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden",
              scrolled
                ? "border-earth/20 text-earth-deep"
                : "border-off-white/30 text-off-white"
            )}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-earth-deep transition-all duration-700 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <Image
            src="/logo/gran-reserva-treviso.svg"
            alt="Gran Reserva Treviso"
            width={180}
            height={44}
            className="h-10 w-auto brightness-0 invert"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-off-white/30 text-off-white"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="mt-16 flex flex-col gap-8 px-10">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-light text-off-white transition hover:text-ocre-light"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ${i * 60 + 200}ms ease-out, transform 0.6s ${i * 60 + 200}ms ease-out`,
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="absolute inset-x-0 bottom-10 px-10">
          <a
            href={`https://wa.me/${contato.whatsappNumero}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full bg-ocre py-4 text-xs tracking-[0.15em] uppercase text-off-white"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
