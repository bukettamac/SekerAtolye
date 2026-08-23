import { Instagram, Cake, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const WHATSAPP = '905551234567';
const INSTAGRAM = 'https://instagram.com/sekeratolye';
const TIKTOK = 'https://tiktok.com/@sekeratolye';

export default function Footer() {
  return (
    <footer className="bg-cocoa-900 text-rosewater-100/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-rosewater-300/40 text-rosewater-300">
                <Cake className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl font-semibold text-rosewater-50">
                Şeker Atölye
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-rosewater-100/55">
              2018'den bu yana İstanbul'da, her paste bir hikâye anlatan el yapımı
              özel pasta atölyesi. Doğum günlerinden düğünlere, her kutlama için
              benzersiz tasarımlar.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-rosewater-100/20 text-rosewater-200 transition-colors hover:border-rosewater-300/50 hover:bg-rosewater-600/20"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-rosewater-100/20 text-rosewater-200 transition-colors hover:border-rosewater-300/50 hover:bg-rosewater-600/20"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={TIKTOK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-rosewater-100/20 text-rosewater-200 transition-colors hover:border-rosewater-300/50 hover:bg-rosewater-600/20"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-medium text-rosewater-50">
              İletişim
            </h4>
            <ul className="mt-5 space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-rosewater-300" />
                <a href="tel:+902125550100" className="transition-colors hover:text-rosewater-50">
                  0212 555 01 00
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-rosewater-300" />
                <a href="mailto:merhaba@sekeratolye.com" className="transition-colors hover:text-rosewater-50">
                  merhaba@sekeratolye.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-rosewater-300" />
                <span>Teşvikiye Cad. No:42<br />Nişantaşı, İstanbul</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-medium text-rosewater-50">
              Keşfet
            </h4>
            <ul className="mt-5 space-y-3 text-sm font-light">
              {[
                { label: 'Atölye', href: '#atolye' },
                { label: 'Koleksiyon', href: '#koleksiyon' },
                { label: 'Galeri', href: '#galeri' },
                { label: 'Süreç', href: '#surec' },
                { label: 'İletişim', href: '#iletisim' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="transition-colors hover:text-rosewater-50"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-rosewater-100/10 pt-6 text-center text-xs font-light text-rosewater-100/40">
          © 2026 Şeker Atölye. Tüm hakları saklıdır. El yapımı ile sevgiyle.
        </div>
      </div>
    </footer>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.73 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}
