import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
