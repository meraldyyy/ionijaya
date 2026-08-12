import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, BadgeCheck } from 'lucide-react';
import { company } from '@/data/company';
import { solutions, managedService } from '@/data/solutions';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="[&_*]:!text-white">
              <Logo light />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-300">
              {company.historyNarrative}
            </p>
            <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.15em] text-accent-400">
              {company.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {company.eprocurementBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 border border-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-navy-200"
                >
                  <BadgeCheck className="h-3 w-3 text-accent-400" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-400">
              Navigasi
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: 'Perusahaan', to: '/about' },
                { label: 'Solusi', to: '/solutions' },
                { label: 'Pengalaman', to: '/experiences' },
                { label: 'Mitra', to: '/partners' },
                { label: 'Klien', to: '/customers' },
                { label: 'Kontak', to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-navy-300 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-400">
              Solusi
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={s.href}
                    className="text-navy-300 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={managedService.href}
                  className="text-navy-300 transition-colors hover:text-white"
                >
                  {managedService.title}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-400">
              Kontak
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-navy-300">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span>
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                  <br />
                  {company.address.line3}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent-400" />
                <a
                  href={`tel:${company.phone.replace(/\s|-/g, '')}`}
                  className="transition-colors hover:text-white"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent-400" />
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-white"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Globe className="h-4 w-4 shrink-0 text-accent-400" />
                <a
                  href={company.websiteUrl}
                  className="transition-colors hover:text-white"
                >
                  {company.website}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-400 md:flex-row">
          <p>© 2026 {company.name}. Hak cipta dilindungi.</p>
          <p className="flex items-center gap-2">
            <BadgeCheck className="h-3.5 w-3.5 text-accent-400" />
            <span className="font-semibold text-navy-300">{company.eprocurementVerified}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
