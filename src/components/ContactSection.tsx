'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web & Mobil Uygulama',
    budget: '50.000 TL - 150.000 TL',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  return (
    <section id="iletisim" className="py-24 bg-[#080d19]/80 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#2c98f6]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2c98f6]/10 border border-[#2c98f6]/30 text-[#2c98f6] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>İletişime Geçin</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Bir Sonraki Büyük Projenizi{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c98f6] to-cyan-400">
                Birlikte Başlatalım.
              </span>
            </h2>
            <p className="mt-4 text-slate-300 text-base leading-relaxed">
              Yazılım, yapay zeka ve bulut çözümleriyle ilgili ihtiyaçlarınızı bize iletin; size özel teknik analiz ve teklifimizi 24 saat içinde sunalım.
            </p>

            <div className="mt-8 space-y-4">
              <a 
                href="mailto:info@masavtech.com" 
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-[#2c98f6]/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#2c98f6]/10 border border-[#2c98f6]/30 flex items-center justify-center text-[#2c98f6] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Doğrudan E-Posta</div>
                  <div className="text-sm font-semibold text-white">info@masavtech.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Merkez & Operasyon</div>
                  <div className="text-sm font-semibold text-white">İstanbul / Türkiye</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-8 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mesajınız Başarıyla Alındı!</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Talebinizi aldık. Ekibimiz projenizi inceleyip en kısa sürede sizinle iletişime geçecektir.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
                >
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">Hızlı Proje & Teklif Formu</h3>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Adınız Soyadınız / Firma
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Örn: Ahmet Yılmaz / Masav A.Ş."
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#2c98f6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    E-Posta Adresiniz
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="ahmet@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#2c98f6]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Proje Türü
                    </label>
                    <select 
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#2c98f6]"
                    >
                      <option>Web & Mobil Uygulama</option>
                      <option>Yapay Zeka / LLM Entegrasyonu</option>
                      <option>SaaS Ürün Geliştirme</option>
                      <option>Bulut / DevOps & Sunucu</option>
                      <option>Kursum / Özel Entegrasyon</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Tahmini Bütçe
                    </label>
                    <select 
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#2c98f6]"
                    >
                      <option>25.000 TL - 50.000 TL</option>
                      <option>50.000 TL - 150.000 TL</option>
                      <option>150.000 TL - 300.000 TL</option>
                      <option>300.000 TL + (Kurumsal)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Proje Özeti & Beklentileriniz
                  </label>
                  <textarea 
                    rows={3}
                    required
                    placeholder="Projenizden ve hedeflerinizden kısaca bahsedin..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#2c98f6] resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#2c98f6] to-blue-600 hover:from-blue-500 hover:to-blue-700 shadow-xl shadow-[#2c98f6]/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Teklif Talebini Gönder</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}