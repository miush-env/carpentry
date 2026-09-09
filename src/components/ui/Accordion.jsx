import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Accordion({ items, allowMultiple = false }) {
  const [openIndices, setOpenIndices] = useState([0]);

  const toggleItem = (index) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter(i => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setOpenIndices(openIndices.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className='divide-y-2 divide-stone-800 border-y-2 border-stone-800'>
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        const questionNumber = String(idx + 1).padStart(2, '0');

        return (
          <div
            key={item.id || idx}
            className={`py-6 transition-colors duration-200 ${isOpen ? 'bg-stone-950/40' : 'bg-transparent'}`}
          >
            <button
              type='button'
              onClick={() => toggleItem(idx)}
              className='flex w-full items-center justify-between text-left focus:outline-none group cursor-pointer'
              aria-expanded={isOpen}
            >
              <div className='flex items-start sm:items-center gap-3 sm:gap-4 pr-4'>
                <span className='px-2 py-0.5 bg-stone-950 border border-stone-700 text-amber-400 font-mono font-bold text-xs flex-shrink-0 mt-1 sm:mt-0'>
                  Q.{questionNumber}
                </span>
                <span className={`text-base sm:text-xl font-display font-bold transition-colors ${
                  isOpen ? 'text-amber-400' : 'text-stone-100 group-hover:text-amber-300'
                }`}>
                  {item.question}
                </span>
              </div>
              <span className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 border-2 flex items-center justify-center transition-all duration-200 shadow-brutal-sm ${
                isOpen
                  ? 'bg-amber-500 text-stone-950 border-amber-500'
                  : 'bg-stone-800 text-stone-200 border-stone-700 group-hover:border-amber-500 group-hover:text-amber-400'
              }`}>
                {isOpen ? <Minus className='w-4 h-4 stroke-[3]' /> : <Plus className='w-4 h-4 stroke-[3]' />}
              </span>
            </button>
            {isOpen && (
              <div className='mt-4 sm:ml-12 pl-4 pr-4 sm:pr-8 py-4 border-l-2 border-amber-500 bg-stone-950/80 text-sm sm:text-base text-stone-200 leading-relaxed font-sans'>
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
