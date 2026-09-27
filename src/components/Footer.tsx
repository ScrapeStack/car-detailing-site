import React, { useState } from 'react';
import { Sparkles, Phone, MapPin, Star, ArrowUp, BookOpen, MessageSquare, Mail, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/businessData';
import { BUSINESS_CONFIG, CLIENT_CONFIG } from '../config';
import { getDisplayOwnerPhone, getTelLink, getSmsLink, getEmailLink, getCleanOwnerPhone, getWhatsAppLink } from '../utils/whatsapp';
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
            <span className="text-amber-400 font-mono-tech uppercase text-[11px] font-bold">Ready for a Flawless Mobile Detailing Experience?</span>
            <div className="text-xl sm:text-2xl font-display font-black text-white">
              Reserve Your Mobile Visit in the Bronx & NYC
            </div>
            <p className="text-xs text-slate-400">
              Hershel comes directly to your driveway with high-heat steam extraction and high-foam washes.
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-2 w-full sm:w-auto">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                id="footer-quote-btn"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-black font-black uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-black text-black" />
                <span>BOOK VIA WHATSAPP</span>
              </a>
              <a
                id="footer-call-btn"
                href={getTelLink()}
                className="h-12 px-5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-xl border border-white/10 transition-all flex items-center justify-center space-x-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono-tech">{getDisplayOwnerPhone()}</span>
              </a>
              <a
                id="footer-sms-btn"
                href={getSmsLink()}
                className="h-12 px-4 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-xs rounded-xl border border-white/10 transition-all flex items-center justify-center space-x-1.5"
                title="Send SMS"
              >
                <MessageCircle className="w-3.5 h-3.5 text-amber-500" />
                <span>SMS</span>
              </a>
              <a
                id="footer-email-btn"
                href={getEmailLink()}
                className="h-12 px-4 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-xs rounded-xl border border-white/10 transition-all flex items-center justify-center space-x-1.5"
                title="Email Inquiry"
              >
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>Email</span>
              </a>
            </div>
            <p className="text-xs text-slate-400/80 text-center sm:text-right">
              By submitting an inquiry or reaching out, you consent to sending your request details directly to the independent business operator via WhatsApp, SMS, Phone, or Email.
            </p>
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
                {CLIENT_CONFIG.businessName}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              NYC’s premier mobile auto detailing specialist. Operating out of 1219 Woodycrest Ave, Bronx, NY, Hershel delivers full interior steam extraction, high-foam exterior baths, pet hair removal, and driveway brake & radio installations directly to your doorstep.
            </p>
            <div className="flex items-center space-x-2 text-amber-400 font-mono-tech text-xs">
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="font-bold">{BUSINESS_INFO.rating.toFixed(1)} / 5.0 Star Rating</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{BUSINESS_INFO.reviewCount}+ Verified Google Reviews</span>
            </div>
            <div className="pt-1">
              <button
                id="footer-style-guide-link"
                onClick={onOpenStyleGuide}
                className="text-amber-400 hover:text-amber-300 font-mono-tech text-xs flex items-center space-x-1.5 underline underline-offset-4 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>View Design System & Visual Style Guide</span>
              </button>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <span className="font-mono-tech uppercase text-white font-bold text-xs tracking-wider block">
              Services & Pricing
            </span>
            <ul className="space-y-2">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-amber-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#pricing" className="hover:text-amber-400 transition-colors">
                  Sedans: $200.00 / 3-Row: $249.99
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-400 transition-colors">
                  Express Flat Rate: $99.99
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-400 transition-colors">
                  Foam Wash Flat Rate: $74.99
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <span className="font-mono-tech uppercase text-white font-bold text-xs tracking-wider block">
              Quick Navigation
            </span>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Mobile Services Menu</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Packages & Pricing</a></li>
              <li><a href="#quote-builder" className="hover:text-amber-400 transition-colors">Instant Quote & WhatsApp Booking</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors">Verified Customer Reviews</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#location" className="hover:text-amber-400 transition-colors">Mobile Dispatch & Hours</a></li>
            </ul>
          </div>

          {/* Mobile Base Location & Service Coverage */}
          <div className="space-y-3">
            <span className="font-mono-tech uppercase text-white font-bold text-xs tracking-wider block">
              Dispatch Base & Hours
            </span>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{CLIENT_CONFIG.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={getTelLink()} className="text-slate-300 hover:text-amber-400 font-mono-tech">
                  {getDisplayOwnerPhone()}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={getEmailLink()} className="text-slate-300 hover:text-amber-400 font-mono-tech">
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
              <div className="text-[11px] text-slate-300 font-mono-tech pt-1">
                Mon – Sat: 9:00 AM – 8:00 PM <br />
                <span className="text-rose-400">Sunday: Closed</span>
              </div>
              <div className="text-[11px] text-slate-500 font-mono-tech pt-1">
                Serving: Bronx, NY & Greater NYC Metropolitan Area (Mobile - We Come To You).
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top (Exact User Requirement) */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs relative z-30">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 relative z-30 pointer-events-auto">
            <span>© 2026 Guy On The Go Mobile Detailing. All Rights Reserved.</span>
            <span className="text-slate-600">|</span>
            <button
              id="footer-privacy-policy-link"
              onClick={() => handleOpenLegalModal('privacy')}
              className="text-slate-400 hover:text-amber-400 transition-colors underline underline-offset-2 cursor-pointer relative z-30 pointer-events-auto"
            >
              Privacy Policy
            </button>
            <span className="text-slate-600">|</span>
            <button
              id="footer-terms-of-service-link"
              onClick={() => handleOpenLegalModal('terms')}
              className="text-slate-400 hover:text-amber-400 transition-colors underline underline-offset-2 cursor-pointer relative z-30 pointer-events-auto"
            >
              Terms of Service
            </button>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer relative z-30 pointer-events-auto"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Accessible Legal Privacy Policy & Terms Modal (Untouched Legal Shields & Disclaimers) */}
      <LegalModal
        isOpen={isLegalModalOpen}
        activeTab={legalModalTab}
        onClose={() => setIsLegalModalOpen(false)}
        onTabChange={(tab) => setLegalModalTab(tab)}
      />
    </footer>
  );
};
