import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type GalleryItem = {
  src: string;
  alt: string;
};

// Tekil galeri havuzu (tekrar yok — satırlara burada bölüştürülüyor)
const pool: GalleryItem[] = [
  {
    src: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1784648504/yazilipasta5_xtggkh.jpg',
    alt: 'Özel yazılı romantik pasta',
  },
  {
    src: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1786711188/araba-pastasi_tzllfz.avif',
    alt: 'Araba temalı özel tasarım pasta',
  },
  {
    src: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1784648543/liva-inci-cicek-dugun-pastasi-7-45c6_tj53w0.webp',
    alt: 'İnci detaylı çiçekli düğün pastası',
  },
  {
    src: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1786711189/ormanmeyveli_aqxcar.webp',
    alt: 'Orman meyveli özel pasta',
  },
  {
    src: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1784649046/pasta_i8h4xd.jpg',
    alt: 'Özel tasarım kutlama pastası',
  },
  {
    src: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1784648504/yazilipasta3_ca75tg.webp',
    alt: 'Sevgiliye özel yazılı pasta',
  },
  {
    src: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1786711190/orman-meyveli-pudra-sekerli-pasta_ulk57d.jpg',
    alt: 'Orman meyveli pudra şekerli pasta',
  },
  {
    src: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1786711190/noel-pastasi_qufv8p.jpg',
    alt: 'Özel tasarım Noel pastası',
  },
  {
    src: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1784648511/yazilipasta1_cj6adi.jpg',
    alt: 'Romantik özel tasarım pasta',
  },
  {
    src: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1786711190/paastelpasta_kbbugm.jpg',
    alt: 'Pastel renkli özel tasarım pasta',
  },
  {
    src: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1786711191/pemberuyacake_rsrmqi.jpg',
    alt: 'Pembe özel tasarım pasta',
  },
  {
    src: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1784648506/yazilipasta2_k7e7y5.jpg',
    alt: 'Sevgiliye özel pasta',
  },
  {
    src: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1786711190/hemsempatikhemyakisikli_s0bnbn.jpg',
    alt: 'Hem Sempatik Hem Yakışıklı Sevgilim pastası',
  },
];

// Görselleri iki satıra bölüştür
const half = Math.ceil(pool.length / 2);
const rowTopPool = pool.slice(0, half);
const rowBottomPool = pool.slice(half);

// Sonsuz akış için her satırı kendi içinde ikiye katla
const trackTop = [...rowTopPool, ...rowTopPool];
const trackBottom = [...rowBottomPool, ...rowBottomPool];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [pausedTop, setPausedTop] = useState(false);
  const [pausedBottom, setPausedBottom] = useState(false);

  useEffect(() => {
    if (lightbox === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft') {
        setLightbox((i) => (i === null ? null : (i - 1 + pool.length) % pool.length));
      }
      if (e.key === 'ArrowRight') {
        setLightbox((i) => (i === null ? null : (i + 1) % pool.length));
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  const openTop = (i: number) => setLightbox(i % rowTopPool.length);
  const openBottom = (i: number) => setLightbox(half + (i % rowBottomPool.length));

  return (
    <section id="galeri" className="overflow-hidden bg-rosewater-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-rosewater-500">Galeri</span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-cocoa-800 sm:text-4xl lg:text-5xl">
            Tasarımlarımızdan Kareler
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm font-light leading-relaxed text-cocoa-700/70 sm:text-base">
            Her pasta özel bir hikâyenin parçası. Tasarımlarımızı keşfedin,
            ilhamınızı bulun ve sizin hikâyenize özel pastayı birlikte tasarlayalım.
          </p>
        </div>
      </div>

      {/* ÜST SATIR — sağa akar */}
      <div
        className="relative mt-10 overflow-hidden sm:mt-14"
        onMouseEnter={() => setPausedTop(true)}
        onMouseLeave={() => setPausedTop(false)}
        onTouchStart={() => setPausedTop(true)}
        onTouchEnd={() => setPausedTop(false)}
      >
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-rosewater-50 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-rosewater-50 to-transparent sm:w-32" />

        <div
          className="gallery-marquee flex w-max"
          style={{ animationPlayState: pausedTop ? 'paused' : 'running' }}
        >
          {trackTop.map((item, i) => (
            <button
              key={`top-${item.src}-${i}`}
              type="button"
              onClick={() => openTop(i)}
              className="group relative mx-1.5 flex-shrink-0 overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-rosewater-400 sm:mx-2.5 sm:rounded-2xl"
              aria-label={`${item.alt} görselini büyüt`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                draggable={false}
                className="h-[150px] w-[130px] select-none object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[220px] sm:w-[190px] lg:h-[280px] lg:w-[240px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-cocoa-900/0 transition-colors duration-300 group-hover:bg-cocoa-900/25" />
            </button>
          ))}
        </div>
      </div>

      {/* ALT SATIR — sola akar */}
      <div
        className="relative mt-3 overflow-hidden sm:mt-5"
        onMouseEnter={() => setPausedBottom(true)}
        onMouseLeave={() => setPausedBottom(false)}
        onTouchStart={() => setPausedBottom(true)}
        onTouchEnd={() => setPausedBottom(false)}
      >
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-rosewater-50 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-rosewater-50 to-transparent sm:w-32" />

        <div
          className="gallery-marquee flex w-max"
          style={{
            animationPlayState: pausedBottom ? 'paused' : 'running',
            animationDirection: 'reverse',
          }}
        >
          {trackBottom.map((item, i) => (
            <button
              key={`bottom-${item.src}-${i}`}
              type="button"
              onClick={() => openBottom(i)}
              className="group relative mx-1.5 flex-shrink-0 overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-rosewater-400 sm:mx-2.5 sm:rounded-2xl"
              aria-label={`${item.alt} görselini büyüt`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                draggable={false}
                className="h-[150px] w-[130px] select-none object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[220px] sm:w-[190px] lg:h-[280px] lg:w-[240px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-cocoa-900/0 transition-colors duration-300 group-hover:bg-cocoa-900/25" />
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-cocoa-900/90 p-5 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 z-10 text-white/80 transition-colors hover:text-white"
            onClick={() => setLightbox(null)}
            aria-label="Galeriyi kapat"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            type="button"
            className="absolute left-3 z-10 text-white/80 transition-colors hover:text-white sm:left-5"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? null : (i - 1 + pool.length) % pool.length));
            }}
            aria-label="Önceki görsel"
          >
            <ChevronLeft className="h-10 w-10 sm:h-12 sm:w-12" />
          </button>

          <img
            src={pool[lightbox].src}
            alt={pool[lightbox].alt}
            className="max-h-[85vh] max-w-[85vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className="absolute right-3 z-10 text-white/80 transition-colors hover:text-white sm:right-5"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? null : (i + 1) % pool.length));
            }}
            aria-label="Sonraki görsel"
          >
            <ChevronRight className="h-10 w-10 sm:h-12 sm:w-12" />
          </button>
        </div>
      )}
    </section>
  );
}
