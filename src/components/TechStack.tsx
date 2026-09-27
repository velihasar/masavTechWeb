'use client';

import React from 'react';

export default function TechStack() {
  const stacks = [
    { name: 'Next.js 15 / React 19', type: 'Frontend & SSR' },
    { name: 'TypeScript', type: 'Type Safety' },
    { name: 'Tailwind CSS', type: 'Modern UI' },
    { name: 'Node.js / Express', type: 'Backend Engine' },
    { name: 'PostgreSQL & Redis', type: 'High Perf Data' },
    { name: 'Docker & Coolify', type: 'Cloud Deployment' },
    { name: 'Cloudflare', type: 'Edge Network & Security' },
    { name: 'Python & AI Frameworks', type: 'Machine Learning' }
  ];

  return (
    <section id="teknolojiler" className="py-20 border-y border-slate-800/80 bg-[#060a14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-[#2c98f6] font-bold mb-2">
            Gücümüzü En İyi Teknolojilerden Alıyoruz
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Modern & Endüstri Standardı Teknoloji Yığınımız
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stacks.map((tech, index) => (
            <div 
              key={index}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-[#2c98f6]/40 text-center hover:bg-slate-900/80 transition-all group"
            >
              <div className="text-sm font-bold text-white group-hover:text-[#2c98f6] transition-colors">
                {tech.name}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-mono">
                {tech.type}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}