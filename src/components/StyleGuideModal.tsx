import React, { useState } from 'react';
import { X, Copy, Check, Palette, Type, Layout, Sparkles, Code2, BookOpen } from 'lucide-react';
import { STYLE_GUIDE_DATA } from '../data/businessData';
import { BUSINESS_CONFIG } from '../config';

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
      <div className="bg-[#0f131d] border border-[#0066FF]/50 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Modal Top Header */}
        <div className="p-5 bg-[#121622] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#0066FF]/20 text-[#00E5FF] flex items-center justify-center border border-[#0066FF]/30">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-display font-black text-white">
                {BUSINESS_CONFIG.businessName} • Design System
              </h3>
              <p className="text-xs text-slate-400 font-mono-tech">
                Deep Blue (#0066FF) & Electric Cyan (#00E5FF) UI Architecture
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-[#0a0d14] px-5 gap-4">
          <button
            onClick={() => setActiveTab('visual')}
            className={`py-3 text-xs font-bold border-b-2 transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'visual'
                ? 'border-[#00E5FF] text-[#00E5FF]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Visual Style Guide</span>
          </button>

          <button
            onClick={() => setActiveTab('hero')}
            className={`py-3 text-xs font-bold border-b-2 transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'hero'
                ? 'border-[#00E5FF] text-[#00E5FF]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hero Concept & Copy</span>
          </button>

          <button
            onClick={() => setActiveTab('wireframe')}
            className={`py-3 text-xs font-bold border-b-2 transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'wireframe'
                ? 'border-[#00E5FF] text-[#00E5FF]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>Sections & Flow</span>
          </button>

          <button
            onClick={() => setActiveTab('raw')}
            className={`py-3 text-xs font-bold border-b-2 transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'raw'
                ? 'border-[#00E5FF] text-[#00E5FF]'
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
                <span className="text-xs font-mono-tech text-[#00E5FF] uppercase font-bold">Aesthetic Architecture</span>
                <div className="text-white font-bold text-sm">{STYLE_GUIDE_DATA.themeName}</div>
                <p className="text-slate-300 text-xs">{STYLE_GUIDE_DATA.conceptOverview}</p>
              </div>

              {/* Color Tokens Matrix */}
              <div>
                <h4 className="font-display font-bold text-white text-sm mb-3 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-[#00E5FF]" />
                  <span>Color Tokens (Click to Copy HEX)</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {STYLE_GUIDE_DATA.colors.map((c, i) => (
                    <div
                      key={i}
                      onClick={() => handleCopyHex(c.hex)}
                      className="p-3 bg-[#121620] border border-white/10 hover:border-[#0066FF]/60 rounded-xl flex items-center justify-between cursor-pointer group transition-all"
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
                      <div className="flex items-center space-x-1.5 text-[#00E5FF] font-mono-tech text-xs bg-black/40 px-2 py-1 rounded">
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
                  <Type className="w-4 h-4 text-[#00E5FF]" />
                  <span>Typography Pairings</span>
                </h4>
                <div className="space-y-3">
                  <div className="p-3.5 bg-[#121620] border border-white/10 rounded-xl">
                    <span className="text-[10px] font-mono-tech text-[#00E5FF] uppercase">Primary Display Headings:</span>
                    <div className="text-base font-display font-black text-white mt-0.5">{STYLE_GUIDE_DATA.typography.displayHeading}</div>
                    <p className="text-xs text-slate-400 mt-1">High-contrast geometric sans with luxury stance, ideal for automotive headlines and banners.</p>
                  </div>
                  <div className="p-3.5 bg-[#121620] border border-white/10 rounded-xl">
                    <span className="text-[10px] font-mono-tech text-sky-400 uppercase">Technical Monospace Badges:</span>
                    <div className="text-sm font-mono-tech text-white mt-0.5">{STYLE_GUIDE_DATA.typography.technicalMonospace}</div>
                    <p className="text-xs text-slate-400 mt-1">Pricing tiers, vehicle sizes, wash durations, and status indicators.</p>
                  </div>
                  <div className="p-3.5 bg-[#121620] border border-white/10 rounded-xl">
                    <span className="text-[10px] font-mono-tech text-emerald-400 uppercase">Body Readability:</span>
                    <div className="text-sm text-white mt-0.5">{STYLE_GUIDE_DATA.typography.body}</div>
                    <p className="text-xs text-slate-400 mt-1">Refined modern sans at 16px baseline with generous line-height for high conversion readability.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Hero Concept & Copy */}
          {activeTab === 'hero' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#121620] border border-white/10 rounded-xl space-y-2">
                <span className="text-xs font-mono-tech text-[#00E5FF] uppercase font-bold">Hero Headline:</span>
                <div className="text-lg font-display font-black text-white">"{STYLE_GUIDE_DATA.heroConcept.headline}"</div>
              </div>

              <div className="p-4 bg-[#121620] border border-white/10 rounded-xl space-y-2">
                <span className="text-xs font-mono-tech text-[#00E5FF] uppercase font-bold">Hero Subheadline:</span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">"{STYLE_GUIDE_DATA.heroConcept.subheadline}"</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-[#090b10] border border-white/10 rounded-xl">
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase">Primary CTA Text:</span>
                  <div className="font-bold text-[#00E5FF] text-xs mt-1">{STYLE_GUIDE_DATA.heroConcept.primaryCta}</div>
                </div>
                <div className="p-3 bg-[#090b10] border border-white/10 rounded-xl">
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase">Secondary CTA Text:</span>
                  <div className="font-bold text-white text-xs mt-1">{STYLE_GUIDE_DATA.heroConcept.secondaryCta}</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Wireframe Pillars */}
          {activeTab === 'wireframe' && (
            <div className="space-y-3">
              {STYLE_GUIDE_DATA.wireframeSections.map((sec) => (
                <div key={sec.number} className="p-3.5 bg-[#121620] border border-white/10 rounded-xl flex items-start space-x-3">
                  <span className="w-7 h-7 rounded-lg bg-[#0066FF]/20 text-[#00E5FF] font-mono-tech font-bold text-xs flex items-center justify-center shrink-0">
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
{`# ${BUSINESS_CONFIG.businessName} - Style Guide

## 1. Visual Style Guide
- Primary Brand Color: #0066FF (Deep Blue)
- Accent Color: #00E5FF (Electric Cyan)
- Background: #090B10 (Obsidian Canvas)
- Surface: #0F131D (Graphite Surface)

## 2. Core Packages & Prices
- Full Service Wash: $25
- Deluxe Wash & Express Wax: $70
- Oil Change & Quick Lube + Free Wash: $95

## 3. Location
- Location / Service Area: ${BUSINESS_CONFIG.location}
- Address: 550 4th Ave, Brooklyn, NY 11215
- Phone: ${BUSINESS_CONFIG.primaryPhone}
- Direct SMS: +17187866228`}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#121622] border-t border-white/10 flex justify-between items-center">
          <span className="text-xs font-mono-tech text-slate-400">{BUSINESS_CONFIG.businessName} • {BUSINESS_CONFIG.location}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0066FF] text-white font-bold uppercase text-xs rounded-lg hover:bg-[#0052CC] transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
