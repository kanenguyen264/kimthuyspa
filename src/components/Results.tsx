import { Reveal } from './Reveal';
import { resultsImages } from '@/data/spaContent';
import { Star } from 'lucide-react';

export function Results() {
  return (
    <section className="relative bg-ivory-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold-400" />
            <span className="text-sm font-light tracking-[0.3em] text-gold-600 uppercase">
              Trải Nghiệm Thực Tế
            </span>
            <span className="h-px w-12 bg-gold-400" />
          </div>
          <h2 className="font-serif text-4xl font-light leading-tight text-mocha-800 sm:text-5xl">
            Hình Ảnh <span className="italic text-gradient-gold">Trước &amp; Sau</span>
          </h2>
          <p className="mt-4 text-base font-light text-mocha-700/70">
            Hình ảnh thực tế từ khách hàng của Kim Thủy Spa — kết quả từ sự chăm sóc tận tâm
            và các liệu trình dưỡng sinh chuyên sâu.
          </p>
        </Reveal>

        {/* Image grid */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {resultsImages.map((src, i) => (
            <Reveal
              key={i}
              delay={`reveal-delay-${Math.min(i + 1, 4)}` as 'reveal-delay-1' | 'reveal-delay-2' | 'reveal-delay-3' | 'reveal-delay-4'}
              className="group relative overflow-hidden rounded-[1.5rem] shadow-lg shadow-mocha-900/5"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={src}
                  alt={`Kết quả chăm sóc ${i + 1} tại Kim Thủy Spa`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-mocha-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-center gap-1 text-gold-300">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={12} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-2 font-serif text-sm italic text-ivory-50">
                  {['Da căng bóng', 'Sạch sâu nhẹ nhõm', 'Tươi trẻ rạng rỡ', 'Thư giãn toàn thân'][i]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay="reveal-delay-2" className="mt-10 text-center">
          <p className="text-xs font-light italic text-mocha-700/50">
            Hình ảnh thực tế từ khách hàng. Kết quả có thể khác nhau tùy theo từng cá nhân.
            <br />
            <span className="text-mocha-700/40">Ảnh chụp thực tế. Kết quả tùy thuộc vào từng người.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
