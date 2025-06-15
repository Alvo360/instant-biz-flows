
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { MessageSquare } from "lucide-react";
import { useMagneticScroll } from "@/hooks/useMagneticScroll";
import * as React from "react";

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

const DepoimentosSection = () => {
  const depoMagneticRef = useMagneticScroll(47);
  const [emblaApi, setEmblaApi] = React.useState<any>(null);

  // Autoplay do carrossel
  React.useEffect(() => {
    if (!emblaApi) return;
    let timeout: any = null;
    const play = () => {
      timeout = setTimeout(() => {
        emblaApi.scrollNext();
      }, 3400);
    };
    emblaApi.on("select", play);
    play();
    return () => {
      emblaApi.off("select", play);
      clearTimeout(timeout);
    };
  }, [emblaApi]);

  return (
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
  );
};

export default DepoimentosSection;
