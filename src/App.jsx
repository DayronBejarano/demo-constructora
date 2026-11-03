import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ChevronRight, 
  HardHat, 
  Ruler, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

const App = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const proyectos = [
    {
      titulo: "Complejo Logístico del Llano",
      categoria: "Infraestructura Industrial",
      ubicacion: "Villavicencio, Meta",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
    },
    {
      titulo: "Torre Residencial Altavista",
      categoria: "Edificación Urbana",
      ubicacion: "Acacías, Meta",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
    },
    {
      titulo: "Pavimentación y Vías Principales",
      categoria: "Obras Civiles",
      ubicacion: "Cundinamarca",
      img: "https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
      
      {/* NAVEGACIÓN CORPORATIVA */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-950 p-2.5 rounded-lg shadow-md">
              <Building2 className="text-amber-500 w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-2xl tracking-tight text-blue-950 block leading-none">RINO</span>
              <span className="font-bold text-[10px] tracking-[0.2em] text-slate-500 uppercase">Constructora</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-700">
            <a href="#proyectos" className="hover:text-amber-600 transition-colors">Proyectos</a>
            <a href="#especialidades" className="hover:text-amber-600 transition-colors">Especialidades</a>
            <a href="#nosotros" className="hover:text-amber-600 transition-colors">Nuestra Firma</a>
            <button className="bg-blue-950 hover:bg-blue-900 text-white px-5 py-2.5 rounded-md font-bold transition-all shadow-md flex items-center gap-2 text-xs uppercase tracking-wider">
              <Phone className="w-4 h-4 text-amber-500" />
              Cotizar Proyecto
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-950/5 border border-blue-950/10 text-blue-950 text-xs font-bold mb-6 uppercase tracking-wider">
              <HardHat className="w-4 h-4 text-amber-600" />
              <span>Ingeniería Civil & Estructural</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 text-blue-950 leading-[1.15]">
              Construimos <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">
                Obras Maestras
              </span><br/>
              en tiempo récord.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-600 mb-8 leading-relaxed">
              Más de 15 años ejecutando proyectos de infraestructura, diseño estructural y obras civiles con precisión milimétrica y cumplimiento presupuestal estricto.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-blue-950 px-7 py-3.5 rounded-md font-bold text-base transition-all flex items-center justify-center gap-2 group shadow-lg shadow-amber-500/20">
                Ver Portafolio de Obras
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border border-slate-300 hover:border-blue-950 text-blue-950 px-7 py-3.5 rounded-md font-bold text-base transition-all flex items-center justify-center gap-2 shadow-sm">
                <Ruler className="w-5 h-5 text-amber-600" />
                Auditoría Técnica
              </button>
            </motion.div>
          </motion.div>

          {/* TARJETA VISUAL / RENDER */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[480px] lg:h-[540px] rounded-2xl bg-blue-950 overflow-hidden shadow-2xl border border-slate-800"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl text-white">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-6 h-6 text-amber-500" />
                  <span className="font-extrabold text-2xl text-amber-500">100% Cumplimiento</span>
                </div>
                <p className="text-sm text-slate-200 leading-snug">
                  Garantía de cumplimiento estructural bajo normativas GSR-10 y certificación de entrega a tiempo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MÉTRICAS DE AUTORIDAD */}
      <section className="bg-blue-950 text-white py-12 border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-extrabold text-amber-500 mb-1">+150,000 m²</div>
            <div className="text-xs uppercase tracking-wider text-slate-300 font-medium">Construidos</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-extrabold text-amber-500 mb-1">100%</div>
            <div className="text-xs uppercase tracking-wider text-slate-300 font-medium">En Plazo Legal</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-extrabold text-amber-500 mb-1">+45</div>
            <div className="text-xs uppercase tracking-wider text-slate-300 font-medium">Obras Principales</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-extrabold text-amber-500 mb-1">ISO 9001</div>
            <div className="text-xs uppercase tracking-wider text-slate-300 font-medium">Calidad Certificada</div>
          </div>
        </div>
      </section>

      {/* GRILLA DE PROYECTOS */}
      <section id="proyectos" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-amber-600 font-bold text-xs uppercase tracking-widest block mb-2">Portafolio Destacado</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-blue-950">Nuestras Obras Recientes</h2>
          </div>
          <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-sm">
            Proyectos diseñados y ejecutados bajo los más rigurosos estándares de la ingeniería moderna en la región.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {proyectos.map((proyecto, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={proyecto.img} 
                  alt={proyecto.titulo} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-blue-950/90 text-amber-500 text-xs font-bold px-3 py-1 rounded-sm backdrop-blur-sm">
                  {proyecto.categoria}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>{proyecto.ubicacion}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-4">{proyecto.titulo}</h3>
                <button className="text-amber-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Ver Ficha Técnica <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default App;