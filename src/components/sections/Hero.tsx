"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { projeto } from "@/lib/data";

type HeroProps = { showRealizacao?: boolean };

export function Hero({ showRealizacao = true }: HeroProps = {}) {
  void showRealizacao;
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-earth-deep">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/fotomontagem-1920.webp"
          alt="Vista aérea do Gran Reserva Treviso"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        {/* Gradient veil */}
        <div className="absolute inset-0 bg-gradient-to-b from-earth-deep/70 via-earth-deep/30 to-earth-deep/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-deep/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-20 md:px-12 md:pb-28 lg:pb-36">
        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="tagline-editorial mb-8 text-ocre-light"
        >
          Pré-lançamento · {projeto.cidade}/{projeto.estado}
        </motion.p>

        <motion.h1
          initial={reduce ? undefined : { opacity: 0, y: 40 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[11vw] leading-[0.95] text-off-white md:text-[88px] lg:text-[108px] xl:text-[128px]"
        >
          Exclusivo
          <br />
          <span className="italic">em todos os detalhes</span>
        </motion.h1>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex max-w-xl flex-col gap-4 md:mt-14 md:flex-row md:items-center md:gap-6"
        >
          <p className="max-w-md text-[15px] font-light leading-relaxed text-off-white/75 md:text-base">
            Um residencial fechado de alto padrão onde o verde não compõe a paisagem —
            ele define o modo de viver.
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <a
            href="#contato"
            className="group inline-flex items-center justify-center rounded-full bg-ocre px-8 py-4 text-[12px] tracking-[0.15em] uppercase text-off-white transition-all hover:bg-ocre-light"
          >
            Receber informações
            <svg viewBox="0 0 24 24" fill="none" className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1">
              <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#masterplan"
            className="inline-flex items-center justify-center rounded-full border border-off-white/30 bg-off-white/5 px-8 py-4 text-[12px] tracking-[0.15em] uppercase text-off-white backdrop-blur-md transition-all hover:bg-off-white/15"
          >
            Explorar masterplan
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-off-white/70"
      >
        <div className="scroll-hint flex flex-col items-center gap-2">
          <span className="tagline-editorial text-[10px]">scroll</span>
          <span className="h-8 w-px bg-off-white/60" />
        </div>
      </motion.div>

      {/* Realização — canto inferior direito */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 right-6 hidden items-center gap-4 md:flex md:bottom-8 md:right-10"
      >
        <span className="tagline-editorial text-[10px] text-off-white/55">
          realização
        </span>
        <Image
          src="/logo/granlote-branco.png"
          alt="Granlote Urbanismo"
          width={120}
          height={36}
          className="h-8 w-auto opacity-80"
        />
      </motion.div>
    </section>
  );
}
