"use client";

import { useActionState } from "react";
import { enviarLead, type LeadState } from "@/app/actions";
import { Reveal } from "@/components/ui/Reveal";

const initial: LeadState = { ok: false };

export function V3Form() {
  const [state, action, pending] = useActionState(enviarLead, initial);

  return (
    <section id="v3-form" className="bg-off-white py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal className="text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-ocre">
            Pré-lançamento
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-light leading-[1.05] text-earth-deep md:text-7xl">
            Seja um dos primeiros
            <span className="block italic">a conhecer o Treviso</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-earth md:text-lg">
            Deixe seus dados e um consultor exclusivo apresentará as condições,
            disponibilidade e próximos passos.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-16 max-w-2xl">
          <form
            action={action}
            className="rounded-sm border border-earth-deep/10 bg-sage/40 p-8 backdrop-blur md:p-12"
          >
            {state.ok ? (
              <div className="py-10 text-center">
                <p className="text-[10px] uppercase tracking-[0.25em] text-ocre">Obrigado</p>
                <h3 className="mt-6 font-display text-4xl font-light text-earth-deep">
                  Recebemos seu contato
                </h3>
                <p className="mt-6 text-sm font-light leading-relaxed text-earth">
                  {state.message}
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-6 md:grid-cols-2">
                  <V3Field label="Nome completo" name="nome" type="text" error={state.errors?.nome} />
                  <V3Field label="WhatsApp" name="telefone" type="tel" placeholder="(00) 00000-0000" error={state.errors?.telefone} />
                  <V3Field label="E-mail" name="email" type="email" error={state.errors?.email} />
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.15em] text-earth">
                      Interesse
                    </label>
                    <select
                      name="interesse"
                      defaultValue=""
                      className="mt-3 w-full border-b border-earth-deep/20 bg-transparent py-3 text-earth-deep outline-none transition focus:border-ocre"
                    >
                      <option value="" disabled>Selecione</option>
                      <option value="residencial">Lote residencial</option>
                      <option value="comercial">Lote comercial</option>
                      <option value="investimento">Investimento</option>
                    </select>
                    {state.errors?.interesse && (
                      <p className="mt-2 text-xs text-red-600">{state.errors.interesse}</p>
                    )}
                  </div>
                </div>

                <label className="mt-8 flex items-start gap-3">
                  <input type="checkbox" name="consentimento" className="mt-1 h-4 w-4 accent-ocre" />
                  <span className="text-[11px] font-light leading-relaxed text-earth">
                    Autorizo contato para apresentação do lançamento, conforme LGPD.
                  </span>
                </label>
                {state.errors?.consentimento && (
                  <p className="mt-2 text-xs text-red-600">{state.errors.consentimento}</p>
                )}

                <button
                  type="submit"
                  disabled={pending}
                  className="mt-10 flex w-full items-center justify-center rounded-full bg-earth-deep px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-off-white transition hover:bg-ocre disabled:opacity-60"
                >
                  {pending ? "Enviando..." : "Solicitar apresentação"}
                </button>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function V3Field({
  label,
  name,
  type,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.15em] text-earth">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-earth-deep/20 bg-transparent py-3 text-earth-deep outline-none transition placeholder:text-earth/40 focus:border-ocre"
      />
      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </div>
  );
}
