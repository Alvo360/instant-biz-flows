
import { useRef, useEffect } from "react";

/**
 * Hook para efeito magnético/scroll parallax.
 * Retorna uma ref e aplica transformação baseada no scroll via style diretamente.
 * 
 * @param strength intensifica o efeito, padrão 55 (menor = mais sutil)
 */
export function useMagneticScroll(strength = 55) {
  const ref = useRef<HTMLDivElement>(null);
  const styleRef = useRef<any>({ transform: "none" });

  useEffect(() => {
    if (typeof window === "undefined") return;
    let ticking = false;

    function handleScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Quanto mais próximo do centro vertical da viewport, maior o efeito
      const center = rect.top + rect.height / 2 - windowH / 2;
      // Normaliza valor, -1 para cima, 1 para baixo
      const factor = Math.max(-1, Math.min(1, center / windowH));
      // Efeito é mais forte às margens da tela e zera no centro
      const scale = 1 + Math.abs(factor) * 0.09; // ajuste para naturalidade
      const translateZ = factor * -strength; // px (simula vinda pra frente/trás)
      styleRef.current = {
        transform: `perspective(900px) translateZ(${translateZ}px) scale(${scale.toFixed(3)})`,
        willChange: "transform",
        transition: "transform 0.28s cubic-bezier(.55,.15,.36,1)",
      };
      // Força render
      if (ref.current) {
        (ref.current as any).style.transform = styleRef.current.transform;
        (ref.current as any).style.transition = styleRef.current.transition;
      }
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    }

    // Apenas desktop/tablet
    if (window.innerWidth > 700) {
      window.addEventListener("scroll", onScroll, { passive: true });
      handleScroll();
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [strength]);

  return ref;
}

