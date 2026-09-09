import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus } from 'lucide-react';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  linkText,
  linkTo,
  align = 'left',
  theme = 'dark',
  className = ''
}) {
  const isDark = theme === 'dark';
  
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 ${className}`}>
      <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
        {eyebrow && (
          <div className='flex items-center gap-2 mb-3'>
            <span className='inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono font-semibold uppercase tracking-widest text-amber-400'>
              <Plus className='w-3 h-3' />
              {eyebrow}
            </span>
          </div>
        )}
        <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.05] ${
          isDark ? 'text-stone-100' : 'text-stone-950'
        }`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-5 text-base sm:text-lg leading-relaxed font-sans max-w-2xl ${
            isDark ? 'text-stone-400' : 'text-stone-600'
          }`}>
            {subtitle}
          </p>
        )}
      </div>

      {linkText && linkTo && (
        <Link
          to={linkTo}
          className={`group inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider px-4 py-3 border-2 transition-all whitespace-nowrap ${
            isDark
              ? 'text-stone-100 border-stone-700 bg-stone-900 hover:border-amber-400 hover:text-amber-400 shadow-brutal-sm'
              : 'text-stone-950 border-stone-950 bg-stone-100 hover:bg-amber-400 shadow-brutal-sm'
          }`}
        >
          <span>{linkText}</span>
          <ArrowRight className='w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1' />
        </Link>
      )}
    </div>
  );
}
