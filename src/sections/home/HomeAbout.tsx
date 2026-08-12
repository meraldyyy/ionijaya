import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { aboutFacts } from '@/data/company';
import { images } from '@/data/images';
import Reveal from '@/components/Reveal';

export default function HomeAbout() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left — image */}
        <Reveal className="relative">
          <div className="relative overflow-hidden">
            <img
              src={images.serverRoom}
              alt="Enterprise data center infrastructure"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
          </div>
          {/* Floating year badge */}
          <div className="absolute -bottom-6 -right-4 hidden bg-navy-900 px-8 py-6 text-white shadow-xl md:block lg:-right-8">
            <p className="font-display text-4xl font-extrabold text-accent-400">
              2000
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-navy-200">
              Established
            </p>
          </div>
          {/* Decorative border line */}
          <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-navy-900/15" aria-hidden />
        </Reveal>

        {/* Right — content */}
        <div>
          <Reveal>
            <p className="eyebrow mb-4">About IONI JAYA</p>
            <h2 className="text-3xl font-bold leading-tight text-navy-900 md:text-4xl lg:text-[2.75rem]">
              Teknologi yang dirancang sesuai kebutuhan Anda.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 text-base leading-relaxed text-navy-700/85 md:text-lg">
              Didirikan pada tahun 2000, PT IONI JAYA memulai perjalanan sebagai
              penyedia peralatan IT untuk sektor energi. Dengan pengalaman lebih
              dari 20 tahun, perusahaan berkembang menjadi mitra solusi teknologi
              tepercaya bagi institusi pemerintah, pendidikan tinggi, energi,
              kesehatan, dan infrastruktur di seluruh Indonesia.
            </p>
          </Reveal>

          <div className="mt-10 space-y-px border-y border-navy-900/10 bg-navy-900/5">
            {aboutFacts.map((fact, i) => (
              <Reveal
                key={fact.label}
                delay={120 + i * 80}
                className="grid grid-cols-[140px_1fr] items-center gap-6 bg-white px-5 py-6 md:grid-cols-[180px_1fr]"
              >
                <p className="font-display text-lg font-bold text-navy-900 md:text-xl">
                  {fact.label}
                </p>
                <p className="text-sm text-navy-700/80 md:text-base">
                  {fact.value}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={360}>
            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-accent-600"
            >
              Kenali IONI JAYA
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
