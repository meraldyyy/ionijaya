import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { globalPartners, localPartner, eprocurementBadges, partnerLogos } from '@/data/partners';
import { Handshake, Factory } from 'lucide-react';

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Mitra"
        title="Mitra Teknologi."
        description="Didukung kemitraan kuat dengan vendor teknologi global dan produsen Indonesia."
        crumb={{ label: 'Beranda', to: '/' }}
      />

      {/* Global partners */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Vendor global"
            title="Mitra teknologi global."
            subtitle="Kami memadukan platform perangkat keras dan perangkat lunak kelas dunia dengan keahlian engineering dan penerapan lokal."
          />

          <div className="mt-14 grid grid-cols-2 gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-3 lg:grid-cols-5">
            {globalPartners.map((name, i) => (
              <Reveal
                key={name}
                delay={(i % 5) * 60}
                className="group flex h-32 items-center justify-center bg-white transition-colors duration-500 hover:bg-mist-50"
              >
                <img
                  src={partnerLogos[name]}
                  alt={`${name} logo`}
                  className="max-h-14 w-auto max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Local manufacturing partner */}
      <section className="section-pad bg-mist-50">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <Reveal>
              <div className="flex items-center gap-3">
                <Factory className="h-6 w-6 text-accent-600" />
                <p className="eyebrow">Local manufacturing</p>
              </div>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-navy-900 md:text-3xl">
                Dibangun di Indonesia bersama {localPartner.name}.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-700/85">
                Melalui kemitraan dengan {localPartner.name}, kami menghadirkan
                teknologi audio visual dan display bersertifikasi TKDN yang
                diproduksi di Indonesia untuk mendukung kedaulatan teknologi nasional.
              </p>
              <Reveal delay={120}>
                <div className="mt-8 inline-flex items-center gap-3 border border-navy-900/10 bg-white px-5 py-4">
                  <Handshake className="h-5 w-5 text-accent-600" />
                  <span className="text-sm font-semibold text-navy-900">
                    Bersertifikasi TKDN, Buatan Indonesia
                  </span>
                </div>
              </Reveal>
            </Reveal>

            <div className="grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2">
              {localPartner.products.map((product, i) => (
                <Reveal
                  key={product}
                  delay={(i % 2) * 80}
                  className="flex items-center gap-4 bg-white p-8"
                >
                  <span className="h-2 w-2 shrink-0 bg-accent-500" />
                  <span className="text-sm font-semibold text-navy-900 md:text-base">
                    {product}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* E Procurement badges */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <Reveal className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-2xl font-bold text-navy-900 md:text-3xl">
              Terdaftar untuk e procurement pemerintah.
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {eprocurementBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 border border-navy-900/15 bg-mist-50 px-6 py-3 font-display text-sm font-bold text-navy-900"
                >
                  {badge}
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
              Kemitraan kuat. Solusi lebih tangguh.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ButtonLink to="/contact" variant="secondary" icon>
              Bermitra dengan IONI JAYA
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
