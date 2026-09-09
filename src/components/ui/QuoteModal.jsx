import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Loader2 } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { services } from '../../data/services';
import confetti from 'canvas-confetti';

export default function QuoteModal() {
  const { isQuoteModalOpen, closeQuoteModal, initialProjectType, showToast } = useModal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialProjectType) {
      setFormData(prev => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType, isQuoteModalOpen]);

  if (!isQuoteModalOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'El nombre es obligatorio';
    if (!formData.email.trim()) {
      errs.email = 'El email es obligatorio';
    } else if (!/^[^s@]+@[^s@]+.[^s@]+$/.test(formData.email)) {
      errs.email = 'Ingresá un email válido';
    }
    if (!formData.phone.trim()) errs.phone = 'El teléfono es obligatorio';
    if (!formData.message.trim()) errs.message = 'Por favor contanos brevemente sobre tu proyecto';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {}
      showToast('¡Solicitud enviada con éxito! Nos contactaremos a la brevedad.', 'success');
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: ''
    });
    setIsSuccess(false);
    closeQuoteModal();
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200'>
      <div
        className='relative w-full max-w-2xl bg-stone-900 border border-stone-800 text-stone-100 p-6 sm:p-10 max-h-[90vh] overflow-y-auto shadow-2xl'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type='button'
          onClick={handleReset}
          className='absolute top-5 right-5 text-stone-400 hover:text-white transition-colors p-1 cursor-pointer'
          aria-label='Cerrar modal'
        >
          <X className='w-6 h-6' />
        </button>

        {isSuccess ? (
          <div className='py-8 text-center flex flex-col items-center'>
            <div className='w-16 h-16 bg-emerald-950 border border-emerald-700 text-emerald-400 rounded-full flex items-center justify-center mb-6'>
              <CheckCircle2 className='w-8 h-8' />
            </div>
            <h3 className='text-2xl sm:text-3xl font-serif text-stone-100 mb-3'>
              ¡Solicitud recibida!
            </h3>
            <p className='text-stone-400 max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-8'>
              Muchas gracias, <strong className='text-stone-200'>{formData.name}</strong>. Un arquitecto especialista de NEXO analizará tus requerimientos y te contactará en menos de 24 hs hábiles.
            </p>
            <button
              type='button'
              onClick={handleReset}
              className='px-8 py-3.5 bg-stone-100 text-stone-900 font-medium text-sm hover:bg-white transition-colors cursor-pointer'
            >
              Cerrar y volver al sitio
            </button>
          </div>
        ) : (
          <div>
            <div className='mb-8'>
              <p className='text-xs font-mono tracking-widest uppercase text-stone-400 mb-1.5'>
                Estudio & Presupuestos
              </p>
              <h3 className='text-2xl sm:text-3xl font-serif text-stone-100'>
                Solicitar presupuesto
              </h3>
              <p className='text-stone-400 text-sm mt-2'>
                Completá el formulario para contarnos sobre tu idea. Te asesoramos técnicamente sin compromiso.
              </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-4 font-sans text-sm'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-xs font-mono text-stone-300 uppercase tracking-wider mb-1.5'>
                    Nombre completo *
                  </label>
                  <input
                    type='text'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder='Ej: Juan Pérez'
                    className={`w-full px-4 py-3 bg-stone-950 border text-stone-100 placeholder-stone-600 focus:outline-none focus:ring-1 ${
                      errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-stone-800 focus:border-stone-400 focus:ring-stone-400'
                    }`}
                  />
                  {errors.name && <p className='mt-1 text-xs text-rose-400'>{errors.name}</p>}
                </div>

                <div>
                  <label className='block text-xs font-mono text-stone-300 uppercase tracking-wider mb-1.5'>
                    Email de contacto *
                  </label>
                  <input
                    type='email'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder='juan@ejemplo.com'
                    className={`w-full px-4 py-3 bg-stone-950 border text-stone-100 placeholder-stone-600 focus:outline-none focus:ring-1 ${
                      errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-stone-800 focus:border-stone-400 focus:ring-stone-400'
                    }`}
                  />
                  {errors.email && <p className='mt-1 text-xs text-rose-400'>{errors.email}</p>}
                </div>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-xs font-mono text-stone-300 uppercase tracking-wider mb-1.5'>
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type='tel'
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder='+54 11 1234-5678'
                    className={`w-full px-4 py-3 bg-stone-950 border text-stone-100 placeholder-stone-600 focus:outline-none focus:ring-1 ${
                      errors.phone ? 'border-rose-500 focus:ring-rose-500' : 'border-stone-800 focus:border-stone-400 focus:ring-stone-400'
                    }`}
                  />
                  {errors.phone && <p className='mt-1 text-xs text-rose-400'>{errors.phone}</p>}
                </div>

                <div>
                  <label className='block text-xs font-mono text-stone-300 uppercase tracking-wider mb-1.5'>
                    Tipo de proyecto
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className='w-full px-4 py-3 bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400'
                  >
                    <option value=''>Seleccionar categoría...</option>
                    {services.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value='Integral / Varios'>Integral / Múltiples áreas</option>
                  </select>
                </div>
              </div>

              <div>
                <label className='block text-xs font-mono text-stone-300 uppercase tracking-wider mb-1.5'>
                  Presupuesto estimado (opcional)
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className='w-full px-4 py-3 bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400'
                >
                  <option value=''>A definir según asesoramiento</option>
                  <option value='Hasta $5.000 USD'>Hasta $5.000 USD</option>
                  <option value='$5.000 - $15.000 USD'>$5.000 - $15.000 USD</option>
                  <option value='$15.000 - $40.000 USD'>$15.000 - $40.000 USD</option>
                  <option value='Más de $40.000 USD'>Más de $40.000 USD (Obra mayor)</option>
                </select>
              </div>

              <div>
                <label className='block text-xs font-mono text-stone-300 uppercase tracking-wider mb-1.5'>
                  Detalles de la idea / medidas / ubicación *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder='Contanos qué tenés en mente: medidas aproximadas, tipo de madera preferida o plazos...'
                  className={`w-full px-4 py-3 bg-stone-950 border text-stone-100 placeholder-stone-600 focus:outline-none focus:ring-1 ${
                    errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-stone-800 focus:border-stone-400 focus:ring-stone-400'
                  }`}
                />
                {errors.message && <p className='mt-1 text-xs text-rose-400'>{errors.message}</p>}
              </div>

              <div className='pt-4 flex flex-col sm:flex-row items-center justify-end gap-3'>
                <button
                  type='button'
                  onClick={handleReset}
                  className='w-full sm:w-auto px-6 py-3 border border-stone-700 text-stone-300 hover:text-white hover:border-white transition-colors text-xs font-mono uppercase tracking-wider cursor-pointer'
                >
                  Cancelar
                </button>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full sm:w-auto px-8 py-3.5 bg-stone-50 text-stone-950 font-medium text-sm hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50'
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className='w-4 h-4 animate-spin' />
                      <span>Enviando propuesta...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar solicitud</span>
                      <Send className='w-4 h-4' />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
