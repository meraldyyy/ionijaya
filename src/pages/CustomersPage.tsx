import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import {
  customers,
  customerLogos,
  customerLogoSideLabels,
  largeCustomerLogos,
} from '@/data/customers';

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Pelanggan"
        title="Dipercaya Institusi Terkemuka."
        description="Instansi pemerintah, universitas, perusahaan energi, BUMN, dan penyedia layanan kesehatan memilih IONI JAYA untuk teknologi yang tidak boleh gagal."
        crumb={{ label: 'Beranda', to: '/' }}
      />

      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="space-y-16">
            {customers.map((cat, ci) => {
              const Icon = cat.icon;
              return (
                <Reveal
                  key={cat.industry}
                  delay={ci * 60}
                  className="grid gap-8 border-b border-navy-900/10 pb-16 last:border-0 lg:grid-cols-[300px_1fr] lg:gap-16"
                >
                  <div className="lg:sticky lg:top-28 lg:self-start">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-navy-900 text-accent-400">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-xl font-bold leading-tight text-navy-900 md:text-2xl">
                        {cat.industry}
                      </h2>
                    </div>
                  </div>

                  <div className="grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-3">
                    {cat.organizations.map((org, i) => (
                      <Reveal
                        key={org}
                        delay={(i % 3) * 60}
                        className="group flex h-24 items-center bg-white px-6 transition-colors duration-500 hover:bg-mist-50"
                      >
                        {customerLogos[org] ? (
                          <div
                            className={`flex w-full items-center gap-3 ${
                              customerLogoSideLabels[org] ? 'justify-start' : 'flex-col justify-center text-center'
                            }`}
                          >
                            <img
                              src={customerLogos[org]}
                              alt={`${org} logo`}
                              className={`w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
                                largeCustomerLogos.has(org)
                                  ? 'max-h-16 max-w-[220px]'
                                  : 'max-h-12 max-w-[180px]'
                              }`}
                            />
                            {customerLogoSideLabels[org] && (
                              <span className="text-[11px] font-semibold leading-tight text-navy-500 transition-colors duration-300 group-hover:text-navy-900">
                                {customerLogoSideLabels[org]}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="font-display text-sm font-bold tracking-tight text-navy-400 transition-colors duration-300 group-hover:text-navy-900 md:text-base">
                            {org}
                          </span>
                        )}
                      </Reveal>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 md:py-20">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Bergabunglah dengan institusi strategis Indonesia.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ButtonLink to="/contact" variant="secondary" icon>
              Hubungi tim kami
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
