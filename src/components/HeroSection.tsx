import React from 'react';
import { ChevronRight, PhoneCall, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/businessData';
import heroSupercarImg from '../assets/images/luxury_hero_supercar_1787212586636.jpg';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExplorePackages: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onExplorePackages }) => {
  return (
    <section className="relative overflow-hidden bg-[#07090e] text-white min-h-[76vh] md:min-h-[82vh] flex flex-col justify-between select-none">
      
      {/* BACKGROUND SUPERCAR IMAGE WITH LUXURY AMBIENT CINEMATIC MOTION */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* The Full Car View - Slow luxury zoom & subtle drift */}
        <motion.div 
          className="absolute inset-0 flex justify-end items-center"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full lg:w-[66%] xl:w-[60%] h-full relative flex items-center justify-end">
            <motion.img
              src={heroSupercarImg}
              alt="RetroClean Detailing - Bayside Mobile Auto Detailing Unit"
              className="w-full h-full object-cover object-[65%_center] lg:object-right opacity-65 sm:opacity-80 lg:opacity-95"
              referrerPolicy="no-referrer"
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                duration: 18, 
                repeat: Infinity, 
                repeatType: "reverse", 
                ease: "easeInOut" 
              }}
            />

            {/* Glowing Accent with subtle breathing pulse */}
            <motion.div 
              className="hidden lg:block absolute top-[45%] right-[25%] w-48 h-1 bg-amber-500/40 blur-[4px] rounded-full"
              animate={{ opacity: [0.35, 0.8, 0.35], scaleX: [0.9, 1.1, 0.9] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Left Edge Seamless Feather Blend into Dark Canvas */}
            <div className="absolute inset-y-0 left-0 w-36 sm:w-64 bg-gradient-to-r from-[#07090e] via-[#07090e]/90 to-transparent"></div>
          </div>
        </motion.div>

        {/* Global Dark Radial & Linear Overlays for Crisp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-[#07090e]/90 to-transparent sm:w-[65%] lg:w-[50%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-[#07090e]/30"></div>
        
        {/* Subtle Ambient Golden Glow */}
        <motion.div 
          className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-3xl"
          animate={{ opacity: [0.02, 0.06, 0.02], scale: [0.95, 1.08, 0.95] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
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
            className="inline-flex items-center space-x-2 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-mono-tech text-slate-400"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-pulse"></span>
            <span className="text-slate-300 font-semibold">{BUSINESS_INFO.addressShort}</span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-400 font-bold">{BUSINESS_INFO.rating}★ ({BUSINESS_INFO.reviewCount}+ Reviews)</span>
          </motion.div>

          {/* Hero Headline: RetroClean Detailing - Bayside */}
          <motion.div 
            className="space-y-2.5"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.08]">
              RetroClean <br />
              <span className="font-serif-luxury italic font-normal tracking-wide text-amber-400 capitalize text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Detailing - Bayside
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-display font-bold text-slate-100 leading-snug pt-1">
              Premium Mobile Auto Detailing in Bayside, Queens & Long Island — We Bring Water & Power to You.
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
                100% self-contained mobile detailing unit equipped with pure spot-free deionized water and silent power generators dispatched straight to your driveway or workplace.
              </p>
            </div>
            <div>
              <p>
                Ceramic coating & paint correction, computer-cut window tinting, recurring care plans, and stain & odor extraction. Call or text <strong className="text-amber-400">{BUSINESS_INFO.phone}</strong>.
              </p>
            </div>
          </motion.div>

          {/* Clean Action Buttons: Triggering Call or Text to (347) 494-0646 as requested */}
          <motion.div 
            className="flex flex-wrap items-center gap-3.5 pt-2"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            {/* Primary Action Button: BOOK APPOINTMENT -> triggers call/text */}
            <motion.a
              id="hero-book-appointment-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              whileHover={{ scale: 1.025, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 sm:px-8 py-3.5 bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 hover:from-yellow-300 hover:via-amber-300 hover:to-amber-400 text-slate-950 font-bold font-mono-tech text-xs sm:text-sm uppercase tracking-[0.15em] rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_28px_rgba(245,158,11,0.45)] flex items-center space-x-2.5 cursor-pointer group"
            >
              <PhoneCall className="w-4 h-4 text-slate-900" />
              <span>BOOK APPOINTMENT</span>
              <ChevronRight className="w-4 h-4 text-slate-900 transition-transform group-hover:translate-x-1" />
            </motion.a>

            {/* Direct Call / Text Button */}
            <motion.a
              id="hero-call-now-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              whileHover={{ scale: 1.025, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 sm:px-7 py-3.5 bg-[#141a27] hover:bg-[#1c2436] text-white border border-amber-400/40 hover:border-amber-400 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.15)] flex items-center space-x-2 cursor-pointer group"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>CALL / TEXT: {BUSINESS_INFO.phone}</span>
            </motion.a>

            {/* Secondary Services Anchor */}
            <motion.button
              id="hero-explore-packages-btn"
              onClick={onExplorePackages}
              whileHover={{ x: 2 }}
              className="px-3 py-3.5 text-xs text-slate-300 hover:text-amber-400 transition-colors flex items-center space-x-1.5 cursor-pointer font-mono-tech uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>View Services & Pricing</span>
            </motion.button>
          </motion.div>

          {/* Simple Quality Guarantees */}
          <motion.div 
            className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-slate-400 font-mono-tech pt-1"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8 } }
            }}
          >
            <span className="flex items-center space-x-1.5">
              <span className="text-amber-400">✓</span>
              <span>Fully Mobile (Water & Power Onboard)</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="text-amber-400">✓</span>
              <span>Serving Bayside, Queens & Long Island</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="text-amber-400">✓</span>
              <span>100% Satisfaction Guarantee</span>
            </span>
          </motion.div>

        </motion.div>
      </div>

      {/* BOTTOM BRAND / LUXURY LOGOS BAR (Exact Match to Reference Bottom Strip) */}
      <motion.div 
        className="w-full border-t border-white/10 bg-[#05060a]/95 backdrop-blur-md py-4 sm:py-5 px-4 relative z-20"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono-tech text-slate-500 uppercase tracking-widest shrink-0">
            <span>TRUSTED DETAILING STANDARDS & PRODUCTS</span>
          </div>

          {/* Luxury Typography Logos Grid Matching Screenshot */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-10 lg:gap-12 opacity-75 hover:opacity-100 transition-opacity">
            {/* ARMOND logo */}
            <motion.div whileHover={{ y: -2 }} className="flex items-center space-x-2 group cursor-pointer text-slate-300 hover:text-white transition-colors">
              <div className="w-6 h-6 rounded border border-white/30 flex items-center justify-center font-serif text-xs font-bold">
                L T
              </div>
              <div className="flex flex-col text-[10px] leading-tight font-mono-tech font-semibold tracking-widest uppercase">
                <span>ARMOND</span>
              </div>
            </motion.div>

            {/* Darkside Studios logo */}
            <motion.div whileHover={{ y: -2 }} className="flex flex-col items-center group cursor-pointer text-slate-300 hover:text-white transition-colors">
              <span className="font-serif italic text-sm tracking-wide">Darkside</span>
              <span className="text-[7px] tracking-[0.3em] uppercase text-slate-500 font-mono-tech">—— STUDIOS ——</span>
            </motion.div>

            {/* BASTIL logo */}
            <motion.div whileHover={{ y: -2 }} className="flex items-center space-x-1.5 group cursor-pointer text-slate-300 hover:text-white transition-colors">
              <span className="text-base font-serif font-black text-amber-500">8</span>
              <div className="flex flex-col text-[10px] leading-none tracking-widest uppercase font-bold">
                <span>BASTIL</span>
                <span className="text-[6px] tracking-[0.2em] text-slate-500 font-normal">PROFESSIONALS</span>
              </div>
            </motion.div>

            {/* BŌLEIR logo */}
            <motion.div whileHover={{ y: -2 }} className="group cursor-pointer text-slate-300 hover:text-white transition-colors">
              <span className="font-display font-medium text-xs tracking-[0.3em] uppercase">
                BŌLEIR
              </span>
            </motion.div>

            {/* Esquire logo */}
            <motion.div whileHover={{ y: -2 }} className="group cursor-pointer text-slate-300 hover:text-white transition-colors">
              <span className="font-serif italic font-bold text-sm tracking-wider">
                Esquire
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
