import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';


export default function MobileMenu({ isOpen, onClose, navLinks, onOpenQuote }) {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 md:hidden bg-stone-950 flex flex-col justify-between animate-in fade-in duration-300'>
      {/* Header */}
      <div className='p-6 flex items-center justify-between border-b border-stone-800'>
        <div className='flex items-center gap-3'>
          <div className='w-8 h-8 bg-stone-100 text-stone-950 flex items-center justify-center font-serif font-bold text-lg'>
            N
          </div>
          <span className='font-serif text-xl font-bold tracking-widest text-stone-100 uppercase'>
            NEXO
          </span>
        </div>

        <button
          type='button'
          onClick={onClose}
          className='p-2 text-stone-400 hover:text-white border border-stone-800 cursor-pointer'
          aria-label='Cerrar menú'
        >
          <X className='w-6 h-6' />
        </button>
      </div>

      {/* Nav List */}
      <nav className='px-8 py-6 flex flex-col gap-6 overflow-y-auto'>
        {navLinks.map((link, idx) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={`flex items-center justify-between text-2xl font-serif py-1 transition-colors ${
                isActive ? 'text-stone-100 font-bold' : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <span>{link.name}</span>
              <span className='text-xs font-mono text-stone-600'>0{idx + 1}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer Drawer Info & CTA */}
      <div className='p-8 border-t border-stone-800 bg-stone-900/50 space-y-6'>
        <button
          type='button'
          onClick={onOpenQuote}
          className='w-full py-4 bg-stone-100 text-stone-950 text-xs font-mono font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white cursor-pointer'
        >
          <span>Solicitar presupuesto</span>
          <ArrowRight className='w-4 h-4' />
        </button>

        <div className='space-y-2 text-xs font-mono text-stone-400'>
          <div className='flex items-center gap-2'>
            <Phone className='w-3.5 h-3.5 text-stone-500' />
            <span>+54 11 5263-9870</span>
          </div>
          <div className='flex items-center gap-2'>
            <Mail className='w-3.5 h-3.5 text-stone-500' />
            <a href='mailto:basach1582@gmail.com' className='hover:text-stone-200 transition-colors'>
              basach1582@gmail.com
            </a>
          </div>
          <div className='flex items-center gap-2'>
            <MapPin className='w-3.5 h-3.5 text-stone-500' />
            <span>Pilar, Buenos Aires — Argentina</span>
          </div>
        </div>
      </div>
    </div>
  );
}
