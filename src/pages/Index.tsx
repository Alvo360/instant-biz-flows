
import * as React from "react";
import HeroSection from "@/components/sections/HeroSection";
import OqueAutomatizarSection from "@/components/sections/OqueAutomatizarSection";
import CasosReaisSection from "@/components/sections/CasosReaisSection";
import DepoimentosSection from "@/components/sections/DepoimentosSection";
import SobreSection from "@/components/sections/SobreSection";
import ChamadaFinalSection from "@/components/sections/ChamadaFinalSection";
import DicaSection from "@/components/sections/DicaSection";

// Lista de imagens de fundo (carrossel simples por fade, mas sem dependências)
const bgImages = [
  "/lovable-uploads/c27796a4-dcae-4df2-9d46-2ebfd5d902f7.png",
  "/lovable-uploads/0f6df044-af7e-4c43-afdd-5109b853b865.png",
  "/lovable-uploads/7de36bfa-a9e0-4bfb-bdbc-44038d2f08ef.png",
];

const Index = () => {
  const [current, setCurrent] = React.useState(0);

  // Troca automática de imagens a cada 12s
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % bgImages.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen py-8 px-0 bg-transparent flex flex-col overflow-hidden">
      {/* Fundo com as imagens do usuário */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
        {bgImages.map((url, idx) => (
          <img
            key={url}
            src={url}
            alt="N8N visual background"
            className={`transition-opacity duration-1000 ease-in-out object-cover w-full h-full absolute inset-0
               ${current === idx ? "opacity-100" : "opacity-0"}
            `}
            style={{
              zIndex: 1 + idx,
              transitionProperty: "opacity",
            }}
            draggable={false}
          />
        ))}
        {/* Overlay escuro para leitura (ajuste se quiser mais ou menos contraste!) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 pointer-events-none z-20"></div>
      </div>

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
