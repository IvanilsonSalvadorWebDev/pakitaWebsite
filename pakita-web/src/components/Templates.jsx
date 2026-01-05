const templates = [
  { id: 1, title: "Nexus Corporate", desc: "Consultorias", img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=500" },
  { id: 2, title: "Flow SaaS", desc: "Softwares e Apps", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=500" },
];

export default function Templates() {
  return (
    <section id="templates" className="container reveal" style={{paddingBottom: '6rem'}}>
      <div className="section-header">
        <h2>Modelos de Sites <strong>Validados</strong> pelo Mercado</h2>
        <p>Escolha um ponto de partida moderno e validado pelo mercado.</p>

      </div>
      <div className="gallery-grid">
        {templates.map(item => (
          <div key={item.id} className="template-card">
            <img src={item.img} className="template-img" alt={item.title} />
            <div className="template-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}