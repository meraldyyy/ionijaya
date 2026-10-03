import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import {
  globalPartners,
  eprocurementBadges,
  partnerLogos,
  partnerLogoSizing,
} from '@/data/partners';

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
                className="group flex h-28 items-center justify-center bg-white px-3 transition-colors duration-500 hover:bg-mist-50 sm:h-32 sm:px-5"
              >
                <img
                  src={partnerLogos[name]}
                  alt={`${name} logo`}
                  className={`${partnerLogoSizing[name]} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
                />
              </Reveal>
            ))}
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
                <a
                  key={badge.href}
                  href={badge.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-navy-900/15 bg-mist-50 px-6 py-3 font-display text-sm font-bold text-navy-900"
                >
                  {badge.label}
                </a>
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
