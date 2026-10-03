import { ArrowRight, Check, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import ButtonLink from '@/components/ButtonLink';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface SolutionDetailLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  short: string;
  features: string[];
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  cta: string;
}

export default function SolutionDetailLayout({
  eyebrow,
  title,
  description,
  short,
  features,
  image,
  imageAlt,
  icon: Icon,
  cta,
}: SolutionDetailLayoutProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        crumb={{ label: 'Solutions', to: '/solutions' }}
      />

      <section className="section-pad bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative overflow-hidden">
            <img src={image} alt={imageAlt} className="aspect-[4/3] w-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-navy-900/10" />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Kemampuan"
              title="Solusi yang siap mendukung kebutuhan institusi."
              subtitle={short}
            />
            <div className="mt-8 inline-flex items-center gap-3 border border-navy-900/10 bg-mist-50 px-5 py-4">
              <Icon className="h-5 w-5 shrink-0 text-accent-600" />
              <span className="text-sm font-semibold text-navy-900">
                Terintegrasi dengan ekosistem teknologi IONI
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Ruang lingkup layanan"
            title="Komponen yang dapat kami siapkan."
            subtitle="Kami menyesuaikan implementasi dengan skala, alur kerja, dan prioritas institusi Anda."
            align="center"
            className="mx-auto"
          />
          <div className="mx-auto mt-14 grid max-w-6xl gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Reveal
                key={feature}
                delay={(index % 3) * 80}
                className="group bg-white p-7 transition-colors duration-500 hover:bg-navy-50"
              >
                <div className="flex h-11 w-11 items-center justify-center bg-navy-50 text-navy-700 transition-colors duration-500 group-hover:bg-navy-900 group-hover:text-accent-400">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-bold text-navy-900">{feature}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/75">
                  Disiapkan dan diintegrasikan sesuai kebutuhan operasional institusi.
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 md:py-20">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Siapkan kebutuhan teknologi Anda bersama IONI.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ButtonLink to="/contact" variant="secondary" icon>
              {cta}
            </ButtonLink>
          </Reveal>
          <Reveal delay={140}>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-300 transition-colors hover:text-accent-400"
            >
              Lihat semua solusi
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
