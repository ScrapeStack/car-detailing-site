import React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { BUSINESS_CONFIG } from '../config';
import { getCleanOwnerPhone, getDisplayOwnerPhone, getTelLink } from '../utils/whatsapp';

export const LocationContactSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono-tech text-amber-400 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{BUSINESS_CONFIG.businessName} Facility & Service Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Visit Our {BUSINESS_CONFIG.location} Studio or Call For Mobile Dispatch
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Conveniently situated off Walnut Street near historic Old Town and Colorado Boulevard with secure customer parking.
          </p>
        </div>

        {/* Contact & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business Details & Action Links */}
          <div className="lg:col-span-5 bg-[#121620] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono-tech uppercase text-amber-400 font-bold">Studio Headquarters</span>
                <h3 className="text-2xl font-display font-black text-white mt-1">
                  {BUSINESS_CONFIG.businessName}
                </h3>
              </div>

              {/* Info Items */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Studio Address:</strong>
                    <span>1420 E Walnut St, Suite 104, {BUSINESS_CONFIG.location} 91106</span>
                    <div className="text-[11px] text-slate-400 mt-0.5 font-mono-tech">Suite 104 (Rear Studio Entrance & Curing Bays)</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Phone, SMS, & WhatsApp Booking:</strong>
                    <a href={getTelLink()} className="text-amber-400 font-bold hover:underline">
                      {getDisplayOwnerPhone()}
                    </a>
                    <div className="text-[11px] text-slate-400 mt-0.5">Direct line to Experienced Detail Technicians (Call, SMS, or WhatsApp)</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Operating Hours:</strong>
                    <div className="text-slate-300 text-xs mt-0.5">{BUSINESS_INFO.hours.weekdays}</div>
                    <div className="text-slate-300 text-xs">{BUSINESS_INFO.hours.saturday}</div>
                    <div className="text-amber-400 text-xs font-mono-tech mt-0.5">{BUSINESS_INFO.hours.sunday}</div>
                  </div>
                </div>
              </div>

              {/* Service Areas Tags */}
              <div className="pt-3 border-t border-white/10">
                <span className="text-[11px] font-mono-tech uppercase text-slate-400 block mb-2 font-semibold">
                  Mobile Detailing Coverage Area:
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

            {/* Quick Action Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <a
                href={getTelLink()}
                className="py-3 px-4 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Directly</span>
              </a>
              <a
                href={`https://wa.me/${getCleanOwnerPhone()}`}
                target="_blank" rel="noopener noreferrer"
                className="py-3 px-4 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-white font-bold uppercase text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors text-center"
              >
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_CONFIG.businessName + ' 1420 E Walnut St, Suite 104, ' + BUSINESS_CONFIG.location)}`}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-bold uppercase text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors text-center"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>Get Directions</span>
              </a>
            </div>
            <p className="text-xs text-slate-400/80 text-center pt-2">
              By submitting an inquiry, you consent to sending your request details directly to the independent business operator via WhatsApp.
            </p>
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

              {/* Location Map Marker Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <div className="relative inline-block">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-2xl animate-bounce mx-auto">
                    <MapPin className="w-6 h-6 fill-black text-black" />
                  </div>
                  <div className="w-8 h-2 rounded-full bg-amber-500/30 blur-sm mx-auto mt-1"></div>
                </div>
                <div className="bg-[#090b10]/95 backdrop-blur-md border border-amber-500/40 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white mt-1 shadow-xl font-mono-tech">
                  {BUSINESS_CONFIG.businessName} • 1420 E Walnut St
                </div>
              </div>

              {/* Floating Map Navigation Badge */}
              <div className="absolute top-3 left-3 bg-[#090b10]/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-md text-[10px] font-mono-tech text-slate-300">
                {BUSINESS_CONFIG.location} 91106
              </div>

              <div className="absolute bottom-3 right-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_CONFIG.businessName + ' 1420 E Walnut St, Suite 104, ' + BUSINESS_CONFIG.location)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black/90 hover:bg-black text-amber-400 border border-white/15 px-3 py-1.5 rounded-lg text-xs font-bold font-mono-tech flex items-center space-x-1.5 transition-colors"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Direct Action WhatsApp Contact Card */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center items-center text-center space-y-4 bg-gradient-to-b from-[#121622] to-[#0c0f17]">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shadow-lg shadow-[#25D366]/10">
                <MessageSquare className="w-6 h-6" />
              </div>

              <div className="space-y-1.5 max-w-md">
                <h4 className="text-xl sm:text-2xl font-display font-black text-white tracking-tight">
                  Have Questions Before Booking?
                </h4>
                <p className="text-xs sm:text-sm text-slate-400">
                  Chat directly with our detail specialists on WhatsApp for immediate assistance.
                </p>
              </div>

              <a
                href={`https://wa.me/${getCleanOwnerPhone()}?text=Hi!%20I%20have%20a%20question%20about%20your%20detailing%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-black uppercase tracking-wider text-xs sm:text-sm rounded-xl shadow-xl shadow-[#25D366]/25 flex items-center justify-center space-x-2.5 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-black text-black" />
                <span>Instant WhatsApp Chat</span>
              </a>

              <p className="text-xs text-slate-400/80 text-center pt-1 max-w-md">
                By submitting an inquiry, you consent to sending your request details directly to the independent business operator via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
