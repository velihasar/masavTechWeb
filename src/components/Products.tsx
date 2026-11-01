'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Wallet,
  Award,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

function GooglePlayBadgeIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.609 1.814L13.792 12 3.61 22.186a1.75 1.75 0 0 1-.61-1.334V3.148c0-.528.235-1.01.609-1.334z"
        fill="#32BBFF"
      />
      <path
        d="M17.208 8.584L13.792 12l3.416 3.416 3.857-2.204c.847-.484.847-1.94 0-2.424l-3.857-2.204z"
        fill="#FFCE00"
      />
      <path
        d="M13.792 12L3.609 22.186c.42.362 1.037.456 1.564.155l12.035-6.925L13.792 12z"
        fill="#F43249"
      />
      <path
        d="M13.792 12l3.416-3.416L5.173 1.66C4.646 1.358 4.03 1.452 3.609 1.814L13.792 12z"
        fill="#00EE76"
      />
    </svg>
  );
}

export default function Products() {
  return (
    <section id="urunler" className="pt-32 pb-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            MasavTech Tarafından Geliştirilen{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c98f6] to-cyan-500">
              Canlı Yazılım & Mobil Ürünler
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Eğitim kurumlarından tüm sınav adaylarına ve kişisel finans yönetimine kadar gerçek ihtiyaçları çözen, web ve mobil tabanlı ürünlerimizi detaylı inceleyin.
          </p>
        </ScrollReveal>

        {/* 1. ÜRÜN: KURSUM */}
        <ScrollReveal className="mb-20">
          <div
            id="kursum"
            className="scroll-mt-28 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 text-[#2c98f6] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#2c98f6] block">
                      EĞİTİM & KURUM YÖNETİM PLATFORMU
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Kursum
                    </h2>
                  </div>
                </div>

                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Eğitim kurumları, kurs merkezleri, spor/sanat akademileri ve özel okullar için geliştirilen{' '}
                  <strong className="text-slate-900">Kursum</strong>; yöneticilere masaüstünde tam hakimiyet sağlayan{' '}
                  <strong className="text-slate-900">Web Yönetim Paneli</strong> ile öğretmen, öğrenci ve velilerin cebindeki{' '}
                  <strong className="text-slate-900">iOS & Android Mobil Uygulamayı</strong> anlık olarak senkronize eder.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-7">
                  {[
                    'Çoklu Şube & Kurum Yönetim Özeti',
                    'Akıllı Ders Programı & Yoklama Sistemi',
                    'Kantin Cüzdanı & Veli Bakiye Kontrolü',
                    'Aidat, Taksit & Tahsilat Otomasyonu',
                    'Veli & Öğrenci Mobil Bildirim Sistemi',
                    'Öğretmen Kadrosu, Duyuru & Etkinlikler',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2c98f6] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#2c98f6] hover:bg-blue-600 shadow-lg shadow-[#2c98f6]/25 transition-all hover:-translate-y-0.5"
                  >
                    <span>Kurumunuz İçin Demo Talep Edin</span>
                  </Link>
                </div>
              </div>

              <div
                className="lg:col-span-6 p-8 sm:p-12 min-h-[400px] sm:min-h-[480px] h-full flex items-center justify-center relative overflow-hidden border-t lg:border-t-0 lg:border-l border-blue-100/80 rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl"
                style={{
                  background:
                    'radial-gradient(circle at 78% 24%, rgba(37, 99, 235, 0.18) 0%, transparent 52%), radial-gradient(circle at 25% 80%, rgba(16, 185, 129, 0.14) 0%, transparent 52%), linear-gradient(135deg, #f4f9ff 0%, #e6f2ff 55%, #ecfdf5 100%)',
                }}
              >
                <div className="relative w-full max-w-[520px] flex items-center justify-center">
                  <img
                    src="/mockups/kursum_web.png"
                    alt="Kursum Web Yönetim Paneli"
                    className="w-[86%] h-auto -translate-x-5 drop-shadow-[0_24px_34px_rgba(15,23,42,0.18)] transition-transform duration-500 hover:scale-[1.03]"
                  />
                  <img
                    src="/mockups/kursum_mobile.png"
                    alt="Kursum Mobil Uygulama"
                    className="w-[40%] max-w-[195px] h-auto absolute right-0 -bottom-2 drop-shadow-[0_20px_30px_rgba(15,23,42,0.24)] transition-transform duration-500 hover:-translate-y-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. ÜRÜN: SINAVIM */}
        <ScrollReveal className="mb-20">
          <div
            id="sinavim"
            className="scroll-mt-28 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div
                className="lg:col-span-6 order-2 lg:order-1 p-6 sm:p-10 min-h-[420px] sm:min-h-[480px] h-full flex items-center justify-center relative overflow-hidden border-t lg:border-t-0 lg:border-r border-purple-100/80 rounded-b-3xl lg:rounded-br-none lg:rounded-l-3xl select-none"
                style={{
                  background:
                    'radial-gradient(circle at 30% 25%, rgba(147, 51, 234, 0.18) 0%, transparent 52%), radial-gradient(circle at 75% 78%, rgba(245, 158, 11, 0.14) 0%, transparent 52%), linear-gradient(135deg, #fbf7ff 0%, #f3e8ff 55%, #fffbeb 100%)',
                }}
              >
                <div className="relative flex items-center justify-center w-full max-w-[520px]">
                  {/* Arka Plan Görsel Sınav Kapsam Kartı */}
                  <div className="hidden sm:flex flex-col justify-between w-[335px] xl:w-[365px] rounded-3xl bg-white/92 border border-purple-200/80 backdrop-blur-xl p-5 pr-12 xl:pr-14 shadow-[0_24px_50px_rgba(15,23,42,0.10)] -translate-x-14 xl:-translate-x-16 z-10">
                    <div className="pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-extrabold text-slate-900">
                            Desteklenen Sınav Kategorileri
                          </div>
                          <div className="text-[10px] font-medium text-slate-500">
                            Sınavını seç, müfredatın otomatik yüklensin
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 6'lı Ulusal Sınav Kapsam Grid'i */}
                    <div className="mt-3.5 mb-2 grid grid-cols-2 gap-2">
                      {[
                        { code: 'YKS', sub: 'TYT • AYT • YDT' },
                        { code: 'LGS', sub: '8. Sınıf Müfredatı' },
                        { code: 'KPSS & EKPSS', sub: 'Lisans • Ön Lisans • Lise' },
                        { code: 'DGS', sub: 'Sayısal • Sözel Bölüm' },
                        { code: 'ALES', sub: 'Akademik Lisansüstü' },
                        { code: 'YDS & YÖKDİL', sub: 'Yabancı Dil Sınavları' },
                      ].map((exam) => (
                        <div
                          key={exam.code}
                          className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-100/90 text-left"
                        >
                          <div className="text-xs font-black text-purple-700">{exam.code}</div>
                          <div className="text-[10px] font-semibold text-slate-500">{exam.sub}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mb-2.5 text-[10px] font-bold text-purple-700/80 text-center">
                      + Ve diğer tüm sınavlarla tam uyumlu
                    </div>

                    {/* Alt Durum Satırı */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2">
                      <GooglePlayBadgeIcon className="w-4 h-4 shrink-0" />
                      <span className="text-[11px] font-bold text-slate-800">
                        Google Play&apos;de Yayında
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[11px] font-extrabold text-purple-700">Ücretsiz</span>
                    </div>
                  </div>

                  {/* Ön Plandaki Sınavım Telefon Mockup'ı */}
                  <div className="relative sm:absolute sm:right-0 xl:right-2 z-20 w-[68%] sm:w-[46%] max-w-[235px] xl:max-w-[250px] transition-transform duration-500 hover:-translate-y-2">
                    <img
                      src="/mockups/sinavim.png"
                      alt="Sınavım Mobil Uygulaması"
                      className="w-full h-auto drop-shadow-[0_26px_40px_rgba(15,23,42,0.24)]"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-purple-600 block">
                      TÜM SINAVLARLA UYUMLU HAZIRLIK & REKABET ASİSTANI
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Sınavım
                    </h2>
                  </div>
                </div>

                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <strong className="text-slate-900">Sınavım</strong>, öğrencinin veya adayın hedeflediği{' '}
                  <strong className="text-slate-900">
                    tüm sınav süreçlerine (YKS, LGS, KPSS, EKPSS, DGS, ALES, YDS ve diğer tüm sınavlara)
                  </strong>{' '}
                  uyum sağlayan kişisel hazırlık ve motivasyon asistanıdır. Uygulamaya girdiğinizde kendi sınavınızı seçersiniz; konular, hedefler ve geri sayım sayacı seçtiğiniz sınava göre otomatik şekillenir.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-7">
                  {[
                    'Konu Takibi',
                    'Deneme Takibi',
                    'Günlük Soru Takibi',
                    'Arkadaş Karşılaştırması',
                    'Sınava Geri Sayım',
                    'Pomodoro Zamanlayıcısı',
                    'Kalan Süreye Göre Konu Hedefi',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.masavtech.sinavim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5"
                  >
                    <GooglePlayBadgeIcon className="w-6 h-6 shrink-0" />
                    <div className="text-left leading-tight">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-300">
                        Hemen İndirin
                      </span>
                      <span className="block text-sm font-extrabold text-white">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3. ÜRÜN: CÜZDANIM */}
        <ScrollReveal>
          <div
            id="cuzdanim"
            className="scroll-mt-28 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 block">
                      KİŞİSEL VARLIK & BÜTÇE YÖNETİMİ
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Cüzdanım
                    </h2>
                  </div>
                </div>

                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <strong className="text-slate-900">Cüzdanım</strong>; tüm altın ve döviz türleriyle tam uyumlu altyapısı sayesinde{' '}
                  <strong className="text-slate-900">Altın, Gümüş, Dolar ($), Euro (€)</strong> gibi birikimlerinizin anlık kur karşılıklarını, maaş gelirlerinizi ve aylık giderlerinizi tek ekranda birleştirerek gerçek zamanlı net bakiye ve varlık analizi yapmanızı sağlayan finansal asistandır.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-7">
                  {[
                    'Altın & Gümüş Birikim Takibi',
                    'Dolar (USD), Euro (EUR) & Döviz Karşılıkları',
                    'Maaş, Gelir, Gider & Net Varlık Özeti',
                    'Canlı Piyasa Kurlarıyla Otomatik TL Hesaplama',
                    'Saniyeler İçinde Hızlı Varlık & Harcama Ekleme',
                    'Sade, Hızlı ve Güvenli Mobil Deneyim',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.anonymous.cuzdanim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5"
                  >
                    <GooglePlayBadgeIcon className="w-6 h-6 shrink-0" />
                    <div className="text-left leading-tight">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-300">
                        Hemen İndirin
                      </span>
                      <span className="block text-sm font-extrabold text-white">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>

              <div
                className="lg:col-span-6 p-6 sm:p-10 min-h-[420px] sm:min-h-[500px] h-full flex items-center justify-center relative overflow-hidden border-t lg:border-t-0 lg:border-l border-rose-100/80 rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl select-none"
                style={{
                  background:
                    'radial-gradient(circle at 70% 25%, rgba(225, 29, 72, 0.16) 0%, transparent 52%), radial-gradient(circle at 25% 78%, rgba(245, 158, 11, 0.14) 0%, transparent 52%), linear-gradient(135deg, #fff7f8 0%, #ffe4e6 55%, #fffbeb 100%)',
                }}
              >
                <div className="relative flex items-center justify-center w-full max-w-[520px]">
                  {/* Arka Plan Görsel Portföy Dağılım Kartı (Soldaki metinleri tekrar etmeyen grafiksel widget) */}
                  <div className="hidden sm:flex flex-col justify-between w-[320px] xl:w-[345px] rounded-3xl bg-white/92 border border-rose-200/80 backdrop-blur-xl p-5 pr-12 xl:pr-14 shadow-[0_24px_50px_rgba(15,23,42,0.10)] -translate-x-14 xl:-translate-x-16 z-10">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <div className="text-xs font-extrabold text-slate-900">
                          Portföy Dağılımı &amp; Akış
                        </div>
                        <div className="text-[10px] font-medium text-slate-500">
                          Varlık ağırlık oranı ve tasarruf dengesi
                        </div>
                      </div>
                      <span className="text-[11px] font-extrabold text-emerald-600">Canlı</span>
                    </div>

                    {/* Görsel Çok Renkli Portföy Dağılım Çubuğu */}
                    <div className="my-3.5 p-3.5 rounded-2xl bg-rose-50/50 border border-rose-100/80">
                      <div className="text-[11px] font-bold text-slate-700 mb-2">
                        Varlık Dağılım Oranı
                      </div>
                      <div className="h-3 w-full rounded-full overflow-hidden flex gap-0.5 bg-slate-100 mb-3">
                        <div className="h-full w-[48%] bg-amber-400 rounded-l-full" />
                        <div className="h-full w-[32%] bg-emerald-500" />
                        <div className="h-full w-[20%] bg-rose-500 rounded-r-full" />
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 text-[10px] font-bold text-slate-600">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                          <span>%48 Maden</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                          <span>%32 Döviz</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                          <span>%20 Nakit</span>
                        </div>
                      </div>
                    </div>

                    {/* Aylık Gelir / Gider & Tasarruf Göstergeleri */}
                    <div className="space-y-2.5 mb-3.5">
                      <div>
                        <div className="flex justify-between text-[11px] font-bold mb-1">
                          <span className="text-slate-700">Aylık Tasarruf &amp; Birikim Oranı</span>
                          <span className="text-emerald-600">%38</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-emerald-500 to-teal-400" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] font-bold mb-1">
                          <span className="text-slate-700">Sabit &amp; Değişken Gider Oranı</span>
                          <span className="text-rose-600">%62</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-rose-500 to-amber-500" />
                        </div>
                      </div>
                    </div>

                    {/* Alt Durum Satırı */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2">
                      <GooglePlayBadgeIcon className="w-4 h-4 shrink-0" />
                      <span className="text-[11px] font-bold text-slate-800">
                        Google Play&apos;de Yayında
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[11px] font-extrabold text-rose-600">Ücretsiz</span>
                    </div>
                  </div>

                  {/* Ön Plandaki Cüzdanım Telefon Mockup'ı */}
                  <div className="relative sm:absolute sm:right-0 xl:right-2 z-20 w-[68%] sm:w-[46%] max-w-[235px] xl:max-w-[250px] transition-transform duration-500 hover:-translate-y-2">
                    <img
                      src="/mockups/cuzdanim.png"
                      alt="Cüzdanım Mobil Uygulaması"
                      className="w-full h-auto drop-shadow-[0_26px_40px_rgba(15,23,42,0.24)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
