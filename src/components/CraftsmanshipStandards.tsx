import React from 'react';
import { ShieldCheck, Droplets, Sun, Sparkles, Award, Cpu, Flame, Layers } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const CraftsmanshipStandards: React.FC = () => {
  const standards = [
    {
      icon: <Sun className="w-6 h-6 text-amber-400" />,
      title: "5000K High-CRI Mobile Inspection Lighting",
      description: "Our mobile rigs carry specialized high Color Rendering Index diffuse inspection lighting that exposes every micro-scratch, swirl mark, and paint flaw under outdoor and garage environments."
    },
    {
      icon: <Droplets className="w-6 h-6 text-sky-400" />,
      title: "Self-Contained 0-PPM Spot-Free Deionized Water",
      description: "We carry our own on-board purified deionized water tanks. Every drop is 100% mineral-free, guaranteeing zero water spots, mineral etching, or hard water streaks on paint and glass."
    },
    {
      icon: <Flame className="w-6 h-6 text-amber-500" />,
      title: "212°F Commercial Steam Sanitization",
      description: "We utilize industrial-grade pressurized vapor steam to deep-clean, sanitize, and eliminate bacteria and odors from leather pores, air vents, cup holders, and carpeting without toxic chemicals."
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: "Ultrasonic Digital Paint Thickness Gauges",
      description: "Before machine polishing on-site, we measure clear coat thickness in microns across every panel to safely eliminate swirl marks and maximize paint longevity."
    },
    {
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      title: "Rupes Bigfoot & Flex Dual-Action Polishers",
      description: "We exclusively deploy Italian Rupes and German Flex orbital polishers matched with micro-fine pad densities and jewel compounds for swirl-free, hologram-free mirror reflections."
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Fully Self-Contained Power & Zero-Mess",
      description: `${BUSINESS_INFO.name} brings independent ultra-quiet power generators and water tanks. No hookups required from your home or office — just hand us your keys and relax.`
    }
  ];

  return (
    <section id="standards" className="py-24 bg-[#0c0f16] border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono-tech text-amber-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Jonathan's Mobile Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Obsessive Standards. Direct To Your Door.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            We deliver clinical grade on-site hand washing, gloss enhancement, and steam interior detailing throughout Queens, Long Island & Greater NYC.
          </p>
        </div>

        {/* Standards 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((std, idx) => (
            <div
              key={idx}
              className="bg-[#121620] border border-white/10 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {std.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {std.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {std.description}
              </p>
            </div>
          ))}
        </div>

        {/* Studio Bay Showcase Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#151a24] via-[#10141e] to-[#151a24] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono-tech text-amber-400 uppercase font-semibold">Mobile Detailing Unit Specification</span>
            <div className="text-xl sm:text-2xl font-display font-bold text-white">
              Jonathan's Mobile Carwash • We Bring Water & Power
            </div>
            <p className="text-xs text-slate-400 max-w-xl">
              Fully self-contained mobile detail unit equipped with 0-PPM deionized water filtration, quiet generator power, commercial steam extractors, and dual-action polishers for showroom results in your driveway.
            </p>
          </div>
          <div className="flex items-center space-x-3 shrink-0">
            <div className="text-right font-mono-tech text-xs hidden sm:block">
              <span className="text-emerald-400 font-bold block">● Queens, Long Island & NYC</span>
              <span className="text-slate-400">Doorstep & Workplace Service</span>
            </div>
            <div className="h-10 w-[1px] bg-white/10 hidden sm:block"></div>
            <span className="px-4 py-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 font-mono-tech text-xs font-bold rounded-lg">
              MOBILE DISPATCH
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
