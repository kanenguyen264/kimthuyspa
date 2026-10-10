import { Reveal } from './Reveal';
import { features } from '@/data/spaContent';

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-mocha-900 py-24 lg:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full border border-gold-400/30" />
        <div className="absolute right-10 top-20 h-72 w-72 rounded-full border border-gold-400/20" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full border border-gold-400/15" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold-400" />
            <span className="text-sm font-light tracking-[0.3em] text-gold-300 uppercase">
              Tại Sao Chọn Chúng Tôi
            </span>
            <span className="h-px w-12 bg-gold-400" />
          </div>
          <h2 className="font-serif text-4xl font-light leading-tight text-ivory-50 sm:text-5xl">
            Điểm Khác Biệt Của <span className="italic text-gradient-gold">Kim Thủy</span>
          </h2>
          <p className="mt-4 text-base font-light text-ivory-100/60">
            Không chỉ là một liệu trình — mà là một trải nghiệm chăm sóc trọn vẹn,
            nơi sự chuyên nghiệp và tận tâm tạo nên sự khác biệt.
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal
                key={feature.title}
                delay={`reveal-delay-${Math.min(i + 1, 5)}` as 'reveal-delay-1' | 'reveal-delay-2' | 'reveal-delay-3' | 'reveal-delay-4' | 'reveal-delay-5'}
              >
                <div className="group relative h-full rounded-[1.5rem] border border-gold-400/15 bg-mocha-800/40 p-8 text-center transition-all duration-500 hover:border-gold-400/40 hover:bg-mocha-800/60">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-gold-500/0 to-gold-500/0 opacity-0 transition-opacity duration-500 group-hover:from-gold-500/5 group-hover:to-gold-500/10 group-hover:opacity-100" />

                  <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold-400/30 transition-all duration-500 group-hover:border-gold-400/60 group-hover:scale-110">
                    <Icon size={26} strokeWidth={1.2} className="text-gold-300 transition-colors duration-500 group-hover:text-gold-200" />
                  </div>
                  <h3 className="relative font-serif text-xl font-medium text-ivory-50">
                    {feature.title}
                  </h3>
                  <p className="relative mt-3 text-sm font-light leading-relaxed text-ivory-100/55">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
