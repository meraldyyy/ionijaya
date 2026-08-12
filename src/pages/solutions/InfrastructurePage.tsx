import {
  Network,
  ShieldHalf,
  Microscope,
  Server,
  Headphones,
  BadgeCheck,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import FeatureSection from '@/components/FeatureSection';
import SectionHeading from '@/components/SectionHeading';
import ButtonLink from '@/components/ButtonLink';
import Reveal from '@/components/Reveal';
import { images } from '@/data/images';

const features = [
  { icon: Network, title: 'Desain & Segmentasi Jaringan' },
  { icon: ShieldHalf, title: 'Cyber Defense (NGFW, IDS/IPS, WAF)' },
  { icon: Microscope, title: 'Cyber Range & Defense Lab' },
  { icon: Server, title: 'Data Center On Premise (TKDN)' },
  { icon: Headphones, title: 'Managed Services 24/7' },
  { icon: BadgeCheck, title: 'Kepatuhan & TKDN' },
];

const layers = [
  {
    title: 'Desain & Segmentasi Jaringan',
    desc: 'LAN/WAN kampus, wireless density tinggi, micro segmentation untuk isolasi antar zona.',
  },
  {
    title: 'Cyber Defense (NGFW, IDS/IPS, WAF)',
    desc: 'Pertahanan siber berlapis: firewall generasi baru, deteksi intrusi, dan proteksi DDoS.',
  },
  {
    title: 'Cyber Range & Defense Lab',
    desc: 'Lab pelatihan perang siber terisolasi, Red Team & Blue Team untuk uji ketahanan.',
  },
  {
    title: 'Data Center On Premise (TKDN)',
    desc: 'Server, storage, dan komputasi di lokasi, dengan komponen Bangga Buatan Indonesia.',
  },
  {
    title: 'Managed Services 24/7',
    desc: 'Pemantauan proaktif, respons insiden, dan pemeliharaan berkelanjutan sepanjang waktu.',
  },
  {
    title: 'Kepatuhan & TKDN',
    desc: 'Selaras dengan regulasi pengadaan pemerintah serta semangat kedaulatan teknologi nasional.',
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Solusi 04, Jaringan, Keamanan Siber & Infrastruktur"
        title="Jaringan, Keamanan Siber & Infrastruktur On Premise."
        description="Fondasi infrastruktur on premise bersertifikasi TKDN, sehingga data sensitif tetap berada di bawah kendali institusi."
        crumb={{ label: 'Solutions', to: '/solutions' }}
      />

      <section className="section-pad bg-white">
        <div className="container-x">
          <FeatureSection
            eyebrow="Kemampuan"
            title="Fondasi bagi setiap sistem lainnya."
            features={[
              'Desain & Segmentasi Jaringan',
              'Pertahanan Siber (NGFW, IDS/IPS, WAF)',
              'Cyber Range & Lab Pertahanan',
              'Pusat Data On Premise (TKDN)',
              'Layanan Terkelola 24/7',
              'Kepatuhan & TKDN',
            ]}
            image={images.serverRackBlue}
            imageAlt="Blue lit server rack in a data center"
            reverse
          />
        </div>
      </section>

      {/* Infrastructure visualization */}
      <section className="section-pad bg-mist-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Arsitektur"
            title="Infrastruktur berlapis yang berdaulat."
            subtitle="Each layer reinforces the next — from network segmentation to cyber defense, data center, and 24/7 operations."
            align="center"
            className="mx-auto"
          />

          <div className="mx-auto mt-16 max-w-3xl space-y-px">
            {layers.map((layer, i) => (
              <Reveal
                key={layer.title}
                delay={i * 90}
                className="group relative flex items-center gap-6 border border-navy-900/10 bg-white p-6 md:p-8"
              >
                <span className="font-display text-2xl font-extrabold text-navy-200 transition-colors duration-300 group-hover:text-accent-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="h-10 w-px bg-navy-900/10" />
                <div className="flex-1">
                  <h3 className="text-base font-bold text-navy-900 md:text-lg">
                    {layer.title}
                  </h3>
                  <p className="mt-1 text-sm text-navy-700/75">{layer.desc}</p>
                </div>
                <div
                  className="hidden h-full w-1 bg-navy-900/5 transition-colors duration-300 group-hover:bg-accent-500 md:block"
                  aria-hidden
                />
              </Reveal>
            ))}
          </div>

          {/* Feature pills */}
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal
                  key={f.title}
                  delay={i * 40}
                  as="span"
                  className="inline-flex items-center gap-2 border border-navy-900/10 bg-white px-4 py-2.5 text-sm font-medium text-navy-800 transition-colors hover:border-accent-500/40 hover:text-accent-600"
                >
                  <Icon className="h-4 w-4 text-navy-500" />
                  {f.title}
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
              Bangun fondasi yang aman dan berdaulat.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ButtonLink to="/contact" variant="secondary" icon>
              Konsultasikan dengan tim infrastruktur kami
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
