import { motion } from 'motion/react';
import { MessageSquare, PhoneCall, CheckCircle2, ShieldCheck, Droplet } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_PHONE } from '../data';
import chikoWaterTruck from '../assets/images/chiko_water_truck_1779781824838.png';

export default function Hero() {
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
    <section 
      id="home" 
      className="relative bg-gradient-to-b from-blue-50/70 via-white to-blue-50/30 overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Dynamic Water Gradient / Ripple Underlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-100/30 via-transparent to-transparent -z-10 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none animate-float-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 space-y-8" id="hero-pitch-container">
            
            {/* Trust Badging */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full text-blue-800 text-xs font-semibold"
            >
              <ShieldCheck size={14} className="text-blue-600" />
              <span>Zimbabwe-wide Reliable Bulk Water Partner</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-blue-950 tracking-tight leading-[1.1]"
              >
                Fast & Reliable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500">
                  Bulk Water Delivery
                </span> <br />
                Services
              </motion.h1>

              {/* Subheadline */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-sans"
              >
                Supplying clean bulk water for homes, businesses, construction sites, apartments, events, and storage tanks across Zimbabwe.
              </motion.p>
            </div>

            {/* Live Trust Bullet list */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1"
              id="hero-value-bullets"
            >
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 size={18} className="text-cyan-500 flex-shrink-0" />
                <span>100% Tested Hygienic Borehole Water</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 size={18} className="text-cyan-500 flex-shrink-0" />
                <span>Direct Home & Jojo Tank Hookup</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 size={18} className="text-cyan-500 flex-shrink-0" />
                <span>2-Hour Delivery Dispatch Priority</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 size={18} className="text-cyan-500 flex-shrink-0" />
                <span>Fair Pricing with USD & EcoCash</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
              id="hero-cta-buttons"
            >
              <button 
                id="hero-order-now-btn"
                onClick={handleScrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:scale-[1.02] active:scale-95 transition-all text-center cursor-pointer relative ripple-btn"
              >
                Order Water Now
              </button>

              <a 
                href={`https://wa.me/${WHATSAPP_PHONE}?text=Hi%20Chiko%20Water%20Delivery,%20I%20saw%20your%20website%20and%20need%20to%20order%20bulk%20water.`}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                id="hero-whatsapp-btn"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl shadow-xl shadow-emerald-100 hover:shadow-emerald-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                <span>WhatsApp Us</span>
              </a>

              <a 
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} 
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-bold text-sm tracking-wide py-2"
              >
                <PhoneCall size={17} className="animate-bounce" />
                <span>Or Dial: {PHONE_NUMBER}</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual element */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="hero-graphic-canvas">
            
            {/* Ambient Ripple/Waves decorative backplate */}
            <div className="absolute inset-0 bg-blue-100/40 rounded-[3rem] rotate-3 -z-20 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-[2.5rem] -rotate-2 -z-10"></div>
            
            {/* Floating absolute badges */}
            <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-blue-50 flex items-center gap-3 z-20 animate-float-slow">
              <div className="w-9 h-9 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                <Droplet size={20} className="fill-cyan-500" />
              </div>
              <div>
                <span className="block text-xs text-slate-500 font-medium">Borehole Certificate</span>
                <span className="block text-xs font-bold text-slate-800">100% Tested Safe</span>
              </div>
            </div>

            <div className="absolute -bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-emerald-50 flex items-center gap-3 z-20">
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <div>
                <span className="block text-[10px] uppercase text-slate-500 font-bold tracking-wider">HARARE DISPATCH</span>
                <span className="block text-xs font-bold text-slate-800">2 Trucks on Route Map</span>
              </div>
            </div>

            {/* Generated Water Truck Image block */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl shadow-blue-900/10 z-10"
            >
              <img 
                src={chikoWaterTruck} 
                alt="Chiko Water Delivery Bulk Tanker Truck in Zimbabwe"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
              />
              {/* Overlay styling overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent pointer-events-none"></div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Decorative Wave Divider at the bottom of the section */}
      <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden pointer-events-none z-10">
        <svg className="absolute bottom-0 w-[200%] h-full text-white fill-current translate-x-0 animate-wave-slow" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,20 500,70 C650,120 850,20 1000,80 C1150,140 1350,30 1500,80 C1650,130 1850,20 2000,90 L2000,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
}
