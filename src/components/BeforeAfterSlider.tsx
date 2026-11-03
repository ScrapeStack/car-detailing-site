import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Eye, MoveHorizontal, CheckCircle2 } from 'lucide-react';
import { useTemplate } from '../context/TemplateContext';
import paintCorrectionSplitImg from '../assets/images/paint_correction_split_1793539103325.jpg';
import wheelDetailSplitImg from '../assets/images/wheel_detail_split_1793539102526.jpg';
import luxuryInteriorImg from '../assets/images/luxury_interior_clean_1787211008247.jpg';

export const BeforeAfterSlider: React.FC = () => {
  const { config, showRawPlaceholders } = useTemplate();
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [activeTransformation, setActiveTransformation] = useState<'paint' | 'wheels' | 'interior'>('paint');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const transformations = {
    paint: {
      title: "Multi-Stage Paint Correction & Ceramic Coating",
      subtitle: "50/50 comparison under warm inspection lighting",
      beforeLabel: "Heavy swirl marks, spiderwebs & dull oxidized clear coat",
      afterLabel: "Flawless concourse mirror finish & deep wet gloss",
      image: paintCorrectionSplitImg
    },
    wheels: {
      title: "Forged Performance Wheel & Caliper Deep Clean",
      subtitle: "Acid-free degreasing, iron decontamination & ceramic shield",
      beforeLabel: "Burnt-in corrosive brake dust & road grime",
      afterLabel: "Factory satin black, clean Brembo calipers & dressed tire bead",
      image: wheelDetailSplitImg
    },
    interior: {
      title: "Interior Steam Extraction & Leather Rejuvenation",
      subtitle: "220°F hospital-grade dry vapor extraction",
      beforeLabel: "Stained fabric, greasy steering wheel & pet residue",
      afterLabel: "Factory OEM matte leather & sanitized upholstery",
      image: luxuryInteriorImg
    }
  };

  const current = transformations[activeTransformation];

  return (
    <section id="transformation" className="py-20 border-b border-white/10 bg-[var(--bg-base)] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-3">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-accent font-semibold">
            Visual Proof & Transformation
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white text-balance">
            Before & After Showroom Results
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Drag the interactive slider to see how we eliminate severe defects and restore deep optical clarity.
          </p>

          {/* Subtext requirement: Real results delivered at [YOUR BUSINESS NAME] */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tech text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>
              Real results delivered at{' '}
              {showRawPlaceholders ? (
                <strong className="text-amber-400">[YOUR BUSINESS NAME]</strong>
              ) : (
                <strong className="text-white">{config.businessName}</strong>
              )}.
            </span>
          </div>

          {/* Case Selector Tabs */}
          <div className="flex justify-center gap-2 pt-4 flex-wrap">
            <button
              onClick={() => setActiveTransformation('paint')}
              className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all ${
                activeTransformation === 'paint'
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              Paint Correction
            </button>
            <button
              onClick={() => setActiveTransformation('wheels')}
              className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all ${
                activeTransformation === 'wheels'
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              Wheel & Caliper
            </button>
            <button
              onClick={() => setActiveTransformation('interior')}
              className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all ${
                activeTransformation === 'interior'
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              Interior Leather & Steam
            </button>
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[16/9] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black cursor-ew-resize group"
          >
            {/* Base Image: Full shot with After on the right and Before on the left */}
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />

            {/* Before Overlay Badge */}
            <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-white text-xs font-bold font-mono-tech tracking-wider uppercase flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>BEFORE (Dirty / Swirled)</span>
            </div>

            {/* After Overlay Badge */}
            <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-white text-xs font-bold font-mono-tech tracking-wider uppercase flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>AFTER (Glossy / Restored)</span>
            </div>

            {/* Draggable Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center border-2 border-slate-900 pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                <MoveHorizontal className="w-5 h-5 text-slate-900" />
              </div>
            </div>

            {/* Instruction tooltip helper */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[11px] text-slate-300 pointer-events-none">
              ↔ Drag slider to inspect transformation
            </div>
          </div>

          {/* Contextual Description Cards below slider */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-[#111622] border border-white/10">
              <div className="flex items-center space-x-2 text-rose-400 text-xs font-bold font-mono-tech uppercase mb-1">
                <span>Problem State</span>
              </div>
              <p className="text-sm text-slate-300 leading-snug">
                {current.beforeLabel}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#111622] border border-accent/30">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold font-mono-tech uppercase mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Restored Handover</span>
              </div>
              <p className="text-sm text-slate-300 leading-snug">
                {current.afterLabel}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
