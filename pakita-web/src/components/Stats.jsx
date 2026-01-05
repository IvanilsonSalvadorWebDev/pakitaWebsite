import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Dispara apenas uma vez ao ver
  const count = useMotionValue(0);
  
  // Extraímos apenas os números para a animação
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const rounded = useTransform(count, (latest) => {
    // Se for decimal (como o 1.2s), mantém uma casa decimal
    return numericValue % 1 !== 0 ? latest.toFixed(1) : Math.round(latest);
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { 
        duration: 2, 
        ease: "easeOut" 
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const StatItem = ({ num, label }) => {
  // Separamos o prefixo/sufixo do número (ex: "+", "%", "s")
  const prefix = num.startsWith("+") ? "+" : "";
  const suffix = num.replace(/[0-9.]/g, '');

  return (
    <div className="stat-item">
      <strong>
        {prefix}
        <Counter value={num} />
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="stats-bar reveal">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '1rem' }}>
          <h2 style={{ color: 'white', fontSize: '1.5rem' }}>
            Resultados em <strong>Números</strong>
          </h2>
        </div>
        <div className="stats-flex">
          <StatItem num="+500" label="Projetos" />
          <StatItem num="98%" label="Satisfação" />
          <StatItem num="24/7" label="Suporte" />
          <StatItem num="1.2s" label="Load Speed" />
        </div>
      </div>
    </section>
  );
}