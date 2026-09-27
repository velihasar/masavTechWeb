import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import Process from '@/components/Process';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col">
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <TechStack />
      <Process />
      <ContactSection />
      <Footer />
    </main>
  );
}