import React, { useState } from 'react';
import { ArrowDown, ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export default function Carousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDiscarding, setIsDiscarding] = useState(false);

  const total = testimonials.length;

  const nextCard = () => {
    if (isDiscarding || total <= 1) return;
    setIsDiscarding(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
      setIsDiscarding(false);
    }, 360);
  };

  const prevCard = () => {
    if (isDiscarding || total <= 1) return;
    setIsDiscarding(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
      setIsDiscarding(false);
    }, 150);
  };

  const goToCard = (index) => {
    if (isDiscarding || index === currentIndex) return;
    setIsDiscarding(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsDiscarding(false);
    }, 200);
  };

  const topItem = testimonials[currentIndex];
  const secondItem = testimonials[(currentIndex + 1) % total];
  const thirdItem = testimonials[(currentIndex + 2) % total];

  return (
    <div className='w-full max-w-4xl mx-auto flex flex-col items-center select-none'>
      {/* Top Deck Status Bar */}
      <div className='w-full flex items-center justify-between mb-5 px-1'>
        <div className='flex items-center gap-2'>
          <span className='w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse shadow-[0_0_8px_#f59e0b]' />
          <span className='text-xs font-mono font-bold uppercase tracking-widest text-amber-400'>
            // MAZO DE OPINIONES TÉCNICAS
          </span>
        </div>

        <div className='px-3.5 py-1.5 bg-amber-500 text-stone-950 border-2 border-stone-950 font-mono font-black text-xs uppercase tracking-wider shadow-brutal-sm'>
          CARTA {String(currentIndex + 1).padStart(2, '0')} // {String(total).padStart(2, '0')}
        </div>
      </div>

      {/* 3D Stacked Cards Deck Container (Dynamic Height) */}
      <div className='relative w-full mb-12 sm:mb-14'>
        {/* Layer 3: Base card in pile */}
        <div
          className='absolute inset-0 p-8 sm:p-10 lg:p-12 border border-stone-800/50 bg-[#171513] text-stone-100 flex flex-col justify-between stacked-card shadow-brutal-dark pointer-events-none'
          style={{
            transform: 'translateY(36px) scale(0.92) rotate(1.8deg)',
            zIndex: 10,
            opacity: 0.55
          }}
        >
          <div>
            <div className='flex items-center justify-between mb-6'>
              <div className='w-10 h-10 bg-stone-950 border border-stone-800 flex items-center justify-center text-amber-500/40'>
                <Quote className='w-5 h-5' />
              </div>
            </div>
            <p className='text-base sm:text-xl lg:text-2xl font-serif text-stone-300 italic line-clamp-3 opacity-40'>
              "{thirdItem.text}"
            </p>
          </div>
        </div>

        {/* Layer 2: Middle card right behind */}
        <div
          className='absolute inset-0 p-8 sm:p-10 lg:p-12 border border-stone-800/80 bg-[#1c1917] text-stone-100 flex flex-col justify-between stacked-card shadow-brutal-dark pointer-events-none'
          style={{
            transform: 'translateY(18px) scale(0.96) rotate(-1.5deg)',
            zIndex: 20,
            opacity: 0.82
          }}
        >
          <div>
            <div className='flex items-center justify-between mb-6'>
              <div className='w-10 h-10 bg-stone-950 border border-stone-800 flex items-center justify-center text-amber-500/70'>
                <Quote className='w-5 h-5' />
              </div>
            </div>
            <p className='text-base sm:text-xl lg:text-2xl font-serif text-stone-200 italic line-clamp-3 opacity-60'>
              "{secondItem.text}"
            </p>
          </div>
        </div>

        {/* Layer 1: Active Front Card (Defines exact natural height) */}
        <div
          key={topItem.id}
          onClick={nextCard}
          className={`relative p-8 sm:p-10 lg:p-12 border border-amber-500/70 bg-stone-900 text-stone-100 flex flex-col justify-between stacked-card shadow-brutal-amber cursor-pointer hover:border-amber-400 ${
            isDiscarding ? 'card-discarding-down' : ''
          }`}
          style={{
            transform: isDiscarding ? undefined : 'translateY(0px) scale(1) rotate(0deg)',
            zIndex: 30
          }}
        >
          <div>
            {/* Header: Quote mark + 5-Star Rating Badge + Deck Position */}
            <div className='flex items-center justify-between gap-4 mb-6'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-stone-950 border border-stone-700 flex items-center justify-center text-amber-500 shadow-brutal-sm'>
                  <Quote className='w-5 h-5' />
                </div>
                <div className='flex items-center gap-1 text-amber-400'>
                  {[...Array(topItem.rating || 5)].map((_, i) => (
                    <Star key={i} className='w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]' />
                  ))}
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <span className='px-3 py-1 bg-stone-950 border border-stone-700 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest shadow-brutal-sm'>
                  CARTA #{currentIndex + 1}
                </span>
              </div>
            </div>

            {/* Testimonial Quote Text */}
            <p className='text-base sm:text-xl lg:text-2xl font-serif text-stone-100 leading-relaxed italic'>
              "{topItem.text}"
            </p>
          </div>

          {/* Author & Project info footer */}
          <div className='mt-8 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
            <div className='flex items-center gap-4'>
              <img
                src={topItem.image}
                alt={topItem.name}
                className='w-12 h-12 rounded-full object-cover border border-amber-500/80 shadow-brutal-sm'
              />
              <div>
                <h4 className='font-display font-bold text-base text-stone-100'>{topItem.name}</h4>
                <p className='text-xs font-mono text-amber-400 font-bold'>{topItem.role} — {topItem.location}</p>
                <p className='text-[11px] font-mono text-stone-400 mt-0.5 font-medium'>// {topItem.project}</p>
              </div>
            </div>

            <div className='inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-bold uppercase tracking-wider rounded-sm self-start sm:self-auto'>
              <span>CLIC EN LA CARTA PARA PASAR</span>
              <ArrowDown className='w-3.5 h-3.5 text-amber-400 animate-bounce' />
            </div>
          </div>
        </div>
      </div>

      {/* Dedicated Bottom Controls & Number Tabs Bar (Zero Overlap Guaranteed) */}
      <div className='w-full p-4 sm:p-5 bg-stone-900 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-brutal-dark relative z-40'>
        {/* Numbered Card Selector Tabs (01, 02, 03, 04, 05) */}
        <div className='flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start'>
          <span className='text-xs font-mono font-bold text-stone-400 uppercase tracking-wider mr-2 hidden md:inline-block'>
            SELECCIONAR:
          </span>
          {testimonials.map((_, i) => {
            const isActive = i === currentIndex;
            return (
              <button
                key={i}
                type='button'
                onClick={() => goToCard(i)}
                disabled={isDiscarding}
                className={`px-3 py-2 text-xs font-mono font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-brutal-sm scale-105'
                    : 'bg-stone-950 text-stone-300 border-stone-700 hover:border-amber-400 hover:text-white'
                }`}
                aria-label={`Ver carta ${i + 1}`}
              >
                0{i + 1}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className='flex items-center gap-3 w-full sm:w-auto justify-end'>
          <button
            type='button'
            onClick={prevCard}
            disabled={isDiscarding}
            className='flex-1 sm:flex-initial px-4 py-2.5 bg-stone-950 border border-stone-700 hover:border-amber-400 text-stone-200 hover:text-white text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer shadow-brutal-sm flex items-center justify-center gap-2'
          >
            <ChevronLeft className='w-4 h-4 text-amber-400' />
            <span>ANTERIOR</span>
          </button>

          <button
            type='button'
            onClick={nextCard}
            disabled={isDiscarding}
            className='flex-1 sm:flex-initial px-5 py-2.5 bg-amber-500 hover:bg-amber-400 active:translate-y-0.5 text-stone-950 border border-stone-950 text-xs font-mono font-black uppercase tracking-wider transition-all cursor-pointer shadow-brutal-amber flex items-center justify-center gap-2'
          >
            <span>PASAR CARTA</span>
            <ArrowDown className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>
  );
}
