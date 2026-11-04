import React, { useState } from 'react';
import { 
  Building2, HardHat, Ruler, BarChart3, ArrowRight, 
  MapPin, Clock, Cpu, Phone, X, Lock, FileText, Download, Palette
} from 'lucide-react';

import { 
  BlueprintBackground, 
  IndustrialCard, 
  HeavyButton, 
  Reveal 
} from './components/ui/Effects';

// MOTOR DE TEMAS DE INGENIERÍA
const themeConfig = {
  cyber: {
    id: 'cyber', name: 'BIM Tech (Cian)',
    bgApp: 'bg-zinc-950', bgNav: 'bg-zinc-950/90', bgCard: 'bg-zinc-900/80',
    textMain: 'text-zinc-100', textMuted: 'text-zinc-400',
    accent: 'text-cyan-500', accentHex: '#06b6d4',
    border: 'border-cyan-500/30', borderHover: 'hover:border-cyan-500/50',
    buttonBg: 'bg-cyan-500 hover:bg-cyan-400 text-zinc-950',
    glow: 'rgba(6,182,212,0.15)',
    gridLines: 'border-zinc-800'
  },
  machinery: {
    id: 'machinery', name: 'Obra Civil (Naranja)',
    bgApp: 'bg-neutral-950', bgNav: 'bg-neutral-950/90', bgCard: 'bg-neutral-900/80',
    textMain: 'text-neutral-100', textMuted: 'text-neutral-400',
    accent: 'text-orange-500', accentHex: '#f97316',
    border: 'border-orange-500/30', borderHover: 'hover:border-orange-500/50',
    buttonBg: 'bg-orange-500 hover:bg-orange-400 text-neutral-950',
    glow: 'rgba(249,115,22,0.15)',
    gridLines: 'border-neutral-800'
  },
  concrete: {
    id: 'concrete', name: 'Arquitectura (Claro)',
    bgApp: 'bg-slate-100', bgNav: 'bg-slate-100/90', bgCard: 'bg-white/80',
    textMain: 'text-slate-900', textMuted: 'text-slate-600',
    accent: 'text-blue-700', accentHex: '#1d4ed8',
    border: 'border-blue-700/30', borderHover: 'hover:border-blue-700/50',
    buttonBg: 'bg-blue-700 hover:bg-blue-600 text-white',
    glow: 'rgba(29,78,216,0.08)',
    gridLines: 'border-slate-300'
  }
};

const Modal = ({ isOpen, onClose, title, children, icon: Icon, t }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className={`absolute inset-0 ${t.bgApp} opacity-90 backdrop-blur-sm cursor-pointer`} onClick={onClose} />
      <div className={`relative ${t.bgCard} border ${t.border} w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200`}>
        <div className={`flex items-center justify-between p-4 border-b ${t.gridLines} ${t.id === 'concrete' ? 'bg-slate-200' : 'bg-black/50'}`}>
          <div className={`flex items-center gap-2 ${t.accent} font-mono text-xs uppercase tracking-widest`}>
            {Icon && <Icon className="w-4 h-4" />}
            {title}
          </div>
          <button onClick={onClose} className={`${t.textMuted} hover:${t.accent} transition-colors`}>
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
  const [activeModal, setActiveModal] = useState(null);
  const [activeTheme, setActiveTheme] = useState('cyber');
  
  const t = themeConfig[activeTheme];

  const proyectosEjecucion = [
    { id: "PRJ-089", nombre: "Torre Empresarial Zénith", ubicacion: "Centro Financiero", avance: 78, fase: "Acabados Internos", entrega: "Q4 2026" },
    { id: "PRJ-092", nombre: "Viaducto Norte", ubicacion: "Vía Panamericana", avance: 45, fase: "Estructura Principal", entrega: "Q2 2027" },
    { id: "PRJ-095", nombre: "Complejo Logístico Alfa", ubicacion: "Zona Franca", avance: 92, fase: "Certificación Final", entrega: "Próximo Mes" }
  ];

  const handleCotizar = () => {
    const msgObra = `Hola Ing. Dayron. Vengo de revisar el Demo de Constructora [REF: DEMO-OBRA] y me interesa digitalizar nuestros proyectos.`;
    window.open(`https://wa.me/573104208919?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <div className={`min-h-screen ${t.bgApp} ${t.textMain} font-sans relative overflow-hidden pb-24 transition-colors duration-500`}>
      <BlueprintBackground theme={t} />
      
      {/* NAVEGACIÓN */}
      <nav className={`fixed w-full z-50 ${t.bgNav} backdrop-blur-md border-b ${t.gridLines} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`${t.buttonBg} p-2`}>
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className={`font-extrabold text-2xl tracking-tighter ${t.textMain} block leading-none`}>
                RINO<span className={t.accent}>.</span>
              </span>
              <span className={`font-mono text-[10px] tracking-[0.2em] ${t.textMuted} uppercase`}>Ingeniería Civil</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6 font-bold text-xs tracking-widest uppercase">
            
            {/* SELECTOR DE TEMAS */}
            <div className={`flex items-center gap-2 mr-4 px-4 py-2 border ${t.border} bg-opacity-50`}>
              <Palette className={`w-3.5 h-3.5 ${t.accent}`} />
              {Object.keys(themeConfig).map((themeKey) => (
                <button 
                  key={themeKey}
                  onClick={() => setActiveTheme(themeKey)}
                  className={`w-3 h-3 rounded-full border border-black/20 transition-transform ${activeTheme === themeKey ? 'scale-125 ring-2 ring-offset-1 ring-offset-transparent ring-current' : 'opacity-50 hover:opacity-100'} 
                  ${themeKey === 'cyber' ? 'bg-cyan-500' : themeKey === 'machinery' ? 'bg-orange-500' : 'bg-blue-700'}`}
                  style={{ color: themeConfig[themeKey].accentHex }}
                  title={themeConfig[themeKey].name}
                />
              ))}
            </div>

            <a href="#proyectos" className={`${t.textMuted} hover:${t.accent} transition-colors`}>Portafolio</a>
            <a href="#avance" className={`${t.textMuted} hover:${t.accent} transition-colors`}>Estado de Obras</a>
            <HeavyButton variant="outline" className="!px-5 !py-2 !text-[10px]" theme={t} onClick={() => setActiveModal('login')}>
              Portal Clientes
            </HeavyButton>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="proyectos" className="relative z-10 pt-36 pb-20 px-6 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="max-w-2xl">
              <div className={`inline-flex items-center gap-2 px-3 py-1 bg-opacity-10 border ${t.border} ${t.accent} text-[10px] font-mono mb-6 uppercase tracking-widest`} style={{ backgroundColor: `${t.accentHex}10` }}>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: t.accentHex }} />
                <span>Sistema de Gestión de Obras Activo</span>
              </div>
              
              <h1 className={`text-5xl lg:text-7xl font-extrabold tracking-tighter mb-6 ${t.textMain} leading-[1.1]`}>
                CONSTRUIMOS <br/>
                LA INFRAESTRUCTURA <br/>
                <span className={t.accent}>DEL MAÑANA.</span>
              </h1>
              
              <p className={`text-lg ${t.textMuted} mb-10 leading-relaxed font-light max-w-lg`}>
                Ejecución de proyectos civiles, comerciales e industriales con precisión milimétrica, control de presupuestos en tiempo real y cumplimiento estricto de cronogramas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <HeavyButton icon={ArrowRight} onClick={handleCotizar} theme={t}>
                  Cotizar Proyecto
                </HeavyButton>
                
                <button 
                  onClick={() => setActiveModal('specs')}
                  className={`${t.textMuted} font-bold uppercase tracking-widest text-xs px-6 py-4 hover:${t.accent} transition-colors flex items-center gap-2`}
                >
                  <Ruler className="w-4 h-4" />
                  Ver Especificaciones
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            {/* PANEL DE ESTADÍSTICAS */}
            <div className={`relative ${t.bgCard} border ${t.gridLines} p-2 shadow-2xl`}>
              <div className={`absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 ${t.border.replace('border-', 'border-').replace('/30', '')}`} />
              <div className={`absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 ${t.border.replace('border-', 'border-').replace('/30', '')}`} />
              
              <div className={`${t.bgApp} border ${t.gridLines} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <BarChart3 className={`w-32 h-32 ${t.accent}`} />
                </div>
                
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  {[
                    { label: "M² CONSTRUIDOS", val: "+150K" },
                    { label: "PROYECTOS", val: "84" },
                    { label: "DÍAS SIN ACCIDENTES", val: "1,420" },
                    { label: "CAPACIDAD", val: "100%" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <p className={`font-mono ${t.accent} text-xs mb-1`}>{stat.label}</p>
                      <p className={`text-4xl font-extrabold ${t.textMain}`}>{stat.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MÓDULO DE AVANCE DE OBRA */}
      <section id="avance" className={`relative z-10 py-24 px-6 border-y ${t.gridLines} transition-colors duration-500`} style={{ backgroundColor: `${t.accentHex}05` }}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <HardHat className={`w-5 h-5 ${t.accent}`} />
                  <span className={`${t.accent} font-mono text-xs uppercase tracking-widest`}>Dashboard de Obras</span>
                </div>
                <h2 className={`text-3xl lg:text-4xl font-extrabold ${t.textMain} uppercase tracking-tight`}>Estado de Ejecución</h2>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {proyectosEjecucion.map((proyecto, idx) => (
              <Reveal key={proyecto.id} delay={idx * 0.1}>
                <IndustrialCard className="h-full flex flex-col group" theme={t} onClick={() => setActiveModal('specs')}>
                  <div className="flex justify-between items-start mb-6">
                    <span className={`font-mono text-xs ${t.textMuted} ${t.id === 'concrete' ? 'bg-slate-200' : 'bg-black/50'} px-2 py-1 border ${t.gridLines}`}>
                      {proyecto.id}
                    </span>
                    <span className={`font-mono text-xs ${t.accent} flex items-center gap-1`}>
                      <Clock className="w-3 h-3" /> {proyecto.entrega}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-bold ${t.textMain} mb-2`}>{proyecto.nombre}</h3>
                  <p className={`${t.textMuted} text-sm flex items-center gap-2 mb-8`}>
                    <MapPin className="w-4 h-4" /> {proyecto.ubicacion}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex justify-between font-mono text-xs mb-2">
                      <span className={t.textMuted}>FASE: {proyecto.fase}</span>
                      <span className={`${t.accent} font-bold`}>{proyecto.avance}%</span>
                    </div>
                    <div className={`h-2 w-full ${t.id === 'concrete' ? 'bg-slate-200' : 'bg-black/50'} border ${t.gridLines} relative`}>
                      <div 
                        className="absolute top-0 left-0 h-full transition-all duration-1000 ease-out overflow-hidden"
                        style={{ width: `${proyecto.avance}%`, backgroundColor: t.accentHex }}
                      >
                        <div className="absolute inset-0 w-full h-full opacity-30" 
                             style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.5) 10px, rgba(0,0,0,0.5) 20px)' }}>
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

      {/* --- MODALES --- */}
      <Modal isOpen={activeModal === 'login'} onClose={() => setActiveModal(null)} title="Portal Inversores" icon={Lock} t={t}>
        <div className="space-y-4">
          <div>
            <label className={`font-mono text-xs ${t.accent} mb-1 block`}>ID DE INVERSOR</label>
            <input type="text" className={`w-full ${t.bgApp} border ${t.gridLines} p-3 ${t.textMain} outline-none focus:${t.border} font-mono`} placeholder="INV-7842" />
          </div>
          <HeavyButton className="w-full mt-4" onClick={() => setActiveModal(null)} theme={t}>Autenticar</HeavyButton>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'specs'} onClose={() => setActiveModal(null)} title="Documentación BIM" icon={FileText} t={t}>
        <div className={`border ${t.gridLines} ${t.bgApp} p-4 mb-4`}>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className={`font-bold ${t.textMain}`}>Dossier_RINO.pdf</p>
              <p className={`text-xs ${t.textMuted} font-mono`}>2.4 MB</p>
            </div>
            <FileText className={`${t.accent} w-8 h-8 opacity-50`} />
          </div>
        </div>
        <HeavyButton variant="outline" className="w-full !py-3" onClick={() => setActiveModal(null)} theme={t}>
          <Download className="w-4 h-4 mr-2 inline" /> Descargar
        </HeavyButton>
      </Modal>
    </div>
  );
};

export default App;
