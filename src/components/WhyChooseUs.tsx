import { Clock, Truck, ShieldCheck, DollarSign, Users, Calendar, Heart } from 'lucide-react';

export default function WhyChooseUs() {
  const values = [
    {
      icon: <Clock size={20} className="text-blue-600" />,
      title: 'Fast Response Times',
      desc: 'Our dispatch desks work round-the-clock. Once you approve on WhatsApp, trucks are rolled out to meet tight deadlines.'
    },
    {
      icon: <Truck size={20} className="text-cyan-600" />,
      title: 'Reliable Delivery Service',
      desc: 'No ghosting. We specify a precise ETA window and keep you updated throughout the delivery route.'
    },
    {
      icon: <ShieldCheck size={20} className="text-emerald-600" />,
      title: 'Clean Water Supply',
      desc: 'We fetch raw water strictly from EMA tested certified sources. Our steel storage tanks undergo routine sanitation.'
    },
    {
      icon: <DollarSign size={20} className="text-slate-700" />,
      title: 'Affordable Pricing',
      desc: 'We offer highly competitive bulk billing with clear quotes. No hidden fees or sudden post-trip surprise surcharges.'
    },
    {
      icon: <Users size={20} className="text-indigo-600" />,
      title: 'Residential & Commercial',
      desc: 'Equipped to service small suburban homes with single tanks up to huge school reservoirs and industrial processing blocks.'
    },
    {
      icon: <Calendar size={20} className="text-sky-600" />,
      title: 'Flexible Scheduling',
      desc: 'Choose weekend morning runs, monthly recurring subscriptions, or emergency midnight arrivals. We adjust to you.'
    },
    {
      icon: <Heart size={20} className="text-red-500 fill-red-100" />,
      title: 'Trusted Local Service',
      desc: '100% Zimbabwean owned and operated. We know local community terrains, locations, and water specifications intimately.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-gradient-to-b from-blue-50/20 via-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid with Stats Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block">
              Our Professional Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-950 tracking-tight">
              Why Corporate Complexes & Suburban Homes Turn to Chiko
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
              We leverage modern logistics, hygiene compliance, and instant communication to raise the bar for bulk water carriage standard in Zimbabwe.
            </p>
          </div>
        </div>

        {/* Feature Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="why-choose-us-grid">
          {values.map((val, idx) => (
            <div 
              key={idx} 
              id={`why-choose-card-${idx}`}
              className="bg-white rounded-2xl p-6 border border-slate-100/50 hover:border-blue-100/60 shadow-md shadow-blue-900/[0.01] hover:shadow-lg hover:shadow-blue-900/[0.03] transition-all flex flex-col gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-50 transition-all">
                {val.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-blue-950 tracking-tight group-hover:text-blue-600 transition-colors">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Quick Contact Block in the unused grid cell */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 text-white flex flex-col justify-between" id="why-us-ctablock">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-mono font-black tracking-widest text-cyan-200">
                ACTIVE QUEUE
              </span>
              <h3 className="text-base font-display font-bold leading-tight">
                Need a Driver Dispatched Immediately?
              </h3>
              <p className="text-xs opacity-90 leading-relaxed">
                Send a quick WhatsApp with your coordinates and tank capacity to jump the standard queue.
              </p>
            </div>
            
            <a 
              href={`https://wa.me/263772228029?text=Hi%20Chiko%20Water,%20I'd%20like%20to%20place%20an%20urgent%20priority%20water%20order.%20Please%20prioritize%20payment%20instructions.`}
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="mt-4 bg-white hover:bg-slate-50 text-blue-700 font-bold text-xs py-2.5 px-4 rounded-xl text-center shadow-lg shadow-blue-900/15 hover:scale-[1.02] transition-transform flex items-center justify-center gap-1"
            >
              <span>Instant Dispatch Queue</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
