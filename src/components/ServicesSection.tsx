import { FileText, Landmark, Scale, Clock, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Planejamento Previdenciário",
    description:
      "Análise completa do seu histórico de contribuições para identificar o melhor momento e tipo de aposentadoria.",
  },
  {
    icon: Scale,
    title: "Revisão de Benefícios",
    description:
      "Verificamos se sua aposentadoria foi calculada corretamente e buscamos a correção de eventuais erros do INSS.",
  },
  {
    icon: Landmark,
    title: "Direito Bancário",
    description:
      "Defesa contra cobranças abusivas, revisão de contratos, empréstimos consignados indevidos e negativação indevida.",
  },
  {
    icon: Clock,
    title: "Auxílio-Doença e BPC/LOAS",
    description:
      "Acompanhamento em processos de benefícios por incapacidade e benefícios assistenciais.",
  },
];

const ServicesSection = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre os serviços.";

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-body text-sm uppercase tracking-widest">
            Áreas de Atuação
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Como posso te <span className="text-gradient-gold">ajudar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg">
            Atendimento humanizado e especializado para garantir seus direitos previdenciários e bancários.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-gold hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-navy-dark" />
              </div>
              <h3 className="text-xl font-display font-semibold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-gold text-navy-dark font-body font-bold px-8 py-4 rounded-lg shadow-gold hover:brightness-110 transition-all duration-300 text-lg"
          >
            Fale com a especialista
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
