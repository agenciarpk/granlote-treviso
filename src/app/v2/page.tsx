import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { V2Sidebar } from "@/components/v2/V2Sidebar";
import { V2Hero } from "@/components/v2/V2Hero";
import { V2Manifesto } from "@/components/v2/V2Manifesto";
import { V2Stats } from "@/components/v2/V2Stats";
import { V2Chapters } from "@/components/v2/V2Chapters";
import { V2Masterplan } from "@/components/v2/V2Masterplan";
import { V2Gallery } from "@/components/v2/V2Gallery";
import { V2Location } from "@/components/v2/V2Location";
import { V2Granlote } from "@/components/v2/V2Granlote";
import { V2Form } from "@/components/v2/V2Form";
import { V2Footer } from "@/components/v2/V2Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial · Gran Reserva Treviso",
  description:
    "Versão editorial cinematográfica do lançamento Gran Reserva Treviso — Granlote Urbanismo em Paulínia/SP.",
};

export default function V2Page() {
  return (
    <div className="relative bg-earth-deep text-off-white">
      <SmoothScroll />
      <V2Sidebar />
      <main className="lg:ml-[100px]">
        <V2Hero />
        <V2Manifesto />
        <V2Stats />
        <V2Masterplan />
        <V2Chapters />
        <V2Gallery />
        <V2Location />
        <V2Granlote />
        <V2Form />
      </main>
      <V2Footer />
      <WhatsAppFab />
    </div>
  );
}
