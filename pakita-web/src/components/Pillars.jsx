export default function Pillars() {
  return (
    <section id="pillars" className="container reveal">
      <div className="section-header">
        <h2>Nossos <strong>Pilares</strong></h2>
        <p>O que nos torna a escolha certa para o seu próximo grande projeto.</p>
      </div>
      <div className="grid-3">
        <div className="info-card">
          <div className="icon-circle">💎</div>
          <h3>UI/UX Premium</h3>
          <p>Design focado na jornada do usuário e conversão.</p>
        </div>
        <div className="info-card">
          <div className="icon-circle">🚀</div>
          <h3>Alta Velocidade</h3>
          <p>Sites otimizados para carregar em menos de 2 segundos.</p>
        </div>
        <div className="info-card">
          <div className="icon-circle">🔒</div>
          <h3>Segurança SSL</h3>
          <p>Proteção total de dados para você e seus clientes.</p>
        </div>
      </div>
    </section>
  );
}