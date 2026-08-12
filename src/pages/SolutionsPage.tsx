import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { solutions } from '@/data/solutions';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import SolutionCard from '@/components/SolutionCard';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { images } from '@/data/images';

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solusi"
        title="Solusi Teknologi Terintegrasi."
        description="Satu mitra, satu ekosistem. Kami merancang, menerapkan, dan mengelola solusi teknologi untuk keamanan, smart campus, pembelajaran digital, dan infrastruktur perusahaan."
        crumb={{ label: 'Beranda', to: '/' }}
      />

      <section className="section-pad bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Gambaran umum"
            title="Empat bidang. Satu mitra yang bertanggung jawab."
            subtitle="Setiap solusi dirancang untuk terintegrasi dengan solusi berikutnya, sehingga institusi Anda dapat mengembangkan peta jalan teknologi tanpa terfragmentasi."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution, i) => (
              <SolutionCard key={solution.slug} solution={solution} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial split — integration */}
      <section className="section-pad bg-mist-50">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <img
              src={images.dataCenterBlue}
              alt="Blue lit data center server racks"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-navy-900/10" />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Dirancang untuk terintegrasi"
              title="Satu ekosistem, bukan tumpukan produk."
            subtitle="IONI JAYA mengoordinasikan keamanan, audio visual, platform pembelajaran, dan infrastruktur sebagai satu ekosistem yang terhubung, dengan satu pihak yang bertanggung jawab."
            />
            <Reveal delay={120}>
              <ButtonLink to="/contact" variant="primary" icon className="mt-8">
              Minta konsultasi
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quick links to each solution */}
      <section className="section-pad bg-navy-950">
        <div className="container-x">
          <SectionHeading
            eyebrow="Jelajahi"
            title="Setiap solusi secara lebih rinci."
            light
          />
          <div className="mt-12 grid gap-px border border-white/10 bg-white/5 md:grid-cols-2">
            {solutions.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={(i % 2) * 80}
                className="group bg-navy-950 p-8 transition-colors duration-500 hover:bg-navy-900"
              >
                <Link to={s.href} className="block">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-accent-400/70">
                      {s.number}
                    </span>
                    <ArrowRight className="h-4 w-4 text-navy-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent-400" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-300">
                    {s.short}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
