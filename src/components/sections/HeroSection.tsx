
import { Zap } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";

// Novo componente para o logo fixo no canto superior esquerdo
const FixedTopLeftLogo = () => (
  <div
    className="fixed top-4 left-4 z-50 select-none flex flex-col items-center group"
    style={{
      transition: "transform 0.18s, filter 0.25s",
    }}
  >
    <a href="/" aria-label="Alvo 360" tabIndex={0} className="flex flex-col items-center">
      <img
        src="/lovable-uploads/887a228c-1a9e-4823-8ccf-25bef380207c.png"
        alt="Logo Alvo 360"
        className="w-16 sm:w-20 h-auto rounded-full object-contain drop-shadow-lg
          transition-transform transition-shadow duration-200 ease-in-out
          group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_#4386e6cc]
          group-hover:brightness-125"
        style={{
          boxShadow: "0 4px 16px #18356320",
          maxWidth: 80,
        }}
      />
      <div className="text-white text-xs sm:text-md font-bold font-playfair mt-1 sm:mt-2 text-center tracking-wider drop-shadow-md group-hover:text-primary/80 transition-colors duration-200">
        Alvo 360
      </div>
    </a>
  </div>
);

const HeroSection = () => {
  return (
    <>
      <FixedTopLeftLogo />
      <section className="flex flex-col items-center gap-6 z-10 pt-8 px-2 md:px-0">
        <div className="glass-card max-w-3xl w-full text-center p-6 md:p-10 flex flex-col items-center gap-4 md:gap-6 animate-fade-in">
          {/* Logo para mobile só aparece se não for desktop */}
          <img
            src="/lovable-uploads/887a228c-1a9e-4823-8ccf-25bef380207c.png"
            alt="Logo Alvo 360"
            className="mb-4 w-40 h-auto md:w-56 mx-auto drop-shadow-lg object-contain sm:hidden"
            style={{ maxWidth: "210px" }}
            loading="eager"
          />
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg font-playfair leading-tight mb-2 md:mb-4">
            Automatizo os processos do seu negócio com n8n para você ganhar tempo e escalar
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light mb-1">
            <span className="font-medium text-white">
              Atraia mais clientes e responda leads até{" "}
              <b className="text-primary/80">50% mais rápido</b>.
            </span>
            <br />
            Soluções personalizadas em automação, integrações e inteligência artificial sob medida. Tudo visual, transparente e sem código complexo.
          </p>
          <Button
            asChild
            className="relative flex gap-2 items-center justify-center w-full max-w-xs md:max-w-fit shadow-lg font-semibold text-lg py-4 md:py-3 rounded-full bg-gradient-to-r from-[#70a1e9] to-[#22293d] hover:from-[#233a6e] hover:to-[#2563eb] transition-all duration-200"
            style={{
              minHeight: "54px",
              fontSize: "1.18rem",
              borderRadius: "2.2rem",
              boxShadow: "0 2px 18px #4386e695",
            }}
          >
            <a
              href="https://api.whatsapp.com/send?phone=5519971259836&text=Ol%C3%A1%2C+eu+quero+solicitar+or%C3%A7amento+para+automa%C3%A7%C3%A3o"
              target="_blank"
              rel="noopener"
              className="flex gap-2 items-center justify-center w-full h-full"
              aria-label="Solicite seu orçamento personalizado pelo WhatsApp"
            >
              <Zap size={22} />
              Solicite seu orçamento personalizado
            </a>
          </Button>
          <div className="flex flex-wrap gap-2 justify-center text-xs mt-4 text-slate-400 font-normal">
            <span className="px-3 py-1 rounded bg-black/20 backdrop-blur-sm">Atendimento <b>pessoal</b> e <b>rápido</b></span>
            <span className="px-3 py-1 rounded bg-black/15">Integrações com WhatsApp, E-mail, CRM e mais</span>
            <span className="px-3 py-1 rounded bg-black/10">Demonstrações práticas, sem compromisso</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

