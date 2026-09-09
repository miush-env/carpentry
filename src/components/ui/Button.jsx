import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  icon: Icon,
  ...props
}) {
  const baseStyles = 'relative inline-flex items-center justify-center font-mono font-bold uppercase tracking-wider overflow-hidden transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed select-none active:translate-x-1 active:translate-y-1 active:shadow-none';

  const sizeStyles = {
    sm: 'px-3.5 py-2 text-xs',
    md: 'px-6 py-3.5 text-xs sm:text-sm',
    lg: 'px-8 py-4 text-sm sm:text-base'
  };

  const variantStyles = {
    primary: 'bg-stone-100 text-stone-950 border-2 border-stone-100 shadow-brutal-sm hover:shadow-brutal-amber',
    amber: 'bg-amber-500 text-stone-950 border-2 border-stone-950 shadow-brutal hover:shadow-brutal-dark',
    dark: 'bg-stone-900 text-stone-100 border-2 border-stone-700 shadow-brutal-sm hover:shadow-brutal-amber',
    outline: 'bg-transparent text-stone-100 border-2 border-stone-100 shadow-brutal-sm hover:shadow-brutal-white',
    'white-outline': 'bg-transparent text-stone-100 border-2 border-stone-100/60 shadow-brutal-sm hover:border-amber-400',
    white: 'bg-stone-100 text-stone-950 border-2 border-stone-950 shadow-brutal hover:shadow-brutal-amber',
    ghost: 'bg-transparent text-stone-400 hover:text-stone-100 border border-transparent'
  };

  // Color of the animated sliding planks (listones de madera)
  const plankColor = {
    primary: 'bg-amber-400 border-stone-950/20',
    amber: 'bg-stone-950 border-stone-800/40',
    dark: 'bg-amber-500 border-stone-950/20',
    outline: 'bg-stone-100 border-stone-300/40',
    'white-outline': 'bg-amber-500 border-stone-950/20',
    white: 'bg-amber-400 border-stone-950/20',
    ghost: 'bg-stone-800/80 border-stone-700/40'
  }[variant] || 'bg-amber-400';

  // Text color on hover when planks fill
  const hoverTextColor = {
    primary: 'group-hover:text-stone-950',
    amber: 'group-hover:text-amber-400',
    dark: 'group-hover:text-stone-950',
    outline: 'group-hover:text-stone-950',
    'white-outline': 'group-hover:text-stone-950',
    white: 'group-hover:text-stone-950',
    ghost: 'group-hover:text-stone-100'
  }[variant] || 'group-hover:text-stone-950';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} group ${className}`}
      {...props}
    >
      {/* 4 Layered Wood Planks sliding sequentially on hover (animación de llenado tipo tablones) */}
      <div className='absolute inset-0 z-0 pointer-events-none flex flex-col' aria-hidden='true'>
        <div
          className={`h-1/4 w-full ${plankColor} -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out border-b`}
          style={{ transitionDelay: '0ms' }}
        />
        <div
          className={`h-1/4 w-full ${plankColor} -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out border-b`}
          style={{ transitionDelay: '40ms' }}
        />
        <div
          className={`h-1/4 w-full ${plankColor} -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out border-b`}
          style={{ transitionDelay: '80ms' }}
        />
        <div
          className={`h-1/4 w-full ${plankColor} -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out`}
          style={{ transitionDelay: '120ms' }}
        />
      </div>

      {/* Foreground Content */}
      <div className={`relative z-10 flex items-center justify-center transition-colors duration-200 ${hoverTextColor}`}>
        {loading ? (
          <>
            <Loader2 className='w-4 h-4 mr-2 animate-spin' />
            <span>PROCESANDO...</span>
          </>
        ) : (
          <>
            {Icon && <Icon className='w-4 h-4 mr-2' />}
            <span>{children}</span>
            {showArrow && (
              <ArrowRight className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5' />
            )}
          </>
        )}
      </div>
    </button>
  );
}
