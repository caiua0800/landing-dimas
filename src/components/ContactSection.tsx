import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const whatsappLink =
    "https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma consulta.";

  return (
    <section className="py-24 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold font-body text-sm uppercase tracking-widest">
            Entre em contato
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-6">
            Agende sua <span className="text-gradient-gold">consulta</span>
          </h2>
          <p className="text-gold-light/70 text-lg max-w-2xl mx-auto mb-12">
            Atendimento presencial e online para todo o Brasil. A primeira
            análise do seu caso é gratuita.
          </p>

          <div className="grid sm:grid-cols-3 gap-8 mb-14">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <p className="text-gold-light">(00) 00000-0000</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <p className="text-gold-light">contato@advogada.com.br</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <p className="text-gold-light">Atendimento Online</p>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-gold text-navy-dark font-body font-bold px-10 py-5 rounded-lg shadow-gold hover:brightness-110 transition-all duration-300 text-xl"
          >
            Falar pelo WhatsApp agora
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
