import React, { useEffect, useRef } from 'react';
import { X, Shield, FileText, CheckCircle2, Lock, Scale } from 'lucide-react';
import { CLIENT_CONFIG } from '../config';

export type LegalTab = 'privacy' | 'terms';

interface LegalModalProps {
  isOpen: boolean;
  activeTab: LegalTab;
  onClose: () => void;
  onTabChange: (tab: LegalTab) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  activeTab,
  onClose,
  onTabChange,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on ESC key and trap focus/scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Prevent background scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        // Backdrop click dismissal
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0f131d] border border-white/15 rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden text-slate-300 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#090b10]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              {activeTab === 'privacy' ? (
                <Shield className="w-4 h-4" />
              ) : (
                <FileText className="w-4 h-4" />
              )}
            </div>
            <div>
              <h3 id="legal-modal-title" className="text-base font-display font-bold text-white tracking-wide">
                {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <p className="text-[11px] font-mono-tech text-slate-400">
                {CLIENT_CONFIG.businessName} • Updated {new Date().getFullYear()}
              </p>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close"
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-white/10 bg-[#0c0f16] px-6">
          <button
            onClick={() => onTabChange('privacy')}
            className={`py-3 px-4 text-xs font-mono-tech font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center space-x-2 cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-amber-400 text-amber-400 bg-white/[0.02]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
          </button>
          <button
            onClick={() => onTabChange('terms')}
            className={`py-3 px-4 text-xs font-mono-tech font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center space-x-2 cursor-pointer ${
              activeTab === 'terms'
                ? 'border-amber-400 text-amber-400 bg-white/[0.02]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Terms of Service</span>
          </button>
        </div>

        {/* Content Body (Scrollable) */}
        <div className="overflow-y-auto px-6 py-6 space-y-6 text-xs leading-relaxed text-slate-300">
          {activeTab === 'privacy' ? (
            <div className="space-y-5">
              {/* Opening Terms Preamble & Scope */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300">
                <p className="text-xs leading-relaxed">
                  Welcome to {CLIENT_CONFIG.businessName}. By accessing, browsing, or using this website, as well as by requesting an estimate, booking an appointment, or utilizing any of our studio or mobile detailing services, you expressly agree to be bound by all of our terms, conditions, operating policies, and legal disclaimers outlined herein. If you do not agree to all of these terms and policies in their entirety, you are strictly prohibited from using this website or our services.
                </p>
              </div>

              {/* Highlighted Standardized Privacy Core Statement */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-200">
                <p className="font-medium text-xs leading-relaxed">
                  {CLIENT_CONFIG.businessName} respects your privacy. We collect information that you voluntarily provide to initiate service requests, including your name, telephone number, email address, vehicle details, service address/location, and preferred appointment dates/times. This information is used strictly to coordinate appointment scheduling, confirm preferred booking windows with the business operator, generate price estimates, and communicate directly with you via WhatsApp or phone. We do not sell, rent, or trade your contact details, email addresses, or physical location data to external third parties or marketing databases.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>1. Information We Collect</span>
                </h4>
                <p className="text-slate-400">
                  We collect information that you voluntarily provide to initiate service requests, including your name, telephone number, email address, vehicle details, service address/location, and preferred appointment dates/times.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>2. How Your Details Are Used</span>
                </h4>
                <p className="text-slate-400">
                  This information is used strictly to coordinate appointment scheduling, confirm preferred booking windows with the business operator, generate price estimates, and communicate directly with you via WhatsApp or phone.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>3. Zero Data Sale or Rental Commitment</span>
                </h4>
                <p className="text-slate-400">
                  We do not sell, rent, or trade your contact details, email addresses, or physical location data to external third parties or marketing databases.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>4. Direct Messaging</span>
                </h4>
                <p className="text-slate-400">
                  By submitting an inquiry, you consent to receiving direct communications from the business operator via phone or WhatsApp regarding your specific service request. Communication occurs directly through your messaging app, and you may end messaging at any time simply by closing or leaving the chat.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>5. Inquiries & Data Requests</span>
                </h4>
                <p className="text-slate-400">
                  If you have questions regarding privacy practices or wish to request the deletion or modification of any contact information provided through this site, please reach out directly to the business operator via the primary telephone or WhatsApp contact listed on this website. The technical platform vendor does not store, host, or process end-user customer database entries.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {/* IMPORTANT PLATFORM NOTICE & LIMITATION OF LIABILITY */}
              <div className="p-4 sm:p-5 rounded-xl bg-amber-500/10 border-2 border-amber-500/40 text-amber-200 space-y-3 font-sans">
                <div className="flex items-center space-x-2 text-amber-400 font-bold font-mono-tech uppercase text-xs tracking-wider">
                  <Shield className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>IMPORTANT PLATFORM NOTICE & LIMITATION OF LIABILITY</span>
                </div>
                <p className="text-xs leading-relaxed text-amber-100 font-bold">
                  This website operates strictly as an independent digital technology template provided by an external technical vendor.
                </p>
                <div className="space-y-2 text-[11px] leading-relaxed text-slate-300">
                  <p>
                    <strong className="text-white font-semibold">1. NO AFFILIATION OR AGENCY:</strong> The website developer, designer, and platform host are third-party technology providers and are not partners, employees, agents, or guarantors of the operating business.
                  </p>
                  <p>
                    <strong className="text-white font-semibold">2. &apos;AS-IS&apos; DELIVERY:</strong> All website features, calculators, and contact triggers are provided strictly on an &apos;AS-IS&apos; basis without warranties of any kind.
                  </p>
                  <p>
                    <strong className="text-white font-semibold">3. ABSOLUTE WAIVER OF LIABILITY:</strong> Under no circumstances shall the website developer be held liable for any direct, indirect, or consequential damages—including property damage, vehicle damage, service disputes, pricing discrepancies, or unfulfilled service agreements—arising out of business operations or website use.
                  </p>
                  <p>
                    <strong className="text-white font-semibold">4. INDEMNIFICATION:</strong> The business operator and end-users explicitly agree to indemnify and hold harmless the web designer/developer from any third-party claims, liabilities, or legal costs resulting from business operations or customer interactions.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300">
                <p className="text-xs leading-relaxed">
                  Welcome to {CLIENT_CONFIG.businessName}. By accessing, browsing, or using this website, as well as by requesting an estimate, booking an appointment, or utilizing any of our studio or mobile detailing services, you expressly agree to be bound by all of our terms, conditions, operating policies, and legal disclaimers outlined herein. If you do not agree to all of these terms and policies in their entirety, you are strictly prohibited from using this website or our services.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>1. Digital Quotes & On-Site Evaluation</span>
                </h4>
                <p className="text-slate-400">
                  Online quote calculators and package prices provide accurate baseline estimates based on vehicle class. Final service scope and pricing are confirmed on-site following an initial physical walk-around and paint condition evaluation. Excessive contamination, biohazards, or severe pet hair may require additional labor time and pre-authorized surcharges.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>2. Mobile Detailing Requirements</span>
                </h4>
                <p className="text-slate-400">
                  For mobile detailing visits, clients must provide safe, legal parking with sufficient clearance around the entire perimeter of the vehicle. Our mobile detailing unit comes fully equipped with all professional tools, products, and equipment. Depending on your location and chosen package, access to a standard outdoor water spigot and electrical outlet may be coordinated prior to your service.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>3. Cancellation & Rescheduling Policy</span>
                </h4>
                <p className="text-slate-400">
                  We kindly request a minimum of 24 hours advance notice to cancel or reschedule appointments without penalty. In the event of adverse weather (such as rain, heavy wind, or excessive heat), we will proactively reschedule your mobile appointment to ensure optimal curing and flawless results.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>4. Pricing Estimates & Payment Terms</span>
                </h4>
                <p className="text-slate-400">
                  Transparent pricing estimates and flexible booking workflows are provided for client convenience. All final pricing, deposits, and payment terms are agreed upon directly with the business operator. Every detail concludes with a joint walk-around inspection before handover to confirm full customer satisfaction.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>5. Pre-Existing Conditions & Liability</span>
                </h4>
                <p className="text-slate-400">
                  Clients must disclose any pre-existing paint defects, failing clear coats, non-factory paintwork, aftermarket electronics, or damaged interior components prior to service. {CLIENT_CONFIG.businessName} takes every measure to safely protect and enhance your vehicle, utilizing professional-grade care solutions and high-efficiency specialized equipment.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>6. Customer Data Handling & Privacy</span>
                </h4>
                <p className="text-slate-400">
                  We collect information that you voluntarily provide to initiate service requests, including your name, telephone number, email address, vehicle details, service address/location, and preferred appointment dates/times. This information is used strictly to coordinate appointment scheduling, confirm preferred booking windows with the business operator, generate price estimates, and communicate directly with you via WhatsApp or phone. We do not sell, rent, or trade your contact details, email addresses, or physical location data to external third parties or marketing databases.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#090b10] flex items-center justify-between">
          <span className="text-[11px] text-slate-500 font-mono-tech">
            © {new Date().getFullYear()} {CLIENT_CONFIG.businessName}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wider text-xs rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
