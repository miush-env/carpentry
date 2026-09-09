import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Layers, ArrowRight, CornerDownRight } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className='min-h-[85vh] w-full flex items-center justify-center bg-[#0c0a09] text-[#f4f1ea] px-4 py-32 bg-grid-pattern relative overflow-hidden'>
      {/* Background architectural watermark */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5'>
        <span className='text-[28vw] font-display font-black tracking-tighter text-stone-100'>
          404
        </span>
      </div>

      <div className='max-w-3xl w-full relative z-10 bg-stone-900 border-2 border-stone-800 p-8 sm:p-14 shadow-brutal-amber'>
        {/* Technical Header Pill */}
        <div className='flex items-center justify-between border-b-2 border-stone-800 pb-4 mb-8 text-xs font-mono text-stone-400'>
          <div className='flex items-center gap-2'>
            <span className='w-2 h-2 bg-amber-500 rounded-full animate-ping' />
            <span className='text-amber-400 font-bold'>ERROR DE DESPIECE // CÓDIGO 404</span>
          </div>
          <span className='hidden sm:inline-block'>[ COORD: NULL // ARCHIVO NO HALLADO ]</span>
        </div>

        {/* Big Brutalist 404 Heading */}
        <div className='space-y-4'>
          <div className='inline-block px-3 py-1 bg-stone-950 border border-stone-700 text-amber-400 font-mono font-bold text-xs uppercase tracking-widest'>
            // PLANO NO ENCONTRADO
          </div>
          <h1 className='text-5xl sm:text-7xl lg:text-8xl font-display font-black text-stone-100 tracking-tight leading-none'>
            404 <span className='font-serif italic font-normal text-amber-400 lowercase'>sin escala</span>
          </h1>
          <p className='text-stone-300 text-base sm:text-lg font-sans leading-relaxed pt-2 max-w-xl'>
            La cota o documento arquitectónico que estás intentando consultar no existe en nuestro registro de taller o ha sido reubicada.
          </p>
        </div>

        {/* Quick Links Box */}
        <div className='mt-8 pt-8 border-t-2 border-stone-800 grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <Link
            to='/'
            className='p-4 bg-stone-950 border-2 border-stone-800 hover:border-amber-500 transition-all flex items-center justify-between group'
          >
            <div className='flex items-center gap-3'>
              <Home className='w-5 h-5 text-amber-400' />
              <div>
                <span className='block text-sm font-display font-bold text-stone-100 group-hover:text-amber-400'>
                  Página Principal
                </span>
                <span className='text-[11px] font-mono text-stone-400'>
                  Retornar al inicio
                </span>
              </div>
            </div>
            <ArrowRight className='w-4 h-4 text-stone-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all' />
          </Link>

          <Link
            to='/proyectos'
            className='p-4 bg-stone-950 border-2 border-stone-800 hover:border-amber-500 transition-all flex items-center justify-between group'
          >
            <div className='flex items-center gap-3'>
              <Layers className='w-5 h-5 text-amber-400' />
              <div>
                <span className='block text-sm font-display font-bold text-stone-100 group-hover:text-amber-400'>
                  Catálogo de Obras
                </span>
                <span className='text-[11px] font-mono text-stone-400'>
                  Ver 9 proyectos
                </span>
              </div>
            </div>
            <ArrowRight className='w-4 h-4 text-stone-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all' />
          </Link>
        </div>

        {/* Action Button */}
        <div className='mt-8 flex flex-col sm:flex-row items-center gap-4'>
          <Link to='/' className='w-full sm:w-auto'>
            <Button variant='amber' size='md' showArrow className='w-full sm:w-auto'>
              Volver a la base del estudio
            </Button>
          </Link>
          <Link to='/servicios' className='w-full sm:w-auto'>
            <Button variant='outline' size='md' className='w-full sm:w-auto'>
              Ver Especialidades
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
