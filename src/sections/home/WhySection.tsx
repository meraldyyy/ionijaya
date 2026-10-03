import { pillars } from '@/data/pillars';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

export default function WhySection() {
  return (
    <section className="section-pad bg-navy-950">
      <div className="container-x">
        <SectionHeading
          eyebrow="Mengapa IONI"
          title="Mengapa institusi memilih IONI JAYA."
          subtitle="Enam prinsip yang menjadi dasar kami menghadirkan teknologi untuk pemerintah, pendidikan, energi, dan perusahaan."
          light
        />

        <div className="mt-14 grid gap-px border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal
                key={p.title}
                delay={(i % 3) * 80}
                className={`group relative bg-navy-950 p-8 transition-colors duration-500 hover:bg-navy-900 ${
                  i > 2 ? 'lg:col-span-3' : 'lg:col-span-2'
                } ${
                  i === 4 ? 'lg:col-start-4' : ''
                }`}
              >
                <span className="font-display text-xs font-bold text-accent-400/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="mt-5 flex h-11 w-11 items-center justify-center border border-white/15 text-accent-400 transition-colors duration-500 group-hover:border-accent-400/50 group-hover:bg-accent-500/10">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-300">
                  {p.description}
                </p>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-accent-500 transition-all duration-500 group-hover:w-full" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
