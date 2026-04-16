"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

type GaleriaItem = { src: string; titulo: string; label: string };

const galeria1: GaleriaItem[] = [
  { src: "/images/portaria-1920.webp", titulo: "Portaria", label: "A chegada" },
  { src: "/images/alameda-1920.webp", titulo: "Alamedas", label: "O caminhar" },
  { src: "/images/mall-1920.webp", titulo: "Heliponto", label: "Exclusividade" },
  { src: "/images/cul-de-sac-1920.webp", titulo: "Cul-de-sac", label: "Ruas com alma de vila" },
];

const galeria2: GaleriaItem[] = [
  { src: "/images/voo-clube-1920.webp", titulo: "Clube", label: "O coração" },
  { src: "/images/piscina-voo-1920.webp", titulo: "Complexo aquático", label: "Leveza em cada mergulho" },
  { src: "/images/solarium-1920.webp", titulo: "Solarium", label: "Sombra e descontração" },
  { src: "/images/academia-a-1920.webp", titulo: "Academia", label: "Movimento que inspira" },
  { src: "/images/praca-fitness-1920.webp", titulo: "Praça fitness", label: "Treinar com o olhar no horizonte" },
  { src: "/images/salao-gourmet-1920.webp", titulo: "Salão gourmet", label: "Boa mesa" },
  { src: "/images/festas-praca-1920.webp", titulo: "Praça das festas", label: "Celebrar na paisagem" },
  { src: "/images/salao-jogos-1920.webp", titulo: "Salão de jogos", label: "Diversão que aproxima" },
  { src: "/images/brinquedoteca-1920.webp", titulo: "Brinquedoteca", label: "Infância livre" },
  { src: "/images/voo-esportes-1920.webp", titulo: "Complexo esportivo", label: "A natureza joga junto" },
  { src: "/images/tenis-1920.webp", titulo: "Tênis de saibro", label: "Tradição e qualidade" },
  { src: "/images/beach-tennis-1920.webp", titulo: "Beach tennis", label: "Onde o verão não acaba" },
  { src: "/images/quadra-poli-1920.webp", titulo: "Poliesportiva", label: "Para todas as idades" },
  { src: "/images/churrasqueira-1920.webp", titulo: "Churrasqueiras", label: "Encontros ao ar livre" },
  { src: "/images/jardim-sentidos-1920.webp", titulo: "Jardim dos sentidos", label: "Lazer como praça" },
  { src: "/images/pet-place-1920.webp", titulo: "Pet place", label: "Eles também se sentem em casa" },
  { src: "/images/playground-1920.webp", titulo: "Playground", label: "Infância ao ar livre" },
  { src: "/images/minimercado-1920.webp", titulo: "Minimercado", label: "Praticidade no dia a dia" },
];

const galeria3: GaleriaItem[] = [
  { src: "/images/masterplan-1920.webp", titulo: "Masterplan", label: "Visão geral" },
  { src: "/images/drone-aereo-1920.webp", titulo: "Vista aérea", label: "Implantação no território" },
  { src: "/images/fotomontagem-1920.webp", titulo: "Fotomontagem", label: "Empreendimento finalizado" },
];

const abas = [
  { id: "empreendimento", label: "O Empreendimento", itens: galeria1 },
  { id: "lazer", label: "Lazer Completo", itens: galeria2 },
  { id: "implantacao", label: "Implantação", itens: galeria3 },
];

export function Galerias() {
  const [abaAtiva, setAbaAtiva] = useState(0);
  const [lightbox, setLightbox] = useState<{ abaIdx: number; itemIdx: number } | null>(null);
  const [direction, setDirection] = useState(0);

  const itensAtivos = lightbox !== null ? abas[lightbox.abaIdx].itens : abas[abaAtiva].itens;

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    if (!lightbox) return;
    setDirection(-1);
    const len = abas[lightbox.abaIdx].itens.length;
    setLightbox({ ...lightbox, itemIdx: (lightbox.itemIdx - 1 + len) % len });
  }, [lightbox]);

  const next = useCallback(() => {
    if (!lightbox) return;
    setDirection(1);
    const len = abas[lightbox.abaIdx].itens.length;
    setLightbox({ ...lightbox, itemIdx: (lightbox.itemIdx + 1) % len });
  }, [lightbox]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  const abrirLightbox = (abaIdx: number, itemIdx: number) => {
    setDirection(0);
    setLightbox({ abaIdx, itemIdx });
  };

  return (
    <section id="galerias" className="bg-off-white py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <Reveal>
          <p className="tagline-editorial text-ocre">galeria</p>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-earth-deep md:text-6xl">
            Cada ângulo
            <span className="block italic">conta uma história</span>
          </h2>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-2 border-b border-earth-deep/10 pb-0">
            {abas.map((aba, i) => (
              <button
                key={aba.id}
                type="button"
                onClick={() => setAbaAtiva(i)}
                className={`relative pb-4 text-[12px] tracking-[0.14em] uppercase transition-colors ${
                  abaAtiva === i ? "text-earth-deep" : "text-earth/50 hover:text-earth"
                }`}
              >
                {aba.label}
                {abaAtiva === i && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute inset-x-0 bottom-0 h-px bg-ocre"
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={abaAtiva}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"
          >
            {abas[abaAtiva].itens.map((item, i) => {
              const wide = i === 0;
              return (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => abrirLightbox(abaAtiva, i)}
                  className={`group relative block overflow-hidden rounded-sm bg-sage ${wide ? "md:col-span-2 lg:col-span-2" : ""}`}
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src={item.src}
                    alt={item.titulo}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-deep/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="block font-serif text-[10px] uppercase tracking-[0.15em] text-ocre-light">
                      {item.label}
                    </span>
                    <span className="mt-1 block font-display text-lg font-light text-off-white">
                      {item.titulo}
                    </span>
                  </div>
                </button>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox com slide */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-earth-deep/96 backdrop-blur-sm"
            onClick={close}
          >
            {/* Close */}
            <button type="button" onClick={close} aria-label="Fechar"
              className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-off-white/25 text-off-white transition hover:bg-off-white hover:text-earth-deep">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>

            {/* Prev */}
            <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Anterior"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-off-white/25 text-off-white transition hover:bg-off-white hover:text-earth-deep md:left-8">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Next */}
            <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Próxima"
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-off-white/25 text-off-white transition hover:bg-off-white hover:text-earth-deep md:right-8">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Image com slide */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`${lightbox.abaIdx}-${lightbox.itemIdx}`}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d * 80, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d * -80, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/2] w-[90vw] max-w-5xl overflow-hidden rounded-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={itensAtivos[lightbox.itemIdx].src}
                  alt={itensAtivos[lightbox.itemIdx].titulo}
                  fill
                  sizes="90vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-earth-deep/95 to-transparent p-6 md:p-10">
                  <p className="font-serif text-[11px] uppercase tracking-[0.15em] text-ocre-light">
                    {String(lightbox.itemIdx + 1).padStart(2, "0")} / {String(itensAtivos.length).padStart(2, "0")}
                    {" · "}{itensAtivos[lightbox.itemIdx].label}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-light text-off-white md:text-4xl">
                    {itensAtivos[lightbox.itemIdx].titulo}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
