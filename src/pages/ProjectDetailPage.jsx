import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MapPin, Maximize2, Layers, Calendar, Check, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Button from '../components/ui/Button';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';
import { useModal } from '../context/ModalContext';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { openQuoteModal } = useModal();

  const currentIndex = projects.findIndex(p => p.slug === slug);

  if (currentIndex === -1) {
    return <Navigate to='/proyectos' replace />;
  }

  const project = projects[currentIndex];
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  const [activeImage, setActiveImage] = useState(0);

  const related = projects
    .filter(p => p.id !== project.id && (p.categoryKey === project.categoryKey || p.category === project.category))
    .slice(0, 3);

  return (
    <div className='w-full overflow-x-hidden bg-[#0c0a09] text-[#f4f1ea]'>
      {/* Header */}
      <section className='pt-36 pb-20 border-b-2 border-stone-800 bg-[#171513] bg-grid-pattern overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Link
            to='/proyectos'
            className='inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider sm:tracking-widest text-amber-400 hover:text-amber-300 transition-colors mb-6 flex-wrap'
          >
            <ArrowLeft className='w-4 h-4 mr-2 flex-shrink-0' />
            <span>VOLVER AL PORTFOLIO DE PROYECTOS</span>
          </Link>

          <div className='flex flex-wrap items-center gap-3 mb-4'>
            <span className='px-3 py-1 bg-stone-900 border border-stone-700 text-xs font-mono text-amber-400 font-bold'>
              // {project.category}
            </span>
            <span className='px-2.5 py-1 bg-stone-950 text-xs font-mono text-stone-300 border border-stone-800'>
              AÑO {project.year}
            </span>
          </div>

          <h1 className='text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black text-stone-100 uppercase leading-[1.08] max-w-4xl break-words [overflow-wrap:anywhere]'>
            {project.title}
          </h1>

          <p className='mt-6 text-base sm:text-xl text-stone-300 font-normal max-w-3xl leading-relaxed font-sans'>
            {project.shortDescription}
          </p>

          {/* Quick specs horizontal strip */}
          <div className='mt-10 pt-6 border-t-2 border-stone-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono'>
            <div className='p-4 bg-stone-900 border border-stone-800'>
              <span className='text-stone-500 uppercase block mb-1'>SUPERFICIE</span>
              <span className='text-amber-400 text-sm font-bold'>{project.surface}</span>
            </div>
            <div className='p-4 bg-stone-900 border border-stone-800'>
              <span className='text-stone-500 uppercase block mb-1'>UBICACIÓN</span>
              <span className='text-stone-100 text-sm font-bold'>{project.location}</span>
            </div>
            <div className='p-4 bg-stone-900 border border-stone-800'>
              <span className='text-stone-500 uppercase block mb-1'>MATERIALES</span>
              <span className='text-stone-100 text-sm font-bold truncate block'>{project.materials}</span>
            </div>
            <div className='p-4 bg-stone-900 border border-stone-800'>
              <span className='text-stone-500 uppercase block mb-1'>TIEMPO DE EJECUCIÓN</span>
              <span className='text-stone-100 text-sm font-bold'>{project.leadTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery */}
      <section className='py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden bg-stone-950 border-2 border-stone-800 shadow-brutal-dark'>
            <img
              src={project.gallery[activeImage] || project.heroImage}
              alt={project.title}
              className='w-full h-full object-cover'
            />
          </div>

          {/* Thumbnails */}
          {project.gallery && project.gallery.length > 1 && (
            <div className='flex gap-3 mt-4 overflow-x-auto pb-2'>
              {project.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative flex-shrink-0 w-24 sm:w-36 aspect-[4/3] overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === idx ? 'border-amber-500 shadow-brutal-sm opacity-100' : 'border-stone-800 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt='Thumbnail' className='w-full h-full object-cover' />
                </button>
              ))}
            </div>
          )}

          {/* Story and Specifications */}
          <div className='mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='lg:col-span-7 space-y-8'>
              <div>
                <h2 className='text-2xl sm:text-4xl font-display font-bold text-stone-100 uppercase mb-4'>
                  Memoria de proyecto
                </h2>
                <p className='text-base sm:text-lg text-stone-300 leading-relaxed font-sans'>
                  {project.fullDescription}
                </p>
              </div>

              <div className='p-8 bg-stone-900 border-2 border-stone-800 shadow-brutal-sm'>
                <h3 className='text-lg font-display font-bold uppercase tracking-wider text-amber-400 mb-6 flex items-center gap-2'>
                  <Plus className='w-4 h-4' />
                  <span>Detalles constructivos</span>
                </h3>
                <ul className='space-y-3 font-sans'>
                  {project.details.map((detail, idx) => (
                    <li key={idx} className='flex items-start gap-3 text-sm text-stone-300'>
                      <Check className='w-4 h-4 text-amber-400 flex-shrink-0 mt-1' />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className='lg:col-span-5 space-y-6'>
              <div className='p-8 bg-stone-900 border-2 border-stone-800 shadow-brutal sticky top-28 space-y-6'>
                <h3 className='text-xl font-display font-bold uppercase text-stone-100 border-b-2 border-stone-800 pb-3'>
                  ¿Querés una solución en este estilo?
                </h3>
                <p className='text-sm text-stone-400 font-sans leading-relaxed'>
                  Adaptamos las medidas, volumetría y especies de madera para tu vivienda o emprendimiento.
                </p>

                <Button
                  variant='amber'
                  size='lg'
                  className='w-full'
                  showArrow
                  onClick={() => openQuoteModal(`Inspirado en ${project.title}`)}
                >
                  Solicitar presupuesto similar
                </Button>
              </div>
            </div>
          </div>

          {/* Prev/Next project */}
          <div className='mt-20 pt-10 border-t-2 border-stone-800 flex items-center justify-between'>
            <Link
              to={`/proyectos/${prevProject.slug}`}
              className='group flex items-center gap-3 text-left'
            >
              <div className='w-10 h-10 border-2 border-stone-800 bg-stone-900 flex items-center justify-center text-stone-300 group-hover:bg-amber-500 group-hover:text-stone-950 group-hover:border-amber-500 transition-colors'>
                <ChevronLeft className='w-5 h-5' />
              </div>
              <div>
                <span className='text-[10px] font-mono text-stone-500 uppercase tracking-widest block'>
                  ANTERIOR
                </span>
                <span className='font-display text-stone-100 group-hover:text-amber-400 transition-colors text-sm sm:text-base font-bold uppercase'>
                  {prevProject.title}
                </span>
              </div>
            </Link>

            <Link
              to={`/proyectos/${nextProject.slug}`}
              className='group flex items-center gap-3 text-right'
            >
              <div>
                <span className='text-[10px] font-mono text-stone-500 uppercase tracking-widest block'>
                  SIGUIENTE
                </span>
                <span className='font-display text-stone-100 group-hover:text-amber-400 transition-colors text-sm sm:text-base font-bold uppercase'>
                  {nextProject.title}
                </span>
              </div>
              <div className='w-10 h-10 border-2 border-stone-800 bg-stone-900 flex items-center justify-center text-stone-300 group-hover:bg-amber-500 group-hover:text-stone-950 group-hover:border-amber-500 transition-colors'>
                <ChevronRight className='w-5 h-5' />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
