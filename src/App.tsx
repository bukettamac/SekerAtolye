import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Collection from '@/components/Collection';
import Atelier from '@/components/Atelier';
import Gallery from '@/components/Gallery';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import type { Cake } from '@/types';

export default function App() {
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSelectCake = (cake: Cake) => {
    setSelectedCake(cake);
    document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-rosewater-50">
      <Navbar />
      <main>
        <Collection onSelectCake={handleSelectCake} />
        <Atelier />
        <Gallery />
        <Process />
        <Testimonials />
        <Contact preselectedCake={selectedCake} />
      </main>
      <Footer />

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-rosewater-600 text-white shadow-lg shadow-rosewater-400/40 transition-all duration-300 hover:bg-rosewater-700 ${
          showTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
        aria-label="Yukarı çık"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
