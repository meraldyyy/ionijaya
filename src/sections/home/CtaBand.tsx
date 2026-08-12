import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { images } from '@/data/images';
import Reveal from '@/components/Reveal';

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0">
        <img
          src={images.networkBlue}
          alt=""
          className="h-full w-full object-cover opacity-15"
          loading="lazy"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 to-navy-900/60" />
      </div>
      <div className="container-x relative py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <p className="eyebrow !text-accent-400 mb-4">Start the conversation</p>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl">
              Mari bangun solusi teknologi yang tepat untuk institusi Anda.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-200">
              Ceritakan tantangan atau kebutuhan teknologi Anda. Tim kami akan
              membantu menemukan solusi yang tepat, andal, dan sesuai kebutuhan.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-accent-500 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-400"
            >
              Hubungi Tim Kami
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
