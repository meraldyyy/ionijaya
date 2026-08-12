import { solutions } from '@/data/solutions';
import SectionHeading from '@/components/SectionHeading';
import SolutionCard from '@/components/SolutionCard';

export default function HomeSolutions() {
  return (
    <section className="section-pad bg-mist-50">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Yang kami lakukan"
            title="Solusi Teknologi Terintegrasi"
            subtitle="Dari keamanan cerdas hingga ekosistem pembelajaran digital, kami merancang dan menerapkan solusi teknologi sesuai kebutuhan setiap institusi."
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, i) => (
            <SolutionCard key={solution.slug} solution={solution} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
