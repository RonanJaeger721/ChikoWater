import { Droplet, MapPin, Phone, MessageSquare, ArrowUp, Zap } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_PHONE } from '../data';

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (targetId: string) => {
    const element = document.getElementById(targetId);
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
    <footer className="bg-slate-900 text-slate-400 relative overflow-hidden" id="main-footer">
      
      {/* Decorative Wave Divider at the top of the footer */}
      <div className="absolute top-0 left-0 right-0 h-10 overflow-hidden pointer-events-none z-10 bg-transparent">
        <svg className="absolute top-0 w-[200%] h-full text-white fill-current translate-x-0 animate-wave-slow rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,20 500,70 C650,120 850,20 1000,80 C1150,140 1350,30 1500,80 C1650,130 1850,20 2000,90 L2000,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-16 border-b border-slate-800 pb-16">
          
          {/* Col 1: Brand & Message (5 layout spans) */}
          <div className="lg:col-span-5 space-y-6" id="footer-branding-block">
            <div className="flex items-center gap-2.5">
              <div id="footer-droplet-logo" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <Droplet size={20} className="fill-white" />
              </div>
              <div>
                <span className="text-xl font-display font-bold text-white block">
                  Chiko <span className="text-blue-400">Water</span>
                </span>
                <span className="text-[10px] text-slate-500 block uppercase tracking-wide">
                  Reliable Bulk Carriage Zimbabwe
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-450 text-slate-400 leading-relaxed font-sans">
              Clean, reliable, and convenient bulk water delivery service across Harare and surroundings. We serve families, offices, wedding events, and construction sites to ensure constant sanitary security.
            </p>

            <div className="bg-slate-850 bg-slate-800/60 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
              <Zap size={18} className="text-blue-450 text-blue-400 flex-shrink-0 animate-pulse" />
              <div className="text-[11px] text-slate-300">
                <span className="font-bold block text-white">Operational Standby Active</span>
                Drivers available for priority emergency hospital or factory dispatch 24/7.
              </div>
            </div>
          </div>

          {/* Col 2: Services Quick Links (3 layout spans) */}
          <div className="lg:col-span-3 space-y-4" id="footer-services-menu">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Our Services</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['Bulk Water Delivery', 'Water Tank Refills', 'Construction Site Water Supply', 'Residential Water Supply', 'Commercial Water Delivery', 'Emergency Water Delivery'].map((item, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => handleNavClick('services')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company Navigation & Coordinates (4 layout spans) */}
          <div className="lg:col-span-4 space-y-4" id="footer-nav-coordinates">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Official Coordinates</h3>
            
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  Chiko Water Delivery, Harare Metropolitan and surrounding districts, Zimbabwe
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="hover:text-white transition-colors font-bold text-white">
                    Call: {PHONE_NUMBER}
                  </a>
                  <a href={`https://wa.me/${WHATSAPP_PHONE}`} target="_blank" rel="noreferrer" referrerPolicy="no-referrer" className="hover:text-emerald-450 text-emerald-400 transition-colors font-bold">
                    WhatsApp: {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-slate-500">Active hours:</span>
                <span className="text-slate-350 font-bold text-slate-200">Monday - Sunday (7:00 AM - 6:00 PM)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs" id="footer-legal-copyright">
          
          <div className="flex items-center gap-1.5 font-sans" id="copyright-stamp">
            <span>&copy; {new Date().getFullYear()} Chiko Water Delivery. All rights reserved.</span>
            <span>•</span>
            <span className="font-semibold text-slate-300">Zimbabwe Water Compliance Registered</span>
          </div>

          <button 
            id="back-to-top-footer-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 hover:text-white transition-all text-slate-300 cursor-pointer text-xs"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>

        </div>

      </div>
    </footer>
  );
}
