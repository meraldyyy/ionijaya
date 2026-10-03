import { Printer } from 'lucide-react';
import SolutionDetailLayout from '@/components/SolutionDetailLayout';
import { images } from '@/data/images';

export default function PrinterRentalPage() {
  return (
    <SolutionDetailLayout
      eyebrow="Solusi 09, Rental of Laptop, PC & Printer"
      title="Perangkat siap pakai untuk kebutuhan sementara."
      description="Sewa laptop, PC, dan printer untuk acara, proyek, maupun kebutuhan operasional sementara dengan dukungan logistik dan teknis."
      short="Perangkat siap digunakan untuk kebutuhan jangka pendek maupun kegiatan khusus."
      features={['Sewa laptop dan PC', 'Sewa printer', 'Dukungan logistik', 'Dukungan teknis']}
      image={images.laptoppcprinter}
      imageAlt="Laptop dan perangkat printer untuk kebutuhan operasional"
      icon={Printer}
      cta="Konsultasikan kebutuhan sewa perangkat"
    />
  );
}
