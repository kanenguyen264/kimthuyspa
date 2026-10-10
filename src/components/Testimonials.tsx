import { Reveal } from './Reveal';
import { testimonials } from '@/data/spaContent';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-blush-50 py-24 lg:py-32">
      <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-blush-200/30 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-gold-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold-400" />
            <span className="text-sm font-light tracking-[0.3em] text-gold-600 uppercase">
            Cảm Nhận Khách Hàng
            </span>
            <span className="h-px w-12 bg-gold-400" />
          </div>
          <h2 className="font-serif text-4xl font-light leading-tight text-mocha-800 sm:text-5xl">
            Khách Hàng <span className="italic text-gradient-gold">Nói Gì</span>
          </h2>
          <p className="mt-4 text-base font-light text-mocha-700/70">
            Chia sẻ chân thành từ khách hàng đã trải nghiệm dịch vụ tại Kim Thủy Spa.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal
              key={i}
              delay={`reveal-delay-${Math.min(i + 1, 3)}` as 'reveal-delay-1' | 'reveal-delay-2' | 'reveal-delay-3'}
            >
              <figure className="relative h-full rounded-[1.5rem] bg-ivory-50 p-8 shadow-lg shadow-mocha-900/5 transition-all duration-500 hover:shadow-xl hover:shadow-mocha-900/10">
                <Quote size={36} strokeWidth={1} className="mb-4 text-gold-200" />

                <div className="mb-4 flex items-center gap-1 text-gold-400">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>

                <blockquote className="font-serif text-lg font-light italic leading-relaxed text-mocha-700/85">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-4 border-t border-gold-100 pt-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 font-serif text-lg font-medium text-ivory-50">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-mocha-800">{testimonial.name}</p>
                    <p className="text-xs font-light text-mocha-700/60">{testimonial.location}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay="reveal-delay-2" className="mt-8 text-center">
          <p className="text-xs font-light italic text-mocha-700/50">
            Đánh giá mẫu — vui lòng thay thế bằng đánh giá thực tế từ khách hàng của bạn.
            <br />
            <span className="text-mocha-700/40">Vui lòng cập nhật bằng đánh giá thật từ khách hàng của bạn.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
