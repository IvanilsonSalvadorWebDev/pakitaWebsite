export default function Features() {
  const features = [
    {
      id: "01",
      tag: "TECNOLOGIA",
      title: "Design Fluido e Responsivo",
      desc: "Sites que se adaptam perfeitamente a qualquer tela, do smartphone ao desktop de alta resolução.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "02",
      tag: "PERFORMANCE",
      title: "Velocidade Otimizada",
      desc: "Carregamento instantâneo para garantir que nenhum cliente desista antes de ver sua proposta.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "03",
      tag: "SEO LOCAL",
      title: "Visibilidade no Google",
      desc: "Estratégias para que sua empresa apareça no topo das buscas em Luanda e em todo o país.",
      img: "https://agenciaorin.com.br/wp-content/uploads/2019/06/Pauta-03-Otimizac%CC%A7a%CC%83o-Como-aumentar-a-visibilidade-no-Google.jpeg"
    },
    {
      id: "04",
      tag: "CONVERSÃO",
      title: "Foco em Resultados",
      desc: "Layouts projetados para transformar visitantes em leads qualificados via WhatsApp e E-mail.",
      img: "https://www.sydle.com/blog/assets/post/captacao-de-leads-qualificados-628d1cda71a1ec06b3ae58ae/Captacao-de-leads-qualificados.webp?w=1200"
    }
  ];

  return (
    <section id="features" className="feature-section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Soluções <strong>Digitais</strong></h2>
          <p>Nossa metodologia une design intuitivo com infraestrutura de ponta.</p>
        </div>
        
        {features.map((item, index) => (
          <div 
            key={item.id} 
            className={`feature-block reveal ${index % 2 !== 0 ? 'reverse' : ''}`}
            style={{ marginBottom: '6rem' }}
          >
            <div className="text-content">
              <span style={{color: 'var(--p-green)', fontWeight: 800}}>
                {item.id}. {item.tag}
              </span>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
            <div className="image-content">
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}