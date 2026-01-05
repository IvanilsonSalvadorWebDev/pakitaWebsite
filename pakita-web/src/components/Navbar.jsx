import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Fecha o menu ao clicar num link
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">Pak<span>ita</span></div>
      
      {/* Ícone Hambúrguer */}
      <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links do Menu */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#features" onClick={closeMenu}>Recursos</a></li>
        <li><a href="#templates" onClick={closeMenu}>Templates</a></li>
        <li><a href="#pillars" onClick={closeMenu}>Diferenciais</a></li>
        <li><a href="#testimonials" onClick={closeMenu}>Feedback</a></li>
        <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contato</a></li>
        
        {/* Botão de Orçamento dentro do menu no mobile */}
        <li className="mobile-only">
          <a href="#contact" className="btn btn-primary" onClick={closeMenu}>Orçamento</a>
        </li>
      </ul>

      {/* Botão de Orçamento visível apenas no Desktop */}
      <a href="#contact" className="btn btn-primary desktop-only" style={{ padding: "0.6rem 1.2rem", fontSize: "0.8rem" }}>
        Orçamento
      </a>
    </nav>
  );
}