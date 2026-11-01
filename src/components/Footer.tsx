'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-600 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-200">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block -my-2">
              <img
                src="/logo.png"
                alt="MasavTech - Software & App Solutions"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Kurumsal web yönetim panelleri, iOS & Android mobil uygulamalar ve yenilikçi SaaS ürünleriyle kurumların dijital dönüşümünü inşa ediyoruz.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Ürünlerimiz
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/urunler#kursum" className="hover:text-[#2c98f6] transition-colors">
                  Kursum — Eğitim Yönetim Sistemi
                </Link>
              </li>
              <li>
                <Link href="/urunler#sinavim" className="hover:text-[#2c98f6] transition-colors">
                  Sınavım — Tüm Sınavlarla Uyumlu Asistan
                </Link>
              </li>
              <li>
                <Link href="/urunler#cuzdanim" className="hover:text-[#2c98f6] transition-colors">
                  Cüzdanım — Varlık & Bütçe Takibi
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Kurumsal
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#2c98f6] transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="hover:text-[#2c98f6] transition-colors">
                  Ürünlerimiz
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="hover:text-[#2c98f6] transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/surec" className="hover:text-[#2c98f6] transition-colors">
                  Nasıl Çalışırız?
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-[#2c98f6] transition-colors">
                  İletişim & Teklif Alın
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} MasavTech Yazılım & Teknoloji A.Ş. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
