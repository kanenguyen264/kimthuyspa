import { Reveal } from './Reveal';
import { spaInfo } from '@/data/spaContent';
import { Logo } from './Logo';
import { MapPin, Phone, Clock, Facebook, Instagram, MessageCircle, Heart, Navigation } from 'lucide-react';

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-mocha-900 pt-20 pb-8">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full border border-gold-400/30" />
        <div className="absolute right-1/4 bottom-20 h-48 w-48 rounded-full border border-gold-400/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top section */}
        <div className="grid gap-12 pb-16 lg:grid-cols-4">
          {/* Brand */}
          <Reveal className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <Logo className="h-10 text-gold-300" />
            </div>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-ivory-100/50">
              Sức khỏe của bạn — niềm đam mê của chúng tôi. Trải nghiệm chăm sóc dưỡng sinh
              đẳng cấp tại Kim Thủy Spa.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={spaInfo.social.facebook}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/20 text-gold-300 transition-all hover:border-gold-400/50 hover:bg-gold-500/10"
                aria-label="Facebook"
              >
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a
                href={spaInfo.social.instagram}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/20 text-gold-300 transition-all hover:border-gold-400/50 hover:bg-gold-500/10"
                aria-label="Instagram"
              >
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a
                href={spaInfo.social.zalo}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/20 text-gold-300 transition-all hover:border-gold-400/50 hover:bg-gold-500/10"
                aria-label="Zalo"
              >
                <MessageCircle size={16} strokeWidth={1.5} />
              </a>
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay="reveal-delay-1">
            <h4 className="mb-5 text-sm font-medium tracking-[0.2em] text-gold-300 uppercase">
              Liên Kết
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Trang Chủ', href: '#hero' },
                { label: 'Về Chúng Tôi', href: '#about' },
                { label: 'Dịch Vụ', href: '#treatments' },
                { label: 'Bảng Giá', href: '#pricing' },
                { label: 'Ưu Đãi', href: '#offers' },
                { label: 'Thư Viện', href: '#gallery' },
                { label: 'Đặt Lịch', href: '#booking' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm font-light text-ivory-100/50 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact */}
          <Reveal delay="reveal-delay-2">
            <h4 className="mb-5 text-sm font-medium tracking-[0.2em] text-gold-300 uppercase">
              Liên Hệ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.5} className="mt-0.5 flex-shrink-0 text-gold-400" />
                <span className="text-sm font-light text-ivory-100/50">{spaInfo.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} strokeWidth={1.5} className="mt-0.5 flex-shrink-0 text-gold-400" />
                <a href={`tel:${spaInfo.phoneRaw}`} className="text-sm font-light text-ivory-100/50 transition-colors hover:text-gold-300">
                  {spaInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Navigation size={16} strokeWidth={1.5} className="mt-0.5 flex-shrink-0 text-gold-400" />
                <a href={spaInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-light text-ivory-100/50 transition-colors hover:text-gold-300">
                  Xem bản đồ Google Maps
                </a>
              </li>
            </ul>
          </Reveal>

          {/* Hours */}
          <Reveal delay="reveal-delay-3">
            <h4 className="mb-5 text-sm font-medium tracking-[0.2em] text-gold-300 uppercase">
              Giờ Mở Cửa
            </h4>
            <ul className="space-y-4">
              {spaInfo.hours.map((item) => (
                <li key={item.day} className="flex items-start gap-3">
                  <Clock size={16} strokeWidth={1.5} className="mt-0.5 flex-shrink-0 text-gold-400" />
                  <div>
                    <p className="text-sm font-light text-ivory-100/70">{item.day}</p>
                    <p className="text-xs font-light text-ivory-100/40">{item.time}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={() => scrollTo('#booking')}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 px-5 py-2 text-xs font-medium text-gold-300 transition-all hover:border-gold-400/60 hover:bg-gold-500/10"
            >
              Đặt Lịch Ngay
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </Reveal>
        </div>

        {/* Gold divider */}
        <div className="h-px gold-line-full opacity-30" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs font-light text-ivory-100/40">
            © {new Date().getFullYear()} {spaInfo.nameFull}. Bản quyền đã được bảo hộ.
          </p>
          <p className="flex items-center gap-1.5 text-xs font-light text-ivory-100/40">
            Made with <Heart size={12} fill="currentColor" className="text-gold-400" /> vì sức khỏe &amp; thư giãn
          </p>
        </div>
      </div>
    </footer>
  );
}
