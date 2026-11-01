import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ürünlerimiz | MasavTech — Kursum, Sınavım ve Cüzdanım',
  description:
    'MasavTech tarafından geliştirilen Kursum Eğitim & Kurum Yönetim Platformu, tüm sınavlarla uyumlu Sınavım mobil uygulaması ve Cüzdanım kişisel varlık yönetimi uygulamalarını inceleyin.',
  keywords: [
    'Kursum',
    'kurs yönetim programı',
    'dershane yönetim sistemi',
    'öğrenci yoklama ve aidat takibi',
    'Sınavım',
    'YKS LGS KPSS EKPSS DGS ALES hazırlık uygulaması',
    'Cüzdanım',
    'altın gümüş döviz takip uygulaması',
    'Adana eğitim yazılımı',
  ],
  alternates: {
    canonical: '/urunler',
  },
};

export default function UrunlerPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <Products />
      <Footer />
    </main>
  );
}
