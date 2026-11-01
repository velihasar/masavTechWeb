import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'İletişim | MasavTech — Proje & Demo Talebi',
  description:
    'Kurumsal web yönetim paneli, mobil uygulama projeleriniz veya Kursum eğitim yönetim sistemi demo talepleriniz için MasavTech ile iletişime geçin.',
  keywords: [
    'MasavTech iletişim',
    'yazılım proje talebi',
    'Kursum demo talebi',
    'Adana yazılım iletişim',
  ],
  alternates: {
    canonical: '/iletisim',
  },
};

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  );
}
