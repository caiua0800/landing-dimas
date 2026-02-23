import { Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Maria da Silva",
    text: "Graças ao planejamento, descobri que poderia me aposentar 3 anos antes do que eu imaginava. Atendimento incrível!",
    role: "Aposentada por tempo de contribuição",
  },
  {
    name: "José Oliveira",
    text: "Consegui revisar minha aposentadoria e tive um aumento significativo no benefício. Profissional excelente e dedicada.",
    role: "Revisão de aposentadoria",
  },
  {
    name: "Ana Santos",
    text: "Me ajudou com um empréstimo consignado que não contratei. Resolveu tudo rapidamente e recebi o estorno.",
    role: "Direito bancário",
  },
];

const TestimonialsSection = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá! Vi os depoimentos e gostaria de uma consulta.";

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-body text-sm uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            O que dizem nossos <span className="text-gradient-gold">clientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-gold hover:border-gold/30 transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-card-foreground text-lg leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-semibold text-card-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
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
            Quero ser o próximo caso de sucesso
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
