import { Zap, CalendarCheck2, Bot, Link2 } from "lucide-react";
import * as React from "react";

const OqueAutomatizarSection = () => {
  // Estilo dos títulos mais clean e sem vermelho, ícones principais azul-primário
  return (
    <section className="mt-14 mb-12 z-10 relative">
      <h2
        className="
          text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-center select-none
          font-playfair
          px-3 pb-2 max-w-fit mx-auto
          animate-fade-in
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
        O que você pode automatizar?
      </h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 px-4 mt-9">
        <div className="glass-card p-6 flex flex-col gap-2 items-start transition-all group hover:scale-[1.03] hover:shadow-blue-400/20 hover:ring-2 hover:ring-blue-300/45">
          <div className="bg-primary/20 p-2 rounded-full mb-2 shadow-lg group-hover:shadow-blue-200/10 transition">
            <Zap size={30} className="text-primary drop-shadow-glow" />
          </div>
          <h3 className="font-semibold text-xl font-playfair text-[#3085f5] group-hover:text-blue-400 transition">
            Fluxos Inteligentes com n8n
          </h3>
          <span className="text-slate-200 text-base font-light">
            Automatizações visuais e flexíveis, sob medida para seu negócio.
          </span>
        </div>
        <div className="glass-card p-6 flex flex-col gap-2 items-start transition-all group hover:scale-[1.03] hover:shadow-blue-400/20 hover:ring-2 hover:ring-blue-300/45">
          <div className="bg-primary/20 p-2 rounded-full mb-2 shadow-lg group-hover:shadow-blue-200/10 transition">
            <CalendarCheck2 size={30} className="text-primary drop-shadow-glow" />
          </div>
          <h3 className="font-semibold text-xl font-playfair text-[#3085f5] group-hover:text-blue-400 transition">
            Agendamento automático
          </h3>
          <span className="text-slate-200 text-base font-light">
            WhatsApp com integração ao Google Calendar e respostas instantâneas.
          </span>
        </div>
        <div className="glass-card p-6 flex flex-col gap-2 items-start transition-all group hover:scale-[1.03] hover:shadow-blue-400/20 hover:ring-2 hover:ring-blue-300/45">
          <div className="bg-primary/20 p-2 rounded-full mb-2 shadow-lg group-hover:shadow-blue-200/10 transition">
            <Bot size={30} className="text-primary drop-shadow-glow" />
          </div>
          <h3 className="font-semibold text-xl font-playfair text-[#3085f5] group-hover:text-blue-400 transition">
            Atendimento Inteligente
          </h3>
          <span className="text-slate-200 text-base font-light">
            Chatbots que entendem, interagem e executam tarefas automáticas.
          </span>
        </div>
        <div className="glass-card p-6 flex flex-col gap-2 items-start transition-all group hover:scale-[1.03] hover:shadow-blue-400/20 hover:ring-2 hover:ring-blue-300/45">
          <div className="bg-primary/20 p-2 rounded-full mb-2 shadow-lg group-hover:shadow-blue-200/10 transition">
            <Link2 size={30} className="text-primary drop-shadow-glow" />
          </div>
          <h3 className="font-semibold text-xl font-playfair text-[#3085f5] group-hover:text-blue-400 transition">
            Integrações entre ferramentas
          </h3>
          <span className="text-slate-200 text-base font-light">
            WhatsApp, Notion, Trello, CRM, Google, APIs REST e muito mais.
          </span>
        </div>
      </div>
    </section>
  );
};

export default OqueAutomatizarSection;
