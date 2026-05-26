import { useState, useEffect } from 'react';
import { MessageSquare, Phone, Droplet, ArrowUpCircle } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_PHONE } from './data';

// Import sub components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import About from './components/About';
import WaterCalculator from './components/WaterCalculator';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Coverage from './components/Coverage';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('bulk-delivery');
  const [showFloatingCta, setShowFloatingCta] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA once the user has scrolled past the hero section
      setShowFloatingCta(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
  };

  const handleScrollToForm = () => {
    const element = document.getElementById('order-form');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] flex flex-col text-slate-800 antialiased font-sans">
      
      {/* 1. Navigation Header */}
      <Navbar />

      {/* Main Main Content Container */}
      <main className="flex-grow">
        
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Core Stats Metrics Bar */}
        <StatsBar />

        {/* 4. Service Selection Grid */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Fluid Interactive Calculator */}
        <WaterCalculator />

        {/* 6. Brand Story & Values Block */}
        <About />

        {/* 7. Strategic Values Panel */}
        <WhyChooseUs />

        {/* 8. Simple Step Flow diagram */}
        <HowItWorks />

        {/* 9. Districts Coverage zone */}
        <Coverage />

        {/* 10. Verified Review quotes */}
        <Testimonials />

        {/* 11. Custom expandable FAQs */}
        <FAQ />

        {/* 12. Complete CTA & Multi-Inquiry Booking card */}
        <OrderForm 
          selectedServiceId={selectedServiceId} 
          onServiceChange={handleSelectService} 
        />

      </main>

      {/* 13. Dynamic Wave Shape footer */}
      <Footer />

      {/* ========================================== */}
      {/* FLOATING & STICKY CONVERSION CTAS */}
      {/* ========================================== */}

      {/* A. Desktop Floating Action Quick Links (Bottom Right) */}
      {showFloatingCta && (
        <div 
          id="desktop-floating-cta-panel"
          className="hidden md:flex flex-col gap-3 fixed bottom-8 right-8 z-40 animate-bounce"
        >
          {/* Quick Order button */}
          <button
            onClick={handleScrollToForm}
            className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 hover:scale-110 active:scale-95 transition-all group"
            title="Book Water Now"
          >
            <Droplet size={20} className="fill-white group-hover:animate-ping" />
          </button>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=Hi%20Chiko%20Water,%20I'd%20like%20to%20order%20quick%20bulk%20water.%20Please%20verify%20active%20truck%20schedules.`}
            target="_blank"
            rel="noreferrer"
            referrerPolicy="no-referrer"
            className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all"
            title="WhatsApp Quick chat"
          >
            <MessageSquare size={20} />
          </a>
        </div>
      )}

      {/* B. Mobile Sticky Horizontal Bar (Always visible at very bottom of screen on smaller viewports) */}
      <div 
        id="mobile-sticky-quick-action-bar"
        className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-100 py-3 px-4 grid grid-cols-2 gap-3 z-40 shadow-2xl"
      >
        <a
          href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-850 text-white py-3 px-2 rounded-xl text-xs font-bold leading-none shadow-md"
        >
          <Phone size={14} className="animate-bounce" />
          <span>Call: {PHONE_NUMBER}</span>
        </a>

        <a
          href={`https://wa.me/${WHATSAPP_PHONE}?text=Hi%2520Chiko%2520Water%2520Delivery%252C%2520I%2520need%2520water%2520urgently.%2520Please%2520send%2520ETAs.`}
          target="_blank"
          rel="noreferrer"
          referrerPolicy="no-referrer"
          className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white py-3 px-2 rounded-xl text-xs font-bold leading-none shadow-md"
        >
          <MessageSquare size={14} />
          <span>WhatsApp Quick Inquiry</span>
        </a>
      </div>

    </div>
  );
}
