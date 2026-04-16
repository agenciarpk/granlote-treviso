import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const fotos = [
  { src: "/images/foto-real-1-1920.webp", label: "Vista geral do canteiro" },
  { src: "/images/foto-real-2-1920.webp", label: "Infraestrutura em andamento" },
  { src: "/images/foto-real-3-1920.webp", label: "Obras de urbanização" },
];

export function ObrasFotos() {
  return (
    <section id="obras" className="bg-sage paper-grain py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <Reveal className="max-w-2xl">
          <p className="tagline-editorial text-ocre">evolução de obras</p>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-earth-deep md:text-6xl">
            Acontecendo
            <span className="block italic">agora</span>
          </h2>
          <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-earth md:text-lg">
            O Gran Reserva Treviso está em obras. Acompanhe a evolução do empreendimento
            e veja como o bairro está tomando forma.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <div className="grid gap-3 md:grid-cols-3">
            {fotos.map((foto, i) => (
              <div key={foto.src} className="group relative overflow-hidden rounded-sm bg-earth-deep/10">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={foto.src}
                    alt={foto.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-deep/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-serif text-[10px] uppercase tracking-[0.15em] text-ocre-light">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 text-[13px] font-light text-off-white">{foto.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-12">
          <p className="text-[11px] italic text-earth/50">
            Fotos reais do canteiro de obras. Material atualizado em Março/2026.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
