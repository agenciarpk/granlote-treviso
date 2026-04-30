"use client";

import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const fotos = [
  { src: "/images/obra-01", alt: "Vista aérea da obra 01" },
  { src: "/images/obra-02", alt: "Vista aérea da obra 02" },
  { src: "/images/obra-03", alt: "Vista aérea da obra 03" },
];

export function ObrasFotos() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    setDirection(-1);
    setLightbox((i) => (i === null ? null : (i - 1 + fotos.length) % fotos.length));
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setLightbox((i) => (i === null ? null : (i + 1) % fotos.length));
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  const abrirLightbox = (i: number) => {
    setDirection(0);
    setLightbox(i);
  };

  return (
    <>
      <section id="obras" className="bg-sage paper-grain py-28 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <Reveal className="max-w-2xl">
            <p className="tagline-editorial text-ocre">evolução de obras</p>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-earth-deep md:text-6xl">
              Acontecendo
              <span className="block italic">agora</span>
            </h2>
            <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-earth md:text-lg">
              O Gran Reserva Treviso está em obras. Acompanhe a evolução do empreendimento
              e veja como o bairro está tomando forma.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-16">
            {/* Mobile — scroll horizontal */}
            <div
              className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 md:hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {fotos.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => abrirLightbox(i)}
                  className="group relative w-[75vw] flex-shrink-0 snap-center overflow-hidden rounded-sm"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={`${item.src}-960.webp`}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                      sizes="75vw"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="font-serif text-[10px] uppercase tracking-[0.15em] text-ocre-light drop-shadow-md">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            {/* Desktop — grid */}
            <div className="hidden gap-3 md:grid md:grid-cols-3">
              {fotos.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => abrirLightbox(i)}
                  className="group relative overflow-hidden rounded-sm"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={`${item.src}-1920.webp`}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                      sizes="33vw"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="font-serif text-[10px] uppercase tracking-[0.15em] text-ocre-light drop-shadow-md">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-12">
            <p className="text-[11px] italic text-earth/50">
              Fotos reais do canteiro de obras. Material atualizado em Abril/2026.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Lightbox — portal para ficar acima da navbar */}
      {mounted && createPortal(
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-earth-deep/96 backdrop-blur-sm"
              onClick={close}
            >
              {/* Close */}
              <button
                type="button"
                onClick={close}
                aria-label="Fechar"
                className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-off-white/25 text-off-white transition hover:bg-off-white hover:text-earth-deep"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </button>

              {/* Prev */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Anterior"
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-off-white/25 text-off-white transition hover:bg-off-white hover:text-earth-deep md:left-8"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Próxima"
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-off-white/25 text-off-white transition hover:bg-off-white hover:text-earth-deep md:right-8"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Image com slide */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={lightbox}
                  custom={direction}
                  variants={{
                    enter: (d: number) => ({ x: d * 80, opacity: 0 }),
                    center: { x: 0, opacity: 1 },
                    exit: (d: number) => ({ x: d * -80, opacity: 0 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-[3/2] w-[90vw] max-w-5xl overflow-hidden rounded-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={`${fotos[lightbox].src}-1920.webp`}
                    alt={fotos[lightbox].alt}
                    fill
                    sizes="90vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-earth-deep/95 to-transparent p-6 md:p-10">
                    <p className="font-serif text-[11px] uppercase tracking-[0.15em] text-ocre-light">
                      {String(lightbox + 1).padStart(2, "0")} / {String(fotos.length).padStart(2, "0")}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
