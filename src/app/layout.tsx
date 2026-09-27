import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Masavtech | Yeni Nesil Yazilim, Yapay Zeka & Bulut Teknolojileri',
  description: 'Masavtech, kurumsal yazilim gelistirme, yapay zeka entegrasyonlari, yuksek performansli bulut mimarileri ve modern SaaS urunleri sunan yeni nesil teknoloji sirketidir.',
  keywords: ['Masavtech', 'Yazilim', 'Yapay Zeka', 'Cloud', 'SaaS', 'Next.js', 'Kursum'],
  openGraph: {
    title: 'Masavtech | Teknoloji & Dijital Donusum Cozumleri',
    description: 'Yenilikci dijital urunler, yapay zeka otomasyonlari ve olceklenebilir bulut mimarileri.',
    url: 'https://masavtech.com',
    siteName: 'Masavtech',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen font-sans bg-[#070b14] text-slate-100 selection:bg-[#2c98f6] selection:text-white">
        {children}
      </body>
    </html>
  );
}