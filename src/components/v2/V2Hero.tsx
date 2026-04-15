"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function V2Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="v2-top" className="relative h-[100svh] min-h-[700px] overflow-hidden">
      <Image
        src="/images/fotomontagem-1920.webp"
        alt=""
        fill
        priority
        quality={90}
        sizes="(min-width:1024px) calc(100vw - 100px), 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-earth-deep/55 via-earth-deep/15 to-earth-deep" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(40,34,23,0.35)_80%)]" />

      <div className="relative flex h-full flex-col items-center justify-center px-6 pt-16 text-center lg:pt-0">
        <motion.div
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.3 }}
          className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-ocre-light"
        >
          <span className="h-px w-10 bg-ocre-light/50" />
          <span>Pré-lançamento · Paulínia/SP</span>
          <span className="h-px w-10 bg-ocre-light/50" />
        </motion.div>

        <motion.h1
          initial={reduce ? undefined : { opacity: 0, y: 40 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 font-display text-[14vw] font-light leading-[0.88] text-off-white md:text-[120px] lg:text-[160px] xl:text-[200px]"
        >
          Gran Reserva
          <span className="block italic text-ocre-light/90">Treviso</span>
        </motion.h1>

        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-xl text-balance text-sm font-light leading-relaxed text-off-white/70 md:text-base"
        >
          Um residencial fechado onde o verde não compõe a paisagem — ele define o modo de viver.
          Realização <span className="text-off-white">Granlote Urbanismo</span>.
        </motion.p>

        <motion.div
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.4 }}
          className="mt-14 flex flex-col items-center gap-6 sm:flex-row"
        >
          <a
            href="#v2-form"
            className="rounded-none border-b border-ocre-light bg-transparent px-1 pb-2 text-[11px] uppercase tracking-[0.22em] text-ocre-light transition hover:text-off-white"
          >
            Receber informações →
          </a>
          <a
            href="#v2-manifesto"
            className="text-[11px] uppercase tracking-[0.22em] text-off-white/50 transition hover:text-off-white"
          >
            Iniciar experiência ↓
          </a>
        </motion.div>
      </div>

      {/* Realização badge bottom-right */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 right-6 hidden items-center gap-4 md:flex md:bottom-10 md:right-12"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-off-white/45">
          realização
        </span>
        <Image
          src="/logo/granlote-branco.png"
          alt="Granlote Urbanismo"
          width={110}
          height={34}
          className="h-7 w-auto opacity-75"
        />
      </motion.div>
    </section>
  );
}
