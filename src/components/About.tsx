import { Award, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background soft styling details */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-100/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Narrative Pitch */}
          <div className="lg:col-span-6 space-y-6" id="about-text-container">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-950 tracking-tight">
                Dedicated to Reliable & Clean Bulk Water Supply
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              At <strong>Chiko Water Delivery</strong>, we understand that water is life, business continuation, and sanitary security. We have built our reputation across Zimbabwe as a fully dependable, convenient, and highly efficient bulk water carrier.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Whether you are suffering borehole pump failures in your residential area, require continuous water for heavy compaction at construction sites, or manage a busy hospital, our modern fleet is engineered to handle your needs on short notice with unparalleled speed.
            </p>

            {/* Feature lists with checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2" id="about-checklist">
              <div className="flex items-start gap-2.5">
                <CheckCircle size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-blue-950">Eco-Friendly Sourcing</h4>
                  <p className="text-[11px] text-slate-500 leading-snug">Sourced responsibly from certified, high-yield municipal boreholes.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-blue-950">Sealed Safe Tankers</h4>
                  <p className="text-[11px] text-slate-500 leading-snug">Rigid stainless steel storage to avoid external rust or contamination.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-blue-950">Fast Pump Speeds</h4>
                  <p className="text-[11px] text-slate-500 leading-snug">Discharging 5,000L in under 15 minutes with high-pressure machinery.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-blue-950">EcoCash & ZIPIT Accepted</h4>
                  <p className="text-[11px] text-slate-500 leading-snug">Smooth digital local transactions keeping billing stress-free.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Values Board Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6" id="about-values-grid">
            
            {/* Value 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border border-blue-100/50 space-y-3 shadow-md shadow-blue-900/[0.01]">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                <Sparkles size={18} />
              </div>
              <h3 className="text-sm font-bold text-blue-950 uppercase tracking-wider">Unmatched Convenience</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Skip the lines. Send a quick voice note or text on WhatsApp, choose your location and preferred schedule, and we handle the rest. No hassle, no delays.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-3xl border border-cyan-100/50 space-y-3 shadow-md shadow-cyan-900/[0.01]">
              <div className="w-10 h-10 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                <Award size={18} />
              </div>
              <h3 className="text-sm font-bold text-blue-950 uppercase tracking-wider">Customer Centric</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your satisfaction is our primary benchmark. Our vetted delivery crews handle your property carefully and treat families and office teams with dignity.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gradient-to-br from-indigo-50/70 to-white p-6 rounded-3xl border border-indigo-100/50 space-y-3 col-span-1 sm:col-span-2 shadow-md shadow-indigo-900/[0.01]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-150/80 bg-blue-100 flex items-center justify-center text-indigo-600">
                  <ShieldAlert size={18} />
                </div>
                <h3 className="text-sm font-bold text-blue-950 uppercase tracking-wider">Quality Safeguard Assurance</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We periodically perform strict microbial and chemical analyses on our partner borehole sources to ensure water falls below standard WHO and local EMA limits. Trust Chiko for high hygiene performance.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
