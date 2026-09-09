import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import MaterialCard from '../components/ui/MaterialCard';
import Button from '../components/ui/Button';
import { materials } from '../data/materials';
import { useModal } from '../context/ModalContext';

export default function MaterialsPage() {
  const { openQuoteModal } = useModal();

  return (
    <div className='w-full bg-[#0c0a09] text-[#f4f1ea]'>
      {/* Header */}
      <section className='pt-36 pb-20 border-b-2 border-stone-800 bg-[#171513] bg-grid-pattern'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='inline-block mb-3 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold uppercase tracking-widest text-amber-400'>
            // CATÁLOGO EDITORIAL DE MATERIAS PRIMAS
          </div>
          <h1 className='text-4xl sm:text-7xl font-display font-black text-stone-100 uppercase leading-none max-w-4xl'>
            MATERIALES & MADERAS
          </h1>
          <p className='mt-6 text-base sm:text-xl text-stone-300 font-normal max-w-2xl leading-relaxed font-sans'>
            Seleccionamos maderas duras, semiduras e ingenieriles para garantizar durabilidad, resistencia a la intemperie y belleza de veta.
          </p>
        </div>
      </section>

      {/* Materials Grid */}
      <section className='py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {materials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>

          {/* Sustainability Box */}
          <div className='mt-24 p-8 sm:p-12 bg-stone-900 border-2 border-stone-800 shadow-brutal-dark'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
              <div className='lg:col-span-8 space-y-3'>
                <span className='text-xs font-mono font-bold uppercase tracking-widest text-amber-400'>
                  // GESTIÓN FORESTAL SUSTENTABLE
                </span>
                <h3 className='text-2xl sm:text-4xl font-display font-bold text-stone-100 uppercase'>
                  Compromiso con el recurso natural
                </h3>
                <p className='text-sm sm:text-base text-stone-400 leading-relaxed font-sans'>
                  No utilizamos maderas de desmonte ilegal. Toda nuestra materia prima proviene de bosques con plan de reforestación o certificación FSC.
                </p>
              </div>
              <div className='lg:col-span-4 flex justify-start lg:justify-end'>
                <Button
                  variant='amber'
                  size='lg'
                  onClick={() => openQuoteModal('Consulta de maderas')}
                >
                  Asesoramiento técnico
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
