"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-earth-deep">
      {/* Background — cul-de-sac */}
      <div className="absolute inset-0">
        <Image
          src="/images/cul-de-sac-1920.webp"
          alt="Ruas do Gran Reserva Treviso"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-deep/60 via-earth-deep/20 to-earth-deep/92" />
      </div>

      {/* Wave pattern */}
      <svg
        viewBox="0 0 1440 320"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-full text-off-white opacity-[0.06]"
      >
        <path d="M -100,200 C 200,140 400,250 650,180 C 900,110 1100,230 1350,160 C 1440,140 1500,170 1540,150" />
        <path d="M -100,225 C 200,165 400,275 650,205 C 900,135 1100,255 1350,185 C 1440,165 1500,195 1540,175" />
        <path d="M -100,250 C 200,190 400,300 650,230 C 900,160 1100,280 1350,210 C 1440,190 1500,220 1540,200" />
        <path d="M -100,175 C 200,115 400,225 650,155 C 900,85 1100,205 1350,135 C 1440,115 1500,145 1540,125" />
        <path d="M -100,150 C 200,90 400,200 650,130 C 900,60 1100,180 1350,110 C 1440,90 1500,120 1540,100" />
      </svg>

      {/* Conteúdo */}
      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-between px-6 pb-28 pt-28 md:px-12 md:pb-40 md:pt-36 lg:pb-52">

        {/* Logo — grande e imponente, fora do menu */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <Image
            src="/logo/gran-reserva-treviso.svg"
            alt="Gran Reserva Treviso"
            width={320}
            height={128}
            className="h-24 w-auto brightness-0 invert opacity-95 md:h-32 lg:h-36"
            priority
          />
        </motion.div>

        {/* Texto — base da hero */}
        <div>
          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="tagline-editorial mb-6 text-ocre-light"
          >
            Exclusivo em todos os detalhes · Pré-lançamento · Paulínia/SP
          </motion.p>

          <motion.h1
            initial={reduce ? undefined : { opacity: 0, y: 48 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display leading-[0.92] text-off-white"
            style={{ fontSize: "clamp(2.8rem, 7.5vw, 9rem)" }}
          >
            Residencial fechado
            <br />
            de alto padrão
            <br />
            <span className="italic">com 12m de frente</span>
          </motion.h1>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-[15px] font-light text-off-white/65 md:text-base"
          >
            Terrenos a partir de 300 m² · 525 lotes residenciais · 44 lotes comerciais · Heliponto exclusivo
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <a
              href="#contato"
              className="group inline-flex items-center justify-center rounded-full bg-ocre px-8 py-4 text-[12px] tracking-[0.15em] uppercase text-off-white transition-all hover:bg-ocre-light"
            >
              Receber informações do lançamento
              <svg viewBox="0 0 24 24" fill="none" className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#plantao"
              className="inline-flex items-center justify-center rounded-full border border-off-white/30 bg-off-white/5 px-8 py-4 text-[12px] tracking-[0.15em] uppercase text-off-white backdrop-blur-md transition-all hover:bg-off-white/15"
            >
              Agendar visita ao plantão
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-off-white/60"
      >
        <span className="h-8 w-px bg-off-white/50" />
      </motion.div>

      {/* Realização */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 right-6 hidden items-center gap-3 md:flex md:bottom-8 md:right-10"
      >
        <span className="tagline-editorial text-[10px] text-off-white/45">realização</span>
        <Image src="/logo/granlote-branco.png" alt="Granlote Urbanismo" width={110} height={34} className="h-7 w-auto opacity-75" />
      </motion.div>
    </section>
  );
}
