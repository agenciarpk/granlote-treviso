"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { capitulosDestaque } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function CapitulosEditoriais() {
  return (
    <section id="empreendimento" className="bg-off-white">
      {/* Header introdutório */}
      <div className="bg-sage paper-grain">
        <div className="mx-auto max-w-[1200px] px-6 py-24 text-center md:px-12 md:py-36">
          <Reveal>
            <p className="tagline-editorial text-ocre">ressignificado</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-earth-deep md:text-7xl">
              Cada espaço é
              <span className="block italic">extensão da casa</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-10 max-w-2xl text-base font-light leading-relaxed text-earth md:text-lg md:leading-[1.8]">
              As áreas de lazer do Gran Reserva Treviso foram concebidas como extensão da casa.
              São espaços completos, elegantes e cercados de verde, que convidam ao descanso,
              à prática esportiva e à convivência espontânea.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Capítulos alternados */}
      <div className="divide-y divide-sage-dark/20">
        {capitulosDestaque.map((cap, i) => {
          const reverse = i % 2 === 1;
          return (
            <article
              key={cap.id}
              className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 md:grid-cols-12 md:px-12 md:py-32 lg:gap-16"
            >
              {/* Imagem */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative aspect-[4/3] md:col-span-7 md:aspect-[3/2] ${
                  reverse ? "md:order-2" : ""
                }`}
              >
                <div className="absolute inset-0 overflow-hidden rounded-sm bg-sage">
                  <Image
                    src={cap.imagem}
                    alt={cap.tagline}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition-transform duration-[1.8s] ease-out hover:scale-[1.03]"
                  />
                </div>
                <span className="absolute -top-3 left-4 bg-off-white px-3 py-1 font-serif text-[11px] uppercase tracking-[0.15em] text-ocre md:-top-4">
                  {String(i + 1).padStart(2, "0")} / {String(capitulosDestaque.length).padStart(2, "0")}
                </span>
              </motion.div>

              {/* Texto */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col justify-center md:col-span-5 ${
                  reverse ? "md:order-1" : ""
                }`}
              >
                <p className="tagline-editorial text-ocre">{cap.chapeu}</p>
                <h3 className="mt-6 font-display text-4xl font-light leading-[1.05] text-earth-deep md:text-5xl lg:text-6xl">
                  {cap.tagline}
                </h3>
                <p className="mt-8 text-base font-light leading-relaxed text-earth md:text-[17px] md:leading-[1.8]">
                  {cap.copy}
                </p>
                <div className="mt-10 h-px w-16 bg-ocre" />
              </motion.div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
