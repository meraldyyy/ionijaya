import { allSolutions } from '@/data/solutionMenu';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import SolutionCard from '@/components/SolutionCard';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { images } from '@/data/images';

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solusi"
        title="Solusi Teknologi Terintegrasi."
        description="Satu mitra, satu ekosistem. Kami merancang, menerapkan, dan mengelola solusi teknologi untuk keamanan, smart campus, pembelajaran digital, dan infrastruktur perusahaan."
        crumb={{ label: 'Beranda', to: '/' }}
      />

      <section className="section-pad bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Gambaran umum"
            title="Satu ekosistem teknologi. Satu mitra yang bertanggung jawab."
            subtitle="Setiap solusi dirancang untuk terintegrasi dengan solusi berikutnya, sehingga institusi Anda dapat mengembangkan peta jalan teknologi tanpa terfragmentasi."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:[&>*:nth-last-child(-n+2)]:col-span-2">
            {allSolutions.map((solution, i) => (
              <SolutionCard key={solution.slug} solution={solution} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial split — integration */}
      <section className="section-pad bg-mist-50">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <img
              src={images.dataCenterBlue}
              alt="Blue lit data center server racks"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-navy-900/10" />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Dirancang untuk terintegrasi"
              title="Satu ekosistem, bukan tumpukan produk."
            subtitle="IONI JAYA mengoordinasikan keamanan, audio visual, platform pembelajaran, dan infrastruktur sebagai satu ekosistem yang terhubung, dengan satu pihak yang bertanggung jawab."
            />
            <Reveal delay={120}>
              <ButtonLink to="/contact" variant="primary" icon className="mt-8">
              Minta konsultasi
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

    </>
  );
}
