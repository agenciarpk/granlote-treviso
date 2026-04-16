"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { hotspots, type Hotspot } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function V3Masterplan() {
  const [active, setActive] = useState<Hotspot | null>(null);

  return (
    <section id="v3-implantacao" className="bg-sage py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-lg">
              <p className="text-[10px] uppercase tracking-[0.25em] text-ocre">
                Masterplan interativo
              </p>
              <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-earth-deep md:text-6xl">
                Explore cada
                <span className="block italic">canto do bairro</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm font-light leading-relaxed text-earth">
              Toque nos marcadores numerados para abrir cada espaço. Todas as áreas comuns,
              o complexo esportivo, o heliponto e os lotes comerciais em um só mapa.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-16">
          <div className="grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-9">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-off-white ring-1 ring-earth-deep/10 shadow-[0_40px_80px_-50px_rgba(40,34,23,0.4)]">
                <Image
                  src="/images/masterplan-1920.webp"
                  alt="Masterplan"
                  fill
                  sizes="(max-width:768px) 100vw, 1000px"
                  className="object-cover"
                />
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
                    <span className="relative flex h-11 w-11 items-center justify-center md:h-12 md:w-12">
                      <span className="absolute inset-0 rounded-full bg-ocre/30 animate-ping [animation-duration:2.8s]" />
                      <span className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-off-white bg-ocre font-serif text-[11px] text-off-white shadow-lg transition-transform group-hover:scale-110 md:h-10 md:w-10">
                        {h.numero}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <ul className="space-y-4">
                {hotspots.map((h) => (
                  <li key={h.id}>
                    <button
                      type="button"
                      onClick={() => setActive(h)}
                      className="flex w-full items-start gap-4 border-b border-earth-deep/15 pb-3 text-left transition hover:border-ocre"
                    >
                      <span className="font-serif text-xs text-ocre">{h.numero}</span>
                      <span className="text-sm font-light text-earth-deep">
                        {h.titulo}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-earth-deep/80 backdrop-blur-sm md:items-center"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-off-white p-8 md:rounded-sm md:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="font-serif text-ocre text-xs">{active.numero}</span>
              <h3 className="mt-2 font-display text-4xl font-light text-earth-deep">
                {active.titulo}
              </h3>
              <p className="mt-4 text-base font-light leading-relaxed text-earth">
                {active.descricao}
              </p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-earth-deep/15 text-earth"
                aria-label="Fechar"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
