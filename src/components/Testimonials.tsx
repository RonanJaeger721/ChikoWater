import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative side accent blur */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Titles */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block">
            Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-950 tracking-tight">
            Loved & Trusted by Zimbabwean Communities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans">
            Hear from families, corporate administrative clients, and civil developers who rely on Chiko Water Delivery to guarantee clean bulk hydration daily.
          </p>
        </div>

        {/* Testimonials layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="testimonials-grid">
          {TESTIMONIALS.map((test) => (
            <div 
              key={test.id} 
              id={`testi-${test.id}`}
              className="bg-slate-50 border border-slate-100/60 p-6 sm:p-8 rounded-3xl hover:bg-white hover:border-blue-100 transition-all duration-300 flex flex-col justify-between group shadow-md shadow-blue-950/[0.005] hover:shadow-lg hover:shadow-blue-950/[0.02]"
            >
              <div className="space-y-4">
                
                {/* Visual quote icon and star rows */}
                <div className="flex justify-between items-center text-blue-200 group-hover:text-blue-400 transition-colors">
                  <Quote size={24} className="fill-current" />
                  <div className="flex items-center gap-0.5">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Narrative comment */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans min-h-[140px]">
                  "{test.comment}"
                </p>

              </div>

              {/* Verified Author Profile Metadata */}
              <div className="border-t border-slate-100 pt-4 mt-6 flex flex-col gap-0.5">
                <span className="block text-xs font-black text-blue-950">
                  {test.name}
                </span>
                <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                  <span>{test.role}</span>
                  <span className="text-blue-500">{test.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
