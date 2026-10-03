import { UsersRound } from 'lucide-react';
import SolutionDetailLayout from '@/components/SolutionDetailLayout';
import { images } from '@/data/images';

export default function ManPowerPage() {
  return (
    <SolutionDetailLayout
      eyebrow="Solusi 10, Man Power"
      title="Tenaga profesional untuk menjaga solusi tetap berjalan."
      description="Dukungan tenaga profesional untuk membantu institusi menjalankan dan memelihara lingkungan teknologi secara konsisten."
      short="Tim teknis yang mendukung implementasi, operasional, dan pemeliharaan solusi teknologi."
      features={['Tenaga teknis', 'Dukungan operasional', 'Pemeliharaan solusi', 'Pendampingan implementasi']}
      image={images.itManPower}
      imageAlt="Tim profesional berdiskusi untuk mendukung operasional teknologi"
      icon={UsersRound}
      cta="Diskusikan kebutuhan tenaga profesional"
    />
  );
}
