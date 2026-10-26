import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function ServiceCard({ service }) {
  const { openImagePreview } = useModal();

  return (
    <div className='group relative flex flex-col bg-stone-900 border-2 border-stone-800 overflow-hidden transition-all duration-300 hover:border-amber-500 hover:shadow-brutal-amber'>
      {/* 1. Contenedor de Imagen bien encuadrada y centrada */}
      <div className='relative aspect-[16/11] w-full overflow-hidden bg-stone-950 select-none'>
        <img
          src={service.image}
          alt={service.title}
          loading='lazy'
          className='w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105'
        />

        {/* Gradiente sutil inferior */}
        <div className='absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20 pointer-events-none' />

        {/* Número identificador */}
        <div className='absolute top-3 right-3 px-2.5 py-1 bg-stone-950/90 border border-stone-700 text-amber-400 text-xs font-mono font-black tracking-widest z-10'>
          {service.number}
        </div>

        {/* Categoría clara */}
        <div className='absolute top-3 left-3 px-2.5 py-1 bg-stone-950/90 border border-stone-800 text-[11px] font-mono font-bold text-stone-200 uppercase tracking-wider z-10'>
          {service.categoryTag}
        </div>

        {/* Botón explícito e inequívoco para ampliar la foto */}
        <button
          type='button'
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            openImagePreview(service.image, service.title);
          }}
          className='absolute bottom-3 left-3 z-20 px-3 py-1.5 bg-stone-950/95 hover:bg-amber-500 text-stone-200 hover:text-stone-950 border border-stone-700 hover:border-amber-500 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shadow-brutal-sm'
          title='Haga clic para ver la foto a pantalla completa'
          aria-label={`Ampliar foto de ${service.title}`}
        >
          <Maximize2 className='w-3.5 h-3.5 text-amber-400 group-hover:text-stone-950' />
          <span>VER FOTO COMPLETA</span>
        </button>
      </div>

      {/* 2. Cuerpo de la tarjeta con tipografía legible para todo público (18-60+ años) */}
      <div className='p-5 sm:p-6 flex flex-col justify-between flex-1 bg-stone-900'>
        <div>
          <h3 className='text-xl sm:text-2xl font-display font-bold text-stone-100 group-hover:text-amber-400 transition-colors'>
            {service.title}
          </h3>

          <p className='mt-2.5 text-sm sm:text-base text-stone-300 font-sans leading-relaxed line-clamp-2'>
            {service.shortDescription}
          </p>

          {/* Etiquetas simples de materiales */}
          <div className='mt-4 flex flex-wrap items-center gap-1.5'>
            {service.materials.slice(0, 3).map((mat, i) => (
              <span
                key={i}
                className='px-2.5 py-1 bg-stone-950 border border-stone-800 text-xs font-mono text-stone-300'
              >
                {mat}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Botón de Navegación Directo y Claro: el usuario sabe exactamente qué hace */}
        <div className='mt-6 pt-4 border-t border-stone-800'>
          <Link
            to={`/servicios/${service.slug}`}
            className='w-full py-3 px-4 bg-stone-800 hover:bg-amber-500 text-stone-100 hover:text-stone-950 font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 border-2 border-stone-700 hover:border-amber-500 shadow-brutal-sm transition-all duration-200'
            aria-label={`Ver detalles del servicio ${service.title}`}
          >
            <span>VER SERVICIO</span>
            <ArrowRight className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </div>
  );
}
