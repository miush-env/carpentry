import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function Toast() {
  const { toastMessage } = useModal();
  if (!toastMessage) return null;

  return (
    <div className='fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 bg-stone-950 text-stone-100 shadow-2xl border border-stone-800 animate-in fade-in slide-in-from-bottom-5 duration-300 max-w-md'>
      {toastMessage.type === 'success' ? (
        <CheckCircle2 className='w-5 h-5 text-emerald-400 flex-shrink-0' />
      ) : (
        <AlertCircle className='w-5 h-5 text-rose-400 flex-shrink-0' />
      )}
      <p className='text-sm font-sans leading-snug'>{toastMessage.message}</p>
    </div>
  );
}
