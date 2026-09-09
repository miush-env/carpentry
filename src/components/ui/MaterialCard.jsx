import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function MaterialCard({ material }) {
  const { openMaterialModal } = useModal();

  return (
    <div
      onClick={() => openMaterialModal(material)}
      className='group relative cursor-pointer bg-stone-900 border-2 border-stone-800 p-6 flex flex-col justify-between transition-all duration-300 hover:border-amber-500 hover:shadow-brutal-amber overflow-hidden'
    >
      <div>
        <div className='relative aspect-[4/3] w-full overflow-hidden mb-5 bg-stone-950 border border-stone-800'>
          <img
            src={material.image}
            alt={material.name}
            loading='lazy'
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale-[15%]'
          />
          <div className='absolute bottom-2 left-2 px-2.5 py-1 bg-stone-950/95 border border-stone-700 text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold z-10'>
            // {material.category}
          </div>
        </div>

        <h3 className='text-lg sm:text-xl font-display font-bold text-stone-100 group-hover:text-amber-400 transition-colors'>
          {material.name}
        </h3>
        
        <div className='mt-2.5 flex items-center justify-between text-xs font-mono text-stone-400 py-1.5 px-2 bg-stone-950 border border-stone-800/80'>
          <span>DENSIDAD:</span>
          <span className='text-stone-200 font-bold'>{material.density}</span>
        </div>

        <p className='mt-3 text-sm text-stone-400 line-clamp-2 leading-relaxed font-sans'>
          {material.description}
        </p>
      </div>

      <div className='mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono font-bold text-stone-300 group-hover:text-amber-400'>
        <span>INSPECCIONAR MUESTRA</span>
        <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
      </div>
    </div>
  );
}
