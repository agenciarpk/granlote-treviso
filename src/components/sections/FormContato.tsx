"use client";

import { useActionState } from "react";
import Image from "next/image";
import { enviarLead, type LeadState } from "@/app/actions";
import { Reveal } from "@/components/ui/Reveal";

const initialState: LeadState = { ok: false };

export function FormContato() {
  const [state, action, pending] = useActionState(enviarLead, initialState);

  return (
    <section id="contato" className="relative overflow-hidden bg-earth-deep">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/voo-clube-1920.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-deep via-earth-deep/80 to-earth-deep" />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] gap-16 px-6 py-28 md:grid-cols-12 md:px-12 md:py-40">
        <Reveal className="md:col-span-6">
          <p className="tagline-editorial text-ocre-light">pré-lançamento</p>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] text-off-white md:text-7xl">
            Seja um dos
            <span className="block italic text-off-white/80">primeiros a conhecer</span>
          </h2>
          <p className="mt-8 max-w-md text-base font-light leading-relaxed text-off-white/75 md:text-lg">
            Deixe seus dados e um consultor exclusivo apresentará as condições, disponibilidade
            e próximos passos do lançamento Gran Reserva Treviso.
          </p>

          <div className="mt-12 space-y-4 text-off-white/70">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-ocre-light" />
              <span className="text-sm font-light">Atendimento personalizado</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-ocre-light" />
              <span className="text-sm font-light">Tour guiado ao plantão</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-ocre-light" />
              <span className="text-sm font-light">Condições exclusivas de pré-lançamento</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-6">
          <form
            action={action}
            className="rounded-sm bg-off-white p-8 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] md:p-10"
          >
            {state.ok ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ocre/10 text-ocre">
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 font-display text-3xl font-light text-earth-deep">
                  Obrigado!
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-earth">
                  {state.message}
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-6">
                  <Field
                    label="Nome completo"
                    name="nome"
                    type="text"
                    placeholder="Seu nome"
                    error={state.errors?.nome}
                  />
                  <Field
                    label="WhatsApp"
                    name="telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    error={state.errors?.telefone}
                  />
                  <Field
                    label="E-mail"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    error={state.errors?.email}
                  />
                  <div>
                    <label className="block text-xs uppercase tracking-[0.12em] text-earth">
                      Interesse
                    </label>
                    <select
                      name="interesse"
                      defaultValue=""
                      className="mt-2 w-full border-b border-earth/20 bg-transparent py-3 text-base text-earth-deep outline-none transition focus:border-ocre"
                    >
                      <option value="" disabled>
                        Selecione
                      </option>
                      <option value="residencial">Lote residencial</option>
                      <option value="comercial">Lote comercial</option>
                      <option value="investimento">Investimento</option>
                    </select>
                    {state.errors?.interesse && (
                      <p className="mt-2 text-xs text-red-600">{state.errors.interesse}</p>
                    )}
                  </div>

                  <label className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      name="consentimento"
                      className="mt-1 h-4 w-4 accent-ocre"
                    />
                    <span className="text-[12px] font-light leading-relaxed text-earth">
                      Autorizo o contato da Gran Reserva Treviso e da Granlote Urbanismo para
                      apresentação do lançamento, de acordo com a{" "}
                      <a href="#" className="underline underline-offset-2">
                        LGPD
                      </a>
                      .
                    </span>
                  </label>
                  {state.errors?.consentimento && (
                    <p className="-mt-4 text-xs text-red-600">{state.errors.consentimento}</p>
                  )}
                </div>

                {state.message && !state.ok && (
                  <p className="mt-6 text-sm text-red-600">{state.message}</p>
                )}

                <button
                  type="submit"
                  disabled={pending}
                  className="mt-10 flex w-full items-center justify-center rounded-full bg-ocre px-8 py-4 text-[12px] tracking-[0.15em] uppercase text-off-white transition hover:bg-ocre-deep disabled:opacity-70"
                >
                  {pending ? "Enviando..." : "Quero conhecer"}
                </button>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
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
      <label className="block text-xs uppercase tracking-[0.12em] text-earth">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-earth/20 bg-transparent py-3 text-base text-earth-deep outline-none transition placeholder:text-earth/30 focus:border-ocre"
      />
      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </div>
  );
}
