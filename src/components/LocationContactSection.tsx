import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const LocationContactSection: React.FC = () => {
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryData.name || !inquiryData.phone) return;
    setInquirySent(true);
  };

  return (
    <section id="location" className="py-24 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono-tech text-amber-400 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>RetroClean Detailing - Bayside</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Serving Queens & Long Island — We Bring Water & Power to You
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Based at {BUSINESS_INFO.addressShort}, operating fully mobile units across Bayside, Queens, and Long Island with spot-free deionized water and silent onboard generators.
          </p>
        </div>

        {/* Contact & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business Details & Action Links */}
          <div className="lg:col-span-5 bg-[#121620] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono-tech uppercase text-amber-400 font-bold">Studio Headquarters & Mobile Dispatch</span>
                <h3 className="text-2xl font-display font-black text-white mt-1">
                  {BUSINESS_INFO.name}
                </h3>
              </div>

              {/* Info Items */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Headquarters & Service Area:</strong>
                    <span>{BUSINESS_INFO.address}</span>
                    <div className="text-[11px] text-slate-400 mt-0.5 font-mono-tech">Fully Mobile with Onboard Pure Water & Electric Power</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Call / Text Concierge:</strong>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-amber-400 font-bold hover:underline">
                      {BUSINESS_INFO.phone}
                    </a>
                    <div className="text-[11px] text-slate-400 mt-0.5">Call or Text for Fast Booking & Quotes</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Operating Hours:</strong>
                    <div className="text-slate-300 text-xs mt-0.5">{BUSINESS_INFO.hours.weekdays}</div>
                    <div className="text-amber-400 text-xs font-mono-tech mt-0.5">{BUSINESS_INFO.hours.sunday}</div>
                  </div>
                </div>
              </div>

              {/* Service Areas Tags */}
              <div className="pt-3 border-t border-white/10">
                <span className="text-[11px] font-mono-tech uppercase text-slate-400 block mb-2 font-semibold">
                  Service & Coverage Area:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {BUSINESS_INFO.serviceAreas.map((area, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-[#090b10] border border-white/5 rounded-md text-[11px] text-slate-300 font-mono-tech">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Action Bar: Call/Text triggers call or sms */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                id="contact-call-now-btn"
                className="py-3 px-4 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors text-center cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call / Text Now</span>
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.name + ' ' + BUSINESS_INFO.address)}`}
                target="_blank"
                rel="noreferrer"
                id="contact-directions-btn"
                className="py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-bold uppercase text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors text-center cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Custom Interactive Map & Fast Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0f131d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            {/* Custom Studio Map Visual Frame */}
            <div className="relative h-64 sm:h-72 bg-[#1a202c] overflow-hidden border-b border-white/10">
              {/* Map stylized background simulation */}
              <div className="absolute inset-0 bg-[#0d1017] carbon-grid opacity-80"></div>
              
              {/* Street grid stylized lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-[1px] bg-amber-500/20 top-1/2 absolute"></div>
                <div className="h-full w-[1px] bg-amber-500/20 left-1/2 absolute"></div>
                <div className="w-48 h-48 rounded-full border border-amber-500/20 absolute"></div>
                <div className="w-96 h-96 rounded-full border border-white/5 absolute"></div>
              </div>

              {/* Bayside Map Marker Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <div className="relative inline-block">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-2xl animate-bounce mx-auto">
                    <MapPin className="w-6 h-6 fill-black text-black" />
                  </div>
                  <div className="w-8 h-2 rounded-full bg-amber-500/30 blur-sm mx-auto mt-1"></div>
                </div>
                <div className="bg-[#090b10]/95 backdrop-blur-md border border-amber-500/40 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white mt-1 shadow-xl font-mono-tech">
                  RetroClean Detailing • {BUSINESS_INFO.addressShort}
                </div>
              </div>

              {/* Floating Map Navigation Badge */}
              <div className="absolute top-3 left-3 bg-[#090b10]/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-md text-[10px] font-mono-tech text-slate-300">
                Bayside, NY 11361 • Queens & Long Island
              </div>

              <div className="absolute bottom-3 right-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.name + ' ' + BUSINESS_INFO.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black/90 hover:bg-black text-amber-400 border border-white/15 px-3 py-1.5 rounded-lg text-xs font-bold font-mono-tech flex items-center space-x-1.5 transition-colors"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Direct Quick Inquiry Form */}
            <div className="p-6 sm:p-8 flex-1">
              {!inquirySent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-tech text-amber-400 uppercase font-bold">Have a Custom Project or Question?</span>
                    <span className="text-[11px] text-slate-400">Response within 15 mins</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      id="inquiry-name"
                      placeholder="Your Name"
                      required
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData(prev => ({ ...prev, name: e.target.value }))}
                      className="bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                    />
                    <input
                      type="tel"
                      id="inquiry-phone"
                      placeholder="Phone Number"
                      required
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData(prev => ({ ...prev, phone: e.target.value }))}
                      className="bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <textarea
                    id="inquiry-message"
                    rows={2}
                    placeholder="Tell us about your vehicle model, address/town, or question..."
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500 resize-none"
                  ></textarea>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="submit"
                      id="inquiry-submit-btn"
                      className="py-3 bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider text-xs rounded-xl border border-white/10 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      id="inquiry-call-direct-btn"
                      className="py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wider text-xs rounded-xl transition-all flex items-center justify-center space-x-2 cursor-pointer text-center"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call / Text {BUSINESS_INFO.phone}</span>
                    </a>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Received!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you {inquiryData.name}. Our master detailer at RetroClean Detailing - Bayside will contact you at {inquiryData.phone} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySent(false);
                      setInquiryData({ name: '', phone: '', message: '' });
                    }}
                    className="text-xs text-amber-400 underline font-mono-tech"
                  >
                    Send another inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
