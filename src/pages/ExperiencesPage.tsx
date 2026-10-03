import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { experiences, serviceExperiences } from '@/data/experiences';
import { ChevronRight } from 'lucide-react';

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Pengalaman"
        title="Dipercaya di Industri Strategis."
        description="Two decades of delivering technology solutions to the institutions that power Indonesia, from government and defense to education, energy, and healthcare."
        crumb={{ label: 'Beranda', to: '/' }}
      />

      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid gap-px border border-navy-900/10 bg-navy-900/10 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <Reveal
                  key={cat.sector}
                  delay={(i % 3) * 80}
                  className="group flex flex-col bg-white p-8 transition-colors duration-500 hover:bg-mist-50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-navy-50 text-navy-700 transition-colors duration-500 group-hover:bg-navy-900 group-hover:text-accent-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-bold leading-tight text-navy-900 md:text-lg">
                      {cat.sector}
                    </h3>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {cat.organizations.map((org) => (
                      <li
                        key={org}
                        className="border border-navy-900/10 px-3 py-1.5 text-xs font-medium text-navy-700 transition-colors group-hover:border-navy-900/20"
                      >
                        {org}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      

      <section className="section-pad bg-navy-950 text-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent-400">Selected experience</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              A Few of the Many Ways We Help
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-navy-200 md:text-base">
              Dari infrastruktur perangkat hingga ruang kolaborasi dan monitoring,
              kami membantu institusi menjaga operasional tetap siap dan terhubung.
            </p>
          </div>

          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 md:gap-y-12">
            {serviceExperiences.map((experience, i) => (
              <Reveal key={experience.client} delay={(i % 2) * 80}>
                <div className="border-t border-white/15 pt-5">
                  <h3 className="text-lg font-bold text-white md:text-xl">
                    {experience.client}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {experience.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-start gap-2 text-sm leading-relaxed text-navy-100 md:text-base"
                      >
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 md:py-20">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Institusi Anda bisa menjadi yang berikutnya.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ButtonLink to="/contact" variant="secondary" icon>
              Mulai percakapan
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
