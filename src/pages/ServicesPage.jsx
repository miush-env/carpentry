import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles, Plus, ShieldCheck } from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { services } from '../data/services';
import { useModal } from '../context/ModalContext';

export default function ServicesPage() {
  const { openQuoteModal } = useModal();

  return (
    <div className='w-full overflow-x-hidden bg-[#0c0a09] text-[#f4f1ea]'>
      {/* Page Header */}
      <section className='pt-36 pb-20 border-b-2 border-stone-800 bg-[#171513] bg-grid-pattern overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='inline-block mb-3 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold uppercase tracking-widest text-amber-400'>
            // ESPECIALIDADES CONSTRUCTIVAS (01—09)
          </div>
          <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-stone-100 uppercase leading-[1.08] max-w-4xl break-words [overflow-wrap:anywhere]'>
            SERVICIOS & EBANISTERÍA
          </h1>
          <p className='mt-6 text-base sm:text-xl text-stone-300 font-normal max-w-2xl leading-relaxed font-sans'>
            Desarrollamos soluciones a medida sin límites tipológicos: desde mobiliario exclusivo hasta envolventes y estructuras arquitectónicas complejas.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-28'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Standards Banner */}
      <section className='py-24 bg-[#171513] border-t-2 border-stone-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
            <div className='lg:col-span-8 space-y-4'>
              <div className='inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest'>
                // CONTROL DE CALIDAD
              </div>
              <h2 className='text-3xl sm:text-5xl font-display font-extrabold text-stone-100 uppercase'>
                TOLERANCIA CERO A DESAJUSTES.
              </h2>
              <p className='text-stone-400 text-sm sm:text-base leading-relaxed font-sans'>
                Todas las piezas son pre-ensambladas en nuestro taller de Pilar antes del despacho. Verificamos niveles, escuadras y funcionamiento continuo de herrajes ocultos.
              </p>
            </div>
            <div className='lg:col-span-4 flex justify-start lg:justify-end'>
              <Button
                variant='amber'
                size='lg'
                showArrow
                onClick={() => openQuoteModal()}
              >
                Solicitar presupuesto
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
