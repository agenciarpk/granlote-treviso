"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galeriaCompleta } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Galeria() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + galeriaCompleta.length) % galeriaCompleta.length)),
    []
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % galeriaCompleta.length)),
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
    <section id="galeria" className="bg-off-white py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <Reveal className="max-w-2xl">
          <p className="tagline-editorial text-ocre">galeria completa</p>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-earth-deep md:text-6xl">
            Cada ambiente,
            <span className="block italic">cada detalhe</span>
          </h2>
          <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-earth md:text-lg">
            Toque em qualquer imagem para ampliar. Use as setas do teclado para navegar.
          </p>
        </Reveal>

        {/* Grid mosaic — 4/3/2/1 columns */}
        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {galeriaCompleta.map((item, i) => {
              const wide = i === 0;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLightbox(i)}
                  className={`group relative block overflow-hidden rounded-sm bg-sage ${
                    wide ? "md:col-span-2" : ""
                  }`}
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src={item.imagem}
                    alt={item.chapeu}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-deep/80 via-earth-deep/0 to-earth-deep/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="block font-serif text-[10px] uppercase tracking-[0.15em] text-ocre-light">
                      {String(i + 1).padStart(2, "0")} / {String(galeriaCompleta.length).padStart(2, "0")}
                    </span>
                    <span className="mt-1 block font-display text-lg font-light text-off-white">
                      {item.chapeu}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-earth-deep/95 backdrop-blur-sm"
            onClick={close}
          >
            {/* Close */}
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-off-white/25 text-off-white transition hover:bg-off-white hover:text-earth-deep"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>
            {/* Prev */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Anterior"
              className="absolute left-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-off-white/25 text-off-white transition hover:bg-off-white hover:text-earth-deep md:left-10"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {/* Next */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Próxima"
              className="absolute right-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-off-white/25 text-off-white transition hover:bg-off-white hover:text-earth-deep md:right-10"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/2] w-[92vw] max-w-5xl overflow-hidden rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galeriaCompleta[lightbox].imagem}
                alt={galeriaCompleta[lightbox].chapeu}
                fill
                sizes="92vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-earth-deep/95 to-transparent p-6 md:p-10">
                <p className="font-serif text-[11px] uppercase tracking-[0.15em] text-ocre-light">
                  {String(lightbox + 1).padStart(2, "0")} / {String(galeriaCompleta.length).padStart(2, "0")}
                  {" · "}
                  {galeriaCompleta[lightbox].chapeu}
                </p>
                <h3 className="mt-2 font-display text-2xl font-light text-off-white md:text-4xl">
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
