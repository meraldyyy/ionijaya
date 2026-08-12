import { type ReactNode } from 'react';
import Reveal from '@/components/Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <Reveal
      className={`max-w-2xl ${alignClass} ${className}`}
    >
      {eyebrow && (
        <p
          className={`eyebrow mb-4 ${light ? '!text-accent-400' : ''}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            light ? 'text-navy-200' : 'text-navy-700/80'
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
