import {
  Landmark,
  GraduationCap,
  Zap,
  HeartPulse,
  TrainFront,
  type LucideIcon,
} from 'lucide-react';

export interface ExperienceCategory {
  sector: string;
  icon: LucideIcon;
  organizations: string[];
}

export const experiences: ExperienceCategory[] = [
  {
    sector: 'Pemerintahan & Pertahanan / Intelijen',
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
    sector: 'Pendidikan Tinggi',
    icon: GraduationCap,
    organizations: ['Universitas Indonesia (UI)', 'Universitas Terbuka (UT)'],
  },
  {
    sector: 'Energi & Industri',
    icon: Zap,
    organizations: [
      'Pertamina',
      'MedcoEnergi',
      'Star Energy',
      'Eni',
      'ENI Muara Bakau',
      'Sarulla Operation',
    ],
  },
  {
    sector: 'Kesehatan',
    icon: HeartPulse,
    organizations: [
      'RSUP Fatmawati',
      'RS Mitra Keluarga',
      'Dinkes Tangerang Selatan',
      'Dr. Födisch',
    ],
  },
  {
    sector: 'Infrastruktur & Transportasi',
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

export const supportVendors: string[] = ['Maxus', 'CRC', 'SUJ'];
