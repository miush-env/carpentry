import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openQuoteModal } = useModal();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Sobre nosotros', path: '/sobre-nosotros' },
    { name: 'Materiales', path: '/materiales' },
    { name: 'Contacto', path: '/contacto' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-950/95 backdrop-blur-md border-b-2 border-stone-800 py-3.5 shadow-2xl'
            : 'bg-stone-950/80 backdrop-blur-sm border-b border-stone-800/80 py-5'
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
          {/* Logo */}
          <Link to='/' className='group flex items-center gap-3 focus:outline-none'>
            <div className='w-9 h-9 bg-amber-500 text-stone-950 flex items-center justify-center font-display font-black text-xl border-2 border-stone-950 shadow-brutal-sm group-hover:bg-amber-400 transition-colors'>
              N
            </div>
            <div className='flex flex-col'>
              <div className='flex items-center gap-2'>
                <span className='font-display font-extrabold text-xl tracking-wider text-stone-100 uppercase'>
                  NEXO
                </span>
                <span className='hidden sm:inline-block px-1.5 py-0.5 bg-stone-900 border border-stone-800 text-[9px] font-mono text-amber-400 font-bold uppercase'>
                  STUDIO & CRAFT
                </span>
              </div>
              <span className='text-[9px] font-mono tracking-[0.2em] text-stone-400 uppercase -mt-0.5'>
                Madera · Arquitectura
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-1 lg:gap-2'>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-stone-100 text-stone-950 border border-stone-100 shadow-brutal-sm'
                      : 'text-stone-300 hover:text-white hover:bg-stone-900 border border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action button */}
          <div className='hidden md:flex items-center gap-3'>
            <button
              type='button'
              onClick={() => openQuoteModal()}
              className='px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-mono font-bold uppercase tracking-wider border-2 border-stone-950 shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer flex items-center gap-2'
            >
              <span>Presupuesto</span>
              <ArrowRight className='w-3.5 h-3.5' />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className='flex md:hidden items-center gap-2'>
            <button
              type='button'
              onClick={() => setIsMobileMenuOpen(true)}
              className='p-2 text-stone-100 bg-stone-900 border-2 border-stone-700 hover:border-amber-500 shadow-brutal-sm cursor-pointer'
              aria-label='Abrir menú de navegación'
            >
              <Menu className='w-6 h-6' />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        onOpenQuote={() => {
          setIsMobileMenuOpen(false);
          openQuoteModal();
        }}
      />
    </>
  );
}
