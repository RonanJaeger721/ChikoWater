import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setActiveId(prevId => (prevId === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white via-blue-50/15 to-white relative overflow-hidden border-t border-slate-100">
      
      {/* Decorative radial water splash overlay */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-100/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-950 tracking-tight">
            Frequently Answered Delivery & Hygiene Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-sans max-w-2xl mx-auto">
            Get instant answers on water quality compliance standards, tanker setups, available local payment gateways, and same-day delivery timelines.
          </p>
        </div>

        {/* Dynamic Accordion items stack */}
        <div className="space-y-4" id="faq-accordion-container">
          {FAQS.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div 
                key={faq.id} 
                id={`faq-item-${faq.id}`}
                className={`border rounded-2xl transition-all ${
                  isOpen 
                    ? 'bg-gradient-to-r from-blue-50/20 via-white to-cyan-50/10 border-blue-250 border-blue-300' 
                    : 'bg-white border-slate-100 hover:border-slate-300 shadow-sm'
                }`}
              >
                {/* Trigger Button bar */}
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left px-5 sm:px-7 py-5 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} className={`flex-shrink-0 ${isOpen ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span className="text-sm sm:text-base font-bold text-blue-950 pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-slate-500 flex-shrink-0">
                    {isOpen ? <ChevronUp size={18} className="text-blue-600 animate-pulse" /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {/* Collapsible Content Section */}
                {isOpen && (
                  <div className="px-5 sm:px-7 pb-6 text-xs sm:text-sm text-slate-600 border-t border-blue-50/50 pt-4 leading-relaxed font-sans animate-fade-in" id={`faq-answer-${faq.id}`}>
                    {faq.answer}
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Quick Custom inquiry box */}
        <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100/50 text-center mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-blue-950">Have a highly technical or custom request?</h4>
            <p className="text-xs text-slate-500 mt-1 font-sans">Our logistics compliance managers are happy to provide specific borehole documentation certificates on request.</p>
          </div>
          <a
            href={`https://wa.me/263772228029?text=Hi%20Chiko%20Water,%20I%20have%20a%20special/technical%20question%20not%20covered%20in%20your%2520FAQ.`}
            target="_blank"
            rel="noreferrer"
            referrerPolicy="no-referrer"
            className="bg-white hover:bg-slate-100 text-blue-950 border border-slate-200 text-xs font-bold px-4 py-2.5 rounded-xl text-center shadow-sm cursor-pointer hover:scale-[1.02] transition-transform"
          >
            Inquire on Special Issues
          </a>
        </div>

      </div>
    </section>
  );
}
