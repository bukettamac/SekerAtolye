import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Cake, OrderInput } from '@/types';
import {
  CheckCircle2, Loader2, AlertCircle,
  Phone, MessageCircle, Instagram, MapPin, Clock,
} from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const occasions = [
  'Doğum Günü', 'Düğün', 'Nişan / Söz', 'Yıldönümü',
  'Bebek Şöleni', 'Kurum Etkinliği', 'Diğer',
];

const PHONE = '902125550100';
const PHONE_DISPLAY = '0212 555 01 00';
const WHATSAPP = '905551234567';
const INSTAGRAM = 'https://instagram.com/sekeratolye';
const TIKTOK = 'https://tiktok.com/@sekeratolye';
const MAPS_URL = 'https://maps.google.com/?q=Teşvikiye+Cad+No42+Nişantaşı+İstanbul';
const MAPS_EMBED = 'https://maps.google.com/maps?q=Teşvikiye%20Cad%20No42%20Ni%C5%9Fanta%C5%9F%C4%B1%20%C4%B0stanbul&output=embed';

export default function Contact({ preselectedCake }: { preselectedCake: Cake | null }) {
  const [form, setForm] = useState<OrderInput>({
    full_name: '', email: '', phone: '',
    event_date: '', occasion: '', servings: '', budget: '', message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedCake) {
      setForm((f) => ({
        ...f,
        occasion: preselectedCake.name,
        message: `"${preselectedCake.name}" tasarımına benzer bir pasta istiyorum.`,
      }));
    }
  }, [preselectedCake]);

  const update = (key: keyof OrderInput, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name || !form.phone) {
      setStatus('error');
      setErrorMsg('Lütfen adınız ve telefon numaranız girin.');
      return;
    }
    setStatus('submitting');
    setErrorMsg('');
    const payload: OrderInput = {
      ...form,
      event_date: form.event_date || null,
      occasion: form.occasion || null,
      servings: form.servings || null,
      budget: form.budget || null,
      message: form.message || null,
    };
    const { error } = await supabase.from('orders').insert(payload);
    if (error) {
      setStatus('error');
      setErrorMsg('Talebiniz gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.');
      return;
    }
    setStatus('success');
    setForm({ full_name: '', email: '', phone: '', event_date: '', occasion: '', servings: '', budget: '', message: '' });
  };

  return (
    <section id="iletisim" className="bg-rosewater-100/50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-rosewater-500">
            İletişim
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-cocoa-800 sm:text-4xl lg:text-5xl">
            Bize Ulaşın
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm font-light leading-relaxed text-cocoa-700/70 sm:text-base">
            Kısa formu doldurun, en geç 24 saat içinde dönelim — ya da aşağıdaki
            hızlı kanallardan anında bize ulaşın.
          </p>
        </div>

        {/* Two-column: form (left) + info & map (right) */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Form */}
          <div className="rounded-2xl bg-white p-6 shadow-lg shadow-cocoa-900/6 sm:p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h4 className="font-display text-2xl font-medium text-cocoa-800">
                  Talebiniz Alındı
                </h4>
                <p className="mt-2 max-w-xs text-sm font-light leading-relaxed text-cocoa-700/70">
                  Teşekkürler! En geç 24 saat içinde sizinle iletişime geçeceğiz.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-full border border-rosewater-300 px-5 py-2.5 text-sm font-medium text-rosewater-600 transition-colors hover:bg-rosewater-100"
                >
                  Yeni Talep
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl font-medium text-cocoa-800">
                  Sipariş Talep Formu
                </h3>
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Adınız Soyadınız *">
                      <input type="text" value={form.full_name} onChange={(e) => update('full_name', e.target.value)} className={inputCls} placeholder="Adınız" />
                    </Field>
                    <Field label="Telefon *">
                      <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} className={inputCls} placeholder="05XX XXX XX XX" />
                    </Field>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Etkinlik Tarihi">
                      <input type="date" value={form.event_date ?? ''} onChange={(e) => update('event_date', e.target.value)} className={inputCls} />
                    </Field>
                    <Field label="Etkinlik Türü">
                      <select value={form.occasion ?? ''} onChange={(e) => update('occasion', e.target.value)} className={inputCls}>
                        <option value="">Seçiniz</option>
                        {occasions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </Field>
                  </div>
                  <Field label="Notunuz">
                    <textarea value={form.message ?? ''} onChange={(e) => update('message', e.target.value)} rows={3} className={`${inputCls} resize-none`} placeholder="Pasta hakkında düşünceleriniz, renk/tema..." />
                  </Field>
                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      {errorMsg}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-rosewater-600 px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-rosewater-700 hover:shadow-lg hover:shadow-rosewater-300/40 disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <><Loader2 className="h-4 w-4 animate-spin" />Gönderiliyor...</>
                    ) : (
                      'Sipariş Talebini Gönder'
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Info + Map stacked neatly */}
          <div className="flex flex-col gap-5">
            {/* Address & hours in one clean card */}
            <div className="rounded-2xl bg-white p-6 shadow-lg shadow-cocoa-900/6">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-rosewater-100 text-rosewater-600 transition-colors group-hover:bg-rosewater-600 group-hover:text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-display text-lg font-medium text-cocoa-800">Atölye Adresi</h4>
                  <p className="text-sm font-light leading-relaxed text-cocoa-700/65">
                    Teşvikiye Cad. No:42<br />Nişantaşı, İstanbul
                  </p>
                  <span className="mt-1 inline-block text-xs font-medium text-rosewater-600">
                    Yol tarifini al →
                  </span>
                </div>
              </a>
              <div className="mt-5 flex items-start gap-4 border-t border-rosewater-100 pt-5">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-rosewater-100 text-rosewater-600">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <h4 className="font-display text-lg font-medium text-cocoa-800">Çalışma Saatleri</h4>
                  <dl className="mt-2 space-y-1 text-sm font-light text-cocoa-700/65">
                    <div className="flex justify-between"><dt>Pazartesi – Cuma</dt><dd>10:00 – 19:00</dd></div>
                    <div className="flex justify-between"><dt>Cumartesi</dt><dd>10:00 – 18:00</dd></div>
                    <div className="flex justify-between"><dt>Pazar</dt><dd>Kapalı</dd></div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl shadow-lg shadow-cocoa-900/6">
              <iframe
                title="Atölye konumu"
                src={MAPS_EMBED}
                className="h-[220px] w-full border-0 sm:h-[260px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Hızlı iletişim — form/harita bloğunun altında, yuvarlak ikon + hover efektli */}
        <div className="mx-auto mt-14 max-w-2xl border-t border-rosewater-200/60 pt-10 sm:mt-16">
          <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-rosewater-500">
            Hızlı İletişim
          </p>
          <div className="mt-6 flex flex-wrap items-start justify-center gap-6 sm:gap-10">
            <QuickButton href={`https://wa.me/${WHATSAPP}`} icon={<MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />} label="WhatsApp" className="bg-[#25D366] text-white" />
            <QuickButton href={`tel:+${PHONE}`} icon={<Phone className="h-5 w-5 sm:h-6 sm:w-6" />} label={PHONE_DISPLAY} className="bg-rosewater-600 text-white" />
            <QuickButton href={INSTAGRAM} icon={<Instagram className="h-5 w-5 sm:h-6 sm:w-6" />} label="Instagram" className="bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white" />
            <QuickButton href={TIKTOK} icon={<TikTokIcon className="h-5 w-5 sm:h-6 sm:w-6" />} label="TikTok" className="bg-cocoa-900 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  'w-full rounded-xl border border-rosewater-200 bg-rosewater-50/40 px-4 py-3 text-sm text-cocoa-800 placeholder:text-cocoa-700/35 transition-colors focus:border-rosewater-400 focus:outline-none focus:ring-2 focus:ring-rosewater-200';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-cocoa-700/70">{label}</span>
      {children}
    </label>
  );
}

function QuickButton({ href, icon, label, className }: { href: string; icon: React.ReactNode; label: string; className: string }) {
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex w-20 flex-col items-center gap-2.5 sm:w-24"
    >
      <span
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-md shadow-cocoa-900/10 ring-4 ring-white transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-cocoa-900/20 sm:h-16 sm:w-16 ${className}`}
      >
        {icon}
      </span>
      <span className="text-center text-[11px] font-medium leading-tight text-cocoa-700 transition-colors duration-300 group-hover:text-rosewater-600 sm:text-xs">
        {label}
      </span>
    </a>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.73 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}
