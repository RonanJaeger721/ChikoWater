import { Truck, Database, HardHat, Home, Building2, Zap, ArrowRight } from 'lucide-react';
import { SERVICES, WHATSAPP_PHONE } from '../data';

interface ServicesProps {
  onSelectService: (id: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  
  const getIcon = (name: string) => {
    switch (name) {
      case 'Truck':
        return <Truck size={24} className="text-blue-600" />;
      case 'Database':
        return <Database size={24} className="text-cyan-600" />;
      case 'HardHat':
        return <HardHat size={24} className="text-amber-600" />;
      case 'Home':
        return <Home size={24} className="text-emerald-600" />;
      case 'Building2':
        return <Building2 size={24} className="text-indigo-600" />;
      case 'Zap':
        return <Zap size={24} className="text-rose-500 animate-pulse" />;
      default:
        return <Truck size={24} className="text-blue-600" />;
    }
  };

  const handleCardOrder = (id: string) => {
    onSelectService(id);
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
    <section id="services" className="py-24 bg-gradient-to-b from-blue-50/20 via-white to-blue-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-950 tracking-tight">
            High-Quality Bulk Water Solutions for All Settings
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans">
            We operate a versatile, modern fleet equipped to deliver clean water safely and pump it accurately into Jojo tanks, construction sites, and multi-storey commercial arrays.
          </p>
        </div>

        {/* Services Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-cards-grid">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              id={`service-card-${service.id}`}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 hover:border-blue-100 shadow-lg shadow-blue-950/[0.01] hover:shadow-xl hover:shadow-blue-900/[0.04] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                
                {/* Visual Icon Header & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                    {getIcon(service.lucideIconName)}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-blue-800 tracking-wider px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100/30">
                    {service.badge}
                  </span>
                </div>

                {/* Content Block */}
                <div className="space-y-3">
                  <h3 className="text-lg font-display font-bold text-blue-950 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans min-h-[64px]">
                    {service.description}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 border-t border-slate-50 pt-4">
                  <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wide block">
                    Service Includes
                  </span>
                  <ul className="space-y-1.5 font-sans text-xs text-slate-600">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Volume specs */}
                <div className="flex flex-wrap gap-1.5 items-center pt-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wide block mr-1">
                    Capacities:
                  </span>
                  {service.capacityOptions.map((cap, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                    >
                      {cap}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action and WhatsApp links */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-50">
                <button 
                  id={`service-order-${service.id}`}
                  onClick={() => handleCardOrder(service.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 rounded-xl hover:scale-[1.02] active:scale-95 transition-all text-center cursor-pointer flex items-center justify-center gap-1"
                >
                  <span>Order Now</span>
                  <ArrowRight size={12} />
                </button>
                
                <a 
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  id={`service-wa-${service.id}`}
                  className="bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-bold text-xs py-3 rounded-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-1 border border-slate-100/50"
                >
                  <span>Check Price</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Floating Background Sparkles/Gradients */}
        <div className="absolute bottom-10 right-10 w-44 h-44 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

      </div>
    </section>
  );
}
