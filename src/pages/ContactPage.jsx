import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle2, MessageSquare, Plus } from 'lucide-react';
import Button from '../components/ui/Button';
import { services } from '../data/services';
import { useModal } from '../context/ModalContext';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const { showToast } = useModal();

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

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'El nombre es obligatorio';
    if (!formData.email.trim()) {
      errs.email = 'El email es obligatorio';
    } else if (!/^[^s@]+@[^s@]+.[^s@]+$/.test(formData.email)) {
      errs.email = 'Ingresá un email válido';
    }
    if (!formData.phone.trim()) errs.phone = 'El teléfono es obligatorio';
    if (!formData.message.trim()) errs.message = 'Contanos sobre tu idea';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {}
      showToast('¡Consulta enviada! Nos comunicaremos en menos de 24 hs.', 'success');
    }, 1000);
  };

  return (
    <div className='w-full bg-[#0c0a09] text-[#f4f1ea]'>
      {/* Header */}
      <section className='pt-36 pb-20 border-b-2 border-stone-800 bg-[#171513] bg-grid-pattern'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='inline-block mb-3 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold uppercase tracking-widest text-amber-400'>
            // CANALES DE CONTACTO DIRECTO
          </div>
          <h1 className='text-4xl sm:text-7xl font-display font-black text-stone-100 uppercase leading-none max-w-4xl'>
            CONTACTO & TALLER
          </h1>
          <p className='mt-6 text-base sm:text-xl text-stone-300 font-normal max-w-2xl leading-relaxed font-sans'>
            ¿Tenés un proyecto en mente? Escribinos y coordinemos una reunión técnica en nuestro estudio o visita a obra.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className='py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            {/* Left: Info & Map graphic */}
            <div className='lg:col-span-5 space-y-8'>
              <div className='p-8 bg-stone-900 border-2 border-stone-800 shadow-brutal-sm space-y-6'>
                <h2 className='text-2xl font-display font-bold uppercase text-stone-100'>
                  Datos del estudio
                </h2>
                <div className='space-y-6 text-sm font-mono'>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-stone-950 border border-stone-700 flex items-center justify-center text-amber-400 flex-shrink-0'>
                      <Phone className='w-4 h-4' />
                    </div>
                    <div>
                      <span className='text-xs text-stone-500 block'>TELÉFONO</span>
                      <span className='text-stone-100 font-bold'>+54 11 5263-9870</span>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-stone-950 border border-stone-700 flex items-center justify-center text-amber-400 flex-shrink-0'>
                      <Mail className='w-4 h-4' />
                    </div>
                    <div>
                      <span className='text-xs text-stone-500 block'>EMAIL</span>
                      <span className='text-stone-100 font-bold'>hola@nexo-arquitectura.com</span>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-stone-950 border border-stone-700 flex items-center justify-center text-amber-400 flex-shrink-0'>
                      <MapPin className='w-4 h-4' />
                    </div>
                    <div>
                      <span className='text-xs text-stone-500 block'>TALLER & OFICINA</span>
                      <span className='text-stone-100 font-bold'>Ruta Panamericana Km 52, Pilar, Bs. As.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Graphic */}
              <div className='bg-stone-900 border-2 border-stone-800 relative aspect-[16/9] w-full overflow-hidden flex items-center justify-center shadow-brutal-sm'>
                <div className='absolute inset-0 bg-grid-pattern opacity-60' />
                <div className='relative z-10 text-center p-5 bg-stone-950/95 border-2 border-stone-700 max-w-xs shadow-brutal-sm'>
                  <MapPin className='w-6 h-6 text-amber-400 mx-auto mb-1.5' />
                  <p className='text-sm font-display font-bold text-stone-100 uppercase'>Planta Industrial NEXO</p>
                  <p className='text-xs font-mono text-stone-400'>Pilar, Buenos Aires</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className='lg:col-span-7'>
              <div className='bg-stone-900 p-8 sm:p-12 border-2 border-stone-800 shadow-brutal'>
                {isSuccess ? (
                  <div className='py-12 text-center flex flex-col items-center'>
                    <div className='w-16 h-16 bg-amber-500/20 border-2 border-amber-500 text-amber-400 flex items-center justify-center mb-6'>
                      <CheckCircle2 className='w-8 h-8' />
                    </div>
                    <h3 className='text-3xl font-display font-bold text-stone-100 uppercase mb-3'>
                      ¡Mensaje enviado con éxito!
                    </h3>
                    <p className='text-stone-400 max-w-md mx-auto text-sm font-sans leading-relaxed mb-8'>
                      Gracias por escribirnos, <strong className='text-stone-100'>{formData.name}</strong>. Un arquitecto especialista se comunicará con vos en menos de 24 horas.
                    </p>
                    <button
                      type='button'
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' });
                      }}
                      className='px-8 py-4 bg-amber-500 text-stone-950 font-mono font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-brutal-sm cursor-pointer'
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                ) : (
                  <div>
                    <h2 className='text-2xl sm:text-3xl font-display font-extrabold text-stone-100 uppercase mb-2'>
                      Envianos un mensaje
                    </h2>
                    <p className='text-stone-400 text-sm font-sans mb-8'>
                      Completá los campos y te responderemos con una propuesta técnica preliminar.
                    </p>

                    <form onSubmit={handleSubmit} className='space-y-5 text-sm font-sans'>
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                        <div>
                          <label className='block text-xs font-mono uppercase text-stone-400 tracking-wider mb-1.5'>
                            Nombre completo *
                          </label>
                          <input
                            type='text'
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder='Ej: Santiago Rossi'
                            className={`w-full px-4 py-3 bg-stone-950 border-2 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400 ${
                              errors.name ? 'border-rose-500' : 'border-stone-800'
                            }`}
                          />
                          {errors.name && <p className='mt-1 text-xs text-rose-400 font-mono'>{errors.name}</p>}
                        </div>

                        <div>
                          <label className='block text-xs font-mono uppercase text-stone-400 tracking-wider mb-1.5'>
                            Email *
                          </label>
                          <input
                            type='email'
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder='santiago@ejemplo.com'
                            className={`w-full px-4 py-3 bg-stone-950 border-2 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400 ${
                              errors.email ? 'border-rose-500' : 'border-stone-800'
                            }`}
                          />
                          {errors.email && <p className='mt-1 text-xs text-rose-400 font-mono'>{errors.email}</p>}
                        </div>
                      </div>

                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                        <div>
                          <label className='block text-xs font-mono uppercase text-stone-400 tracking-wider mb-1.5'>
                            Teléfono / WhatsApp *
                          </label>
                          <input
                            type='tel'
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder='+54 11 9876-5432'
                            className={`w-full px-4 py-3 bg-stone-950 border-2 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400 ${
                              errors.phone ? 'border-rose-500' : 'border-stone-800'
                            }`}
                          />
                          {errors.phone && <p className='mt-1 text-xs text-rose-400 font-mono'>{errors.phone}</p>}
                        </div>

                        <div>
                          <label className='block text-xs font-mono uppercase text-stone-400 tracking-wider mb-1.5'>
                            Tipo de proyecto
                          </label>
                          <select
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className='w-full px-4 py-3 bg-stone-950 border-2 border-stone-800 text-stone-100 focus:outline-none focus:border-amber-400 font-mono text-xs'
                          >
                            <option value=''>Seleccionar categoría...</option>
                            {services.map(s => (
                              <option key={s.id} value={s.title}>{s.title}</option>
                            ))}
                            <option value='Integral'>Proyecto integral / Varios</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className='block text-xs font-mono uppercase text-stone-400 tracking-wider mb-1.5'>
                          Presupuesto aproximado (opcional)
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className='w-full px-4 py-3 bg-stone-950 border-2 border-stone-800 text-stone-100 focus:outline-none focus:border-amber-400 font-mono text-xs'
                        >
                          <option value=''>A definir según propuesta</option>
                          <option value='Hasta $5.000 USD'>Hasta $5.000 USD</option>
                          <option value='$5.000 - $15.000 USD'>$5.000 - $15.000 USD</option>
                          <option value='$15.000 - $40.000 USD'>$15.000 - $40.000 USD</option>
                          <option value='Más de $40.000 USD'>Más de $40.000 USD (Obra mayor)</option>
                        </select>
                      </div>

                      <div>
                        <label className='block text-xs font-mono uppercase text-stone-400 tracking-wider mb-1.5'>
                          Descripción de la idea o requerimiento *
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder='Contanos sobre medidas aproximadas, tipo de madera o fecha estimada...'
                          className={`w-full px-4 py-3 bg-stone-950 border-2 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400 ${
                            errors.message ? 'border-rose-500' : 'border-stone-800'
                          }`}
                        />
                        {errors.message && <p className='mt-1 text-xs text-rose-400 font-mono'>{errors.message}</p>}
                      </div>

                      <div className='pt-2'>
                        <button
                          type='submit'
                          disabled={isSubmitting}
                          className='w-full py-4 bg-amber-500 text-stone-950 font-mono font-bold text-xs uppercase tracking-wider hover:bg-amber-400 border-2 border-stone-950 shadow-brutal transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50'
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className='w-4 h-4 animate-spin' />
                              <span>ENVIANDO PROPUESTA...</span>
                            </>
                          ) : (
                            <>
                              <span>ENVIAR CONSULTA</span>
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
          </div>
        </div>
      </section>
    </div>
  );
}
