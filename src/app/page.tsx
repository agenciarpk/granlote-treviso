import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { BackToTop } from "@/components/ui/BackToTop";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CapitulosEditoriais } from "@/components/sections/CapitulosEditoriais";
import { Galerias } from "@/components/sections/Galerias";
import { Numeros } from "@/components/sections/Numeros";
import { Granlote } from "@/components/sections/Granlote";
import { Masterplan } from "@/components/sections/Masterplan";
import { Localizacao } from "@/components/sections/Localizacao";
import { MapaLocalizacao } from "@/components/sections/MapaLocalizacao";
import { ObrasFotos } from "@/components/sections/ObrasFotos";
import { FormContato } from "@/components/sections/FormContato";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        {/* 1. Produto */}
        <Hero />

        {/* 2. Lazer */}
        <CapitulosEditoriais />
        <Galerias />

        {/* 3. Dados do empreendimento */}
        <Numeros />

        {/* 4. Implantação */}
        <Masterplan />

        {/* 5. Localização */}
        <Localizacao />
        <MapaLocalizacao />

        {/* 6. Evolução de obras */}
        <ObrasFotos />

        {/* 7. Formulário */}
        <FormContato />

        {/* 8. Quem somos */}
        <Granlote />
      </main>
      <Footer />
      <WhatsAppFab />
      <BackToTop />
    </>
  );
}
