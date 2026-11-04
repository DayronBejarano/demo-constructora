import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Fondo de Retícula de Ingeniería (Blueprint Style)
export const BlueprintBackground = () => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden z-0 bg-zinc-950">
    {/* Malla de planos */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d415_1px,transparent_1px),linear-gradient(to_bottom,#06b6d415_1px,transparent_1px)] bg-[size:2rem_2rem]" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d425_2px,transparent_2px),linear-gradient(to_bottom,#06b6d425_2px,transparent_2px)] bg-[size:8rem_8rem]" />
    {/* Gradiente para oscurecer los bordes */}
    <div className="absolute inset-0 bg-zinc-950 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,#000_100%)]" />
    {/* Destellos industriales */}
    <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full mix-blend-screen" />
    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen" />
  </div>
);

// Tarjeta Industrial de Bordes Rectos
export const IndustrialCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={`relative overflow-hidden border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl p-6 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] ${className}`}
    >
      {/* Luz de escáner superior (acento de ingeniería) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.1), transparent 40%)`,
        }}
      />
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
};

// Botón Táctico / Heavy Duty
export const HeavyButton = ({ children, onClick, icon: Icon, className = "", variant = 'primary' }) => {
  const base = "relative group inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-300";
  const variants = {
    primary: "bg-cyan-500 text-zinc-950 hover:bg-cyan-400 px-8 py-4 shadow-[4px_4px_0px_rgba(255,255,255,0.1)] hover:shadow-[2px_2px_0px_rgba(255,255,255,0.1)] hover:translate-y-[2px] hover:translate-x-[2px]",
    outline: "bg-transparent border border-cyan-500/50 text-cyan-500 hover:bg-cyan-500/10 px-8 py-4"
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      <span className="flex items-center gap-3 text-xs md:text-sm">
        {children}
        {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
    </button>
  );
};

export const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);