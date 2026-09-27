import React from 'react';
import { Shield, Sparkles, Check, Clock, Award, ChevronRight } from 'lucide-react';
import { PACKAGES_DATA, VEHICLE_OPTIONS } from '../data/businessData';
import { BUSINESS_CONFIG } from '../config';
import { VehicleType } from '../types';

interface PricingPackagesProps {
  onSelectPackage: (packageId: string, vehicleType: VehicleType) => void;
  selectedVehicleClass: VehicleType;
  onSelectVehicleClass: (vehicleType: VehicleType) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ 
  onSelectPackage,
  selectedVehicleClass = 'coupe',
  onSelectVehicleClass
}) => {
  const currentVehicleOption = VEHICLE_OPTIONS.find(v => v.id === selectedVehicleClass) || VEHICLE_OPTIONS[0];

  const calculatePrice = (basePrice: number) => {
    return (basePrice * currentVehicleOption.multiplier).toFixed(2);
  };

  return (
    <section id="pricing" className="py-24 bg-[#0c0f16] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-xs font-mono-tech text-[#00E5FF] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Transparent Pricing in {BUSINESS_CONFIG.location}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Curated Wash & Detail Packages
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Select your vehicle class below to view real-time adjusted rates. All services are performed with gentle microfiber methods and premium care solutions.
          </p>

          {/* Vehicle Class Selector */}
          <div className="mt-8 p-1.5 bg-[#090b10] border border-white/10 rounded-2xl inline-flex flex-wrap justify-center gap-1.5 max-w-full">
            {VEHICLE_OPTIONS.map((veh) => {
              const isSelected = veh.id === selectedVehicleClass;
              return (
                <button
                  key={veh.id}
                  onClick={() => onSelectVehicleClass?.(veh.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0066FF] text-white shadow-lg shadow-[#0066FF]/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{veh.name}</span>
                  {veh.multiplier > 1 && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-black/25 text-[#00E5FF]' : 'bg-white/10 text-slate-400'
                    }`}>
                      +{Math.round((veh.multiplier - 1) * 100)}%
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="text-xs text-slate-500 mt-2 font-mono-tech">
            Active Size: <span className="text-[#00E5FF] font-semibold">{currentVehicleOption.name}</span> ({currentVehicleOption.examples})
          </div>
        </div>

        {/* Pricing Cards Grid - 4 Columns on XL screens, 2 on MD, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {PACKAGES_DATA.map((pkg) => {
            const finalPrice = calculatePrice(pkg.price);
            const originalFinal = pkg.originalPrice ? calculatePrice(pkg.originalPrice) : null;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  pkg.bestValue
                    ? 'bg-gradient-to-b from-[#0e1d38] to-[#091122] border-2 border-[#00E5FF] shadow-2xl shadow-[#0066FF]/20 scale-100 xl:-translate-y-2'
                    : pkg.popular
                    ? 'bg-[#121622] border border-[#0066FF]/60 shadow-xl'
                    : 'bg-[#0e1118] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Top Badge */}
                {pkg.bestValue && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0066FF] to-[#00E5FF] text-white font-black uppercase text-[10px] tracking-widest px-4 py-1 rounded-full shadow-lg">
                    ★ MOST POPULAR IN QUEENS
                  </div>
                )}
                {pkg.popular && !pkg.bestValue && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0066FF] text-white font-black uppercase text-[10px] tracking-widest px-3 py-1 rounded-full shadow-lg">
                    CUSTOMER FAVORITE
                  </div>
                )}

                <div>
                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <span className="text-[11px] font-mono-tech text-[#00E5FF] font-semibold uppercase">
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
                        {BUSINESS_CONFIG.currency}{finalPrice}
                      </span>
                      {originalFinal && (
                        <span className="text-xs text-slate-500 line-through font-mono-tech">
                          {BUSINESS_CONFIG.currency}{originalFinal}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-400 mt-2 pt-2 border-t border-white/5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#00E5FF]" />
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
                        <div className="mt-0.5 p-0.5 rounded bg-[#0066FF]/20 text-[#00E5FF] shrink-0">
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
                    onClick={() => onSelectPackage(pkg.id, selectedVehicleClass)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                      pkg.bestValue
                        ? 'bg-gradient-to-r from-[#0066FF] to-[#00E5FF] text-white hover:from-[#0052CC] hover:to-[#00D0E8] shadow-lg shadow-[#0066FF]/25'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-[#0066FF]/50'
                    }`}
                  >
                    <span>Select & Book Package</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* RESPONSIVE DISCLAIMER: Strictly visible, readable, padded, no hidden classes */}
                  <div className="w-full pt-3 px-1">
                    <p className="text-[11px] text-slate-300 text-center leading-relaxed">
                      By submitting you consent to sharing your info via WhatsApp, email, phone, and direct messaging with Gentle Touch Hand Car Wash and Vehicle Detail Center.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
