import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Cake, CakeCategory } from '@/types';

const fallbackCakes: Cake[] = [
  {
    id: '1',
    category_id: null,
    name: 'Kocam da Kocam',
    description: 'Hayatındaki en değerli hazineye, eşine duyduğun sevgiyi tatlı ve eğlenceli bir şekilde anlatan özel tasarım pasta. Birlikte gülümseyeceğiniz, ilişkinizi anlatan unutulmaz bir sürpriz.',
    price: 1850,
    image_url: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1786711189/kocamdakocam_b55qxx.jpg',
    servings: '15-20 kişi',
    featured: true,
    sort_order: 1,
    created_at: ''
  },

  {
    id: '2',
    category_id: null,
    name: 'Sana Olan Aşkım Gibi Gül Bahçesi',
    description: 'Sevdiğine olan aşkını zarif güllerle anlatan romantik kalp tasarımı. Özel günlerde “seni ne kadar seviyorum” demenin en tatlı ve etkileyici yollarından biri.',
    price: 6500,
    image_url: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1786711191/gul-bahcesi-pasta_jxdcbt.jpg',
    servings: '100-150 kişi',
    featured: true,
    sort_order: 1,
    created_at: ''
  },

  {
    id: '3',
    category_id: null,
    name: 'Birlikte Bir Ömür',
    description: 'Zarif beyaz tasarımı ve romantik çiçek detaylarıyla hayatınızı birleştirdiğiniz o özel günü simgeleyen etkileyici düğün pastası. Birlikte başlayacağınız yeni hayatın ilk tatlı hatırası.',
    price: 6500,
    image_url: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1786711191/dugun-pastasi_fjpltf.jpg',
    servings: '100-150 kişi',
    featured: true,
    sort_order: 1,
    created_at: ''
  },

  {
    id: '4',
    category_id: null,
    name: 'Bizim Hikâyemiz',
    description: 'Birlikte yaşadığınız en güzel anları tek bir pastada buluşturan fotoğraflı özel tasarım. Her diliminde ilişkinizden bir anıyı yeniden hatırlayacağınız, tamamen size özel bir sürpriz.',
    price: 2200,
    image_url: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1786711190/fotografli-pasta_kmrbxc.jpg',
    servings: '15-20 kişi',
    featured: true,
    sort_order: 1,
    created_at: ''
  },

  {
    id: '5',
    category_id: null,
    name: 'Benim Küçük Gökkuşağım',
    description: 'Çocukların renkli dünyasını ve neşesini yansıtan sevimli gökkuşağı tasarımı. Doğum gününü onun için daha da özel hale getirecek, rengarenk ve mutluluk dolu bir pasta.',
    price: 1850,
    image_url: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1786711190/bebek-pastasi_i7ah5b.jpg',
    servings: '15-20 kişi',
    featured: true,
    sort_order: 1,
    created_at: ''
  },

  {
    id: '6',
    category_id: null,
    name: 'Senden Önce, Senden Sonra',
    description: 'Hayatına girmeden önceki ve seninle birlikte değişen dünyayı anlatan anlamlı bir tasarım. Bir tarafı karanlık, diğer tarafı rengarenk; çünkü bazı insanlar hayatımıza girer ve her şeyi güzelleştirir.',
    price: 6500,
    image_url: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1786711189/senden-once-senden-sonra-pastasi-2796_brguk7.jpg',
    servings: '100-150 kişi',
    featured: true,
    sort_order: 1,
    created_at: ''
  },

  {
    id: '7',
    category_id: null,
    name: 'Aşkımız Gibi Rengarenk',
    description: 'Her çiçeği farklı bir duyguyu, her rengi birlikte yaşadığınız güzel anları temsil eden romantik bir çiçek bahçesi. Sevdiğine “seninle hayat daha güzel” demenin rengarenk hali.',
    price: 650,
    image_url: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1786711190/cicek-bahcesi-pasta_utpbn7.jpg',
    servings: '12 adet',
    featured: true,
    sort_order: 1,
    created_at: ''
  },

  {
    id: '8',
    category_id: null,
    name: 'Hem Sempatik Hem Yakışıklı Sevgilim',
    description: 'Sevgilinin hem yakışıklılığını hem de seni gülümseten sempatik halini kutlayan eğlenceli ve romantik pasta. Klasik hediyelerden farklı, ilişkinize özel ve yüzünde kocaman bir gülümseme bırakacak bir sürpriz.',
    price: 2200,
    image_url: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1786711189/hemsempatikaslanimpastasi_isxqmu.jpg',
    servings: '15-20 kişi',
    featured: true,
    sort_order: 1,
    created_at: ''
  },

  {
    id: '9',
    category_id: null,
    name: 'Patronlara Özel',
    description: 'Başarıyı, emeği ve güçlü karakteri kutlamak için tasarlanmış özel bir pasta. İş hayatındaki önemli bir başarıyı, terfiyi veya patronunuza yapacağınız anlamlı bir sürprizi daha unutulmaz hale getirir.',
    price: 1850,
    image_url: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1784649349/Ekran_g%C3%B6r%C3%BCnt%C3%BCs%C3%BC_2026-07-21_185458_ea2qa1.png',
    servings: '15-20 kişi',
    featured: true,
    sort_order: 1,
    created_at: ''
  },

  {
    id: '10',
    category_id: null,
    name: 'Karımın Dilimi',
    description: 'Eşine olan sevgini ve hayatındaki özel yerini romantik bir dokunuşla anlatan, sadece ona ait hissettirecek özel tasarım pasta. Çünkü bazen kocaman bir aşkı anlatmak için tek bir dilim bile yeter.',
    price: 6500,
    image_url: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1784649042/pastaaaa_egei9p.jpg',
    servings: '100-150 kişi',
    featured: true,
    sort_order: 1,
    created_at: ''
  },

  {
    id: '11',
    category_id: null,
    name: 'Zarafetin Altın Hali',
    description: 'Altın sarısı detaylarıyla zarif, şık ve gösterişli bir tasarım. Hayatındaki özel kişiye verdiğin değeri sofistike bir sunumla anlatmak ve unutulmaz bir kutlama yapmak isteyenler için.',
    price: 650,
    image_url: 'https://res.cloudinary.com/bzrwij0r/image/upload/v1784648507/yazilipasta6_mslxtj.jpg',
    servings: '12 adet',
    featured: true,
    sort_order: 1,
    created_at: ''
  },
];

function formatPrice(p: number | null): string {
  if (p == null) return '';
  return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(p);
}

export default function Collection({ onSelectCake }: { onSelectCake: (cake: Cake) => void }) {
  const [categories, setCategories] = useState<CakeCategory[]>([]);
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [active, setActive] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const [{ data: catData }, { data: cakeData }] = await Promise.all([
        supabase.from('cake_categories').select('*').order('sort_order'),
        supabase.from('cakes').select('*').order('sort_order'),
      ]);
      if (catData && catData.length) setCategories(catData);
      if (cakeData && cakeData.length) setCakes(cakeData);
      else setCakes(fallbackCakes);
      setLoading(false);
    })();
  }, []);

  const filtered = active === 'all'
    ? cakes
    : cakes.filter((c) => c.category_id === categories.find((cat) => cat.slug === active)?.id);

  return (
    <section id="koleksiyon" className="bg-rosewater-100/50 pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-rosewater-500">
            Koleksiyon
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-cocoa-800 sm:text-4xl lg:text-5xl">
            İmza Pastalarımız
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm font-light leading-relaxed text-cocoa-700/70 sm:text-base">
            Her biri el yapımı, mevsimlik malzemelerle hazırlanır.
            İlginizi çeken bir tasarımı seçip kendi zevkinize göre uyarlayabiliriz.
          </p>
        </div>

        {/* Category filter */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActive('all')}
            className={`rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
              active === 'all'
                ? 'bg-rosewater-600 text-white shadow-md shadow-rosewater-300/50'
                : 'bg-white text-cocoa-700 hover:bg-rosewater-100'
            }`}
          >
            Tümü
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.slug)}
              className={`rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                active === cat.slug
                  ? 'bg-rosewater-600 text-white shadow-md shadow-rosewater-300/50'
                  : 'bg-white text-cocoa-700 hover:bg-rosewater-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-5 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="overflow-hidden rounded-2xl bg-white">
                  <div className="aspect-[4/3] shimmer-bg" />
                  <div className="space-y-3 p-5">
                    <div className="h-5 w-2/3 rounded shimmer-bg" />
                    <div className="h-4 w-full rounded shimmer-bg" />
                    <div className="h-4 w-1/2 rounded shimmer-bg" />
                  </div>
                </div>
              ))
            : filtered.map((cake) => (
                <article
                  key={cake.id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cocoa-900/12"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={cake.image_url}
                      alt={cake.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {cake.featured && (
                      <span className="absolute left-4 top-4 rounded-full bg-rosewater-600/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                        Öne Çıkan
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-medium text-cocoa-800 sm:text-xl">
                        {cake.name}
                      </h3>
                      {cake.price != null && (
                        <span className="whitespace-nowrap font-display text-xl font-semibold text-rosewater-600">
                          {formatPrice(cake.price)}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm font-light leading-relaxed text-cocoa-700/70">
                      {cake.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      {cake.servings && (
                        <span className="text-xs font-light text-cocoa-700/60">
                          {cake.servings}
                        </span>
                      )}
                      <button
                        onClick={() => onSelectCake(cake)}
                        className="text-xs font-medium uppercase tracking-wider text-rosewater-600 transition-colors hover:text-rosewater-700"
                      >
                        Hemen Sipariş Ver →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
        </div>
      </div>
    </section>
  );
}
