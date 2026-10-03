import { Laptop } from 'lucide-react';
import SolutionDetailLayout from '@/components/SolutionDetailLayout';
import { images } from '@/data/images';

export default function ProcurementPage() {
  return (
    <SolutionDetailLayout
      eyebrow="Solusi 02, Laptop, PC & Printer Procurement"
      title="Pengadaan perangkat kerja yang tepat guna."
      description="Dari pemilihan spesifikasi hingga pengiriman, kami membantu institusi mendapatkan laptop, PC, dan printer yang sesuai dengan kebutuhan operasional."
      short="Satu proses pengadaan untuk perangkat kerja yang sesuai spesifikasi, anggaran, dan skala kebutuhan institusi."
      features={['Laptop dan PC', 'Printer dan periferal', 'Pemilihan spesifikasi', 'Pengadaan dan pengiriman']}
      image={images.laptoppcprinter}
      imageAlt="Perangkat laptop dan perlengkapan kerja"
      icon={Laptop}
      cta="Konsultasikan kebutuhan perangkat"
    />
  );
}
