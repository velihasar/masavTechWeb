'use client';

import React from 'react';
import { ArrowRight, Terminal, Zap, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[500px] bg-gradient-to-tr from-[#2c98f6]/20 via-blue-600/15 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2c98f6]/10 border border-[#2c98f6]/30 text-[#2c98f6] text-xs md:text-sm font-medium backdrop-blur-md shadow-sm shadow-[#2c98f6]/20">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2c98f6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2c98f6]"></span>
            </span>
            <span>Yapay Zeka Destekli & Yüksek Performanslı Bulut Çözümleri</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#2c98f6]" />
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-white">
            Geleceğin Dijital Sistemlerini{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c98f6] via-sky-300 to-cyan-300">
              Bugünden İnşa Ediyoruz.
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Masavtech; modern web & mobil mimariler, yapay zeka entegrasyonları, kurumsal SaaS ürünleri ve kesintisiz bulut altyapıları ile fikirlerinizi ölçeklenebilir güce dönüştürür.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#iletisim"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#2c98f6] via-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-600 shadow-xl shadow-[#2c98f6]/30 hover:shadow-[#2c98f6]/50 transition-all transform hover:-translate-y-0.5"
            >
              <span>Projenizi Başlatın</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#urunler"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all backdrop-blur-md"
            >
              <span>Ürünlerimizi Keşfedin</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>%99.99 Uptime Garantisi</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2c98f6]" />
              <span>Mikroservis & Cloud Native</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Kurumsal SLA & 7/24 Destek</span>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-[#2c98f6]/40 via-slate-700/30 to-slate-800/10 shadow-2xl shadow-[#2c98f6]/20">
            <div className="bg-[#0b1120] rounded-2xl overflow-hidden border border-slate-800/80">
              <div className="flex items-center justify-between px-4 py-3 bg-[#080d19] border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">masavtech-core-cluster / prod</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live & Healthy
                  </span>
                </div>
              </div>

              <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <div className="bg-[#060a12] p-4 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto">
                    <div className="text-[#2c98f6] flex items-center gap-2">
                      <Terminal className="w-4 h-4" />
                      <span>masavtech stack --deploy-status</span>
                    </div>
                    <p className="text-slate-400">✔ Cloud Infrastructure: <span className="text-emerald-400">Coolify Cluster (EU-Central)</span></p>
                    <p className="text-slate-400">✔ SSL & Edge Security: <span className="text-emerald-400">Cloudflare Enterprise Proxy (Strict TLS)</span></p>
                    <p className="text-slate-400">✔ Frontend Framework: <span className="text-cyan-400">Next.js 15 App Router & React 19</span></p>
                    <p className="text-slate-400">✔ AI & Neural Engine: <span className="text-[#2c98f6]">DeepSeek / OpenAI Agents Pipeline</span></p>
                    <p className="text-slate-400">✔ Live Products: <span className="text-amber-400">kursum.masavtech.com (Running)</span></p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-xs text-slate-400">Ortalama Yanıt Süresi</div>
                      <div className="text-lg font-bold text-white mt-1 font-mono">18ms</div>
                      <div className="text-[11px] text-emerald-400 mt-0.5">Ultra Fast Edge</div>
                    </div>
                    <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-xs text-slate-400">Sistem Güvenliği</div>
                      <div className="text-lg font-bold text-white mt-1 font-mono">A+ Tier</div>
                      <div className="text-[11px] text-[#2c98f6] mt-0.5">DDoS & WAF Active</div>
                    </div>
                    <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                      <div className="text-xs text-slate-400">Global Uptime</div>
                      <div className="text-lg font-bold text-white mt-1 font-mono">99.98%</div>
                      <div className="text-[11px] text-emerald-400 mt-0.5">Zero Downtime</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#2c98f6]/15 via-slate-900/50 to-slate-900/90 p-5 rounded-xl border border-[#2c98f6]/20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#2c98f6] font-semibold text-sm">
                      <Zap className="w-4 h-4 text-[#2c98f6]" />
                      <span>Modern Teknoloji Gücü</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Sıfırdan tasarlanan özel yazılımlarımız, en yüksek güvenlik ve performans standartlarıyla bulutta ölçeklenir.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Yapay Zeka Optimizasyonu</span>
                      <span className="text-[#2c98f6] font-mono">%100</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#2c98f6] to-cyan-400 h-full rounded-full w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}