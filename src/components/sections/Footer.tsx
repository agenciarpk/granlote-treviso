import Image from "next/image";
import { legal, projeto } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-earth-deep text-off-white/70">
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-24">

        {/* Assinaturas das empresas */}
        <div className="mb-16 grid grid-cols-1 gap-10 border-b border-off-white/10 pb-16 sm:grid-cols-3 sm:items-center sm:gap-0">
          {/* Gestão de vendas — Benedo */}
          <div className="sm:border-r sm:border-off-white/10 sm:pr-12">
            <p className="text-[9px] uppercase tracking-[0.22em] text-off-white/40">Gestão de vendas</p>
            <Image
              src="/logo/benedo.svg"
              alt="Benedo"
              width={160}
              height={60}
              className="mt-3 h-10 w-auto brightness-0 invert opacity-80"
            />
            <p className="mt-2 text-[10px] uppercase tracking-[0.1em] text-off-white/35">{legal.creci}</p>
          </div>

          {/* Castelfranco — centro */}
          <div className="flex flex-col items-start sm:items-center sm:border-r sm:border-off-white/10 sm:px-12">
            <Image
              src="/logo/castelfranco.svg"
              alt="Castelfranco"
              width={180}
              height={90}
              className="h-12 w-auto brightness-0 invert opacity-80"
            />
            <p className="mt-2 text-[11px] font-light text-off-white/50 sm:text-center">Empreendimentos imobiliários</p>
          </div>

          {/* Realização — Granlote */}
          <div className="sm:pl-12">
            <p className="text-[9px] uppercase tracking-[0.22em] text-off-white/40">Realização</p>
            <Image
              src="/logo/granlote-branco.png"
              alt="Granlote Urbanismo"
              width={160}
              height={48}
              className="mt-3 h-9 w-auto opacity-80"
            />
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/logo/gran-reserva-treviso.svg"
              alt={projeto.nome}
              width={220}
              height={56}
              className="h-14 w-auto brightness-0 invert"
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

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.15em] text-ocre-light">Navegue</h4>
            <ul className="mt-4 space-y-3 text-sm font-light">
              {[
                ["#numeros", "O produto"],
                ["#capitulosDestaque", "Lazer"],
                ["#implantacao", "Implantação"],
                ["#localizacao", "Localização"],
                ["#obras", "Obras"],
                ["#plantao", "Plantão de vendas"],
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
          <p className="pt-2">{legal.disclaimer}</p>
        </div>

        <div className="mt-10 flex items-center justify-between text-[11px] text-off-white/40">
          <span>© {new Date().getFullYear()} Granlote Urbanismo. Todos os direitos reservados.</span>
          <span className="tagline-editorial">Gran Reserva Treviso</span>
        </div>
      </div>
    </footer>
  );
}
