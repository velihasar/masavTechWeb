'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800/60">
          
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#2c98f6] to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#090e1a] rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#2c98f6]" />
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                MASAV<span className="text-[#2c98f6]">TECH</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Yapay zeka, modern web mimarileri, bulut altyapıları ve yenilikçi SaaS ekosistemiyle kurumların dijital geleceğini tasarlıyoruz.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Ürünlerimiz</div>
            <ul className="space-y-2 text-xs">
              <li><a href="https://kursum.masavtech.com" className="hover:text-[#2c98f6] transition-colors">Kursum</a></li>
              <li><a href="#urunler" className="hover:text-[#2c98f6] transition-colors">Sınavım</a></li>
              <li><a href="#urunler" className="hover:text-[#2c98f6] transition-colors">Cüzdanım</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Hızlı Erişim</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#hizmetler" className="hover:text-[#2c98f6] transition-colors">Hizmetlerimiz</a></li>
              <li><a href="#teknolojiler" className="hover:text-[#2c98f6] transition-colors">Teknolojiler</a></li>
              <li><a href="#surec" className="hover:text-[#2c98f6] transition-colors">Çalışma Süreci</a></li>
              <li><a href="#iletisim" className="hover:text-[#2c98f6] transition-colors">Teklif Alın</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Masavtech Teknoloji A.Ş. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Yüksek performans ile inşa edildi</span>
          </div>
        </div>

      </div>
    </footer>
  );
}