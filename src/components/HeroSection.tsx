import React from 'react';
import { ChevronRight, PhoneCall, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/businessData';
import { BUSINESS_CONFIG } from '../config';
import { getDisplayOwnerPhone, getTelLink } from '../utils/whatsapp';
import heroSupercarImg from '../assets/images/luxury_hero_supercar_1787212586636.jpg';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExplorePackages: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onExplorePackages }) => {
  return (
    <section className="relative overflow-hidden bg-[#07090e] text-white min-h-[76vh] md:min-h-[82vh] flex flex-col justify-between select-none">
      
      {/* BACKGROUND SUPERCAR IMAGE WITH LUXURY AMBIENT CINEMATIC DISPLAY */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Full Car View - Seamless full-bleed container with zero hard edges */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={heroSupercarImg}
            alt="Gentle Touch Hand Car Wash and Vehicle Detail Center"
            className="w-full h-full object-cover object-[70%_center] lg:object-right opacity-65 sm:opacity-80 lg:opacity-95"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Global Dark Radial & Linear Seamless Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-[#07090e]/95 via-35% sm:via-45% to-transparent w-full h-full"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-[#07090e]/30 w-full h-full"></div>
        
        {/* Subtle Ambient Blue & Cyan Glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#0066FF]/[0.08] rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Content - Staggered Luxury Entrance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 sm:pt-9 lg:pt-11 pb-7 sm:pb-9 relative z-10 my-auto">
        <motion.div 
          className="max-w-lg lg:max-w-xl xl:max-w-2xl space-y-5 text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.14,
                delayChildren: 0.1
              }
            }
          }}
        >
          
          {/* Location & Trust Micro Tag */}
          <motion.div 
            className="inline-flex items-center space-x-2 text-[11px] sm:text-xs tracking-[0.25em] uppercase font-mono-tech text-slate-400"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] inline-block animate-pulse"></span>
            <span className="text-slate-200 font-semibold">{BUSINESS_CONFIG.location}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Hand Car Wash & Detail Center</span>
          </motion.div>

          {/* Headline */}
          <motion.div 
            className="space-y-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-white uppercase leading-[1.03]">
              QUEENS HAND CAR <br />
              <span className="font-serif-luxury italic font-normal tracking-wide text-slate-200 capitalize">Wash & Detail</span>
            </h1>
            <p className="text-xs sm:text-sm font-mono-tech uppercase tracking-wider text-[#00E5FF] pt-0.5">
              Gentle Touch Hand Wash ($49.99) • Interior Deep Steam ($179.99) • Express Wax & Polish ($129.99) • Showroom Detail ($289.99)
            </p>
          </motion.div>

          {/* Simple, Non-Overwhelming Two-Column Copy Block */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-[13px] text-slate-300/90 leading-relaxed border-t border-white/10 pt-4"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            <div>
              <p>
                Experience a true scratch-free hand wash and vehicle detail in {BUSINESS_CONFIG.location}. Meticulous microfiber wash techniques that preserve your clear coat without swirl marks.
              </p>
            </div>
            <div>
              <p>
                From pressurized 220°F interior steam sanitization to high-gloss machine polishing and concourse showroom detailing, visit our Northern Blvd center or book mobile dispatch.
              </p>
            </div>
          </motion.div>

          {/* Clean Action Buttons with Deep Blue & Cyan Palette */}
          <motion.div 
            className="flex flex-wrap items-center gap-3.5 pt-2"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            {/* Deep Blue / Cyan CTA: GET IN TOUCH */}
            <motion.button
              id="hero-get-in-touch-btn"
              onClick={onOpenBooking}
              whileHover={{ scale: 1.025, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 sm:px-8 py-3.5 bg-gradient-to-r from-[#0066FF] via-[#0080FF] to-[#00E5FF] hover:from-[#0052CC] hover:to-[#00D0E8] text-white font-bold font-mono-tech text-xs sm:text-sm uppercase tracking-[0.15em] rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.35)] hover:shadow-[0_0_28px_rgba(0,102,255,0.55)] flex items-center space-x-2.5 cursor-pointer group"
            >
              <span>GET IN TOUCH & BOOK</span>
              <ChevronRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
            </motion.button>

            {/* Cyan Border CTA: VIEW SERVICES & PRICING */}
            <motion.button
              id="hero-explore-packages-btn"
              onClick={onExplorePackages}
              whileHover={{ scale: 1.025, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 sm:px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-[#00E5FF]/40 hover:border-[#00E5FF] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md transition-all duration-300 flex items-center space-x-2 cursor-pointer group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>VIEW SERVICES & PRICING</span>
            </motion.button>

            <motion.a
              id="hero-phone-direct-btn"
              href={getTelLink()}
              whileHover={{ x: 2 }}
              className="px-2 py-3.5 text-xs text-slate-300 hover:text-[#00E5FF] transition-colors flex items-center space-x-1.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#0066FF]" />
              <span className="font-mono-tech">{getDisplayOwnerPhone()}</span>
            </motion.a>
          </motion.div>

          {/* RESPONSIVE DISCLAIMER FIX: Strictly visible, readable, padded, no hidden classes */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5 } }
            }}
            className="w-full pt-1"
          >
            <p className="text-xs text-slate-300 text-center sm:text-left py-2 px-1 block w-full leading-relaxed">
              By submitting you consent to sharing your info via WhatsApp, email, phone, and direct messaging with Gentle Touch Hand Car Wash and Vehicle Detail Center.
            </p>
          </motion.div>

          {/* Realistic Quality Commitments */}
          <motion.div 
            className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-x-6 sm:gap-y-2 text-[11px] sm:text-xs text-slate-300 font-mono-tech pt-2 border-t border-white/5 sm:border-transparent"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8 } }
            }}
          >
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 rounded-full bg-[#0066FF]/20 text-[#00E5FF] flex items-center justify-center text-[10px] font-bold shrink-0">
                ✓
              </span>
              <span>100% Gentle Microfiber Hand Wash</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 rounded-full bg-[#0066FF]/20 text-[#00E5FF] flex items-center justify-center text-[10px] font-bold shrink-0">
                ✓
              </span>
              <span>Pressurized 220°F Dry Steam Extraction</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 rounded-full bg-[#0066FF]/20 text-[#00E5FF] flex items-center justify-center text-[10px] font-bold shrink-0">
                ✓
              </span>
              <span>Queens, NY Service & Mobile Dispatch</span>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* BOTTOM PROFESSIONAL STANDARDS & SUPPLIES STRIP */}
      <motion.div 
        className="w-full border-t border-white/10 bg-[#05060a]/95 backdrop-blur-md py-4 sm:py-5 px-4 relative z-20"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono-tech text-slate-400 uppercase tracking-widest shrink-0">
            <span>We utilize professional-grade vehicle wash and detailing products</span>
          </div>

          {/* Clean Disciplines List */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-8 text-[11px] font-mono-tech text-slate-300">
            <span className="flex items-center space-x-1.5">
              <span className="text-[#00E5FF]">•</span>
              <span>Gentle Hand Wash ($49.99)</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="text-[#00E5FF]">•</span>
              <span>Interior Deep Steam ($179.99)</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="text-[#00E5FF]">•</span>
              <span>Express Wax & Polish ($129.99)</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="text-[#00E5FF]">•</span>
              <span>Showroom Detail ($289.99)</span>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
