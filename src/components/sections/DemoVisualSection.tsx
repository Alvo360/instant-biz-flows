
import * as React from "react";
import { Video, MessageSquare, Users2, Link2 } from "lucide-react";

const commonFlows = [
  {
    icon: <MessageSquare size={20} className="text-primary" />,
    title: "WhatsApp Automatizado",
    desc: "Bots de atendimento, disparo, respostas inteligentes."
  },
  {
    icon: <Users2 size={20} className="text-primary" />,
    title: "CRM Integrado",
    desc: "Contatos e status sempre atualizados com automações."
  },
  {
    icon: <Link2 size={20} className="text-primary" />,
    title: "Integrações E-mail/Planilhas",
    desc: "Envio automático, extração e cadastro via formulários."
  },
];

const DemoVisualSection = () => {
  return (
    <section className="relative z-10 flex justify-center pt-10 px-4 pb-6">
      <div className="glass-card max-w-4xl w-full flex flex-col md:flex-row gap-8 items-center justify-center p-8">
        {/* Coluna Vídeo + GIF */}
        <div className="flex flex-col gap-5 flex-1 items-center justify-center">
          <h2 className="font-playfair font-bold text-2xl md:text-3xl text-white mb-1">Demonstração Visual</h2>
          {/* Vídeo TikTok responsivo */}
          <div className="w-full max-w-[340px] aspect-[9/16] rounded-xl overflow-hidden border border-slate-700 shadow-lg bg-black/40">
            <iframe
              src="https://www.tiktok.com/embed/v2/7515575075769175352"
              title="Demonstração n8n TikTok"
              width="100%"
              height="100%"
              allow="encrypted-media"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
              style={{ minHeight: 380 }}
            />
          </div>
          {/* GIF animado de painel ou fluxo */}
          <div className="w-full max-w-[340px] flex flex-col gap-2 items-center mt-2">
            <span className="text-xs text-slate-400">Exemplo de painel n8n em ação:</span>
            <img
              src="/lovable-uploads/7de36bfa-a9e0-4bfb-bdbc-44038d2f08ef.png"
              alt="Fluxo n8n animado"
              className="rounded-lg border border-muted object-cover shadow-md w-full max-w-xs"
            />
          </div>
        </div>
        {/* Coluna Templates/Fluxos */}
        <div className="flex-1 min-w-[220px] flex flex-col items-center justify-center gap-4">
          <div className="flex flex-row md:flex-col gap-4 w-full">
            {commonFlows.map((flow, idx) => (
              <div key={idx} className="bg-black/25 rounded-xl p-5 flex flex-col gap-1 shadow-md border border-slate-700 w-[200px] hover:scale-105 transition-transform duration-200">
                <div className="flex items-center gap-2">{flow.icon}
                  <span className="font-semibold text-base text-white">{flow.title}</span>
                </div>
                <span className="text-slate-300 text-sm">{flow.desc}</span>
              </div>
            ))}
          </div>
          <a href="https://wa.me/SEUNUMERO?text=Ol%C3%A1!%20Quero%20entender%20fluxos%20de%20automação%20no%20meu%20negócio."
            className="glass-btn mt-4 text-base flex gap-2 items-center"
            target="_blank" rel="noopener"
            style={{ fontSize: "1.06rem", padding: "0.85rem 2.1rem" }}
          >
            <Video size={21} /> Solicite um exemplo para seu cenário
          </a>
        </div>
      </div>
    </section>
  );
};
export default DemoVisualSection;
