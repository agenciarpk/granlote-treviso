"use client";

import { useRef } from "react";
import Image from "next/image";
import { capitulosDestaque } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function V3HorizontalChapters() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    const w = ref.current.clientWidth;
    ref.current.scrollBy({
      left: dir === "left" ? -w * 0.9 : w * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <section id="v3-chapters" className="bg-off-white py-28 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal className="flex items-end justify-between gap-6">
          <div className="max-w-lg">
            <p className="text-[10px] uppercase tracking-[0.25em] text-ocre">
              Capítulos em destaque
            </p>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-earth-deep md:text-6xl">
              Seis momentos,
              <span className="block italic">uma experiência</span>
            </h2>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Anterior"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-earth-deep/20 text-earth-deep transition hover:border-ocre hover:text-ocre"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Próxima"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-earth-deep/20 text-earth-deep transition hover:border-ocre hover:text-ocre"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>

      <div
        ref={ref}
        className="mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-8 md:gap-6 md:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {capitulosDestaque.map((cap, i) => (
          <article
            key={cap.id}
            className="relative shrink-0 snap-start overflow-hidden rounded-sm"
            style={{
              width: "min(86vw, 560px)",
            }}
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-sage">
              <Image
                src={cap.imagem}
                alt={cap.chapeu}
                fill
                sizes="(max-width:768px) 86vw, 560px"
                className="object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.04]"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
