import React from 'react';
import { ShieldCheck, Droplets, Sun, Sparkles, Award, Cpu, Flame, Layers } from 'lucide-react';

export const CraftsmanshipStandards: React.FC = () => {
  const standards = [
    {
      icon: <Sun className="w-6 h-6 text-amber-400" />,
      title: "5000K High-CRI LED Studio Lighting",
      description: "Our Pasadena studio is engineered with specialized high Color Rendering Index diffuse lighting arrays that expose every micro-scratch, hologram, and clear coat flaw that standard garage lights hide."
    },
    {
      icon: <Droplets className="w-6 h-6 text-sky-400" />,
      title: "0-PPM Deionized Pure Water Filtration",
      description: "Both our Pasadena studio and mobile detailing Sprinter unit utilize multi-stage deionization resin filters that strip 100% of minerals and calcium, guaranteeing a completely spot-free rinse in direct California sunlight."
    },
    {
      icon: <Flame className="w-6 h-6 text-amber-500" />,
      title: "Short-Wave Infrared Heat Lamp Baking",
      description: "Unlike detailers that leave ceramic to air cure in humid conditions, we bake every ceramic coating under infrared lamps, achieving full cross-link molecular density and maximum Rockwell hardness."
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: "Ultrasonic Digital Paint Thickness Gauges",
      description: "Before machine polishing, we map your clear coat thickness in microns across all metal and carbon composite panels to preserve paint longevity and eliminate burn-through risks."
    },
    {
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      title: "Rupes Bigfoot & Flex Dual-Action Polishers",
      description: "We exclusively deploy Italian Rupes and German Flex orbital polishers matched with micro-fine pad densities and jewel compounds for swirl-free holograph-free mirror reflections."
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Official Carfax Warranty Recording",
      description: "Apex Precision is an authorized installer. Your ceramic coating and paint correction treatments are officially logged into Carfax vehicle history, elevating provenance and resale value."
    }
  ];

  return (
    <section id="standards" className="py-24 bg-[#0c0f16] border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono-tech text-amber-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Apex Precision Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Obsessive Standards. Zero Compromise.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            We operate at the exact intersection of surgical chemistry and automotive art. Here is why luxury car owners across Pasadena and the San Gabriel Valley trust us with their vehicles.
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
            <span className="text-xs font-mono-tech text-amber-400 uppercase font-semibold">Pasadena Studio Specification</span>
            <div className="text-xl sm:text-2xl font-display font-bold text-white">
              Visiting Our 1420 E Walnut St Facility
            </div>
            <p className="text-xs text-slate-400 max-w-xl">
              Enjoy our private customer lounge with high-speed fiber Wi-Fi, Nespresso bar, and direct viewing bay windows while your vehicle receives its precision treatment.
            </p>
          </div>
          <div className="flex items-center space-x-3 shrink-0">
            <div className="text-right font-mono-tech text-xs hidden sm:block">
              <span className="text-emerald-400 font-bold block">● Climate Controlled 70°F</span>
              <span className="text-slate-400">Dust Extraction System</span>
            </div>
            <div className="h-10 w-[1px] bg-white/10 hidden sm:block"></div>
            <span className="px-4 py-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 font-mono-tech text-xs font-bold rounded-lg">
              CLEAN ROOM BAY 1 & 2
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
