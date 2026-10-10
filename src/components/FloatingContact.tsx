import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { spaInfo } from '@/data/spaContent';

export function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex flex-col gap-3 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      {/* Zalo button */}
      <a
        href={`https://zalo.me/${spaInfo.social.zalo}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-xl shadow-gold-500/30 transition-all duration-300 hover:scale-110 hover:shadow-gold-500/50 group"
        aria-label="Liên hệ qua Zalo"
      >
        <span className="font-serif text-lg font-bold text-ivory-50 group-hover:scale-110 transition-transform">Z</span>
      </a>

      {/* Phone button */}
      <a
        href={`tel:${spaInfo.phoneRaw}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-mocha-700 to-mocha-900 shadow-xl shadow-mocha-900/30 transition-all duration-300 hover:scale-110 hover:shadow-mocha-900/50"
        aria-label="Gọi điện"
      >
        <Phone size={22} strokeWidth={1.5} className="text-gold-300" />
      </a>
    </div>
  );
}
