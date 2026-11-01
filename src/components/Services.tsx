'use client';

import React from 'react';
import {
  Cpu,
  Globe,
  Cloud,
  ShieldCheck,
  Database,
  Smartphone,
  CheckCircle2,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ServicesProps {
  isStandalonePage?: boolean;
}

export default function Services({ isStandalonePage = false }: ServicesProps) {
  const services = [
    {
      icon: Globe,
      title: 'Özel Web Panel & SaaS Geliştirme',
      desc: 'Kurumunuzun tüm operasyonlarını, şubelerini, kullanıcılarını ve iş süreçlerini tek ekrandan yönetebileceğiniz yüksek hızlı web yönetim panelleri.',
      highlights: ['Çoklu Şube Yönetimi', 'Yetki & Rol Kontrolü', 'Gelişmiş Raporlama'],
    },
    {
      icon: Smartphone,
      title: 'iOS & Android Mobil Uygulamalar',
      desc: 'Müşterileriniz, öğrencileriniz veya saha ekipleriniz için App Store ve Google Play standartlarında, kullanıcı dostu ve hızlı mobil uygulamalar.',
      highlights: ['App Store & Google Play', 'Anlık Bildirim Sistemi', 'Kolay Kullanıcı Deneyimi'],
    },
    {
      icon: Cpu,
      title: 'Kurumsal Otomasyon & Analitik Sistemler',
      desc: 'İş süreçlerinizi hızlandıran akıllı otomasyonlar, performans takip sistemleri, istatistik panoları ve karar destek yazılımları.',
      highlights: ['Süreç Otomasyonu', 'Performans & Hedef Analizi', 'Dinamik İstatistikler'],
    },
    {
      icon: Database,
      title: 'Sistem Entegrasyonu & Veri Yönetimi',
      desc: 'Mevcut kurumsal yazılımlarınız, dış servisler ve ödeme altyapılarıyla tam uyumlu çalışan merkezi veri yönetimi ve entegrasyon çözümleri.',
      highlights: ['Üçüncü Parti Entegrasyonlar', 'Merkezi Veri Mimarisi', 'Hızlı & Güvenli Senkronizasyon'],
    },
    {
      icon: Cloud,
      title: 'Kesintisiz Bulut & Sunucu Altyapısı',
      desc: 'Yüksek ziyaretçi trafiğinde bile yavaşlamayan, otomatik yedeklenen ve her cihazdan 7/24 kesintisiz erişilebilen kurumsal sistem mimarisi.',
      highlights: ['%99.9 Kesintisiz Çalışma', 'Otomatik Yedekleme', 'Yüksek Hız & Performans'],
    },
    {
      icon: ShieldCheck,
      title: 'Veri Güvenliği & Kurumsal Destek',
      desc: 'Kurumsal verilerinizin uçtan uca şifrelenerek korunması, KVKK standartlarına uygun mimari ve canlıya geçiş sonrası sürekli teknik destek.',
      highlights: ['Uçtan Uca Güvenlik', 'KVKK Uyumlu Yapı', '7/24 Teknik Destek'],
    },
  ];

  return (
    <section
      id="hizmetler"
      className={`${
        isStandalonePage
          ? 'pt-32 pb-24 bg-white'
          : 'py-20 bg-slate-50/70 border-y border-slate-200/70'
      } relative`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Kurumlara Özel{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c98f6] to-cyan-500">
              Web, Mobil ve Yazılım Çözümleri
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Masaüstü yönetim panellerinden iOS & Android mobil uygulamalara kadar tüm dijital ihtiyaçlarınızı tek merkezden, anahtar teslim geliştiriyoruz.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, index) => {
            const Icon = srv.icon;
            return (
              <ScrollReveal key={index} delay={(index % 3) * 90} className="h-full">
                <div className="group h-full p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#2c98f6]/50 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-slate-200/70 hover:-translate-y-1 relative overflow-hidden">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2c98f6] group-hover:scale-110 group-hover:bg-[#2c98f6] group-hover:text-white transition-all mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2c98f6] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{srv.desc}</p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                    {srv.highlights.map((item, tIndex) => (
                      <div
                        key={tIndex}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#2c98f6] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
