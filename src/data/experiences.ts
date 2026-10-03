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

export interface ServiceExperience {
  client: string;
  services: string[];
}

export const serviceExperiences: ServiceExperience[] = [
  {
    client: 'Medco E & P Indonesia',
    services: [
      'Camera System Services',
      'Rental Printer, PC, Laptop',
      'Computer & Peripheral',
      'Video Conference',
      'Audio Visual Equipment',
    ],
  },
  {
    client: 'Medco Power Indonesia',
    services: [
      'Camera System Services',
      'Rental Printer, PC, Laptop',
      'Computer & Peripheral',
      'Video Conference',
      'Audio Visual Equipment',
    ],
  },
  {
    client: 'Mitra Energi Pelayaran',
    services: ['APD & Digital Peripherals', 'Printer Equipment'],
  },
  {
    client: 'Sarulla Operation Ltd',
    services: ['IT Hardware', 'Rental Laptop', 'Blanket Order IT', 'Meeting Room Equipment'],
  },
  {
    client: 'Medco Ratch Power Riau',
    services: ['CEMS Monitoring'],
  },
  {
    client: 'RS Fatmawati',
    services: ['UPS Procurement', 'Computer Peripheral Procurement'],
  },
  {
    client: 'Dinkes Tangerang Selatan',
    services: ['PC AIO Procurement'],
  },
  {
    client: 'Universitas Terbuka',
    services: ['PC & Laptop Procurement', 'CCTV Procurement', 'Printer, LCD Projector & UPS Procurement'],
  },
  {
    client: 'RSUD Tangerang Selatan',
    services: ['Printer Procurement', 'IT Peripherals Procurement'],
  },
  {
    client: 'Eni Muara Bakau',
    services: ['Provision of UPS Rental Services', 'Provision of Storage Tape Library Services'],
  },
];

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
