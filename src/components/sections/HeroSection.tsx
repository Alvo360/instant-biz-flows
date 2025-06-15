
import { Zap } from "lucide-react";
// Removido: import { useMagneticScroll } from "@/hooks/useMagneticScroll";
import * as React from "react";

const HeroSection = () => {
  // Removido: const heroMagneticRef = useMagneticScroll(85);

  return (
    <section className="flex flex-col items-center gap-8 z-10 pt-8">
      <div className="glass-card max-w-3xl w-full text-center p-10 flex flex-col items-center gap-5">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg mb-2 font-playfair">
          Automatize seu Negócio com Inteligência e Estilo
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 font-light mb-2">
          <span className="font-medium text-white">Processos mais simples, tempo valorizado.</span> <br />
          Soluções personalizadas em automação com <b>n8n</b>, <b>Inteligência Artificial</b>, <b>APIs</b> e integrações sob medida.
        </p>
        <a
          href="https://wa.me/SEUNUMERO?text=Ol%C3%A1!%20Tenho%20interesse%20em%20automatizar%20meu%20neg%C3%B3cio."
          className="glass-btn flex gap-2 items-center mt-3 shadow-glass"
          target="_blank" rel="noopener"
        >
          <Zap size={22}/> 🚀 Fale pelo WhatsApp
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

