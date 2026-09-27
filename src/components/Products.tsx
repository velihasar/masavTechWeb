'use client';

import React from 'react';
import { ExternalLink, GraduationCap, Wallet, Award, ArrowUpRight, CheckCircle, Layers } from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: 'kursum',
      name: 'Kursum',
      category: 'Eğitim & Kurum Yönetimi',
      badge: 'Canlıda & Aktif',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      description: 'Eğitim kurumları, kurs merkezleri ve özel okullar için öğrenci, öğretmen, ders programı, sınav ve finans yönetimini tek çatı altında toplayan yeni nesil SaaS platformu.',
      features: [
        'Akıllı Ders & Yoklama Takip Sistemi',
        'Online Sınav & Net Analiz Raporları',
        'Öğrenci & Veli Bilgilendirme Portalı',
        'Entegre Muhasebe & Taksit Yönetimi'
      ],
      link: 'https://kursum.masavtech.com',
      icon: GraduationCap,
      gradient: 'from-blue-600/20 via-[#2c98f6]/10 to-transparent',
      borderColor: 'hover:border-[#2c98f6]/50'
    },
    {
      id: 'sinavim',
      name: 'Sınavım',
      category: 'Online Değerlendirme & Test Otomasyonu',
      badge: 'SaaS Platformu',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      description: 'Yapay zeka destekli soru havuzu yönetimi, otomatik optik form okuma ve detaylı kazanım analizi sağlayan dijital sınav altyapısı.',
      features: [
        'Otomatik Deneme Sınavı Oluşturucu',
        'Kazanım Bazlı Bireysel Gelişim Grafikleri',
        'Soru Bankası & Çoklu Çözüm Modülleri',
        'Yapay Zeka Destekli Zorluk Derecelendirmesi'
      ],
      link: '#',
      icon: Award,
      gradient: 'from-purple-600/20 via-pink-600/10 to-transparent',
      borderColor: 'hover:border-purple-500/50'
    },
    {
      id: 'cuzdanim',
      name: 'Cüzdanım',
      category: 'Fintech & Bütçe Yönetimi',
      badge: 'Finansal Asistan',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      description: 'Bireysel ve kurumsal gelir-gider takibi, akıllı bütçeleme, harcama analizleri ve nakit akışını kontrol altında tutan modern finans uygulaması.',
      features: [
        'Gider Kategorizasyonu & Harcama Alarmları',
        'Tek Ekranda Nakit Akış Görselleştirmesi',
        'Çoklu Para Birimi & Varlık Takibi',
        'Banka Düzeyi Güvenli Veri Saklama'
      ],
      link: '#',
      icon: Wallet,
      gradient: 'from-cyan-600/20 via-teal-600/10 to-transparent',
      borderColor: 'hover:border-cyan-500/50'
    }
  ];

  return (
    <section id="urunler" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2c98f6]/10 border border-[#2c98f6]/30 text-[#2c98f6] text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Ürün Ekosistemimiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Masavtech Tarafından Geliştirilen{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c98f6] to-cyan-400">
              SaaS Ürünleri
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Sektörlerin ihtiyaçlarına özel olarak geliştirdiğimiz, yüksek performanslı ve kullanıcı dostu dijital ürünlerimizi keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div 
                key={product.id}
                className={`group relative rounded-2xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#2c98f6]/10 ${product.borderColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-[#2c98f6] group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      {product.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-sky-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2.5">
                    {product.features.map((feat, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle className="w-4 h-4 text-[#2c98f6] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/80">
                  {product.link.startsWith('http') ? (
                    <a 
                      href={product.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#2c98f6] hover:bg-blue-600 shadow-md shadow-[#2c98f6]/30 transition-all"
                    >
                      <span>Uygulamaya Git</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <a 
                      href="#iletisim"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white transition-all"
                    >
                      <span>Bilgi & Demo Talebi</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}