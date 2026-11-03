import React, { useState } from 'react';
import { X, Check, Copy, RotateCcw, Sliders, Tag, Palette, Sparkles, Building2, Phone, DollarSign, MessageSquare } from 'lucide-react';
import { useTemplate } from '../context/TemplateContext';
import { ACCENT_PALETTES, BASE_THEMES } from '../data/templateConfig';

export const TemplateCustomizerModal: React.FC = () => {
  const {
    config,
    updateConfig,
    resetConfig,
    showRawPlaceholders,
    toggleRawPlaceholders,
    isCustomizerOpen,
    setIsCustomizerOpen
  } = useTemplate();

  const [activeTab, setActiveTab] = useState<'theme' | 'brand' | 'contact' | 'pricing' | 'export'>('theme');
  const [copied, setCopied] = useState(false);

  if (!isCustomizerOpen) return null;

  const handleCopyConfig = () => {
    const json = JSON.stringify(config, null, 2);
    navigator.clipboard.writeText(json);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#111622] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0c1019]">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-accent/20 text-accent">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-wide">Template Customizer</h2>
              <p className="text-xs text-slate-400">100% customizable business details, colors & placeholder modes</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleRawPlaceholders}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-all flex items-center space-x-1.5 border ${
                showRawPlaceholders
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:text-white'
              }`}
              title="Toggle raw template tags vs live business values"
            >
              <Tag className="w-3.5 h-3.5" />
              <span>{showRawPlaceholders ? 'Viewing: [TAGS]' : 'Viewing: Real Values'}</span>
            </button>
            <button
              onClick={() => setIsCustomizerOpen(false)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close customizer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/10 bg-[#0c1019]/60 px-6 overflow-x-auto gap-2">
          <button
            onClick={() => setActiveTab('theme')}
            className={`py-3 px-3 text-xs font-medium tracking-wider uppercase border-b-2 transition-colors flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'theme'
                ? 'border-accent text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Palette className="w-3.5 h-3.5 text-accent" />
            <span>Theme & Colors</span>
          </button>
          <button
            onClick={() => setActiveTab('brand')}
            className={`py-3 px-3 text-xs font-medium tracking-wider uppercase border-b-2 transition-colors flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'brand'
                ? 'border-accent text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5 text-accent" />
            <span>Brand Info</span>
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`py-3 px-3 text-xs font-medium tracking-wider uppercase border-b-2 transition-colors flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'contact'
                ? 'border-accent text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span>Contact & Links</span>
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`py-3 px-3 text-xs font-medium tracking-wider uppercase border-b-2 transition-colors flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'pricing'
                ? 'border-accent text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5 text-accent" />
            <span>Pricing & Reviews</span>
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`py-3 px-3 text-xs font-medium tracking-wider uppercase border-b-2 transition-colors flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'export'
                ? 'border-accent text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Copy className="w-3.5 h-3.5 text-accent" />
            <span>Export Code</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'theme' && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-mono-tech tracking-wider uppercase text-slate-400 mb-2">
                  Highlight Accent Color (Prompt Specification)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {ACCENT_PALETTES.map((pal) => (
                    <button
                      key={pal.hex}
                      onClick={() => updateConfig({ accentColor: pal.hex })}
                      className={`p-3 rounded-xl border text-left flex items-center space-x-3 transition-all ${
                        config.accentColor === pal.hex
                          ? 'border-white bg-white/10 shadow-lg'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <span 
                        className="w-5 h-5 rounded-full shrink-0 shadow-inner"
                        style={{ backgroundColor: pal.hex }}
                      />
                      <div className="truncate">
                        <div className="text-xs font-semibold text-white truncate">{pal.name}</div>
                        <div className="text-[10px] font-mono-tech text-slate-400">{pal.hex}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-tech tracking-wider uppercase text-slate-400 mb-2">
                  Deep Dark Base Tone (Charcoal / Dark Slate / Obsidian)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {BASE_THEMES.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => updateConfig({ baseTheme: theme.id as any })}
                      className={`p-3 rounded-xl border text-left flex items-center space-x-3 transition-all ${
                        config.baseTheme === theme.id
                          ? 'border-accent bg-white/10 shadow-lg'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <span 
                        className="w-5 h-5 rounded-md border border-white/20 shrink-0"
                        style={{ backgroundColor: theme.hex }}
                      />
                      <div className="truncate">
                        <div className="text-xs font-semibold text-white">{theme.name}</div>
                        <div className="text-[10px] font-mono-tech text-slate-400">{theme.hex}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Raw Placeholder Highlight Mode</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Visually display exact tags: <code className="text-amber-400">[YOUR BUSINESS NAME]</code>, <code className="text-amber-400">[YOUR PHONE NUMBER]</code>, etc.
                  </p>
                </div>
                <button
                  onClick={toggleRawPlaceholders}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    showRawPlaceholders
                      ? 'bg-amber-400 text-slate-950 shadow-md'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {showRawPlaceholders ? 'Tags Active' : 'Enable Tags'}
                </button>
              </div>
            </div>
          )}

          {activeTab === 'brand' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-tech text-slate-400 mb-1">
                  [YOUR BUSINESS NAME]
                </label>
                <input
                  type="text"
                  value={config.businessName}
                  onChange={(e) => updateConfig({ businessName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none"
                  placeholder="e.g. Apex Precision Detailing"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-slate-400 mb-1">
                  [YOUR LOGO PLACEHOLDER]
                </label>
                <input
                  type="text"
                  value={config.logoPlaceholder}
                  onChange={(e) => updateConfig({ logoPlaceholder: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none"
                  placeholder="e.g. APEX // DETAIL"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-mono-tech text-slate-400 mb-1">
                  [YOUR SLOGAN / TAGLINE]
                </label>
                <input
                  type="text"
                  value={config.slogan}
                  onChange={(e) => updateConfig({ slogan: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none"
                  placeholder="e.g. Precision Detailing & Ceramic Coating in Los Angeles"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-slate-400 mb-1">
                  [YOUR CITY]
                </label>
                <input
                  type="text"
                  value={config.city}
                  onChange={(e) => updateConfig({ city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none"
                  placeholder="e.g. Los Angeles"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-slate-400 mb-1">
                  [YEAR]
                </label>
                <input
                  type="text"
                  value={config.foundedYear}
                  onChange={(e) => updateConfig({ foundedYear: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none"
                  placeholder="e.g. 2026"
                />
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-tech text-slate-400 mb-1">
                  [YOUR PHONE NUMBER]
                </label>
                <input
                  type="text"
                  value={config.phoneNumber}
                  onChange={(e) => updateConfig({ phoneNumber: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none"
                  placeholder="+1 (555) 789-2040"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-slate-400 mb-1">
                  [YOUR EMAIL ADDRESS]
                </label>
                <input
                  type="email"
                  value={config.emailAddress}
                  onChange={(e) => updateConfig({ emailAddress: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none"
                  placeholder="contact@example.com"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-mono-tech text-slate-400 mb-1">
                  [YOUR STREET ADDRESS, CITY, STATE]
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={config.streetAddress}
                    onChange={(e) => updateConfig({ streetAddress: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none"
                    placeholder="Street Address (e.g. 1420 E Walnut St, Suite 104)"
                  />
                  <input
                    type="text"
                    value={config.cityState}
                    onChange={(e) => updateConfig({ cityState: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none"
                    placeholder="City, State Zip (e.g. Pasadena, CA 91106)"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-mono-tech text-slate-400 mb-1">
                  [YOUR BUSINESS HOURS]
                </label>
                <input
                  type="text"
                  value={config.businessHours}
                  onChange={(e) => updateConfig({ businessHours: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none"
                  placeholder="Mon – Sat: 8:00 AM – 6:30 PM | Sun: By Appointment"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-mono-tech text-slate-400 mb-1">
                  [YOUR FACEBOOK MESSENGER LINK]
                </label>
                <input
                  type="text"
                  value={config.facebookMessengerLink}
                  onChange={(e) => updateConfig({ facebookMessengerLink: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none"
                  placeholder="https://m.me/yourbusiness"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-slate-400 mb-1">
                  [YOUR FACEBOOK PAGE LINK]
                </label>
                <input
                  type="text"
                  value={config.facebookPageLink}
                  onChange={(e) => updateConfig({ facebookPageLink: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none"
                  placeholder="https://facebook.com/yourbusiness"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-slate-400 mb-1">
                  [YOUR INSTAGRAM LINK]
                </label>
                <input
                  type="text"
                  value={config.instagramLink}
                  onChange={(e) => updateConfig({ instagramLink: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none"
                  placeholder="https://instagram.com/yourbusiness"
                />
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono-tech text-slate-400 mb-1">
                    $[EXPRESS PRICE]
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-slate-400 font-bold">$</span>
                    <input
                      type="number"
                      value={config.expressPrice}
                      onChange={(e) => updateConfig({ expressPrice: Number(e.target.value) })}
                      className="w-full pl-8 pr-3 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech text-slate-400 mb-1">
                    $[FULL DETAIL PRICE]
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-slate-400 font-bold">$</span>
                    <input
                      type="number"
                      value={config.fullDetailPrice}
                      onChange={(e) => updateConfig({ fullDetailPrice: Number(e.target.value) })}
                      className="w-full pl-8 pr-3 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech text-slate-400 mb-1">
                    $[CERAMIC PRICE]
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-slate-400 font-bold">$</span>
                    <input
                      type="number"
                      value={config.ceramicPrice}
                      onChange={(e) => updateConfig({ ceramicPrice: Number(e.target.value) })}
                      className="w-full pl-8 pr-3 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-slate-400 mb-1">
                  [YOUR GOOGLE REVIEW COUNT]
                </label>
                <input
                  type="number"
                  value={config.googleReviewCount}
                  onChange={(e) => updateConfig({ googleReviewCount: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none max-w-xs"
                />
              </div>

              <div className="border-t border-white/10 pt-4 space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Testimonials & Review Cards</h4>
                {config.testimonials.map((t, idx) => (
                  <div key={idx} className="p-3 bg-white/5 border border-white/10 rounded-lg space-y-2">
                    <div className="text-[11px] font-mono-tech text-amber-400">
                      Card {idx + 1}: [TESTIMONIAL {idx + 1} TEXT]
                    </div>
                    <textarea
                      rows={2}
                      value={t.quote}
                      onChange={(e) => {
                        const newTests = [...config.testimonials] as [any, any, any];
                        newTests[idx] = { ...newTests[idx], quote: e.target.value };
                        updateConfig({ testimonials: newTests });
                      }}
                      className="w-full px-3 py-2 rounded bg-black/40 border border-white/15 text-white text-xs focus:border-accent focus:outline-none"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={t.clientName}
                        placeholder={`[CLIENT NAME ${idx + 1}]`}
                        onChange={(e) => {
                          const newTests = [...config.testimonials] as [any, any, any];
                          newTests[idx] = { ...newTests[idx], clientName: e.target.value };
                          updateConfig({ testimonials: newTests });
                        }}
                        className="px-2.5 py-1.5 rounded bg-black/40 border border-white/15 text-white text-xs"
                      />
                      <input
                        type="text"
                        value={t.vehicleModel}
                        placeholder={`[VEHICLE MODEL ${idx + 1}]`}
                        onChange={(e) => {
                          const newTests = [...config.testimonials] as [any, any, any];
                          newTests[idx] = { ...newTests[idx], vehicleModel: e.target.value };
                          updateConfig({ testimonials: newTests });
                        }}
                        className="px-2.5 py-1.5 rounded bg-black/40 border border-white/15 text-white text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'export' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Export JSON Configuration</h4>
                  <p className="text-[11px] text-slate-400">Copy your configuration to save or pass to any developer</p>
                </div>
                <button
                  onClick={handleCopyConfig}
                  className="px-4 py-2 bg-accent text-white font-bold rounded-lg text-xs flex items-center space-x-1.5 hover:opacity-90 transition-opacity"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Config JSON'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-black/60 border border-white/10 text-[11px] font-mono text-emerald-400 overflow-x-auto max-h-72">
                {JSON.stringify(config, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-[#0c1019]">
          <button
            onClick={resetConfig}
            className="px-3.5 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors flex items-center space-x-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Defaults</span>
          </button>
          <button
            onClick={() => setIsCustomizerOpen(false)}
            className="px-6 py-2.5 bg-accent text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:opacity-90 transition-opacity"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
};
