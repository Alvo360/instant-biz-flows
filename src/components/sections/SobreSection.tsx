import { Brain, Zap, Link2, Users2 } from "lucide-react";
import * as React from "react";

const SobreSection = () => (
  <section className="mt-20 z-10 flex justify-center px-4">
    <div className="glass-card max-w-3xl w-full p-10 flex flex-col gap-3 items-center text-center">
      <h2
        className="
          text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-center select-none
          font-playfair px-3 pb-2 max-w-fit mx-auto animate-fade-in
        "
        style={{
          color: "#ececf3",
          textShadow: "0 3px 24px #3d3d5a55",
          letterSpacing: "-0.01em",
          borderBottom: "3.5px solid #789ff5",
          background: "none",
          filter: "none"
        }}
      >
        Sobre mim
      </h2>
      <p className="text-slate-200 text-base font-light mb-2">
        Sou especialista em <b>automação inteligente para negócios</b>.<br/>
        Minha missão é entregar soluções que simplificam rotinas e geram resultados reais.
      </p>
      <div className="flex flex-wrap gap-4 justify-center mb-2 text-primary text-lg">
        <span className="inline-flex items-center gap-1"><Brain size={18}/> n8n</span>
        <span className="inline-flex items-center gap-1"><Zap size={16}/> Make</span>
        <span className="inline-flex items-center gap-1"><Link2 size={16}/> UltraMsg, APIs REST</span>
        <span className="inline-flex items-center gap-1"><Users2 size={16}/> Notion, Trello</span>
      </div>
      <div className="text-slate-300 text-sm">
        <span>🚀 Atendo desde pequenas automações até integrações completas.<br /></span>
        <span>🔧 Explico tudo de forma visual, simples e transparente.</span>
      </div>
    </div>
  </section>
);

export default SobreSection;
