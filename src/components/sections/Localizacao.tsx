import Image from "next/image";
import { distancias } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

const grupos = {
  rodovia: "Rodovias",
  aeroporto: "Aeroporto",
  educacao: "Educação",
  saude: "Saúde",
  servicos: "Serviços",
  lazer: "Lazer",
  shopping: "Shoppings",
} as const;

export function Localizacao() {
  const agrupadas = Object.entries(grupos).map(([key, label]) => ({
    label,
    items: distancias.filter((d) => d.tipo === key),
  }));

  return (
    <section id="localizacao" className="bg-earth-deep text-off-white">
      {/* Hero da localização — imagem aérea full-width */}
      <div className="relative aspect-[21/9] w-full overflow-hidden">
        <Image
          src="/images/fotomontagem-1920.webp"
          alt="Fotomontagem aérea do Gran Reserva Treviso"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-deep/30 via-transparent to-earth-deep/95" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1440px] px-6 pb-12 md:px-12 md:pb-16">
          <Reveal>
            <p className="tagline-editorial text-ocre-light">o entorno que faz a diferença</p>
            <h2 className="mt-4 font-display text-5xl font-light leading-[1.05] md:text-7xl">
              Morar bem localizado
              <span className="block italic text-off-white/75">é investir com inteligência</span>
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Texto defesa + distâncias */}
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-16 md:grid-cols-12">

          {/* Texto do folder */}
          <Reveal className="md:col-span-4">
            <p className="text-base font-light leading-relaxed text-off-white/75 md:text-lg md:leading-[1.9]">
              No cotidiano, Paulínia surpreende pela praticidade. Serviços de excelência,
              educação de alto nível, polos de saúde, gastronomia diversificada e fácil
              acesso às principais rodovias da região.
            </p>
            <p className="mt-6 text-base font-light leading-relaxed text-off-white/75 md:text-lg md:leading-[1.9]">
              Tudo por perto, sem abrir mão da tranquilidade. Um endereço que respeita
              o tempo das pessoas e valoriza cada escolha.
            </p>
            <div className="mt-10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-ocre-light" />
                <span className="text-[13px] font-light text-off-white/60">Região Metropolitana de Campinas</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-ocre-light" />
                <span className="text-[13px] font-light text-off-white/60">Polo Cinematográfico de Paulínia</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-ocre-light" />
                <span className="text-[13px] font-light text-off-white/60">Uma região em franco crescimento</span>
              </div>
            </div>
          </Reveal>

          {/* Distâncias */}
          <Reveal delay={0.15} className="md:col-span-8">
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {agrupadas.map(
                (grupo) =>
                  grupo.items.length > 0 && (
                    <div key={grupo.label} className="border-t border-off-white/10 pt-5">
                      <h3 className="font-serif text-[10px] uppercase tracking-[0.18em] text-ocre-light">
                        {grupo.label}
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {grupo.items.map((d) => (
                          <li key={d.destino} className="flex items-baseline justify-between gap-4">
                            <span className="text-[14px] font-light text-off-white/70">{d.destino}</span>
                            <span className="shrink-0 font-serif text-[14px] text-ocre-light">{d.tempo}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
