"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { hotspots, type Hotspot } from "@/lib/data";

export function V2Masterplan() {
  const [active, setActive] = useState<Hotspot | null>(null);

  return (
    <section id="v2-masterplan" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-ocre-light">
              03 — Masterplan
            </p>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-off-white md:text-6xl">
              Desenhado
              <span className="block italic text-off-white/70">para integrar</span>
            </h2>
            <p className="mt-8 max-w-sm text-sm font-light leading-relaxed text-off-white/60">
              525 lotes residenciais, 44 comerciais, mais de 80 mil m² preservados e um
              heliponto exclusivo. Cada marcador revela um espaço do bairro planejado.
            </p>

            <ul className="mt-10 space-y-2 text-[12px] font-light text-off-white/55">
              {hotspots.map((h) => (
                <li key={h.id} className="flex items-baseline gap-4">
                  <span className="font-serif text-[11px] text-ocre-light">{h.numero}</span>
                  <button
                    type="button"
                    onClick={() => setActive(h)}
                    className="text-left transition hover:text-off-white"
                  >
                    {h.titulo}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-earth ring-1 ring-off-white/10">
              <Image
                src="/images/masterplan-1920.webp"
                alt="Masterplan"
                fill
                sizes="(max-width:768px) 100vw, 800px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-earth-deep/25" />

              {hotspots.map((h) => (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setActive(h)}
                  aria-label={h.titulo}
                  className="group absolute"
                  style={{
                    left: `${h.x}%`,
                    top: `${h.y}%`,
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  <span className="relative flex h-9 w-9 items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-ocre-light/25 animate-ping [animation-duration:2.6s]" />
                    <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-ocre-light bg-earth-deep/80 font-serif text-[10px] text-ocre-light backdrop-blur transition-transform group-hover:scale-110">
                      {h.numero}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-earth-deep/90 backdrop-blur-sm md:items-center"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg border border-off-white/10 bg-earth-deep p-8 md:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="font-serif text-xs text-ocre-light">{active.numero}</span>
              <h3 className="mt-2 font-display text-4xl font-light text-off-white">
                {active.titulo}
              </h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-off-white/70">
                {active.descricao}
              </p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-off-white/20 text-off-white"
                aria-label="Fechar"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
