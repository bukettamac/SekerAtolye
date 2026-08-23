import { useState } from 'react';
import { Menu, X, Cake } from 'lucide-react';

type NavLink = { label: string; href: string };

const links: NavLink[] = [
  { label: 'Koleksiyon', href: '#koleksiyon' },
  { label: 'Atölye', href: '#atolye' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Süreç', href: '#surec' },
  { label: 'Yorumlar', href: '#yorumlar' },
  { label: 'İletişim', href: '#iletisim' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-rosewater-50/95 backdrop-blur-md shadow-[0_4px_30px_rgba(107,74,44,0.08)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">
        <a href="#koleksiyon" className="flex items-center gap-2.5 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-rosewater-300 text-rosewater-700">
            <Cake className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl font-semibold tracking-wide text-cocoa-800">
              Şeker Atölye
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-rosewater-500">
              Özel Pasta Sanatı
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-light tracking-wide text-cocoa-700 transition-colors duration-300 hover:text-rosewater-600 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-rosewater-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#iletisim"
          className="hidden rounded-full bg-rosewater-600 px-6 py-2.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-rosewater-700 hover:shadow-lg hover:shadow-rosewater-300/50 lg:inline-block"
        >
          İletişim
        </a>

        <button
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menüyü aç/kapat"
        >
          {open ? (
            <X className="h-6 w-6 text-cocoa-800" />
          ) : (
            <Menu className="h-6 w-6 text-cocoa-800" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 bg-rosewater-50/98 backdrop-blur-md px-5 pb-6 pt-2 sm:px-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-cocoa-700 font-light border-b border-rosewater-100"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#iletisim"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-rosewater-600 px-6 py-3 text-center text-white"
            >
              İletişim
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
