import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks, spaInfo } from '@/data/spaContent';
import { Logo } from './Logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory-50/95 backdrop-blur-md shadow-[0_2px_30px_rgba(58,45,32,0.08)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <button
            onClick={() => handleNavClick('#hero')}
            className="group flex items-center gap-2 transition-transform hover:scale-105"
            aria-label="Kim Thủy Spa — trang chủ"
          >
            <Logo className={`h-8 flex-shrink-0 transition-colors duration-500 lg:h-9 ${scrolled ? 'text-forest-700' : 'text-ivory-50'}`} />
          </button>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`group relative text-sm font-light tracking-wide transition-colors duration-300 ${
                    scrolled ? 'text-mocha-700 hover:text-gold-600' : 'text-ivory-100 hover:text-gold-300'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('#booking')}
              className="group relative overflow-hidden rounded-full border border-gold-400 px-7 py-2.5 text-sm font-medium tracking-wide text-gold-700 transition-all duration-300 hover:text-ivory-50 hover:border-gold-500"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-ivory-50">
                Đặt Lịch Ngay
              </span>
              <span className="absolute inset-0 -translate-y-full bg-gradient-to-r from-gold-500 to-gold-600 transition-transform duration-300 group-hover:translate-y-0" />
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden transition-colors duration-300 ${
              scrolled ? 'text-mocha-800' : 'text-ivory-50'
            }`}
            aria-label="Mở menu"
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-mocha-900/60 backdrop-blur-sm transition-opacity duration-400 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-ivory-50 shadow-2xl transition-transform duration-400 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-8 py-6 border-b border-gold-200/40">
            <Logo className="h-8 text-forest-700" />
            <button onClick={() => setMenuOpen(false)} aria-label="Đóng menu" className="text-mocha-700">
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <ul className="flex flex-col px-8 py-6 gap-1">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full border-b border-gold-100/50 py-4 text-left font-serif text-xl text-mocha-800 transition-colors hover:text-gold-600"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="px-8 py-4">
            <button
              onClick={() => handleNavClick('#booking')}
              className="w-full rounded-full bg-gradient-to-r from-gold-500 to-gold-600 py-3.5 text-center text-sm font-medium tracking-wide text-ivory-50 shadow-lg shadow-gold-500/20 transition-all hover:shadow-gold-500/40"
            >
              Đặt Lịch Ngay
            </button>
          </div>
          <div className="px-8 py-6">
            <a
              href={`tel:${spaInfo.phone}`}
              className="flex items-center gap-3 text-mocha-700 transition-colors hover:text-gold-600"
            >
              <Phone size={18} strokeWidth={1.5} className="text-gold-500" />
              <span className="text-sm font-light">{spaInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
