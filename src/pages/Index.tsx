import { Zap, CalendarCheck2, Bot, Link2, Scissors, Users2, MessageSquare, Brain } from "lucide-react";

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
  }
];

const Index = () => {
  return (
    <div className="relative min-h-screen py-8 px-0 bg-transparent flex flex-col">
      {/* Pontos de luz/glow */}
      <span className="glow blue"></span>
      <span className="glow red"></span>
      <span className="glow gray"></span>
      {/* HERO */}
      <section className="flex flex-col items-center gap-8 z-10 pt-8">
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
      <section className="mt-10 mb-8 z-10">
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

      {/* Casos Reais */}
      <section className="mt-12 z-10">
        <h2 className="text-2xl font-bold text-white mb-7 text-center font-playfair">Casos Reais de Automação</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center px-4">
          <div className="glass-card md:w-1/2 p-7 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1 text-indigo-300 font-semibold">
              <Users2 size={20}/> Loja automatizada com WhatsApp
            </div>
            <div className="text-sm text-slate-200 mb-2">
              <b>Desafio:</b> Loja online gastando muito tempo atendendo manualmente clientes no WhatsApp.<br/>
              <b>Solução:</b> Criação de bot usando n8n integrado ao WhatsApp, automatizando todo o fluxo de atendimento.<br/>
              <b>Resultado:</b> Atendimentos 100% automáticos, zero travamento e ótimos feedbacks de clientes.
            </div>
            <div className="w-full flex flex-col gap-1">
              <span className="text-xs text-slate-400 mb-1">🖼️ Print real de depoimento de cliente da loja:</span>
              <img src="/lovable-uploads/8a24b4e6-dcd2-4e52-bdd6-a93f56b5c877.png" alt="Depoimento Loja WhatsApp" className="rounded-xl border border-muted object-cover w-full max-w-xs mx-auto shadow-md" />
            </div>
          </div>
          <div className="glass-card md:w-1/2 p-7 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1 text-blue-400 font-semibold">
              <Scissors size={20}/> Barbearia com agendamento automático
            </div>
            <div className="text-sm text-slate-200 mb-2">
              <b>Desafio:</b> Barbearia perdendo horários por falta de organização nos agendamentos.<br/>
              <b>Solução:</b> Integração do WhatsApp com agenda e notificações automáticas usando n8n.<br/>
              <b>Resultado:</b> Agendas lotadas sem esforço manual e clientes elogiando a praticidade.
            </div>
            <div className="w-full flex flex-col gap-1">
              <span className="text-xs text-slate-400 mb-1">🖼️ Print real do feedback no WhatsApp:</span>
              <img src="/lovable-uploads/2190f266-8ef3-48c7-b3f4-c475c1bac78b.png" alt="Feedback Barbearia WhatsApp" className="rounded-xl border border-muted object-cover w-full max-w-xs mx-auto shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="mt-14 z-10">
        <h2 className="text-2xl font-bold text-white mb-7 text-center font-playfair">Depoimentos Verdadeiros</h2>
        <div className="grid md:grid-cols-3 gap-6 px-4">
          {testimonials.map((t,i) =>
            <div key={i} className="glass-card p-6 flex flex-col gap-5 items-start">
              <MessageSquare size={24} className="text-primary" />
              <div className="text-lg font-normal italic text-white">{`“${t.quote}”`}</div>
              <div className="text-sm text-slate-300">{t.author}</div>
            </div>
          )}
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
