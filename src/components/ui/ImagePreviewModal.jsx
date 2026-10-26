import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function ImagePreviewModal() {
  const { previewImage, closeImagePreview } = useModal();
  const isPushedRef = useRef(false);

  useEffect(() => {
    if (!previewImage) {
      isPushedRef.current = false;
      return;
    }

    // Push a history state so that pressing the mobile/hardware back button
    // closes the photo preview instead of navigating the page back
    if (!isPushedRef.current) {
      window.history.pushState({ modal: 'image-preview' }, '');
      isPushedRef.current = true;
    }

    const handlePopState = () => {
      // The browser already popped the state when user pressed Back
      isPushedRef.current = false;
      closeImagePreview();
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
      // If modal was unmounted or closed without going through popstate, revert the pushed history entry
      if (isPushedRef.current) {
        isPushedRef.current = false;
        if (window.history.state?.modal === 'image-preview') {
          window.history.back();
        }
      }
    };
  }, [previewImage, closeImagePreview]);

  // Handle closing from UI (clicking X button, clicking backdrop, or pressing ESC)
  const handleClose = () => {
    if (isPushedRef.current) {
      isPushedRef.current = false;
      if (window.history.state?.modal === 'image-preview') {
        window.history.back();
      }
    }
    closeImagePreview();
  };

  if (!previewImage) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 select-none cursor-pointer'
      onClick={handleClose}
      role='dialog'
      aria-modal='true'
      aria-label='Vista previa de imagen'
    >
      {/* Top action bar with Close Button */}
      <button
        type='button'
        onClick={handleClose}
        className='absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 bg-stone-900/90 hover:bg-amber-500 text-stone-300 hover:text-stone-950 border-2 border-stone-700 hover:border-amber-500 transition-colors flex items-center justify-center cursor-pointer shadow-brutal-sm'
        aria-label='Cerrar vista previa'
      >
        <X className='w-6 h-6' />
      </button>

      {/* Main Image Container */}
      <div
        className='relative max-w-7xl max-h-[92vh] flex flex-col items-center justify-center cursor-default animate-in zoom-in-95 duration-200'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='relative overflow-hidden border-2 border-stone-800 bg-stone-950 shadow-2xl'>
          <img
            src={previewImage.src}
            alt={previewImage.title || 'Vista previa ampliada'}
            className='max-h-[82vh] max-w-[92vw] sm:max-w-[85vw] object-contain block'
          />
          {previewImage.title && (
            <div className='bg-stone-950/95 backdrop-blur-sm border-t border-stone-800 px-4 py-3 flex items-center justify-between gap-4'>
              <span className='font-display font-bold uppercase tracking-wider text-xs sm:text-sm text-stone-100 truncate'>
                {previewImage.title}
              </span>
              <span className='text-[10px] font-mono text-amber-400 uppercase tracking-widest flex-shrink-0'>
                // VISTA EN ALTA RESOLUCIÓN
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
