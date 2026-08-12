import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import WhySection from '@/sections/home/WhySection';
import { images } from '@/data/images';
import {
  company,
  vision,
  missions,
  coreValues,
  ceoQuote,
} from '@/data/company';
import { Target, Compass, Flag } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title="Mitra teknologi sejak 2000."
        description="PT IONI JAYA berkembang dari penyedia peralatan IT menjadi mitra solusi teknologi terintegrasi bagi institusi strategis Indonesia."
        crumb={{ label: 'Beranda', to: '/' }}
      />

      {/* Introduction */}
      <section className="section-pad bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <img
              src={images.handshake}
              alt="Professional partnership handshake"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-navy-900/10" />
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-navy-900/15" aria-hidden />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Tentang perusahaan"
              title="Teknologi yang dirancang sesuai kebutuhan Anda."
            />
            <Reveal delay={100}>
              <p className="mt-6 text-base leading-relaxed text-navy-700/85">
                Didirikan pada tahun {company.established}, {company.name}
                menghadirkan solusi teknologi yang andal, sesuai kebutuhan, dan
                inovatif untuk mendukung keunggulan operasional dan transformasi
                digital. Kami melayani pemerintah, pendidikan tinggi, energi,
                kesehatan, dan perusahaan dengan mengintegrasikan keamanan,
                smart campus, platform pembelajaran, serta infrastruktur dalam
                satu kemitraan yang bertanggung jawab.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <ButtonLink to="/contact" variant="primary" icon className="mt-8">
                Hubungi kami
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-pad bg-mist-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Perjalanan kami"
            title="Dari penyedia peralatan menjadi mitra solusi."
          />
          <div className="mt-14 grid gap-px border border-navy-900/10 bg-navy-900/10 md:grid-cols-3">
            {[
              {
                year: '2000',
                title: 'Didirikan',
                desc: 'IONI JAYA memulai perjalanan sebagai penyedia peralatan IT bagi institusi Indonesia.',
              },
              {
                year: 'Perkembangan',
                title: 'Memperluas kemampuan',
                desc: 'Berkembang menjadi penyedia solusi terintegrasi untuk keamanan, audio visual, pembelajaran, dan infrastruktur.',
              },
              {
                year: 'Hari ini',
                title: 'Mitra strategis',
                desc: 'Mitra teknologi tepercaya untuk pemerintah, pendidikan, energi, dan perusahaan dengan solusi bersertifikasi TKDN dan berdaulat.',
              },
            ].map((phase, i) => (
              <Reveal
                key={phase.title}
                delay={i * 90}
                className="bg-white p-8"
              >
                <p className="font-display text-sm font-bold text-accent-600">
                  {phase.year}
                </p>
                <h3 className="mt-3 text-lg font-bold text-navy-900">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-700/80">
                  {phase.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-pad bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <Compass className="h-6 w-6 text-accent-600" />
              <p className="eyebrow">Visi</p>
            </div>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-navy-900 md:text-3xl">
              {vision}
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-accent-600" />
              <p className="eyebrow">Misi</p>
            </div>
            <ol className="mt-6 space-y-5">
              {missions.map((mission, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-display text-sm font-bold text-accent-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-relaxed text-navy-700/85 md:text-base">
                    {mission}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="section-pad bg-mist-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Nilai utama"
            title="Prinsip yang kami pegang."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => (
              <Reveal
                key={value.title}
                delay={(i % 4) * 80}
                className="bg-white p-8"
              >
                <Flag className="h-6 w-6 text-accent-600" />
                <h3 className="mt-5 text-lg font-bold text-navy-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-700/75">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership quote */}
      <section className="relative overflow-hidden bg-navy-950 py-20 md:py-28">
        <div className="absolute inset-0 hero-grid" aria-hidden />
        <div className="container-x relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="font-display text-6xl font-extrabold leading-none text-accent-500/30">
              &ldquo;
            </span>
            <p className="mt-4 text-xl font-medium leading-relaxed text-white md:text-2xl md:leading-relaxed">
              {ceoQuote.text}
            </p>
            <div className="mt-8 flex flex-col items-center">
              <span className="h-px w-12 bg-accent-500" />
              <p className="mt-5 font-display text-base font-bold text-white">
                {ceoQuote.name}
              </p>
              <p className="mt-1 text-sm text-navy-300">{ceoQuote.role}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why IONI */}
      <WhySection />
    </>
  );
}
