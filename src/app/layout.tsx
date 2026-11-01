import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#2c98f6',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://masavtech.com'),
  title: 'MasavTech | Yazılım & Teknoloji — Web Panel ve Mobil Uygulama Çözümleri',
  description:
    'MasavTech; Türkiye genelinde ve Adana merkezli olarak kurumsal web yönetim panelleri, iOS & Android mobil uygulamalar, Kursum eğitim yönetim sistemi, Sınavım ve Cüzdanım uygulamalarını geliştiren yazılım şirketidir.',
  keywords: [
    'MasavTech',
    'yazılım şirketi',
    'mobil uygulama geliştirme',
    'web yönetim paneli',
    'kurumsal yazılım çözümleri',
    'SaaS yazılım geliştirme',
    'Adana yazılım şirketi',
    'Adana mobil uygulama geliştirme',
    'Adana web yazılım',
    'Çukurova yazılım şirketi',
    'Kursum',
    'kurs yönetim sistemi',
    'öğrenci ve dershane yönetim programı',
    'Sınavım',
    'YKS KPSS hazırlık uygulaması',
    'Cüzdanım',
    'altın döviz bütçe takip uygulaması',
  ],
  authors: [{ name: 'MasavTech', url: 'https://masavtech.com' }],
  creator: 'MasavTech',
  publisher: 'MasavTech',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'MasavTech | Kurumsal Yazılım, Web Panel & Mobil Uygulama Çözümleri',
    description:
      'Kurumsal web yönetim panelleri, iOS & Android mobil uygulamalar ve ölçeklenebilir SaaS yazılım çözümleri.',
    url: 'https://masavtech.com',
    siteName: 'MasavTech',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'MasavTech - Software & App Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MasavTech | Yazılım, Web Panel & Mobil Uygulama Çözümleri',
    description:
      'Kurumsal web yönetim panelleri, iOS & Android mobil uygulamalar ve modern SaaS ürünleri.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://masavtech.com/#organization',
        name: 'MasavTech',
        url: 'https://masavtech.com',
        logo: 'https://masavtech.com/logo.png',
        email: 'info@masavtech.com',
        description:
          'Kurumsal web yönetim panelleri, iOS & Android mobil uygulamalar ve bulut tabanlı SaaS yazılım çözümleri geliştiren teknoloji şirketi.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Çukurova',
          addressRegion: 'Adana',
          addressCountry: 'TR',
        },
        areaServed: [
          {
            '@type': 'Country',
            name: 'Türkiye',
          },
          {
            '@type': 'City',
            name: 'Adana',
          },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Kursum - Eğitim & Kurum Yönetim Platformu',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Eğitim kurumları, kurs merkezleri, spor/sanat akademileri ve özel okullar için web yönetim paneli ve mobil uygulama ekosistemi.',
        publisher: {
          '@id': 'https://masavtech.com/#organization',
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Sınavım',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Android, iOS',
        installUrl: 'https://play.google.com/store/apps/details?id=com.masavtech.sinavim',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'TRY',
        },
        description:
          'YKS, LGS, KPSS, EKPSS, DGS, ALES, YDS ve diğer tüm sınavlarla uyumlu konu takibi, deneme takibi, geri sayım ve arkadaş rekabet asistanı.',
        publisher: {
          '@id': 'https://masavtech.com/#organization',
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Cüzdanım',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Android, iOS',
        installUrl: 'https://play.google.com/store/apps/details?id=com.anonymous.cuzdanim',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'TRY',
        },
        description:
          'Altın, Gümüş, Dolar, Euro birikim takibi, gelir-gider dengesi ve anlık net varlık yönetimi sağlayan kişisel finans uygulaması.',
        publisher: {
          '@id': 'https://masavtech.com/#organization',
        },
      },
    ],
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen font-sans bg-white text-slate-900 selection:bg-[#2c98f6] selection:text-white">
        {children}
      </body>
    </html>
  );
}
