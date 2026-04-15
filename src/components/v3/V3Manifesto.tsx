import { manifesto } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function V3Manifesto() {
  return (
    <section id="v3-manifesto" className="relative bg-off-white pt-32 md:pt-48">
      <div className="mx-auto max-w-[1600px] px-6 pb-28 md:px-10 md:pb-40">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          {/* Left sticky label */}
          <Reveal className="md:col-span-4">
            <div className="sticky top-32">
              <p className="text-[10px] uppercase tracking-[0.25em] text-ocre">
                Capítulo · Essência
              </p>
              <h2 className="mt-8 font-display text-[14vw] leading-[0.86] text-earth-deep md:text-[88px] lg:text-[108px]">
                Mere
                <span className="italic">cida</span>
              </h2>
              <p className="mt-6 font-script text-5xl text-ocre md:text-6xl">
                mente seu
              </p>
            </div>
          </Reveal>

          {/* Right copy */}
          <Reveal delay={0.1} className="md:col-span-8 md:pt-10 lg:col-span-7 lg:col-start-6">
            <p className="font-serif text-2xl font-light leading-[1.6] text-earth-deep md:text-3xl md:leading-[1.55]">
              {manifesto.corpo}
            </p>
            <div className="mt-16 h-px w-24 bg-ocre" />
            <div className="mt-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-earth">
              <span>manifesto oficial</span>
              <span className="h-px flex-1 bg-earth/15" />
              <span>paper mar/26</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
