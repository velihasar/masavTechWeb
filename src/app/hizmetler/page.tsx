import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | MasavTech — Web Panel & Mobil Uygulama Geliştirme',
  description:
    'Türkiye genelinde ve Adana merkezli olarak kurumsal web yönetim panelleri, iOS & Android mobil uygulama geliştirme, eğitim otomasyonları ve sistem entegrasyonu hizmetleri sunuyoruz.',
  keywords: [
    'özel yazılım geliştirme',
    'mobil uygulama yapan firmalar',
    'web yönetim paneli geliştirme',
    'Adana yazılım firması',
    'Adana mobil uygulama geliştirme',
    'kurumsal otomasyon yazılımı',
  ],
  alternates: {
    canonical: '/hizmetler',
  },
};

export default function HizmetlerPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <Services isStandalonePage />
      <Footer />
    </main>
  );
}
