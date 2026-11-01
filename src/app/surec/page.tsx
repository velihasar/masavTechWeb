import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Process from '@/components/Process';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Nasıl Çalışırız? | MasavTech — Yazılım Geliştirme Süreci',
  description:
    'Analiz, UI/UX tasarım, çevik mühendislik, test ve mağaza yayını adımlarından oluşan uçtan uca şeffaf yazılım geliştirme sürecimiz.',
  alternates: {
    canonical: '/surec',
  },
};

export default function SurecPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <Process isStandalonePage />
      <Footer />
    </main>
  );
}
