import React from 'react';
import { Sparkles, Phone, MapPin, Star, Shield, ArrowUp, BookOpen, Heart } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/businessData';

interface FooterProps {
  onOpenStyleGuide: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenStyleGuide, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080c] border-t border-white/10 text-slate-400 text-xs">
      {/* Top CTA Band */}
      <div className="border-b border-white/5 bg-[#090b10] py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-amber-400 font-mono-tech uppercase text-[11px] font-bold">Ready to Experience Flawless Reflections?</span>
            <div className="text-xl sm:text-2xl font-display font-black text-white">
              Reserve Your Astoria Detailing Bay or Visit Us Today
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              id="footer-quote-btn"
              onClick={onOpenBooking}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all"
            >
              Get Instant Quote & Book
            </button>
            <a
              id="footer-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-xl border border-white/10 transition-all flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Bio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500 text-black flex items-center justify-center font-black">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-display font-black text-lg text-white tracking-tight">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Astoria’s premier automotive detailing center & hand wash facility. We specialize in comprehensive auto detailing, scratch-free hand car washes, precision nano-ceramic window tinting, multi-year ceramic coatings, and paint correction.
            </p>
            <div className="flex items-center space-x-2 text-amber-400 font-mono-tech text-xs">
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="font-bold">{BUSINESS_INFO.rating} / 5.0 Star Rating</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{BUSINESS_INFO.reviewCount} Verified Client Reviews</span>
            </div>
            <div className="pt-2">
              <button
                id="footer-style-guide-link"
                onClick={onOpenStyleGuide}
                className="text-amber-400 hover:text-amber-300 font-mono-tech text-xs flex items-center space-x-1.5 underline underline-offset-4"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>View Design System & Visual Style Guide</span>
              </button>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <span className="font-mono-tech uppercase text-white font-bold text-xs tracking-wider block">
              Core Services
            </span>
            <ul className="space-y-2">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-amber-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <span className="font-mono-tech uppercase text-white font-bold text-xs tracking-wider block">
              Experience & Proof
            </span>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Core Detailing Services</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Package Pricing Matrix</a></li>
              <li><a href="#standards" className="hover:text-amber-400 transition-colors">Craftsmanship Standards</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors">Verified Customer Reviews</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#quote-builder" className="hover:text-amber-400 transition-colors">Instant Quote Builder</a></li>
            </ul>
          </div>

          {/* Studio Location & Service Coverage */}
          <div className="space-y-3">
            <span className="font-mono-tech uppercase text-white font-bold text-xs tracking-wider block">
              Astoria Studio
            </span>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start space-x-2">
                 <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-slate-300 hover:text-amber-400">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="text-[11px] text-slate-500 font-mono-tech pt-2">
                Serving: Astoria, Long Island City, Sunnyside, Woodside, Jackson Heights, Queens & Manhattan.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Registered IDA Certified Auto Detailer.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-slate-400 hover:text-amber-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
