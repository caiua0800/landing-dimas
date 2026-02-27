import { Shield, ArrowRight } from "lucide-react";
import advogadaImg from "@/assets/advogada.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5521971757851?text=Olá! Gostaria de saber mais sobre o planejamento previdenciário.";

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-navy overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-gold" />
              <span className="text-gold font-body text-sm uppercase tracking-widest">
                Advocacia Especializada
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Planejamento{" "}
              <span className="text-gradient-gold">Previdenciário</span>{" "}
              para garantir seu futuro
            </h1>

            <p className="text-lg md:text-xl text-gold-light/80 font-body font-light max-w-xl mb-10 leading-relaxed">
              Descubra o melhor caminho para a sua aposentadoria. Análise personalizada 
              do seu histórico contributivo para maximizar seus benefícios junto ao INSS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-navy-dark font-body font-bold px-8 py-4 rounded-lg shadow-gold hover:brightness-110 transition-all duration-300 text-lg"
              >
                Quero meu planejamento
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold/40 text-gold font-body font-medium px-8 py-4 rounded-lg hover:border-gold hover:bg-gold/10 transition-all duration-300 text-lg"
              >
                Conheça nossos serviços
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold rounded-2xl opacity-20 blur-2xl" />
              <img
                src={advogadaImg}
                alt="Advogada especialista em direito previdenciário e bancário"
                className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover border-2 border-gold/20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
