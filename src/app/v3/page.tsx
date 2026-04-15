import type { Metadata } from "next";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { V3Topbar } from "@/components/v3/V3Topbar";
import { V3Hero } from "@/components/v3/V3Hero";
import { V3Manifesto } from "@/components/v3/V3Manifesto";
import { V3Numbers } from "@/components/v3/V3Numbers";
import { V3HorizontalChapters } from "@/components/v3/V3HorizontalChapters";
import { V3Masterplan } from "@/components/v3/V3Masterplan";
import { V3Map } from "@/components/v3/V3Map";
import { V3Mosaic } from "@/components/v3/V3Mosaic";
import { V3Granlote } from "@/components/v3/V3Granlote";
import { V3Form } from "@/components/v3/V3Form";
import { V3Footer } from "@/components/v3/V3Footer";

export const metadata: Metadata = {
  title: "Experience · Gran Reserva Treviso",
  description:
    "Versão experience do lançamento Gran Reserva Treviso — layout split, scroll horizontal e narrativa interativa. Granlote Urbanismo em Paulínia/SP.",
};

export default function V3Page() {
  return (
    <div className="bg-sage text-earth-deep">
      <SmoothScroll />
      <V3Topbar />
      <main>
        <V3Hero />
        <V3Manifesto />
        <V3Numbers />
        <V3HorizontalChapters />
        <V3Masterplan />
        <V3Mosaic />
        <V3Map />
        <V3Granlote />
        <V3Form />
      </main>
      <V3Footer />
      <WhatsAppFab />
    </div>
  );
}
