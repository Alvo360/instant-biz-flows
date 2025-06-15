
import { Zap } from "lucide-react";
import * as React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-8 z-10 pt-8">
      <div className="glass-card max-w-3xl w-full text-center p-10 flex flex-col items-center gap-6 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg font-playfair leading-tight">
          Automatizo os processos do seu negócio com n8n para você ganhar tempo e escalar
        </h1>
        <p className="text-lg md:text-xl text-slate-300 font-light">
          <span className="font-medium text-white">Atraia mais clientes e responda leads até <b className="text-primary/80">50% mais rápido</b>.</span><br />
          Soluções personalizadas em automação, integrações e inteligência artificial sob medida. Tudo visual, transparente e sem código complexo.
        </p>
        <a
          href="https://wa.me/SEUNUMERO?text=Ol%C3%A1!%20Quero%20uma%20demonstra%C3%A7%C3%A3o%20de%20automa%C3%A7%C3%A3o."
          className="glass-btn flex gap-2 items-center mt-3 shadow-glass text-lg px-8 py-3"
          style={{
            background: "linear-gradient(90deg,#70a1e9 0,#22293d 100%)",
            fontSize: "1.22rem",
          }}
          target="_blank"
          rel="noopener"
        >
          <Zap size={22}/>
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
