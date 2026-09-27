import React, { useState } from 'react';
import { Sparkles, Phone, MessageSquare, MapPin, Star, ArrowUp, BookOpen } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/businessData';
import { CLIENT_CONFIG } from '../config';
import { getDisplayOwnerPhone, getTelLink, getSmsLink } from '../utils/whatsapp';
import { LegalModal, LegalTab } from './LegalModal';

interface FooterProps {
  onOpenStyleGuide: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenStyleGuide, onOpenBooking }) => {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState<boolean>(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalTab>('privacy');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLegalModal = (tab: LegalTab) => {
    setLegalModalTab(tab);
    setIsLegalModalOpen(true);
  };

  return (
    <footer className="bg-[#07080c] border-t border-white/10 text-slate-400 text-xs pb-28 sm:pb-0 relative z-30">
      {/* Top CTA Band */}
      <div className="border-b border-white/5 bg-[#090b10] py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[#00E5FF] font-mono-tech uppercase text-[11px] font-bold">Fast & Honest Local Vehicle Maintenance</span>
            <div className="text-xl sm:text-2xl font-display font-black text-white">
              Visit Our {CLIENT_CONFIG.location} Shop or Book Online
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-2 w-full sm:w-auto">
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3">
              <button
                id="footer-quote-btn"
                onClick={onOpenBooking}
                className="px-6 py-3 bg-gradient-to-r from-[#0066FF] to-[#00E5FF] hover:from-[#0052CC] hover:to-[#00D0E8] text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-[#0066FF]/25 transition-all cursor-pointer"
              >
                Get Instant Quote & Book
              </button>
              <a
                id="footer-call-btn"
                href={getTelLink()}
                className="px-5 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-xl border border-white/10 transition-all flex items-center space-x-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>{getDisplayOwnerPhone()}</span>
              </a>
            </div>
            {/* RESPONSIVE DISCLAIMER: Strictly visible, readable, padded, no hidden classes */}
            <div className="w-full sm:w-auto pt-2">
              <p className="text-xs text-slate-300 text-center sm:text-right py-2 px-3 block leading-relaxed max-w-md">
                By submitting you consent to sharing your info via WhatsApp, email, phone, and direct messaging with {CLIENT_CONFIG.businessName}.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Bio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00E5FF] text-white flex items-center justify-center font-black">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-display font-black text-lg text-white tracking-tight">
                {CLIENT_CONFIG.businessName}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Brooklyn's trusted local car wash and lube center. Express washes, full-service interior cleaning, express waxing, and quick oil changes.
            </p>
            <div className="flex items-center space-x-2 text-[#00E5FF] font-mono-tech text-xs">
              <Star className="w-4 h-4 fill-[#00E5FF]" />
              <span className="font-bold">{BUSINESS_INFO.rating} / 5.0 Star Rating</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{BUSINESS_INFO.reviewCount} {CLIENT_CONFIG.location} Client Reviews</span>
            </div>
            <div className="pt-2">
              <button
                id="footer-style-guide-link"
                onClick={onOpenStyleGuide}
                className="text-[#00E5FF] hover:text-white font-mono-tech text-xs flex items-center space-x-1.5 underline underline-offset-4 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>View Design System & Visual Style Guide</span>
              </button>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <span className="font-mono-tech uppercase text-white font-bold text-xs tracking-wider block">
              Core Packages & Prices
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#pricing" className="hover:text-[#00E5FF] transition-colors">
                  Full Service Wash ($25)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#00E5FF] transition-colors">
                  Deluxe Wash & Express Wax ($70)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#00E5FF] transition-colors">
                  Oil Change & Quick Lube + Free Wash ($95)
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <span className="font-mono-tech uppercase text-white font-bold text-xs tracking-wider block">
              Quick Links
            </span>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-[#00E5FF] transition-colors">Our Wash & Lube Services</a></li>
              <li><a href="#pricing" className="hover:text-[#00E5FF] transition-colors">Package Pricing Matrix</a></li>
              <li><a href="#reviews" className="hover:text-[#00E5FF] transition-colors">Verified Brooklyn Reviews</a></li>
              <li><a href="#faq" className="hover:text-[#00E5FF] transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#quote-builder" className="hover:text-[#00E5FF] transition-colors">Instant Quote Builder</a></li>
            </ul>
          </div>

          {/* Shop Location & Service Coverage */}
          <div className="space-y-3">
            <span className="font-mono-tech uppercase text-white font-bold text-xs tracking-wider block">
              {CLIENT_CONFIG.location} Shop
            </span>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>550 4th Ave, {CLIENT_CONFIG.location} 11215</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#0066FF] shrink-0" />
                <a href={getTelLink()} className="text-slate-300 hover:text-[#00E5FF]">
                  {getDisplayOwnerPhone()}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-[#0066FF] shrink-0" />
                <a href={getSmsLink("Hi LMC team, I have a quick question:")} className="text-slate-300 hover:text-[#00E5FF]">
                  SMS: {getDisplayOwnerPhone()}
                </a>
              </div>
              <div className="text-[11px] text-slate-500 font-mono-tech pt-2">
                Serving: Park Slope, Gowanus, Downtown Brooklyn, Cobble Hill, Sunset Park, Bay Ridge, and Brooklyn communities.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs relative z-30">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 relative z-30 pointer-events-auto">
            <span>© {new Date().getFullYear()} {CLIENT_CONFIG.businessName}. All Rights Reserved.</span>
            <span className="text-slate-600">|</span>
            <button
              id="footer-privacy-policy-link"
              onClick={() => handleOpenLegalModal('privacy')}
              className="text-slate-400 hover:text-[#00E5FF] transition-colors underline underline-offset-2 cursor-pointer relative z-30 pointer-events-auto"
            >
              Privacy Policy
            </button>
            <span className="text-slate-600">|</span>
            <button
              id="footer-terms-of-service-link"
              onClick={() => handleOpenLegalModal('terms')}
              className="text-slate-400 hover:text-[#00E5FF] transition-colors underline underline-offset-2 cursor-pointer relative z-30 pointer-events-auto"
            >
              Terms of Service
            </button>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-slate-400 hover:text-[#00E5FF] transition-colors cursor-pointer relative z-30 pointer-events-auto"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Accessible Legal Privacy Policy & Terms Modal */}
      <LegalModal
        isOpen={isLegalModalOpen}
        activeTab={legalModalTab}
        onClose={() => setIsLegalModalOpen(false)}
        onTabChange={(tab) => setLegalModalTab(tab)}
      />
    </footer>
  );
};
