import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Fondo de Retícula de Ingeniería (Blueprint Style) Dinámico
export const BlueprintBackground = ({ theme }) => {
  const isLight = theme.id === 'concrete';
  
  return (
    <div className={`pointer-events-none fixed inset-0 overflow-hidden z-0 ${theme.bgApp} transition-colors duration-500`}>
      {/* Malla de planos con el color del acento */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `linear-gradient(to right, ${theme.accentHex}15 1px, transparent 1px), linear-gradient(to bottom, ${theme.accentHex}15 1px, transparent 1px)`,
          backgroundSize: '2rem 2rem'
        }}
      />
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `linear-gradient(to right, ${theme.accentHex}25 2px, transparent 2px), linear-gradient(to bottom, ${theme.accentHex}25 2px, transparent 2px)`,
          backgroundSize: '8rem 8rem'
        }}
      />
      {/* Gradiente para oscurecer/aclarar los bordes */}
      <div className={`absolute inset-0 ${theme.bgApp} [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,#000_100%)]`} />
      
      {/* Destellos industriales */}
      {!isLight && (
        <>
          <div 
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] blur-[120px] rounded-full mix-blend-screen transition-colors duration-1000"
            style={{ backgroundColor: `${theme.accentHex}20` }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] blur-[150px] rounded-full mix-blend-screen transition-colors duration-1000"
            style={{ backgroundColor: `${theme.accentHex}10` }}
          />
        </>
      )}
    </div>
  );
};

// Tarjeta Industrial de Bordes Rectos Dinámica
export const IndustrialCard = ({ children, className = "", theme, onClick }) => {
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
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={`relative overflow-hidden border ${theme.border} ${theme.bgCard} backdrop-blur-xl p-6 transition-all duration-300 ${theme.borderHover} cursor-pointer ${className}`}
      style={{ boxShadow: opacity ? `0 0 30px ${theme.glow}` : 'none' }}
    >
      <div 
        className="absolute top-0 left-0 w-full h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
        style={{ background: `linear-gradient(to right, transparent, ${theme.accentHex}80, transparent)` }}
      />
      
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${theme.glow}, transparent 40%)`,
        }}
      />
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
};

export const HeavyButton = ({ children, onClick, icon: Icon, className = "", variant = 'primary', theme }) => {
  const base = "relative group inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-300";
  
  // Estilos dinámicos basados en el tema
  const isPrimary = variant === 'primary';
  const buttonStyle = isPrimary 
    ? `${theme.buttonBg} px-8 py-4 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] hover:translate-y-[2px] hover:translate-x-[2px]`
    : `bg-transparent border ${theme.border} ${theme.accent} hover:bg-[${theme.accentHex}20] px-8 py-4`;

  return (
    <button onClick={onClick} className={`${base} ${buttonStyle} ${className}`}>
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