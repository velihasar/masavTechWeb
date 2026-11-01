'use client';

import React from 'react';
import Link from 'next/link';
import { Search, PenTool, Code, Rocket, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ProcessProps {
  isStandalonePage?: boolean;
}

export default function Process({ isStandalonePage = false }: ProcessProps) {
  const steps = [
    {
      step: '01',
      icon: Search,
      title: 'Keşif & İhtiyaç Analizi',
      desc: 'İş hedeflerinizi, hedef kitlenizi ve operasyonel gereksinimlerinizi derinlemesine analiz edip proje yol haritasını çıkartıyoruz.',
    },
    {
      step: '02',
      icon: PenTool,
      title: 'Mimari & UI/UX Tasarımı',
      desc: 'Hem yönetim panellerinde hem de mobil uygulamalarda herkesin kolayca kullanabileceği modern arayüzleri tasarlayarak onayınıza sunuyoruz.',
    },
    {
      step: '03',
      icon: Code,
      title: 'Çevik (Agile) Geliştirme',
      desc: 'Düzenli sunumlar ve kapsamlı testlerle projenizi adım adım geliştiriyor, her aşamada geri bildirimlerinizi sürece dahil ediyoruz.',
    },
    {
      step: '04',
      icon: Rocket,
      title: 'Bulut Dağıtım & 7/24 Destek',
      desc: 'Web sistemlerinizi ve App Store / Google Play mobil uygulamalarınızı canlıya alıyor, kesintisiz bakım ve teknik destek sağlıyoruz.',
    },
  ];

  return (
    <section
      id="surec"
      className={`${isStandalonePage ? 'pt-32 pb-24' : 'py-20'} bg-white relative`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Fikirden Canlıya{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c98f6] to-cyan-500">
              4 Adımlı Başarı Süreci
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Projelerinizi şeffaf, zamanında ve en yüksek kalite güvencesiyle hayata geçiriyoruz.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={index} delay={index * 90} className="h-full">
                <div className="relative h-full p-7 rounded-2xl bg-slate-50/80 border border-slate-200 flex flex-col justify-between hover:border-[#2c98f6]/50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-1 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black font-mono text-slate-200">{s.step}</span>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2c98f6]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {isStandalonePage && (
          <ScrollReveal className="mt-14 text-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#2c98f6] hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-[#2c98f6]/25 transition-all hover:-translate-y-0.5"
            >
              <span>Projenizi Birlikte Planlayalım</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
