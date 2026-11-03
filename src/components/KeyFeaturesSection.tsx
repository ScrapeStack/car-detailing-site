import React from 'react';
import { Award, ThumbsUp, Truck, MessageSquare, ArrowUpRight } from 'lucide-react';
import { useTemplate } from '../context/TemplateContext';

export const KeyFeaturesSection: React.FC = () => {
  const { config, showRawPlaceholders } = useTemplate();

  const features = [
    {
      icon: Award,
      title: "Certified Technicians",
      description: "Trained & certified detailers.",
      subtext: "Master paint polishers with IDA-certified surface care protocols."
    },
    {
      icon: ThumbsUp,
      title: "100% Satisfaction",
      description: "We don't stop until it's perfect.",
      subtext: "Pre-handover walk-around inspection on every single vehicle."
    },
    {
      icon: Truck,
      title: "Mobile & Shop Service",
      description: showRawPlaceholders
        ? "We come to you or host you at [YOUR STREET ADDRESS]."
        : `We come to you or host you at ${config.streetAddress}.`,
      subtext: "Choose our clean studio bay or convenient on-site mobile van."
    },
    {
      icon: MessageSquare,
      title: "Fast Messenger Support",
      description: "Got questions? Send us a message on Facebook Messenger for quick estimates.",
      subtext: "Send photos of your vehicle for instant estimates within minutes.",
      link: config.facebookMessengerLink,
      linkText: "Open Messenger"
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 border-b border-white/10 bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-accent font-semibold">
            Trust & Excellence
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white text-balance">
            Engineered for Perfection, Backed by Trust
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Every car treated with concourse-level discipline, surgical lighting, and certified expertise.
          </p>
        </div>

        {/* 4 Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#111622] border border-white/10 hover:border-accent/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Modern Icon badge */}
                  <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-200 leading-snug mb-3">
                    {feature.description}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feature.subtext}
                  </p>
                </div>

                {feature.link && (
                  <div className="pt-4 mt-4 border-t border-white/5">
                    <a
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-accent hover:underline gap-1"
                    >
                      <span>{feature.linkText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
