
import { Zap, CalendarCheck2, Bot, Link2 } from "lucide-react";
import { useMagneticScroll } from "@/hooks/useMagneticScroll";
import * as React from "react";

const OqueAutomatizarSection = () => {
  const autoCardsMagneticRef = useMagneticScroll(65);

  return (
    <section ref={autoCardsMagneticRef} className="mt-10 mb-8 z-10">
      <h2 className="text-2xl font-bold text-white mb-7 text-center font-playfair">O que você pode automatizar?</h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 px-4">
        <div className="glass-card p-5 flex flex-col gap-2 items-start">
          <div className="bg-primary/30 p-2 rounded-full mb-2">
            <Zap size={26} className="text-primary" />
          </div>
          <h3 className="font-semibold text-lg">Fluxos Inteligentes com n8n</h3>
          <span className="text-slate-300 text-sm font-light">Automatizações visuais e flexíveis, sob medida para seu negócio.</span>
        </div>
        <div className="glass-card p-5 flex flex-col gap-2 items-start">
          <div className="bg-primary/30 p-2 rounded-full mb-2">
            <CalendarCheck2 size={26} className="text-primary" />
          </div>
          <h3 className="font-semibold text-lg">Agendamento automático</h3>
          <span className="text-slate-300 text-sm font-light">WhatsApp com integração ao Google Calendar e respostas instantâneas.</span>
        </div>
        <div className="glass-card p-5 flex flex-col gap-2 items-start">
          <div className="bg-primary/30 p-2 rounded-full mb-2">
            <Bot size={26} className="text-primary" />
          </div>
          <h3 className="font-semibold text-lg">Atendimento Inteligente</h3>
          <span className="text-slate-300 text-sm font-light">Chatbots que entendem, interagem e executam tarefas automáticas.</span>
        </div>
        <div className="glass-card p-5 flex flex-col gap-2 items-start">
          <div className="bg-primary/30 p-2 rounded-full mb-2">
            <Link2 size={26} className="text-primary" />
          </div>
          <h3 className="font-semibold text-lg">Integrações entre ferramentas</h3>
          <span className="text-slate-300 text-sm font-light">WhatsApp, Notion, Trello, CRM, Google, APIs REST e muito mais.</span>
        </div>
      </div>
    </section>
  );
};

export default OqueAutomatizarSection;
