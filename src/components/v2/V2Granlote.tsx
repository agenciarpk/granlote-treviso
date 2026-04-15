import Image from "next/image";
import { granloteNumeros } from "@/lib/data";

export function V2Granlote() {
  return (
    <section id="v2-granlote" className="relative overflow-hidden border-t border-off-white/10 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid items-start gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-ocre-light">
              07 — Realização
            </p>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-off-white md:text-6xl">
              Uma história de
              <span className="block italic text-off-white/70">credibilidade</span>
            </h2>
            <Image
              src="/logo/granlote-branco.png"
              alt="Granlote Urbanismo"
              width={260}
              height={80}
              className="mt-14 h-14 w-auto opacity-90"
            />
          </div>

          <div className="md:col-span-7">
            <p className="text-base font-light leading-[1.9] text-off-white/75 md:text-lg">
              A Granlote Urbanismo atua com visão, responsabilidade e sensibilidade urbana.
              Cada projeto nasce do compromisso com a qualidade, o planejamento e a criação
              de espaços que valorizam o presente e constroem o futuro.
            </p>
            <p className="mt-6 text-base font-light leading-[1.9] text-off-white/75 md:text-lg">
              Solidez, qualidade construtiva e know-how imobiliário — é o que nos permite
              ser hoje uma das maiores loteadoras do país.
            </p>

            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-off-white/10 pt-12 md:grid-cols-4">
              {granloteNumeros.map((n) => (
                <div key={n.label}>
                  <div className="font-serif text-4xl font-light text-ocre-light md:text-5xl">
                    {n.valor}
                  </div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.15em] text-off-white/50">
                    {n.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
