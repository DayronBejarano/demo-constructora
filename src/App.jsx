import React from 'react';
import { 
  Building2, HardHat, Ruler, BarChart3, ArrowRight, 
  MapPin, Clock, CheckCircle2, ChevronRight,
  Cpu, Phone
} from 'lucide-react';

import { 
  BlueprintBackground, 
  IndustrialCard, 
  HeavyButton, 
  Reveal 
} from './components/ui/Effects';

const App = () => {
  const proyectosEjecucion = [
    {
      id: "PRJ-089",
      nombre: "Torre Empresarial Zénith",
      ubicacion: "Centro Financiero",
      avance: 78,
      fase: "Acabados Internos",
      entrega: "Q4 2026"
    },
    {
      id: "PRJ-092",
      nombre: "Viaducto Norte",
      ubicacion: "Vía Panamericana",
      avance: 45,
      fase: "Estructura Principal",
      entrega: "Q2 2027"
    },
    {
      id: "PRJ-095",
      nombre: "Complejo Logístico Alfa",
      ubicacion: "Zona Franca",
      avance: 92,
      fase: "Certificación Final",
      entrega: "Próximo Mes"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-cyan-500 selection:text-zinc-950 relative overflow-hidden pb-24">
      
      <BlueprintBackground />
      
      {/* NAVEGACIÓN INDUSTRIAL */}
      <nav className="fixed w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
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
            <HeavyButton variant="outline" className="!px-5 !py-2 !text-[10px]">
              Portal Clientes
            </HeavyButton>
          </div>
        </div>
      </nav>

      {/* HERO SECTION DE INGENIERÍA */}
      <section className="relative z-10 pt-36 pb-20 px-6 lg:pt-48 lg:pb-32">
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
                <HeavyButton icon={ArrowRight}>
                  Cotizar Proyecto
                </HeavyButton>
                
                <button className="text-zinc-300 font-bold uppercase tracking-widest text-xs px-6 py-4 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <Ruler className="w-4 h-4" />
                  Ver Especificaciones Técnicas
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            {/* PANEL DE CONTROL SIMULADO */}
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

      {/* MÓDULO DE AVANCE DE OBRA EN TIEMPO REAL (El Gancho Comercial) */}
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
                <IndustrialCard className="h-full flex flex-col group">
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
                    {/* Barra de progreso de ingeniería */}
                    <div className="h-2 w-full bg-zinc-950 border border-zinc-800 overflow-hidden relative">
                      <div 
                        className="absolute top-0 left-0 h-full bg-cyan-500 transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{ width: `${proyecto.avance}%` }}
                      >
                        {/* Rayas de precaución animadas dentro de la barra de progreso */}
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

      {/* BANNER COMERCIAL DE ADQUISICIÓN DB TECH STUDIO (Tema Ingeniería) */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-zinc-950/95 backdrop-blur-2xl border-t-2 border-cyan-500/50 p-4 shadow-[0_-20px_40px_rgba(0,0,0,0.8)]">
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
          
          <button 
            onClick={() => {
              const mensaje = "Hola Ing. Dayron. Estoy revisando el Demo para Constructoras y me interesa cotizar una plataforma interactiva con seguimiento de obras en tiempo real para nuestros proyectos. ¿Podemos agendar una revisión técnica?";
              window.open(`https://wa.me/573104208919?text=${encodeURIComponent(mensaje)}`, '_blank');
            }}
            className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-zinc-950 px-8 py-3 font-extrabold text-xs uppercase tracking-widest transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 shrink-0 shadow-[4px_4px_0px_rgba(6,182,212,0.3)] hover:shadow-[2px_2px_0px_rgba(6,182,212,0.5)]"
          >
            <Phone className="w-4 h-4" />
            Solicitar Presupuesto
          </button>
        </div>
      </div>

    </div>
  );
};

export default App;