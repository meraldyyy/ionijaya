import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import { navItems } from '@/data/company';
import { megaMenuItems } from '@/data/solutionMenu';
import Logo from '@/components/Logo';
import MobileMenu from '@/components/MobileMenu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = location.pathname === '/';
  const solid = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? 'border-b border-navy-900/10 bg-white/90 backdrop-blur-md shadow-[0_1px_20px_-12px_rgba(16,31,56,0.2)]'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-[72px]">
          <Logo light={!solid && false} />

          <nav
            className="hidden items-center gap-1 md:flex"
            onClick={() => setMegaOpen(false)}
          >
            {navItems.map((item) =>
              item.label === 'Solusi' ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-accent-600'
                          : solid
                          ? 'text-navy-800 hover:text-accent-600'
                          : 'text-navy-100 hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        megaOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </NavLink>

                  <div
                    className={`absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3 transition-all duration-300 ${
                      megaOpen
                        ? 'visible opacity-100 translate-y-0'
                        : 'invisible opacity-0 -translate-y-2'
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-1 border border-navy-900/10 bg-white p-3 shadow-[0_30px_70px_-30px_rgba(16,31,56,0.35)]">
                      {megaMenuItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="group flex flex-col gap-1 p-4 transition-colors hover:bg-navy-50"
                        >
                          <p className="text-sm font-semibold text-navy-900">
                            {item.label}
                          </p>
                          <p className="text-xs leading-relaxed text-navy-700/70">
                            {item.short}
                          </p>
                        </Link>
                      ))}
                      <Link
                        to="/solutions"
                        className="col-span-2 mt-1 flex items-center justify-between border-t border-navy-900/10 px-4 py-3 text-sm font-semibold text-navy-900 transition-colors hover:text-accent-600"
                      >
                        Lihat semua solusi
                        <ChevronDown className="h-4 w-4 -rotate-90" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-accent-600'
                        : solid
                        ? 'text-navy-800 hover:text-accent-600'
                        : 'text-navy-100 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className={`inline-flex items-center px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                solid
                  ? 'bg-navy-900 text-white hover:bg-navy-800'
                  : 'bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20'
              }`}
            >
              Hubungi Kami
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className={`flex h-10 w-10 items-center justify-center md:hidden ${
              solid ? 'text-navy-900' : 'text-white'
            }`}
            aria-label="Buka menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
