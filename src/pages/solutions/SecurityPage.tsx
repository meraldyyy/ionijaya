import { Camera, ScanLine, MonitorCheck, Fingerprint } from 'lucide-react';
import PageHero from '@/components/PageHero';
import FeatureSection from '@/components/FeatureSection';
import SectionHeading from '@/components/SectionHeading';
import ButtonLink from '@/components/ButtonLink';
import Reveal from '@/components/Reveal';
import { images } from '@/data/images';

const architecture = [
  {
    icon: Camera,
    label: 'AI CCTV & VMS',
    desc: 'Analitik video terpusat dengan deteksi anomali real time dan pengawasan multi zona.',
  },
  {
    icon: ScanLine,
    label: 'ANPR & Deteksi Perimeter',
    desc: 'Pencatatan kendaraan di gerbang dan garis batas virtual dengan peringatan intrusi otomatis.',
  },
  {
    icon: Fingerprint,
    label: 'Biometric Access Control',
    desc: 'Akses multifaktor (kartu + biometrik) untuk zona berklasifikasi dengan log audit terpusat.',
  },
  {
    icon: MonitorCheck,
    label: 'Command Center & Situation Room',
    desc: 'Video wall LED + video controller (hingga 26U), konsol operator, dan Common Operating Picture.',
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Solusi 01, Keamanan & Pengawasan"
        title="Pengawasan Cerdas, Command Center & Kontrol Akses."
        description="Solusi pengamanan menyeluruh — dari perimeter fisik hingga ruang kendali — yang menyatukan kamera, kontrol akses, dan visualisasi data dalam satu sistem terpusat untuk pengambilan keputusan yang cepat."
        crumb={{ label: 'Solutions', to: '/solutions' }}
      />

      <section className="section-pad bg-white">
        <div className="container-x">
          <FeatureSection
            eyebrow="Kemampuan"
            title="Total awareness, from edge to command center."
            features={[
              'AI CCTV & VMS',
              'ANPR & Deteksi Perimeter',
              'Command Center & Ruang Situasi',
              'Kontrol Akses Biometrik',
            ]}
            image={images.heroSecurityRoom}
                imageAlt="Ruang operasi keamanan dengan monitor pengawasan"
          />
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="section-pad bg-mist-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Arsitektur"
            title="Bagaimana setiap komponen terhubung."
            subtitle="Arsitektur keamanan berlapis yang menyatukan sensor, akses, dan visualisasi dalam satu gambaran operasional."
            align="center"
            className="mx-auto"
          />

          <div className="mt-16">
            <Reveal className="mx-auto max-w-5xl">
              {/* Top layer — sensors */}
              <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-navy-500">
                Edge & Sensing
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {architecture.slice(0, 3).map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <Reveal
                      key={node.label}
                      delay={i * 80}
                      className="border border-navy-900/10 bg-white p-6 text-center"
                    >
                      <div className="mx-auto flex h-12 w-12 items-center justify-center bg-navy-50 text-navy-700">
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="mt-4 text-sm font-bold text-navy-900">
                        {node.label}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-navy-700/70">
                        {node.desc}
                      </p>
                    </Reveal>
                  );
                })}
              </div>

              {/* Connector */}
              <div className="flex justify-center py-6" aria-hidden>
                <div className="h-12 w-px bg-navy-300" />
              </div>

              {/* Central — command center */}
              <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-navy-500">
                Operasi Terpusat
              </p>
              <Reveal
                delay={120}
                className="mt-5 border-2 border-navy-900 bg-navy-950 p-8 text-center text-white"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center bg-accent-500/15 text-accent-400">
                  <MonitorCheck className="h-7 w-7" />
                </div>
                <p className="mt-4 font-display text-lg font-bold">
                  Command Center & Situation Room
                </p>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-navy-200">
                  Video wall terpusat, peringatan real time, dan visualisasi data
                  untuk pengambilan keputusan yang cepat.
                </p>
              </Reveal>

              {/* Connector */}
              <div className="flex justify-center py-6" aria-hidden>
                <div className="h-12 w-px bg-navy-300" />
              </div>

              {/* Bottom — outcomes */}
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Pengambilan keputusan yang cepat',
                  'Common Operating Picture terpadu',
                ].map((outcome, i) => (
                  <Reveal
                    key={outcome}
                    delay={i * 80}
                    className="flex items-center gap-3 border border-navy-900/10 bg-white px-6 py-5"
                  >
                    <span className="h-2 w-2 shrink-0 bg-accent-500" />
                    <span className="text-sm font-semibold text-navy-900">
                      {outcome}
                    </span>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 md:py-20">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Amankan institusi Anda secara menyeluruh.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ButtonLink to="/contact" variant="secondary" icon>
              Hubungi tim keamanan kami
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
