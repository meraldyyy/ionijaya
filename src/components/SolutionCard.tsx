import { Link } from 'react-router-dom';
import { ArrowRight, } from 'lucide-react';
import { type SolutionSummary } from '@/data/solutionMenu';
import Reveal from '@/components/Reveal';

interface SolutionCardProps {
  solution: SolutionSummary;
  index: number;
}

export default function SolutionCard({ solution, index }: SolutionCardProps) {
  const Icon = solution.icon;
  return (
    <Reveal delay={index * 80} className="group h-full">
      <Link
        to={solution.href}
        className="relative flex h-full flex-col border border-navy-900/10 bg-white p-8 transition-all duration-500 hover:border-navy-900/25 hover:shadow-[0_24px_60px_-30px_rgba(16,31,56,0.25)]"
      >

        <div className="flex items-start justify-between">
          <span className="font-display text-sm font-bold text-navy-300">
            {solution.number}
          </span>
          <div className="flex h-11 w-11 items-center justify-center bg-navy-50 text-navy-700 transition-colors duration-500 group-hover:bg-navy-900 group-hover:text-accent-400">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-accent-600">
          {solution.label}
        </p>
        <h3 className="mt-2 text-xl font-bold text-navy-900">
          {solution.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700/80">
          {solution.short}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors group-hover:text-accent-600">
          Lebih Lanjut
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </Reveal>
  );
}
