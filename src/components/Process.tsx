import { PenTool, PhoneCall, ChefHat, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: PenTool,
    n: '01',
    title: 'Tasarım Sohbeti',
    desc: 'Etkinliğinizi, renk paletinizi ve hikâyenizi dinleriz. Pastanızın ruhunu birlikte çizeriz.',
  },
  {
    icon: PhoneCall,
    n: '02',
    title: 'Onay & Planlama',
    desc: 'Tasarım çizimi ve fiyatı onayınıza sunarız. Malzemeleri sipariş eder, takvimi planlarız.',
  },
  {
    icon: ChefHat,
    n: '03',
    title: 'El İşçiliği',
    desc: 'Pastanız etkinlik gününden bir gün önce taze malzemelerle, tamamen el yapımı hazırlanır.',
  },
  {
    icon: PackageCheck,
    n: '04',
    title: 'Teslimat',
    desc: 'Pastanız özenle paketlenir, etkinlik yerinde kurulum desteğiyle birlikte teslim edilir.',
  },
];

export default function Process() {
  return (
    <section id="surec" className="relative overflow-hidden bg-cocoa-800 py-20 text-rosewater-50 sm:py-24 lg:py-32">
      {/* Decorative blurs */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-rosewater-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-rosewater-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-rosewater-300">
            Süreç
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-rosewater-50 sm:text-4xl lg:text-5xl">
            Pastanız Doğarken
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm font-light leading-relaxed text-rosewater-100/70 sm:text-base">
            İlk sohbetten teslimata kadar dört adımda, pastanızın yanında oluruz.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-rosewater-100/10 bg-white/[0.03] p-7 transition-all duration-500 hover:border-rosewater-300/30 hover:bg-white/[0.06]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rosewater-600/20 text-rosewater-300">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-3xl font-light text-rosewater-100/30">
                  {s.n}
                </span>
              </div>
              <h3 className="font-display text-xl font-medium text-rosewater-50 sm:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 text-xs font-light leading-relaxed text-rosewater-100/65 sm:text-sm">
                {s.desc}
              </p>

              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-px w-8 translate-x-full bg-rosewater-100/15 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
