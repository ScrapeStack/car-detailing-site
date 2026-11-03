import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Calendar, 
  Car, 
  User, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { useTemplate } from '../context/TemplateContext';

interface ContactBookingSectionProps {
  preselectedService?: string;
  preselectedPackagePrice?: number;
}

export const ContactBookingSection: React.FC<ContactBookingSectionProps> = ({
  preselectedService = 'Full Interior & Exterior Detail',
  preselectedPackagePrice
}) => {
  const { config, showRawPlaceholders } = useTemplate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleMakeModel: '',
    serviceDesired: preselectedService,
    preferredDate: '',
    notes: '',
    serviceMode: 'studio' as 'studio' | 'mobile'
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const servicesList = [
    'Express Detail ($' + config.expressPrice + ')',
    'Full Interior & Exterior Detail ($' + config.fullDetailPrice + ') [Most Popular]',
    'Ceramic Coating & Paint Correction ($' + config.ceramicPrice + ')',
    'Multi-Stage Paint Correction Only',
    'Interior Steam Clean & Odor Neutralization',
    'Engine Bay Detail & Dressing',
    'Custom VIP Consultation'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.vehicleMakeModel.trim()) {
      setErrorMessage('Please provide your name, phone number, and vehicle make/model.');
      return;
    }
    setErrorMessage('');
    setIsSubmitted(true);
  };

  const generateMessengerInquiryUrl = () => {
    const text = encodeURIComponent(
      `Hi ${config.businessName}! I would like to request an estimate for my ${formData.vehicleMakeModel || 'vehicle'}.\nService: ${formData.serviceDesired}\nPreferred Date: ${formData.preferredDate || 'Flexible'}\nName: ${formData.name}\nPhone: ${formData.phone}`
    );
    // If Facebook Messenger link is m.me link
    if (config.facebookMessengerLink.includes('m.me')) {
      return `${config.facebookMessengerLink}?text=${text}`;
    }
    return config.facebookMessengerLink;
  };

  return (
    <section id="contact" className="py-20 border-b border-white/10 bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-accent font-semibold">
            Section 7 · Contact & Booking
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white text-balance">
            Book Your Transformation or Request a Quote
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Have questions or need an estimate? Reach out via Messenger, phone, or submit the booking form below.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Messenger, Phone, Email, Location, Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#111622] border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center space-x-2">
                <span>Get In Touch Directly</span>
              </h3>

              {/* 1. Direct Messenger Chat */}
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/30 space-y-2">
                <div className="flex items-center space-x-2 text-white font-bold text-sm">
                  <MessageCircle className="w-4 h-4 text-accent" />
                  <span>Direct Messenger Chat</span>
                </div>
                <p className="text-xs text-slate-300">
                  Quickest way to get estimates, send vehicle photos, and ask questions.
                </p>
                <a
                  href={config.facebookMessengerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline pt-1"
                >
                  <span>
                    {showRawPlaceholders ? '[YOUR FACEBOOK MESSENGER LINK]' : 'Open Facebook Messenger Chat'}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 2. Call / Text */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-accent shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider">
                    Call / Text
                  </div>
                  <a
                    href={`tel:${config.phoneNumber.replace(/[^\d+]/g, '')}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-accent transition-colors"
                  >
                    {showRawPlaceholders ? (
                      <span className="text-amber-400 font-mono">[YOUR PHONE NUMBER]</span>
                    ) : (
                      config.phoneNumber
                    )}
                  </a>
                  <p className="text-[11px] text-slate-400">Available during shop hours</p>
                </div>
              </div>

              {/* 3. Email */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-accent shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider">
                    Email Address
                  </div>
                  <a
                    href={`mailto:${config.emailAddress}`}
                    className="text-sm font-semibold text-white hover:text-accent transition-colors break-all"
                  >
                    {showRawPlaceholders ? (
                      <span className="text-amber-400 font-mono">[YOUR EMAIL ADDRESS]</span>
                    ) : (
                      config.emailAddress
                    )}
                  </a>
                </div>
              </div>

              {/* 4. Location */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-accent shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider">
                    Studio & Shop Location
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {showRawPlaceholders ? (
                      <span className="text-amber-400 font-mono block">
                        [YOUR STREET ADDRESS, CITY, STATE]
                      </span>
                    ) : (
                      <>
                        <p>{config.streetAddress}</p>
                        <p className="text-slate-300">{config.cityState}</p>
                      </>
                    )}
                  </div>
                  <p className="text-[11px] text-accent mt-0.5">Mobile service also available at your driveway</p>
                </div>
              </div>

              {/* 5. Hours */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-accent shrink-0">
                  <Clock className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider">
                    Business Hours
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-200">
                    {showRawPlaceholders ? (
                      <span className="text-amber-400 font-mono">[YOUR BUSINESS HOURS]</span>
                    ) : (
                      config.businessHours
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Location Directions Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#111622] to-[#0c1018] border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Need Directions to Studio?
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Secure climate-controlled facility with gated customer parking
                </div>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(`${config.streetAddress}, ${config.cityState}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold flex items-center space-x-1 transition-colors"
              >
                <span>Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact / Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#111622] border border-white/10 shadow-2xl relative">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                      Request Appointment or Estimate
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Fill out the details below. We confirm dates and send estimates promptly.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  {/* Service Mode Selector */}
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-1.5">
                      Service Mode
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceMode: 'studio' })}
                        className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                          formData.serviceMode === 'studio'
                            ? 'bg-accent/20 border-accent text-white shadow-md'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        <div className="font-bold">Studio Facility</div>
                        <div className="text-[11px] opacity-80">Full lighting & cure bay</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceMode: 'mobile' })}
                        className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                          formData.serviceMode === 'mobile'
                            ? 'bg-accent/20 border-accent text-white shadow-md'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        <div className="font-bold">Mobile Detailing</div>
                        <div className="text-[11px] opacity-80">We come to your driveway</div>
                      </button>
                    </div>
                  </div>

                  {/* Input 1: Full Name */}
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-1">
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Input 2: Phone Number */}
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-1">
                      Phone Number <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Input 3: Vehicle Make / Model */}
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-1">
                      Vehicle Make / Model & Year <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <Car className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.vehicleMakeModel}
                        onChange={(e) => setFormData({ ...formData, vehicleMakeModel: e.target.value })}
                        placeholder="e.g. 2024 Porsche 911 GT3 or Tesla Model Y"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Input 4: Service Desired */}
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-1">
                      Service Desired
                    </label>
                    <select
                      value={formData.serviceDesired}
                      onChange={(e) => setFormData({ ...formData, serviceDesired: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none"
                    >
                      {servicesList.map((service, sIdx) => (
                        <option key={sIdx} value={service} className="bg-slate-900 text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Input 5: Preferred Date */}
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:border-accent focus:outline-none text-slate-200"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-accent hover:opacity-95 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg glow-accent-hover transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Booking Request</span>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      No upfront payment required · We confirm date & time before service
                    </p>
                  </div>
                </form>
              ) : (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                      Booking Request Received!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto mt-2">
                      Thank you, <strong className="text-white">{formData.name}</strong>. We received your request for your{' '}
                      <strong className="text-white">{formData.vehicleMakeModel}</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-left text-xs font-mono-tech space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Service:</span>
                      <span className="text-white font-bold">{formData.serviceDesired}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Location Mode:</span>
                      <span className="text-white capitalize">{formData.serviceMode}</span>
                    </div>
                    {formData.preferredDate && (
                      <div className="flex justify-between">
                        <span className="text-slate-400">Requested Date:</span>
                        <span className="text-white">{formData.preferredDate}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-slate-400">Contact:</span>
                      <span className="text-white">{formData.phone}</span>
                    </div>
                  </div>

                  {/* Direct Actions: Messenger or Call */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2">
                    <a
                      href={generateMessengerInquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-accent text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md hover:opacity-90"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat Now on Messenger</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-3 rounded-xl bg-white/10 text-slate-300 hover:text-white text-xs font-medium border border-white/15"
                    >
                      Edit Request
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
