import React, { useState } from 'react';
import { Check, Star, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useTemplate } from '../context/TemplateContext';

interface PackagesSectionProps {
  onSelectPackageForBooking: (packageName: string, calculatedPrice: number) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackageForBooking }) => {
  const { config, showRawPlaceholders } = useTemplate();
  const [vehicleSize, setVehicleSize] = useState<'sedan' | 'suv' | 'truck'>('sedan');

  // Size multipliers
  const sizeAdjustment = {
    sedan: { label: 'Sedan / Coupe', priceAdd: 0 },
    suv: { label: 'Mid-Size SUV / Crossover', priceAdd: 30 },
    truck: { label: 'Full SUV / Truck / Van', priceAdd: 60 }
  };

  const currentAdd = sizeAdjustment[vehicleSize].priceAdd;

  const packages = [
    {
      id: 'express',
      name: 'Express Detail',
      tag: 'Maintenance Clean',
      rawPlaceholderPrice: '$[EXPRESS PRICE]',
      basePrice: config.expressPrice,
      duration: '1.5 – 2 Hours',
      features: [
        'Exterior Hand Wash & Dry',
        'Tire Dressing & Wheel Cleaning',
        'Interior Vacuum & Window Wipe-down'
      ],
      idealFor: 'Routine refresh and well-maintained daily drivers.'
    },
    {
      id: 'full-detail',
      name: 'Full Interior & Exterior Detail',
      tag: 'Most Popular',
      isPopular: true,
      rawPlaceholderPrice: '$[FULL DETAIL PRICE]',
      basePrice: config.fullDetailPrice,
      duration: '4 – 5.5 Hours',
      features: [
        'All Express features included',
        'Deep Carpet Shampoo & Hot Water Extraction',
        'Leather Cleaning & Conditioning',
        'Clay Bar Paint Decontamination',
        'High-Bonding Paint Sealant Application'
      ],
      idealFor: 'Total rejuvenation inside and out to restore pristine showroom finish.'
    },
    {
      id: 'ceramic-correction',
      name: 'Ceramic Coating & Paint Correction',
      tag: 'Ultimate Protection',
      rawPlaceholderPrice: '$[CERAMIC PRICE]',
      basePrice: config.ceramicPrice,
      duration: '1 – 2 Days (Cure Bay)',
      features: [
        'Multi-stage Paint Correction (Swirl & Scratch Removal)',
        'Ceramic Coating Protection (Multi-Year Hydrophobic Barrier)',
        'Engine Bay Detailing & Electronic-Safe Dressing',
        'Wheels & Windshield Ceramic Surface Shield',
        'Official Warranty & Digital Paint Depth Measurement'
      ],
      idealFor: 'Luxury vehicles, brand new cars, or paint in need of mirror clarity.'
    }
  ];

  return (
    <section id="packages" className="py-20 border-b border-white/10 bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-accent font-semibold">
            Service Packages & Transparent Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white text-balance">
            Tailored Tiers for Every Level of Care
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Select your vehicle size for instant pricing. No hidden fees, no surprises.
          </p>

          {/* Interactive Vehicle Size Selector */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1 rounded-xl bg-[#111622] border border-white/10">
              {(['sedan', 'suv', 'truck'] as const).map((sizeKey) => (
                <button
                  key={sizeKey}
                  onClick={() => setVehicleSize(sizeKey)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium tracking-wide transition-all ${
                    vehicleSize === sizeKey
                      ? 'bg-accent text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {sizeAdjustment[sizeKey].label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Tiered Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => {
            const finalPrice = pkg.basePrice + (pkg.id === 'ceramic-correction' ? currentAdd * 1.5 : currentAdd);
            
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-8 ${
                  pkg.isPopular
                    ? 'bg-[#151c2d] border-2 border-accent shadow-2xl scale-100 lg:-translate-y-2'
                    : 'bg-[#111622] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Most Popular Tag if applicable */}
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center space-x-1">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>{pkg.tag}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider">
                      {!pkg.isPopular && pkg.tag}
                    </span>
                    <span className="text-xs font-mono-tech text-slate-400">
                      Est. {pkg.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                    {showRawPlaceholders ? (
                      <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">
                        {pkg.rawPlaceholderPrice}
                      </span>
                    ) : (
                      <>
                        <span className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
                          ${finalPrice}
                        </span>
                        <span className="text-xs text-slate-400 font-mono-tech ml-1">
                          {currentAdd > 0 ? `(includes +$${currentAdd} for ${sizeAdjustment[vehicleSize].label})` : 'starting'}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Included Features */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Package Features:
                    </p>
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-3 text-sm text-slate-200">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <p className="text-xs text-slate-400">
                    <span className="text-white font-medium">Ideal for: </span>
                    {pkg.idealFor}
                  </p>

                  <button
                    onClick={() => onSelectPackageForBooking(pkg.name, finalPrice)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 ${
                      pkg.isPopular
                        ? 'bg-accent text-white hover:opacity-95 shadow-md glow-accent-hover'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/15'
                    }`}
                  >
                    <span>Book {pkg.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile or Studio Note */}
        <div className="mt-12 p-4 rounded-xl bg-white/5 border border-white/10 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-3 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
            <span>Mobile service available at your home/office or visit our studio location.</span>
          </div>
          <span className="text-slate-400 font-mono-tech">Zero Hassle Booking</span>
        </div>
      </div>
    </section>
  );
};
