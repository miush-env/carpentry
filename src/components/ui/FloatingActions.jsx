import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // WhatsApp click handler with pre-filled message
  const whatsappNumber = '5491152639870';
  const whatsappMessage = encodeURIComponent(
    'Hola, estuve viendo la web de NEXO Carpintería y quisiera consultar por un trabajo a medida.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className='fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 select-none print:hidden'>
      {/* Botón Volver Arriba (Aparece tras hacer scroll) */}
      {showScrollTop && (
        <button
          type='button'
          onClick={scrollToTop}
          aria-label='Volver al inicio de la página'
          title='Volver arriba'
          className='w-11 h-11 sm:w-12 sm:h-12 bg-stone-900/95 hover:bg-amber-500 text-stone-200 hover:text-stone-950 border-2 border-stone-700 hover:border-amber-500 shadow-brutal-sm flex items-center justify-center transition-all duration-200 cursor-pointer animate-in fade-in zoom-in-75'
        >
          <ArrowUp className='w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]' />
        </button>
      )}

      {/* Botón Flotante de WhatsApp */}
      <a
        href={whatsappUrl}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Consultar por WhatsApp'
        title='Consultar por WhatsApp'
        className='group relative w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer'
      >
        {/* Glow / Pulse ring */}
        <span className='absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none' />

        {/* WhatsApp Official SVG Icon */}
        <svg
          viewBox='0 0 32 32'
          className='w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M16 2C8.268 2 2 8.268 2 16c0 2.656.732 5.21 2.124 7.424L2.04 29.96l6.696-2.06A13.91 13.91 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6c-2.316 0-4.576-.628-6.548-1.816l-.468-.28-4.348 1.336 1.364-4.22-.304-.484A11.536 11.536 0 014.4 16c0-6.4 5.2-11.6 11.6-11.6s11.6 5.2 11.6 11.6-5.2 11.6-11.6 11.6zm6.368-8.712c-.348-.176-2.064-1.02-2.384-1.136-.32-.116-.552-.176-.784.176-.232.348-.9 1.136-1.104 1.368-.204.232-.408.26-.756.088-.348-.176-1.472-.544-2.8-1.732-1.036-.924-1.736-2.068-1.94-2.416-.204-.348-.02-.536.152-.708.156-.156.348-.408.524-.612.176-.204.232-.348.348-.58.116-.232.06-.436-.028-.612-.088-.176-.784-1.892-1.076-2.588-.284-.68-.572-.588-.784-.6-.204-.012-.436-.012-.668-.012-.232 0-.612.088-.932.436-.32.348-1.22 1.196-1.22 2.916 0 1.72 1.252 3.38 1.428 3.612.176.232 2.464 3.764 5.968 5.28.832.36 1.484.576 1.992.736.836.268 1.596.228 2.196.14.672-.1 2.064-.844 2.356-1.66.292-.816.292-1.516.204-1.66-.088-.144-.32-.232-.668-.408z' />
        </svg>

        {/* Tooltip visible on hover / focus */}
        <span className='absolute right-full mr-3 px-3 py-1.5 bg-stone-900 border border-stone-700 text-stone-100 text-xs font-mono font-bold uppercase tracking-wider rounded whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block'>
          Consultanos por WhatsApp
        </span>
      </a>
    </div>
  );
}
