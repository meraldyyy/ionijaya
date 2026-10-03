import { Mic, MonitorSmartphone, Video } from 'lucide-react';
import PageHero from '@/components/PageHero';
import FeatureSection from '@/components/FeatureSection';
import SectionHeading from '@/components/SectionHeading';
import ButtonLink from '@/components/ButtonLink';
import Reveal from '@/components/Reveal';
import { images } from '@/data/images';

const storytelling = [
  {
    icon: Mic,
    title: 'Auditorium & Aula',
    desc: 'Line array audio, LED panggung, dan kamera PTZ untuk kuliah umum, wisuda, serta kunjungan delegasi.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Smart Classroom',
    desc: 'Interactive Flat Panel (IFP), lecture capture, dan paperless meeting untuk ruang senat dan ruang kelas.',
  },
  {
    icon: Video,
    title: 'Secure Video Conferencing',
    desc: 'Konferensi video on premise untuk koordinasi internal & mitra bukan platform publik.',
  },
];

export default function SmartCampusPage() {
  return (
    <>
      <PageHero
        eyebrow="Solusi 04, Smart Audio Visual"
        title="Smart Audio Visual."
        description="Kualitas audio visual terbaca sebagai marwah institusi. Dari aula kebanggaan hingga ruang kelas interaktif, kami menghadirkan pengalaman acara dan pembelajaran yang prima."
        crumb={{ label: 'Solutions', to: '/solutions' }}
      />

      <section className="section-pad bg-white">
        <div className="container-x">
          <FeatureSection
            eyebrow="Kemampuan"
            title="Pengalaman yang mencerminkan wibawa institusi."
            features={[
              'Auditorium & Aula',
              'Ruang Kelas Cerdas',
              'Konferensi Video Aman',
            ]}
            image={images.auditorium}
            imageAlt="Modern university auditorium with tiered seating"
          />
        </div>
      </section>

      {/* Visual storytelling */}
      <section className="section-pad bg-mist-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Pengalaman"
            title="Dari aula hingga setiap ruang kelas."
            subtitle="Kualitas audio visual terbaca sebagai marwah institusi. Kami menghadirkan pengalaman acara dan pembelajaran yang prima."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {storytelling.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  delay={i * 90}
                  className="group border border-navy-900/10 bg-white p-8 transition-all duration-500 hover:shadow-[0_24px_60px_-30px_rgba(16,31,56,0.25)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-navy-50 text-navy-700 transition-colors duration-500 group-hover:bg-navy-900 group-hover:text-accent-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-700/80">
                    {item.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>

          {/* Large editorial image */}
          <Reveal className="mt-12 overflow-hidden">
            <img
              src={images.audiovisual}
              alt="Spacious lecture hall with tiered seating"
              className="aspect-[21/9] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-950 py-16 md:py-20">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Tingkatkan kualitas setiap ruang di kampus Anda.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ButtonLink to="/contact" variant="secondary" icon>
              Rencanakan smart campus Anda
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
