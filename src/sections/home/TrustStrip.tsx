import { trustCategories } from '@/data/company';
import Reveal from '@/components/Reveal';

export default function TrustStrip() {
  return (
    <section className="border-b border-navy-900/10 bg-mist-50">
      <div className="container-x py-14 md:py-16">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-navy-500">
            Dipercaya di berbagai industri strategis
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-10">
          {trustCategories.map((cat, i) => (
            <Reveal
              key={cat}
              delay={i * 60}
              as="span"
              className="flex items-center gap-6 text-sm font-medium text-navy-700 md:gap-10"
            >
              <span className="whitespace-nowrap transition-colors hover:text-navy-900">
                {cat}
              </span>
              {i < trustCategories.length - 1 && (
                <span className="hidden h-1 w-1 rounded-full bg-navy-300 md:block" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
