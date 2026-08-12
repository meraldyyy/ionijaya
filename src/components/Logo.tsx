import { Link } from 'react-router-dom';
import logoImage from '@/assets/ionilogo.png';

interface LogoProps {
  light?: boolean;
  className?: string;
}

export default function Logo({ light = false, className = '' }: LogoProps) {
  return (
    <Link
      to="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="IONI JAYA, Home"
    >
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-sm">
        <img src={logoImage} alt="IONI JAYA logo" className="h-full w-full object-cover" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[15px] font-extrabold tracking-tight ${
            light ? 'text-navy-950' : 'text-navy-900'
          }`}
        >
          IONI JAYA
        </span>
        <span
          className={`mt-0.5 text-[9px] font-semibold uppercase tracking-[0.25em] ${
            light ? 'text-navy-500' : 'text-accent-600'
          }`}
        >
          PT IONI JAYA
        </span>
      </span>
    </Link>
  );
}
