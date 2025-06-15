
import * as React from "react";
import HeroSection from "@/components/sections/HeroSection";
import OqueAutomatizarSection from "@/components/sections/OqueAutomatizarSection";
import CasosReaisSection from "@/components/sections/CasosReaisSection";
import DepoimentosSection from "@/components/sections/DepoimentosSection";
import SobreSection from "@/components/sections/SobreSection";
import ChamadaFinalSection from "@/components/sections/ChamadaFinalSection";
import DicaSection from "@/components/sections/DicaSection";

const neonBlobs = [
  // Blobs bem vermelhos/neon para reforçar o efeito
  { style: "top-[-80px] left-[18vw] w-[400px] h-[260px] bg-[#ff2250]/70", blur: "blur-[110px]", opacity: "opacity-90", animate: "animate-pulse-xslow" },
  { style: "top-[270px] right-[8vw] w-[320px] h-[200px] bg-[#ff4c87]/80", blur: "blur-[95px]", opacity: "opacity-60", animate: "animate-pulse-slow" },
  { style: "bottom-[10vh] left-[35vw] w-[520px] h-[320px] bg-[#ed1479]/70", blur: "blur-[130px]", opacity: "opacity-70", animate: "animate-pulse-xslow delay-300" },
  { style: "left-[70vw] bottom-[3vh] w-[170px] h-[120px] bg-[#ff6060]/60", blur: "blur-[100px]", opacity: "opacity-40", animate: "animate-pulse-slow" },
];

function randomStars(num = 36) {
  // Gera estrelas aleatórias (como universo) - pequenas divs absolutely positioned
  const stars = [];
  for (let i = 0; i < num; i++) {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const size = 1 + Math.random() * 1.6;
    const glow = Math.random() > 0.65;
    stars.push(
      <div
        key={i}
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: glow ? "0 0 10px 4px #ff1b57bb, 0 0 19px 7px #fa2b9dea" : undefined,
        }}
        className="absolute bg-white/90 rounded-full opacity-80"
      />
    );
  }
  return stars;
}

const Index = () => {
  return (
    <div className="relative min-h-screen py-8 px-0 flex flex-col overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 60% 72%, #ff225021 0%, #c21e55 36%, #240018 80%, #000 100%)",
        /* O radial-gradient reforça o vermelho neon central e fecha para preto */
      }}
    >
      {/* Fundo universo neon vermelho */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
        {/* Gradiente "neon universe" vermelho/rosa vertical + animação */}
        <div
          className="absolute inset-0 w-full h-full transition-all duration-1000"
          style={{
            background: "linear-gradient(120deg, #2a0015 0%, #ff225097 50%, #ed1479 90%, #30002a 100%)",
            opacity: 0.85,
            mixBlendMode: "lighten",
          }}
        />
        {/* Animar blobs neon */}
        {neonBlobs.map((blob, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${blob.style} ${blob.blur} ${blob.opacity} ${blob.animate}`}
            style={{ filter: "saturate(2.3) brightness(1.27)" }}
          />
        ))}
        {/* "Estrelas" animadas do universo */}
        <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
          {randomStars(40)}
        </div>
        {/* Overlay dark para melhorar contraste/legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/90 pointer-events-none z-10"></div>
      </div>

      {/* Neon lateral "glow" para compor */}
      <span className="glow red"></span>
      <span className="glow gray"></span>
      {/* O azul removido para manter tudo mais vermelho */}

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

