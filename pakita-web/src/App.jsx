import { useEffect } from "react";
import ReactGA from "react-ga4";

// Estilos
import "./App.css";

// Componentes
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Templates from "./components/Templates";
import Pillars from "./components/Pillars";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppBtn from "./components/WhatsAppBtn";

// Hook de Animação (Corrigido para .js se o erro persistir)
import { useReveal } from "./hooks/useReveal";

function App() {
  // 1. Inicializa as animações de scroll
  useReveal();

  // 2. Configura o Google Analytics (ID do seu print)
  useEffect(() => {
    ReactGA.initialize("G-3DTRWPQC1E");
    // Envia o pageview inicial para o seu painel
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Templates />
        <Pillars />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />

      {/* Botão flutuante de WhatsApp */}
      <WhatsAppBtn />
    </>
  );
}

export default App;