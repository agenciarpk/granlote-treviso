import { manifesto } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Manifesto() {
  return (
    <section id="manifesto" className="relative bg-sage paper-grain">
      <div className="mx-auto max-w-[1200px] px-6 py-32 md:px-12 md:py-44">
        <Reveal className="text-center">
          <p className="tagline-editorial text-ocre">um convite ao que é merecido</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 text-center">
          <h2 className="font-display text-[16vw] leading-[0.9] text-earth-deep md:text-[120px] lg:text-[160px]">
            Merecida
            <span className="block italic font-light text-earth"> mente seu</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mx-auto mt-20 max-w-2xl text-center">
          <p className="text-balance text-lg font-light leading-relaxed text-earth md:text-xl md:leading-[1.8]">
            {manifesto.corpo}
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-20 flex justify-center">
          <div className="rule-editorial w-32" />
        </Reveal>
      </div>
    </section>
  );
}
