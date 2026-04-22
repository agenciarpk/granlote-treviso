import Image from "next/image";
import { legal, projeto } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-earth-deep text-off-white/70">
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-24">

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/logo/gran-reserva-treviso.svg"
              alt={projeto.nome}
              width={220}
              height={56}
              className="h-20 w-auto brightness-0 invert"
            />
            <p className="mt-8 max-w-md text-sm font-light leading-relaxed">
              Residencial fechado de alto padrão em {projeto.cidade}/{projeto.estado}. 525 lotes
              residenciais, 44 comerciais, clube completo, heliponto e mais de 80 mil m² preservados.
              Lotes com 12m de frente.
            </p>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.15em] text-ocre-light">Sede</h4>
            <p className="mt-4 text-sm font-light">
              {legal.sede}
            </p>
          </div>

          <div className="hidden md:block md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.15em] text-ocre-light">Navegue</h4>
            <ul className="mt-4 space-y-3 text-sm font-light">
              {[
                ["#empreendimento", "Empreendimento"],
                ["#galerias", "Galeria"],
                ["#implantacao", "Masterplan"],
                ["#localizacao", "Localização"],
                ["#obras", "Obras"],
                ["#contato", "Contato"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-off-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 space-y-4 border-t border-off-white/10 pt-10 text-[11px] font-light leading-relaxed text-off-white/45">
          <p>
            <strong className="text-off-white/65">Registro:</strong> {legal.registro}
          </p>
          <p>
            <strong className="text-off-white/65">Alvará municipal:</strong> {legal.alvara}
          </p>
          <p>
            <strong className="text-off-white/65">GRAPROHAB:</strong> {legal.graprohab}
          </p>
        </div>

        {/* Assinaturas das empresas */}
        <div className="mt-12 flex items-center justify-center border-t border-off-white/10 pt-12 px-4 md:px-0">
          <Image
            src="/logo/footer-logos.svg"
            alt="Benedo — Gestão de vendas | Castelfranco Empreendimentos | Granlote Urbanismo — Realização"
            width={377}
            height={60}
            className="h-10 w-auto opacity-90 md:h-14"
          />
        </div>

        <div className="mt-8 text-center text-[11px] font-light leading-relaxed text-off-white/45">
          <p>{legal.disclaimer}</p>
        </div>

        <div className="mt-10 flex items-center justify-between text-[11px] text-off-white/40">
          <span>© {new Date().getFullYear()} Granlote Urbanismo. Todos os direitos reservados.</span>
          <span className="tagline-editorial">Gran Reserva Treviso</span>
        </div>
      </div>
    </footer>
  );
}
