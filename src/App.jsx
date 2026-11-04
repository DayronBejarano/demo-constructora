import React, { useState } from 'react';
import { 
  Building2, HardHat, Ruler, BarChart3, ArrowRight, 
  MapPin, Clock, Cpu, Phone, X, Lock, FileText, Download
} from 'lucide-react';

import { 
  BlueprintBackground, 
  IndustrialCard, 
  HeavyButton, 
  Reveal 
} from './components/ui/Effects';

// --- COMPONENTE MODAL REUTILIZABLE ---
const Modal = ({ isOpen, onClose, title, children, icon: Icon }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div className="relative bg-zinc-900 border border-cyan-500/30 w-full max-w-lg shadow-[0_0_50px_rgba(6,182,212,0.15)] animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            {Icon && <Icon className="w-4 h-4" />}
            {title}
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-cyan-400 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  // ESTADOS PARA INTERACTIVIDAD DE LA PÁGINA
  const [activeModal, setActiveModal] = useState(null); // 'login' | 'specs' | null

  const proyectosEjecucion = [
    {
      id: "PRJ-089", nombre: "Torre Empresarial Zénith", ubicacion: "Centro Financiero",
      avance: 78, fase: "Acabados Internos", entrega: "Q4 2026"
    },
    {
      id: "PRJ-092", nombre: "Viaducto Norte", ubicacion: "Vía Panamericana",
      avance: 45, fase: "Estructura Principal", entrega: "Q2 2027"
    },
    {
      id: "PRJ-095", nombre: "Complejo Logístico Alfa", ubicacion: "Zona Franca",
      avance: 92, fase: "Certificación Final", entrega: "Próximo Mes"
    }
  ];

  const handleCotizar = () => {
    const mensaje = "Hola. Vengo de la plataforma interactiva y deseo cotizar un proyecto de ingeniería civil.";
    window.open(`https://wa.me/573104208919?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-cyan-500 selection:text-zinc-950 relative overflow-hidden pb-24">
      <BlueprintBackground />
      
      {/* NAVEGACIÓN INDUSTRIAL */}
      <nav className="fixed w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-cyan-500 p-2 text-zinc-950">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-2xl tracking-tighter text-zinc-100 block leading-none">RINO<span className="text-cyan-500">.</span></span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">Ingeniería Civil</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-bold text-xs tracking-widest uppercase text-zinc-400">
            <a href="#proyectos" className="hover:text-cyan-400 transition-colors">Portafolio</a>
            <a href="#avance" className="hover:text-cyan-400 transition-colors">Estado de Obras</a>
            <HeavyButton 
              variant="outline" 
              className="!px-5 !py-2 !text-[10px]"
              onClick={() => setActiveModal('login')}
            >
              Portal Clientes
            </HeavyButton>
          </div>
        </div>
      </nav>

      {/* HERO SECTION DE INGENIERÍA */}
      <section id="proyectos" className="relative z-10 pt-36 pb-20 px-6 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono mb-6 uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Sistema de Gestión de Obras Activo</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter mb-6 text-zinc-100 leading-[1.1]">
                CONSTRUIMOS <br/>
                LA INFRAESTRUCTURA <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  DEL MAÑANA.
                </span>
              </h1>
              
              <p className="text-lg text-zinc-400 mb-10 leading-relaxed font-light max-w-lg">
                Ejecución de proyectos civiles, comerciales e industriales con precisión milimétrica, control de presupuestos en tiempo real y cumplimiento estricto de cronogramas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <HeavyButton icon={ArrowRight} onClick={handleCotizar}>
                  Cotizar Proyecto
                </HeavyButton>
                
                <button 
                  onClick={() => setActiveModal('specs')}
                  className="text-zinc-300 font-bold uppercase tracking-widest text-xs px-6 py-4 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Ruler className="w-4 h-4" />
                  Ver Especificaciones Técnicas
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            {/* PANEL DE ESTADÍSTICAS */}
            <div className="relative bg-zinc-900 border border-zinc-800 p-2 shadow-2xl">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-500" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-500" />
              
              <div className="bg-zinc-950 border border-zinc-800/50 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <BarChart3 className="w-32 h-32 text-cyan-500" />
                </div>
                
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  <div>
                    <p className="font-mono text-cyan-500 text-xs mb-1">M² CONSTRUIDOS</p>
                    <p className="text-4xl font-extrabold">+150K</p>
                  </div>
                  <div>
                    <p className="font-mono text-cyan-500 text-xs mb-1">PROYECTOS ENTREGADOS</p>
                    <p className="text-4xl font-extrabold">84</p>
                  </div>
                  <div>
                    <p className="font-mono text-cyan-500 text-xs mb-1">DÍAS SIN ACCIDENTES</p>
                    <p className="text-4xl font-extrabold">1,420</p>
                  </div>
                  <div>
                    <p className="font-mono text-cyan-500 text-xs mb-1">CAPACIDAD OPERATIVA</p>
                    <p className="text-4xl font-extrabold">100%</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MÓDULO DE AVANCE DE OBRA EN TIEMPO REAL */}
      <section id="avance" className="relative z-10 py-24 px-6 bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <HardHat className="w-5 h-5 text-cyan-500" />
                  <span className="text-cyan-500 font-mono text-xs uppercase tracking-widest">Dashboard de Obras</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-zinc-100 uppercase tracking-tight">Estado de Ejecución</h2>
              </div>
              <p className="font-mono text-zinc-400 text-xs max-w-sm mt-4 md:mt-0 text-right">
                Última actualización de telemetría: <span className="text-cyan-400">Hace 2 horas</span>
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {proyectosEjecucion.map((proyecto, idx) => (
              <Reveal key={proyecto.id} delay={idx * 0.1}>
                <IndustrialCard className="h-full flex flex-col group cursor-pointer" onClick={() => setActiveModal('specs')}>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-xs text-zinc-500 bg-zinc-950 px-2 py-1 border border-zinc-800">
                      {proyecto.id}
                    </span>
                    <span className="font-mono text-xs text-cyan-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {proyecto.entrega}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-zinc-100 mb-2">{proyecto.nombre}</h3>
                  <p className="text-zinc-400 text-sm flex items-center gap-2 mb-8">
                    <MapPin className="w-4 h-4" /> {proyecto.ubicacion}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex justify-between font-mono text-xs mb-2">
                      <span className="text-zinc-400">FASE: {proyecto.fase}</span>
                      <span className="text-cyan-400 font-bold">{proyecto.avance}%</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-950 border border-zinc-800 overflow-hidden relative">
                      <div 
                        className="absolute top-0 left-0 h-full bg-cyan-500 transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{ width: `${proyecto.avance}%` }}
                      >
                        <div className="absolute inset-0 w-full h-full opacity-30" 
                             style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }}>
                        </div>
                      </div>
                    </div>
                  </div>
                </IndustrialCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODALES INTERACTIVOS --- */}
      
      {/* Modal 1: Portal Clientes (Login Simulado) */}
      <Modal 
        isOpen={activeModal === 'login'} 
        onClose={() => setActiveModal(null)}
        title="Portal de Acceso a Inversores"
        icon={Lock}
      >
        <p className="text-zinc-400 text-sm mb-6">
          Ingrese sus credenciales para acceder a la telemetría, facturación y cámaras en vivo de sus proyectos en ejecución.
        </p>
        <div className="space-y-4">
          <div>
            <label className="font-mono text-xs text-cyan-500 mb-1 block">ID DE INVERSOR / EMAIL</label>
            <input type="text" className="w-full bg-zinc-950 border border-zinc-800 p-3 text-zinc-100 outline-none focus:border-cyan-500 transition-colors font-mono" placeholder="Ej: INV-7842" />
          </div>
          <div>
            <label className="font-mono text-xs text-cyan-500 mb-1 block">CLAVE DE ACCESO PIN</label>
            <input type="password" className="w-full bg-zinc-950 border border-zinc-800 p-3 text-zinc-100 outline-none focus:border-cyan-500 transition-colors font-mono" placeholder="••••••••" />
          </div>
          <HeavyButton className="w-full mt-4" onClick={() => setActiveModal(null)}>
            Autenticar Acceso
          </HeavyButton>
        </div>
      </Modal>

      {/* Modal 2: Especificaciones Técnicas */}
      <Modal 
        isOpen={activeModal === 'specs'} 
        onClose={() => setActiveModal(null)}
        title="Documentación Técnica (BIM)"
        icon={FileText}
      >
        <div className="border border-zinc-800 bg-zinc-950 p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-bold text-zinc-100">Dossier Corporativo RINO.pdf</p>
              <p className="text-xs text-zinc-500 font-mono mt-1">2.4 MB • Versión 2026.4</p>
            </div>
            <FileText className="text-cyan-500 w-8 h-8 opacity-50" />
          </div>
          <div className="grid grid-cols-2 gap-4 font-mono text-[10px] text-zinc-400 bg-zinc-900 p-3">
            <div>
              <span className="text-cyan-500 block mb-1">CERTIFICACIONES</span>
              ISO 9001, ISO 14001
            </div>
            <div>
              <span className="text-cyan-500 block mb-1">SISTEMA INTEGRADO</span>
              BIM Level 3 Compliant
            </div>
          </div>
        </div>
        <button className="w-full border border-cyan-500/50 text-cyan-500 hover:bg-cyan-500 hover:text-zinc-950 px-6 py-3 font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2">
          <Download className="w-4 h-4" />
          Descargar Especificaciones
        </button>
      </Modal>

      {/* BANNER COMERCIAL DE ADQUISICIÓN DB TECH STUDIO */}
      <div className="fixed bottom-0 left-0 right-0 z-[90] bg-zinc-950/95 backdrop-blur-2xl border-t-2 border-cyan-500/50 p-4 shadow-[0_-20px_40px_rgba(0,0,0,0.8)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-cyan-500/10 p-2 border border-cyan-500/30 shrink-0">
              <Cpu className="w-6 h-6 text-cyan-400 animate-pulse" />
            </div>
            <div>
              <p className="text-zinc-200 text-sm font-bold tracking-widest uppercase">
                Demo B2B Comercial <span className="text-cyan-500 font-normal">/ DB Tech Studio</span>
              </p>
              <p className="text-zinc-400 text-xs font-mono mt-0.5">
                Modernice la infraestructura digital de su constructora.
              </p>
            </div>
          </div>
          <HeavyButton icon={Phone} onClick={handleCotizar} className="w-full sm:w-auto !py-3">
            Solicitar Presupuesto
          </HeavyButton>
        </div>
      </div>
    </div>
  );
};

export default App;