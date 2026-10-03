import { Code2 } from 'lucide-react';
import SolutionDetailLayout from '@/components/SolutionDetailLayout';
import { images } from '@/data/images';

export default function AppDevelopmentPage() {
  return (
    <SolutionDetailLayout
      eyebrow="Solusi 08, App Development"
      title="Aplikasi yang mengikuti proses bisnis Anda."
      description="Kami membangun aplikasi yang dirancang mengikuti proses bisnis institusi, terintegrasi dengan sistem yang sudah ada, dan siap dikembangkan."
      short="Solusi aplikasi web dan integrasi sistem untuk kebutuhan digital yang spesifik."
      features={['Aplikasi web', 'Integrasi sistem', 'Pengembangan sesuai kebutuhan', 'Pemeliharaan dan pengembangan lanjutan']}
      image={images.appDevelopment}
      imageAlt="Antarmuka aplikasi digital pada perangkat kerja"
      icon={Code2}
      cta="Diskusikan kebutuhan aplikasi"
    />
  );
}
