"use client";

import { useState } from "react";
import { faq } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatePresence, motion } from "framer-motion";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-off-white py-28 md:py-40">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12">
        <Reveal className="max-w-2xl">
          <p className="tagline-editorial text-ocre">perguntas frequentes</p>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-earth-deep md:text-6xl">
            Tudo o que você precisa
            <span className="block italic text-earth">saber antes de chegar</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <ul className="divide-y divide-earth-deep/10 border-y border-earth-deep/10">
            {faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left md:py-9"
                  >
                    <span className="font-display text-2xl font-light text-earth-deep md:text-3xl">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-earth-deep/15 transition ${
                        isOpen ? "bg-ocre text-off-white border-ocre" : "text-earth"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path
                          d={isOpen ? "M5 12h14" : "M12 5v14M5 12h14"}
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-8 pr-12 text-base font-light leading-relaxed text-earth md:text-lg md:leading-[1.8]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
