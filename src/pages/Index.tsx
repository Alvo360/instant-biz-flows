
import { Zap, CalendarCheck2, Bot, Link2, Scissors, Users2, MessageSquare, Brain } from "lucide-react";

const testimonials = [
  {
    quote: "Eu não preciso mais responder mensagem. O robô faz tudo.",
    author: "Carlos, Barbearia Fade Master"
  },
  {
    quote: "Ganhei 10h por semana só com automação no meu atendimento.",
    author: "Renata, Consultora"
  },
  {
    quote: "Ele conectou WhatsApp, planilhas e IA. Absurdo!",
    author: "Lucas, Gestor de Tráfego"
  }
]

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
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg mb-2">
            🌀 Automatize com Inteligência e Estilo
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 font-light mb-2">
            <span className="font-medium text-white">Descomplique. Automatize. Cresça.</span> <br />
            Transformo processos manuais em fluxos automáticos com <b>n8n</b>, <b>IA</b>, <b>APIs</b> e integrações personalizadas.
          </p>
          <a
            href="https://wa.me/SEUNUMERO?text=Ol%C3%A1!%20Tenho%20interesse%20em%20automatizar%20meu%20neg%C3%B3cio."
            className="glass-btn flex gap-2 items-center mt-3 shadow-glass"
            target="_blank" rel="noopener"
          >
            <Zap size={22}/> 🚀 Comece pelo WhatsApp
          </a>
        </div>
      </section>

      {/* O que automatizar */}
      <section className="mt-10 mb-8 z-10">
        <h2 className="text-2xl font-bold text-white mb-7 text-center">🌐 O que você pode automatizar?</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 px-4">
          <div className="glass-card p-5 flex flex-col gap-2 items-start">
            <div className="bg-primary/30 p-2 rounded-full mb-2">
              <Zap size={26} className="text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Fluxos Inteligentes com n8n</h3>
            <span className="text-slate-300 text-sm font-light">Automatizações visuais, personalizadas e escaláveis.</span>
          </div>
          <div className="glass-card p-5 flex flex-col gap-2 items-start">
            <div className="bg-primary/30 p-2 rounded-full mb-2">
              <CalendarCheck2 size={26} className="text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Agendamento automático</h3>
            <span className="text-slate-300 text-sm font-light">WhatsApp + Google Calendar com resposta imediata.</span>
          </div>
          <div className="glass-card p-5 flex flex-col gap-2 items-start">
            <div className="bg-primary/30 p-2 rounded-full mb-2">
              <Bot size={26} className="text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Atendimento com IA</h3>
            <span className="text-slate-300 text-sm font-light">Bots que entendem, respondem e executam.</span>
          </div>
          <div className="glass-card p-5 flex flex-col gap-2 items-start">
            <div className="bg-primary/30 p-2 rounded-full mb-2">
              <Link2 size={26} className="text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Integrações entre ferramentas</h3>
            <span className="text-slate-300 text-sm font-light">WhatsApp, Notion, Trello, CRM, Google, APIs REST e mais.</span>
          </div>
        </div>
      </section>

      {/* Casos Reais */}
      <section className="mt-12 z-10">
        <h2 className="text-2xl font-bold text-white mb-7 text-center">🧠 Casos Reais (em Camadas)</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center px-4">
          <div className="glass-card md:w-1/2 p-7 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1 text-red-400">
              <Scissors size={20}/> <span className="font-semibold text-white">Barbearia Automatizada</span>
            </div>
            <div className="text-sm text-slate-200 mb-2">
              <b>Problema:</b> atendimento 100% manual no WhatsApp.<br/>
              <b>Solução:</b> bot com n8n + Google Calendar.<br/>
              <b>Resultado:</b> agendamento automático, menos trabalho e mais tempo.
            </div>
            <div className="w-full flex flex-col gap-1">
              <span className="text-xs text-slate-400 mb-1">🖼️ Veja abaixo o print do fluxo + conversa real:</span>
              <div className="bg-muted/40 border border-muted rounded-xl p-2 h-[110px] flex items-center justify-center text-sm text-muted-foreground font-light italic">
                (adicione sua imagem do n8n aqui — ex: print do fluxo ou gif)
              </div>
            </div>
          </div>
          <div className="glass-card md:w-1/2 p-7 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1 text-blue-400">
              <Users2 size={20}/> <span className="font-semibold text-white">CRM Automatizado</span>
            </div>
            <div className="text-sm text-slate-200 mb-2">
              <b>Problema:</b> perda de leads, falta de organização.<br/>
              <b>Solução:</b> CRM no Notion conectado ao WhatsApp via n8n.<br/>
              <b>Resultado:</b> controle total + alertas automáticos + histórico salvo.
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="mt-14 z-10">
        <h2 className="text-2xl font-bold text-white mb-7 text-center">💬 Depoimentos com Camada Real</h2>
        <div className="grid md:grid-cols-3 gap-6 px-4">
          {testimonials.map((t,i) =>
            <div key={i} className="glass-card p-6 flex flex-col gap-5 items-start">
              <MessageSquare size={24} className="text-primary" />
              <div className="text-lg font-normal italic text-white">“{t.quote}”</div>
              <div className="text-sm text-slate-300">{t.author}</div>
            </div>
          )}
        </div>
      </section>

      {/* Sobre mim */}
      <section className="mt-20 z-10 flex justify-center px-4">
        <div className="glass-card max-w-3xl w-full p-10 flex flex-col gap-3 items-center text-center">
          <h2 className="text-2xl font-bold text-white mb-2">👨‍💻 Sobre mim</h2>
          <p className="text-slate-200 text-base font-light mb-2">
            Sou apaixonado por criar <b>soluções inteligentes e sob medida</b>.
            <br/>Trabalho com automações usando:
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-2 text-primary text-lg">
            <span className="inline-flex items-center gap-1"><Brain size={18}/> n8n</span>
            <span className="inline-flex items-center gap-1"><Zap size={16}/> Make / Zapier</span>
            <span className="inline-flex items-center gap-1"><Link2 size={16}/> UltraMsg, APIs REST</span>
            <span className="inline-flex items-center gap-1"><Users2 size={16}/> Notion, Trello</span>
          </div>
          <div className="text-slate-300 text-sm">
            <span>🚀 Faço desde microbots até sistemas complexos com integração total.<br /></span>
            <span>🔧 E o melhor: explico tudo de forma visual e transparente.</span>
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section className="mt-24 mb-10 text-center z-10 flex justify-center">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">📲 Pronto para automatizar?</h2>
          <a
            href="https://wa.me/SEUNUMERO?text=Ol%C3%A1!%20Quero%20falar%20sobre%20automa%C3%A7%C3%A3o%20para%20meu%20neg%C3%B3cio."
            className="glass-btn flex gap-2 items-center justify-center mx-auto shadow-glass"
            target="_blank" rel="noopener"
          >
            <MessageSquare size={22} />
            💬 Vamos conversar no WhatsApp
          </a>
          <div className="text-slate-400 italic mt-4 text-sm">
            Respondo pessoalmente e posso te mostrar exemplos práticos.
          </div>
        </div>
      </section>

      {/* Extras lista */}
      <section className="mt-6 mb-2 z-10 flex justify-center">
        <div className="max-w-2xl w-full text-center text-slate-400 text-xs opacity-90">
          <span className="font-semibold text-accent">Dicas:</span> Adicione vídeos do fluxo (Loom, YouTube ou gif animado) — Use imagens/desenhos do n8n — Customize seu dark theme & visual
        </div>
      </section>

    </div>
  );
};

export default Index;
