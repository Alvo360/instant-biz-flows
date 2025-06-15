
import { Zap, CalendarCheck2, Bot, Link2 } from "lucide-react";
import * as React from "react";

const OqueAutomatizarSection = () => {
  return (
    <section className="mt-14 mb-12 z-10 relative">
      <h2
        className="
          text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-center select-none
          font-playfair bg-gradient-to-r from-[#ff2250] via-fuchsia-500 to-[#ed1479] bg-clip-text text-transparent
          drop-shadow-[0_4px_40px_#ff2250cc] px-3 pb-2
          border-b-[3.5px] border-fuchsia-500 max-w-fit mx-auto
          animate-pulse-slow
        "
        style={{
          textShadow: "0 0 32px #ff66c1, 0 0 8px #ed1479",
          letterSpacing: "-0.01em",
          filter: "drop-shadow(0 3px 14px #ff225063)",
        }}
      >
        O que você pode automatizar?
      </h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 px-4 mt-9">
        <div className="glass-card p-6 flex flex-col gap-2 items-start transition-all group hover:scale-[1.03] hover:shadow-fuchsia-600/30 hover:ring-2 hover:ring-fuchsia-500/50">
          <div className="bg-primary/30 p-2 rounded-full mb-2 shadow-lg group-hover:shadow-fuchsia-400/10 transition">
            <Zap size={30} className="text-primary drop-shadow-glow" />
          </div>
          <h3 className="font-semibold text-xl font-playfair text-[#ff2250] group-hover:text-fuchsia-500 transition">
            Fluxos Inteligentes com n8n
          </h3>
          <span className="text-slate-200 text-base font-light">
            Automatizações visuais e flexíveis, sob medida para seu negócio.
          </span>
        </div>
        <div className="glass-card p-6 flex flex-col gap-2 items-start transition-all group hover:scale-[1.03] hover:shadow-fuchsia-600/30 hover:ring-2 hover:ring-fuchsia-500/50">
          <div className="bg-primary/30 p-2 rounded-full mb-2 shadow-lg group-hover:shadow-fuchsia-400/10 transition">
            <CalendarCheck2 size={30} className="text-primary drop-shadow-glow" />
          </div>
          <h3 className="font-semibold text-xl font-playfair text-[#ff2250] group-hover:text-fuchsia-500 transition">
            Agendamento automático
          </h3>
          <span className="text-slate-200 text-base font-light">
            WhatsApp com integração ao Google Calendar e respostas instantâneas.
          </span>
        </div>
        <div className="glass-card p-6 flex flex-col gap-2 items-start transition-all group hover:scale-[1.03] hover:shadow-fuchsia-600/30 hover:ring-2 hover:ring-fuchsia-500/50">
          <div className="bg-primary/30 p-2 rounded-full mb-2 shadow-lg group-hover:shadow-fuchsia-400/10 transition">
            <Bot size={30} className="text-primary drop-shadow-glow" />
          </div>
          <h3 className="font-semibold text-xl font-playfair text-[#ff2250] group-hover:text-fuchsia-500 transition">
            Atendimento Inteligente
          </h3>
          <span className="text-slate-200 text-base font-light">
            Chatbots que entendem, interagem e executam tarefas automáticas.
          </span>
        </div>
        <div className="glass-card p-6 flex flex-col gap-2 items-start transition-all group hover:scale-[1.03] hover:shadow-fuchsia-600/30 hover:ring-2 hover:ring-fuchsia-500/50">
          <div className="bg-primary/30 p-2 rounded-full mb-2 shadow-lg group-hover:shadow-fuchsia-400/10 transition">
            <Link2 size={30} className="text-primary drop-shadow-glow" />
          </div>
          <h3 className="font-semibold text-xl font-playfair text-[#ff2250] group-hover:text-fuchsia-500 transition">
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

