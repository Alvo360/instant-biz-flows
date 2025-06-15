import { Zap, CalendarCheck2, Bot, Link2, Scissors, Users2, MessageSquare, Brain } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import * as React from "react";
import { useMagneticScroll } from "@/hooks/useMagneticScroll";

const testimonials = [
  {
    quote: "A automação cuidou de tudo, não preciso mais responder mensagem manualmente. Serviço top!",
    author: "Renata da Loja de SP"
  },
  {
    quote: "Ganhei horas toda semana, tudo fluindo automático. Recomendo!",
    author: "Carlos, Barbearia Fade do Rio"
  },
  {
    quote: "Consegui integrar WhatsApp, planilhas e IA. Facilidade absurda.",
    author: "Lucas, Gestor de Tráfego"
  },
  {
    quote: "Minha papelaria virou digital. O atendimento automático salvou meu tempo!",
    author: "Patrícia, Papelaria do Sul"
  },
  {
    quote: "Economizei com sistema próprio de respostas automáticas para clientes do salão.",
    author: "Silvia, Cabeleireira RJ"
  },
  {
    quote: "Ficou muito mais fácil organizar as reservas, tudo flui no WhatsApp!",
    author: "Marcos, Restaurante Minas"
  },
  {
    quote: "Agora toda a minha equipe recebe avisos certinho, integração perfeita.",
    author: "Cláudia, Boutique do Centro"
  },
  {
    quote: "Achei que seria caro, mas ficou acessível e super fácil de usar!",
    author: "Jorge, Hamburgueria SP"
  },
  {
    quote: "Meus clientes estão surpresos com o atendimento automático. Nota dez!",
    author: "Tatiane, Moda Recife"
  },
  {
    quote: "Não erro mais pedidos, todas as mensagens entram organizadas no sistema.",
    author: "Felipe, Pizzaria Zona Norte"
  },
  {
    quote: "O fluxo de leads ficou redondinho, parei de perder contatos!",
    author: "Amanda, Imobiliária Sul"
  },
  {
    quote: "Foi só automatizar para ver o movimento dobrar no estúdio.",
    author: "Rafael, Estúdio Tattoo MG"
  },
  {
    quote: "Facilitou muito o acompanhamento dos agendamentos e pagamentos.",
    author: "Bruna, Clínica Vida PE"
  },
  {
    quote: "A automação inspira confiança para meus clientes digitais!",
    author: "Danilo, Agência Web Bahia"
  },
  {
    quote: "Aumentou o volume e a qualidade no atendimento rápido.",
    author: "Janaina, Delivery Express AL"
  },
  {
    quote: "Atendimento bem mais ágil, nunca mais perdi venda.",
    author: "Fábio, Lojas Paris Fortaleza"
  },
  {
    quote: "Sistema rodando liso, aprovadíssimo!",
    author: "Cristiane, Floricultura Natal"
  },
  {
    quote: "Meus parceiros elogiam a integração com Notion e CRM.",
    author: "Paulo César, Consultor São Paulo"
  },
  {
    quote: "Muito melhor que pagar sistemas caros, resolveu e ficou prático.",
    author: "Luiza, Beauty House Goiás"
  },
  {
    quote: "Só elogios dos meus clientes, tudo automatizado e rápido.",
    author: "Roberto, Escritório Recife"
  },
];

// Embla: autoplay plugin (simples)
function useEmblaAutoplay(api: any, delay = 3400) {
  React.useEffect(() => {
    if (!api) return;
    let timeout: any = null;
    const play = () => {
      timeout = setTimeout(() => {
        api.scrollNext();
      }, delay);
    };
    api.on("select", play);
    play();
    return () => {
      api.off("select", play);
      clearTimeout(timeout);
    };
  }, [api, delay]);
}

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

const Index = () => {
  // Embla instance for autoplay
  const [emblaApi, setEmblaApi] = React.useState<any>(null);
  useEmblaAutoplay(emblaApi);

  // Embla para casos (autoplay separado)
  const [casesEmbla, setCasesEmbla] = React.useState<any>(null);
  useEmblaAutoplay(casesEmbla, 4500);

  // --- Magnetic Scroll refs ---
  const heroMagneticRef = useMagneticScroll(85);
  const autoCardsMagneticRef = useMagneticScroll(65);
  const casesMagneticRef = useMagneticScroll(50);
  const depoMagneticRef = useMagneticScroll(47);

  return (
    <div className="relative min-h-screen py-8 px-0 bg-transparent flex flex-col">
      {/* Pontos de luz/glow */}
      <span className="glow blue"></span>
      <span className="glow red"></span>
      <span className="glow gray"></span>
      {/* HERO */}
      <section ref={heroMagneticRef} className="flex flex-col items-center gap-8 z-10 pt-8">
        <div className="glass-card max-w-3xl w-full text-center p-10 flex flex-col items-center gap-5">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg mb-2 font-playfair">
            Automatize seu Negócio com Inteligência e Estilo
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 font-light mb-2">
            <span className="font-medium text-white">Processos mais simples, tempo valorizado.</span> <br />
            Soluções personalizadas em automação com <b>n8n</b>, <b>Inteligência Artificial</b>, <b>APIs</b> e integrações sob medida.
          </p>
          <a
            href="https://wa.me/SEUNUMERO?text=Ol%C3%A1!%20Tenho%20interesse%20em%20automatizar%20meu%20neg%C3%B3cio."
            className="glass-btn flex gap-2 items-center mt-3 shadow-glass"
            target="_blank" rel="noopener"
          >
            <Zap size={22}/> 🚀 Fale pelo WhatsApp
          </a>
        </div>
      </section>

      {/* O que automatizar */}
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

      {/* Casos Reais - CARROSSEL magnético */}
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
                  className="
                    basis-full
                    md:basis-1/2
                    flex
                  "
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

      {/* Depoimentos */}
      <section ref={depoMagneticRef} className="mt-14 z-10 w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold text-white mb-7 text-center font-playfair">
          Depoimentos Verdadeiros
        </h2>
        <div className="w-full px-4 flex">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            setApi={setEmblaApi}
            className="w-full max-w-3xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem
                  key={i}
                  className="
                    md:basis-1/2
                    xl:basis-1/3
                    basis-full
                    flex
                  "
                >
                  <div className="glass-card flex-1 p-6 flex flex-col gap-5 items-start animate-fade-in h-full">
                    <MessageSquare size={24} className="text-primary" />
                    <div className="text-lg font-normal italic text-white">{`“${t.quote}”`}</div>
                    <div className="text-sm text-slate-300">{t.author}</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Sobre mim */}
      <section className="mt-20 z-10 flex justify-center px-4">
        <div className="glass-card max-w-3xl w-full p-10 flex flex-col gap-3 items-center text-center">
          <h2 className="text-2xl font-bold text-white mb-2 font-playfair">Sobre mim</h2>
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

      {/* Chamada final */}
      <section className="mt-24 mb-10 text-center z-10 flex justify-center">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 font-playfair">Pronto para automatizar?</h2>
          <a
            href="https://wa.me/SEUNUMERO?text=Ol%C3%A1!%20Quero%20falar%20sobre%20automa%C3%A7%C3%A3o%20para%20meu%20neg%C3%B3cio."
            className="glass-btn flex gap-2 items-center justify-center mx-auto shadow-glass"
            target="_blank" rel="noopener"
          >
            <MessageSquare size={22} />
            💬 Fale comigo pelo WhatsApp
          </a>
          <div className="text-slate-400 italic mt-4 text-sm">
            Respondo pessoalmente e posso compartilhar demonstrações práticas.
          </div>
        </div>
      </section>

      {/* Extras lista */}
      <section className="mt-6 mb-2 z-10 flex justify-center">
        <div className="max-w-2xl w-full text-center text-slate-400 text-xs opacity-90">
          <span className="font-semibold text-accent">Dica:</span> Use imagens reais dos fluxos (prints ou vídeos), ative o visual escuro do site, e aposta em uma apresentação limpa e elegante!
        </div>
      </section>
    </div>
  );
};

export default Index;
