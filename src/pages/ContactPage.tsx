import { MapPin, Phone, Mail, Globe, Building2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { company } from '@/data/company';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title="Mari Bangun Solusi Teknologi yang Tepat."
        description="Ceritakan institusi, tantangan, atau kebutuhan teknologi Anda. Tim kami akan membantu menemukan solusi yang tepat."
        crumb={{ label: 'Beranda', to: '/' }}
      />

      <section className="section-pad bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          {/* Left — contact info */}
          <div>
            <SectionHeading
              eyebrow="Informasi kontak"
              title="Hubungi tim kami secara langsung."
            />

            <div className="mt-10 space-y-8">
              <Reveal className="border-l-2 border-accent-500 pl-6">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-accent-600" />
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-navy-500">
                    Office
                  </p>
                </div>
                <p className="mt-3 font-display text-lg font-bold text-navy-900">
                  {company.name}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-navy-700/85">
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                  <br />
                  {company.address.line3}
                </p>
              </Reveal>

              <Reveal delay={80} className="border-l-2 border-navy-200 pl-6">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent-600" />
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-navy-500">
                    Telephone
                  </p>
                </div>
                <a
                  href={`tel:${company.phone.replace(/\s|-/g, '')}`}
                  className="mt-3 block text-sm font-medium text-navy-900 transition-colors hover:text-accent-600"
                >
                  {company.phone}
                </a>
              </Reveal>

              <Reveal delay={160} className="border-l-2 border-navy-200 pl-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent-600" />
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-navy-500">
                    Email
                  </p>
                </div>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-3 block text-sm font-medium text-navy-900 transition-colors hover:text-accent-600"
                >
                  {company.email}
                </a>
              </Reveal>

              <Reveal delay={240} className="border-l-2 border-navy-200 pl-6">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-accent-600" />
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-navy-500">
                    Website
                  </p>
                </div>
                <a
                  href={company.websiteUrl}
                  className="mt-3 block text-sm font-medium text-navy-900 transition-colors hover:text-accent-600"
                >
                  {company.website}
                </a>
              </Reveal>

              <Reveal delay={300} className="border-l-2 border-navy-200 pl-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-navy-500">
                  E Procurement
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {company.eprocurementBadges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 border border-navy-900/15 bg-mist-50 px-3 py-1.5 text-xs font-semibold text-navy-900"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-navy-700/85">
                  Terverifikasi dan terdaftar untuk proses pengadaan pemerintah.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <Reveal>
              <div className="border border-navy-900/10 bg-white p-8 shadow-[0_30px_80px_-50px_rgba(16,31,56,0.3)] md:p-10">
                <h2 className="text-xl font-bold text-navy-900 md:text-2xl">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-navy-700/75">
                  Kolom bertanda * wajib diisi.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map placeholder strip */}
      <section className="border-t border-navy-900/10 bg-mist-50">
        <div className="container-x flex items-center gap-4 py-10">
          <MapPin className="h-6 w-6 shrink-0 text-accent-600" />
          <p className="text-sm text-navy-700">
            <span className="font-semibold text-navy-900">{company.name}</span>,{' '}
            {company.address.line1}, {company.address.line2},{' '}
            {company.address.line3}
          </p>
        </div>
      </section>
    </>
  );
}
