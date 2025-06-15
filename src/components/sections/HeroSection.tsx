
import { Zap } from "lucide-react";
import * as React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-6 z-10 pt-8 px-2 md:px-0">
      <div className="glass-card max-w-3xl w-full text-center p-6 md:p-10 flex flex-col items-center gap-4 md:gap-6 animate-fade-in">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg font-playfair leading-tight mb-2 md:mb-4">
          Automatizo os processos do seu negócio com n8n para você ganhar tempo e escalar
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light mb-1">
          <span className="font-medium text-white">
            Atraia mais clientes e responda leads até{" "}
            <b className="text-primary/80">50% mais rápido</b>.
          </span>
          <br />
          Soluções personalizadas em automação, integrações e inteligência artificial sob medida. Tudo visual, transparente e sem código complexo.
        </p>
        <a
          href="https://wa.me/SEUNUMERO?text=Ol%C3%A1!%20Quero%20uma%20demonstra%C3%A7%C3%A3o%20de%20automa%C3%A7%C3%A3o."
          className="glass-btn flex gap-2 items-center mt-3 shadow-glass text-base xs:text-lg px-8 py-4 md:py-3"
          style={{
            background: "linear-gradient(90deg,#70a1e9 0,#22293d 100%)",
            fontSize: "1.2rem",
            minHeight: "58px",
            minWidth: "220px",
            borderRadius: "2.2rem",
            boxShadow: "0 2px 12px #4386e685"
          }}
          target="_blank"
          rel="noopener"
        >
          <Zap size={24} />
          🚀 Solicite uma demo grátis
        </a>
        <div className="flex flex-wrap gap-2 justify-center text-xs mt-4 text-slate-400 font-normal">
          <span className="px-3 py-1 rounded bg-black/20 backdrop-blur-sm">Atendimento <b>pessoal</b> e <b>rápido</b></span>
          <span className="px-3 py-1 rounded bg-black/15">Integrações com WhatsApp, E-mail, CRM e mais</span>
          <span className="px-3 py-1 rounded bg-black/10">Demonstrações práticas, sem compromisso</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
