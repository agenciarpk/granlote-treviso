import Image from "next/image";
import { granloteNumeros } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Granlote() {
  return (
    <section id="granlote" className="bg-earth-deep py-28 text-off-white md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 md:grid-cols-12 md:px-12">
        <Reveal className="md:col-span-5">
          <p className="tagline-editorial text-ocre-light">compromisso</p>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] md:text-6xl">
            Uma história de
            <span className="block italic text-off-white/80">credibilidade e confiança</span>
          </h2>
          <Image
            src="/logo/granlote-branco.png"
            alt="Granlote Urbanismo"
            width={240}
            height={72}
            className="mt-12 h-12 w-auto opacity-80"
          />
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-7">
          <p className="text-base font-light leading-relaxed text-off-white/75 md:text-lg md:leading-[1.8]">
            A Granlote Urbanismo atua com visão, responsabilidade e sensibilidade urbana. Cada
            projeto nasce do compromisso com a qualidade, o planejamento e a criação de espaços que
            valorizam o presente e constroem o futuro.
          </p>
          <p className="mt-6 text-base font-light leading-relaxed text-off-white/75 md:text-lg md:leading-[1.8]">
            Solidez, qualidade construtiva e muito know-how imobiliário, adquiridos através de anos
            de experiência em um mercado tão competitivo como o de São Paulo — é o que nos chancela
            e nos permite ser hoje uma das maiores loteadoras do país.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-off-white/15 pt-12 md:grid-cols-4">
            {granloteNumeros.map((n) => (
              <div key={n.label}>
                <div className="font-serif text-4xl font-light text-ocre-light md:text-5xl">
                  {n.valor}
                </div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.12em] text-off-white/60">
                  {n.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
