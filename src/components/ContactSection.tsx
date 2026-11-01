'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Mesaj gönderilemedi.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : 'Mesaj gönderilirken bir hata oluştu.';
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="iletisim"
      className="pt-32 pb-24 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#2c98f6]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Bir Sonraki Büyük Projenizi{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c98f6] to-cyan-500">
                  Birlikte Başlatalım.
                </span>
              </h1>
              <p className="mt-4 text-slate-600 text-base leading-relaxed">
                Kurumunuza özel web yönetim panelleri, mobil uygulama projeleriniz veya kurumsal yazılım çözümlerimiz hakkında bilgi ve demo taleplerinizi bize iletin; en kısa sürede dönüş yapalım.
              </p>

              <div className="mt-8">
                <a
                  href="mailto:info@masavtech.com"
                  className="inline-flex items-center gap-4 p-4 pr-8 rounded-xl bg-white border border-slate-200 hover:border-[#2c98f6]/50 shadow-xs transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2c98f6] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Doğrudan E-Posta</div>
                    <div className="text-sm font-semibold text-slate-900">info@masavtech.com</div>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/70 relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Mesajınız Başarıyla Gönderildi!</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Talebiniz doğrudan ekibimize ulaştı. Mesajınızı inceleyip en kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">İletişim & Proje Formu</h3>

                  {errorMsg && (
                    <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Adınız Soyadınız / Kurum Adı
                    </label>
                    <input
                      type="text"
                      required
                      disabled={loading}
                      placeholder="Örn: Ahmet Yılmaz / Masav A.Ş."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#2c98f6] focus:bg-white transition-colors disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      E-Posta Adresiniz
                    </label>
                    <input
                      type="email"
                      required
                      disabled={loading}
                      placeholder="ahmet@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#2c98f6] focus:bg-white transition-colors disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Proje Özeti & Mesajınız
                    </label>
                    <textarea
                      rows={4}
                      required
                      disabled={loading}
                      placeholder="Yeni projenizden veya kurumunuzun ihtiyaçlarından kısaca bahsedin..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#2c98f6] focus:bg-white transition-colors resize-none disabled:opacity-60"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#2c98f6] to-blue-600 hover:from-blue-500 hover:to-blue-700 shadow-lg shadow-[#2c98f6]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Gönderiliyor...</span>
                      </>
                    ) : (
                      <>
                        <span>Mesajı Gönder</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
