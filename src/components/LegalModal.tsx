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
            <div className="w-8 h-8 rounded-lg bg-[#0066FF]/20 text-[#00E5FF] flex items-center justify-center">
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
                ? 'border-[#00E5FF] text-[#00E5FF] bg-white/[0.02]'
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
                ? 'border-[#00E5FF] text-[#00E5FF] bg-white/[0.02]'
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
                  Welcome to {CLIENT_CONFIG.businessName}. By accessing, browsing, or using this website, as well as by requesting an estimate, booking an appointment, or utilizing any of our vehicle wash or detailing services, you agree to all terms, policies, and disclaimers outlined herein.
                </p>
              </div>

              {/* Highlighted Standardized Privacy Core Statement */}
              <div className="p-4 rounded-xl bg-[#0066FF]/15 border border-[#0066FF]/30 text-blue-100">
                <p className="font-medium text-xs leading-relaxed">
                  {CLIENT_CONFIG.businessName} respects your privacy. We collect information that you voluntarily provide to initiate service requests, including your name, telephone number, email address, vehicle details, service address/location, and preferred appointment dates/times. This information is used strictly to coordinate appointment scheduling, confirm preferred booking windows with the business operator, generate price estimates, and communicate directly with you via WhatsApp or phone. We do not sell, rent, or trade your contact details, email addresses, or physical location data to external third parties or marketing databases.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>1. Information We Collect</span>
                </h4>
                <p className="text-slate-400">
                  We collect information that you voluntarily provide to initiate service requests, including your name, telephone number, email address, vehicle details, service address/location, and preferred appointment dates/times.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>2. How Your Details Are Used</span>
                </h4>
                <p className="text-slate-400">
                  This information is used strictly to coordinate appointment scheduling, confirm preferred booking windows with the business operator, generate price estimates, and communicate directly with you via WhatsApp, email, or phone.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>3. Zero Data Sale Commitment</span>
                </h4>
                <p className="text-slate-400">
                  We do not sell, rent, or trade your contact details, email addresses, or physical location data to external third parties or marketing databases.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>4. Direct Messaging & Consent</span>
                </h4>
                <p className="text-slate-400">
                  By submitting you consent to sharing your info via WhatsApp, email, phone, and direct messaging with Gentle Touch Hand Car Wash and Vehicle Detail Center regarding your specific service request.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300">
                <p className="text-xs leading-relaxed">
                  Welcome to {CLIENT_CONFIG.businessName}. By accessing or using this website, as well as by booking an appointment, you agree to be bound by our operating policies and service terms.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>1. Pricing Estimates & On-Site Evaluation</span>
                </h4>
                <p className="text-slate-400">
                  Online package prices ($49.99 for Gentle Touch Hand Wash, $179.99 for Interior Deep Steam, $129.99 for Express Wax & Polish, $289.99 for Showroom Detail) provide accurate baseline rates based on vehicle size class. Excessive contamination, biohazards, or severe pet hair may require additional labor time and pre-authorized surcharges.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>2. Cancellation & Rescheduling</span>
                </h4>
                <p className="text-slate-400">
                  We kindly request advance notice to cancel or reschedule appointments without penalty. In the event of adverse weather (such as rain or snow), we will proactively reschedule your appointment for optimal results.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold font-mono-tech uppercase text-[11px] tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>3. Customer Satisfaction Walk-Around</span>
                </h4>
                <p className="text-slate-400">
                  Every wash and detail concludes with a joint walk-around inspection before handover to confirm full customer satisfaction.
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
            className="px-5 py-2 bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold uppercase tracking-wider text-xs rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
