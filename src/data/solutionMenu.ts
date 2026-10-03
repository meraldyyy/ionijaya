import {
  Code2,
  GraduationCap,
  Laptop,
  Monitor,
  Network,
  Presentation,
  Printer,
  ShieldCheck,
  UsersRound,
  Video,
  type LucideIcon,
} from 'lucide-react';

export interface SolutionSummary {
  number: string;
  slug: string;
  title: string;
  label: string;
  short: string;
  href: string;
  icon: LucideIcon;
}

const solutionCatalog: SolutionSummary[] = [
  {
    number: '01',
    slug: 'meeting-room-solution',
    title: 'Meeting Room',
    label: 'Kolaborasi',
    short: 'Ruang rapat hybrid dengan audio, video, dan display terintegrasi.',
    href: '/solutions/meeting-room-solution',
    icon: Video,
  },
  {
    number: '02',
    slug: 'laptop-pc-printer-procurement',
    title: 'Laptop, PC & Printer Procurement',
    label: 'Pengadaan Perangkat',
    short: 'Pengadaan perangkat kerja sesuai spesifikasi dan kebutuhan institusi.',
    href: '/solutions/laptop-pc-printer-procurement',
    icon: Laptop,
  },
  {
    number: '03',
    slug: 'security',
    title: 'Keamanan & Pengawasan',
    label: 'Keamanan',
    short: 'AI CCTV, command center, dan kontrol akses biometrik.',
    href: '/solutions/security',
    icon: ShieldCheck,
  },
  {
    number: '04',
    slug: 'smart-audio-visual',
    title: 'Smart Audio Visual',
    label: 'Audio Visual',
    short: 'Auditorium, smart classroom, dan konferensi video aman.',
    href: '/solutions/smart-audio-visual',
    icon: Presentation,
  },
  {
    number: '05',
    slug: 'lms',
    title: 'Learning Management System',
    label: 'Solusi Pembelajaran',
    short: 'Platform pembelajaran digital end to end, e-learning, ujian online, dan analitik.',
    href: '/solutions/lms',
    icon: GraduationCap,
  },
  {
    number: '06',
    slug: 'infrastructure',
    title: 'Jaringan, Keamanan Siber & Infrastruktur',
    label: 'Fondasi & Kedaulatan',
    short: 'Jaringan, cyber defense, data center on premise, dan layanan terkelola.',
    href: '/solutions/infrastructure',
    icon: Network,
  },
  {
    number: '07',
    slug: 'digital-services-peripheral-provider',
    title: 'Digital Services & Peripheral Provider',
    label: 'Layanan Digital',
    short: 'Pengadaan dan dukungan perangkat digital serta periferal institusi.',
    href: '/solutions/digital-services-peripheral-provider',
    icon: Monitor,
  },
  {
    number: '08',
    slug: 'app-development',
    title: 'App Development',
    label: 'Pengembangan Aplikasi',
    short: 'Aplikasi yang disesuaikan dengan alur kerja dan kebutuhan digital institusi.',
    href: '/solutions/app-development',
    icon: Code2,
  },
  {
    number: '09',
    slug: 'laptop-pc-printer-rental',
    title: 'Rental of Laptop, PC & Printer',
    label: 'Sewa Perangkat',
    short: 'Sewa perangkat untuk acara, proyek, maupun kebutuhan operasional sementara.',
    href: '/solutions/laptop-pc-printer-rental',
    icon: Printer,
  },
  {
    number: '10',
    slug: 'man-power',
    title: 'Man Power',
    label: 'Dukungan Operasional',
    short: 'Tenaga profesional untuk implementasi, operasional, dan pemeliharaan teknologi.',
    href: '/solutions/man-power',
    icon: UsersRound,
  },
];

export const primarySolutions = solutionCatalog.slice(0, 4);

export const allSolutions = solutionCatalog;

export const megaMenuItems = primarySolutions.map(({ title, href, short }) => ({
  label: title,
  href,
  short,
}));
