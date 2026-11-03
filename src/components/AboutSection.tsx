import React from 'react';
import { ShieldCheck, Sparkles, Droplets, Gauge, MapPin, CheckCircle } from 'lucide-react';
import { useTemplate } from '../context/TemplateContext';
import ceramicApplicatorImg from '../assets/images/ceramic_applicator_hood_1787210837591.jpg';

export const AboutSection: React.FC = () => {
  const { config, showRawPlaceholders } = useTemplate();

  const standards = [
    {
      title: "Deionized Water & Spot-Free Rinse",
      desc: "Zero TDS filtered water ensures no mineral water spots bake into your clear coat."
    },
    {
      title: "Dual-Action Random Orbital Polishers",
      desc: "Micro-abrasive jeweling eliminates swirls without generating destructive heat or paint burn."
    },
    {
      title: "Climate-Controlled IR Curing Bay",
      desc: "Ceramic coatings are applied and infra-red heat cured in clean, dust-free studio bays."
    },
    {
      title: "Digital Paint Depth Gauge Audits",
      desc: "We measure clear coat thickness in microns before touching a rotary pad to ensure safety."
    }
  ];

  return (
    <section id="about" className="py-20 border-b border-white/10 bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Studio Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
              <img
                src={ceramicApplicatorImg}
                alt="Detail technician applying professional ceramic coating"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#090b10]/90 backdrop-blur-md border border-white/10">
                <div className="text-xs font-mono-tech text-accent uppercase font-bold tracking-wider mb-1">
                  Master Detailing Process
                </div>
                <div className="text-sm font-semibold text-white">
                  Hand-crafted gloss by certified automotive detailers
                </div>
              </div>
            </div>

            {/* Subtle glow circle */}
            <div 
              className="absolute -bottom-8 -left-8 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: config.accentColor }}
            />
          </div>

          {/* Right Column: About Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-mono-tech uppercase tracking-widest text-accent font-semibold">
                About Us · Our Craftsmanship
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white leading-tight">
                Obsessive Precision for Vehicles That Deserve the Best
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Founded with a mission to bring true concourse standards to daily drivers, sports cars, and luxury SUVs in{' '}
                {showRawPlaceholders ? (
                  <strong className="text-amber-400 font-mono">[YOUR CITY, STATE]</strong>
                ) : (
                  <strong className="text-white">{config.city}, {config.state}</strong>
                )}. We don't believe in hurried assembly-line car washes. Every project at{' '}
                {showRawPlaceholders ? (
                  <strong className="text-amber-400 font-mono">[YOUR BUSINESS NAME]</strong>
                ) : (
                  <strong className="text-white">{config.businessName}</strong>
                )}{' '}
                receives dedicated master technician hours.
              </p>
            </div>

            {/* Standards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {standards.map((std, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#111622] border border-white/10 space-y-1">
                  <div className="flex items-center space-x-2 text-white font-bold text-xs">
                    <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{std.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    {std.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Service Promise */}
            <div className="p-4 rounded-xl bg-accent/10 border border-accent/30 flex items-center space-x-3 text-xs text-slate-200">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
              <span>
                100% Satisfaction Guarantee: We do a complete lighting walk-around with you prior to vehicle handover.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
