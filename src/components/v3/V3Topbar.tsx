"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { contato } from "@/lib/data";

const links = [
  { label: "Essência", href: "#v3-manifesto" },
  { label: "Masterplan", href: "#v3-masterplan" },
  { label: "Mosaico", href: "#v3-mosaic" },
  { label: "Localização", href: "#v3-map" },
  { label: "Contato", href: "#v3-form" },
];

export function V3Topbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-earth-deep/10 bg-sage/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
          <a href="#v3-top" className="flex items-center gap-4">
            <Image
              src="/logo/gran-reserva-treviso.svg"
              alt="Gran Reserva Treviso"
              width={180}
              height={42}
              className="h-10 w-auto"
              priority
            />
            <span className="hidden h-4 w-px bg-earth-deep/20 md:block" />
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-earth md:block">
              Experience
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[12px] font-light tracking-[0.05em] text-earth transition hover:text-ocre"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.15em] lg:flex">
              <a href="/" className="text-earth/50 hover:text-earth">v1</a>
              <a href="/v2" className="text-earth/50 hover:text-earth">v2</a>
              <span className="font-serif text-ocre">v3</span>
              <span className="mx-2 h-4 w-px bg-earth/15" />
            </div>
            <a
              href={`https://wa.me/${contato.whatsappNumero}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-earth-deep px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] text-earth-deep transition hover:bg-earth-deep hover:text-off-white md:inline-flex"
            >
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-earth-deep/30 text-earth-deep lg:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-off-white transition-opacity duration-500 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Image
            src="/logo/gran-reserva-treviso.svg"
            alt=""
            width={180}
            height={42}
            className="h-10 w-auto"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-earth-deep/30 text-earth-deep"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="mt-12 flex flex-col gap-8 px-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-light text-earth-deep"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
