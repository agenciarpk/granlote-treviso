"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { numerosOficiais } from "@/lib/data";

export function V3Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="v3-top" className="relative min-h-[100svh] overflow-hidden bg-sage pt-20 md:pt-24">

      {/* Arch decorative pattern */}
      <svg
        viewBox="0 0 700 950"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-auto text-earth-deep opacity-[0.07]"
        style={{ maxWidth: "60%" }}
      >
        <path d="M 290,560 Q 290,390 350,320 Q 410,390 410,560 Z" />
        <line x1="350" y1="320" x2="0" y2="60" />
        <line x1="350" y1="320" x2="80" y2="-10" />
        <line x1="350" y1="320" x2="210" y2="-45" />
        <line x1="350" y1="320" x2="350" y2="-55" />
        <line x1="350" y1="320" x2="490" y2="-45" />
        <line x1="350" y1="320" x2="620" y2="-10" />
        <line x1="350" y1="320" x2="700" y2="60" />
        <path d="M 290,560 Q 290,660 350,685 Q 410,660 410,560" />
        <path d="M 210,560 Q 210,760 350,790 Q 490,760 490,560" />
        <path d="M 120,560 Q 120,860 350,895 Q 580,860 580,560" />
        <path d="M 20,560 Q 20,960 350,1000 Q 680,960 680,560" />
      </svg>

      <div className="mx-auto grid max-w-[1600px] gap-10 px-6 pb-16 md:gap-14 md:px-10 md:pb-24 lg:grid-cols-12">

        {/* LEFT — texto */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 40 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between lg:col-span-5 lg:py-10"
        >
          <div>
            {/* Logo */}
            <Image
              src="/logo/gran-reserva-treviso.svg"
              alt="Gran Reserva Treviso"
              width={300}
              height={120}
              className="mb-8 h-28 w-auto brightness-0 md:h-24 mx-auto block lg:mx-0"
              priority
            />
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-ocre" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-ocre">
                Exclusivo em todos os detalhes · Pré-lançamento · Paulínia/SP
              </span>
            </div>

            {/* Frase conceito — explícita e imponente */}
            <h1 className="mt-10 font-display leading-[0.88] text-earth-deep" style={{ fontSize: "clamp(2.4rem, 3.5vw, 4.5rem)" }}>
              Residencial fechado
              <span className="block">de alto padrão</span>
              <span className="block italic text-ocre" style={{ fontSize: "clamp(2.6rem, 4vw, 5.2rem)" }}>
                com 12m de frente
              </span>
            </h1>

            {/* Metragem principal */}
            <p className="mt-8 text-sm font-light leading-relaxed text-earth md:text-base md:leading-[1.8]">
              Terrenos a partir de 300 m² · 525 lotes residenciais · 44 lotes comerciais · Heliponto exclusivo
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#v3-form"
              className="group inline-flex items-center justify-center rounded-full bg-earth-deep px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-off-white transition hover:bg-ocre"
            >
              Receber informações do lançamento
              <svg viewBox="0 0 24 24" fill="none" className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#plantao"
              className="inline-flex items-center justify-center rounded-full border border-earth-deep/30 bg-transparent px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-earth-deep transition hover:bg-earth-deep hover:text-off-white"
            >
              Agendar visita ao plantão
            </a>
          </div>
        </motion.div>

        {/* RIGHT — imagem cul-de-sac + stats */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.98 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-7"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-earth">
            <Image
              src="/images/cul-de-sac-1920.webp"
              alt="Ruas do Gran Reserva Treviso"
              fill
              priority
              quality={92}
              sizes="(max-width:1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-deep/50 via-transparent to-earth-deep/10" />
          </div>

          {/* Stats flutuantes */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 30 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="relative mt-4 grid grid-cols-2 gap-0 border border-earth-deep/10 bg-off-white p-6 shadow-[0_30px_80px_-40px_rgba(40,34,23,0.4)] lg:absolute lg:-bottom-10 lg:left-8 lg:right-auto lg:mt-0 lg:w-[440px] lg:p-8"
          >
            {numerosOficiais.slice(0, 4).map((n, i) => (
              <div
                key={n.label}
                className={`${i % 2 === 1 ? "border-l border-earth-deep/10 pl-6" : ""} ${i < 2 ? "pb-6 md:pb-8" : ""}`}
              >
                <span className="font-serif text-3xl font-light text-earth-deep md:text-4xl">
                  {n.valor}
                  {n.unidade && <span className="text-lg text-earth">{n.unidade}</span>}
                </span>
                <span className="mt-2 block text-[9px] uppercase tracking-[0.15em] text-earth/70">
                  {n.label}
                </span>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
