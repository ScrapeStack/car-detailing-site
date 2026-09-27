import React from 'react';
import { Award, ChevronRight, Check, Clock, Shield, Sparkles, Wrench } from 'lucide-react';
import { PACKAGES_DATA, VEHICLE_OPTIONS, ADDONS_DATA, getPackagePrice } from '../data/businessData';
import { BUSINESS_CONFIG } from '../config';
import { VehicleType } from '../types';

interface PricingPackagesProps {
  onSelectPackage: (packageId: string, vehicleType: VehicleType) => void;
  selectedVehicleClass: VehicleType;
  onSelectVehicleClass: (vehicleType: VehicleType) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ 
  onSelectPackage,
  selectedVehicleClass = 'sedan',
  onSelectVehicleClass
}) => {
  const currentVehicleOption = VEHICLE_OPTIONS.find(v => v.id === selectedVehicleClass) || VEHICLE_OPTIONS[0];

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-[#0c0f16] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono-tech text-amber-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Clear & Transparent NYC Mobile Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Services & Pricing Menu
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Select your vehicle class below to view confirmed rates. Hershel brings commercial steam extraction and high-foam detailing directly to your driveway across the Bronx and NYC.
          </p>

          {/* Vehicle Class Selector */}
          <div className="mt-6 p-1.5 bg-[#090b10] border border-white/10 rounded-2xl inline-flex flex-wrap justify-center gap-2 max-w-full">
            {VEHICLE_OPTIONS.map((veh) => {
              const isSelected = veh.id === selectedVehicleClass;
              return (
                <button
                  key={veh.id}
                  onClick={() => onSelectVehicleClass?.(veh.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center space-x-2 cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/25'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{veh.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-mono-tech ${
                    isSelected ? 'bg-black/20 text-black font-bold' : 'bg-white/10 text-slate-400'
                  }`}>
                    {veh.id === 'sedan' ? 'Sedans $200' : '3-Row / Trucks $249.99'}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs text-slate-500 mt-2 font-mono-tech">
            Active Size: <span className="text-amber-400 font-semibold">{currentVehicleOption.name}</span> ({currentVehicleOption.examples})
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PACKAGES_DATA.map((pkg) => {
            const finalPrice = getPackagePrice(pkg.id, selectedVehicleClass);

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  pkg.bestValue
                    ? 'bg-gradient-to-b from-[#182030] to-[#0f1420] border-2 border-amber-500 shadow-2xl shadow-amber-500/15 xl:-translate-y-2'
                    : 'bg-[#121620] border border-white/10 hover:border-amber-500/40'
                }`}
              >
                {/* Top Badge */}
                {pkg.bestValue && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-black uppercase text-[10px] tracking-widest px-4 py-1 rounded-full shadow-lg">
                    ★ MOST POPULAR IN NYC
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
                    <p className="text-xs text-slate-400 mt-1 min-h-[36px]">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="mb-6 p-4 bg-[#090b10] rounded-xl border border-white/5">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl sm:text-4xl font-display font-black text-white">
                        ${finalPrice.toFixed(2)}
                      </span>
                      {pkg.id === 'full-interior-steam' && (
                        <span className="text-[11px] text-slate-400 font-mono-tech">
                          {selectedVehicleClass === 'sedan' ? '(Sedans)' : '(3-Row/Trucks)'}
                        </span>
                      )}
                      {pkg.id !== 'full-interior-steam' && (
                        <span className="text-[11px] text-emerald-400 font-mono-tech">
                          (Flat Rate)
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
                      Includes:
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
                    onClick={() => onSelectPackage(pkg.id, selectedVehicleClass)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer ${
                      pkg.bestValue
                        ? 'bg-[#25D366] hover:bg-[#20bd5a] text-black shadow-lg shadow-[#25D366]/20'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-amber-500/50'
                    }`}
                  >
                    <span>Select & Book Package</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-400/80 text-center pt-2">
                    By submitting an inquiry or reaching out, you consent to sending your request details directly to the independent business operator via WhatsApp, SMS, Phone, or Email.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add-On Services Section */}
        <div className="mt-14 max-w-6xl mx-auto bg-[#0f131d] border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono-tech text-amber-400 font-bold uppercase">
                <Wrench className="w-3.5 h-3.5" />
                <span>Mobile Detailing & Mechanical Upgrades</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-black text-white mt-1">
                Add-On Services (Driveway Convenience)
              </h3>
            </div>
            <div className="text-xs text-slate-400 font-mono-tech">
              Add any treatment to your mobile service booking
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {ADDONS_DATA.map((addon) => (
              <div 
                key={addon.id}
                className="bg-[#090b10] border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:border-amber-500/40 transition-colors"
              >
                <div>
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="font-bold text-xs text-white leading-tight">{addon.name}</span>
                  </div>
                  <div className="text-lg font-display font-black text-amber-400 font-mono-tech mb-2">
                    ${addon.price.toFixed(2)}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {addon.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono-tech text-emerald-400">
                  ✓ Available Mobile
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
