export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials reveal">
      <div className="container">
        <div className="section-header">
          <h2 style={{ color: "var(--p-green)" }}>O que dizem nossos <strong>Parceiros</strong></h2>
          <p style={{ color: "rgba(255,255,255,0.7)" }}>Histórias de sucesso de quem confiou na Pakita.</p>
        </div>
        <div className="testi-grid">
          <div className="testi-card">
            <p>"A Pakita transformou nossa presença digital. O faturamento aumentou drasticamente."</p>
            <strong style={{ display: "block", marginTop: "1rem", color: "var(--p-green)" }}>Mário Silva</strong> CEO TechAngola
          </div>
          <div className="testi-card">
            <p>"Velocidade incrível e design que realmente impressiona nossos clientes."</p>
            <strong style={{ display: "block", marginTop: "1rem", color: "var(--p-green)" }}>Ana Paula</strong> Fashion Hub
          </div>
        </div>
      </div>
    </section>
  );
}