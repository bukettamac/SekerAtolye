import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Elif & Mert',
    event: 'Düğün · İstanbul',
    text: 'Düğün pastamız bir masaldı. Misafirlerimiz pasta kesimini saatlerce konuştu. Şeker Atölye ekibi, hayalimizdeki tasarımı eksiksiz hayata geçirdi.',
    rating: 5,
  },
  {
    name: 'Ayşe K.',
    event: 'Doğum Günü · Etiler',
    text: 'Kızımın 7. yaş günü için kelebek temalı pasta sipariş ettim. Pastayı gördüğümüzde gözlerimiz doldu. Hem görkemli hem de lezzeti muhteşemdi.',
    rating: 5,
  },
  {
    name: 'Cem Y.',
    event: 'Kurum Etkinliği · Levent',
    text: 'Şirket açılışımız için 150 kişilik özel tasarım pasta hazırladılar. Teslimat saat gibi geldi, kurulum kusursuzdu. Profesyonellik tam not.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="yorumlar" className="bg-rosewater-100/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-rosewater-500">
            Yorumlar
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-cocoa-800 sm:text-4xl lg:text-5xl">
            Misafirlerimiz Diyor Ki
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:gap-7 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-cocoa-900/8 sm:p-8"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-rosewater-200" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-rosewater-400 text-rosewater-400" />
                ))}
              </div>
              <blockquote className="relative text-xs font-light italic leading-relaxed text-cocoa-700/80 sm:text-sm">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-rosewater-100 pt-4">
                <span className="block font-display text-lg font-medium text-cocoa-800">
                  {t.name}
                </span>
                <span className="text-xs uppercase tracking-wider text-rosewater-500">
                  {t.event}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
