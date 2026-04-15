"use server";

import { z } from "zod";

const LeadSchema = z.object({
  nome: z.string().min(2, "Informe seu nome completo"),
  telefone: z
    .string()
    .min(10, "Informe um telefone válido com DDD")
    .regex(/^[\d\s()+-]+$/, "Use apenas números"),
  email: z.string().email("E-mail inválido"),
  interesse: z.enum(["residencial", "comercial", "investimento"], {
    message: "Selecione um interesse",
  }),
  consentimento: z.literal("on", {
    message: "É necessário aceitar os termos de contato",
  }),
});

export type LeadState = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string>;
};

export async function enviarLead(
  _prev: LeadState,
  formData: FormData
): Promise<LeadState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = LeadSchema.safeParse(raw);

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const path = issue.path[0] as string;
      if (!errors[path]) errors[path] = issue.message;
    }
    return { ok: false, errors, message: "Revise os campos destacados." };
  }

  const lead = parsed.data;

  // TODO: integrar com CRM real (RD Station / HubSpot / webhook)
  // Por enquanto, só loga no servidor e retorna sucesso.
  console.log("[LEAD RECEBIDO] Gran Reserva Treviso", {
    ...lead,
    timestamp: new Date().toISOString(),
  });

  // Simula latência de rede
  await new Promise((r) => setTimeout(r, 600));

  return {
    ok: true,
    message:
      "Recebemos seu contato. Em instantes um consultor do Gran Reserva Treviso falará com você.",
  };
}
