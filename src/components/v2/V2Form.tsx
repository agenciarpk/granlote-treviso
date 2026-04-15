"use client";

import { useActionState } from "react";
import Image from "next/image";
import { enviarLead, type LeadState } from "@/app/actions";

const initial: LeadState = { ok: false };

export function V2Form() {
  const [state, action, pending] = useActionState(enviarLead, initial);

  return (
    <section id="v2-form" className="relative overflow-hidden border-t border-off-white/10">
      <Image
        src="/images/voo-clube-1920.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-earth-deep via-earth-deep/90 to-earth-deep/80" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-32 md:px-12 md:py-48">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-ocre-light">
              08 — Contato
            </p>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.02] text-off-white md:text-7xl">
              Seja um dos
              <span className="block italic text-off-white/70">primeiros</span>
            </h2>
            <p className="mt-10 max-w-sm text-base font-light leading-[1.9] text-off-white/70">
              Deixe seus dados e um consultor exclusivo apresentará as condições, disponibilidade
              e próximos passos do pré-lançamento.
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <form action={action}>
              {state.ok ? (
                <div className="border border-ocre-light/30 p-10 text-center">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-ocre-light">
                    Obrigado
                  </p>
                  <h3 className="mt-6 font-display text-4xl font-light text-off-white">
                    Recebemos seu contato
                  </h3>
                  <p className="mt-6 text-sm font-light leading-relaxed text-off-white/70">
                    {state.message}
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  <DarkField
                    label="Nome completo"
                    name="nome"
                    type="text"
                    error={state.errors?.nome}
                  />
                  <DarkField
                    label="WhatsApp"
                    name="telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    error={state.errors?.telefone}
                  />
                  <DarkField
                    label="E-mail"
                    name="email"
                    type="email"
                    error={state.errors?.email}
                  />
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-off-white/50">
                      Interesse
                    </label>
                    <select
                      name="interesse"
                      defaultValue=""
                      className="mt-3 w-full border-b border-off-white/20 bg-transparent py-3 text-off-white outline-none transition focus:border-ocre-light [&>option]:bg-earth-deep"
                    >
                      <option value="" disabled>
                        Selecione
                      </option>
                      <option value="residencial">Lote residencial</option>
                      <option value="comercial">Lote comercial</option>
                      <option value="investimento">Investimento</option>
                    </select>
                    {state.errors?.interesse && (
                      <p className="mt-2 text-xs text-red-400">{state.errors.interesse}</p>
                    )}
                  </div>

                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consentimento"
                      className="mt-1 h-4 w-4 accent-ocre-light"
                    />
                    <span className="text-[11px] font-light leading-relaxed text-off-white/55">
                      Autorizo contato da Gran Reserva Treviso e da Granlote Urbanismo para
                      apresentação do lançamento, conforme LGPD.
                    </span>
                  </label>

                  {state.errors?.consentimento && (
                    <p className="text-xs text-red-400">{state.errors.consentimento}</p>
                  )}

                  <button
                    type="submit"
                    disabled={pending}
                    className="group mt-4 flex items-center gap-4 border-b border-ocre-light pb-3 text-[11px] uppercase tracking-[0.22em] text-ocre-light transition hover:text-off-white disabled:opacity-50"
                  >
                    {pending ? "Enviando..." : "Enviar solicitação"}
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function DarkField({
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
      <label className="block text-[10px] uppercase tracking-[0.2em] text-off-white/50">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-off-white/20 bg-transparent py-3 text-off-white outline-none transition placeholder:text-off-white/25 focus:border-ocre-light"
      />
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}
