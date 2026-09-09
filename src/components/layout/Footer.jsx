import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, Mail, MapPin, MessageSquare, Plus } from 'lucide-react';
import { services } from '../../data/services';
import { useModal } from '../../context/ModalContext';

export default function Footer() {
  const { openQuoteModal } = useModal();

  return (
    <footer className='bg-stone-950 text-stone-300 pt-24 pb-12 border-t-2 border-stone-800 font-sans'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Top Massive Branding */}
        <div className='pb-16 border-b-2 border-stone-800 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8'>
          <div>
            <div className='flex items-center gap-3 mb-2'>
              <div className='w-10 h-10 bg-amber-500 text-stone-950 flex items-center justify-center font-display font-black text-2xl border-2 border-stone-950'>
                N
              </div>
              <span className='font-display font-black text-3xl sm:text-4xl tracking-tight text-stone-100 uppercase'>
                NEXO // STUDIO & CRAFT
              </span>
            </div>
            <p className='text-sm sm:text-base text-stone-400 max-w-xl font-sans mt-2'>
              Estudio de arquitectura, ingeniería en madera y taller de ebanistería contemporánea.
            </p>
          </div>

          <div className='flex items-center gap-3'>
            <button
              type='button'
              onClick={() => openQuoteModal()}
              className='px-6 py-3.5 bg-amber-500 text-stone-950 font-mono font-bold text-xs uppercase tracking-wider border-2 border-stone-950 shadow-brutal-sm hover:bg-amber-400 transition-all cursor-pointer'
            >
              COTIZAR PROYECTO →
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 border-b border-stone-800'>
          {/* Col 1: Socials & Location */}
          <div className='lg:col-span-2 space-y-6'>
            <span className='text-xs font-mono font-bold uppercase tracking-widest text-amber-400 block'>
              // CANALES DE CONTACTO
            </span>
            <div className='space-y-3 text-sm font-mono text-stone-300'>
              <div className='flex items-center gap-2.5'>
                <Phone className='w-4 h-4 text-amber-500 flex-shrink-0' />
                <span>+54 11 5263-9870</span>
              </div>
              <div className='flex items-center gap-2.5'>
                <Mail className='w-4 h-4 text-amber-500 flex-shrink-0' />
                <span>hola@nexo-arquitectura.com</span>
              </div>
              <div className='flex items-start gap-2.5'>
                <MapPin className='w-4 h-4 text-amber-500 flex-shrink-0 mt-1' />
                <span>Ruta Panamericana Km 52, Pilar, Buenos Aires</span>
              </div>
            </div>

            <div className='pt-2 flex items-center gap-3'>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 border-2 border-stone-800 bg-stone-900 flex items-center justify-center text-stone-300 hover:text-stone-950 hover:bg-amber-400 hover:border-amber-400 transition-colors shadow-brutal-sm'
                aria-label='Instagram'
              >
                <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
                </svg>
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 border-2 border-stone-800 bg-stone-900 flex items-center justify-center text-stone-300 hover:text-stone-950 hover:bg-amber-400 hover:border-amber-400 transition-colors shadow-brutal-sm'
                aria-label='LinkedIn'
              >
                <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
                  <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/>
                </svg>
              </a>
              <a
                href='https://wa.me/5491152639870'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 border-2 border-stone-800 bg-stone-900 flex items-center justify-center text-stone-300 hover:text-stone-950 hover:bg-amber-400 hover:border-amber-400 transition-colors shadow-brutal-sm'
                aria-label='WhatsApp'
              >
                <MessageSquare className='w-4 h-4' />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <span className='text-xs font-mono font-bold uppercase tracking-widest text-amber-400 block mb-5'>
              // NAVEGACIÓN
            </span>
            <ul className='space-y-2.5 text-sm font-mono'>
              {['Inicio', 'Servicios', 'Proyectos', 'Sobre nosotros', 'Materiales', 'Contacto'].map((name, i) => {
                const paths = ['/', '/servicios', '/proyectos', '/sobre-nosotros', '/materiales', '/contacto'];
                return (
                  <li key={i}>
                    <Link to={paths[i]} className='hover:text-amber-400 transition-colors flex items-center gap-1.5'>
                      <span className='text-stone-600'>0{i + 1}.</span> {name}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link to='/design-system' className='text-amber-400/80 hover:text-amber-300 text-xs'>
                  [UI DESIGN SYSTEM]
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <span className='text-xs font-mono font-bold uppercase tracking-widest text-amber-400 block mb-5'>
              // ESPECIALIDADES
            </span>
            <ul className='space-y-2.5 text-sm text-stone-400 font-mono'>
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link to={`/servicios/${service.slug}`} className='hover:text-stone-100 transition-colors'>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Horarios & Taller */}
          <div>
            <span className='text-xs font-mono font-bold uppercase tracking-widest text-amber-400 block mb-5'>
              // HORARIOS & ATENCIÓN
            </span>
            <div className='space-y-3 text-xs font-mono text-stone-400'>
              <p>Lunes a Viernes</p>
              <p className='text-stone-100 font-bold'>08:00 — 18:00 HS</p>
              <p className='pt-2'>Sábados (visitas pactadas)</p>
              <p className='text-stone-100 font-bold'>09:00 — 13:00 HS</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className='pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500'>
          <p>© {new Date().getFullYear()} NEXO STUDIO. ARQUITECTURA & MADERA A MEDIDA.</p>
          <p className='text-stone-600'>DEMO COMERCIAL DE ALTA GAMA</p>
        </div>
      </div>
    </footer>
  );
}
