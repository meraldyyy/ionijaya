import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  crumb?: { label: string; to?: string };
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  crumb,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-navy-900/10 bg-navy-950 pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="absolute inset-0 hero-grid" />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent"
        aria-hidden
      />
      <div className="container-x relative">
        {crumb && (
          <Reveal>
            <nav className="mb-8 flex items-center gap-1.5 text-xs font-medium text-navy-300">
              {crumb.to ? (
                <Link to={crumb.to} className="transition-colors hover:text-accent-400">
                  {crumb.label}
                </Link>
              ) : (
                <span>{crumb.label}</span>
              )}
              <ChevronRight className="h-3 w-3" />
            </nav>
          </Reveal>
        )}
        {eyebrow && (
          <Reveal>
            <p className="eyebrow !text-accent-400 mb-5">{eyebrow}</p>
          </Reveal>
        )}
        <Reveal delay={80}>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-200 md:text-lg">
              {description}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={220} className="mt-10">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
