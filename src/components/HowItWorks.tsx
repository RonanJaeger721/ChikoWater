import { MessageSquare, Calendar, Truck, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      icon: <MessageSquare size={22} className="text-blue-600" />,
      title: 'Contact Us',
      subtitle: 'Send specifications or dial in',
      desc: 'Reach out through WhatsApp or phone with your water requirements. Highlight volume constraints or access difficulties.'
    },
    {
      step: '02',
      icon: <Calendar size={22} className="text-cyan-600" />,
      title: 'Schedule Delivery',
      subtitle: 'Pick coordinates & timing',
      desc: 'Choose your preferred delivery time and location. Receive a quotation and confirming driver slot immediately.'
    },
    {
      step: '03',
      icon: <Truck size={22} className="text-emerald-600 animate-bounce" />,
      title: 'Receive Your Water',
      subtitle: 'Pumping & tank inspection',
      desc: 'Reliable bulk water delivered directly to your location. Our drivers safely hook up hoses to refill your storage.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block">
            Simplifying Onboarding
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-950 tracking-tight">
            Our 3-Step Seamless Refilling Process
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans">
            We have stripped away complex forms and bureaucratic friction so you can secure bulk water in under 3 minutes.
          </p>
        </div>

        {/* Steps diagram container */}
        <div className="relative" id="steps-diagram-container">
          
          {/* Connecting dashed line in background (desktop only) */}
          <div className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-[2px] bg-dashed bg-slate-200 -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16">
            {steps.map((item, idx) => (
              <div 
                key={idx} 
                id={`step-card-${idx}`}
                className="relative bg-gradient-to-br from-slate-50 to-white hover:from-blue-50/30 hover:to-white p-8 rounded-3xl border border-slate-100 hover:border-blue-100 shadow-md shadow-blue-900/[0.01] transition-all flex flex-col items-center text-center group"
              >
                
                {/* Floating Big Index Number */}
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl font-display font-black text-slate-100 group-hover:text-blue-100 select-none transition-colors">
                  {item.step}
                </span>

                {/* Styled Center Icon */}
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg shadow-blue-900/5 border border-slate-100 group-hover:border-blue-200 hover:scale-105 transition-all relative z-10 mb-6">
                  {item.icon}
                </div>

                {/* Text Blocks */}
                <div className="space-y-3">
                  <span className="text-[10px] uppercase font-bold text-blue-500 tracking-wider">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-display font-bold text-blue-950">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                {/* Tiny arrow indicator for next items */}
                {idx < 2 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-8 -translate-y-12 text-slate-300 group-hover:text-blue-500 transition-colors">
                    <ArrowRight size={22} className="animate-pulse" />
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
