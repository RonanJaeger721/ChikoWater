import { Award, Zap, ShieldCheck, HelpCircle } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      icon: <Award className="text-blue-500" size={28} />,
      value: '15M+',
      label: 'Litres Delivered',
      description: 'Serving Zimbabweans with pride'
    },
    {
      icon: <Zap className="text-cyan-500 animate-pulse" size={28} />,
      value: '< 2 Hrs',
      label: 'Average Dispatch',
      description: 'Rapid emergency water response'
    },
    {
      icon: <ShieldCheck className="text-emerald-500" size={28} />,
      value: '100%',
      label: 'Tested Pure',
      description: 'Certified clean borehole source'
    },
    {
      icon: <HelpCircle className="text-indigo-500" size={28} />,
      value: '24/7',
      label: 'Express Booking',
      description: 'Active WhatsApp Support'
    }
  ];

  return (
    <div className="relative -mt-8 px-4 sm:px-6 lg:px-8 z-20" id="trust-stats-bar">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-900/5 border border-blue-50">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-slate-100">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-4 pt-6 first:pt-0 lg:pt-0 lg:px-6 first:pl-0`}
              id={`stat-block-${i}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100/50">
                {stat.icon}
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-blue-950 tracking-tight leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
