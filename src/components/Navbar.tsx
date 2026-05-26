import React, { useState, useEffect } from 'react';
import { Droplet, Phone, MessageSquare, Menu, X, Clock } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_PHONE } from '../data';

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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-blue-50 py-3' 
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      {/* Mini Top Banner for Live Status */}
      <div id="top-status-bar" className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white text-xs py-1 px-4 mb-2 -mt-3 hidden sm:flex justify-between items-center font-sans tracking-wide">
        <div className="flex items-center gap-1.5 font-medium">
          <Clock size={13} className="animate-pulse text-cyan-200" />
          <span>Operational Hours: Mon - Sun (7:00 AM - 6:00 PM)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold text-emerald-100">Trucks active today across Harare & surrounding areas</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            id="logo-brand-anchor"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-blue-200/50 group-hover:scale-105 transition-transform">
              <Droplet size={22} className="fill-white animate-float-slow" />
            </div>
            <div>
              <span className="text-xl font-display font-bold tracking-tight text-blue-950 block leading-tight">
                Chiko <span className="text-cyan-500">Water</span>
              </span>
              <span className="text-[10px] font-sans text-slate-500 block -mt-0.5 uppercase tracking-widest font-bold">
                Delivery Zimbabwe
              </span>
            </div>
          </a>

          {/* Desktop Navigation Link Menu */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav-menu">
            <a 
              href="#services" 
              onClick={(e) => handleLinkClick(e, 'services')}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleLinkClick(e, 'about')}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              About Us
            </a>
            <a 
              href="#calculator" 
              onClick={(e) => handleLinkClick(e, 'calculator')}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Water Calculator
            </a>
            <a 
              href="#why-choose-us" 
              onClick={(e) => handleLinkClick(e, 'why-choose-us')}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Why Choose Us
            </a>
            <a 
              href="#coverage" 
              onClick={(e) => handleLinkClick(e, 'coverage')}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Locations
            </a>
            <a 
              href="#faq" 
              onClick={(e) => handleLinkClick(e, 'faq')}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              FAQs
            </a>
          </nav>

          {/* Desktop Right CTA Options */}
          <div className="hidden md:flex items-center gap-4" id="desktop-nav-cta">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors py-2 px-1"
            >
              <Phone size={15} className="text-blue-600" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <a 
              href={`https://wa.me/${WHATSAPP_PHONE}?text=Hi%20Chiko%20Water%20Delivery,%20I%20would%20like%20to%20order%20bulk%20water.`}
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-md shadow-emerald-200"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Order</span>
            </a>
          </div>

          {/* Mobile Menu Action Button */}
          <button 
            id="mobile-menu-trigger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-50 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md shadow-xl border-b border-slate-100 py-6 px-6 flex flex-col gap-5 animate-fade-in">
          <a 
            href="#services" 
            onClick={(e) => handleLinkClick(e, 'services')}
            className="text-base font-semibold text-slate-800 hover:text-blue-600 py-1 transition-colors border-b border-slate-50"
          >
            Our Services
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleLinkClick(e, 'about')}
            className="text-base font-semibold text-slate-800 hover:text-blue-600 py-1 transition-colors border-b border-slate-50"
          >
            About Chiko Water
          </a>
          <a 
            href="#calculator" 
            onClick={(e) => handleLinkClick(e, 'calculator')}
            className="text-base font-semibold text-slate-800 hover:text-blue-600 py-1 transition-colors border-b border-slate-50"
          >
            Water Requirement Calculator
          </a>
          <a 
            href="#why-choose-us" 
            onClick={(e) => handleLinkClick(e, 'why-choose-us')}
            className="text-base font-semibold text-slate-800 hover:text-blue-600 py-1 transition-colors border-b border-slate-50"
          >
            Why Choose Us
          </a>
          <a 
            href="#coverage" 
            onClick={(e) => handleLinkClick(e, 'coverage')}
            className="text-base font-semibold text-slate-800 hover:text-blue-600 py-1 transition-colors border-b border-slate-50"
          >
            Coverage Zones
          </a>
          <a 
            href="#faq" 
            onClick={(e) => handleLinkClick(e, 'faq')}
            className="text-base font-semibold text-slate-800 hover:text-blue-600 py-1 transition-colors border-b border-slate-50"
          >
            Common FAQs
          </a>
          
          <div className="flex flex-col gap-3 pt-2">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} 
              className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 rounded-xl transition-all"
            >
              <Phone size={18} className="text-blue-600 animate-bounce" />
              <span>Call Direct: {PHONE_NUMBER}</span>
            </a>
            <a 
              href={`https://wa.me/${WHATSAPP_PHONE}?text=Hi%20Chiko%20Water,%20I'd%20like%20to%20order%20bulk%20water.%20Please%20advise%20on%20availability.`}
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-all shadow-md"
            >
              <MessageSquare size={18} />
              <span>Order via WhatsApp</span>
            </a>
          </div>

          <div className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span>Emergency Services Running 24/7</span>
          </div>
        </div>
      )}
    </header>
  );
}
