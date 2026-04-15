"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { manifesto } from "@/lib/data";

export function V2Manifesto() {
  const reduce = useReducedMotion();

  return (
    <section id="v2-manifesto" className="relative overflow-hidden py-32 md:py-48">
      {/* Paper page as decorative background */}
      <Image
        src="/images/book-merecida-bg-1920.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-earth-deep via-earth-deep/70 to-earth-deep/40" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid items-center gap-16 md:grid-cols-12">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 30 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-5"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-ocre-light">
              01 — Manifesto
            </p>
            <h2 className="mt-8 font-display text-[18vw] leading-[0.85] text-off-white md:text-[130px] lg:text-[170px]">
              Mere<span className="italic text-ocre-light/90">ci</span>da
            </h2>
          </motion.div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, x: 30 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-6 lg:col-start-7"
          >
            <p className="max-w-md font-serif text-lg font-light leading-[1.9] text-off-white/75 md:text-xl">
              {manifesto.corpo}
            </p>
            <div className="mt-12 h-px w-20 bg-ocre-light/60" />
            <p className="mt-6 font-script text-4xl text-ocre-light md:text-5xl">
              — mente seu
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
