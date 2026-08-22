import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { REVIEWS_DATA, BUSINESS_INFO } from '../data/businessData';

export const SocialProofSection: React.FC = () => {
  // Select 3 top verified reviews for a balanced single-row desktop layout and concise mobile stack
  const featuredReviews = REVIEWS_DATA.slice(0, 3);

  return (
    <section id="reviews" className="py-14 sm:py-16 bg-[#090b10] border-t border-slate-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Balanced Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-white/5 pb-5">
          <div>
            <p className="text-xs uppercase font-mono-tech tracking-[0.2em] text-amber-400 font-semibold mb-1">
              Verified Client Reviews
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-heading tracking-tight">
              Trusted by Pasadena’s Drivers
            </h2>
          </div>

          {/* Compact Rating Pill */}
          <div className="flex items-center space-x-3 bg-[#121620] border border-white/10 px-4 py-2 rounded-xl self-start sm:self-auto">
            <span className="text-xl font-black text-amber-400 font-mono-tech leading-none">
              {BUSINESS_INFO.rating}
            </span>
            <div className="flex items-center space-x-0.5 text-amber-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs text-slate-400 border-l border-slate-700 pl-3">
              {BUSINESS_INFO.reviewCount}+ Google Reviews
            </span>
          </div>
        </div>

        {/* Reviews Grid: Exactly 3 even columns on laptop/tablet, 1 clean column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#121620] border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 shadow-md"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center space-x-0.5 text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-3.5 h-3.5 ${star <= Math.round(rev.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono-tech text-slate-500">{rev.date}</span>
                </div>

                {/* Highlight Quote */}
                <div className="text-xs font-bold text-amber-400 font-mono-tech mb-2">
                  "{rev.highlight}"
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-4">
                  {rev.comment}
                </p>
              </div>

              {/* Author & Vehicle Meta */}
              <div className="pt-3 border-t border-white/10 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-xs text-white flex items-center space-x-1.5">
                    <span>{rev.author}</span>
                    {rev.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" title="Verified Customer" />
                    )}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono-tech">{rev.location}</span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium truncate">
                  🚗 {rev.vehicle}
                </div>
                <div className="text-[10px] font-mono-tech text-slate-500 truncate">
                  {rev.service}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
