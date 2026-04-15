"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { numerosOficiais } from "@/lib/data";

function Count({ value, active }: { value: string; active: boolean }) {
  const numeric = value.replace(/[^\d]/g, "");
  const isPure = Boolean(numeric && value.match(/^[\d.]+$/));
  const finalText = isPure ? parseInt(numeric, 10).toLocaleString("pt-BR") : value;
  const [txt, setTxt] = useState(finalText);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!active || !isPure || reduce) {
      setTxt(finalText);
      return;
    }
    setTxt("0");
    const target = parseInt(numeric, 10);
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 2000);
      const eased = 1 - Math.pow(1 - p, 4);
      setTxt(Math.round(target * eased).toLocaleString("pt-BR"));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, isPure, numeric, finalText]);

  return <>{txt}</>;
}

export function V3Numbers() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ocre text-off-white">
      <Image
        src="/images/drone-aereo-1920.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ocre via-ocre-deep/80 to-ocre" />

      <div className="relative mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="text-[10px] uppercase tracking-[0.25em] text-off-white/75">
              Dimensões oficiais
            </p>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-off-white md:text-6xl">
              O desenho
              <span className="block italic">em números</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm font-light leading-relaxed text-off-white/80">
            Dados oficiais do paper de lançamento Gran Reserva Treviso · Março 2026.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-x-10 gap-y-14 md:grid-cols-3 lg:grid-cols-6">
          {numerosOficiais.map((n) => (
            <div key={n.label}>
              <span className="font-serif text-6xl font-light leading-none md:text-7xl">
                <Count value={n.valor} active={visible} />
                {n.unidade && (
                  <span className="ml-1 text-2xl text-off-white/80 md:text-3xl">{n.unidade}</span>
                )}
              </span>
              <span className="mt-4 block text-[10px] uppercase tracking-[0.15em] text-off-white/70">
                {n.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
