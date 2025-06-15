import * as React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ComoFuncionaSection from "@/components/sections/ComoFuncionaSection";
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
    <div
      className="relative min-h-screen py-4 px-0 flex flex-col overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 60% 72%, #ff225018 0%, #c21e5530 36%, #1a1823 80%, #000 100%)",
      }}
    >
      {/* Fundo universo neon + n8n flow */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
        {/* SVG translucido do "flow" n8n */}
        <img
          src="/n8n-flow-bg.svg"
          alt="n8n flow background"
          className="absolute inset-0 w-full h-full object-cover opacity-70 select-none"
          style={{
            zIndex: 1,
            pointerEvents: "none",
            mixBlendMode: "lighten",
            objectFit: "cover",
            userSelect: "none"
          }}
          aria-hidden="true"
          loading="eager"
          width={900}
          height={600}
        />
        <div
          className="absolute inset-0 w-full h-full transition-all duration-1000"
          style={{
            background:
              "linear-gradient(120deg, #23263b 0%, #606eec40 50%, #23263b 100%)",
            opacity: 0.85,
            mixBlendMode: "lighten",
          }}
        />
        <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
          {randomStars(40)}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/90 pointer-events-none z-10"></div>
      </div>
      <span className="glow gray"></span>
      <HeroSection />
      <ComoFuncionaSection />
      <OqueAutomatizarSection />
      <CasosReaisSection />
      <DepoimentosSection />
      <SobreSection />
      <ChamadaFinalSection />
      <DicaSection />
      {/* Rodapé discreto, porém chamativo, com assinatura Alvo 360 */}
      <footer className="w-full text-center mt-4 mb-2 z-20">
        <span
          className="
            inline-block
            font-playfair font-extrabold tracking-widest text-xs sm:text-sm uppercase
            px-5 py-1 rounded-full
            bg-gradient-to-r from-[#ff2250] via-[#ed1479] to-[#0A1C3C]
            bg-clip-text text-transparent
            drop-shadow-[0_3px_16px_#ff227088]
            shadow-lg
            transition-transform duration-150 hover:scale-110
            outline-none select-none
          "
          style={{
            letterSpacing: "0.15em",
            textShadow:
              "0 2px 18px #ff224090, 0 1px 1px #ffffff33, 0 0px 6px #ff225099, 0 0px 12px #8a338799",
            filter: "drop-shadow(0 1px 14px #ed147935)",
          }}
        >
          Alvo 360
        </span>
      </footer>
    </div>
  );
};

export default Index;
