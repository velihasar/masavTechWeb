'use client';

import React from 'react';
import { Cpu, Globe, Cloud, ShieldCheck, Database, Smartphone, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Cpu,
      title: 'Yapay Zeka & LLM Entegrasyonları',
      desc: 'Şirket verilerinizle eğitilen özel yapay zeka asistanları, akıllı iş akışları, otomatik belge işleme ve büyük dil modeli (LLM) çözümleri.',
      tags: ['LLM', 'AI Agents', 'OpenAI / DeepSeek', 'RAG Sistemleri']
    },
    {
      icon: Globe,
      title: 'Özel Web Uygulama Geliştirme',
      desc: 'Next.js, React ve modern frontend ekosistemiyle ultra hızlı, SEO uyumlu ve ölçeklenebilir kurumsal web platformları.',
      tags: ['Next.js 15', 'React 19', 'Tailwind CSS', 'TypeScript']
    },
    {
      icon: Smartphone,
      title: 'Mobil Uygulama Çözümleri',
      desc: 'iOS ve Android için kusursuz çalışan, modern arayüzlü ve yüksek performanslı hibrit & native mobil uygulamalar.',
      tags: ['React Native', 'Flutter', 'iOS & Android', 'Push Notifications']
    },
    {
      icon: Cloud,
      title: 'Bulut & DevOps Mimarisi',
      desc: 'Coolify, Docker, Kubernetes ve Cloudflare entegrasyonlarıyla sıfır kesintili, otomatik deploy ve yük dengelemeli bulut altyapıları.',
      tags: ['Coolify', 'Docker', 'Cloudflare Edge', 'CI/CD Pipelines']
    },
    {
      icon: Database,
      title: 'Yüksek Hızlı Backend & API',
      desc: 'Mikroservis mimarileri, yüksek trafikli REST & GraphQL API sistemleri, PostgreSQL ve Redis ile optimize veri tabanı çözümleri.',
      tags: ['Node.js', 'Spring Boot', 'PostgreSQL', 'Redis & Caching']
    },
    {
      icon: ShieldCheck,
      title: 'Siber Güvenlik & Kurumsal SLA',
      desc: 'Uçtan uca şifreleme, DDoS koruması, düzenli yedekleme ve 7/24 kesintisiz sistem izleme ile tam kurumsal güvence.',
      tags: ['End-to-End SSL', 'WAF Koruması', 'Otomatik Backup', '7/24 Monitoring']
    }
  ];

  return (
    <section id="hizmetler" className="py-24 bg-[#080d1a]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Uzmanlık Alanlarımız</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Uçtan Uca{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Mühendislik & Yazılım Çözümleri
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            İşinizi dijital çağın zirvesine taşıyacak modern teknoloji yığınları ve güvenilir mimariler inşa ediyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, index) => {
            const Icon = srv.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/20"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {srv.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}