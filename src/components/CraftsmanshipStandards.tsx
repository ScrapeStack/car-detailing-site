import React from 'react';
import { ShieldCheck, Droplets, Sun, Sparkles, Award, Cpu, Flame, Layers } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const CraftsmanshipStandards: React.FC = () => {
  const standards = [
    {
      icon: <Sun className="w-6 h-6 text-amber-400" />,
      title: "5000K High-CRI LED Inspection Lighting",
      description: "Our Bronx detailing bays and mobile units are equipped with specialized high Color Rendering Index diffuse inspection lamps that expose every micro-scratch, hologram, and clear coat flaw that standard ambient lights hide."
    },
    {
      icon: <Droplets className="w-6 h-6 text-sky-400" />,
      title: "0-PPM Deionized Pure Water & Onboard Power",
      description: "Our facility at 233 Brinsmade Ave and mobile units utilize multi-stage deionization resin filtration that strips 100% of minerals and calcium, delivering a streak-free, spot-free finish."
    },
    {
      icon: <Flame className="w-6 h-6 text-amber-500" />,
      title: "Short-Wave Infrared Heat Lamp Baking",
      description: "Unlike detailers that leave ceramic to air cure in unpredictable humidity, we bake every ceramic coating under infrared lamps, achieving full cross-link molecular density and maximum hardness."
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: "Ultrasonic Digital Paint Thickness Gauges",
      description: "Before machine polishing, our master technicians map your clear coat thickness in microns across all panels to preserve paint longevity and safely eliminate swirl marks."
    },
    {
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      title: "Rupes Bigfoot & Flex Dual-Action Polishers",
      description: "We exclusively deploy Italian Rupes and German Flex orbital polishers matched with micro-fine pad densities and jewel compounds for swirl-free, hologram-free mirror reflections."
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Official Certified Detailing Standards",
      description: `${BUSINESS_INFO.name} is an authorized installer. Your ceramic coating and paint correction treatments are officially certified, elevating long-term vehicle provenance and resale value.`
    }
  ];

  return (
    <section id="standards" className="py-24 bg-[#0c0f16] border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono-tech text-amber-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Zephyr Auto Spa Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Obsessive Standards. Zero Compromise.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            We deliver clinical grade detailing, high-gloss paint protection, and deep interior restoration at 233 Brinsmade Ave in the Bronx.
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
            <span className="text-xs font-mono-tech text-amber-400 uppercase font-semibold">Bronx Detailing Bay Specification</span>
            <div className="text-xl sm:text-2xl font-display font-bold text-white">
              Zephyr Auto Spa • {BUSINESS_INFO.addressShort}
            </div>
            <p className="text-xs text-slate-400 max-w-xl">
              Equipped with high-intensity 5000K LED inspection arrays, industrial steam sanitizers, dual-action rotary polishers, and ceramic curing lamps for pristine showroom transformations.
            </p>
          </div>
          <div className="flex items-center space-x-3 shrink-0">
            <div className="text-right font-mono-tech text-xs hidden sm:block">
              <span className="text-emerald-400 font-bold block">● 233 Brinsmade Ave, Bronx</span>
              <span className="text-slate-400">Serving Bronx & Greater NYC</span>
            </div>
            <div className="h-10 w-[1px] bg-white/10 hidden sm:block"></div>
            <span className="px-4 py-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 font-mono-tech text-xs font-bold rounded-lg">
              BRONX FACILITY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
