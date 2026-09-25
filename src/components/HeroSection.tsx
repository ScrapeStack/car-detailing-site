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
            alt="Apex Precision Luxury Supercar Detailing"
            className="w-full h-full object-cover object-[70%_center] lg:object-right opacity-65 sm:opacity-80 lg:opacity-95"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Global Dark Radial & Linear Seamless Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-[#07090e]/95 via-35% sm:via-45% to-transparent w-full h-full"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-[#07090e]/30 w-full h-full"></div>
        
        {/* Subtle Ambient Golden Glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none" />
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
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-pulse"></span>
            <span className="text-slate-300 font-semibold">{BUSINESS_CONFIG.location}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Studio & Mobile Detailing</span>
          </motion.div>

          {/* Iconic Headline: "LIVE BETTER, LIVE LUXURY" */}
          <motion.div 
            className="space-y-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-white uppercase leading-[1.03]">
              {BUSINESS_CONFIG.location.split(',')[0].trim().toUpperCase()} AUTO <br />
              <span className="font-serif-luxury italic font-normal tracking-wide text-slate-200 capitalize">Detailing</span>
            </h1>
            <p className="text-xs sm:text-sm font-mono-tech uppercase tracking-wider text-amber-400/90 pt-0.5">
              Paint Correction • Ceramic Coating • Interior Deep Cleaning
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
                Restore your vehicle’s true showroom shine with expert auto detailing, deep paint correction, and durable ceramic coating protection.
              </p>
            </div>
            <div>
              <p>
                From meticulous interior deep cleaning and steam cleaning to full paint enhancement, enjoy flawless results at our {BUSINESS_CONFIG.location} studio or right at your driveway.
              </p>
            </div>
          </motion.div>

          {/* Clean Action Buttons with Yellow Gradient matching the palette */}
          <motion.div 
            className="flex flex-wrap items-center gap-3.5 pt-2"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            {/* Gradient Yellow CTA: GET IN TOUCH */}
            <motion.button
              id="hero-get-in-touch-btn"
              onClick={onOpenBooking}
              whileHover={{ scale: 1.025, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 sm:px-8 py-3.5 bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 hover:from-yellow-300 hover:via-amber-300 hover:to-amber-400 text-slate-950 font-bold font-mono-tech text-xs sm:text-sm uppercase tracking-[0.15em] rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_28px_rgba(245,158,11,0.45)] flex items-center space-x-2.5 cursor-pointer group"
            >
              <span>GET IN TOUCH</span>
              <ChevronRight className="w-4 h-4 text-slate-900 transition-transform group-hover:translate-x-1" />
            </motion.button>

            {/* Gradient Yellow CTA: VIEW SERVICES & PRICING */}
            <motion.button
              id="hero-explore-packages-btn"
              onClick={onExplorePackages}
              whileHover={{ scale: 1.025, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 sm:px-7 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:via-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_28px_rgba(245,158,11,0.45)] flex items-center space-x-2 cursor-pointer group"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>VIEW SERVICES & PRICING</span>
            </motion.button>

            <motion.a
              id="hero-phone-direct-btn"
              href={getTelLink()}
              whileHover={{ x: 2 }}
              className="px-2 py-3.5 text-xs text-slate-400 hover:text-amber-400 transition-colors flex items-center space-x-1.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-mono-tech">{getDisplayOwnerPhone()}</span>
            </motion.a>
          </motion.div>

          {/* Privacy Trust Micro-Disclaimer */}
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5 } }
            }}
            className="text-xs text-slate-400/80 pt-0.5"
          >
            By submitting an inquiry, you consent to sending your request details directly to the independent business operator via WhatsApp.
          </motion.p>

          {/* Realistic Quality Commitments - Rock-Solid Responsive Alignment */}
          <motion.div 
            className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-x-6 sm:gap-y-2 text-[11px] sm:text-xs text-slate-300 font-mono-tech pt-2 border-t border-white/5 sm:border-transparent"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8 } }
            }}
          >
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 rounded-full bg-amber-500/15 text-amber-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                ✓
              </span>
              <span>Quality Assurance Walk-Around Inspection</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 rounded-full bg-amber-500/15 text-amber-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                ✓
              </span>
              <span>Experienced Detail Technicians</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 rounded-full bg-amber-500/15 text-amber-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                ✓
              </span>
              <span>Professional Surface Care Standards</span>
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
            <span>We utilize professional-grade products from trusted industry leaders</span>
          </div>

          {/* Clean Disciplines List */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-8 text-[11px] font-mono-tech text-slate-300">
            <span className="flex items-center space-x-1.5">
              <span className="text-amber-500">•</span>
              <span>Surface Decontamination</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="text-amber-500">•</span>
              <span>Multi-Stage Correction</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="text-amber-500">•</span>
              <span>Ceramic Surface Care</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="text-amber-500">•</span>
              <span>Dry Steam Sanitization</span>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
