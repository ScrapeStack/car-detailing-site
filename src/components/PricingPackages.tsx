import React, { useState } from 'react';
import { Shield, Sparkles, Check, ArrowRight, Star, Clock, Award, ChevronRight } from 'lucide-react';
import { PACKAGES_DATA, VEHICLE_OPTIONS } from '../data/businessData';
import { VehicleType } from '../types';

interface PricingPackagesProps {
  onSelectPackage: (packageId: string, vehicleType: VehicleType) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onSelectPackage }) => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>('coupe');

  const currentVehicleOption = VEHICLE_OPTIONS.find(v => v.id === selectedVehicle) || VEHICLE_OPTIONS[0];

  const calculatePrice = (basePrice: number) => {
    return Math.round(basePrice * currentVehicleOption.multiplier);
  };

  return (
    <section id="pricing" className="py-24 bg-[#0c0f16] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono-tech text-amber-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Transparent Concourse Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Curated Detailing Packages
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Select your vehicle class below to view real-time adjusted rates. All ceramic packages include Carfax warranty registration and climate-controlled bay curing.
          </p>

          {/* Vehicle Class Selector */}
          <div className="mt-8 p-1.5 bg-[#090b10] border border-white/10 rounded-2xl inline-flex flex-wrap justify-center gap-1.5 max-w-full">
            {VEHICLE_OPTIONS.map((veh) => {
              const isSelected = veh.id === selectedVehicle;
              return (
                <button
                  key={veh.id}
                  onClick={() => setSelectedVehicle(veh.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                    isSelected
                      ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/25'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{veh.name}</span>
                  {veh.multiplier > 1 && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-black/20 text-black' : 'bg-white/10 text-slate-400'
                    }`}>
                      +{Math.round((veh.multiplier - 1) * 100)}%
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="text-xs text-slate-500 mt-2 font-mono-tech">
            Active Size: <span className="text-amber-400 font-semibold">{currentVehicleOption.name}</span> ({currentVehicleOption.examples})
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {PACKAGES_DATA.map((pkg) => {
            const finalPrice = calculatePrice(pkg.price);
            const originalFinal = pkg.originalPrice ? calculatePrice(pkg.originalPrice) : null;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  pkg.bestValue
                    ? 'bg-gradient-to-b from-[#182030] to-[#0f1420] border-2 border-amber-500 shadow-2xl shadow-amber-500/15 scale-100 xl:-translate-y-2'
                    : pkg.popular
                    ? 'bg-[#121620] border border-amber-500/50 shadow-xl'
                    : 'bg-[#0e1118] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Top Badge */}
                {pkg.bestValue && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-black uppercase text-[10px] tracking-widest px-4 py-1 rounded-full shadow-lg">
                    ★ MOST POPULAR IN ASTORIA
                  </div>
                )}
                {pkg.popular && !pkg.bestValue && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sky-500 text-black font-black uppercase text-[10px] tracking-widest px-3 py-1 rounded-full shadow-lg">
                    PAINT RESTORATION FOCUS
                  </div>
                )}

                <div>
                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <span className="text-[11px] font-mono-tech text-amber-400 font-semibold uppercase">
                      {pkg.serviceType}
                    </span>
                    <h3 className="text-xl font-display font-black text-white mt-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="mb-6 p-4 bg-[#090b10] rounded-xl border border-white/5">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl sm:text-4xl font-display font-black text-white">
                        ${finalPrice}
                      </span>
                      {originalFinal && (
                        <span className="text-xs text-slate-500 line-through font-mono-tech">
                          ${originalFinal}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-400 mt-2 pt-2 border-t border-white/5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-500" />
                        {pkg.duration}
                      </span>
                      <span className="text-emerald-400 font-semibold">{pkg.warranty}</span>
                    </div>
                  </div>

                  {/* Feature Checkmarks */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-mono-tech uppercase text-slate-400 font-bold block">
                      Package Inclusions:
                    </span>
                    {pkg.includes.map((inc, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                        <div className="mt-0.5 p-0.5 rounded bg-amber-500/20 text-amber-400 shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-snug">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Perfect for note */}
                  <div className="mb-4 text-[11px] text-slate-400 bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                    <strong className="text-slate-300 block mb-0.5">Best Suited For:</strong>
                    {pkg.perfectFor}
                  </div>

                  {/* CTA Button */}
                  <button
                    id={`package-select-btn-${pkg.id}`}
                    onClick={() => onSelectPackage(pkg.id, selectedVehicle)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 ${
                      pkg.bestValue
                        ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-amber-500/50'
                    }`}
                  >
                    <span>Select & Book Package</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
