'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#070b14]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
              <div className="w-full h-full bg-[#090e1a] rounded-[11px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center">
                MASAV<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">TECH</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium -mt-1">
                Technology Solutions
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-5 py-1.5 backdrop-blur-md">
            <a href="#hizmetler" className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Hizmetler
            </a>
            <a href="#urunler" className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Ürünlerimiz
            </a>
            <a href="#teknolojiler" className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Teknolojiler
            </a>
            <a href="#surec" className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Nasıl Çalışırız?
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#iletisim"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Teklif Alın</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pt-2 pb-6 bg-[#090e1a]/95 backdrop-blur-xl border-b border-slate-800 space-y-3">
          <a 
            href="#hizmetler" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Hizmetler
          </a>
          <a 
            href="#urunler" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Ürünlerimiz
          </a>
          <a 
            href="#teknolojiler" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Teknolojiler
          </a>
          <a 
            href="#surec" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Nasıl Çalışırız?
          </a>
          <div className="pt-2">
            <a 
              href="#iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30"
            >
              <span>Teklif Alın / İletişim</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}