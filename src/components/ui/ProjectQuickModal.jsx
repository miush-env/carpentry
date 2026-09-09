import React from 'react';
import { Link } from 'react-router-dom';
import { X, MapPin, Maximize2 } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function ProjectQuickModal() {
  const { selectedQuickProject, closeQuickProject, openQuoteModal } = useModal();

  if (!selectedQuickProject) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-in fade-in duration-200'>
      <div
        className='relative w-full max-w-4xl bg-stone-900 border border-stone-800 text-stone-100 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col md:flex-row'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type='button'
          onClick={closeQuickProject}
          className='absolute top-4 right-4 z-20 bg-stone-950/80 text-stone-300 hover:text-white p-2 border border-stone-700 transition-colors cursor-pointer'
          aria-label='Cerrar vista rápida'
        >
          <X className='w-5 h-5' />
        </button>

        <div className='w-full md:w-1/2 aspect-[4/3] md:aspect-auto relative bg-stone-950'>
          <img
            src={selectedQuickProject.heroImage}
            alt={selectedQuickProject.title}
            className='w-full h-full object-cover'
          />
          <div className='absolute bottom-3 left-3 px-2.5 py-1 bg-stone-950/80 backdrop-blur-sm text-[11px] font-mono text-stone-300 uppercase'>
            {selectedQuickProject.category} · {selectedQuickProject.year}
          </div>
        </div>

        <div className='w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[80vh]'>
          <div>
            <h3 className='text-2xl sm:text-3xl font-serif text-stone-100'>
              {selectedQuickProject.title}
            </h3>
            
            <div className='mt-4 flex flex-wrap gap-y-2 gap-x-4 text-xs font-mono text-stone-400 py-3 border-y border-stone-800'>
              <div className='flex items-center gap-1.5'>
                <MapPin className='w-3.5 h-3.5 text-stone-500' />
                <span>{selectedQuickProject.location}</span>
              </div>
              <div className='flex items-center gap-1.5'>
                <Maximize2 className='w-3.5 h-3.5 text-stone-500' />
                <span>{selectedQuickProject.surface}</span>
              </div>
            </div>

            <p className='mt-4 text-sm text-stone-300 leading-relaxed'>
              {selectedQuickProject.fullDescription || selectedQuickProject.shortDescription}
            </p>

            <div className='mt-5'>
              <h4 className='text-xs font-mono uppercase tracking-wider text-stone-400 mb-2'>
                Materiales principales:
              </h4>
              <p className='text-xs text-stone-300 font-mono bg-stone-950 p-2.5 border border-stone-800'>
                {selectedQuickProject.materials}
              </p>
            </div>
          </div>

          <div className='mt-8 pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center gap-3'>
            <Link
              to={`/proyectos/${selectedQuickProject.slug}`}
              onClick={closeQuickProject}
              className='w-full sm:flex-1 text-center py-3 bg-stone-800 hover:bg-stone-700 text-stone-100 text-xs font-mono uppercase tracking-wider transition-colors'
            >
              Ver página completa
            </Link>
            <button
              type='button'
              onClick={() => {
                closeQuickProject();
                openQuoteModal(selectedQuickProject.category);
              }}
              className='w-full sm:flex-1 py-3 bg-stone-100 hover:bg-white text-stone-950 text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer'
            >
              Pedir este estilo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
