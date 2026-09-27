import React from 'react';
import { ShieldCheck, Droplets, Sparkles, Award, Flame, Layers } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';

export const CraftsmanshipStandards: React.FC = () => {
  const standards = [
    {
      icon: <Droplets className="w-6 h-6 text-sky-400" />,
      title: "100% Soft Cloth Hand Wash Care",
      description: "We use only ultra-plush microfiber wash mitts and dual-bucket grit-guard systems. Zero harsh automated brushes, ensuring your clear coat remains free of micro-marring swirl marks."
    },
    {
      icon: <Flame className="w-6 h-6 text-sky-400" />,
      title: "220°F Pressurized Steam Extraction",
      description: "Our commercial steam extractors eradicate 99.9% of bacteria, biological allergens, and lingering odors from upholstery and air vents without oversaturating fabrics."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      title: "Dual-Action Paint Polishing",
      description: "Precision orbital machine buffing with optical finishing glazes to eliminate fine oxidation, enhance paint depth, and lock in mirror gloss reflection."
    },
    {
      icon: <Layers className="w-6 h-6 text-indigo-400" />,
      title: "pH-Balanced Leather & Trim Conditioning",
      description: "We cleanse and replenish delicate leather hides and vinyl dash trims with breathable UV-matte balms that defend against sun cracking without oily residue."
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Meticulous Hand Quality Inspection",
      description: "Every hand wash and full showroom detail finishes with an exhaustive multi-point quality inspection of all door jambs, wheel barrels, and glass."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Facility Drop-Off & Mobile Dispatch",
      description: "Visit our dedicated detail facility at 1219 Woodycrest Ave, Bronx, or schedule our fully equipped mobile detailing rig to come right to your location."
    }
  ];

  return (
    <section id="standards" className="py-20 sm:py-24 bg-[#0a0d15] border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono-tech text-sky-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Gentle Touch Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Hand Craftsmanship. Uncompromising Excellence.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Dedicated hand car wash care, hospital-grade steam extraction, and concourse paint protection in the Bronx & Greater NYC.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((std, idx) => (
            <div
              key={idx}
              className="bg-[#121622] border border-white/10 hover:border-sky-400/40 rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {std.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                {std.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {std.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
