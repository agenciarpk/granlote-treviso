import Image from "next/image";
import { distancias } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function V3Map() {
  return (
    <section id="v3-map" className="relative overflow-hidden bg-sage py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-ocre">
              Croqui de localização
            </p>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.02] text-earth-deep md:text-6xl">
              No centro
              <span className="block italic">da região</span>
              <span className="block">metropolitana</span>
            </h2>
            <p className="mt-10 max-w-md text-base font-light leading-relaxed text-earth">
              Paulínia, região metropolitana de Campinas. Conectado à Anhanguera, Bandeirantes
              e Zeferino Vaz, com Viracopos a 32 minutos e todos os principais serviços ao
              redor.
            </p>

            {/* Distances grouped inline */}
            <div className="mt-12 space-y-3 text-sm">
              {distancias.slice(0, 8).map((d) => (
                <div
                  key={d.destino}
                  className="flex items-baseline justify-between gap-4 border-b border-earth-deep/15 pb-3"
                >
                  <span className="font-light text-earth-deep">{d.destino}</span>
                  <span className="font-serif text-ocre">{d.tempo}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-7">
            <div className="relative overflow-hidden rounded-sm bg-off-white shadow-[0_40px_80px_-40px_rgba(40,34,23,0.3)] ring-1 ring-sage-dark/40">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/mapa-localizacao-1920.webp"
                  alt="Mapa ilustrado da região"
                  fill
                  sizes="(max-width:768px) 100vw, 900px"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="mt-5 text-[11px] italic text-earth/70">
              Croqui de localização sem escala. Fonte: paper oficial Gran Reserva Treviso.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
