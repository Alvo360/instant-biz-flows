
import * as React from "react";
import HeroSection from "@/components/sections/HeroSection";
import OqueAutomatizarSection from "@/components/sections/OqueAutomatizarSection";
import CasosReaisSection from "@/components/sections/CasosReaisSection";
import DepoimentosSection from "@/components/sections/DepoimentosSection";
import SobreSection from "@/components/sections/SobreSection";
import ChamadaFinalSection from "@/components/sections/ChamadaFinalSection";
import DicaSection from "@/components/sections/DicaSection";

const neonBlobs = [
  { style: "top-[-80px] left-[20vw] w-[360px] h-[250px] bg-pink-600/80", blur: "blur-[120px]", opacity: "opacity-70", animate: "animate-pulse-slow" },
  { style: "top-[260px] right-[10vw] w-[340px] h-[220px] bg-rose-700/80", blur: "blur-[110px]", opacity: "opacity-90", animate: "animate-pulse-xslow" },
  { style: "bottom-[14vh] left-[30vw] w-[440px] h-[250px] bg-fuchsia-700/70", blur: "blur-[130px]", opacity: "opacity-80", animate: "animate-pulse-xslow delay-300" },
  { style: "left-[70vw] bottom-[8vh] w-[160px] h-[110px] bg-pink-500/80", blur: "blur-[100px]", opacity: "opacity-50", animate: "animate-pulse-slow" },
];

function randomStars(num = 32) {
  // Gera estrelas aleatórias (como universo) - pequenas divs absolutely positioned
  const stars = [];
  for (let i = 0; i < num; i++) {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const size = 1 + Math.random() * 2;
    const glow = Math.random() > 0.7;
    stars.push(
      <div
        key={i}
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: glow ? `0 0 7px 2px #f43f5e99` : undefined,
        }}
        className="absolute bg-white/90 rounded-full opacity-80"
      />
    );
  }
  return stars;
}

const Index = () => {
  return (
    <div className="relative min-h-screen py-8 px-0 bg-black flex flex-col overflow-hidden">
      {/* Fundo universo neon vermelho */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
        {/* Gradiente "neon universe" vermelho vertical */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-pink-900 via-60% to-fuchsia-900 transition-all duration-1000" />
        {/* Animar blobs neon */}
        {neonBlobs.map((blob, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${blob.style} ${blob.blur} ${blob.opacity} ${blob.animate}`}
            style={{ filter: "saturate(1.6) brightness(1.2)" }}
          />
        ))}
        {/* "Estrelas" animadas do universo */}
        <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
          {randomStars(36)}
        </div>
        {/* Overlay escuro para leitura */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 pointer-events-none z-10"></div>
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
