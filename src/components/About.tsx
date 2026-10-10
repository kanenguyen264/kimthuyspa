import { Reveal } from './Reveal';
import { brandImage, brandImageSecondary } from '@/data/spaContent';
import { Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ivory-50 py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-blush-100/40 blur-3xl" />
      <div className="absolute -left-20 bottom-20 h-64 w-64 rounded-full bg-gold-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Images */}
          <Reveal className="relative">
            <div className="relative">
              <img
                src={brandImage}
                alt="Khách hàng được gội đầu dưỡng sinh và massage tại Kim Thủy Spa"
                className="w-full max-w-md rounded-[2rem] object-cover shadow-2xl shadow-mocha-900/10"
                loading="lazy"
              />
              <div className="absolute -bottom-10 -right-4 hidden w-48 overflow-hidden rounded-[1.5rem] shadow-xl ring-4 ring-ivory-50 sm:block lg:-right-10 lg:w-56">
                <img
                  src={brandImageSecondary}
                  alt="Chăm sóc da mặt và massage thư giãn tại spa"
                  className="h-40 w-full object-cover lg:h-48"
                  loading="lazy"
                />
              </div>
              {/* Gold accent badge */}
              <div className="absolute -left-6 top-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 shadow-xl lg:h-28 lg:w-28">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-ivory-50/40">
                  <Sparkles size={20} className="text-ivory-50" strokeWidth={1.2} />
                  <span className="mt-1 font-serif text-xs italic text-ivory-50">TL.</span>
                  <span className="font-serif text-lg font-medium text-ivory-50">2014</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay="reveal-delay-1" className="flex flex-col">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-gold-400" />
              <span className="text-sm font-light tracking-[0.3em] text-gold-600 uppercase">
              Về Kim Thủy
            </span>
            </div>

            <h2 className="font-serif text-4xl font-light leading-tight text-mocha-800 sm:text-5xl">
              Nơi Y Học Cổ Truyền Gặp Gỡ
              <br />
              <span className="italic text-gradient-gold">Sự Chăm Sóc Tận Tâm</span>
            </h2>

            <p className="mt-6 text-base font-light leading-relaxed text-mocha-700/80">
              Tại Kim Thủy Spa, chúng tôi kết hợp tinh hoa y học cổ truyền với nghệ thuật chăm sóc sức khỏe
              hiện đại. Với hơn một thập kỷ tận tâm phục vụ, chúng tôi đã trở thành điểm đến tin cậy
              cho hàng ngàn khách hàng trên hành trình tìm kiếm sức khỏe và sự thư giãn.
            </p>

            <p className="mt-4 text-base font-light leading-relaxed text-mocha-700/80">
              Triết lý của chúng tôi rất đơn giản: sức khỏe là nền tảng của vẻ đẹp. Mỗi liệu trình
              đều bắt đầu bằng việc tư vấn kỹ lưỡng, đảm bảo trải nghiệm được thiết kế riêng cho
              thể trạng và nhu cầu của bạn. Từ khi bước vào, thế giới bên ngoài dần lùi xa —
              chỉ còn sự an yên, chăm sóc, và phục hồi trọn vẹn.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-12 gap-y-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                <span className="text-sm font-light text-mocha-700">Dưỡng sinh chuẩn cổ truyền</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                <span className="text-sm font-light text-mocha-700">Thảo dược thiên nhiên</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                <span className="text-sm font-light text-mocha-700">Không gian riêng tư</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                <span className="text-sm font-light text-mocha-700">Kỹ thuật viên tận tâm</span>
              </div>
            </div>

            <button
              onClick={() => document.querySelector('#treatments')?.scrollIntoView({ behavior: 'smooth' })}
              className="group mt-10 flex w-fit items-center gap-2 font-serif text-lg italic text-gold-600 transition-colors hover:text-gold-700"
            >
              Khám phá các dịch vụ của chúng tôi
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
