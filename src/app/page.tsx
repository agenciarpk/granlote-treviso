import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Numeros } from "@/components/sections/Numeros";
import { Masterplan } from "@/components/sections/Masterplan";
import { CapitulosEditoriais } from "@/components/sections/CapitulosEditoriais";
import { Galeria } from "@/components/sections/Galeria";
import { Localizacao } from "@/components/sections/Localizacao";
import { MapaLocalizacao } from "@/components/sections/MapaLocalizacao";
import { Granlote } from "@/components/sections/Granlote";
import { FormContato } from "@/components/sections/FormContato";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Numeros />
        <Masterplan />
        <CapitulosEditoriais />
        <Galeria />
        <Localizacao />
        <MapaLocalizacao />
        <Granlote />
        <FormContato />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
