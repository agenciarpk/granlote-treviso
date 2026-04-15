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
    <section id="localizacao" className="relative overflow-hidden bg-sage">
      {/* Background aéreo */}
      <div className="absolute inset-0">
        <Image
          src="/images/drone-aereo-1920.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sage via-sage/60 to-sage" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
        <Reveal className="max-w-2xl">
          <p className="tagline-editorial text-ocre">o entorno que faz a diferença</p>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-earth-deep md:text-7xl">
            Morar bem localizado
            <span className="block italic text-earth">é investir com inteligência</span>
          </h2>
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-earth md:text-lg">
            Paulínia surpreende pela praticidade. Serviços de excelência, educação de alto nível,
            polos de saúde, gastronomia e fácil acesso às principais rodovias — tudo por perto, sem
            abrir mão da tranquilidade.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-20">
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {agrupadas.map(
              (grupo) =>
                grupo.items.length > 0 && (
                  <div key={grupo.label} className="border-t border-earth-deep/15 pt-6">
                    <h3 className="font-serif text-xs uppercase tracking-[0.18em] text-ocre">
                      {grupo.label}
                    </h3>
                    <ul className="mt-5 space-y-4">
                      {grupo.items.map((d) => (
                        <li
                          key={d.destino}
                          className="flex items-baseline justify-between gap-4 text-earth-deep"
                        >
                          <span className="text-[15px] font-light">{d.destino}</span>
                          <span className="font-serif text-[15px] text-ocre">{d.tempo}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
