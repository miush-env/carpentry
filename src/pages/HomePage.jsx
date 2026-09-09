import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Sparkles, Hammer, Ruler, Clock, Phone, MessageSquare, Plus, ArrowUpRight } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import ServiceCard from '../components/ui/ServiceCard';
import ProjectCard from '../components/ui/ProjectCard';
import MaterialCard from '../components/ui/MaterialCard';
import Carousel from '../components/ui/Carousel';
import Accordion from '../components/ui/Accordion';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { materials } from '../data/materials';
import { testimonials } from '../data/testimonials';
import { faq } from '../data/faq';
import { useModal } from '../context/ModalContext';
export default function HomePage() {
  const { openQuoteModal } = useModal();
  const [activeProjectFilter, setActiveProjectFilter] = useState('todos');
  const processRef = useRef(null);
  const [isProcessInView, setIsProcessInView] = useState(false);

  useEffect(() => {
    const processObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsProcessInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (processRef.current) processObserver.observe(processRef.current);

    return () => {
      processObserver.disconnect();
    };
  }, []);

  const projectCategories = [
    { id: 'todos', label: 'Todos // All' },
    { id: 'casas', label: 'Viviendas' },
    { id: 'cocinas', label: 'Cocinas' },
    { id: 'muebles', label: 'Mobiliario' },
    { id: 'interiores', label: 'Interiores' },
    { id: 'exteriores', label: 'Exteriores' },
    { id: 'modular', label: 'Modular SIP' }
  ];

  const filteredProjects = activeProjectFilter === 'todos'
    ? projects.slice(0, 6)
    : projects.filter(p => p.categoryKey === activeProjectFilter).slice(0, 6);

  const processSteps = [
    {
      num: '01',
      title: 'Consulta & Diagnóstico',
      desc: 'Relevamiento del espacio, análisis de planos arquitectónicos y factibilidad en maderas nobles.',
      icon: MessageSquare
    },
    {
      num: '02',
      title: 'Ingeniería & Proyección 3D',
      desc: 'Modelado paramétrico, despiece técnico milimétrico y presupuesto formal sin costos ocultos.',
      icon: Ruler
    },
    {
      num: '03',
      title: 'Fabricación en Taller CNC',
      desc: 'Ebanistería artesanal + mecanizado con maderas estacionadas y herrajes alemanes ocultos.',
      icon: Hammer
    },
    {
      num: '04',
      title: 'Montaje & Entrega en Obra',
      desc: 'Instalación limpia y calibrada en destino a cargo de nuestros propios oficiales carpinteros.',
      icon: CheckCircle
    }
  ];

  // Words decomposition for letter-by-letter hammer strike animation
  const word1 = "DISEÑO,".split("");
  const word2 = "madera".split("");
  const word3 = "&".split("");
  const word4 = "ARQUITECTURA.".split("");

  let letterIndex = 0;

  return (
    <div className='flex flex-col w-full bg-[#0c0a09] text-[#f4f1ea]'>
      {/* 1. HERO SECTION (Monumental Modern Brutalist con Martillado Letra por Letra) */}
      <section className='relative min-h-[96vh] flex items-center justify-center bg-stone-950 text-stone-100 overflow-hidden pt-28 pb-16 bg-grid-pattern'>
        {/* Background Visual Layer con vibración de martillazo */}
        <div className='absolute inset-0 z-0 overflow-hidden pointer-events-none'>
          <div className='w-full h-full animate-hero-vibrate'>
            <img
              src='https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=90'
              alt='Arquitectura de madera'
              className='w-full h-full object-cover brightness-[0.38] contrast-125 select-none'
              priority='true'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/50 to-transparent' />
          </div>
        </div>

        {/* Hero Content */}
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between'>
          {/* Top meta strip with workshop beacon */}
          <div className='flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-stone-800/80 pb-4 text-xs font-mono text-stone-400 animate-beam-in'>
            <div className='flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
              <span className='text-stone-300 font-bold'>TALLER ACTIVO · PILAR, BUENOS AIRES</span>
            </div>
            <div className='flex items-center gap-4 text-stone-400'>
              <span className='px-2 py-0.5 bg-stone-900 border border-stone-800 text-amber-400'>[ FSC CERTIFIED ]</span>
              <span className='px-2 py-0.5 bg-stone-900 border border-stone-800 text-stone-300'>[ TOLERANCIA ±0.1MM ]</span>
            </div>
          </div>

          <div className='max-w-5xl'>
            {/* Tag with Laser indicator */}
            <div className='inline-flex items-center gap-2 mb-4 px-2.5 sm:px-3 py-1 bg-amber-500/10 border-2 border-amber-500/40 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider sm:tracking-[0.2em] text-amber-400 shadow-brutal-sm max-w-full truncate animate-beam-in'>
              <span className='w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping' />
              <span>// IDEAS EN MADERA · INGENIERÍA DE AUTOR</span>
            </div>

            {/* Guía de cota / Laser line */}
            <div className='h-[2px] bg-gradient-to-r from-amber-500 via-amber-400 to-transparent mb-5 relative animate-laser-cut'>
              <span className='absolute -top-3 right-4 px-1.5 bg-stone-950 text-[9px] font-mono font-bold text-amber-400 border border-amber-500/50 uppercase tracking-widest hidden sm:inline-block'>
                COTA CERO // ESCUADRA 90°
              </span>
            </div>

            {/* Main Title: Letra por letra con efecto de martillada calibrado */}
            <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-display font-black tracking-tight leading-[1.08] sm:leading-[1.02] text-stone-100 uppercase break-words select-none overflow-visible pt-2 max-w-5xl'>
              <div className='flex flex-wrap items-baseline gap-x-3 sm:gap-x-5'>
                {/* Palabra 1: DISEÑO, */}
                <span className='inline-block whitespace-nowrap'>
                  {word1.map((char) => {
                    const idx = letterIndex++;
                    return (
                      <span
                        key={`w1-${idx}`}
                        className='animate-hammer-letter'
                        style={{ animationDelay: `${0.12 + idx * 0.045}s` }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>

                {/* Palabra 2: madera (itálica ámbar) */}
                <span className='inline-block font-serif italic font-normal text-amber-400 lowercase whitespace-nowrap'>
                  {word2.map((char) => {
                    const idx = letterIndex++;
                    return (
                      <span
                        key={`w2-${idx}`}
                        className='animate-hammer-letter text-amber-400'
                        style={{ animationDelay: `${0.12 + idx * 0.045}s` }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              </div>

              <div className='flex flex-wrap items-baseline gap-x-3 sm:gap-x-5 mt-1 sm:mt-2'>
                {/* Palabra 3: & */}
                <span className='inline-block whitespace-nowrap'>
                  {word3.map((char) => {
                    const idx = letterIndex++;
                    return (
                      <span
                        key={`w3-${idx}`}
                        className='animate-hammer-letter text-amber-400'
                        style={{ animationDelay: `${0.12 + idx * 0.045}s` }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>

                {/* Palabra 4: ARQUITECTURA. */}
                <span className='inline-block whitespace-nowrap'>
                  {word4.map((char) => {
                    const idx = letterIndex++;
                    return (
                      <span
                        key={`w4-${idx}`}
                        className='animate-hammer-letter'
                        style={{ animationDelay: `${0.12 + idx * 0.045}s` }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              </div>
            </h1>

            {/* Description paragraph */}
            <p
              className='mt-5 sm:mt-6 text-sm sm:text-lg md:text-xl text-stone-300 font-normal max-w-3xl leading-relaxed font-sans animate-beam-in'
              style={{ animationDelay: '1.4s' }}
            >
              Materializamos obras de alta gama y mobiliario de autor donde la calidez del material noble se une con la precisión milimétrica de la ingeniería contemporánea.
            </p>

            {/* CTA Buttons with wooden planks fill animation */}
            <div
              className='mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-beam-in'
              style={{ animationDelay: '1.45s' }}
            >
              <Link to='/proyectos'>
                <Button variant='amber' size='lg' showArrow className='w-full sm:w-auto'>
                  Explorar proyectos
                </Button>
              </Link>
              <Link to='/servicios'>
                <Button variant='outline' size='lg' className='w-full sm:w-auto'>
                  Ver 9 Especialidades
                </Button>
              </Link>
            </div>
          </div>

          {/* Bottom Hero Metric Blocks */}
          <div className='mt-16 pt-8 border-t-2 border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-beam-in' style={{ animationDelay: '1.55s' }}>
            <div className='p-6 bg-stone-900/90 border-2 border-stone-800 shadow-brutal-sm hover:border-amber-500 transition-colors'>
              <span className='text-3xl sm:text-4xl font-display font-black text-amber-400'>+10 AÑOS</span>
              <span className='text-xs font-mono uppercase tracking-wider text-stone-400 block mt-1'>
                Trayectoria en obras & ebanistería
              </span>
            </div>
            <div className='p-6 bg-stone-900/90 border-2 border-stone-800 shadow-brutal-sm hover:border-amber-500 transition-colors'>
              <span className='text-3xl sm:text-4xl font-display font-black text-stone-100'>+150 OBRAS</span>
              <span className='text-xs font-mono uppercase tracking-wider text-stone-400 block mt-1'>
                Residenciales y comerciales entregadas
              </span>
            </div>
            <div className='p-6 bg-stone-900/90 border-2 border-stone-800 shadow-brutal-sm hover:border-amber-500 transition-colors'>
              <span className='text-3xl sm:text-4xl font-display font-black text-stone-100'>±0.0 MM</span>
              <span className='text-xs font-mono uppercase tracking-wider text-stone-400 block mt-1'>
                Tolerancia milimétrica de encastre
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE MARQUEE TICKER BANNER */}
      <div className='bg-amber-500 text-stone-950 font-mono font-black text-xs sm:text-sm uppercase py-3 overflow-hidden border-y-2 border-stone-950 select-none'>
        <div className='animate-marquee flex items-center gap-8'>
          <span>// ARQUITECTURA EN MADERA</span>
          <span>✦</span>
          <span>MUEBLES A MEDIDA</span>
          <span>✦</span>
          <span>COCINAS DE AUTOR</span>
          <span>✦</span>
          <span>ESTRUCTURAS GLULAM</span>
          <span>✦</span>
          <span>CONSTRUCCIÓN MODULAR SIP</span>
          <span>✦</span>
          <span>PISOS & DECKS EN LAPACHO</span>
          <span>✦</span>
          <span>REVESTIMIENTOS ACÚSTICOS</span>
          <span>✦</span>
          <span>HERRAJES OCULTOS DE PRECISIÓN</span>
          <span>✦</span>
          <span>// ARQUITECTURA EN MADERA</span>
          <span>✦</span>
          <span>MUEBLES A MEDIDA</span>
          <span>✦</span>
          <span>COCINAS DE AUTOR</span>
          <span>✦</span>
        </div>
      </div>

      {/* 3. SERVICES SECTION (High Contrast) */}
      <section className='py-28 bg-[#171513] border-b-2 border-stone-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionHeader
            eyebrow='CATÁLOGO DE ESPECIALIDADES'
            title='Soluciones integrales en madera'
            subtitle='Diseñamos y construimos con tecnología de punta y ebanistería tradicional para resolver desde un placard hasta una residencia completa.'
            linkText='Ver las 9 categorías'
            linkTo='/servicios'
          />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION (Dark Portfolio) */}
      <section className='py-28 bg-[#0c0a09] border-b-2 border-stone-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
            <div>
              <div className='inline-block mb-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold uppercase tracking-widest text-amber-400'>
                // PORTAFOLIO DE OBRAS
              </div>
              <h2 className='text-3xl sm:text-5xl font-display font-black text-stone-100 uppercase'>
                Proyectos destacados
              </h2>
            </div>

            {/* Filter Pills */}
            <div className='flex flex-wrap gap-2'>
              {projectCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveProjectFilter(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border-2 transition-all cursor-pointer ${
                    activeProjectFilter === cat.id
                      ? 'bg-amber-500 text-stone-950 border-stone-950 shadow-brutal-sm'
                      : 'bg-stone-900 text-stone-400 hover:text-stone-100 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} priority={idx === 0} />
            ))}
          </div>

          <div className='mt-16 text-center'>
            <Link to='/proyectos'>
              <Button variant='amber' size='lg' showArrow>
                Ver todos los proyectos (+9 obras)
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION (Blueprint Timeline with Card Dealing Animation & Machinery Lateral Lights) */}
      <section ref={processRef} className='relative py-28 bg-[#141210] border-b-2 border-stone-800 bg-grid-pattern overflow-hidden'>
        {/* Ambient workshop background light wash */}
        <div className='absolute inset-0 pointer-events-none z-0 workshop-ambient-light' style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.03) 45%, transparent 70%)'
        }} />

        {/* Left Machine Spotlight Beam (Tungsten tool source) */}
        <div
          className='absolute top-1/2 -left-36 -translate-y-1/2 w-[580px] h-[580px] pointer-events-none z-0 machine-light-left'
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(217, 119, 6, 0.1) 40%, rgba(180, 83, 9, 0.03) 65%, transparent 75%)'
          }}
        />

        {/* Right Machine Spotlight Beam (Precision machinery lamp) */}
        <div
          className='absolute top-1/2 -right-36 -translate-y-1/2 w-[580px] h-[580px] pointer-events-none z-0 machine-light-right'
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.18) 0%, rgba(217, 119, 6, 0.08) 45%, rgba(120, 53, 15, 0.02) 65%, transparent 75%)'
          }}
        />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <SectionHeader
            eyebrow='METODOLOGÍA DE TALLER'
            title='De la idea al encastre final'
            subtitle='Un flujo de trabajo riguroso que garantiza previsibilidad en plazos, costos y terminación superficial.'
            align='center'
          />

          <div className='relative mt-20'>
            {/* Connecting Timeline Line */}
            <div className='hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-stone-800 -translate-y-1/2 z-0' />

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10'>
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.num}
                    className={`relative p-8 bg-stone-900 border-2 border-stone-800 hover:border-amber-500 transition-all duration-300 shadow-brutal-dark group deal-card ${
                      isProcessInView ? 'deal-card-active' : ''
                    }`}
                    style={{
                      animationDelay: `${0.12 + idx * 0.18}s`
                    }}
                  >
                    <div className='flex flex-col h-full'>
                      <div className='flex items-center justify-between mb-6'>
                        <span className='text-3xl font-mono font-black text-amber-500 group-hover:scale-110 transition-transform'>
                          {step.num}
                        </span>
                        <div className='w-10 h-10 bg-stone-950 border border-stone-800 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950 group-hover:border-amber-500 transition-all duration-300 shadow-brutal-sm'>
                          <Icon className='w-5 h-5' />
                        </div>
                      </div>
                      <h3 className='text-xl font-display font-bold text-stone-100 mb-2 group-hover:text-amber-400 transition-colors'>
                        {step.title}
                      </h3>
                      <p className='text-sm text-stone-400 leading-relaxed font-sans'>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MATERIALS SECTION */}
      <section className='relative py-28 bg-[#0c0a09] border-b-2 border-stone-800 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <SectionHeader
            eyebrow='MATERIA PRIMA SELECCIONADA'
            title='Maderas nobles & insumos premium'
            subtitle='Solo procesamos madera maciza estacionada con <12% de humedad y tableros certificados de origen sustentable FSC.'
            linkText='Ver catálogo de materiales'
            linkTo='/materiales'
          />

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 mt-12'>
            {materials.slice(0, 4).map((material) => (
              <MaterialCard
                key={material.id}
                material={material}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className='py-28 bg-[#171513] border-b-2 border-stone-800'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionHeader
            eyebrow='OPINIONES TÉCNICAS'
            title='La confianza de arquitectos y clientes'
            subtitle='Experiencias de quienes eligieron la precisión y la calidez de NEXO para sus proyectos.'
            align='center'
          />

          <Carousel testimonials={testimonials} />
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className='py-28 bg-[#0c0a09] border-b-2 border-stone-800'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionHeader
            eyebrow='CONSULTAS FRECUENTES'
            title='Todo lo que necesitás saber'
            subtitle='Detalles sobre modalidades de contratación, plazos, visitas a obra y formas de pago.'
          />

          <div className='bg-stone-900 border-2 border-stone-800 p-8 shadow-brutal-dark'>
            <Accordion items={faq} />
          </div>
        </div>
      </section>

      {/* 9. FINAL HIGH-IMPACT CTA */}
      <section className='relative py-32 bg-stone-950 text-stone-100 overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85'
            alt='Residencia en madera'
            className='w-full h-full object-cover brightness-[0.3] contrast-125'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent' />
        </div>

        <div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='inline-block mb-3 px-3 py-1 bg-amber-500 text-stone-950 font-mono font-bold text-xs uppercase tracking-widest'>
            // INICIAR PROYECTO
          </div>
          <h2 className='text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-stone-100 uppercase'>
            ¿Listo para construir <span className='font-serif italic font-normal text-amber-400 lowercase'>con madera</span> noble?
          </h2>
          <p className='mt-6 text-base sm:text-xl text-stone-300 max-w-2xl leading-relaxed font-sans'>
            Contanos sobre tu obra o proyecto de equipamiento. Realizamos cotizaciones con cómputo métrico y despiece preliminar sin cargo.
          </p>
          <div className='mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4'>
            <Button
              variant='amber'
              size='lg'
              showArrow
              onClick={() => openQuoteModal()}
              className='w-full sm:w-auto'
            >
              Solicitar presupuesto formal
            </Button>
            <Link to='/contacto'>
              <Button variant='outline' size='lg' className='w-full sm:w-auto'>
                Contactar al taller
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
