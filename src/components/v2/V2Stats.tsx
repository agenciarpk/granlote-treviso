"use client";

import { useEffect, useRef, useState } from "react";
import { numerosOficiais } from "@/lib/data";

function Counter({ value, active }: { value: string; active: boolean }) {
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

export function V2Stats() {
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
      { threshold: 0.25 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="v2-stats" ref={ref} className="relative border-y border-off-white/10 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid items-end gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-ocre-light">
              02 — Dimensões
            </p>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-off-white md:text-6xl">
              Uma nova
              <span className="block italic">referência</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:col-span-8 md:grid-cols-3">
            {numerosOficiais.map((n, i) => (
              <div
                key={n.label}
                className="border-l border-off-white/15 pl-5"
                style={{ gridRow: i < 3 ? 1 : 2 }}
              >
                <span className="font-serif text-6xl font-light text-off-white md:text-7xl">
                  <Counter value={n.valor} active={visible} />
                  {n.unidade && (
                    <span className="ml-1 text-2xl text-off-white/60 md:text-3xl">{n.unidade}</span>
                  )}
                </span>
                <span className="mt-4 block text-[10px] uppercase tracking-[0.15em] text-off-white/50">
                  {n.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
