import { Reveal } from './Reveal';
import { galleryImages } from '@/data/spaContent';

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-ivory-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold-400" />
            <span className="text-sm font-light tracking-[0.3em] text-gold-600 uppercase">
              Không Gian Spa
            </span>
            <span className="h-px w-12 bg-gold-400" />
          </div>
          <h2 className="font-serif text-4xl font-light leading-tight text-mocha-800 sm:text-5xl">
            Thư Viện <span className="italic text-gradient-gold">Hình Ảnh</span>
          </h2>
          <p className="mt-4 text-base font-light text-mocha-700/70">
            Một hành trình thị giác qua không gian thư giãn của Kim Thủy Spa —
            nơi mỗi góc nhỏ đều được chăm chút để mang đến sự an yên tuyệt đối.
          </p>
        </Reveal>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {galleryImages.map((image, i) => (
            <Reveal
              key={i}
              delay={`reveal-delay-${Math.min((i % 4) + 1, 4)}` as 'reveal-delay-1' | 'reveal-delay-2' | 'reveal-delay-3' | 'reveal-delay-4'}
              className={
                image.span === 'tall'
                  ? 'row-span-2'
                  : image.span === 'wide'
                    ? 'col-span-2'
                    : ''
              }
            >
              <div className="group relative h-full overflow-hidden rounded-[1.25rem] shadow-lg shadow-mocha-900/5">
                <div
                  className={`overflow-hidden ${
                    image.span === 'tall'
                      ? 'h-full min-h-[300px]'
                      : image.span === 'wide'
                        ? 'h-full min-h-[180px]'
                        : 'h-full min-h-[180px]'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-mocha-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 text-xs font-light text-ivory-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {image.alt}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
