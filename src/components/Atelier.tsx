import { Award, HeartHandshake, Leaf, Sparkles } from 'lucide-react';

const features = [
  {
    icon: HeartHandshake,
    title: 'Tamamen Özel',
    desc: 'Her pasta, sizin hikâyenizden ilham alınarak sıfırdan tasarlanır.',
  },
  {
    icon: Leaf,
    title: 'Doğal Malzemeler',
    desc: 'Tereyağı, taze meyve ve çikolata — katkı yok, lezzet bol.',
  },
  {
    icon: Award,
    title: 'Sanatçı İşçiliği',
    desc: 'Şeker çiçeklerinden el yapımı süslemelere kadar ince işçilik.',
  },
  {
    icon: Sparkles,
    title: 'Taze Teslimat',
    desc: 'Pastanız etkinlikten saatler önce hazırlanır, kapınıza gelir.',
  },
];

export default function Atelier() {
  return (
    <section id="atolye" className="relative bg-rosewater-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-cocoa-900/15">
              <img
                src="https://res.cloudinary.com/bzrwij0r/image/upload/v1786711190/tum_bvkmkw.webp"
                alt="Pastacı el yapımı süsleme yaparken"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            {/* Floating accent image */}
            <div className="absolute -bottom-8 -right-4 hidden w-48 overflow-hidden rounded-2xl border-4 border-rosewater-50 shadow-xl sm:block lg:-right-8 lg:w-56">
              <img
                src="https://res.cloudinary.com/bzrwij0r/image/upload/v1786711188/pasta-hazirlanirken_owogfc.jpg"
                alt="Çilek süslemeli pasta detayı"
                className="aspect-square w-full object-cover"
              />
            </div>
            {/* Decorative badge */}
            <div className="absolute -top-6 -left-4 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-rosewater-600 text-white shadow-lg lg:-left-8 lg:h-28 lg:w-28">
              <span className="font-display text-3xl font-semibold lg:text-4xl">7</span>
              <span className="text-[9px] uppercase tracking-wider">Yıllık Tecrübe</span>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.3em] text-rosewater-500">
              Atölye Hakkında
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-cocoa-800 sm:text-4xl lg:text-5xl">
              Pastanın ötesinde,
              <br />
              <span className="italic text-rosewater-600">edebi bir sanat</span>
            </h2>
            <p className="mt-5 text-sm font-light leading-relaxed text-cocoa-700/80 sm:text-base">
              Şeker Atölye, her pastayı bir tuval gibi ele alır. Geleneksel
              Fransız pastacılığını Anadolu'nun zengin lezzet mirasıyla
              buluşturarak, sadece tatlı değil; bir deneyim, bir anı, bir
              hediye sunarız. Her tasarım, sizinle yaptığımız sohbetten
              doğar ve tamamen el işçiliğiyle hayat bulur.
            </p>

            <div className="mt-8 grid gap-5 sm:gap-6 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rosewater-100 text-rosewater-600">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-cocoa-800 sm:text-xl">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-xs font-light leading-relaxed text-cocoa-700/70 sm:text-sm">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
