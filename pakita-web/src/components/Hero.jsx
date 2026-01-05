export default function Hero() {
  return (
    <header className="hero">
      <div className="container hero-grid reveal">
        <div className="hero-content">
          <h1>Pakita: Desenvolvimento de Sites de Alta <strong>Performance.</strong></h1>
          <p>Criamos experiências digitais de alta performance para empresas que buscam liderança em 2026 em Angola.</p>
          <div className="hero-btns">
            <a href="#templates" className="btn btn-primary">Ver Templates</a>
            <a href="#contact" className="btn btn-secondary">Falar com Especialista</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500" alt="Tech Dashboard" />
        </div>
      </div>
    </header>
  );
}