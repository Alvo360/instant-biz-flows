
import { MessageSquare, Instagram } from "lucide-react";
import * as React from "react";

const ChamadaFinalSection = () => (
  <section className="mt-24 mb-10 text-center z-10 flex justify-center">
    <div>
      <h2 className="text-2xl font-bold text-white mb-4 font-playfair">Pronto para automatizar?</h2>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <a
          href="https://wa.me/SEUNUMERO?text=Ol%C3%A1!%20Quero%20falar%20sobre%20automa%C3%A7%C3%A3o%20para%20meu%20neg%C3%B3cio."
          className="glass-btn flex gap-2 items-center justify-center shadow-glass"
          target="_blank"
          rel="noopener"
        >
          <MessageSquare size={22} />
          💬 Fale comigo pelo WhatsApp
        </a>
        <a
          href="https://instagram.com/SEUINSTAGRAM"
          className="glass-btn flex gap-2 items-center justify-center shadow-glass !bg-gradient-to-r !from-pink-500 !to-yellow-400"
          style={{
            minWidth: "44px",
            padding: "0.8rem 1.4rem",
            borderRadius: "9999px",
            fontSize: "1.08rem",
            fontWeight: 600,
          }}
          target="_blank"
          rel="noopener"
        >
          <Instagram size={22} />
          Instagram
        </a>
      </div>
      <div className="text-slate-400 italic mt-4 text-sm">
        Respondo pessoalmente e posso compartilhar demonstrações práticas.
      </div>
    </div>
  </section>
);

export default ChamadaFinalSection;
