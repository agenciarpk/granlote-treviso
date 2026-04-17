import { Reveal } from "@/components/ui/Reveal";

const placeholders = [
  { label: "Vista geral do canteiro", cor: "bg-earth" },
  { label: "Infraestrutura em andamento", cor: "bg-ocre" },
  { label: "Obras de urbanização", cor: "bg-earth-deep" },
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
          {/* Mobile — scroll horizontal */}
          <div
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 md:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {placeholders.map((item, i) => (
              <div key={item.label} className={`${item.cor} relative w-[75vw] flex-shrink-0 snap-center overflow-hidden rounded-sm`}>
                <div className="aspect-[4/3] w-full" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-serif text-[10px] uppercase tracking-[0.15em] text-ocre-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 text-[13px] font-light text-off-white">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Desktop — grid */}
          <div className="hidden gap-3 md:grid md:grid-cols-3">
            {placeholders.map((item, i) => (
              <div key={item.label} className={`${item.cor} relative overflow-hidden rounded-sm`}>
                <div className="aspect-[4/3] w-full" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-serif text-[10px] uppercase tracking-[0.15em] text-ocre-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 text-[13px] font-light text-off-white">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-12">
          <p className="text-[11px] italic text-earth/50">
            Fotos reais do canteiro de obras em breve. Material atualizado em Março/2026.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
