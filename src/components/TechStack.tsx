'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function TechStack() {
  const stacks = [
    { name: 'Next.js 16 / React 19', type: 'Frontend & SSR' },
    { name: 'TypeScript', type: 'Type Safety' },
    { name: 'Tailwind CSS', type: 'Modern UI' },
    { name: '.NET Core / Node.js', type: 'Backend Engine' },
    { name: 'PostgreSQL & Redis', type: 'High Perf Data' },
    { name: 'Docker & Coolify', type: 'Cloud Deployment' },
    { name: 'Cloudflare', type: 'Edge Network & Security' },
    { name: 'Python & AI Frameworks', type: 'Machine Learning' }
  ];

  return (
    <section id="teknolojiler" className="py-20 bg-white border-b border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-[#2c98f6] font-bold mb-2">
            Gücümüzü En İyi Teknolojilerden Alıyoruz
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Modern & Endüstri Standardı Teknoloji Yığınımız
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stacks.map((tech, index) => (
            <ScrollReveal key={index} delay={(index % 4) * 70}>
              <div 
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#2c98f6]/50 text-center hover:bg-blue-50/40 hover:-translate-y-0.5 transition-all group shadow-xs"
              >
                <div className="text-sm font-bold text-slate-900 group-hover:text-[#2c98f6] transition-colors">
                  {tech.name}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-mono">
                  {tech.type}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
