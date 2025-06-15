
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { casosReais } from "@/data/casosReaisData";
import CasoRealCarouselItem from "./CasoRealCarouselItem";

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
            onMouseDown={handlePointerDown}
            onMouseUp={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchEnd={handlePointerUp}
            onMouseLeave={handleMouseLeave}
          >
            {casosReais.map((caso, i) => (
              <CarouselItem
                key={i}
                className="basis-full md:basis-1/2 flex"
              >
                <CasoRealCarouselItem caso={caso} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default CasosReaisSection;
