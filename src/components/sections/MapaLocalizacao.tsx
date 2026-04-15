import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function MapaLocalizacao() {
  return (
    <section className="relative bg-off-white py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-12 lg:gap-16">
          <Reveal className="md:col-span-4">
            <p className="tagline-editorial text-ocre">croqui de localização</p>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] text-earth-deep md:text-5xl">
              No centro da
              <span className="block italic">região metropolitana</span>
            </h2>
            <p className="mt-8 text-base font-light leading-relaxed text-earth md:text-lg">
              Estrategicamente posicionado em uma das regiões mais desejadas de Paulínia,
              conectado à Anhanguera, Zeferino Vaz e Bandeirantes.
            </p>

            <ul className="mt-10 space-y-3 text-sm font-light text-earth">
              <li className="flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-ocre" />
                <span>Rod. Anhanguera · Bandeirantes · Zeferino Vaz</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-olive" />
                <span>Polos: Campinas, Americana, Jaguariúna</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-earth" />
                <span>Aeroportos: Viracopos e Campos dos Amarais</span>
              </li>
            </ul>
            <p className="mt-10 text-[11px] italic text-earth/60">
              Croqui de localização sem escala. Fonte: paper oficial Gran Reserva Treviso.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-8">
            <div className="relative overflow-hidden rounded-sm bg-off-white shadow-[0_30px_80px_-40px_rgba(40,34,23,0.3)] ring-1 ring-sage-dark/30">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/mapa-localizacao-1920.webp"
                  alt="Mapa de localização do Gran Reserva Treviso"
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-contain"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
