import Image from "next/image";
import { granloteNumeros } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function V3Granlote() {
  return (
    <section id="v3-granlote" className="relative overflow-hidden bg-earth-deep py-28 text-off-white md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-ocre-light">
              Realização
            </p>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] md:text-6xl">
              Credibilidade,
              <span className="block italic text-off-white/70">construída em anos</span>
            </h2>
            <Image
              src="/logo/granlote-branco.png"
              alt="Granlote Urbanismo"
              width={260}
              height={80}
              className="mt-14 h-14 w-auto opacity-90"
            />
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7">
            <p className="text-base font-light leading-[1.9] text-off-white/75 md:text-lg">
              A Granlote Urbanismo atua com visão, responsabilidade e sensibilidade urbana.
              Cada projeto nasce do compromisso com qualidade, planejamento e a criação de
              espaços que valorizam o presente e constroem o futuro.
            </p>

            <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
              {granloteNumeros.map((n) => (
                <div key={n.label} className="border-l border-off-white/15 pl-5">
                  <div className="font-serif text-4xl font-light text-ocre-light md:text-5xl">
                    {n.valor}
                  </div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.15em] text-off-white/55">
                    {n.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
