"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { hotspots, type Hotspot } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Masterplan() {
  const [active, setActive] = useState<Hotspot | null>(null);

  return (
    <section id="implantacao" className="relative bg-off-white py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <Reveal className="max-w-2xl">
          <p className="tagline-editorial text-ocre">o desenho do bairro</p>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-earth-deep md:text-7xl">
            Desenhado para integrar
            <span className="block italic text-earth">natureza, lazer e privacidade</span>
          </h2>
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-earth md:text-lg">
            Toque ou clique em cada marcador para conhecer os espaços que compõem
            o empreendimento. <span className="text-earth-deep">525 lotes residenciais</span>,{" "}
            <span className="text-earth-deep">44 comerciais</span>, mais de{" "}
            <span className="text-earth-deep">80 mil m² preservados</span> e um heliponto
            exclusivo.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-16">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-sage shadow-[0_40px_80px_-40px_rgba(40,34,23,0.35)]">
            <Image
              src="/images/masterplan-1920.webp"
              alt="Masterplan do Gran Reserva Treviso"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />

            {/* Hotspots */}
            {hotspots.map((h) => (
              <button
                key={h.id}
                type="button"
                onClick={() => setActive(h)}
                aria-label={`${h.numero} ${h.titulo}`}
                className="group absolute"
                style={{
                  left: `${h.x}%`,
                  top: `${h.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className="relative flex h-10 w-10 items-center justify-center md:h-12 md:w-12">
                  <span className="absolute inset-0 rounded-full bg-ocre/30 animate-ping [animation-duration:2.8s]" />
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-ocre font-serif text-[11px] font-medium text-off-white shadow-lg ring-2 ring-off-white transition-transform group-hover:scale-110 md:h-10 md:w-10 md:text-xs">
                    {h.numero}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Legenda mobile-friendly */}
        <Reveal delay={0.3} className="mt-10">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] font-light text-earth md:grid-cols-3 lg:grid-cols-5">
            {hotspots.map((h) => (
              <li key={h.id} className="flex items-start gap-3">
                <span className="mt-0.5 font-serif text-ocre">{h.numero}</span>
                <span>{h.titulo}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Modal de hotspot */}
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
              className="relative w-full max-w-lg overflow-hidden rounded-t-2xl bg-off-white p-8 md:rounded-2xl md:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="font-serif text-ocre text-sm">{active.numero}</span>
              <h3 className="mt-2 font-display text-4xl font-light text-earth-deep">
                {active.titulo}
              </h3>
              <p className="mt-4 text-base font-light leading-relaxed text-earth">
                {active.descricao}
              </p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-earth/15 text-earth-deep transition hover:bg-earth-deep hover:text-off-white"
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
