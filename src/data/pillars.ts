import {
  FileCheck2,
  UserCheck,
  Layers,
  Headphones,
  GitBranch,
  type LucideIcon,
} from 'lucide-react';

export interface Pillar {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const pillars: Pillar[] = [
  {
    title: 'Terdaftar Resmi',
    description:
      'LKPP, LPSE, INAPROC, PaDI, E Catalogue siap untuk proses pengadaan barang & jasa pemerintah.',
    icon: FileCheck2,
  },
  {
    title: 'Akuntabilitas Tunggal',
    description:
      'Satu mitra mengoordinasikan seluruh solusi. Saat ada masalah, jelas siapa yang dihubungi.',
    icon: UserCheck,
  },
  {
    title: 'Solusi Terintegrasi',
    description:
      'Dirancang sebagai satu ekosistem berlapis, bukan kumpulan perangkat yang dibeli terpisah.',
    icon: Layers,
  },
  {
    title: 'Layanan Terkelola 24/7',
    description:
      'Layanan purna jual responsif memastikan sistem tetap sehat lama setelah proyek selesai.',
    icon: Headphones,
  },
  {
    title: 'Fleksibel & Bertahap',
    description:
      'Bisa dimulai dari satu prioritas sesuai anggaran, lalu tumbuh mengikuti roadmap.',
    icon: GitBranch,
  },
];
