import React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageSquare, Mail, MessageCircle, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { BUSINESS_CONFIG } from '../config';
import { getCleanOwnerPhone, getDisplayOwnerPhone, getTelLink, getSmsLink, getEmailLink, getWhatsAppLink } from '../utils/whatsapp';

export const LocationContactSection: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-24 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono-tech text-amber-400 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Mobile Dispatch Hub • Bronx, NY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            We Come Directly to Your Doorstep
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Based at 1219 Woodycrest Ave in the Bronx, Hershel dispatches full mobile detailing and mechanical services across the Bronx and the Greater NYC Metropolitan Area.
          </p>
        </div>

        {/* Contact & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Details & Contact Action Buttons */}
          <div className="lg:col-span-5 bg-[#121620] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono-tech uppercase text-amber-400 font-bold">Mobile Detailing Operator</span>
                <h3 className="text-2xl font-display font-black text-white mt-1">
                  {BUSINESS_CONFIG.businessName}
                </h3>
                <div className="flex items-center space-x-1.5 text-xs text-amber-400 font-mono-tech mt-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold">5.0 Stars (20+ Google Reviews)</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-300">Owner: Hershel</span>
                </div>
              </div>

              {/* Info Items */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Base / Dispatch Location:</strong>
                    <span>{BUSINESS_CONFIG.address}</span>
                    <div className="text-[11px] text-emerald-400 mt-0.5 font-mono-tech">
                      Mobile — We Come To Your Driveway or Home
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Direct Phone & WhatsApp:</strong>
                    <a href={getTelLink()} className="text-amber-400 font-bold hover:underline">
                      {getDisplayOwnerPhone()}
                    </a>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Call, text via SMS, or message on WhatsApp
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Primary Email:</strong>
                    <a href={getEmailLink()} className="text-amber-400 hover:underline">
                      {BUSINESS_CONFIG.email}
                    </a>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Inquiries & quote coordination
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Hours of Operation:</strong>
                    <div className="text-slate-200 text-xs mt-0.5 font-mono-tech">
                      Monday – Saturday: 9:00 AM – 8:00 PM
                    </div>
                    <div className="text-rose-400 text-xs font-mono-tech mt-0.5">
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas Tags */}
              <div className="pt-3 border-t border-white/10">
                <span className="text-[11px] font-mono-tech uppercase text-slate-400 block mb-2 font-semibold">
                  Service Area: {BUSINESS_CONFIG.serviceArea}
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

            {/* Contact Button Actions */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="text-[11px] font-mono-tech text-slate-400 uppercase font-semibold block mb-1">
                Direct Contact Actions:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {/* Call Button */}
                <a
                  id="contact-call-btn"
                  href={getTelLink()}
                  className="py-2.5 px-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call</span>
                </a>

                {/* SMS Button */}
                <a
                  id="contact-sms-btn"
                  href={getSmsLink()}
                  className="py-2.5 px-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>SMS</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  id="contact-whatsapp-btn"
                  href={getWhatsAppLink()}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-black text-black" />
                  <span>WhatsApp</span>
                </a>

                {/* Email Button */}
                <a
                  id="contact-email-btn"
                  href={getEmailLink()}
                  className="py-2.5 px-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors text-center"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <p className="text-xs text-slate-400/80 text-center pt-1">
              By submitting an inquiry or reaching out, you consent to sending your request details directly to the independent business operator via WhatsApp, SMS, Phone, or Email.
            </p>
          </div>

          {/* Right Column: Base Map Visual & WhatsApp Quick Connect */}
          <div className="lg:col-span-7 bg-[#0f131d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            {/* Map Frame */}
            <div className="relative h-64 sm:h-72 bg-[#1a202c] overflow-hidden border-b border-white/10">
              <div className="absolute inset-0 bg-[#0d1017] carbon-grid opacity-85"></div>
              
              {/* Radar Grid Circles */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-[1px] bg-amber-500/20 top-1/2 absolute"></div>
                <div className="h-full w-[1px] bg-amber-500/20 left-1/2 absolute"></div>
                <div className="w-48 h-48 rounded-full border border-amber-500/20 absolute"></div>
                <div className="w-80 h-80 rounded-full border border-white/5 absolute"></div>
              </div>

              {/* Location Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <div className="relative inline-block">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-2xl animate-bounce mx-auto">
                    <MapPin className="w-6 h-6 fill-black text-black" />
                  </div>
                  <div className="w-8 h-2 rounded-full bg-amber-500/30 blur-sm mx-auto mt-1"></div>
                </div>
                <div className="bg-[#090b10]/95 backdrop-blur-md border border-amber-500/40 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white mt-1 shadow-xl font-mono-tech">
                  {BUSINESS_CONFIG.businessName} • 1219 Woodycrest Ave
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-3 left-3 bg-[#090b10]/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-md text-[10px] font-mono-tech text-slate-300">
                Bronx, NY 10452 • Mobile Base
              </div>

              <div className="absolute bottom-3 right-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_CONFIG.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black/90 hover:bg-black text-amber-400 border border-white/15 px-3 py-1.5 rounded-lg text-xs font-bold font-mono-tech flex items-center space-x-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center items-center text-center space-y-4 bg-gradient-to-b from-[#121622] to-[#0c0f17]">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shadow-lg shadow-[#25D366]/10">
                <MessageSquare className="w-6 h-6" />
              </div>

              <div className="space-y-1.5 max-w-md">
                <h4 className="text-xl sm:text-2xl font-display font-black text-white tracking-tight">
                  Have Questions or Ready to Book?
                </h4>
                <p className="text-xs sm:text-sm text-slate-400">
                  Chat directly with Hershel on WhatsApp for immediate scheduling, questions about pet hair or steam extraction, or brake installation quotes.
                </p>
              </div>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-black uppercase tracking-wider text-xs sm:text-sm rounded-xl shadow-xl shadow-[#25D366]/25 flex items-center justify-center space-x-2.5 transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-black text-black" />
                <span>Instant WhatsApp Chat</span>
              </a>

              <p className="text-xs text-slate-400/80 text-center pt-1 max-w-md">
                By submitting an inquiry or reaching out, you consent to sending your request details directly to the independent business operator via WhatsApp, SMS, Phone, or Email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
