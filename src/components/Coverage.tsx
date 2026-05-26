import { MapPin, CheckCircle, Flame, ShieldAlert } from 'lucide-react';
import { COVERAGE_AREAS } from '../data';

export default function Coverage() {
  const settingsSought = [
    { title: 'Suburban Homes', role: 'Backup wells & daily domestic refills' },
    { title: 'Flats & Apartments', role: 'Multi-unit high storage sumps' },
    { title: 'Corporate Offices', role: 'Employee hygiene maintenance water' },
    { title: 'Construction Sites', role: 'Bricks, dust-control & concrete mixers' },
    { title: 'Schools & Colleges', role: 'Continuous student sanitation security' },
    { title: 'Concerts & Events', role: 'Bulk mobile water systems & tankers' },
    { title: 'Retail Businesses', role: 'Malls, restaurants & industrial offices' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Active Dispatch</span>
          </span>
        );
      case 'high-demand':
        return (
          <span className="flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <span>High Demand</span>
          </span>
        );
      case 'scheduled':
        return (
          <span className="flex items-center gap-1 text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span>Scheduled Routes</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="coverage" className="py-24 bg-gradient-to-b from-white via-slate-50/70 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Grid */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block">
            Where We Deliver
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-950 tracking-tight">
            Comprehensive Services Across Key Sectors & Districts
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans">
            We provide prompt dispatch across key sectors, maintaining a standby fleet equipped for Harare, Chitungwiza, Ruwa, Norton, and surrounding locations.
          </p>
        </div>

        {/* Outer twin layout container: Left=Sectors Slabs, Right=District Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Sectors Served (Houses, flats, construction sites etc) */}
          <div className="lg:col-span-5 space-y-6" id="sectors-showcase-container">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 space-y-6 shadow-md shadow-blue-900/[0.01]">
              <h3 className="text-lg font-display font-bold text-blue-950 flex items-center gap-2">
                <CheckCircle size={20} className="text-blue-600" />
                <span>Water Supply Destinations</span>
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                Our tankers carry customized connector rings, variable adapter nozzles, and heavy high-pressure pumps to reach any venue reliably.
              </p>

              <div className="space-y-3.5" id="sectors-vertical-list">
                {settingsSought.map((set, idx) => (
                  <div 
                    key={idx} 
                    id={`sector-item-${idx}`}
                    className="flex justify-between items-center bg-slate-50 hover:bg-blue-50/30 p-3 rounded-2xl border border-slate-100/30 group transition-all"
                  >
                    <div>
                      <span className="block text-xs font-bold text-blue-950 group-hover:text-blue-600 transition-colors">
                        {set.title}
                      </span>
                      <span className="block text-[10px] text-slate-400 mt-0.5">
                        {set.role}
                      </span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-all"></span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Dynamic District Dispatch Grid */}
          <div className="lg:col-span-7 space-y-6" id="districts-active-matrix">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 space-y-6 shadow-md shadow-blue-900/[0.01]">
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-lg font-display font-bold text-blue-950 flex items-center gap-2">
                    <MapPin size={20} className="text-cyan-600" />
                    <span>Active Zimbabwe Billing Districts</span>
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5 font-bold">
                    *Rerouting active trucks to cover dry wells daily
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Live Operations Active</span>
                </div>
              </div>

              {/* Districts Horizontal Cards map */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="coverage-districts-grid">
                {COVERAGE_AREAS.map((dist, idx) => (
                  <div 
                    key={idx} 
                    id={`district-card-${idx}`}
                    className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 p-4 rounded-2xl transition-all flex flex-col justify-between gap-3 group"
                  >
                    <div className="space-y-1">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-xs font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {dist.name}
                        </h4>
                      </div>
                      <p className="text-[10px] text-slate-400">
                        Top Demand: <span className="font-bold text-slate-600">{dist.popularFor}</span>
                      </p>
                    </div>

                    <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-100/30">
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] text-slate-400">Dispatch Time:</span>
                        <span className="font-mono text-[11px] font-bold text-slate-700">{dist.deliveryTime}</span>
                      </div>
                      {getStatusBadge(dist.status)}
                    </div>

                  </div>
                ))}
              </div>

              {/* Outside Zimbabwe Warning */}
              <div className="bg-cyan-50/50 rounded-2xl p-4 border border-cyan-100/30 flex items-start gap-3">
                <ShieldAlert size={18} className="text-cyan-600 mt-0.5 flex-shrink-0" />
                <div className="text-[11px] text-cyan-900 leading-normal">
                  <span className="font-bold block mb-0.5 border-b border-cyan-100/50 pb-0.5">Requesting out-of-boundary delivery?</span>
                  If your commercial site or farm is situated outside our listed Harare/Zimbabwe metropolitan limits, please contact us on WhatsApp directly for fuel adjustment factors and specialized scheduler reservations.
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
