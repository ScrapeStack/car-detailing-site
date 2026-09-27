import React, { useState, useEffect } from 'react';
import { Calculator, Calendar, Clock, MapPin, Shield, Sparkles, CheckCircle2, User, Mail, Phone, Car, AlertCircle, ArrowRight, MessageSquare, Loader2 } from 'lucide-react';
import { VEHICLE_OPTIONS, PACKAGES_DATA, SERVICES_DATA, ADDONS_DATA, BUSINESS_INFO } from '../data/businessData';
import { BUSINESS_CONFIG } from '../config';
import { sendWhatsAppBooking, getCleanOwnerPhone, getDisplayOwnerPhone, getTelLink } from '../utils/whatsapp';
import { VehicleType, BookingFormData } from '../types';

interface InstantQuoteBookingProps {
  initialServiceId?: string;
  initialPackageId?: string;
  initialVehicleType?: VehicleType;
  selectedVehicleClass?: VehicleType;
  onSelectVehicleClass?: (vehicleType: VehicleType) => void;
}

/**
 * Generates a pre-filled WhatsApp booking URL with clean formatting
 */
export function generateWhatsAppUrl(bookingData: {
  vehicleType?: string;
  selectedVehicle?: string;
  serviceName?: string;
  selectedPackage?: string;
  addOns?: string[];
  selectedAddons?: string[];
  totalPrice: number | string;
  clientName?: string;
  name?: string;
  fullName?: string;
  clientPhone?: string;
  phone?: string;
  clientEmail?: string;
  email?: string;
  serviceAddress?: string;
  address?: string;
  preferredTime?: string;
  notes?: string;
  comments?: string;
  specialRequests?: string;
  specialNotes?: string;
  description?: string;
}): string {
  const cleanPhone = BUSINESS_CONFIG.ownerPhone.replace(/\D/g, '');
  
  const rawNotes = (
    bookingData.notes ?? 
    bookingData.comments ?? 
    bookingData.specialRequests ?? 
    bookingData.specialNotes ?? 
    bookingData.description ?? 
    ''
  ).trim();

  const addOnsRaw = bookingData.selectedAddons ?? bookingData.addOns ?? [];
  const addOnsList = addOnsRaw.length > 0 ? addOnsRaw.join(', ') : 'None';

  const clientName = bookingData.name || bookingData.fullName || bookingData.clientName || '';
  const clientPhone = bookingData.phone || bookingData.clientPhone || '';
  const clientEmail = bookingData.email || bookingData.clientEmail || 'Not provided';
  const serviceAddress = bookingData.address || bookingData.serviceAddress || 'To be coordinated';
  const selectedVehicle = bookingData.selectedVehicle || bookingData.vehicleType || 'Standard';
  const selectedPackage = bookingData.selectedPackage || bookingData.serviceName || 'Custom Detail';

  const lines = [
    `*New Booking Request - ${BUSINESS_CONFIG.businessName}*`,
    ``,
    `*Client:* ${clientName}`,
    `*Phone:* ${clientPhone}`,
    `*Email:* ${clientEmail}`,
    `*Service Address:* ${serviceAddress}`,
    ``,
    `*Vehicle:* ${selectedVehicle}`,
    `*Package:* ${selectedPackage}`,
    `*Add-ons:* ${addOnsList}`,
    `*Estimated Total:* ${BUSINESS_CONFIG.currency}${bookingData.totalPrice}`
  ];

  if (bookingData.preferredTime) {
    lines.push(`*Preferred Time:* ${bookingData.preferredTime}`);
  }

  if (rawNotes.length > 0 && rawNotes !== 'None provided') {
    lines.push(`*Notes:* ${rawNotes}`);
  }

  const encodedMessage = lines.map(line => encodeURIComponent(line)).join('%0A');
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export const InstantQuoteBooking: React.FC<InstantQuoteBookingProps> = ({
  initialServiceId,
  initialPackageId,
  initialVehicleType = 'coupe',
  selectedVehicleClass,
  onSelectVehicleClass
}) => {
  const effectiveVehicleClass = selectedVehicleClass || initialVehicleType;

  const [formData, setFormData] = useState<BookingFormData>({
    vehicleType: effectiveVehicleClass,
    vehicleYearMakeModel: '',
    serviceId: initialServiceId || SERVICES_DATA[0].id,
    packageTierId: initialPackageId || PACKAGES_DATA[0].id,
    selectedAddOns: [],
    serviceMode: 'studio',
    mobileAddress: '',
    preferredDate: '',
    preferredTime: '09:00 AM',
    fullName: '',
    email: '',
    phone: '',
    specialNotes: '',
    notes: '',
    comments: '',
    specialRequests: '',
    description: ''
  });

  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  useEffect(() => {
    if (initialPackageId) {
      setFormData(prev => ({ ...prev, packageTierId: initialPackageId }));
    }
  }, [initialPackageId]);

  useEffect(() => {
    if (selectedVehicleClass) {
      setFormData(prev => ({ ...prev, vehicleType: selectedVehicleClass }));
    } else if (initialVehicleType) {
      setFormData(prev => ({ ...prev, vehicleType: initialVehicleType }));
    }
  }, [selectedVehicleClass, initialVehicleType]);

  const activeVehicleType = selectedVehicleClass || formData.vehicleType;
  const selectedVehicleObj = VEHICLE_OPTIONS.find(v => v.id === activeVehicleType) || VEHICLE_OPTIONS[0];
  const selectedPackageObj = PACKAGES_DATA.find(p => p.id === formData.packageTierId) || PACKAGES_DATA[0];

  // Calculate live price with exact 2 decimal places support
  const basePackagePrice = Number((selectedPackageObj.price * selectedVehicleObj.multiplier).toFixed(2));
  const addOnsTotal = formData.selectedAddOns.reduce((acc, addonId) => {
    const item = ADDONS_DATA.find(a => a.id === addonId);
    return acc + (item ? item.price : 0);
  }, 0);
  const mobileConvenienceFee = 0;
  const grandTotal = (basePackagePrice + addOnsTotal + mobileConvenienceFee).toFixed(2);

  const toggleAddOn = (addonId: string) => {
    setFormData(prev => {
      const exists = prev.selectedAddOns.includes(addonId);
      if (exists) {
        return { ...prev, selectedAddOns: prev.selectedAddOns.filter(id => id !== addonId) };
      } else {
        return { ...prev, selectedAddOns: [...prev.selectedAddOns, addonId] };
      }
    });
  };

  const [whatsAppUrl, setWhatsAppUrl] = useState<string>('');
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);

  const handleWhatsAppBooking = (e?: React.FormEvent) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    if (!formData.fullName || !formData.phone) {
      return;
    }
    const code = `GT-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(code);
    setBookingConfirmed(true);
    setIsRedirecting(true);

    const vehicleType = formData.vehicleYearMakeModel 
      ? `${formData.vehicleYearMakeModel} (${selectedVehicleObj.name})`
      : selectedVehicleObj.name;

    const addOnsList = formData.selectedAddOns
      .map(id => ADDONS_DATA.find(a => a.id === id)?.name)
      .filter((name): name is string => Boolean(name));

    const preferredTimeStr = formData.preferredDate 
      ? `${formData.preferredDate} (${formData.preferredTime})` 
      : formData.preferredTime;

    // Capture notes input state, trim whitespace, and default to "None provided" if empty
    const rawNotes = (
      formData.specialNotes || 
      formData.notes || 
      formData.comments || 
      formData.specialRequests || 
      formData.description || 
      ''
    ).trim();
    const notesText = rawNotes.length > 0 ? rawNotes : 'None provided';

    const targetUrl = generateWhatsAppUrl({
      vehicleType,
      selectedVehicle: vehicleType,
      serviceName: selectedPackageObj.name,
      selectedPackage: selectedPackageObj.name,
      addOns: addOnsList,
      selectedAddons: addOnsList,
      totalPrice: grandTotal,
      clientName: formData.fullName,
      name: formData.fullName,
      clientPhone: formData.phone,
      phone: formData.phone,
      clientEmail: formData.email.trim() ? formData.email.trim() : 'Not provided',
      email: formData.email.trim() ? formData.email.trim() : 'Not provided',
      serviceAddress: formData.serviceMode === 'mobile'
        ? (formData.mobileAddress.trim() ? formData.mobileAddress.trim() : 'Mobile Dispatch (Address to be coordinated)')
        : `${BUSINESS_CONFIG.location} Studio Bay (108-14 Northern Blvd)`,
      address: formData.serviceMode === 'mobile'
        ? (formData.mobileAddress.trim() ? formData.mobileAddress.trim() : 'Mobile Dispatch (Address to be coordinated)')
        : `${BUSINESS_CONFIG.location} Studio Bay (108-14 Northern Blvd)`,
      preferredTime: preferredTimeStr || 'ASAP',
      notes: notesText,
      comments: notesText,
      specialRequests: notesText,
      specialNotes: notesText,
      description: notesText
    });

    setWhatsAppUrl(targetUrl);
    window.open(targetUrl, '_blank');

    setTimeout(() => {
      setIsRedirecting(false);
    }, 3500);
  };

  const handleFormSubmit = handleWhatsAppBooking;

  return (
    <section id="quote-builder" className="py-24 bg-[#090b10] relative carbon-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-xs font-mono-tech text-[#00E5FF] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Quote Calculator & Online Scheduler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Customize Your Detailing Package
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Get an instant, transparent quote calibrated to your specific vehicle size, service choice, and appointment preferences in {BUSINESS_CONFIG.location}.
          </p>
        </div>

        {/* Quote Builder Form */}
        <form onSubmit={handleFormSubmit} className="space-y-8">
          {/* Main Options Section & Sticky Live Quote Summary Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Selection Options (Sections 1, 2, and 3) */}
            <div className="lg:col-span-8 bg-[#0f131d] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-8">
              {/* STEP 1: Vehicle Classification */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-display font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0066FF] text-white text-xs font-black flex items-center justify-center font-mono-tech">1</span>
                    Select Vehicle Classification
                  </label>
                  <span className="text-xs text-slate-400 font-mono-tech">Calibrated to vehicle surface size</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {VEHICLE_OPTIONS.map((veh) => {
                    const isSelected = veh.id === activeVehicleType;
                    return (
                      <button
                        type="button"
                        key={veh.id}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, vehicleType: veh.id }));
                          onSelectVehicleClass?.(veh.id);
                        }}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-[#0066FF]/20 border-[#00E5FF] text-white shadow-md shadow-[#0066FF]/20'
                            : 'bg-[#090b10] border-white/10 text-slate-400 hover:bg-[#121620] hover:text-slate-200'
                        }`}
                      >
                        <div className="font-bold text-xs text-white">{veh.name}</div>
                        <div className="text-[11px] text-slate-400 mt-1 font-mono-tech truncate">{veh.category}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Specific Make / Model Input */}
                <div className="mt-3">
                  <input
                    type="text"
                    id="booking-vehicle-input"
                    placeholder="e.g. 2024 Honda Accord, Black or Tesla Model Y"
                    value={formData.vehicleYearMakeModel}
                    onChange={(e) => setFormData(prev => ({ ...prev, vehicleYearMakeModel: e.target.value }))}
                    className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
              </div>

              {/* STEP 2: Detailing Package Tier */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-display font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0066FF] text-white text-xs font-black flex items-center justify-center font-mono-tech">2</span>
                    Select Detailing Package
                  </label>
                  <span className="text-xs text-[#00E5FF] font-mono-tech font-semibold">{BUSINESS_CONFIG.location} Center Rates</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PACKAGES_DATA.map((pkg) => {
                    const isSelected = pkg.id === formData.packageTierId;
                    const tierPrice = (pkg.price * selectedVehicleObj.multiplier).toFixed(2);

                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setFormData(prev => ({ ...prev, packageTierId: pkg.id }))}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-gradient-to-br from-[#0c1a36] to-[#0a1226] border-[#00E5FF] shadow-lg shadow-[#0066FF]/20'
                            : 'bg-[#090b10] border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[10px] font-mono-tech uppercase text-[#00E5FF] font-bold">{pkg.serviceType}</span>
                            <div className="font-bold text-sm text-white">{pkg.name}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-display font-black text-base text-[#00E5FF]">${tierPrice}</div>
                            <div className="text-[10px] text-slate-500 font-mono-tech">{pkg.duration}</div>
                          </div>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-2 line-clamp-2">{pkg.subtitle}</div>
                        <div className="text-[10px] text-emerald-400 font-mono-tech mt-2 flex items-center gap-1 font-semibold">
                          <Shield className="w-3 h-3 text-[#00E5FF]" />
                          {pkg.warranty}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STEP 3: Add-On Precision Coatings */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-display font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0066FF] text-white text-xs font-black flex items-center justify-center font-mono-tech">3</span>
                    Add-On Precision Treatments (Optional)
                  </label>
                  <span className="text-xs text-slate-400 font-mono-tech">Targeted Care Options</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ADDONS_DATA.map((addon) => {
                    const isChecked = formData.selectedAddOns.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          isChecked
                            ? 'bg-[#0066FF]/15 border-[#00E5FF]/70 text-white'
                            : 'bg-[#090b10] border-white/5 text-slate-400 hover:bg-[#121620] hover:text-slate-200'
                        }`}
                      >
                        <div className="pr-2">
                          <div className="font-semibold text-xs text-white">{addon.name}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{addon.description}</div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs font-bold text-[#00E5FF] font-mono-tech">+${addon.price}</span>
                          <div className={`w-4 h-4 rounded border mt-1 ml-auto flex items-center justify-center ${
                            isChecked ? 'bg-[#0066FF] border-[#00E5FF] text-white' : 'border-slate-600'
                          }`}>
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Order Summary Box (Height matches Left Column steps 1-3) */}
            <div className="lg:col-span-4 w-full self-stretch">
              <div className="lg:sticky lg:top-6 lg:self-start space-y-4">
                <div className="bg-[#121622] border border-[#0066FF]/40 rounded-2xl p-6 shadow-2xl space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-display font-bold text-white text-base">Live Quote Summary</span>
                  </div>

                  {/* Vehicle & Package Selected */}
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-400 font-mono-tech">Vehicle Class:</span>
                      <span className="font-bold text-white">{selectedVehicleObj.name}</span>
                    </div>

                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-400 font-mono-tech">Package:</span>
                      <span className="font-bold text-[#00E5FF]">{selectedPackageObj.name}</span>
                    </div>

                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-400 font-mono-tech">Base Package:</span>
                      <span className="font-mono-tech font-semibold">{BUSINESS_CONFIG.currency}{basePackagePrice.toFixed(2)}</span>
                    </div>

                    {/* Add-ons list */}
                    {formData.selectedAddOns.length > 0 && (
                      <div className="pt-2 border-t border-white/5 space-y-1">
                        <span className="text-[10px] font-mono-tech uppercase text-slate-400 block font-semibold">Selected Add-Ons:</span>
                        {formData.selectedAddOns.map(addId => {
                          const addon = ADDONS_DATA.find(a => a.id === addId);
                          if (!addon) return null;
                          return (
                            <div key={addId} className="flex justify-between text-[11px] text-slate-300">
                              <span className="truncate pr-2">• {addon.name}</span>
                              <span className="font-mono-tech text-[#00E5FF]">+{BUSINESS_CONFIG.currency}{addon.price}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    <div className="flex justify-between text-slate-300 pt-2 border-t border-white/5">
                      <span className="text-slate-400 font-mono-tech">Location Mode:</span>
                      <span className="font-bold text-white capitalize">{formData.serviceMode === 'studio' ? 'Queens Detail Center Bay' : 'Mobile Detailing Unit'}</span>
                    </div>

                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-400 font-mono-tech">Estimated Duration:</span>
                      <span className="font-mono-tech text-sky-400 font-semibold">{selectedPackageObj.duration}</span>
                    </div>

                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-400 font-mono-tech">Quality Standard:</span>
                      <span className="font-mono-tech text-emerald-400 font-semibold">{selectedPackageObj.warranty}</span>
                    </div>
                  </div>

                  {/* Total Price Block */}
                  <div className="bg-[#090b10] p-4 rounded-xl border border-white/10 space-y-1">
                    <div className="text-[11px] text-slate-400 font-mono-tech uppercase">Estimated Total Cost:</div>
                    <div className="text-3xl font-display font-black text-[#00E5FF] flex items-baseline justify-between">
                      <span>{BUSINESS_CONFIG.currency}{grandTotal}</span>
                      <span className="text-[10px] text-slate-500 font-mono-tech font-normal">Transparent Pricing</span>
                    </div>
                  </div>
                </div>

                {/* Quick Phone Call Card */}
                <div className="bg-[#0f131d] border border-white/10 rounded-xl p-4 text-xs text-center space-y-1">
                  <span className="text-slate-400 font-mono-tech">Prefer to speak with our Queens detail team?</span>
                  <div>
                    <a href={getTelLink()} className="text-[#00E5FF] font-bold text-sm hover:underline">
                      {getDisplayOwnerPhone()}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Booking Container: Location, Schedule & Contact (Steps 4 & 5) */}
          <div className="bg-[#0f131d] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-8">
            {/* STEP 4: Service Location & Schedule */}
            <div>
              <label className="text-sm font-display font-bold text-white flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#0066FF] text-white text-xs font-black flex items-center justify-center font-mono-tech">4</span>
                Location & Appointment Preferences
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, serviceMode: 'studio' }))}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    formData.serviceMode === 'studio'
                      ? 'bg-[#0066FF]/20 border-[#00E5FF] text-white'
                      : 'bg-[#090b10] border-white/10 text-slate-400 hover:bg-[#121620]'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#00E5FF]" />
                    <span className="font-bold text-xs text-white">{BUSINESS_CONFIG.location} Detail Center</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    108-14 Northern Blvd, Queens, NY (Fully equipped wash & detail bays)
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, serviceMode: 'mobile' }))}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    formData.serviceMode === 'mobile'
                      ? 'bg-[#0066FF]/20 border-[#00E5FF] text-white'
                      : 'bg-[#090b10] border-white/10 text-slate-400 hover:bg-[#121620]'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Car className="w-4 h-4 text-[#00E5FF]" />
                    <span className="font-bold text-xs text-white">Mobile Detailing Unit</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Mobile unit dispatched directly to your home or office in Queens
                  </p>
                </button>
              </div>

              {formData.serviceMode === 'mobile' && (
                <div className="mb-4">
                  <label className="text-xs text-slate-300 font-mono-tech block mb-1">Your Mobile Service Address (Queens, NY):</label>
                  <input
                    type="text"
                    id="booking-address-input"
                    placeholder={`e.g. 31-10 Broadway, Astoria, Queens, NY 11106`}
                    value={formData.mobileAddress}
                    onChange={(e) => setFormData(prev => ({ ...prev, mobileAddress: e.target.value }))}
                    className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
              )}

              {/* Date & Time Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-300 font-mono-tech block mb-1">Preferred Date:</label>
                  <input
                    type="date"
                    id="booking-date-input"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, preferredDate: e.target.value }))}
                    className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-mono-tech block mb-1">Preferred Time Window:</label>
                  <select
                    id="booking-time-select"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
                    className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#0066FF]"
                  >
                    <option value="08:00 AM">Morning Slot (08:00 AM)</option>
                    <option value="10:30 AM">Mid-Morning Slot (10:30 AM)</option>
                    <option value="01:00 PM">Afternoon Slot (01:00 PM)</option>
                    <option value="03:30 PM">Late Afternoon (03:30 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* STEP 5: Contact Details */}
            <div className="pt-2 border-t border-white/10">
              <label className="text-sm font-display font-bold text-white flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#0066FF] text-white text-xs font-black flex items-center justify-center font-mono-tech">5</span>
                Your Contact Information
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <input
                    type="text"
                    id="booking-name-input"
                    placeholder="Full Name *"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="booking-phone-input"
                    placeholder="Phone (For confirmation) *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="booking-email-input"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
              </div>

              <div className="mt-3">
                <textarea
                  id="booking-notes-input"
                  name="notes"
                  placeholder="Special requests or vehicle condition notes (e.g. heavy pet hair, interior spill, dark paint swirl removal)..."
                  rows={2}
                  value={formData.specialNotes}
                  onChange={(e) => {
                    const val = e.target.value;
                    setFormData(prev => ({ 
                      ...prev, 
                      specialNotes: val,
                      notes: val,
                      comments: val,
                      specialRequests: val,
                      description: val 
                    }));
                  }}
                  className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF] resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Trigger */}
            <button
              id="booking-submit-final-btn"
              type="submit"
              disabled={isRedirecting}
              className="w-full py-4 bg-gradient-to-r from-[#0066FF] via-[#0080FF] to-[#00E5FF] hover:from-[#0052CC] hover:to-[#00D0E8] disabled:opacity-80 text-white font-black uppercase tracking-wider text-sm rounded-xl shadow-xl shadow-[#0066FF]/25 flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              {isRedirecting ? (
                <>
                  <Loader2 className="w-4 h-4 text-white animate-spin" />
                  <span>Redirecting to WhatsApp...</span>
                </>
              ) : (
                <>
                  <span>Reserve Appointment & Lock In Quote ({BUSINESS_CONFIG.currency}{grandTotal})</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* RESPONSIVE DISCLAIMER FIX: Strictly visible, readable, and properly padded across ALL screen sizes */}
            <div className="w-full pt-3 px-3">
              <p className="text-xs text-slate-300 text-center flex items-center justify-center gap-1.5 leading-relaxed">
                <Shield className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                <span>By submitting you consent to sharing your info via WhatsApp, email, phone, and direct messaging with Gentle Touch Hand Car Wash and Vehicle Detail Center.</span>
              </p>
            </div>

            {isRedirecting && (
              <div className="p-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 flex items-center justify-center space-x-2 animate-pulse font-mono-tech">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Redirecting to WhatsApp with your reservation details...</span>
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Booking Confirmation Dialog / Modal */}
      {bookingConfirmed && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121622] border border-[#0066FF]/50 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono-tech uppercase text-[#00E5FF] font-bold">Booking Request Dispatched</span>
              <h3 className="text-2xl font-display font-black text-white">Your Appointment Request is Confirmed</h3>
              <p className="text-xs text-slate-300">
                Thank you <strong className="text-white">{formData.fullName}</strong>. The <strong className="text-white">{BUSINESS_CONFIG.businessName}</strong> team has received your appointment request for your <strong className="text-white">{formData.vehicleYearMakeModel || selectedVehicleObj.name}</strong>.
              </p>
            </div>

            <div className="bg-[#090b10] border border-white/10 rounded-xl p-4 text-xs text-left space-y-2 font-mono-tech">
              <div className="flex justify-between"><span className="text-slate-400">Confirmation Code:</span><span className="text-[#00E5FF] font-bold">{confirmationCode}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Package:</span><span className="text-white">{selectedPackageObj.name}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Service Mode:</span><span className="text-white">{formData.serviceMode === 'studio' ? `${BUSINESS_CONFIG.location} Center` : 'Mobile Unit'}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Estimated Total:</span><span className="text-emerald-400 font-bold">{BUSINESS_CONFIG.currency}{grandTotal}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Date & Slot:</span><span className="text-white">{formData.preferredDate || 'Earliest Available'} ({formData.preferredTime})</span></div>
              {formData.specialNotes && (
                <div className="flex justify-between border-t border-white/5 pt-2">
                  <span className="text-slate-400">Notes:</span>
                  <span className="text-white max-w-[65%] text-right truncate">{formData.specialNotes}</span>
                </div>
              )}
            </div>

            <p className="text-[11px] text-slate-400">
              Your structured reservation message has been prepared for WhatsApp. If your WhatsApp window did not open automatically, click below:
            </p>

            {whatsAppUrl && (
              <div className="space-y-2">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold uppercase tracking-wider text-xs rounded-xl transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open in WhatsApp Now</span>
                </a>
                {/* Strictly visible readable disclaimer */}
                <p className="text-xs text-slate-300 text-center py-2 px-3 leading-relaxed">
                  By submitting you consent to sharing your info via WhatsApp, email, phone, and direct messaging with Gentle Touch Hand Car Wash and Vehicle Detail Center.
                </p>
              </div>
            )}

            <button
              onClick={() => setBookingConfirmed(false)}
              className="w-full py-2.5 bg-white/10 text-white font-semibold uppercase tracking-wider text-xs rounded-xl hover:bg-white/20 transition-colors"
            >
              Done & Return to Site
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
