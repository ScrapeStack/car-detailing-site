import React from 'react';
import { PhoneCall, Sparkles, MessageSquare, MessageCircle, Mail, MapPin, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/businessData';
import { BUSINESS_CONFIG } from '../config';
import { getDisplayOwnerPhone, getTelLink, getSmsLink, getEmailLink, getCleanOwnerPhone, getWhatsAppLink } from '../utils/whatsapp';
import heroSupercarImg from '../assets/images/luxury_hero_supercar_1787212586636.jpg';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExplorePackages: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onExplorePackages }) => {
  return (
    <section className="relative overflow-hidden bg-[#07090e] text-white min-h-[76vh] md:min-h-[82vh] flex flex-col justify-between select-none">
      
      {/* Background Image & Ambient Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={heroSupercarImg}
            alt="Guy On The Go Mobile Detailing"
            className="w-full h-full object-cover object-[70%_center] lg:object-right opacity-65 sm:opacity-80 lg:opacity-90"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Global Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-[#07090e]/95 via-45% to-transparent w-full h-full"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-[#07090e]/40 w-full h-full"></div>
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12 lg:pt-14 pb-8 sm:pb-12 relative z-10 my-auto">
        <motion.div 
          className="max-w-xl lg:max-w-2xl xl:max-w-3xl space-y-5 text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.08
              }
            }
          }}
        >
          {/* Micro Trust & Location Badge */}
          <motion.div 
            className="inline-flex flex-wrap items-center gap-2 text-xs font-mono-tech text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
            <span className="text-amber-400 font-bold">{BUSINESS_CONFIG.businessName}</span>
            <span className="text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-amber-500" />
              <span>Bronx & Greater NYC Area (Mobile)</span>
            </span>
            <span className="text-slate-500">•</span>
            <span className="flex items-center gap-1 text-amber-400 font-semibold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>5.0 Stars (20+ Reviews)</span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div 
            className="space-y-3"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.08]">
              NYC’s Premier Mobile Detailing — <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                We Come To Your Doorstep
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Professional steam extraction, high-foam exterior washes, and deep interior care delivered directly to your driveway in the Bronx and NYC.
            </p>
          </motion.div>

          {/* Quick Pricing Highlights Strip */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-b border-white/10 py-3 text-xs font-mono-tech"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
            }}
          >
            <div className="bg-[#121620]/80 p-2.5 rounded-lg border border-white/5">
              <span className="text-slate-400 block text-[11px]">Full Interior Steam & Shampoo:</span>
              <span className="text-amber-400 font-bold">Sedans $200.00 • 3-Row/Trucks $249.99</span>
            </div>
            <div className="bg-[#121620]/80 p-2.5 rounded-lg border border-white/5">
              <span className="text-slate-400 block text-[11px]">Interior Express Maintenance:</span>
              <span className="text-emerald-400 font-bold">$99.99 Flat Rate</span>
            </div>
            <div className="bg-[#121620]/80 p-2.5 rounded-lg border border-white/5">
              <span className="text-slate-400 block text-[11px]">Exterior Foam Wash & Gloss Seal:</span>
              <span className="text-sky-400 font-bold">$74.99 Flat Rate</span>
            </div>
          </motion.div>

          {/* Contact Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap items-center gap-3 pt-2"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
            }}
          >
            {/* Primary CTA: WhatsApp */}
            <motion.a
              id="hero-book-whatsapp-btn"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto h-13 px-8 bg-[#25D366] hover:bg-[#20bd5a] text-black font-black font-mono-tech text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-[0_0_24px_rgba(37,211,102,0.3)] hover:shadow-[0_0_32px_rgba(37,211,102,0.5)] transition-all flex items-center justify-center space-x-2.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-black text-black" />
              <span>Book via WhatsApp</span>
            </motion.a>

            {/* Secondary CTA: Call Directly */}
            <motion.a
              id="hero-call-btn"
              href={getTelLink()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto h-13 px-6 bg-white/10 hover:bg-white/15 text-white font-bold font-mono-tech text-xs sm:text-sm uppercase tracking-wider rounded-xl border border-white/10 transition-all flex items-center justify-center space-x-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Call +1 (347) 593-7649</span>
            </motion.a>

            {/* Quick SMS & Email Actions */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                id="hero-sms-btn"
                href={getSmsLink()}
                className="flex-1 sm:flex-none h-13 px-4 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono-tech rounded-xl border border-white/10 flex items-center justify-center space-x-1.5 transition-colors"
                title="Send SMS"
              >
                <MessageCircle className="w-3.5 h-3.5 text-amber-500" />
                <span>SMS</span>
              </a>
              <a
                id="hero-email-btn"
                href={getEmailLink()}
                className="flex-1 sm:flex-none h-13 px-4 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono-tech rounded-xl border border-white/10 flex items-center justify-center space-x-1.5 transition-colors"
                title="Email Hershel"
              >
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>Email</span>
              </a>
              <button
                id="hero-services-btn"
                onClick={onOpenBooking}
                className="flex-1 sm:flex-none h-13 px-4 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-400 text-xs font-mono-tech rounded-xl border border-white/10 flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                title="Instant Quote Calculator"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Quote</span>
              </button>
            </div>
          </motion.div>

          {/* Privacy Trust Micro-Disclaimer */}
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5 } }
            }}
            className="text-xs text-slate-400/80 pt-0.5"
          >
            By submitting an inquiry or reaching out, you consent to sending your request details directly to the independent business operator via WhatsApp, SMS, Phone, or Email.
          </motion.p>

          {/* Realistic Mobile Detailing Features */}
          <motion.div 
            className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-x-6 sm:gap-y-2 text-[11px] sm:text-xs text-slate-300 font-mono-tech pt-2 border-t border-white/5"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8 } }
            }}
          >
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                ✓
              </span>
              <span>100% Mobile Service — We Come To You</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 rounded-full bg-amber-500/15 text-amber-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                ✓
              </span>
              <span>Commercial High-Heat Steam Extraction</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 rounded-full bg-amber-500/15 text-amber-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                ✓
              </span>
              <span>Mechanical Add-Ons: Brakes & Radio Installs</span>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom Service Strip */}
      <motion.div 
        className="w-full border-t border-white/10 bg-[#05060a]/95 backdrop-blur-md py-3.5 px-4 relative z-20"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-6">
          <div className="flex items-center space-x-2 text-[11px] font-mono-tech text-slate-400 uppercase tracking-wider shrink-0">
            <span className="text-amber-400 font-bold">Hours:</span>
            <span>Monday – Saturday: 9:00 AM – 8:00 PM • Sunday: Closed</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-[11px] font-mono-tech text-slate-300">
            <span className="flex items-center space-x-1.5">
              <span className="text-emerald-400">•</span>
              <span>Bronx, NY</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="text-emerald-400">•</span>
              <span>Manhattan</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="text-emerald-400">•</span>
              <span>Queens</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="text-emerald-400">•</span>
              <span>Greater NYC Metropolitan Area</span>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
