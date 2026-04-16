import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function PlantaoVendas() {
  return (
    <section id="plantao" className="relative overflow-hidden bg-earth-deep py-28 text-off-white md:py-40">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/portaria-1920.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-deep via-earth-deep/90 to-earth-deep/60" />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] gap-16 px-6 md:grid-cols-12 md:px-12">
        {/* Texto */}
        <Reveal className="md:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-ocre/20 px-4 py-2 text-[11px] tracking-[0.14em] uppercase text-ocre-light">
            <span className="h-2 w-2 animate-pulse rounded-full bg-ocre-light" />
            Plantão de Vendas Aberto
          </span>

          <h2 className="mt-8 font-display text-5xl font-light leading-[1.05] md:text-6xl">
            Venha conhecer
            <span className="block italic text-off-white/80">o Gran Reserva Treviso</span>
          </h2>

          <p className="mt-8 max-w-md text-base font-light leading-relaxed text-off-white/70 md:text-lg">
            Nosso showroom está aberto para visitas. Conheça os projetos, maquetes
            e todos os detalhes do empreendimento com nossos consultores exclusivos.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-ocre/40 text-ocre">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-ocre-light">Endereço</p>
                <p className="mt-1 text-[15px] font-light text-off-white">
                  Rod. Prof. Zeferino Vaz, Paulínia/SP
                </p>
                <p className="text-[13px] font-light text-off-white/60">
                  A 2 min da rodovia — fácil acesso
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-ocre/40 text-ocre">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-ocre-light">Horário</p>
                <p className="mt-1 text-[15px] font-light text-off-white">Segunda a domingo</p>
                <p className="text-[13px] font-light text-off-white/60">9h às 18h</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-ocre/40 text-ocre">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-ocre-light">Contato</p>
                <p className="mt-1 text-[15px] font-light text-off-white">(19) 9 9999-9999</p>
                <p className="text-[13px] font-light text-off-white/60">Atendimento exclusivo</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center rounded-full bg-ocre px-8 py-4 text-[12px] tracking-[0.15em] uppercase text-off-white transition hover:bg-ocre-light"
            >
              Agendar visita
              <svg viewBox="0 0 24 24" fill="none" className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://wa.me/5519999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-off-white/30 bg-off-white/5 px-8 py-4 text-[12px] tracking-[0.15em] uppercase text-off-white backdrop-blur-md transition hover:bg-off-white/15"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </Reveal>

        {/* Card destaque */}
        <Reveal delay={0.15} className="md:col-span-6">
          <div className="overflow-hidden rounded-sm bg-off-white/5 ring-1 ring-off-white/10">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/voo-clube-1920.webp"
                alt="Showroom Gran Reserva Treviso"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-deep/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-serif text-[11px] uppercase tracking-[0.14em] text-ocre-light">
                  Showroom · Gran Reserva Treviso
                </p>
              </div>
            </div>
            <div className="p-8">
              <p className="text-[11px] uppercase tracking-[0.14em] text-ocre-light">Vendas</p>
              <p className="mt-3 text-[15px] font-light text-off-white">
                Benedo Desenvolvimento Imobiliário Ltda.
              </p>
              <p className="mt-1 text-[13px] font-light text-off-white/50">CRECI 037603-J</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
