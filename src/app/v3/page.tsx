import type { Metadata } from "next";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { V3Topbar } from "@/components/v3/V3Topbar";
import { V3Hero } from "@/components/v3/V3Hero";
import { V3HorizontalChapters } from "@/components/v3/V3HorizontalChapters";
import { Galerias } from "@/components/sections/Galerias";
import { V3Numbers } from "@/components/v3/V3Numbers";
import { V3Granlote } from "@/components/v3/V3Granlote";
import { V3Masterplan } from "@/components/v3/V3Masterplan";
import { Localizacao } from "@/components/sections/Localizacao";
import { MapaLocalizacao } from "@/components/sections/MapaLocalizacao";
import { ObrasFotos } from "@/components/sections/ObrasFotos";
import { PlantaoVendas } from "@/components/sections/PlantaoVendas";
import { V3Form } from "@/components/v3/V3Form";
import { V3Footer } from "@/components/v3/V3Footer";

export const metadata: Metadata = {
  title: "Experience · Gran Reserva Treviso",
  description:
    "Gran Reserva Treviso — residencial fechado de alto padrão com 12m de frente em Paulínia/SP. Granlote Urbanismo.",
};

export default function V3Page() {
  return (
    <div className="text-earth-deep">
      <SmoothScroll />
      <V3Topbar />
      <main>
        {/* 1. Produto */}
        <V3Hero />

        {/* 2. Lazer */}
        <V3HorizontalChapters />
        <Galerias />

        {/* 3. Diferenciais */}
        <V3Numbers />
        <V3Granlote />

        {/* 4. Implantação */}
        <V3Masterplan />

        {/* 5. Localização */}
        <Localizacao />
        <MapaLocalizacao />

        {/* 6. Evolução de obras */}
        <ObrasFotos />

        {/* 7. Fale conosco — Plantão */}
        <PlantaoVendas />

        {/* 8. Formulário */}
        <V3Form />
      </main>
      <V3Footer />
      <WhatsAppFab />
    </div>
  );
}
