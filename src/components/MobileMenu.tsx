import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { navItems } from '@/data/company';
import { megaMenuItems } from '@/data/solutionMenu';
import Logo from '@/components/Logo';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const location = useLocation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      <div
        className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-navy-900/10 px-6 py-5">
          <Logo />
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center text-navy-700 transition-colors hover:bg-navy-50"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center justify-between border-b border-navy-900/5 py-4 text-[15px] font-semibold text-navy-900 transition-colors hover:text-accent-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-8">
          <p className="eyebrow mb-4">Solutions</p>
          <div className="flex flex-col gap-1">
            {megaMenuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center gap-3 py-2.5 text-sm text-navy-700 transition-colors hover:text-accent-600"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="mt-8 flex w-full items-center justify-center bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </div>
  );
}
