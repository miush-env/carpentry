import React from 'react';
import { X } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function MaterialModal() {
  const { selectedMaterial, closeMaterialModal, openQuoteModal } = useModal();

  if (!selectedMaterial) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-in fade-in duration-200'>
      <div
        className='relative w-full max-w-2xl bg-stone-900 border border-stone-800 text-stone-100 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type='button'
          onClick={closeMaterialModal}
          className='absolute top-4 right-4 text-stone-400 hover:text-white p-2 cursor-pointer'
          aria-label='Cerrar modal'
        >
          <X className='w-6 h-6' />
        </button>

        <div className='flex items-center gap-3 mb-4'>
          <span className='px-2.5 py-1 bg-stone-800 text-[11px] font-mono uppercase tracking-wider text-stone-300'>
            {selectedMaterial.category}
          </span>
        </div>

        <h3 className='text-2xl sm:text-3xl font-serif text-stone-100 mb-4'>
          {selectedMaterial.name}
        </h3>

        <div className='aspect-video w-full overflow-hidden bg-stone-950 mb-6 border border-stone-800'>
          <img
            src={selectedMaterial.image}
            alt={selectedMaterial.name}
            className='w-full h-full object-cover'
          />
        </div>

        <div className='space-y-4 text-sm'>
          <p className='text-stone-300 leading-relaxed'>{selectedMaterial.description}</p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-800 text-xs font-mono'>
            <div>
              <span className='text-stone-500 uppercase block mb-1'>Origen sostenible</span>
              <span className='text-stone-200'>{selectedMaterial.origin}</span>
            </div>
            <div>
              <span className='text-stone-500 uppercase block mb-1'>Densidad / Dureza</span>
              <span className='text-stone-200'>{selectedMaterial.density}</span>
            </div>
            <div>
              <span className='text-stone-500 uppercase block mb-1'>Durabilidad</span>
              <span className='text-stone-200'>{selectedMaterial.durability}</span>
            </div>
            <div>
              <span className='text-stone-500 uppercase block mb-1'>Terminaciones</span>
              <span className='text-stone-200'>{selectedMaterial.finishType}</span>
            </div>
          </div>

          <div className='pt-4 border-t border-stone-800'>
            <span className='text-xs font-mono text-stone-500 uppercase block mb-1.5'>Aplicaciones ideales:</span>
            <p className='text-xs text-stone-300 bg-stone-950 p-3 border border-stone-800'>
              {selectedMaterial.applications}
            </p>
          </div>
        </div>

        <div className='mt-8 pt-4 border-t border-stone-800 flex justify-end gap-3'>
          <button
            type='button'
            onClick={() => {
              closeMaterialModal();
              openQuoteModal(`Proyecto en ${selectedMaterial.name}`);
            }}
            className='px-6 py-3 bg-stone-100 text-stone-900 text-xs font-mono font-semibold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer'
          >
            Cotizar con este material
          </button>
        </div>
      </div>
    </div>
  );
}
