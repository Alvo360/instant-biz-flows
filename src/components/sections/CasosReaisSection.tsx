
import { Users2, Scissors, MessageSquare, ThumbsUp } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import * as React from "react";

// Casos reais (pode ser movido para um arquivo data...)
const cases = [
  {
    icon: <Users2 size={20} />,
    title: "Loja automatizada com WhatsApp",
    color: "#0A1C3C", // atualizado
    desc: (
      <>
        <b>Desafio:</b> Loja online gastando muito tempo atendendo manualmente clientes no WhatsApp.<br />
        <b>Solução:</b> Criação de bot usando n8n integrado ao WhatsApp, automatizando todo o fluxo de atendimento.<br />
        <b>Resultado:</b> Atendimentos 100% automáticos, zero travamento e ótimos feedbacks de clientes.
      </>
    ),
    thumb: {
      label: "🖼️ Print real de depoimento de cliente da loja:",
      src: "/lovable-uploads/8a24b4e6-dcd2-4e52-bdd6-a93f56b5c877.png",
      alt: "Depoimento Loja WhatsApp"
    }
  },
  {
    icon: <Scissors size={20} />,
    title: "Barbearia com agendamento automático",
    color: "#0A1C3C", // atualizado
    desc: (
      <>
        <b>Desafio:</b> Barbearia perdendo horários por falta de organização nos agendamentos.<br />
        <b>Solução:</b> Integração do WhatsApp com agenda e notificações automáticas usando n8n.<br />
        <b>Resultado:</b> Agendas lotadas sem esforço manual e clientes elogiando a praticidade.
      </>
    ),
    thumb: {
      label: "🖼️ Print real do feedback no WhatsApp:",
      src: "/lovable-uploads/2190f266-8ef3-48c7-b3f4-c475c1bac78b.png",
      alt: "Feedback Barbearia WhatsApp"
    }
  },
  {
    icon: <MessageSquare size={20} />,
    title: "Pix mais rápido via WhatsApp",
    color: "#0A1C3C", // atualizado
    desc: (
      <>
        <b>Desafio:</b> Receber pagamentos e confirmações de agendamento de forma manual, demorando para os clientes e para o negócio.<br />
        <b>Solução:</b> Automatização total do processo: agendamento envia o QR Code do Pix e confirma horários automaticamente pelo WhatsApp.<br />
        <b>Resultado:</b> Dados e comprovantes recebidos em minutos, com feedback positivo dos clientes.
      </>
    ),
    thumb: {
      label: "🖼️ Print real da conversa automatizada Pix:",
      src: "/lovable-uploads/c913bbf4-7caa-46d7-9a45-c0f06262e363.png",
      alt: "Conversa de feedback Pix WhatsApp"
    }
  },
  // --- NOVOS CASOS REAIS COM OS PRINTS ENVIADOS
  {
    icon: <ThumbsUp size={20} />,
    title: "Automação de energia - Revolt Cliente",
    color: "#0A1C3C", // atualizado
    desc: (
      <>
        <b>Desafio:</b> Otimizar e economizar energia com automação sob medida.<br />
        <b>Resultado:</b> "Tudo rodando liso e sem dor de cabeça. Muito obrigado!"
      </>
    ),
    thumb: {
      label: "🖼️ Print de conversa real - Revolt Cliente:",
      src: "/lovable-uploads/9d44c6ab-18b5-4f8c-bba4-a60a36deda7f.png",
      alt: "Depoimento Revolt Cliente"
    }
  },
  {
    icon: <ThumbsUp size={20} />,
    title: "Site & Estoque - UR Perfumes",
    color: "#0A1C3C", // atualizado
    desc: (
      <>
        <b>Desafio:</b> Automatizar vendas e estoque para não perder oportunidades.<br />
        <b>Resultado:</b> "Um alívio real. Não perde mais venda e o envio tá rápido. Funcionando foda. Vlw mesmo!"
      </>
    ),
    thumb: {
      label: "🖼️ Print de conversa real - UR Perfumes:",
      src: "/lovable-uploads/7bf769f2-f0ab-493b-8a3e-e150756ccff9.png",
      alt: "Depoimento UR Perfumes"
    }
  },
  {
    icon: <ThumbsUp size={20} />,
    title: "Leads automáticos - Vori SP",
    color: "#0A1C3C", // atualizado
    desc: (
      <>
        <b>Desafio:</b> Automatizar captação e resposta de leads.<br />
        <b>Resultado:</b> "Contatos agora caem já com resposta pronta. Tá voando, valeu!"
      </>
    ),
    thumb: {
      label: "🖼️ Print de conversa real - Vori SP:",
      src: "/lovable-uploads/7d28f03c-1329-403b-91b8-47ee2137ddd0.png",
      alt: "Depoimento Vori SP"
    }
  },
  {
    icon: <ThumbsUp size={20} />,
    title: "Rotina otimizada - Diana Salvador",
    color: "#0A1C3C", // atualizado
    desc: (
      <>
        <b>Desafio:</b> Ganhar tempo automatizando o que era repetitivo.<br />
        <b>Resultado:</b> "O sistema salvou a rotina da equipe. Agora tá tudo no automático."
      </>
    ),
    thumb: {
      label: "🖼️ Print de conversa real - Diana Salvador:",
      src: "/lovable-uploads/f53f6c81-6fa2-4069-b903-9830aa8bf4d7.png",
      alt: "Depoimento Diana Salvador"
    }
  },
];

const AUTO_PLAY_DELAY = 8000; // 8 segundos

const CasosReaisSection = () => {
  const [casesEmbla, setCasesEmbla] = React.useState<any>(null);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (!casesEmbla) return;
    let timeout: any = null;

    const play = () => {
      if (!paused) {
        timeout = setTimeout(() => {
          casesEmbla.scrollNext();
        }, AUTO_PLAY_DELAY);
      }
    };
    casesEmbla.on("select", play);
    play();

    return () => {
      casesEmbla.off("select", play);
      clearTimeout(timeout);
    };
  }, [casesEmbla, paused]);

  // handlers para pausar ao pressionar/clicar/tocar no carrossel
  const handlePointerDown = () => setPaused(true);
  const handlePointerUp = () => setPaused(false);
  const handleMouseLeave = () => setPaused(false);

  return (
    <section className="mt-12 z-10">
      <h2 className="text-2xl font-bold text-white mb-7 text-center font-playfair">Casos Reais de Automação</h2>
      <div className="w-full px-4 flex">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          setApi={setCasesEmbla}
          className="w-full max-w-3xl mx-auto"
        >
          <CarouselContent
            // Para compatibilidade com mouse/touch
            onMouseDown={handlePointerDown}
            onMouseUp={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchEnd={handlePointerUp}
            onMouseLeave={handleMouseLeave}
          >
            {cases.map((c, i) => (
              <CarouselItem
                key={i}
                className="basis-full sm:basis-1/2 lg:basis-1/3 flex"
              >
                <div className="glass-card flex-1 p-7 flex flex-col gap-3 animate-fade-in h-full">
                  <div
                    className="flex items-center gap-2 mb-1 font-semibold"
                    style={{ color: c.color }}
                  >
                    {c.icon} {c.title}
                  </div>
                  <div className="text-sm text-slate-200 mb-2">{c.desc}</div>
                  <div className="w-full flex flex-col gap-1">
                    <span className="text-xs text-slate-400 mb-1">{c.thumb.label}</span>
                    <img
                      src={c.thumb.src}
                      alt={c.thumb.alt}
                      className="rounded-xl border border-muted object-cover w-full max-w-xs mx-auto shadow-md"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default CasosReaisSection;

