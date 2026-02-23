import { CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  "Saber exatamente quando você pode se aposentar",
  "Identificar o tipo de aposentadoria mais vantajoso",
  "Descobrir se há tempo de contribuição faltando",
  "Simular o valor do seu benefício",
  "Evitar perda de dinheiro por erro do INSS",
  "Orientação sobre contribuições futuras",
];

const BenefitsSection = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá! Quero fazer meu planejamento previdenciário.";

  return (
    <section className="py-24 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold font-body text-sm uppercase tracking-widest">
              Por que fazer?
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-6 leading-tight">
              O planejamento previdenciário pode{" "}
              <span className="text-gradient-gold">mudar sua vida</span>
            </h2>
            <p className="text-gold-light/70 text-lg leading-relaxed mb-8">
              Muitos brasileiros se aposentam com valores abaixo do que teriam direito. 
              Com o planejamento correto, você garante a melhor aposentadoria possível.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-gold text-navy-dark font-body font-bold px-8 py-4 rounded-lg shadow-gold hover:brightness-110 transition-all duration-300 text-lg"
            >
              Agendar consulta gratuita
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="space-y-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-navy-light/30 border border-gold/10 rounded-lg p-5"
              >
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gold-light text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
