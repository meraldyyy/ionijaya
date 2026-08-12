import {
  BookOpen,
  ClipboardCheck,
  CalendarRange,
  BarChart3,
  MonitorSmartphone,
  Lock,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ButtonLink from '@/components/ButtonLink';
import Reveal from '@/components/Reveal';
import { images } from '@/data/images';

const features = [
  {
    icon: BookOpen,
    title: 'e Learning & Lecture Capture',
    desc: 'Modul kursus, materi, dan rekaman kuliah untuk pembelajaran jarak jauh maupun tatap muka.',
  },
  {
    icon: ClipboardCheck,
    title: 'Ujian & Penilaian Online',
    desc: 'Bank soal, ujian terjadwal, dan penilaian otomatis dengan integritas terjaga.',
  },
  {
    icon: CalendarRange,
    title: 'Manajemen Akademik (AMS)',
    desc: 'Registrasi, penjadwalan, transkrip, dan administrasi akademik dalam satu portal.',
  },
  {
    icon: BarChart3,
    title: 'Analitik Pembelajaran',
    desc: 'Dasbor capaian mahasiswa dan kinerja program untuk pengambilan keputusan berbasis data.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Integrasi Smart Classroom',
    desc: 'Terhubung dengan Interactive Flat Panel dan perangkat kelas untuk kelas hibrida.',
  },
  {
    icon: Lock,
    title: 'On Premise & SSO',
    desc: 'Deploy on premise dengan Single Sign On, data tetap di bawah kendali institusi.',
  },
];

export default function LmsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solusi 03, Sistem Manajemen Pembelajaran"
        title="Sistem Manajemen Pembelajaran."
        description="Platform pembelajaran digital end to end karya IONI, mengelola seluruh siklus akademik dalam satu ekosistem yang dapat di deploy secara on premise untuk menjaga kedaulatan data institusi."
        crumb={{ label: 'Solutions', to: '/solutions' }}
      />

      {/* Intro split */}
      <section className="section-pad bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <img
              src={images.onlineLearning}
              alt="Educator teaching an online learning session"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-navy-900/10" />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Platform pendidikan perusahaan"
              title="Satu ekosistem untuk seluruh siklus akademik."
              subtitle="Dari penyampaian materi hingga penilaian, administrasi akademik hingga analitik pembelajaran, LMS IONI menyatukan seluruh siklus pembelajaran dengan penerapan on premise untuk menjaga kedaulatan data institusi."
            />
            <Reveal delay={120}>
              <div className="mt-8 inline-flex items-center gap-3 border border-navy-900/10 bg-mist-50 px-5 py-4">
                <Lock className="h-5 w-5 text-accent-600" />
                <span className="text-sm font-semibold text-navy-900">
                  Penerapan on premise, kedaulatan data sejak awal
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="section-pad bg-mist-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Kemampuan"
            title="Enam modul. Satu ekosistem akademik."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal
                  key={f.title}
                  delay={(i % 3) * 80}
                  className="group bg-white p-8 transition-colors duration-500 hover:bg-navy-50"
                >
                  <div className="flex h-11 w-11 items-center justify-center bg-navy-50 text-navy-700 transition-colors duration-500 group-hover:bg-navy-900 group-hover:text-accent-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-navy-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700/75">
                    {f.desc}
                  </p>
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
              Terapkan platform pembelajaran yang berdaulat.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ButtonLink to="/contact" variant="secondary" icon>
              Minta demo LMS
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
