import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MasavTech | Yazılım, Web Panel & Mobil Uygulama Çözümleri',
    short_name: 'MasavTech',
    description:
      'Kurumsal web yönetim panelleri, iOS & Android mobil uygulamalar ve SaaS yazılım çözümleri.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2c98f6',
    icons: [
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

