import {
  Landmark,
  GraduationCap,
  Zap,
  HeartPulse,
  TrainFront,
  type LucideIcon,
} from 'lucide-react';

export interface CustomerCategory {
  industry: string;
  icon: LucideIcon;
  organizations: string[];
}

export const customerLogos: Record<string, string> = {
  'SKK Migas': '/images/customers/skkmigas.webp',
  BIN: '/images/customers/bin.png',
  BKKBN: '/images/customers/bkkbn.png',
  'Kementerian PPN / Bappenas': '/images/customers/ppnbappenas.webp',
  'Kementerian Keuangan': '/images/customers/kemenkeu.png',
  LAPAN: '/images/customers/lapan.webp',
  'Universitas Indonesia (UI)': '/images/customers/ui.webp',
  'Universitas Terbuka (UT)': '/images/customers/ut.webp',
  Pertamina: '/images/customers/pertamina.svg',
  MedcoEnergi: '/images/customers/medco.png',
  'Star Energy': '/images/customers/star.jpg',
  'ENI Muara Bakau': '/images/customers/eni.png',
  'Sarulla Operation': '/images/customers/sarulla.png',
  'RSUP Fatmawati': '/images/customers/fatmawati.png',
  'RS Mitra Keluarga': '/images/customers/mitrakeluarga.svg',
  'Dinkes Tangerang Selatan': '/images/customers/dinkestangsel.png',
  'Dr. Födisch': '/images/customers/drfodisch.png',
  'PT KAI': '/images/customers/kai.webp',
  'PT INKA': '/images/customers/inka.png',
  'Medco Ratch Power Riau (MRPR)': '/images/customers/medcoratchpowerriau.jpeg',
  'Mitra Energi Pelayaran': '/images/customers/mitraenergipelayaran.jpeg',
  'PTPN XI': '/images/customers/ptpn.jpg',
  'Unsri': '/images/customers/unsri.png',
};

export const customerLogoSideLabels: Record<string, string> = {
  'Kementerian PPN / Bappenas': 'PPN/Bappenas',
  BKKBN : 'Badan Kependudukan dan Keluarga Berencana Nasional',
  BIN: 'Badan Intelijen Nasional',
  'Kementerian Keuangan': 'Kementrian Keuangan Republik Indonesia',
  'SKK Migas': 'SKK Migas',
  LAPAN: 'Lembaga Penerbangan dan Antariksa Nasional',
  'Universitas Indonesia (UI)': 'Universitas Indonesia (UI)',
  'Universitas Terbuka (UT)': 'Universitas Terbuka (UT)',
  MedcoEnergi: 'Medco Energi',
  'Star Energy': 'Star Energy Geothermal',
  'ENI Muara Bakau' : 'Eni Muara Bakau',
  'RSUP Fatmawati': 'RSUP Fatmawati',
  'Mitra Energi Pelayaran': 'Mitra Energi Pelayaran',
  'PTPN XI': 'PT Perkebunan Nusantara XI',
  'Unsri': 'Universitas Sriwijaya',
};

export const largeCustomerLogos = new Set([
  'Dinkes Tangerang Selatan',
  'Mitra Energi Pelayaran',
  'Kementerian PPN / Bappenas',
]);

export const customers: CustomerCategory[] = [
  {
    industry: 'Pemerintahan & Intelijen',
    icon: Landmark,
    organizations: [
      'SKK Migas',
      'BIN',
      'BKKBN',
      'Kementerian PPN / Bappenas',
      'Kementerian Keuangan',
      'LAPAN',
    ],
  },
  {
    industry: 'Pendidikan Tinggi',
    icon: GraduationCap,
    organizations: ['Universitas Indonesia (UI)', 'Universitas Terbuka (UT)', 'Unsri'],
  },
  {
    industry: 'Energi & Industri',
    icon: Zap,
    organizations: [
      'Pertamina',
      'Sarulla Operation',
      'MedcoEnergi',
      'Star Energy',
      'ENI Muara Bakau',
    ],
  },
  {
    industry: 'Kesehatan',
    icon: HeartPulse,
    organizations: [
      
      'RS Mitra Keluarga',
      'Dinkes Tangerang Selatan',
      'Dr. Födisch',
      'RSUP Fatmawati',
    ],
  },
  {
    industry: 'Infrastruktur & Transportasi',
    icon: TrainFront,
    organizations: [
      'PT KAI',
      'PT INKA',
      'Medco Ratch Power Riau (MRPR)',
      'Mitra Energi Pelayaran',
      'PTPN XI',
    ],
  },
];
