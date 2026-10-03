import { Monitor } from 'lucide-react';
import SolutionDetailLayout from '@/components/SolutionDetailLayout';
import { images } from '@/data/images';

export default function DigitalServicesPage() {
  return (
    <SolutionDetailLayout
      eyebrow="Solusi 07, Digital Services & Peripheral Provider"
      title="Perangkat digital dan periferal untuk operasional yang lancar."
      description="Satu mitra untuk kebutuhan perangkat digital, periferal, dan dukungan teknis institusi."
      short="Pengadaan dan dukungan perangkat yang membantu operasional institusi tetap berjalan lancar."
      features={['Perangkat digital', 'Periferal', 'Dukungan teknis', 'Integrasi kebutuhan operasional']}
      image={images.digitalPeripheral}
      imageAlt="Perangkat teknologi dan jaringan digital"
      icon={Monitor}
      cta="Konsultasikan kebutuhan digital Anda"
    />
  );
}
