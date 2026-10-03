import { Video } from 'lucide-react';
import SolutionDetailLayout from '@/components/SolutionDetailLayout';
import { images } from '@/data/images';

export default function MeetingRoomPage() {
  return (
    <SolutionDetailLayout
      eyebrow="Solusi 01, Meeting Room"
      title="Meeting room yang siap untuk kolaborasi hybrid."
      description="Kami merancang ruang rapat yang mudah digunakan, terdengar jelas, dan siap menghubungkan tim di dalam maupun di luar ruangan."
      short="Integrasi kamera, audio, display, dan konferensi video dalam satu pengalaman rapat yang konsisten."
      features={['Konferensi video', 'Audio meeting', 'Display & presentasi', 'Integrasi ruang rapat']}
      image={images.smartMeetingRoom}
      imageAlt="Ruang meeting modern dengan perangkat audio visual"
      icon={Video}
      cta="Rencanakan meeting room Anda"
    />
  );
}
