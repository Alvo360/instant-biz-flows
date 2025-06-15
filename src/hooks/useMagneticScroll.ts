
import { useRef, useEffect } from "react";

/**
 * Hook para efeito magnético/scroll parallax.
 * Retorna uma ref e aplica transformação baseada no scroll via style diretamente.
 *
 * @param strength Intensidade do efeito (px de profundidade), padrão 140
 */
export function useMagneticScroll(strength = 140) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let ticking = false;

    function handleScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Posição central do elemento em relação ao centro da viewport
      const centerDist = (rect.top + rect.height / 2) - windowH / 2;
      const factor = Math.max(-1, Math.min(1, centerDist / (windowH / 1.3))); // força do efeito
      const absFactor = Math.abs(factor);

      // Efeito mais forte (profundidade ampliada)
      const scale = 1 + absFactor * 0.18;
      const translateZ = factor * -strength; // quanto mais perto do centro, mais "saltado"
      const brightness = 1 + (1 - absFactor) * 0.12; // mais claro no centro

      // Shadow/glow só quando está próximo do centro
      const shadowOpacity = 0.24 + (1 - absFactor) * 0.32; // até 0.56 central, ~0.25 periférico
      const boxShadow = `0 0 40px 0 rgba(37, 99, 235, ${shadowOpacity.toFixed(2)})`;

      // Opacidade um pouco menor nas margens
      const opacity = 0.8 + (1 - absFactor) * 0.18;

      Object.assign(ref.current.style, {
        transform: `perspective(1000px) translateZ(${translateZ}px) scale(${scale.toFixed(3)})`,
        transition: "transform 0.32s cubic-bezier(.48,.17,.38,1), box-shadow 0.28s cubic-bezier(.48,.17,.38,1), opacity 0.25s",
        boxShadow,
        filter: `brightness(${brightness})`,
        opacity: String(opacity),
        willChange: "transform, box-shadow, opacity, filter",
      });
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

    // Desktop/tablet apenas (ou deixe sempre, se desejar)
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

