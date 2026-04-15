"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galeriaCompleta } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function V3Mosaic() {
  const [lb, setLb] = useState<number | null>(null);

  const close = useCallback(() => setLb(null), []);
  const next = useCallback(
    () => setLb((i) => (i === null ? null : (i + 1) % galeriaCompleta.length)),
    []
  );
  const prev = useCallback(
    () =>
      setLb((i) =>
        i === null ? null : (i - 1 + galeriaCompleta.length) % galeriaCompleta.length
      ),
    []
  );

  useEffect(() => {
    if (lb === null) return;
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
  }, [lb, close, prev, next]);

  return (
    <section id="v3-mosaic" className="bg-off-white py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.25em] text-ocre">
            Mosaico completo
          </p>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-earth-deep md:text-6xl">
            O projeto inteiro,
            <span className="block italic">em perspectiva</span>
          </h2>
        </Reveal>

        {/* Masonry mosaic */}
        <Reveal delay={0.1}>
          <div className="mt-16 columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
            {galeriaCompleta.map((item, i) => {
              const tall = [0, 5, 9, 14, 19].includes(i);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLb(i)}
                  className="group mb-3 block w-full overflow-hidden rounded-sm bg-sage md:mb-4"
                  style={{ aspectRatio: tall ? "3/4" : "4/3", breakInside: "avoid" }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={item.imagem}
                      alt={item.chapeu}
                      fill
                      sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-deep/75 via-earth-deep/0 to-earth-deep/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="font-serif text-[10px] text-ocre-light">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-1 font-display text-base font-light text-off-white">
                        {item.chapeu}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {lb !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-earth-deep/95 backdrop-blur"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Fechar"
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-off-white/25 text-off-white hover:bg-off-white hover:text-earth-deep"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Anterior"
              className="absolute left-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-off-white/25 text-off-white md:left-10"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Próxima"
              className="absolute right-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-off-white/25 text-off-white md:right-10"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <motion.div
              key={lb}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/2] w-[92vw] max-w-5xl overflow-hidden rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galeriaCompleta[lb].imagem}
                alt=""
                fill
                sizes="92vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-earth-deep/95 to-transparent p-6 md:p-10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-ocre-light">
                  {galeriaCompleta[lb].chapeu}
                </p>
                <h3 className="mt-2 font-display text-3xl font-light text-off-white md:text-4xl">
                  {galeriaCompleta[lb].tagline}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
