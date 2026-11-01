'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Smartphone,
  CreditCard,
  Award,
  BarChart3,
  CheckCircle2,
  Wallet,
  TrendingUp,
  Play,
  Monitor,
  Coins,
  Users,
  BookOpen,
  Globe,
  ShieldCheck,
} from 'lucide-react';

function GooglePlayIcon({ className = 'w-5 h-5' }: { className?: string }) {
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

interface SlideBadge {
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
}

interface SlideItem {
  id: 'kurumsal' | 'kursum' | 'sinavim' | 'cuzdanim';
  tabNumber: string;
  tabTitle: string;
  themeClass: string;
  overline: string;
  overlineColor: string;
  titleBefore: string;
  titleAccent: string;
  accentColor: string;
  titleAfter: string;
  desc: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  primaryBtnBg: string;
  secondaryBtnText: string;
  secondaryBtnHref: string;
  playStoreHref?: string;
  progressFillStyle: string;
  glowColor: string;
  badges: SlideBadge[];
}

const SLIDES: SlideItem[] = [
  {
    id: 'kurumsal',
    tabNumber: '01',
    tabTitle: 'MasavTech Ekosistemi',
    themeClass: 'hero-slide-kurumsal',
    overline: '',
    overlineColor: '#0284c7',
    titleBefore: 'Geleceğin Dijital Ürünlerini ',
    titleAccent: 'Uçtan Uca Mühendislik',
    accentColor: '#2c98f6',
    titleAfter: ' İle İnşa Ediyoruz',
    desc: 'Kurumsal web yönetim panelleri, iOS & Android mobil uygulamalar ve ölçeklenebilir bulut sistemleri ile işletmenizin ve kurumunuzun dijital dönüşümünü anahtar teslim gerçekleştiriyoruz.',
    primaryBtnText: 'Tüm Ürünlerimizi İnceleyin',
    primaryBtnHref: '/urunler',
    primaryBtnBg: 'linear-gradient(135deg, #2c98f6 0%, #0284c7 100%)',
    secondaryBtnText: 'Hizmetlerimiz',
    secondaryBtnHref: '/hizmetler',
    progressFillStyle: 'linear-gradient(90deg, #2c98f6, #06b6d4)',
    glowColor: 'radial-gradient(circle, rgba(44, 152, 246, 0.14) 0%, transparent 70%)',
    badges: [
      {
        icon: Monitor,
        iconBg: '#e0f2fe',
        iconColor: '#0284c7',
        title: 'Web Yönetim Panelleri',
        desc: 'Merkezi kontrol ekranları',
      },
      {
        icon: Smartphone,
        iconBg: '#d1fae5',
        iconColor: '#059669',
        title: 'iOS & Android',
        desc: 'Yüksek performanslı mobil çözümler',
      },
    ],
  },
  {
    id: 'kursum',
    tabNumber: '02',
    tabTitle: 'Kursum Eğitim Sistemi',
    themeClass: 'hero-slide-kursum',
    overline: 'KURSUM — EĞİTİM & KURUM YÖNETİM PLATFORMU',
    overlineColor: '#2563eb',
    titleBefore: 'Eğitim Kurumlarında ',
    titleAccent: 'Web Panel & Mobil',
    accentColor: '#2563eb',
    titleAfter: ' Tek Çatı Altında',
    desc: 'Çoklu şube, öğrenci, öğretmen, yoklama, kantin cüzdanı ve aidat/taksit otomasyonunu hem gelişmiş Web Yönetim Panelinden hem de Veli & Öğrenci Mobil Uygulamasından anlık senkronize yönetin.',
    primaryBtnText: 'Kursum Detaylarını Görün',
    primaryBtnHref: '/urunler#kursum',
    primaryBtnBg: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    secondaryBtnText: 'Demo & Bilgi Alın',
    secondaryBtnHref: '/iletisim',
    progressFillStyle: 'linear-gradient(90deg, #2563eb, #10b981)',
    glowColor: 'radial-gradient(circle, rgba(37, 99, 235, 0.14) 0%, transparent 70%)',
    badges: [
      {
        icon: GraduationCap,
        iconBg: '#dbeafe',
        iconColor: '#2563eb',
        title: 'Web Yönetim Paneli',
        desc: 'Öğrenci ve yoklama kontrolü',
      },
      {
        icon: CreditCard,
        iconBg: '#d1fae5',
        iconColor: '#059669',
        title: 'Kantin & Aidat',
        desc: 'Anlık bakiye ve taksit takibi',
      },
    ],
  },
  {
    id: 'sinavim',
    tabNumber: '03',
    tabTitle: 'Sınavım (Tüm Sınavlar)',
    themeClass: 'hero-slide-sinavim',
    overline: 'SINAVIM — YKS, LGS, KPSS, EKPSS, ALES, DGS & TÜM SINAVLARLA UYUMLU',
    overlineColor: '#7c3aed',
    titleBefore: 'Tüm Sınavlara Hazırlıkta ',
    titleAccent: 'Hedef, Analiz ve Rekabet',
    accentColor: '#7c3aed',
    titleAfter: ' Cebinizde',
    desc: 'YKS, LGS, KPSS, EKPSS, DGS, ALES, YDS ve diğer tüm sınavlara tam uyumlu yapı! Sınava özel geri sayım sayacı, günlük soru çözüm grafikleri, konu takibi ve arkadaş gruplarıyla canlı liderlik tablosu sunar.',
    primaryBtnText: 'Sınavım Özelliklerini Keşfedin',
    primaryBtnHref: '/urunler#sinavim',
    primaryBtnBg: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
    secondaryBtnText: "Google Play'den İndirin",
    secondaryBtnHref: 'https://play.google.com/store/apps/details?id=com.masavtech.sinavim',
    playStoreHref: 'https://play.google.com/store/apps/details?id=com.masavtech.sinavim',
    progressFillStyle: 'linear-gradient(90deg, #7c3aed, #f59e0b)',
    glowColor: 'radial-gradient(circle, rgba(124, 58, 237, 0.14) 0%, transparent 70%)',
    badges: [
      {
        icon: BarChart3,
        iconBg: '#f3e8ff',
        iconColor: '#7c3aed',
        title: 'Tüm Sınavlarla Uyumlu',
        desc: 'YKS, LGS, KPSS, EKPSS, DGS, ALES vb.',
      },
      {
        icon: Award,
        iconBg: '#fef3c7',
        iconColor: '#d97706',
        title: 'Canlı Rekabet',
        desc: 'Günlük soru ve liderlik sıralaması',
      },
    ],
  },
  {
    id: 'cuzdanim',
    tabNumber: '04',
    tabTitle: 'Cüzdanım Finans',
    themeClass: 'hero-slide-cuzdanim',
    overline: 'CÜZDANIM — KİŞİSEL VARLIK & BÜTÇE YÖNETİMİ',
    overlineColor: '#e11d48',
    titleBefore: 'Altın, Gümüş, Dolar, Euro ve ',
    titleAccent: 'Tüm Varlıklarınız',
    accentColor: '#e11d48',
    titleAfter: ' Tek Ekranda',
    desc: 'Altın, Gümüş, Dolar, Euro gibi birikimlerinizin anlık TL karşılıklarını, maaş gelirlerinizi ve giderlerinizi tek ekranda takip etmenizi sağlayan akıllı varlık ve bütçe asistanı.',
    primaryBtnText: 'Cüzdanım Detaylarını İnceleyin',
    primaryBtnHref: '/urunler#cuzdanim',
    primaryBtnBg: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)',
    secondaryBtnText: "Google Play'den İndirin",
    secondaryBtnHref: 'https://play.google.com/store/apps/details?id=com.anonymous.cuzdanim',
    playStoreHref: 'https://play.google.com/store/apps/details?id=com.anonymous.cuzdanim',
    progressFillStyle: 'linear-gradient(90deg, #e11d48, #f59e0b)',
    glowColor: 'radial-gradient(circle, rgba(225, 29, 72, 0.13) 0%, transparent 70%)',
    badges: [
      {
        icon: Coins,
        iconBg: '#ffe4e6',
        iconColor: '#e11d48',
        title: 'Altın, Gümüş & Döviz',
        desc: 'Anlık kur karşılıkları',
      },
      {
        icon: TrendingUp,
        iconBg: '#d1fae5',
        iconColor: '#059669',
        title: 'Gelir & Gider',
        desc: 'Aylık net varlık analizi',
      },
    ],
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideDuration = 4800;
  const startTimeRef = useRef<number>(Date.now());
  const accumulatedRef = useRef<number>(0);
  const touchStartXRef = useRef<number>(0);

  const goToSlide = useCallback((index: number) => {
    const total = SLIDES.length;
    const nextIdx = ((index % total) + total) % total;
    setCurrentSlide(nextIdx);
    setProgress(0);
    startTimeRef.current = Date.now();
    accumulatedRef.current = 0;
  }, []);

  useEffect(() => {
    startTimeRef.current = Date.now() - accumulatedRef.current;

    const timer = setInterval(() => {
      if (isPaused) {
        startTimeRef.current = Date.now() - accumulatedRef.current;
        return;
      }

      const elapsed = Date.now() - startTimeRef.current;
      accumulatedRef.current = elapsed;
      const pct = Math.min((elapsed / slideDuration) * 100, 100);
      setProgress(pct);

      if (elapsed >= slideDuration) {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        setProgress(0);
        startTimeRef.current = Date.now();
        accumulatedRef.current = 0;
      }
    }, 40);

    return () => clearInterval(timer);
  }, [currentSlide, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diffX = e.changedTouches[0].screenX - touchStartXRef.current;
    if (Math.abs(diffX) > 45) {
      if (diffX < 0) {
        goToSlide(currentSlide + 1);
      } else {
        goToSlide(currentSlide - 1);
      }
    }
  };

  const renderSlideVisual = (slide: SlideItem) => {
    if (slide.id === 'kurumsal') {
      return (
        <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] w-full select-none">
          <div className="absolute w-[340px] h-[340px] rounded-full bg-gradient-to-tr from-[#2c98f6]/25 via-cyan-400/20 to-blue-300/15 blur-3xl pointer-events-none animate-float-slow" />

          <div className="relative z-10 w-[84%] max-w-[460px] -translate-y-4 transition-transform duration-500 hover:scale-[1.03]">
            <img
              src="/mockups/kursum_web.png"
              alt="MasavTech Web Yönetim Paneli"
              className="w-full h-auto drop-shadow-[0_28px_40px_rgba(15,23,42,0.22)]"
            />
          </div>

          <div className="absolute -left-1 sm:left-2 bottom-0 z-20 w-[35%] max-w-[170px] transition-transform duration-500 hover:-translate-y-2">
            <img
              src="/mockups/sinavim.png"
              alt="Sınavım Mobil Uygulaması"
              className="w-full h-auto drop-shadow-[0_22px_35px_rgba(15,23,42,0.28)]"
            />
          </div>

          <div className="absolute -right-1 sm:right-2 bottom-0 z-30 w-[37%] max-w-[180px] transition-transform duration-500 hover:-translate-y-2">
            <img
              src="/mockups/kursum_mobile.png"
              alt="Kursum Mobil Uygulaması"
              className="w-full h-auto drop-shadow-[0_22px_35px_rgba(15,23,42,0.3)]"
            />
          </div>

          <div className="hidden sm:block absolute right-8 -top-2 z-20 w-[29%] max-w-[140px] opacity-95 transition-transform duration-500 hover:-translate-y-2">
            <img
              src="/mockups/cuzdanim.png"
              alt="Cüzdanım Mobil Uygulaması"
              className="w-full h-auto drop-shadow-[0_20px_30px_rgba(15,23,42,0.24)]"
            />
          </div>
        </div>
      );
    }

    if (slide.id === 'kursum') {
      return (
        <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] w-full select-none">
          <div className="absolute w-[340px] h-[340px] rounded-full bg-gradient-to-tr from-blue-500/20 via-sky-400/20 to-emerald-400/15 blur-3xl pointer-events-none animate-float-slow" />

          <div className="relative z-10 w-[88%] max-w-[490px] -translate-x-5 transition-transform duration-500 hover:scale-[1.03]">
            <img
              src="/mockups/kursum_web.png"
              alt="Kursum Web Yönetim Paneli"
              className="w-full h-auto drop-shadow-[0_28px_42px_rgba(15,23,42,0.22)]"
            />
          </div>

          <div className="absolute right-0 sm:right-2 bottom-0 z-20 w-[42%] max-w-[215px] transition-transform duration-500 hover:-translate-y-2.5">
            <img
              src="/mockups/kursum_mobile.png"
              alt="Kursum Mobil Uygulama"
              className="w-full h-auto drop-shadow-[0_25px_38px_rgba(15,23,42,0.3)]"
            />
          </div>
        </div>
      );
    }

    if (slide.id === 'sinavim') {
      // 3. Slayt (Sınavım): Telefon ekranındaki verileri tekrar etmeyen "Desteklenen Sınavlar & Platform Kapsam Kartı"
      return (
        <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] w-full select-none">
          <div className="absolute w-[340px] h-[340px] rounded-full bg-gradient-to-tr from-purple-500/20 via-fuchsia-400/15 to-amber-400/20 blur-3xl pointer-events-none animate-float-slow" />

          <div className="hidden sm:flex flex-col justify-between w-[355px] lg:w-[395px] rounded-3xl bg-white/92 border border-purple-200/80 backdrop-blur-xl p-5 pr-12 lg:pr-14 shadow-[0_24px_50px_rgba(15,23,42,0.12)] -translate-x-16 lg:-translate-x-20 z-10">
            <div className="pb-3.5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">
                    Desteklenen Sınav Kategorileri
                  </div>
                  <div className="text-[11px] text-slate-500">
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

            {/* Alt Platform Özeti */}
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-2">
              <GooglePlayIcon className="w-4 h-4 shrink-0" />
              <span className="text-[11px] font-bold text-slate-800">
                Google Play&apos;de Yayında
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-[11px] font-extrabold text-purple-700">Ücretsiz</span>
            </div>
          </div>

          <div className="relative sm:absolute sm:right-2 lg:right-4 z-20 w-[68%] sm:w-[46%] max-w-[245px] lg:max-w-[265px] transition-transform duration-500 hover:-translate-y-2.5">
            <img
              src="/mockups/sinavim.png"
              alt="Sınavım Mobil Uygulaması"
              className="w-full h-auto drop-shadow-[0_28px_42px_rgba(15,23,42,0.28)]"
            />
          </div>
        </div>
      );
    }

    // 4. Slayt (Cüzdanım): Telefon ekranındaki sayıları tekrar etmeyen "Desteklenen Varlık, Maden & Döviz Kapsam Kartı"
    return (
      <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] w-full select-none">
        <div className="absolute w-[340px] h-[340px] rounded-full bg-gradient-to-tr from-rose-500/20 via-amber-400/15 to-pink-400/20 blur-3xl pointer-events-none animate-float-slow" />

        <div className="hidden sm:flex flex-col justify-between w-[355px] lg:w-[395px] rounded-3xl bg-white/92 border border-rose-200/80 backdrop-blur-xl p-5 pr-12 lg:pr-14 shadow-[0_24px_50px_rgba(15,23,42,0.12)] -translate-x-16 lg:-translate-x-20 z-10">
          <div className="pb-3.5 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900">
                  Desteklenen Varlık & Kur Türleri
                </div>
                <div className="text-[11px] text-slate-500">
                  Canlı piyasa kurlarıyla otomatik TL karşılığı
                </div>
              </div>
            </div>
          </div>

          <div className="my-3.5 space-y-2.5">
            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold text-slate-900">
                  Altın & Kıymetli Madenler
                </span>
                <span className="text-[10px] font-bold text-amber-700">Canlı Kur</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                <strong>Altın</strong> ve <strong>Gümüş</strong> birikimlerinin anlık piyasa karşılığı
              </p>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/70">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold text-slate-900">
                  Döviz & Yabancı Para Birimleri
                </span>
                <span className="text-[10px] font-bold text-emerald-700">$ • € • £</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                <strong>Dolar (USD)</strong>, <strong>Euro (EUR)</strong>, Sterlin (GBP) ve döviz birikimlerinin anlık değeri
              </p>
            </div>

            <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200/70">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold text-slate-900">
                  Nakit, Maaş & Gider Yönetimi
                </span>
                <span className="text-[10px] font-bold text-rose-700">Net Bütçe</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                Maaş gelirleri, banka/nakit varlıklar ve aylık harcama takibi
              </p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-2">
            <GooglePlayIcon className="w-4 h-4 shrink-0" />
            <span className="text-[11px] font-bold text-slate-800">
              Google Play&apos;de Yayında
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-[11px] font-extrabold text-rose-600">Ücretsiz</span>
          </div>
        </div>

        <div className="relative sm:absolute sm:right-2 lg:right-4 z-20 w-[68%] sm:w-[46%] max-w-[245px] lg:max-w-[265px] transition-transform duration-500 hover:-translate-y-2.5">
          <img
            src="/mockups/cuzdanim.png"
            alt="Cüzdanım Mobil Uygulaması"
            className="w-full h-auto drop-shadow-[0_28px_42px_rgba(15,23,42,0.28)]"
          />
        </div>
      </div>
    );
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-10 md:pt-28 md:pb-12 overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[850px] h-[440px] pointer-events-none z-0 transition-all duration-700"
        style={{ background: SLIDES[currentSlide].glowColor }}
      />

      <div className="w-[96%] max-w-[1520px] mx-auto px-2 sm:px-4 relative z-10">
        <div className="relative w-full mx-auto">
          <button
            type="button"
            onClick={() => goToSlide(currentSlide - 1)}
            aria-label="Önceki Slayt"
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 lg:left-6 z-30 w-12 h-12 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 hover:text-[#2c98f6] items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-all"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div
            className="overflow-hidden rounded-[28px] border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.1)] relative w-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.35,1)] will-change-transform"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  data-slide-index={idx}
                  className={`flex-[0_0_100%] w-full min-w-full box-border px-6 pt-8 pb-20 sm:px-12 sm:pt-10 sm:pb-24 lg:px-20 lg:pt-12 lg:pb-24 min-h-[560px] lg:min-h-[600px] text-slate-900 relative overflow-hidden flex items-center ${slide.themeClass}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-10 items-center relative z-10 w-full">
                    <div className="text-center lg:text-left">
                      {slide.overline && (
                        <p
                          className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3"
                          style={{ color: slide.overlineColor }}
                        >
                          {slide.overline}
                        </p>
                      )}

                      <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-extrabold leading-[1.15] tracking-tight text-slate-900 mb-4">
                        {slide.titleBefore}
                        <span style={{ color: slide.accentColor }} className="font-extrabold">
                          {slide.titleAccent}
                        </span>
                        {slide.titleAfter}
                      </h2>

                      <p className="text-sm sm:text-base lg:text-[1.02rem] leading-relaxed text-slate-600 mb-5 max-w-xl mx-auto lg:mx-0">
                        {slide.desc}
                      </p>

                      <div className="flex flex-col sm:flex-row flex-wrap items-center lg:items-start justify-center lg:justify-start gap-x-7 gap-y-2.5 mb-8 max-w-xl mx-auto lg:mx-0">
                        {slide.badges.map((b, bIdx) => {
                          const Icon = b.icon;
                          return (
                            <div key={bIdx} className="flex items-center gap-2 text-left">
                              <Icon
                                className="w-4 h-4 shrink-0"
                                style={{ color: b.iconColor }}
                              />
                              <span className="text-xs sm:text-sm font-bold text-slate-800">
                                {b.title}:
                              </span>
                              <span className="text-xs sm:text-sm text-slate-600">{b.desc}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3.5">
                        <Link
                          href={slide.primaryBtnHref}
                          style={{ background: slide.primaryBtnBg }}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-white font-bold text-sm sm:text-[0.95rem] shadow-lg shadow-slate-900/10 hover:-translate-y-0.5 transition-all"
                        >
                          <Play className="w-4 h-4 fill-current" />
                          <span>{slide.primaryBtnText}</span>
                        </Link>

                        {slide.playStoreHref ? (
                          <a
                            href={slide.playStoreHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-[0.95rem] shadow-lg shadow-slate-900/15 hover:-translate-y-0.5 transition-all"
                          >
                            <GooglePlayIcon className="w-5 h-5 shrink-0" />
                            <span>{slide.secondaryBtnText}</span>
                          </a>
                        ) : slide.secondaryBtnHref.startsWith('http') ? (
                          <a
                            href={slide.secondaryBtnHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm sm:text-[0.95rem] shadow-xs hover:-translate-y-0.5 transition-all"
                          >
                            <span>{slide.secondaryBtnText}</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        ) : (
                          <Link
                            href={slide.secondaryBtnHref}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm sm:text-[0.95rem] shadow-xs hover:-translate-y-0.5 transition-all"
                          >
                            <span>{slide.secondaryBtnText}</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>

                    <div className="relative z-10 flex items-center justify-center">
                      {renderSlideVisual(slide)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              role="tablist"
              aria-label="Slayt İlerleme Göstergeleri"
              className="absolute bottom-0 left-0 right-0 z-20 flex justify-center items-center gap-3 px-4 py-4 bg-white/75 backdrop-blur-md border-t border-slate-200/70"
            >
              {SLIDES.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Slayt ${idx + 1}`}
                    onClick={() => goToSlide(idx)}
                    className="w-16 sm:w-24 py-2 flex items-center bg-transparent border-none cursor-pointer group transition-all"
                  >
                    <div className="w-full h-2 rounded-full bg-slate-300/90 group-hover:bg-slate-400/90 ring-1 ring-slate-400/30 overflow-hidden transition-colors">
                      <div
                        className="h-full rounded-full transition-[width] duration-75 ease-linear"
                        style={{
                          width: isActive ? `${progress}%` : '0%',
                          background: slide.progressFillStyle,
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => goToSlide(currentSlide + 1)}
            aria-label="Sonraki Slayt"
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-4 lg:right-6 z-30 w-12 h-12 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 hover:text-[#2c98f6] items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-all"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
