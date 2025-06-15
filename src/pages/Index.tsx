
import * as React from "react";
import HeroSection from "@/components/sections/HeroSection";
import OqueAutomatizarSection from "@/components/sections/OqueAutomatizarSection";
import CasosReaisSection from "@/components/sections/CasosReaisSection";
import DepoimentosSection from "@/components/sections/DepoimentosSection";
import SobreSection from "@/components/sections/SobreSection";
import ChamadaFinalSection from "@/components/sections/ChamadaFinalSection";
import DicaSection from "@/components/sections/DicaSection";

const Index = () => {
  return (
    <div className="relative min-h-screen py-8 px-0 bg-transparent flex flex-col">
      <span className="glow blue"></span>
      <span className="glow red"></span>
      <span className="glow gray"></span>

      <HeroSection />
      <OqueAutomatizarSection />
      <CasosReaisSection />
      <DepoimentosSection />
      <SobreSection />
      <ChamadaFinalSection />
      <DicaSection />
    </div>
  );
};

export default Index;
