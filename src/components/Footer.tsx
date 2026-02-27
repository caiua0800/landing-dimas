const Footer = () => (
  <footer className="bg-navy-dark py-8 text-center">
    <div className="container mx-auto px-6">
      <p className="text-gold-light/50 text-sm font-body">
        © {new Date().getFullYear()} — Todos os direitos reservados. CNPJ 42.649.746/0001-70 | OAB/RJ 229474
      </p>
    </div>
  </footer>
);

export default Footer;