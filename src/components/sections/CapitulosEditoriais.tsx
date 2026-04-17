"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { capitulosDestaque } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function CapitulosEditoriais() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const updateActive = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (!children.length) return;
    const containerLeft = el.scrollLeft + el.offsetWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    children.forEach((child, i) => {
      const center = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(center - containerLeft);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveSlide(closest);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActive, { passive: true });
    return () => el.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.children[idx] as HTMLElement;
    if (!child) return;
    el.scrollTo({ left: child.offsetLeft - 24, behavior: "smooth" });
  };

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

      {/* Carrossel horizontal — mobile e desktop */}
      <div className="py-12 md:py-20">
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 md:gap-8 md:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {capitulosDestaque.map((cap, i) => (
            <div
              key={cap.id}
              className="w-[85vw] flex-shrink-0 snap-center md:w-[60vw] lg:w-[50vw]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sage md:aspect-[3/2]">
                <Image
                  src={cap.imagem}
                  alt={cap.tagline}
                  fill
                  sizes="(max-width: 768px) 85vw, 60vw"
                  className="object-cover transition-transform duration-[1.8s] ease-out hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-deep/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-off-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-serif text-[10px] uppercase tracking-[0.15em] text-ocre">
                  {String(i + 1).padStart(2, "0")} / {String(capitulosDestaque.length).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-5 md:mt-8 md:max-w-lg">
                <p className="tagline-editorial text-ocre">{cap.chapeu}</p>
                <h3 className="mt-3 font-display text-3xl font-light leading-[1.05] text-earth-deep md:text-5xl">
                  {cap.tagline}
                </h3>
                <p className="mt-4 text-[15px] font-light leading-relaxed text-earth md:mt-6 md:text-base md:leading-[1.8]">
                  {cap.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots + setas */}
        <div className="mt-8 flex items-center justify-center gap-3 px-6 md:mt-12">
          <button
            type="button"
            onClick={() => scrollTo(Math.max(0, activeSlide - 1))}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-earth-deep/20 text-earth-deep transition hover:bg-earth-deep hover:text-off-white md:flex"
            aria-label="Anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex gap-2">
            {capitulosDestaque.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  activeSlide === i ? "w-6 bg-ocre" : "w-1.5 bg-earth/20"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollTo(Math.min(capitulosDestaque.length - 1, activeSlide + 1))}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-earth-deep/20 text-earth-deep transition hover:bg-earth-deep hover:text-off-white md:flex"
            aria-label="Próximo"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
