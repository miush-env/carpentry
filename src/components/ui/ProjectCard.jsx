import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Eye, MapPin, Star } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

function CraftStar({ className = '', style = {} }) {
  return (
    <svg
      viewBox='0 0 24 24'
      className={`project-star ${className}`}
      style={style}
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <linearGradient id='craftStarGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#fef08a' />
          <stop offset='45%' stopColor='#f59e0b' />
          <stop offset='100%' stopColor='#d97706' />
        </linearGradient>
      </defs>
      <path
        d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
        fill='url(#craftStarGrad)'
        stroke='#fef08a'
        strokeWidth='1.2'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default function ProjectCard({ project, priority = false }) {
  const { openQuickProject } = useModal();
  const cardRef = useRef(null);

  // Desktop smooth 3D tilt tracking cursor
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth 3D rotation angles
    const rotX = ((y - centerY) / centerY) * -6.5;
    const rotY = ((x - centerX) / centerX) * 6.5;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className='group relative flex flex-col bg-stone-900 overflow-visible transition-transform duration-300 ease-out will-change-transform hover:shadow-brutal-amber'
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* 1. Wood Plank Simulated Framing (3px max thickness) with Corner Nails */}
      <div className='wood-plank-frame'>
        <div className='wood-plank-top' />
        <div className='wood-plank-right' />
        <div className='wood-plank-bottom' />
        <div className='wood-plank-left' />
        
        {/* Metal nails driven into the corner of each wood plank */}
        <div className='wood-nail top-[2px] left-[2px]' />
        <div className='wood-nail top-[2px] right-[2px]' />
        <div className='wood-nail bottom-[2px] left-[2px]' />
        <div className='wood-nail bottom-[2px] right-[2px]' />
      </div>

      {/* 2. 6 Glowing Vector SVG Craft Stars floating OUTSIDE around the card perimeter */}
      <div className='absolute inset-0 pointer-events-none z-40 overflow-visible'>
        {/* Star 1: Outside Top-Left */}
        <CraftStar className='w-6 h-6 -top-4 -left-4' style={{ animationDelay: '0ms' }} />
        {/* Star 2: Outside Top-Right */}
        <CraftStar className='w-5 h-5 -top-5 right-12' style={{ animationDelay: '75ms' }} />
        {/* Star 3: Outside Right (Upper-Mid) */}
        <CraftStar className='w-6 h-6 top-1/3 -right-5' style={{ animationDelay: '150ms' }} />
        {/* Star 4: Outside Right (Lower-Mid) */}
        <CraftStar className='w-5 h-5 bottom-1/4 -right-4' style={{ animationDelay: '225ms' }} />
        {/* Star 5: Outside Bottom-Center */}
        <CraftStar className='w-6 h-6 -bottom-5 left-1/3' style={{ animationDelay: '300ms' }} />
        {/* Star 6: Outside Left (Mid) */}
        <CraftStar className='w-5 h-5 top-1/2 -left-5' style={{ animationDelay: '375ms' }} />
      </div>

      {/* Whole Card Clickable Link */}
      <Link
        to={`/proyectos/${project.slug}`}
        className='flex flex-col flex-1 cursor-pointer focus:outline-none'
        aria-label={`Ver proyecto ${project.title}`}
      >
        {/* Top Media Container */}
        <div className='relative aspect-[4/3] w-full overflow-hidden bg-stone-950 select-none'>
          <img
            src={project.heroImage}
            alt={project.title}
            loading={priority ? 'eager' : 'lazy'}
            className='w-full h-full object-cover grayscale-[15%] contrast-110 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-70 group-hover:opacity-30 transition-opacity' />

          {/* Quick View Button */}
          <button
            type='button'
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              openQuickProject(project);
            }}
            className='absolute top-3 right-3 z-30 flex items-center gap-1.5 px-3 py-1.5 bg-stone-950/90 text-stone-200 border border-stone-700 text-[11px] font-mono font-bold uppercase tracking-wider opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 hover:bg-amber-500 hover:text-stone-950 hover:border-amber-500 cursor-pointer shadow-brutal-sm'
          >
            <Eye className='w-3.5 h-3.5' />
            <span>VISTA RÁPIDA</span>
          </button>

          {/* Category badge */}
          <div className='absolute bottom-3 left-3 z-10 flex items-center gap-2'>
            <span className='px-3 py-1 bg-stone-950/95 backdrop-blur-sm border border-stone-700 text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase'>
              // {project.category}
            </span>
            <span className='px-2 py-1 bg-stone-900/90 backdrop-blur-sm text-stone-300 text-[10px] font-mono border border-stone-800'>
              {project.year}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className='p-6 flex flex-col justify-between flex-1 bg-stone-900/95'>
          <div>
            <div className='flex items-start justify-between gap-4'>
              <h3 className='text-xl sm:text-2xl font-display font-bold text-stone-100 group-hover:text-amber-400 transition-colors'>
                {project.title}
              </h3>
              <div
                className='p-2 bg-stone-800 text-stone-300 border border-stone-700 group-hover:bg-amber-500 group-hover:text-stone-950 group-hover:border-amber-500 transition-colors flex-shrink-0'
              >
                <ArrowUpRight className='w-4 h-4' />
              </div>
            </div>
            <p className='mt-2.5 text-xs font-mono text-stone-400 line-clamp-1'>
              // {project.materials}
            </p>
          </div>

          {/* Specs technical footer */}
          <div className='mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs font-mono text-stone-400'>
            <span className='flex items-center gap-1.5'>
              <MapPin className='w-3 h-3 text-amber-500' />
              {project.location}
            </span>
            <span className='px-2 py-0.5 bg-stone-950 border border-stone-800 text-amber-400 font-bold'>
              {project.surface}
            </span>
          </div>

          {/* Botón claro de navegación - Vistoso y en color ámbar de alto impacto */}
          <div className='mt-4 pt-3 border-t border-stone-800/80'>
            <span className='w-full py-3 px-3 bg-amber-500 group-hover:bg-amber-400 text-stone-950 font-black uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 border-2 border-amber-500 shadow-brutal-sm transition-all duration-200'>
              <span>VER PROYECTO</span>
              <ArrowUpRight className='w-4.5 h-4.5 stroke-[2.5]' />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
