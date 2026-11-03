import React, { useState } from 'react';
import { Sparkles, Shield, Droplets, Wrench, Truck, Check, ArrowRight, Clock, DollarSign } from 'lucide-react';
import { SERVICES_DATA } from '../data/businessData';
import { useTemplate } from '../context/TemplateContext';
import { ServiceDetail } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const { config, showRawPlaceholders } = useTemplate();
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'paint-correction':
        return <Sparkles className="w-5 h-5" />;
      case 'ceramic-coating':
        return <Shield className="w-5 h-5" />;
      case 'interior-deep-clean':
        return <Droplets className="w-5 h-5" />;
      case 'engine-bay':
        return <Wrench className="w-5 h-5" />;
      case 'mobile-detailing':
        return <Truck className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const currentService: ServiceDetail = SERVICES_DATA.find(s => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-20 border-b border-white/10 bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-mono-tech uppercase tracking-widest text-accent font-semibold block mb-2">
              Core Detailing Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Specialized Automotive Services
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Whether at our studio or through our mobile unit in{' '}
            {showRawPlaceholders ? '[YOUR CITY]' : config.city}, each service uses precision products and calibrated equipment.
          </p>
        </div>

        {/* Service Category Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {SERVICES_DATA.map((service) => {
            const isSelected = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden group ${
                  isSelected
                    ? 'bg-[#151a24] border-accent shadow-lg shadow-accent/15'
                    : 'bg-[#111622] border-white/10 hover:border-white/20'
                }`}
              >
                <div className={`p-2 rounded-lg w-fit mb-3 transition-colors ${
                  isSelected ? 'bg-accent text-white' : 'bg-white/5 text-accent group-hover:text-white'
                }`}>
                  {getServiceIcon(service.id)}
                </div>
                <div className="font-display font-bold text-sm text-white mb-1 leading-snug">
                  {service.title.split('&')[0]}
                </div>
                <div className="text-[11px] text-slate-400 font-mono-tech flex items-center justify-between">
                  <span>Starting ${service.startingPrice}</span>
                  {service.popular && (
                    <span className="text-accent text-[10px] font-bold">★ POPULAR</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed Panel */}
        <div className="bg-[#111622] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Detail Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono-tech">
                <span className="text-accent font-bold uppercase tracking-wider">
                  {currentService.badge}
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center text-slate-400 gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  Est. {currentService.duration}
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center text-slate-200 gap-1 font-semibold">
                  <DollarSign className="w-3.5 h-3.5 text-accent" />
                  Starting at ${currentService.startingPrice}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {currentService.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentService.fullDesc}
              </p>

              {/* Specs Metric Badges */}
              <div className="grid grid-cols-3 gap-3 py-1">
                {currentService.specs.map((spec, i) => (
                  <div key={i} className="bg-black/30 border border-white/10 rounded-xl p-3">
                    <span className="text-[10px] uppercase font-mono-tech text-slate-400 block">{spec.label}</span>
                    <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* What is Included Bullet Points */}
              <div className="space-y-2">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 font-semibold block">
                  Service Inclusions:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentService.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectServiceForQuote(currentService.title)}
                  className="px-6 py-3.5 bg-accent hover:opacity-95 text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-md glow-accent-hover flex items-center space-x-2 cursor-pointer transition-all"
                >
                  <span>Request Quote for {currentService.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Service Studio Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black border border-white/15 shadow-2xl group">
                <img
                  src={currentService.imageUrl}
                  alt={currentService.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                  <div className="flex items-center justify-between text-xs font-mono-tech">
                    <span className="text-accent font-semibold uppercase">
                      {showRawPlaceholders ? '[YOUR BUSINESS NAME]' : config.businessName}
                    </span>
                    <span className="text-slate-400">Certified Standard</span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium mt-1">
                    {currentService.shortDesc}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
