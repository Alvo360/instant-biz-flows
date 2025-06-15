
import * as React from "react";
import { Workflow, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="text-primary w-8 h-8 mb-2" />,
    title: "Entendimento",
    desc: "Conversamos para entender suas necessidades e desafios.",
  },
  {
    icon: <Workflow className="text-primary w-8 h-8 mb-2" />,
    title: "Planejamento & Solução",
    desc: "Desenvolvemos um plano de automação personalizado e apresentamos a solução.",
  },
  {
    icon: <Rocket className="text-primary w-8 h-8 mb-2" />,
    title: "Implementação & Acompanhamento",
    desc: "Implementamos as automações e oferecemos suporte contínuo.",
  },
];

const ComoFuncionaSection = () => (
  <section className="mt-12 mb-4 flex flex-col items-center z-10 px-2">
    <div className="glass-card max-w-4xl w-full p-7 md:p-10 flex flex-col gap-6 items-center text-center shadow-card">
      <h2 className="text-2xl md:text-3xl font-bold font-playfair text-white tracking-tight mb-3">
        Como Funciona
      </h2>
      <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-stretch">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="flex-1 flex flex-col items-center rounded-xl bg-black/15 p-4 md:p-6 shadow-md hover:shadow-blue-500/30 transition-shadow duration-200 border border-slate-700/15"
          >
            <div className="mb-2">{step.icon}</div>
            <div className="text-lg font-semibold text-white mb-1">{`${idx + 1}. ${step.title}`}</div>
            <div className="text-slate-300 text-sm">{step.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComoFuncionaSection;
