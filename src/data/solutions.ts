import {
  ShieldCheck,
  Presentation,
  GraduationCap,
  Network,
  Headphones,
  type LucideIcon,
} from 'lucide-react';

export interface SolutionModule {
  name: string;
  description: string;
}

export interface Solution {
  number: string;
  slug: string;
  title: string;
  label: string;
  short: string;
  description: string;
  icon: LucideIcon;
  modules: SolutionModule[];
  features: string[];
  href: string;
  flagship?: boolean;
}

export const solutions: Solution[] = [
  {
    number: '01',
    slug: 'security',
    title: 'Keamanan & Pengawasan',
    label: 'Keamanan & Pengawasan',
    short:
      'Pengawasan Cerdas, Command Center & Kontrol Akses, dari perimeter fisik hingga ruang kendali.',
    description:
      'Solusi pengamanan menyeluruh dari perimeter fisik hingga ruang kendali yang menyatukan kamera, kontrol akses, dan visualisasi data dalam satu sistem terpusat untuk pengambilan keputusan yang cepat.',
    icon: ShieldCheck,
    modules: [
      {
        name: 'AI CCTV & VMS',
        description:
          'Analitik video terpusat dengan deteksi anomali real time dan pengawasan multi zona.',
      },
      {
        name: 'ANPR & Deteksi Perimeter',
        description:
          'Pencatatan kendaraan di gerbang dan garis batas virtual dengan peringatan intrusi otomatis.',
      },
      {
        name: 'Command Center & Ruang Situasi',
        description:
          'Video wall LED + video controller (hingga 26U), konsol operator, dan Common Operating Picture.',
      },
      {
        name: 'Kontrol Akses Biometrik',
        description:
          'Akses multifaktor (kartu + biometrik) untuk zona berklasifikasi dengan log audit terpusat.',
      },
    ],
    features: [
      'AI CCTV & VMS',
      'ANPR & Deteksi Perimeter',
      'Command Center & Ruang Situasi',
      'Kontrol Akses Biometrik',
    ],
    href: '/solutions/security',
  },
  {
    number: '02',
    slug: 'smart-campus',
    title: 'Smart Campus & Audio Visual',
    label: 'Ruang & Prestise',
    short:
      'Auditorium, ruang kelas cerdas, panel datar interaktif, rekam kuliah, dan konferensi video aman.',
    description:
      'Kualitas audio visual terbaca sebagai marwah institusi. Dari aula kebanggaan hingga ruang kelas interaktif, kami menghadirkan pengalaman acara dan pembelajaran yang prima.',
    icon: Presentation,
    modules: [
      {
        name: 'Auditorium & Aula',
        description:
          'Line array audio, LED panggung, dan kamera PTZ untuk kuliah umum, wisuda, serta kunjungan delegasi.',
      },
      {
        name: 'Ruang Kelas Cerdas',
        description:
          'Panel Datar Interaktif (IFP), rekam kuliah, dan rapat tanpa kertas untuk ruang senat dan ruang kelas.',
      },
      {
        name: 'Secure Video Conferencing',
        description:
          'Konferensi video on premise untuk koordinasi internal & mitra bukan platform publik.',
      },
    ],
    features: [
      'Auditorium & Aula',
      'Ruang Kelas Cerdas',
      'Konferensi Video Aman',
    ],
    href: '/solutions/smart-campus',
  },
  {
    number: '03',
    slug: 'lms',
    title: 'Learning Management System',
    label: 'Solusi Unggulan',
    short:
      'Platform pembelajaran digital end to end, e learning, ujian online, manajemen akademik, analitik, on premise & SSO.',
    description:
      'Platform pembelajaran digital end to end karya IONI, mengelola seluruh siklus akademik dalam satu ekosistem yang dapat di deploy secara on premise untuk menjaga kedaulatan data institusi.',
    icon: GraduationCap,
    modules: [
      {
        name: 'e Learning & Lecture Capture',
        description:
          'Modul kursus, materi, dan rekaman kuliah untuk pembelajaran jarak jauh maupun tatap muka.',
      },
      {
        name: 'Ujian & Penilaian Online',
        description:
          'Bank soal, ujian terjadwal, dan penilaian otomatis dengan integritas terjaga.',
      },
      {
        name: 'Manajemen Akademik (AMS)',
        description:
          'Registrasi, penjadwalan, transkrip, dan administrasi akademik dalam satu portal.',
      },
      {
        name: 'Analitik Pembelajaran',
        description:
          'Dasbor capaian mahasiswa dan kinerja program untuk pengambilan keputusan berbasis data.',
      },
      {
        name: 'Integrasi Smart Classroom',
        description:
          'Terhubung dengan Interactive Flat Panel dan perangkat kelas untuk kelas hibrida.',
      },
      {
        name: 'On Premise & SSO',
        description:
          'Deploy on premise dengan Single Sign On, data tetap di bawah kendali institusi.',
      },
    ],
    features: [
      'e Learning & Rekam Kuliah',
      'Ujian & Penilaian Online',
      'Manajemen Akademik (AMS)',
      'Analitik Pembelajaran',
      'Integrasi Ruang Kelas Cerdas',
      'On Premise & SSO',
    ],
    href: '/solutions/lms',
    flagship: true,
  },
  {
    number: '04',
    slug: 'infrastructure',
    title: 'Jaringan, Keamanan Siber & Infrastruktur',
    label: 'Fondasi & Kedaulatan',
    short:
      'Jaringan, keamanan siber & infrastruktur on premise bersertifikasi TKDN, NGFW, IDS/IPS, WAF, cyber range, data center, managed services.',
    description:
      'Payung yang menaungi seluruh solusi: fondasi infrastruktur on premise bersertifikasi TKDN, sehingga data sensitif tetap berada di bawah kendali institusi bukan platform asing.',
    icon: Network,
    modules: [
      {
        name: 'Desain & Segmentasi Jaringan',
        description:
          'LAN/WAN kampus, wireless density tinggi, micro segmentation untuk isolasi antar zona.',
      },
      {
        name: 'Cyber Defense (NGFW, IDS/IPS, WAF)',
        description:
          'Pertahanan siber berlapis: firewall generasi baru, deteksi intrusi, dan proteksi DDoS.',
      },
      {
        name: 'Cyber Range & Defense Lab',
        description:
          'Lab pelatihan perang siber terisolasi, Red Team & Blue Team untuk uji ketahanan.',
      },
      {
        name: 'Data Center On Premise (TKDN)',
        description:
          'Server, storage, dan komputasi di lokasi, dengan komponen Bangga Buatan Indonesia.',
      },
      {
        name: 'Managed Services 24/7',
        description:
          'Pemantauan proaktif, respons insiden, dan pemeliharaan berkelanjutan sepanjang waktu.',
      },
      {
        name: 'Kepatuhan & TKDN',
        description:
          'Selaras dengan regulasi pengadaan pemerintah serta semangat kedaulatan teknologi nasional.',
      },
    ],
    features: [
      'Desain & Segmentasi Jaringan',
      'Pertahanan Siber (NGFW, IDS/IPS, WAF)',
      'Cyber Range & Lab Pertahanan',
      'Data Center On Premise (TKDN)',
      'Layanan Terkelola 24/7',
      'Kepatuhan & TKDN',
    ],
    href: '/solutions/infrastructure',
  },
];

export const managedService = {
  number: '05',
  slug: 'managed-services',
  title: 'Layanan Terkelola 24/7',
  label: 'Layanan Berkelanjutan',
  short:
    'Pemantauan proaktif, respons insiden, dan pemeliharaan berkelanjutan sepanjang waktu.',
  icon: Headphones,
  href: '/solutions/infrastructure',
};

export const megaMenuItems = [
  {
    label: 'Keamanan & Pengawasan',
    href: '/solutions/security',
    short: 'AI CCTV, command center, kontrol akses biometrik.',
  },
  {
    label: 'Smart Campus & Audio Visual',
    href: '/solutions/smart-campus',
    short: 'Auditorium, smart classroom, konferensi video aman.',
  },
  {
    label: 'Learning Management System',
    href: '/solutions/lms',
    short: 'Platform e learning unggulan on premise.',
  },
  {
    label: 'Jaringan & Keamanan Siber',
    href: '/solutions/infrastructure',
    short: 'NGFW, IDS/IPS, WAF, cyber range, segmentasi.',
  },
  {
    label: 'Infrastruktur On Premise',
    href: '/solutions/infrastructure',
    short: 'Data center TKDN, server, storage, komputasi.',
  },
  {
    label: 'Layanan Terkelola 24/7',
    href: '/solutions/infrastructure',
    short: 'Pemantauan proaktif, respons insiden, pemeliharaan.',
  },
];
