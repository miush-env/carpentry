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
                <a
                  href='mailto:basach1582@gmail.com'
                  className='hover:text-amber-400 transition-colors'
                >
                  basach1582@gmail.com
                </a>
              </div>
              <div className='flex items-start gap-2.5'>
                <MapPin className='w-4 h-4 text-amber-500 flex-shrink-0 mt-1' />
                <span>Ruta Panamericana Km 52, Pilar, Buenos Aires</span>
              </div>
            </div>

            <div className='pt-2'>
              <a
                href='mailto:basach1582@gmail.com'
                className='inline-flex items-center gap-2 px-4 py-2 border-2 border-stone-800 bg-stone-900 text-xs font-mono font-bold text-amber-400 hover:text-stone-950 hover:bg-amber-400 hover:border-amber-400 transition-colors shadow-brutal-sm'
              >
                <Mail className='w-3.5 h-3.5' />
                <span>ESCRIBINOS POR EMAIL</span>
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
