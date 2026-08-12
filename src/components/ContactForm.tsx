import { useState, type FormEvent } from 'react';
import { Check, Send, AlertCircle } from 'lucide-react';
import { solutions } from '@/data/solutions';

interface FormState {
  name: string;
  institution: string;
  email: string;
  phone: string;
  solution: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  institution: '',
  email: '',
  phone: '',
  solution: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email, and message.');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center border border-navy-900/10 bg-mist-50 px-8 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center bg-accent-500/15 text-accent-600">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="mt-6 text-xl font-bold text-navy-900">
          Terima kasih telah menghubungi kami.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy-700/80">
          Tim kami akan meninjau pertanyaan Anda dan merespons dalam dua hari
          kerja. Untuk kebutuhan mendesak, silakan hubungi kami langsung.
        </p>
        <button
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
          className="mt-8 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700"
        >
          Kirim pesan lain
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 placeholder-navy-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500';
  const labelClass =
    'mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-navy-600';

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nama <span className="text-accent-600">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputClass}
            placeholder="Nama lengkap Anda"
            required
          />
        </div>
        <div>
          <label htmlFor="institution" className={labelClass}>
            Institusi / Perusahaan
          </label>
          <input
            id="institution"
            type="text"
            value={form.institution}
            onChange={(e) => update('institution', e.target.value)}
            className={inputClass}
            placeholder="Nama organisasi Anda"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-accent-600">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputClass}
            placeholder="you@institution.go.id"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Telepon
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputClass}
            placeholder="+62 ..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="solution" className={labelClass}>
          Solusi yang diminati
        </label>
        <select
          id="solution"
          value={form.solution}
          onChange={(e) => update('solution', e.target.value)}
          className={inputClass}
        >
          <option value="">Pilih solusi</option>
          {solutions.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Managed Services">Layanan Terkelola</option>
          <option value="Other">Lainnya / Belum yakin</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Pesan <span className="text-accent-600">*</span>
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${inputClass} min-h-[140px] resize-y`}
          placeholder="Ceritakan institusi, tantangan, atau kebutuhan teknologi Anda."
          required
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <button
        type="submit"
        className="group inline-flex items-center gap-2 bg-navy-900 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-800"
      >
        Kirim pertanyaan
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
