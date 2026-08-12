import { Link } from 'react-router-dom';
import { type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: boolean;
}

const base =
  'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2';

const variants: Record<Variant, string> = {
  primary:
    'bg-navy-900 text-white hover:bg-navy-800 shadow-sm hover:shadow-md rounded-[3px]',
  secondary:
    'bg-accent-500 text-white hover:bg-accent-600 shadow-sm hover:shadow-md rounded-[3px]',
  ghost:
    'text-navy-900 hover:text-accent-600',
  outline:
    'border border-navy-900/20 text-navy-900 hover:border-navy-900/40 hover:bg-navy-50 rounded-[3px]',
};

export default function ButtonLink({
  to,
  children,
  variant = 'primary',
  className = '',
  icon = false,
}: ButtonLinkProps) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {icon && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}
