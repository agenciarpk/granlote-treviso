"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galeriaCompleta } from "@/lib/data";

export function V2Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollerRef.current) return;
    const w = scrollerRef.current.clientWidth;
    scrollerRef.current.scrollBy({
      left: dir === "left" ? -w * 0.8 : w * 0.8,
      behavior: "smooth",
    });
  };

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? null : (i - 1 + galeriaCompleta.length) % galeriaCompleta.length
      ),
    []
  );
  const next = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? null : (i + 1) % galeriaCompleta.length
      ),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  return (
    <section id="v2-gallery" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-lg">
            <p className="text-[10px] uppercase tracking-[0.25em] text-ocre-light">
              05 — Galeria
            </p>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-off-white md:text-6xl">
              Cada ambiente,
              <span className="block italic text-off-white/70">cada detalhe</span>
            </h2>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-off-white/20 text-off-white transition hover:border-ocre-light hover:text-ocre-light"
              aria-label="Anterior"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-off-white/20 text-off-white transition hover:border-ocre-light hover:text-ocre-light"
              aria-label="Próxima"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroller */}
      <div
        ref={scrollerRef}
        className="mt-16 flex gap-4 overflow-x-auto px-6 pb-6 md:gap-6 md:px-12 [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {galeriaCompleta.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightbox(i)}
            className="group relative shrink-0 overflow-hidden rounded-sm"
            style={{
              scrollSnapAlign: "start",
              width: "min(78vw, 520px)",
              aspectRatio: "4/5",
            }}
          >
            <Image
              src={item.imagem}
              alt={item.chapeu}
              fill
              sizes="(max-width:768px) 78vw, 520px"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-deep/85 via-earth-deep/0 to-earth-deep/0" />
            <div className="absolute bottom-6 left-6 right-6 text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] text-ocre-light">
                {String(i + 1).padStart(2, "0")} / {String(galeriaCompleta.length).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-2xl font-light text-off-white md:text-3xl">
                {item.chapeu}
              </h3>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-earth-deep/95 backdrop-blur"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-off-white/25 text-off-white hover:bg-off-white hover:text-earth-deep"
              aria-label="Fechar"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative aspect-[3/2] w-[92vw] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galeriaCompleta[lightbox].imagem}
                alt=""
                fill
                sizes="92vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-earth-deep/95 to-transparent p-6 md:p-10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-ocre-light">
                  {galeriaCompleta[lightbox].chapeu}
                </p>
                <h3 className="mt-2 font-display text-3xl font-light text-off-white md:text-4xl">
                  {galeriaCompleta[lightbox].tagline}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
