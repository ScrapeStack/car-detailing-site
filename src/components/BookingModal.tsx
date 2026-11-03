import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Calendar, Car, User, Phone, Sparkles } from 'lucide-react';
import { useTemplate } from '../context/TemplateContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackage?: string;
  preselectedPrice?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedPackage = 'Full Interior & Exterior Detail',
  preselectedPrice
}) => {
  const { config, showRawPlaceholders } = useTemplate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleMakeModel: '',
    serviceDesired: preselectedPackage,
    preferredDate: '',
    serviceMode: 'studio' as 'studio' | 'mobile'
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.vehicleMakeModel.trim()) {
      setError('Please provide your name, phone number, and vehicle details.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  const handleMessengerClick = () => {
    const text = encodeURIComponent(
      `Hello ${config.businessName}, I would like to schedule a ${formData.serviceDesired} for my ${formData.vehicleMakeModel || 'vehicle'}. My phone is ${formData.phone}.`
    );
    const url = config.facebookMessengerLink.includes('m.me')
      ? `${config.facebookMessengerLink}?text=${text}`
      : config.facebookMessengerLink;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#111622] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0c1019]">
          <div className="flex items-center space-x-2">
            <span className="p-1.5 rounded-lg bg-accent/20 text-accent">
              <Sparkles className="w-4 h-4 text-accent" />
            </span>
            <h3 className="text-base font-bold text-white tracking-wide">
              {isSubmitted ? 'Booking Confirmed' : 'Instant Detailing Quote & Booking'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-2.5 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs">
                  {error}
                </div>
              )}

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-1">
                  Service Desired
                </label>
                <select
                  value={formData.serviceDesired}
                  onChange={(e) => setFormData({ ...formData, serviceDesired: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs sm:text-sm focus:border-accent focus:outline-none"
                >
                  <option value="Express Detail">Express Detail (${config.expressPrice})</option>
                  <option value="Full Interior & Exterior Detail">Full Interior & Exterior Detail (${config.fullDetailPrice}) [Most Popular]</option>
                  <option value="Ceramic Coating & Paint Correction">Ceramic Coating & Paint Correction (${config.ceramicPrice})</option>
                  <option value="Custom Service / Consultation">Custom Service / Consultation</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-1">
                  Your Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Marcus Vance"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs sm:text-sm focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 789-2040"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs sm:text-sm focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              {/* Vehicle */}
              <div>
                <label className="block text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-1">
                  Vehicle Make & Model
                </label>
                <div className="relative">
                  <Car className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={formData.vehicleMakeModel}
                    onChange={(e) => setFormData({ ...formData, vehicleMakeModel: e.target.value })}
                    placeholder="e.g. 2023 Porsche 911 GT3"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs sm:text-sm focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-1">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs sm:text-sm focus:border-accent focus:outline-none text-slate-300"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-accent hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg glow-accent-hover transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Instant Appointment</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="text-xl font-bold text-white">We've Received Your Details!</h4>
              <p className="text-xs text-slate-300">
                Our lead detailer at {config.businessName} will review your vehicle specs and contact you at {formData.phone}.
              </p>
              
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleMessengerClick}
                  className="w-full py-3 bg-accent text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Direct Note on Messenger</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 bg-white/5 text-slate-300 hover:text-white rounded-xl text-xs font-medium"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
