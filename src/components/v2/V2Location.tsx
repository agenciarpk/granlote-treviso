import Image from "next/image";
import { distancias } from "@/lib/data";

export function V2Location() {
  return (
    <section id="v2-location" className="relative border-t border-off-white/10 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.25em] text-ocre-light">
            06 — Localização
          </p>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-off-white md:text-6xl">
            Morar bem localizado
            <span className="block italic text-off-white/70">é investir com inteligência</span>
          </h2>
        </div>

        {/* Mapa ilustrado dark */}
        <div className="mt-16 overflow-hidden rounded-sm border border-off-white/10 bg-[#F5F2E8]">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/mapa-localizacao-1920.webp"
              alt="Mapa de localização"
              fill
              sizes="(max-width:768px) 100vw, 1200px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Distances */}
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
          {distancias.map((d) => (
            <div
              key={d.destino}
              className="flex items-baseline justify-between gap-6 border-b border-off-white/10 py-4"
            >
              <span className="text-sm font-light text-off-white/80">{d.destino}</span>
              <span className="font-serif text-sm text-ocre-light">{d.tempo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
