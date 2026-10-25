import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Layers, Sparkles, Plus, Maximize2 } from 'lucide-react';
import Button from '../components/ui/Button';
import ProjectCard from '../components/ui/ProjectCard';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { useModal } from '../context/ModalContext';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const { openQuoteModal, openImagePreview } = useModal();

  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to='/servicios' replace />;
  }

  const relatedProjects = projects.filter(p => 
    p.category.toLowerCase().includes(service.title.toLowerCase().slice(0, 4)) ||
    p.materials.toLowerCase().includes('madera')
  ).slice(0, 3);

  return (
    <div className='w-full overflow-x-hidden bg-[#0c0a09] text-[#f4f1ea]'>
      {/* Header */}
      <section className='pt-36 pb-20 border-b-2 border-stone-800 bg-[#171513] bg-grid-pattern overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Link
            to='/servicios'
            className='inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider sm:tracking-widest text-amber-400 hover:text-amber-300 transition-colors mb-6 flex-wrap'
          >
            <ArrowLeft className='w-4 h-4 mr-2 flex-shrink-0' />
            <span>VOLVER AL CATÁLOGO DE SERVICIOS</span>
          </Link>

          <div className='flex flex-wrap items-center gap-3 mb-4'>
            <span className='px-3 py-1 bg-stone-900 border border-stone-700 text-xs font-mono text-amber-400 font-bold'>
              // ESPECIALIDAD {service.number}
            </span>
            <span className='text-xs font-mono text-stone-400 uppercase tracking-widest'>
              {service.categoryTag}
            </span>
          </div>

          <h1 className='text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black text-stone-100 uppercase leading-[1.08] max-w-4xl break-words [overflow-wrap:anywhere]'>
            {service.title}
          </h1>

          <p className='mt-6 text-base sm:text-xl text-stone-300 font-normal max-w-3xl leading-relaxed font-sans'>
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Details */}
      <section className='py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            {/* Left Column */}
            <div className='lg:col-span-8 space-y-12'>
              <div
                onClick={() => openImagePreview(service.image, service.title)}
                className='relative aspect-[16/10] w-full overflow-hidden bg-stone-950 border-2 border-stone-800 shadow-brutal-dark cursor-zoom-in group'
                title='Clic para ampliar pantalla completa'
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className='w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute bottom-3 right-3 px-3 py-1.5 bg-stone-950/90 backdrop-blur-sm border border-stone-700 text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity z-10'>
                  <Maximize2 className='w-3.5 h-3.5' />
                  <span>AMPLIAR PANTALLA COMPLETA</span>
                </div>
              </div>

              <div>
                <h2 className='text-2xl sm:text-4xl font-display font-bold text-stone-100 uppercase mb-4'>
                  Memoria descriptiva
                </h2>
                <p className='text-base sm:text-lg text-stone-300 leading-relaxed font-sans'>
                  {service.fullDescription}
                </p>
              </div>

              {/* Technical features */}
              <div className='p-8 bg-stone-900 border-2 border-stone-800 shadow-brutal-sm'>
                <h3 className='text-xl font-display font-bold text-stone-100 uppercase mb-6 flex items-center gap-2'>
                  <Plus className='w-5 h-5 text-amber-400' />
                  <span>Especificaciones & Estándares</span>
                </h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className='flex items-start gap-3 p-3 bg-stone-950 border border-stone-800'>
                      <CheckCircle2 className='w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5' />
                      <span className='text-xs sm:text-sm text-stone-300 font-sans'>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery details */}
              {service.gallery && service.gallery.length > 1 && (
                <div>
                  <h3 className='text-xl font-display font-bold text-stone-100 uppercase mb-6'>
                    Galería de despiece y detalles
                  </h3>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {service.gallery.slice(1).map((imgUrl, i) => (
                      <div
                        key={i}
                        onClick={() => openImagePreview(imgUrl, `${service.title} — Detalle ${i + 1}`)}
                        className='relative aspect-[4/3] overflow-hidden border-2 border-stone-800 bg-stone-950 cursor-zoom-in group'
                        title='Clic para ampliar pantalla completa'
                      >
                        <img
                          src={imgUrl}
                          alt='Detalle'
                          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                        />
                        <div className='absolute bottom-3 right-3 p-2 bg-stone-950/90 border border-stone-700 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity z-10'>
                          <Maximize2 className='w-3.5 h-3.5' />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar */}
            <div className='lg:col-span-4 space-y-6'>
              <div className='p-8 bg-stone-900 border-2 border-stone-800 shadow-brutal sticky top-28 space-y-6'>
                <h3 className='text-lg font-display font-bold uppercase tracking-wider text-amber-400 border-b-2 border-stone-800 pb-3'>
                  // FICHA TÉCNICA
                </h3>

                <div>
                  <span className='text-xs font-mono uppercase text-stone-500 block mb-1'>
                    PLAZO DE PRODUCCIÓN ESTIMADO
                  </span>
                  <div className='flex items-center gap-2 text-stone-100 font-mono font-bold text-base'>
                    <Clock className='w-4 h-4 text-amber-400' />
                    <span>{service.processTime}</span>
                  </div>
                </div>

                <div>
                  <span className='text-xs font-mono uppercase text-stone-500 block mb-2'>
                    MADERAS RECOMENDADAS
                  </span>
                  <div className='flex flex-wrap gap-2'>
                    {service.materials.map((mat, i) => (
                      <span
                        key={i}
                        className='px-2.5 py-1 bg-stone-950 border border-stone-700 text-xs font-mono font-bold text-amber-400'
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='pt-4 border-t-2 border-stone-800'>
                  <Button
                    variant='amber'
                    size='lg'
                    className='w-full'
                    showArrow
                    onClick={() => openQuoteModal(service.title)}
                  >
                    Cotizar este servicio
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className='mt-28 pt-16 border-t-2 border-stone-800'>
              <div className='flex items-center justify-between mb-10'>
                <div>
                  <div className='inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-2'>
                    // OBRAS EJECUTADAS
                  </div>
                  <h3 className='text-2xl sm:text-4xl font-display font-bold text-stone-100 uppercase'>
                    Proyectos relacionados
                  </h3>
                </div>
                <Link to='/proyectos' className='text-xs font-mono font-bold uppercase text-amber-400 hover:text-amber-300 hidden sm:inline-block'>
                  VER TODO EL PORTFOLIO →
                </Link>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {relatedProjects.map(proj => (
                  <ProjectCard key={proj.id} project={proj} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
