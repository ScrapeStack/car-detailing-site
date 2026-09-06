import React, { useState } from 'react';
import { X, Copy, Check, Palette, Type, Layout, Sparkles, Code2, BookOpen } from 'lucide-react';
import { STYLE_GUIDE_DATA } from '../data/businessData';

interface StyleGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StyleGuideModal: React.FC<StyleGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'hero' | 'wireframe' | 'raw'>('visual');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#0f131d] border border-amber-500/40 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Modal Top Header */}
        <div className="p-5 bg-[#121622] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-display font-black text-white">
                RetroClean Detailing - Bayside • Design System & Concept Blueprint
              </h3>
              <p className="text-xs text-slate-400 font-mono-tech">
                Synthesized from reference inspiration & local business requirements
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-[#0a0d14] px-5 gap-4">
          <button
            onClick={() => setActiveTab('visual')}
            className={`py-3 text-xs font-bold border-b-2 transition-all flex items-center space-x-1.5 ${
              activeTab === 'visual'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Visual Style Guide</span>
          </button>

          <button
            onClick={() => setActiveTab('hero')}
            className={`py-3 text-xs font-bold border-b-2 transition-all flex items-center space-x-1.5 ${
              activeTab === 'hero'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hero Concept & Copy</span>
          </button>

          <button
            onClick={() => setActiveTab('wireframe')}
            className={`py-3 text-xs font-bold border-b-2 transition-all flex items-center space-x-1.5 ${
              activeTab === 'wireframe'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>Section Wireframe (10 Pillars)</span>
          </button>

          <button
            onClick={() => setActiveTab('raw')}
            className={`py-3 text-xs font-bold border-b-2 transition-all flex items-center space-x-1.5 ${
              activeTab === 'raw'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Markdown Export</span>
          </button>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300 text-xs sm:text-sm">
          {/* TAB 1: Visual Style Guide */}
          {activeTab === 'visual' && (
            <div className="space-y-6">
              <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl space-y-1">
                <span className="text-xs font-mono-tech text-amber-400 uppercase font-bold">Aesthetic Architecture</span>
                <div className="text-white font-bold text-sm">{STYLE_GUIDE_DATA.themeName}</div>
                <p className="text-slate-300 text-xs">{STYLE_GUIDE_DATA.conceptOverview}</p>
              </div>

              {/* Color Tokens Matrix */}
              <div>
                <h4 className="font-display font-bold text-white text-sm mb-3 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-amber-400" />
                  <span>Color Tokens (Click to Copy HEX)</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {STYLE_GUIDE_DATA.colors.map((c, i) => (
                    <div
                      key={i}
                      onClick={() => handleCopyHex(c.hex)}
                      className="p-3 bg-[#121620] border border-white/10 hover:border-amber-500/40 rounded-xl flex items-center justify-between cursor-pointer group transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-8 h-8 rounded-lg border border-white/20 shadow-md shrink-0"
                          style={{ backgroundColor: c.hex }}
                        ></div>
                        <div>
                          <div className="font-bold text-white text-xs">{c.name}</div>
                          <div className="text-[11px] text-slate-400 font-mono-tech">{c.role}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1.5 text-amber-400 font-mono-tech text-xs bg-black/40 px-2 py-1 rounded">
                        <span>{c.hex}</span>
                        {copiedHex === c.hex ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400 group-hover:text-white" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography Hierarchy */}
              <div>
                <h4 className="font-display font-bold text-white text-sm mb-3 flex items-center gap-2">
                  <Type className="w-4 h-4 text-amber-400" />
                  <span>Typography Pairings</span>
                </h4>
                <div className="space-y-3">
                  <div className="p-3.5 bg-[#121620] border border-white/10 rounded-xl">
                    <span className="text-[10px] font-mono-tech text-amber-400 uppercase">Primary Display Headings:</span>
                    <div className="text-base font-display font-black text-white mt-0.5">{STYLE_GUIDE_DATA.typography.displayHeading}</div>
                    <p className="text-xs text-slate-400 mt-1">High-contrast geometric sans with aggressive luxury stance, ideal for automotive headlines and banners.</p>
                  </div>
                  <div className="p-3.5 bg-[#121620] border border-white/10 rounded-xl">
                    <span className="text-[10px] font-mono-tech text-sky-400 uppercase">Technical Monospace Badges:</span>
                    <div className="text-sm font-mono-tech text-white mt-0.5">{STYLE_GUIDE_DATA.typography.technicalMonospace}</div>
                    <p className="text-xs text-slate-400 mt-1">Precision metrics, paint microns, water contact angles (115°), and live pricing tickers.</p>
                  </div>
                  <div className="p-3.5 bg-[#121620] border border-white/10 rounded-xl">
                    <span className="text-[10px] font-mono-tech text-emerald-400 uppercase">Body Readability:</span>
                    <div className="text-sm text-white mt-0.5">{STYLE_GUIDE_DATA.typography.body}</div>
                    <p className="text-xs text-slate-400 mt-1">Refined modern sans at 16px minimum with generous line-height for high conversion readability.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Hero Concept & Copy */}
          {activeTab === 'hero' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#121620] border border-white/10 rounded-xl space-y-2">
                <span className="text-xs font-mono-tech text-amber-400 uppercase font-bold">Hero Headline:</span>
                <div className="text-lg font-display font-black text-white">"{STYLE_GUIDE_DATA.heroConcept.headline}"</div>
              </div>

              <div className="p-4 bg-[#121620] border border-white/10 rounded-xl space-y-2">
                <span className="text-xs font-mono-tech text-amber-400 uppercase font-bold">Hero Subheadline:</span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">"{STYLE_GUIDE_DATA.heroConcept.subheadline}"</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-[#090b10] border border-white/10 rounded-xl">
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase">Primary CTA Text:</span>
                  <div className="font-bold text-amber-400 text-xs mt-1">{STYLE_GUIDE_DATA.heroConcept.primaryCta}</div>
                </div>
                <div className="p-3 bg-[#090b10] border border-white/10 rounded-xl">
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase">Secondary CTA Text:</span>
                  <div className="font-bold text-white text-xs mt-1">{STYLE_GUIDE_DATA.heroConcept.secondaryCta}</div>
                </div>
              </div>

              <div className="p-4 bg-[#121620] border border-white/10 rounded-xl space-y-2">
                <span className="text-xs font-mono-tech text-sky-400 uppercase font-bold">Visual Scene & Lighting:</span>
                <p className="text-xs text-slate-300">{STYLE_GUIDE_DATA.heroConcept.visualStyle}</p>
              </div>
            </div>
          )}

          {/* TAB 3: Wireframe Pillars */}
          {activeTab === 'wireframe' && (
            <div className="space-y-3">
              {STYLE_GUIDE_DATA.wireframeSections.map((sec) => (
                <div key={sec.number} className="p-3.5 bg-[#121620] border border-white/10 rounded-xl flex items-start space-x-3">
                  <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 font-mono-tech font-bold text-xs flex items-center justify-center shrink-0">
                    {sec.number}
                  </span>
                  <div>
                    <div className="font-bold text-white text-xs sm:text-sm">{sec.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{sec.purpose}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: Raw Markdown Export */}
          {activeTab === 'raw' && (
            <div className="relative">
              <pre className="p-4 bg-[#090b10] border border-white/10 rounded-xl font-mono-tech text-[11px] text-slate-300 overflow-x-auto whitespace-pre-wrap">
{`# Apex Precision Auto Detailing - Design Concept & Visual Style Guide

## 1. Visual Style Guide
- Primary Background: #090B10 (Obsidian Carbon)
- Surface Container: #12161F (Graphite Surface)
- Primary CTA Accent: #F59E0B (Electric Amber)
- Technical Metric Accent: #38BDF8 (Precision Cyan)
- Text Contrast: #F8FAFC (Pure Platinum Headings) / #94A3B8 (Muted Steel Body)

## 2. Typography
- Display: Outfit / Space Grotesk 800 Bold
- Monospace / Metrics: Space Grotesk 500 Medium
- Body: Plus Jakarta Sans 400/500 (16px base)

## 3. Hero Section Concept
- Headline: "Elevate Your Vehicle to Concourse Perfection."
- Subheadline: "Pasadena’s authority in multi-stage paint correction, certified 9H/10H ceramic coatings, and bespoke interior spa restoration."
- CTAs: "Calculate Quote & Book" / "Explore Package Pricing"
- Social Proof: 4.8 Stars (64 Local Reviews) • Pasadena, CA

## 4. Business Ingestion
- Name: Apex Precision Auto Detailing
- Address: 1420 E Walnut St, Suite 104, Pasadena, CA 91106
- Phone: (626) 555-0184
- Key Features: 5 Core Disciplines, Mobile Sprinter Unit, Interactive Split Slider, Live Multi-Step Quote Calculator`}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#121622] border-t border-white/10 flex justify-between items-center">
          <span className="text-xs font-mono-tech text-slate-400">Pasadena Detailing Web Architecture • Ready for Production</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-amber-500 text-black font-bold uppercase text-xs rounded-lg hover:bg-amber-400 transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
