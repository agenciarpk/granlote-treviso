"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { numerosOficiais } from "@/lib/data";

export function V3Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="v3-top" className="relative min-h-[100svh] overflow-hidden bg-sage pt-20 md:pt-24">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-6 pb-16 md:gap-14 md:px-10 md:pb-24 lg:grid-cols-12">
        {/* LEFT — text */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 40 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between lg:col-span-5 lg:py-10"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-ocre" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-ocre">
                Pré-lançamento · Paulínia
              </span>
            </div>
            <h1 className="mt-10 font-display text-[14vw] leading-[0.88] text-earth-deep md:text-[96px] lg:text-[112px] xl:text-[128px]">
              Exclu<span className="italic">sivo</span>
              <span className="block">em cada</span>
              <span className="block font-script text-[18vw] leading-[0.9] text-ocre md:text-[140px] lg:text-[160px]">
                detalhe
              </span>
            </h1>
          </div>

          <div className="mt-12 max-w-md">
            <p className="text-sm font-light leading-relaxed text-earth md:text-base md:leading-[1.8]">
              Um bairro planejado onde o verde não compõe a paisagem — ele define o modo de
              viver. Realização <span className="text-earth-deep">Granlote Urbanismo</span>.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#v3-form"
                className="group inline-flex items-center justify-center rounded-full bg-earth-deep px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-off-white transition hover:bg-ocre"
              >
                Solicitar apresentação
                <svg viewBox="0 0 24 24" fill="none" className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#v3-masterplan"
                className="inline-flex items-center justify-center rounded-full border border-earth-deep/30 bg-transparent px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-earth-deep transition hover:bg-earth-deep hover:text-off-white"
              >
                Explorar
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — image + floating stats */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.98 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-7"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-earth md:aspect-[5/6] lg:aspect-[4/5]">
            <Image
              src="/images/voo-clube-1920.webp"
              alt="Vista aérea do Gran Reserva Treviso"
              fill
              priority
              quality={92}
              sizes="(max-width:1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-deep/55 via-transparent to-earth-deep/10" />
          </div>

          {/* Floating stats card */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 30 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="absolute -bottom-8 left-4 right-4 z-10 grid grid-cols-2 gap-0 border border-earth-deep/10 bg-off-white p-6 shadow-[0_30px_80px_-40px_rgba(40,34,23,0.4)] md:-bottom-10 md:left-8 md:right-auto md:w-[440px] md:grid-cols-2 md:p-8"
          >
            {numerosOficiais.slice(0, 4).map((n, i) => (
              <div
                key={n.label}
                className={`${i % 2 === 1 ? "border-l border-earth-deep/10 pl-6" : ""} ${
                  i < 2 ? "pb-6 md:pb-8" : ""
                }`}
              >
                <span className="font-serif text-3xl font-light text-earth-deep md:text-4xl">
                  {n.valor}
                  {n.unidade && (
                    <span className="text-lg text-earth">{n.unidade}</span>
                  )}
                </span>
                <span className="mt-2 block text-[9px] uppercase tracking-[0.15em] text-earth/70">
                  {n.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Realização badge top-right */}
          <div className="absolute right-4 top-4 hidden items-center gap-3 rounded-full bg-off-white/90 px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-earth backdrop-blur md:flex">
            <span>realização</span>
            <Image
              src="/logo/granlote.png"
              alt="Granlote"
              width={90}
              height={28}
              className="h-5 w-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
