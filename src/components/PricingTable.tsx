import { Reveal } from './Reveal';
import { pricingItems, commitments, type PriceOption } from '@/data/pricingContent';
import {
  Heart,
  Leaf,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

const commitmentIcons = [Leaf, Sparkles, ShieldCheck, Heart];

function PriceRow({
  item,
  index,
}: {
  item: (typeof pricingItems)[number];
  index: number;
}) {
  const hasDuration = (opt: PriceOption) => opt.duration > 0;

  return (
    <div className="group flex items-start gap-3 border-b border-dashed border-forest-200/50 px-3 py-4 transition-colors duration-300 hover:bg-forest-50/50 sm:gap-4 sm:px-5 sm:py-5">
      {/* Index badge */}
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-forest-100 text-sm font-semibold text-forest-700 transition-colors duration-300 group-hover:bg-forest-600 group-hover:text-white sm:h-10 sm:w-10 sm:text-base">
        {index + 1}
      </div>

      {/* Name + description */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-sm font-semibold leading-snug text-forest-900 sm:text-base">
            {item.name}
          </h3>
          {item.badge && (
            <span className="inline-flex items-center rounded-full bg-forest-100 px-2 py-0.5 text-[10px] font-medium text-forest-600">
              {item.badge}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-0.5 text-xs text-muted-green sm:text-sm">{item.description}</p>
        )}
      </div>

      {/* Duration + price */}
      <div className="flex flex-shrink-0 flex-col items-end gap-0.5 text-right">
        {item.options.map((opt, i) => (
          <div key={i} className="flex items-center gap-2">
            {hasDuration(opt) && (
              <span className="text-xs font-light text-muted-green sm:text-sm">
                {opt.duration}'
              </span>
            )}
            <span className="whitespace-nowrap text-sm font-bold text-forest-700 sm:text-lg">
              {opt.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PricingTable() {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Split items into two columns for desktop
  const half = Math.ceil(pricingItems.length / 2);
  const col1 = pricingItems.slice(0, half);
  const col2 = pricingItems.slice(half);

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-b from-white via-cream-mint to-forest-50 py-20 lg:py-28"
      style={{ ['--section-bg' as string]: '#F7FAF0' }}
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <Reveal className="mb-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-forest-800 sm:text-4xl">
            BẢNG GIÁ DỊCH VỤ
          </h2>
        </Reveal>

        {/* Price list — 2 columns on desktop, 1 on mobile */}
        <Reveal delay="reveal-delay-1">
          <div className="grid gap-x-6 gap-y-0 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-forest-100 sm:p-6 lg:grid-cols-2 lg:gap-x-10">
            <div>
              {col1.map((item, i) => (
                <PriceRow key={item.id} item={item} index={i} />
              ))}
            </div>
            <div>
              {col2.map((item, i) => (
                <PriceRow key={item.id} item={item} index={i + half} />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Commitments */}
        <Reveal delay="reveal-delay-2" className="mt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c, i) => {
              const Icon = commitmentIcons[i] ?? Leaf;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center rounded-xl bg-white/70 p-5 text-center ring-1 ring-forest-100 transition-all duration-300 hover:shadow-md"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-forest-100">
                    <Icon size={22} strokeWidth={1.3} className="text-forest-600" />
                  </div>
                  <p className="text-sm font-semibold text-forest-800">{c.title}</p>
                  <p className="mt-0.5 text-xs font-light text-muted-green">{c.subtitle}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* CTA to booking */}
        <Reveal delay="reveal-delay-2" className="mt-10 text-center">
          <button
            onClick={scrollToBooking}
            className="inline-flex items-center gap-2 rounded-full bg-forest-600 px-8 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-forest-600/20 transition-all duration-300 hover:bg-forest-700 hover:shadow-xl hover:shadow-forest-600/30"
          >
            Đặt Lịch Ngay
          </button>
        </Reveal>
      </div>
    </section>
  );
}
