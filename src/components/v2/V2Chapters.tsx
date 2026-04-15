"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { capitulosDestaque } from "@/lib/data";

export function V2Chapters() {
  return (
    <section id="v2-chapters" className="relative">
      <div className="mx-auto max-w-[1440px] px-6 pt-32 md:px-12 md:pt-48">
        <div className="max-w-lg">
          <p className="text-[10px] uppercase tracking-[0.25em] text-ocre-light">
            04 — Capítulos
          </p>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-off-white md:text-6xl">
            Cada espaço,
            <span className="block italic text-off-white/70">um capítulo</span>
          </h2>
          <p className="mt-8 text-sm font-light leading-relaxed text-off-white/60 md:text-base">
            A experiência Gran Reserva Treviso se revela em atos. Seis momentos essenciais do
            bairro planejado, antes da galeria completa.
          </p>
        </div>
      </div>

      {/* Capítulos full-viewport */}
      {capitulosDestaque.map((cap, i) => (
        <article
          key={cap.id}
          className="relative mt-24 grid min-h-[90vh] items-center md:mt-32"
        >
          {/* Image bleed */}
          <div className="absolute inset-0">
            <Image
              src={cap.imagem}
              alt={cap.chapeu}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-earth-deep via-earth-deep/60 to-earth-deep/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-deep/90 via-earth-deep/20 to-transparent" />
          </div>

          <div className="relative mx-auto grid max-w-[1440px] px-6 py-32 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-4">
                <span className="font-serif text-lg text-ocre-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-12 bg-ocre-light/50" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-ocre-light">
                  {cap.chapeu}
                </span>
              </div>
              <h3 className="mt-8 font-display text-5xl font-light leading-[1.02] text-off-white md:text-6xl lg:text-7xl">
                {cap.tagline}
              </h3>
              <p className="mt-8 text-base font-light leading-relaxed text-off-white/75 md:text-lg md:leading-[1.8]">
                {cap.copy}
              </p>
            </motion.div>
          </div>
        </article>
      ))}
    </section>
  );
}
