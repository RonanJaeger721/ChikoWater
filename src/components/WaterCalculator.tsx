import React, { useState } from 'react';
import { Database, MapPin, Droplet, ArrowRight, MessageSquare, Flame } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data';

export default function WaterCalculator() {
  const [tankSize, setTankSize] = useState<number>(5000); // in Litres
  const [waterUsage, setWaterUsage] = useState<string>('Domestic / Drinking');
  const [location, setLocation] = useState<string>('Harare North (Borrowdale, Glen Lorne)');
  const [estimatedPriceFactor, setEstimatedPriceFactor] = useState<number>(1);

  // Popular presets
  const presets = [
    { label: 'Slimline Tank', value: 750, icon: '💧' },
    { label: 'Standard Jojo', value: 2500, icon: '🛢️' },
    { label: 'Large Jojo', value: 5000, icon: '🛢️' },
    { label: 'Double Jojo', value: 10000, icon: '🏰' },
    { label: 'Swimming Pool', value: 20000, icon: '🏊' }
  ];

  // Helper for computing tanker match
  const getTankerMatch = (litres: number) => {
    if (litres <= 2500) return 'Custom mini-tanker (ideal for narrow gates)';
    if (litres <= 5000) return '1x 5,000-Litre Standard Tanker';
    if (litres <= 10000) return '1x 10,000-Litre Heavy Duty Tanker';
    return `Multi-truck combination (${Math.ceil(litres / 10000)}x 10,000L tankers)`;
  };

  const handlesWhatsAppQuote = () => {
    const message = `Hi Chiko Water Delivery, I used your website calculator. I would like to book or get a final price for:
- Volume: ${tankSize.toLocaleString()} Litres
- Use-case: ${waterUsage}
- Delivery Location: ${location}
Please confirm availability and the nearest dispatch slot!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handlePresetSelect = (val: number) => {
    setTankSize(val);
  };

  // Compute filled percentage for wave graphic (max 25000 for pool)
  const percentFill = Math.min(100, Math.max(10, (tankSize / 20000) * 100));

  return (
    <section id="calculator" className="py-24 bg-white relative overflow-hidden border-t border-b border-blue-50/50">
      
      {/* Decorative top wave shape divider */}
      <div className="absolute top-0 left-0 right-0 h-10 overflow-hidden pointer-events-none z-10 opacity-70">
        <svg className="absolute top-0 w-[200%] h-full text-slate-50 fill-current translate-x-0 animate-wave-medium" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,20 500,70 C650,120 850,20 1000,80 C1150,140 1350,30 1500,80 C1650,130 1850,20 2000,90 L2000,120 L0,120 Z" transform="rotate(180 1000 60)"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Column */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block">
            Interactive Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-950 tracking-tight">
            Calculate Your Water Requirements
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans">
            Adjust the sliders to match your tank or pool size, select your location, and request a tailored delivery dispatch immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Config Controls */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-6 sm:p-10 rounded-3xl space-y-8" id="calc-controls-panel">
            
            {/* Presets Grid Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Presetted Tank Sizes to Quick-Select:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3" id="presets-button-grid">
                {presets.map((preset, idx) => (
                  <button
                    key={idx}
                    id={`preset-btn-${preset.value}`}
                    onClick={() => handlePresetSelect(preset.value)}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      tankSize === preset.value
                        ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200'
                        : 'bg-white border-slate-150 hover:border-blue-400 text-slate-800'
                    }`}
                  >
                    <span className="block text-lg mb-1">{preset.icon}</span>
                    <span className="block text-[11px] font-bold tracking-tight whitespace-nowrap">
                      {preset.label}
                    </span>
                    <span className="block text-[10px] opacity-80 font-semibold mt-0.5">
                      {preset.value.toLocaleString()}L
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Range Slider for Volume */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Custom Water Volume Requirement (Litres):
                </label>
                <div className="text-xl font-display font-extrabold text-blue-700 bg-blue-50 px-3 py-1 rounded-xl">
                  {tankSize.toLocaleString()} Litres
                </div>
              </div>

              <input
                type="range"
                min="500"
                max="25000"
                step="250"
                value={tankSize}
                onChange={(e) => setTankSize(Number(e.target.value))}
                className="w-full h-2.5 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
                id="volume-range-input"
              />

              <div className="flex justify-between text-[11px] font-bold text-slate-400">
                <span>500 Litres</span>
                <span>5,000L</span>
                <span>10,000L</span>
                <span>15,000L</span>
                <span>20,000L</span>
                <span>25,000L+</span>
              </div>
            </div>

            {/* Select Options grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Sourcing Option */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Purpose / Intended Use-Case:
                </label>
                <div className="relative">
                  <select
                    id="usage-selector"
                    value={waterUsage}
                    onChange={(e) => setWaterUsage(e.target.value)}
                    className="w-full bg-white border border-slate-200 text-slate-800 py-3 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none font-medium"
                  >
                    <option value="Domestic / Drinking">Domestic / Drinking & Showering</option>
                    <option value="General Storage / Backup">General Backup Tank Storage</option>
                    <option value="Gardens & Swimming Pools">Gardens or Swimming Pools</option>
                    <option value="Construction & Concrete layering">Construction & Site Works</option>
                    <option value="Commercial & Office complexes">Corporate Office Backup</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                    <Droplet size={14} className="fill-blue-400 text-blue-400" />
                  </div>
                </div>
              </div>

              {/* Location Select Option */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Delivery Destination District:
                </label>
                <div className="relative">
                  <select
                    id="destination-selector"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-white border border-slate-200 text-slate-800 py-3 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none font-medium"
                  >
                    <option value="Harare North (Borrowdale, Glen Lorne, Mt Pleasant)">Harare North (Borrowdale, etc.)</option>
                    <option value="Harare East (Highlands, Greendale, Kamfinsa)">Harare East (Highlands, etc.)</option>
                    <option value="Harare West (Avondale, Westgate, Marlborough)">Harare West (Avondale/Westgate)</option>
                    <option value="Chitungwiza & Southern regions">Chitungwiza & South</option>
                    <option value="Ruwa, Goromonzi & East boundary">Ruwa / East boundary</option>
                    <option value="Norton & Lakesides">Norton & West boundary</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                    <MapPin size={14} className="text-blue-500" />
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Block: Simulated tank representation & Results */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-8" id="calc-visual-panel">
            
            {/* Realistic tank simulator container */}
            <div className="relative w-full max-w-sm bg-slate-100 rounded-[3rem] p-8 border border-slate-200/50 flex flex-col items-center">
              
              <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-4 block">
                Visual Tank Simulator
              </span>

              {/* The "Jojo" Graphic Container */}
              <div className="relative w-48 h-64 bg-slate-200 rounded-[2rem] border-4 border-slate-400/80 overflow-hidden shadow-inner flex flex-col justify-end">
                
                {/* Horizontal cylinder ribs of Jojo Tank */}
                <div className="absolute inset-x-0 top-8 h-[2px] bg-slate-400/30"></div>
                <div className="absolute inset-x-0 top-16 h-[2px] bg-slate-400/30"></div>
                <div className="absolute inset-x-0 top-24 h-[2px] bg-slate-400/30"></div>
                <div className="absolute inset-x-0 top-32 h-[2px] bg-slate-400/30"></div>
                <div className="absolute inset-x-0 top-40 h-[2px] bg-slate-400/30"></div>
                <div className="absolute inset-x-0 top-48 h-[2px] bg-slate-400/30"></div>
                <div className="absolute inset-x-0 top-56 h-[2px] bg-slate-400/30"></div>

                {/* Animated wave height inside Jojo */}
                <div 
                  className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 relative transition-all duration-700 ease-out z-10"
                  style={{ height: `${percentFill}%` }}
                >
                  {/* Floating Bubbles */}
                  <span className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-white/40 animate-bounce"></span>
                  <span className="absolute bottom-1/2 right-1/4 w-3.5 h-3.5 rounded-full bg-white/20 animate-bounce"></span>
                  <span className="absolute bottom-2/3 left-1/4 w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse"></span>

                  {/* Ripple wave layer line at the top of fluid */}
                  <div className="absolute top-0 left-0 right-0 h-4 bg-cyan-300/40 -mt-1.5 skew-y-1 block animate-pulse"></div>
                </div>

                {/* Centered litre stamp inside tank */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="bg-slate-900/45 backdrop-blur-sm px-3.5 py-1.5 rounded-2xl text-center">
                    <span className="block text-[10px] text-cyan-200 uppercase font-black tracking-widest leading-none">
                      VOLUME
                    </span>
                    <span className="block text-sm font-mono font-black text-white mt-0.5 whitespace-nowrap">
                      {tankSize.toLocaleString()}L
                    </span>
                  </div>
                </div>

              </div>

              {/* Result items metrics below visual tank */}
              <div className="w-full space-y-4 pt-6 mt-6 border-t border-slate-200">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Recommended Water Tanker:</span>
                  <span className="font-bold text-slate-800 text-right max-w-[200px]" id="tanker-recommendation">
                    {getTankerMatch(tankSize)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Approx. Dispatch Notice:</span>
                  <span className="font-bold text-blue-600">2 - 3 Hours</span>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100/30 text-center flex items-center gap-2">
                  <Flame size={18} className="text-amber-500 flex-shrink-0 animate-bounce" />
                  <span className="text-[11px] text-blue-900 font-semibold text-left leading-normal">
                    We pre-configure high-pressure discharge pumps on corresponding trucks automatically!
                  </span>
                </div>
              </div>

            </div>

            {/* Direct Instant Booking click trigger */}
            <button
              id="calc-whatsapp-inquiry-btn"
              onClick={handlesWhatsAppQuote}
              className="w-full max-w-sm py-4 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl shadow-xl shadow-emerald-100 hover:shadow-emerald-200 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer md:text-sm text-xs text-center"
            >
              <MessageSquare size={18} />
              <span>Get WhatsApp Price & Reserve Slot</span>
              <ArrowRight size={14} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
