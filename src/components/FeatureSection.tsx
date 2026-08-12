import { Check } from 'lucide-react';
import { type ReactNode } from 'react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface FeatureSectionProps {
  eyebrow?: string;
  title: string;
  features: string[];
  reverse?: boolean;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}

export default function FeatureSection({
  eyebrow,
  title,
  features,
  reverse = false,
  image,
  imageAlt,
  children,
}: FeatureSectionProps) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Reveal className={`relative ${reverse ? 'lg:order-2' : ''}`}>
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-navy-900/10" />
        </div>
        <div className="absolute -bottom-4 -right-4 -z-0 hidden h-32 w-32 border border-navy-900/10 lg:block" aria-hidden />
      </Reveal>

      <div className={reverse ? 'lg:order-1' : ''}>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ul className="mt-8 space-y-3">
          {features.map((f, i) => (
            <Reveal
              key={f}
              delay={i * 60}
              as="li"
              className="flex items-start gap-3 border-b border-navy-900/5 pb-3"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
              <span className="text-sm font-medium text-navy-800 md:text-base">
                {f}
              </span>
            </Reveal>
          ))}
        </ul>
        {children}
      </div>
    </div>
  );
}
