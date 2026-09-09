import React, { useState } from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';
import { useModal } from '../context/ModalContext';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const { openQuoteModal } = useModal();

  const categories = [
    { id: 'todos', label: 'Todos // All' },
    { id: 'casas', label: 'Viviendas' },
    { id: 'muebles', label: 'Mobiliario' },
    { id: 'cocinas', label: 'Cocinas' },
    { id: 'interiores', label: 'Interiores' },
    { id: 'exteriores', label: 'Exteriores' },
    { id: 'estructuras', label: 'Estructuras' },
    { id: 'modular', label: 'Modular SIP' }
  ];

  const filtered = activeCategory === 'todos'
    ? projects
    : projects.filter(p => p.categoryKey === activeCategory);

  return (
    <div className='w-full bg-[#0c0a09] text-[#f4f1ea]'>
      {/* Page Header */}
      <section className='pt-36 pb-20 border-b-2 border-stone-800 bg-[#171513] bg-grid-pattern'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='inline-block mb-3 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold uppercase tracking-widest text-amber-400'>
            // ARCHIVO DE OBRAS COMPLETADAS
          </div>
          <h1 className='text-4xl sm:text-7xl font-display font-black text-stone-100 uppercase leading-none max-w-4xl'>
            PROYECTOS & OBRAS
          </h1>
          <p className='mt-6 text-base sm:text-xl text-stone-300 font-normal max-w-2xl leading-relaxed font-sans'>
            Selección curada de residencias, intervenciones de interiorismo y piezas a medida ejecutadas en maderas nobles.
          </p>

          {/* Interactive Filter Pills */}
          <div className='mt-10 flex flex-wrap items-center gap-2 pt-6 border-t-2 border-stone-800'>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider border-2 transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-stone-950 border-stone-950 shadow-brutal-sm'
                    : 'bg-stone-900 text-stone-400 hover:text-stone-100 border-stone-800 hover:border-stone-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className='py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between mb-8 text-xs font-mono text-stone-400 border-b border-stone-800/80 pb-3'>
            <span>MOSTRANDO {filtered.length} PROYECTOS</span>
            <span className='text-amber-400 font-bold'>// {categories.find(c => c.id === activeCategory)?.label}</span>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Bottom Banner */}
          <div className='mt-24 p-8 sm:p-12 bg-stone-900 border-2 border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-brutal-dark'>
            <div>
              <h3 className='text-2xl sm:text-3xl font-display font-extrabold text-stone-100 uppercase'>
                ¿Tenés un proyecto en mente?
              </h3>
              <p className='text-stone-400 text-sm mt-1 max-w-lg font-sans'>
                Evaluamos tus planos o croquis iniciales y te brindamos asesoramiento técnico preliminar sin cargo.
              </p>
            </div>
            <Button
              variant='amber'
              size='md'
              showArrow
              onClick={() => openQuoteModal()}
            >
              Solicitar presupuesto
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
