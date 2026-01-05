import { useState } from 'react';

export default function FAQ() {
  const [activeItems, setActiveItems] = useState({});

  const toggleFAQ = (id) => {
    setActiveItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="faq" className="container reveal" style={{ padding: "var(--s-xl) 0" }}>
      <div className="section-header">
        <h2>Dúvidas <strong>Frequentes</strong></h2>
        <p>Respostas rápidas para as principais questões sobre nossos serviços.</p>
      </div>
      <div className="faq-container">
        <div className={`faq-item ${activeItems[1] ? 'active' : ''}`} onClick={() => toggleFAQ(1)}>
          <div className="faq-question">Qual o prazo de entrega? <span>{activeItems[1] ? '-' : '+'}</span></div>
          <div className="faq-answer">Landing Pages em 7 dias, sites institucionais em até 20 dias úteis.</div>
        </div>
        <div className={`faq-item ${activeItems[2] ? 'active' : ''}`} onClick={() => toggleFAQ(2)}>
          <div className="faq-question">O site é editável? <span>{activeItems[2] ? '-' : '+'}</span></div>
          <div className="faq-answer">Sim, entregamos com um painel intuitivo para você atualizar textos e imagens.</div>
        </div>
      </div>
    </section>
  );
}