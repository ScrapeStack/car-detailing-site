import React, { useState } from 'react';
import { Sparkles, Shield, Droplets, Wrench, Truck, Check, ArrowRight, Clock, DollarSign, Layers } from 'lucide-react';
import { SERVICES_DATA } from '../data/businessData';
import { ServiceDetail } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'auto-detailing':
        return <Sparkles className="w-5 h-5" />;
      case 'car-wash':
        return <Droplets className="w-5 h-5" />;
      case 'window-tinting':
        return <Layers className="w-5 h-5" />;
      case 'ceramic-coating':
        return <Shield className="w-5 h-5" />;
      case 'paint-correction':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const currentService: ServiceDetail = SERVICES_DATA.find(s => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-24 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-mono-tech text-amber-400 font-semibold block mb-2">
              Master Craftsmanship Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
              Specialized Detailing Services
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Every vehicle at our Astoria Auto Detailing Center receives clinical grade attention, tailored chemical balances, and certified ceramic & tint installation.
          </p>
        </div>

        {/* Service Category Buttons / Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {SERVICES_DATA.map((service) => {
            const isSelected = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden group ${
                  isSelected
                    ? 'bg-[#151a24] border-amber-500 shadow-lg shadow-amber-500/10'
                    : 'bg-[#0e1118] border-white/10 hover:bg-[#121620] hover:border-white/20'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                )}
                <div className={`p-2 rounded-lg w-fit mb-3 transition-colors ${
                  isSelected ? 'bg-amber-500 text-black' : 'bg-white/5 text-amber-400 group-hover:text-white'
                }`}>
                  {getServiceIcon(service.id)}
                </div>
                <div className="font-display font-bold text-sm text-white mb-1 leading-snug">
                  {service.title.split('&')[0]}
                </div>
                <div className="text-[11px] text-slate-400 font-mono-tech flex items-center justify-between">
                  <span>From ${service.startingPrice}</span>
                  {service.popular && (
                    <span className="text-amber-400 text-[10px] font-bold">★ POPULAR</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed Showcase Panel */}
        <div className="bg-[#0f131d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Detail Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono-tech font-bold uppercase rounded-full">
                  {currentService.badge}
                </span>
                <span className="flex items-center text-xs text-slate-400 font-mono-tech gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  Typical Time: {currentService.duration}
                </span>
                <span className="flex items-center text-xs text-emerald-400 font-mono-tech gap-1 font-semibold">
                  <DollarSign className="w-3.5 h-3.5" />
                  Starting at ${currentService.startingPrice}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white">
                {currentService.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentService.fullDesc}
              </p>

              {/* Specs Metric Badges */}
              <div className="grid grid-cols-3 gap-3 py-2">
                {currentService.specs.map((spec, i) => (
                  <div key={i} className="bg-[#090b10] border border-white/10 rounded-xl p-3">
                    <span className="text-[10px] uppercase font-mono-tech text-slate-400 block">{spec.label}</span>
                    <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* What is Included Bullet Points */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 font-semibold block">
                  Process & Inclusions:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentService.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-200">
                      <div className="mt-0.5 p-0.5 rounded bg-amber-500/20 text-amber-400 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For Note */}
              <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xl text-xs text-slate-300">
                <strong className="text-amber-400 font-mono-tech uppercase block mb-0.5">Ideal Application:</strong>
                {currentService.idealFor}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  id={`service-quote-btn-${currentService.id}`}
                  onClick={() => onSelectServiceForQuote(currentService.id)}
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-amber-500/20 flex items-center space-x-2 group"
                >
                  <span>Build Quote for {currentService.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#090b10]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono-tech text-amber-400 font-semibold uppercase">Pasadena Studio Standard</span>
                    <span className="text-slate-400">IDA Certified</span>
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
