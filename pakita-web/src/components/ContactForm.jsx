// src/components/ContactForm.jsx
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('enviando');
    
    // Simulação de lógica de envio seguro
    setTimeout(() => {
      setStatus('sucesso');
      e.target.reset();
    }, 2000);
  };

  return (
    <footer id="contact" className="footer reveal">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h2 style={{ color: 'white', fontSize: '3rem' }}>Vamos Conversar?</h2>
            <p>📍 Luanda, Angola</p>
            <div className="logo" style={{ fontSize: '2rem', marginTop: '2rem' }}>Pak<span>ita</span></div>
          </div>
          
          <form className="form-group" onSubmit={handleSubmit}>
            {/* Campo Honeypot para Segurança Anti-Bot */}
            <input type="text" name="_honey" style={{display: 'none'}} tabIndex="-1" autoComplete="off" />
            
            <input type="text" placeholder="Seu Nome" required />
            <input type="email" placeholder="E-mail Corporativo" required />
            <textarea rows="4" placeholder="Descreva seu projeto..." required></textarea>
            
            <button type="submit" className="btn btn-primary" disabled={status === 'enviando'}>
              {status === 'enviando' ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            
            {status === 'sucesso' && <p style={{color: 'var(--p-green)'}}>Mensagem enviada com segurança!</p>}
          </form>
        </div>
      </div>
    </footer>
  );
}