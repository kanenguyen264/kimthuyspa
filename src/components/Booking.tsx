import { useState, type FormEvent } from 'react';
import { Reveal } from './Reveal';
import { treatments, bookingImage } from '@/data/spaContent';
import { supabase } from '@/lib/supabase';
import { Calendar, User, Phone, Sparkles, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type FormState = {
  name: string;
  phone: string;
  service: string;
  date: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialForm: FormState = {
  name: '',
  phone: '',
  service: '',
  date: '',
  notes: '',
};

export function Booking() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ tên';
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Tên quá ngắn';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9+\s\-()]{8,15}$/.test(form.phone.trim())) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }

    if (!form.service) {
      newErrors.service = 'Vui lòng chọn dịch vụ';
    }

    if (!form.date) {
      newErrors.date = 'Vui lòng chọn ngày hẹn';
    } else {
      const selected = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.date = 'Không thể chọn ngày trong quá khứ';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('bookings').insert({
        name: form.name.trim(),
        phone: form.phone.trim(),
        service: form.service,
        appointment_date: form.date,
        notes: form.notes.trim() || null,
      });

      if (error) throw error;

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Đã xảy ra lỗi. Vui lòng thử lại hoặc gọi điện trực tiếp.'
      );
    }
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="relative overflow-hidden bg-mocha-900 py-24 lg:py-32">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bookingImage}
          alt="Không gian đặt lịch chăm sóc sức khỏe tại Kim Thủy Spa"
          className="h-full w-full object-cover object-center opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mocha-900 via-mocha-900/95 to-mocha-900" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — info */}
          <Reveal className="flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-gold-400" />
              <span className="text-sm font-light tracking-[0.3em] text-gold-300 uppercase">
                Đặt Lịch Hẹn
              </span>
            </div>
            <h2 className="font-serif text-4xl font-light leading-tight text-ivory-50 sm:text-5xl">
              Đặt Lịch
              <br />
              <span className="italic text-gradient-gold">Dưỡng Sinh Ngay Hôm Nay</span>
            </h2>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory-100/70">
              Đặt lịch hẹn ngay hôm nay để bắt đầu hành trình chăm sóc sức khỏe của bạn.
              Đội ngũ chuyên gia của Kim Thủy Spa sẽ liên hệ xác nhận trong thời gian sớm nhất.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/30">
                  <Calendar size={18} strokeWidth={1.5} className="text-gold-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ivory-50">Đặt lịch linh hoạt</p>
                  <p className="text-xs font-light text-ivory-100/50">Chọn thời gian phù hợp với bạn</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/30">
                  <Sparkles size={18} strokeWidth={1.5} className="text-gold-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ivory-50">Tư vấn riêng biệt</p>
                  <p className="text-xs font-light text-ivory-100/50">Tư vấn cá nhân hóa trước mỗi liệu trình</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/30">
                  <CheckCircle2 size={18} strokeWidth={1.5} className="text-gold-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ivory-50">Xác nhận nhanh chóng</p>
                  <p className="text-xs font-light text-ivory-100/50">Xác nhận lịch hẹn trong thời gian ngắn</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay="reveal-delay-1">
            <div className="rounded-[1.5rem] bg-ivory-50 p-8 shadow-2xl lg:p-10">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500">
                    <CheckCircle2 size={40} strokeWidth={1.2} className="text-ivory-50" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-mocha-800">
                    Cảm ơn bạn!
                  </h3>
                  <p className="mt-3 max-w-xs text-sm font-light text-mocha-700/70">
                    Yêu cầu đặt lịch của bạn đã được ghi nhận. Chúng tôi sẽ liên hệ với bạn
                    trong thời gian sớm nhất để xác nhận.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 rounded-full border border-gold-400 px-6 py-2.5 text-sm font-medium text-gold-700 transition-all hover:bg-gold-500 hover:text-ivory-50 hover:border-gold-500"
                  >
                    Đặt lịch khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="font-serif text-2xl font-medium text-mocha-800">
                    Thông Tin Đặt Lịch
                  </h3>

                  {/* Name */}
                  <div>
                    <label htmlFor="booking-name" className="mb-2 block text-xs font-medium tracking-wide text-mocha-700">
                      Họ và tên <span className="text-gold-600">*</span>
                    </label>
                    <div className="relative">
                      <User size={16} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-mocha-700/40" />
                      <input
                        id="booking-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Nguyễn Thị Hoa"
                        className={`w-full rounded-xl border bg-ivory-100/50 py-3 pl-11 pr-4 text-sm text-mocha-800 placeholder:text-mocha-700/30 transition-all focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-gold-200 focus:border-gold-400 focus:ring-gold-100'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="booking-phone" className="mb-2 block text-xs font-medium tracking-wide text-mocha-700">
                      Số điện thoại <span className="text-gold-600">*</span>
                    </label>
                    <div className="relative">
                      <Phone size={16} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-mocha-700/40" />
                      <input
                        id="booking-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="0901 234 567"
                        className={`w-full rounded-xl border bg-ivory-100/50 py-3 pl-11 pr-4 text-sm text-mocha-800 placeholder:text-mocha-700/30 transition-all focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-gold-200 focus:border-gold-400 focus:ring-gold-100'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="booking-service" className="mb-2 block text-xs font-medium tracking-wide text-mocha-700">
                      Dịch vụ <span className="text-gold-600">*</span>
                    </label>
                    <select
                      id="booking-service"
                      value={form.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-100/50 py-3 px-4 text-sm text-mocha-800 transition-all focus:outline-none focus:ring-2 ${
                        errors.service
                          ? 'border-red-300 focus:ring-red-200'
                          : 'border-gold-200 focus:border-gold-400 focus:ring-gold-100'
                      } ${form.service ? '' : 'text-mocha-700/40'}`}
                    >
                      <option value="">— Chọn dịch vụ —</option>
                      {treatments.map((t) => (
                        <option key={t.id} value={t.name} className="text-mocha-800">
                          {t.name} ({t.vietnamese})
                        </option>
                      ))}
                      <option value="Consultation" className="text-mocha-800">
                        Tư vấn chung
                      </option>
                    </select>
                    {errors.service && <p className="mt-1.5 text-xs text-red-500">{errors.service}</p>}
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="booking-date" className="mb-2 block text-xs font-medium tracking-wide text-mocha-700">
                      Ngày hẹn <span className="text-gold-600">*</span>
                    </label>
                    <div className="relative">
                      <Calendar size={16} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-mocha-700/40 pointer-events-none" />
                      <input
                        id="booking-date"
                        type="date"
                        min={todayStr}
                        value={form.date}
                        onChange={(e) => handleChange('date', e.target.value)}
                        className={`w-full rounded-xl border bg-ivory-100/50 py-3 pl-11 pr-4 text-sm text-mocha-800 transition-all focus:outline-none focus:ring-2 ${
                          errors.date
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-gold-200 focus:border-gold-400 focus:ring-gold-100'
                        }`}
                      />
                    </div>
                    {errors.date && <p className="mt-1.5 text-xs text-red-500">{errors.date}</p>}
                  </div>

                  {/* Notes */}
                  <div>
                    <label htmlFor="booking-notes" className="mb-2 block text-xs font-medium tracking-wide text-mocha-700">
                      Ghi chú <span className="text-mocha-700/40">(tùy chọn)</span>
                    </label>
                    <textarea
                      id="booking-notes"
                      value={form.notes}
                      onChange={(e) => handleChange('notes', e.target.value)}
                      placeholder="Yêu cầu đặc biệt, thời gian ưu tiên..."
                      rows={3}
                      className="w-full rounded-xl border border-gold-200 bg-ivory-100/50 px-4 py-3 text-sm text-mocha-800 placeholder:text-mocha-700/30 transition-all focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-100"
                    />
                  </div>

                  {/* Error banner */}
                  {status === 'error' && (
                    <div className="flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-600">
                      <AlertCircle size={18} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gold-400 to-gold-600 py-4 text-sm font-medium tracking-wide text-ivory-50 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 size={18} className="animate-spin" />
                        Đang gửi...
                      </span>
                    ) : (
                      'Gửi Yêu Cầu Đặt Lịch'
                    )}
                  </button>

                  <p className="text-center text-xs font-light text-mocha-700/50">
                    Chúng tôi sẽ liên hệ xác nhận lịch hẹn của bạn trong thời gian sớm nhất.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
