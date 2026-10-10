import { Reveal } from './Reveal';
import { offers } from '@/data/spaContent';
import { Check, Crown } from 'lucide-react';

export function Offers() {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="offers" className="relative overflow-hidden bg-ivory-100 py-24 lg:py-32">
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold-400" />
            <span className="text-sm font-light tracking-[0.3em] text-gold-600 uppercase">
              Ưu Đãi Đặc Biệt
            </span>
            <span className="h-px w-12 bg-gold-400" />
          </div>
          <h2 className="font-serif text-4xl font-light leading-tight text-mocha-800 sm:text-5xl">
            Ưu Đãi <span className="italic text-gradient-gold">Đặc Biệt</span>
          </h2>
          <p className="mt-4 text-base font-light text-mocha-700/70">
            Những gói ưu đãi tuyển chọn mang đến trải nghiệm chăm sóc sức khỏe trọn vẹn với giá trị tiết kiệm.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {offers.map((offer, i) => (
            <Reveal
              key={i}
              delay={`reveal-delay-${Math.min(i + 1, 3)}` as 'reveal-delay-1' | 'reveal-delay-2' | 'reveal-delay-3'}
              className={offer.featured ? 'lg:-mt-6 lg:mb-6' : ''}
            >
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] p-8 transition-all duration-500 hover:shadow-2xl ${
                  offer.featured
                    ? 'bg-gradient-to-br from-mocha-800 to-mocha-900 text-ivory-50 shadow-xl shadow-mocha-900/20 ring-1 ring-gold-400/30'
                    : 'bg-ivory-50 text-mocha-800 shadow-lg shadow-mocha-900/5 hover:shadow-xl'
                }`}
              >
                {/* Badge */}
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide ${
                      offer.featured
                        ? 'bg-gold-500/20 text-gold-200'
                        : 'bg-gold-100 text-gold-700'
                    }`}
                  >
                    {offer.featured && <Crown size={12} strokeWidth={1.5} />}
                    {offer.badge}
                  </span>
                </div>

                <h3 className={`font-serif text-2xl font-medium ${offer.featured ? 'text-ivory-50' : 'text-mocha-800'}`}>
                  {offer.title}
                </h3>
                <p className={`mt-3 text-sm font-light leading-relaxed ${offer.featured ? 'text-ivory-100/70' : 'text-mocha-700/70'}`}>
                  {offer.description}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-3">
                  <span className={`font-serif text-3xl font-medium ${offer.featured ? 'text-gold-300' : 'text-gold-600'}`}>
                    {offer.price}
                  </span>
                  {offer.originalPrice && (
                    <span className={`text-sm font-light line-through ${offer.featured ? 'text-ivory-100/40' : 'text-mocha-700/40'}`}>
                      {offer.originalPrice}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                          offer.featured ? 'bg-gold-500/20' : 'bg-gold-100'
                        }`}
                      >
                        <Check size={12} strokeWidth={2} className={offer.featured ? 'text-gold-300' : 'text-gold-600'} />
                      </span>
                      <span className={offer.featured ? 'font-light text-ivory-100/80' : 'font-light text-mocha-700/75'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToBooking}
                  className={`mt-8 w-full rounded-full py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                    offer.featured
                      ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-ivory-50 hover:shadow-lg hover:shadow-gold-500/30'
                      : 'border border-gold-400 text-gold-700 hover:bg-gold-500 hover:text-ivory-50 hover:border-gold-500'
                  }`}
                >
                  Đặt Lịch Ngay
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay="reveal-delay-2" className="mt-8 text-center">
          <p className="text-xs font-light italic text-mocha-700/50">
            Giá và ưu đãi chỉ mang tính chất minh họa — vui lòng cập nhật thông tin thực tế.
            <br />
            <span className="text-mocha-700/40">Giá có thể thay đổi tùy thời điểm. Vui lòng liên hệ để được báo giá chính xác nhất.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
