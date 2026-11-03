import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { useTemplate } from '../context/TemplateContext';

export const ReviewsSection: React.FC = () => {
  const { config, showRawPlaceholders } = useTemplate();

  return (
    <section id="reviews" className="py-20 border-b border-white/10 bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Rating Badge */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-accent font-semibold">
            Verified Client Feedback
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white text-balance">
            Trusted by Concourse Owners & Everyday Drivers
          </h2>

          {/* Prompt requirement: Rating: 5.0 ⭐⭐⭐⭐⭐ Stars on Google ([YOUR GOOGLE REVIEW COUNT] Reviews) */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111622] border border-white/10 text-sm">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white">5.0 Stars</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-300">
              on Google ({showRawPlaceholders ? (
                <span className="text-amber-400 font-mono">[YOUR GOOGLE REVIEW COUNT]</span>
              ) : (
                `${config.googleReviewCount}`
              )} Reviews)
            </span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {config.testimonials.map((test, index) => {
            const cardNum = index + 1;
            
            return (
              <div
                key={index}
                className="p-7 rounded-2xl bg-[#111622] border border-white/10 hover:border-accent/40 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="flex items-center space-x-1 text-[11px] font-mono-tech text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified Client</span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                      {showRawPlaceholders ? (
                        <span className="text-amber-400 font-mono text-sm block">
                          "[TESTIMONIAL {cardNum} TEXT]"
                        </span>
                      ) : (
                        `"${test.quote}"`
                      )}
                    </p>
                  </div>
                </div>

                {/* Author & Vehicle attribution */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-sm font-bold text-white">
                    {showRawPlaceholders ? (
                      <span className="text-amber-400 font-mono">[CLIENT NAME {cardNum}]</span>
                    ) : (
                      test.clientName
                    )}
                  </div>
                  <div className="text-xs text-accent font-mono-tech mt-0.5">
                    {showRawPlaceholders ? (
                      <span className="text-amber-400 font-mono">[VEHICLE MODEL {cardNum}]</span>
                    ) : (
                      test.vehicleModel
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
