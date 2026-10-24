import React from 'react';
import { Ruler, Compass, Award, Users, Plus } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { useModal } from '../context/ModalContext';

export default function AboutPage() {
  const { openQuoteModal } = useModal();

  const values = [
    {
      icon: Ruler,
      title: 'Tolerancia milimétrica',
      desc: 'Mecanizado CNC y calibrado manual para que cada unión cierre hermética y sin tensiones.'
    },
    {
      icon: Compass,
      title: 'Mirada arquitectónica',
      desc: 'No vemos el mueble aislado: lo concebimos como parte de la proporción, la luz y la estructura.'
    },
    {
      icon: Award,
      title: 'Maderas seleccionadas',
      desc: 'Lotes estacionados y secados a horno (<12% humedad) con certificación de manejo FSC.'
    },
    {
      icon: Users,
      title: 'Instalación propia',
      desc: 'Los mismos oficiales ebanistas que fabrican en taller montan en obra para asegurar máxima prolijidad.'
    }
  ];

  return (
    <div className='w-full overflow-x-hidden bg-[#0c0a09] text-[#f4f1ea]'>
      {/* Header */}
      <section className='pt-36 pb-20 border-b-2 border-stone-800 bg-[#171513] bg-grid-pattern overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='inline-block mb-3 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold uppercase tracking-widest text-amber-400'>
            // MANIFIESTO & TRAYECTORIA
          </div>
          <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-stone-100 uppercase leading-[1.08] max-w-4xl break-words [overflow-wrap:anywhere]'>
            DISEÑO, OFICIO & ARQUITECTURA
          </h1>
          <p className='mt-6 text-base sm:text-xl text-stone-300 font-normal max-w-2xl leading-relaxed font-sans'>
            Somos un estudio de arquitectura y taller de carpintería que cree en el poder de la madera para transformar espacios habitables.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className='py-28'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
            <div className='lg:col-span-6 space-y-6'>
              <h2 className='text-3xl sm:text-5xl font-display font-black text-stone-100 uppercase leading-tight'>
                UNIFICAMOS EL PLANO Y EL TALLER.
              </h2>
              <p className='text-base sm:text-lg text-stone-300 leading-relaxed font-sans'>
                La mejor arquitectura ocurre cuando el proyectista y el oficial carpintero trabajan en conjunto. En NEXO no tercerizamos la ingeniería ni el mecanizado.
              </p>
              <p className='text-sm sm:text-base text-stone-400 leading-relaxed font-sans'>
                Desde nuestro centro en Pilar, Buenos Aires, diseñamos en 3D, calculamos despieces y transformamos tablas de roble, nogal, lapacho y cedro en piezas de precisión.
              </p>

              <div className='pt-4'>
                <Button
                  variant='amber'
                  size='lg'
                  showArrow
                  onClick={() => openQuoteModal()}
                >
                  Iniciar conversación
                </Button>
              </div>
            </div>

            <div className='lg:col-span-6 space-y-3'>
              <div className='aspect-[4/3] w-full overflow-hidden bg-stone-950 border-2 border-stone-800 shadow-brutal-dark'>
                <img
                  src='/images/taller/taller-2.jpg'
                  alt='Taller de ebanistería y mecanizado'
                  className='w-full h-full object-cover grayscale-[10%]'
                />
              </div>
              <p className='text-xs font-mono text-stone-500 text-right'>
                // PLANTA DE FABRICACIÓN · PILAR, BS. AS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className='py-28 bg-[#171513] border-t-2 border-stone-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionHeader
            eyebrow='NUESTROS PILARES'
            title='Estándares innegociables'
            subtitle='Tecnología CNC y amor ancestral por el oficio de la ebanistería.'
          />

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className='p-8 bg-stone-900 border-2 border-stone-800 shadow-brutal-sm flex flex-col justify-between hover:border-amber-500 transition-colors'>
                  <div>
                    <div className='w-12 h-12 bg-stone-950 border-2 border-stone-800 flex items-center justify-center text-amber-400 mb-6'>
                      <IconComp className='w-6 h-6' />
                    </div>
                    <h3 className='text-lg font-display font-bold uppercase text-stone-100 mb-2'>{val.title}</h3>
                    <p className='text-sm text-stone-400 leading-relaxed font-sans'>{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
