"use client";

import { useEffect, useRef, useState } from "react";
import { numerosOficiais } from "@/lib/data";

function AnimatedNumber({ value, isVisible }: { value: string; isVisible: boolean }) {
  // Se for número puro, anima a contagem; senão exibe direto
  const numeric = value.replace(/[^\d]/g, "");
  const isPureNumber = Boolean(
    numeric && !isNaN(Number(numeric)) && value.match(/^[\d.]+$/)
  );

  const finalDisplay = isPureNumber
    ? parseInt(numeric, 10).toLocaleString("pt-BR")
    : value;

  const [display, setDisplay] = useState(finalDisplay);

  useEffect(() => {
    // Respeita prefers-reduced-motion — mostra valor final direto
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isVisible || !isPureNumber || reduce) {
      setDisplay(finalDisplay);
      return;
    }
    const target = parseInt(numeric, 10);
    setDisplay("0");
    const start = performance.now();
    const duration = 1800;
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.round(target * eased);
      setDisplay(current.toLocaleString("pt-BR"));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, isPureNumber, numeric, finalDisplay]);

  return <span>{display}</span>;
}

export function Numeros() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="numeros"
      ref={ref}
      className="relative bg-earth-deep py-28 text-off-white md:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="max-w-2xl">
          <p className="tagline-editorial text-ocre-light">por trás da experiência</p>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] md:text-7xl">
            Uma nova referência
            <span className="block italic text-off-white/80">urbana em Paulínia</span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 lg:grid-cols-6">
          {numerosOficiais.map((n) => (
            <div key={n.label} className="flex flex-col">
              <span className="font-serif text-5xl font-light text-ocre-light md:text-6xl">
                <AnimatedNumber value={n.valor} isVisible={visible} />
                {n.unidade && (
                  <span className="ml-1 text-2xl md:text-3xl">{n.unidade}</span>
                )}
              </span>
              <span className="mt-4 text-xs font-light uppercase tracking-[0.12em] text-off-white/60">
                {n.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
