'use client';

import React from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: '01',
      icon: Search,
      title: 'Keşif & İhtiyaç Analizi',
      desc: 'İş hedeflerinizi, hedef kitlenizi ve teknik gereksinimlerinizi derinlemesine analiz edip proje yol haritasını çıkartıyoruz.'
    },
    {
      step: '02',
      icon: PenTool,
      title: 'Mimari & UI/UX Tasarımı',
      desc: 'Kullanıcı dostu arayüzler ve yüksek performanslı sistem mimarisini tasarlayarak onayınıza sunuyoruz.'
    },
    {
      step: '03',
      icon: Code,
      title: 'Çevik (Agile) Geliştirme',
      desc: 'Haftalık sprintler ve sürekli testlerle projenizi adım adım, en kaliteli kod standartlarıyla geliştiriyoruz.'
    },
    {
      step: '04',
      icon: Rocket,
      title: 'Bulut Dağıtım & 7/24 Destek',
      desc: 'Cloud altyapısında canlıya alma, SSL/güvenlik konfigürasyonları ve kesintisiz bakım desteği sağlıyoruz.'
    }
  ];

  return (
    <section id="surec" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Çalışma Metodolojimiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Fikirden Canlıya{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
              4 Adımlı Başarı Süreci
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Projelerinizi şeffaf, zamanında ve en yüksek kalite güvencesiyle hayata geçiriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div 
                key={index}
                className="relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800/90 flex flex-col justify-between hover:border-violet-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono text-slate-700">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-violet-950/60 border border-violet-500/30 flex items-center justify-center text-violet-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}