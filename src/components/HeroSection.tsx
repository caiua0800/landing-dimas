import React, { useState } from "react";
import { Shield, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const whatsappLink = "https://wa.me/5521971757851?text=Olá! Gostaria de saber mais sobre o planejamento previdenciário.";

  const images = [
    "/images/image1.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg"
  ];

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative min-h-screen flex items-center bg-navy-dark overflow-visible">
      <div className="absolute inset-0 bg-gradient-navy opacity-100" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="animate-fade-up z-20">
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
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center h-[550px]">
            <div className="relative w-full max-w-[320px] h-[400px] lg:-translate-x-12">
              {images.map((img, index) => {
                const isFront = index === activeIndex;
                const isMiddle = index === (activeIndex + 1) % images.length;
                const isBack = index === (activeIndex + 2) % images.length;

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${
                      isFront 
                        ? "z-30 opacity-100 scale-100 translate-x-0 translate-y-0" 
                        : isMiddle 
                        ? "z-20 opacity-50 scale-90 translate-x-10 translate-y-10" 
                        : "z-10 opacity-20 scale-80 translate-x-20 translate-y-20"
                    }`}
                  >
                    <div className={`relative h-full w-full rounded-2xl overflow-hidden border-2 transition-colors duration-500 ${isFront ? 'border-gold shadow-[0_20px_50px_rgba(184,146,64,0.3)]' : 'border-gold/10'}`}>
                      <img
                        src={img}
                        alt={`Galeria ${index}`}
                        className="w-full h-full object-cover"
                      />
                      {isFront && <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-6 mt-24 lg:-translate-x-12 z-40">
              <button
                onClick={prevImage}
                className="group p-4 rounded-full border border-gold/20 text-gold bg-navy-dark/50 hover:bg-gold hover:text-navy-dark transition-all duration-300 backdrop-blur-md shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextImage}
                className="group p-4 rounded-full border border-gold/20 text-gold bg-navy-dark/50 hover:bg-gold hover:text-navy-dark transition-all duration-300 backdrop-blur-md shadow-lg"
              >
                <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] -z-10" />
      
      <div className="absolute -bottom-1 left-0 right-0 h-[350px] bg-gradient-to-t from-background via-background/60 to-transparent z-0 pointer-events-none" />
    </section>
  );
};

export default HeroSection;