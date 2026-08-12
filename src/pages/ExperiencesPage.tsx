import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { experiences, supportVendors } from '@/data/experiences';
import { Wrench } from 'lucide-react';

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

      {/* Support vendors */}
      <section className="section-pad bg-mist-50">
        <div className="container-x">
          <Reveal className="flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-3">
              <Wrench className="h-5 w-5 text-accent-600" />
              <p className="eyebrow">Vendor pendukung</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {supportVendors.map((v) => (
                <span
                  key={v}
                  className="border border-navy-900/15 bg-white px-5 py-2.5 font-display text-sm font-bold text-navy-700"
                >
                  {v}
                </span>
              ))}
            </div>
          </Reveal>
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
