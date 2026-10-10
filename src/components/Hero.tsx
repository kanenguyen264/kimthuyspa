import { ChevronDown, Sparkles } from 'lucide-react';
import { heroImage, heroImageSecondary } from '@/data/spaContent';

export function Hero() {
  const scrollToTreatments = () => {
    document.querySelector('#treatments')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Đặt lịch gội đầu dưỡng sinh và massage trị liệu tại Kim Thủy Spa"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mocha-900/70 via-mocha-900/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-mocha-900/50 via-transparent to-mocha-900/20" />
      </div>

      {/* Decorative floating image — desktop */}
      <div className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 xl:block">
        <div className="animate-float">
          <img
            src={heroImageSecondary}
            alt="Gội đầu dưỡng sinh thư giãn tại Kim Thủy Spa"
            className="h-[420px] w-[320px] rounded-[2rem] object-cover shadow-2xl ring-1 ring-gold-300/30"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="animate-fade-down mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-gold-300" />
            <span className="flex items-center gap-2 text-sm font-light tracking-[0.3em] text-gold-300 uppercase">
              <Sparkles size={14} strokeWidth={1.5} />
              Spa Thuần Khỏe — Dưỡng Sinh Thiên Nhiên
            </span>
          </div>

          <h1 className="animate-fade-up font-serif text-5xl font-light leading-[1.1] text-ivory-50 text-shadow-luxury sm:text-6xl lg:text-7xl">
            Thư Giãn Hôm Nay,
            <br />
            <span className="italic text-gradient-gold">Khỏe Đẹp Mỗi Ngày</span>
          </h1>

          <p className="animate-fade-up reveal-delay-1 mt-6 max-w-xl font-serif text-xl font-light italic leading-relaxed text-ivory-100/90 text-shadow-soft">
            Kim Thủy Spa — nơi giao thoa giữa y học cổ truyền và nghệ thuật chăm sóc sức khỏe.
            Dưỡng sinh, thư giãn, và phục hồi năng lượng với thảo dược thiên nhiên.
          </p>

          <div className="animate-fade-up reveal-delay-2 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              onClick={scrollToBooking}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-9 py-4 text-sm font-medium tracking-wide text-ivory-50 shadow-xl shadow-gold-900/20 transition-all duration-300 hover:shadow-gold-500/40 hover:scale-105"
            >
              <span className="relative z-10">Đặt Lịch Ngay</span>
            </button>
            <button
              onClick={scrollToTreatments}
              className="group flex items-center gap-2 rounded-full border border-ivory-100/30 px-9 py-4 text-sm font-medium tracking-wide text-ivory-50 backdrop-blur-sm transition-all duration-300 hover:border-gold-300 hover:bg-ivory-50/10"
            >
              Khám Phá Dịch Vụ
              <ChevronDown size={16} className="rotate-[-90deg] transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="animate-fade-in reveal-delay-3 mt-16 flex items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="font-serif text-4xl font-light text-gold-300">10+</span>
              <span className="text-xs font-light leading-tight text-ivory-100/70">
                Năm kinh nghiệm
                <br />
                Chăm sóc tận tâm
              </span>
            </div>
            <span className="h-12 w-px bg-ivory-100/20" />
            <div className="flex items-center gap-3">
              <span className="font-serif text-4xl font-light text-gold-300">1000+</span>
              <span className="text-xs font-light leading-tight text-ivory-100/70">
                Khách hàng hài lòng
                <br />
                Quay lại thường xuyên
              </span>
            </div>
            <span className="hidden h-12 w-px bg-ivory-100/20 sm:block" />
            <div className="hidden items-center gap-3 sm:flex">
              <span className="font-serif text-4xl font-light text-gold-300">5★</span>
              <span className="text-xs font-light leading-tight text-ivory-100/70">
                Đánh giá
                <br />
                Hài lòng tuyệt đối
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToTreatments}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-float"
        aria-label="Cuộn xuống"
      >
        <ChevronDown size={28} strokeWidth={1.2} className="text-ivory-100/60" />
      </button>
    </section>
  );
}
