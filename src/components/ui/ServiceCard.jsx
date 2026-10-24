import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Paintbrush } from 'lucide-react';

function CircularSawBlade() {
  return (
    <div className='saw-blade-runner'>
      <svg
        viewBox='0 0 100 100'
        className='w-14 h-14 saw-blade-disc'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <radialGradient id='sawMetalGlow' cx='50%' cy='50%' r='50%'>
            <stop offset='0%' stopColor='#fef08a' />
            <stop offset='45%' stopColor='#f59e0b' />
            <stop offset='90%' stopColor='#b45309' />
            <stop offset='100%' stopColor='#78350f' />
          </radialGradient>
        </defs>
        {/* 12 Sharp circular saw teeth */}
        <polygon
          points='50,2 56,18 69,6 71,22 85,15 82,31 96,30 89,45 99,50 89,55 96,70 82,69 85,85 71,78 69,94 56,82 50,98 44,82 31,94 29,78 15,85 18,69 4,70 11,55 1,50 11,45 4,30 18,31 15,15 29,22 31,6 44,18'
          fill='url(#sawMetalGlow)'
          stroke='#fef08a'
          strokeWidth='1.5'
        />
        {/* Inner metal disc */}
        <circle cx='50' cy='50' r='24' fill='#1c1917' stroke='#d97706' strokeWidth='2.5' />
        {/* Expansion cooling slots */}
        <line x1='50' y1='28' x2='50' y2='36' stroke='#f59e0b' strokeWidth='2' strokeLinecap='round' />
        <line x1='50' y1='64' x2='50' y2='72' stroke='#f59e0b' strokeWidth='2' strokeLinecap='round' />
        <line x1='28' y1='50' x2='36' y2='50' stroke='#f59e0b' strokeWidth='2' strokeLinecap='round' />
        <line x1='64' y1='50' x2='72' y2='50' stroke='#f59e0b' strokeWidth='2' strokeLinecap='round' />
        {/* Center arbor brass mount */}
        <circle cx='50' cy='50' r='11' fill='#f59e0b' stroke='#fef08a' strokeWidth='1' />
        <circle cx='50' cy='50' r='5' fill='#0c0a09' />
      </svg>
    </div>
  );
}

export default function ServiceCard({ service }) {
  const characters = service.title.split('');
  const totalChars = characters.length;

  return (
    <Link
      to={`/servicios/${service.slug}`}
      className='group relative flex flex-col bg-stone-900 border-2 border-stone-800 overflow-hidden transition-all duration-300 hover:border-amber-500 hover:shadow-brutal-amber'
    >
      {/* Top Image with saw-blade cutting reveal */}
      <div className='relative aspect-[16/10] w-full overflow-hidden bg-stone-950 select-none'>
        {/* Base layer: Natural, warm wood photography (Alive & crisp, not dead) */}
        <img
          src={service.image}
          alt={service.title}
          loading='lazy'
          className='w-full h-full object-cover brightness-[0.88] contrast-[1.05] grayscale-[15%] transition-all duration-700 ease-out group-hover:scale-105'
        />
        
        {/* Top layer: Cut by Saw Blade Clip-Path into hyper-vibrant saturation */}
        <img
          src={service.image}
          alt={service.title}
          loading='lazy'
          className='absolute inset-0 w-full h-full object-cover brightness-[1.08] contrast-[1.18] saturate-[1.35] grayscale-0 saw-cut-mask transition-all duration-700 ease-out group-hover:scale-105 pointer-events-none'
        />

        {/* Spinning Circular Saw Blade moving across on cut */}
        <CircularSawBlade />

        {/* Subtle grid texture overlay */}
        <div className='absolute inset-0 bg-stone-950/15 group-hover:opacity-0 transition-opacity pointer-events-none' />
        
        {/* Giant Watermark Number */}
        <div className='absolute top-3 right-3 px-3 py-1 bg-stone-950/90 backdrop-blur-sm border border-stone-700 text-amber-400 text-xs font-mono font-extrabold tracking-widest z-10'>
          {service.number}
        </div>

        <div className='absolute bottom-3 left-3 px-2.5 py-0.5 bg-stone-950/90 backdrop-blur-sm border border-stone-800 text-[10px] font-mono text-stone-300 uppercase tracking-widest z-10'>
          {service.categoryTag}
        </div>
      </div>

      {/* Body */}
      <div className='p-6 flex flex-col justify-between flex-1 bg-stone-900'>
        <div>
          {/* Title with sweeping Paintbrush tracer & letter-by-letter staining */}
          <div className='relative inline-block max-w-full'>
            {/* Paintbrush sweeping icon */}
            <div className='brush-tracer flex items-center justify-center text-amber-400'>
              <Paintbrush className='w-4 h-4 brush-icon-wiggle drop-shadow-[0_2px_8px_rgba(245,158,11,0.9)]' />
            </div>

            <h3 className='text-xl sm:text-2xl font-display font-bold flex flex-wrap relative z-10'>
              {characters.map((char, index) => {
                // Progressive delay calculated to match the 1.25s brush sweep smoothly
                const delayMs = Math.round((index / Math.max(totalChars - 1, 1)) * 950);
                return (
                  <span
                    key={index}
                    className='service-char inline-block'
                    style={{
                      '--char-delay': `${delayMs}ms`
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                );
              })}
            </h3>
          </div>

          <div className='mt-3 flex flex-wrap items-center gap-1.5'>
            {service.materials.slice(0, 2).map((mat, i) => (
              <span
                key={i}
                className='px-2 py-0.5 bg-stone-950 border border-stone-800 text-[10px] font-mono text-stone-400 uppercase'
              >
                {mat}
              </span>
            ))}
            <span className='text-[10px] font-mono text-amber-400/80 ml-auto font-medium'>
              {service.processTime}
            </span>
          </div>
        </div>

        <div className='mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-stone-300 group-hover:text-amber-400 transition-colors'>
          <span>VER FICHA & OBRAS</span>
          <div className='w-7 h-7 bg-stone-800 border border-stone-700 flex items-center justify-center text-stone-200 group-hover:bg-amber-500 group-hover:text-stone-950 group-hover:border-amber-500 transition-colors'>
            <ArrowRight className='w-3.5 h-3.5' />
          </div>
        </div>
      </div>
    </Link>
  );
}

