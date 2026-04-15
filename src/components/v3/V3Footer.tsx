import Image from "next/image";
import { legal, projeto } from "@/lib/data";

export function V3Footer() {
  return (
    <footer className="bg-earth-deep text-off-white/70">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-24">
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
              Residencial fechado de alto padrão em {projeto.cidade}/{projeto.estado}.
            </p>
            <Image
              src="/logo/granlote-branco.png"
              alt="Granlote Urbanismo"
              width={160}
              height={48}
              className="mt-12 h-10 w-auto opacity-75"
            />
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-ocre-light">
              Realização
            </h4>
            <p className="mt-4 text-xs font-light leading-relaxed text-off-white/55">
              {legal.razaoSocial}
              <br />
              CNPJ {legal.cnpj}
              <br />
              {legal.sede}
            </p>
            <h4 className="mt-8 text-[10px] uppercase tracking-[0.2em] text-ocre-light">
              Gestão de vendas
            </h4>
            <p className="mt-4 text-xs font-light text-off-white/55">
              {legal.vendasEmpresa} — {legal.creci}
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-ocre-light">
              Conformidade
            </h4>
            <ul className="mt-4 space-y-3 text-[11px] font-light leading-relaxed text-off-white/55">
              <li>Registro: {legal.registro}</li>
              <li>Alvará: {legal.alvara}</li>
              <li>GRAPROHAB: {legal.graprohab}</li>
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-off-white/10 pt-10 text-[10px] font-light leading-relaxed text-off-white/40">
          {legal.disclaimer}
        </p>

        <div className="mt-8 flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-off-white/30">
          <span>© {new Date().getFullYear()} Granlote Urbanismo</span>
          <span>Gran Reserva Treviso · Experience</span>
        </div>
      </div>
    </footer>
  );
}
