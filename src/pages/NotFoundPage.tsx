import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function NotFoundPage() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy-950 pt-24">
      <div className="absolute inset-0 hero-grid" aria-hidden />
      <div className="container-x relative text-center">
        <Reveal>
          <p className="font-display text-7xl font-extrabold text-accent-500 md:text-9xl">
            404
          </p>
          <h1 className="mt-6 text-2xl font-bold text-white md:text-3xl">
            Halaman tidak ditemukan.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-navy-300">
            Halaman yang Anda cari mungkin telah dipindahkan atau sudah tidak tersedia.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-accent-500 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke beranda
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
