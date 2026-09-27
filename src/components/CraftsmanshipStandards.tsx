import React from 'react';
import { ShieldCheck, Droplets, Sparkles, Award, Flame, Wrench } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';

export const CraftsmanshipStandards: React.FC = () => {
  const standards = [
    {
      icon: <Flame className="w-6 h-6 text-amber-500" />,
      title: "Commercial High-Heat Steam Extraction",
      description: "Our pressurized dry steam penetrates deep into seat upholstery and carpets at 220°F, lifting stubborn spills and eradicating 99.9% of bacteria without leaving soggy residues."
    },
    {
      icon: <Droplets className="w-6 h-6 text-sky-400" />,
      title: "High-Foam Lubricating Wash Systems",
      description: "Thick snow foam blankets your vehicle exterior, encapsulating road grime and abrasive NYC salt so dirt glides away effortlessly without causing swirl marks."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-400" />,
      title: "UV Protection & OEM Matte Conditioning",
      description: "We restore interior plastics, vinyl, and leather to a clean, non-greasy factory matte finish with durable UV blockers that resist sun cracking and fading."
    },
    {
      icon: <Wrench className="w-6 h-6 text-indigo-400" />,
      title: "Mobile Driveway Mechanical Precision",
      description: "Professional installation of front & rear brake pads/rotors and aftermarket touchscreen stereos right in your driveway, saving you valuable hours at an auto shop."
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Meticulous Hand Quality Walk-Around",
      description: "Every mobile detailing job concludes with a joint walk-around inspection to ensure your interior and exterior meet our rigorous 5-star standard before departure."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "100% Mobile — We Come To You",
      description: "Based in the Bronx, Hershel arrives directly at your home, apartment, or designated parking area across the Bronx and the Greater NYC Metropolitan Area."
    }
  ];

  return (
    <section id="standards" className="py-20 sm:py-24 bg-[#0c0f16] border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono-tech text-amber-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Guy On The Go Promise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Mobile Excellence. Direct to Your Driveway.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Professional steam extraction, high-foam exterior baths, and mechanical upgrades delivered directly to you across the Bronx and NYC.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((std, idx) => (
            <div
              key={idx}
              className="bg-[#121620] border border-white/10 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 group"
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
      </div>
    </section>
  );
};
