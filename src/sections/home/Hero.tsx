import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { images } from '@/data/images';
import { company } from '@/data/company';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-navy-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={images.heroControlRoom}
          alt="Enterprise command center with multiple monitoring screens"
          className="h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
      </div>

      {/* Architectural grid overlay */}
      <div className="absolute inset-0 hero-grid" aria-hidden />

      {/* Accent line */}
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent"
        aria-hidden
      />

      <div className="container-x relative flex min-h-[100svh] flex-col justify-center pt-24 pb-20">
        <div className="max-w-3xl">
          <div
            className="reveal is-visible flex items-center gap-3"
            style={{ transitionDelay: '0ms' }}
          >
            <span className="h-px w-10 bg-accent-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
              {company.name} · Established {company.established}
            </span>
          </div>

          <h1
            className="reveal is-visible mt-6 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[4rem]"
            style={{ transitionDelay: '100ms' }}
          >
            Teknologi Andal.
            <br />
            Solusi Terintegrasi.
            <br />
            <span className="text-accent-400">Digital Transformation.</span>
          </h1>

          <p
            className="reveal is-visible mt-7 max-w-xl text-base leading-relaxed text-navy-200 md:text-lg"
            style={{ transitionDelay: '200ms' }}
          >
              Menghadirkan teknologi yang andal, sesuai kebutuhan, dan inovatif
              untuk mendukung keunggulan operasional dan transformasi digital.
          </p>

          <div
            className="reveal is-visible mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ transitionDelay: '300ms' }}
          >
            <Link
              to="/solutions"
              className="group inline-flex items-center justify-center gap-2 bg-accent-500 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-400"
            >
              Jelajahi Solusi Kami
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
            >
              <Phone className="h-4 w-4" />
              Hubungi Tim Kami
            </Link>
          </div>
        </div>

        {/* Bottom stats strip */}
        <div
          className="reveal is-visible mt-16 grid max-w-2xl grid-cols-3 gap-px border-t border-white/10 bg-white/5 sm:mt-24"
          style={{ transitionDelay: '400ms' }}
        >
          {[
            { value: '20+', label: 'Years of experience' },
            { value: '6', label: 'Strategic industries served' },
            { value: '10+', label: 'Global technology partners' },
          ].map((stat) => (
            <div key={stat.label} className="bg-navy-950/40 px-5 py-6 backdrop-blur-sm">
              <p className="font-display text-3xl font-bold text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-navy-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
