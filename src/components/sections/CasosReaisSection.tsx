
import { Users2, Scissors, MessageSquare } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useMagneticScroll } from "@/hooks/useMagneticScroll";
import * as React from "react";

// Casos reais (pode ser movido para um arquivo data...)
const cases = [
  {
    icon: <Users2 size={20} />,
    title: "Loja automatizada com WhatsApp",
    color: "text-indigo-300",
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
    color: "text-blue-400",
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
    color: "text-green-400",
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
];

const CasosReaisSection = () => {
  const casesMagneticRef = useMagneticScroll(50);
  const [casesEmbla, setCasesEmbla] = React.useState<any>(null);

  // Autoplay do carrossel
  React.useEffect(() => {
    if (!casesEmbla) return;
    let timeout: any = null;
    const play = () => {
      timeout = setTimeout(() => {
        casesEmbla.scrollNext();
      }, 4500);
    };
    casesEmbla.on("select", play);
    play();
    return () => {
      casesEmbla.off("select", play);
      clearTimeout(timeout);
    };
  }, [casesEmbla]);

  return (
    <section ref={casesMagneticRef} className="mt-12 z-10">
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
          <CarouselContent>
            {cases.map((c, i) => (
              <CarouselItem
                key={i}
                className="basis-full md:basis-1/2 flex"
              >
                <div className="glass-card flex-1 p-7 flex flex-col gap-3 animate-fade-in h-full">
                  <div className={`flex items-center gap-2 mb-1 font-semibold ${c.color}`}>
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
