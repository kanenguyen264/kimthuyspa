import { Reveal } from './Reveal';
import { treatments } from '@/data/spaContent';

export function Treatments() {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="treatments" className="relative bg-ivory-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold-400" />
            <span className="text-sm font-light tracking-[0.3em] text-gold-600 uppercase">
              Dịch Vụ Dưỡng Sinh
            </span>
            <span className="h-px w-12 bg-gold-400" />
          </div>
          <h2 className="font-serif text-4xl font-light leading-tight text-mocha-800 sm:text-5xl">
            Liệu Trình <span className="italic text-gradient-gold">Đặc Trưng</span>
          </h2>
          <p className="mt-4 text-base font-light text-mocha-700/70">
            Mỗi liệu trình được thiết kế riêng cho bạn — kết hợp kỹ thuật y học cổ truyền,
            thảo dược thiên nhiên, và sự chăm sóc tận tâm từ đội ngũ kỹ thuật viên của chúng tôi.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, i) => {
            const Icon = treatment.icon;
            return (
              <Reveal
                key={treatment.id}
                delay={`reveal-delay-${Math.min(i + 1, 5)}` as 'reveal-delay-1' | 'reveal-delay-2' | 'reveal-delay-3' | 'reveal-delay-4' | 'reveal-delay-5'}
                className="group"
              >
                <article className="relative h-full overflow-hidden rounded-[1.5rem] bg-ivory-50 shadow-lg shadow-mocha-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-mocha-900/15">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={treatment.image}
                      alt={treatment.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mocha-900/40 to-transparent" />
                    {/* Icon badge */}
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-ivory-50/90 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:bg-gold-500">
                      <Icon size={20} strokeWidth={1.5} className="text-gold-600 transition-colors duration-300 group-hover:text-ivory-50" />
                    </div>
                    {/* Duration */}
                    <div className="absolute bottom-4 right-4 rounded-full bg-ivory-50/90 px-3 py-1 text-xs font-light text-mocha-700 backdrop-blur-sm">
                      {treatment.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-7">
                    <h3 className="font-serif text-2xl font-medium text-mocha-800">
                      {treatment.name}
                    </h3>
                    <p className="mt-1 font-serif text-sm italic text-gold-600">
                      {treatment.vietnamese}
                    </p>
                    <p className="mt-4 text-sm font-light leading-relaxed text-mocha-700/75">
                      {treatment.description}
                    </p>
                    <button
                      onClick={scrollToBooking}
                      className="group/btn mt-6 flex w-fit items-center gap-2 text-sm font-medium text-gold-600 transition-colors hover:text-gold-700"
                    >
                      Đặt lịch
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gold-300 transition-all group-hover/btn:bg-gold-500 group-hover/btn:border-gold-500">
                        <span className="transition-transform group-hover/btn:translate-x-0.5">→</span>
                      </span>
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
