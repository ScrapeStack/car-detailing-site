import React, { useState, useEffect } from 'react';
import { Calculator, Calendar, Clock, MapPin, Shield, Sparkles, CheckCircle2, User, Mail, Phone, Car, AlertCircle, ArrowRight, MessageSquare, Loader2, Wrench, MessageCircle } from 'lucide-react';
import { VEHICLE_OPTIONS, PACKAGES_DATA, SERVICES_DATA, ADDONS_DATA, BUSINESS_INFO, getPackagePrice } from '../data/businessData';
import { BUSINESS_CONFIG } from '../config';
import { sendWhatsAppBooking, generateWhatsAppUrl, getCleanOwnerPhone, getDisplayOwnerPhone, getTelLink, getSmsLink, getEmailLink } from '../utils/whatsapp';
import { VehicleType, BookingFormData } from '../types';

interface InstantQuoteBookingProps {
  initialServiceId?: string;
  initialPackageId?: string;
  initialVehicleType?: VehicleType;
  selectedVehicleClass?: VehicleType;
  onSelectVehicleClass?: (vehicleType: VehicleType) => void;
}

export const InstantQuoteBooking: React.FC<InstantQuoteBookingProps> = ({
  initialServiceId,
  initialPackageId,
  initialVehicleType = 'sedan',
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
    serviceMode: 'mobile',
    mobileAddress: '',
    preferredDate: '',
    preferredTime: '10:00 AM',
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
  const [whatsAppUrl, setWhatsAppUrl] = useState<string>('');
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);

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

  // Calculate live price based on exact requirements:
  // Full Interior: Sedans $200.00, 3-Row/Trucks $249.99
  // Interior Express: Flat $99.99
  // Exterior Foam: Flat $74.99
  const basePackagePrice = getPackagePrice(selectedPackageObj.id, activeVehicleType);

  const addOnsTotal = formData.selectedAddOns.reduce((acc, addonId) => {
    const item = ADDONS_DATA.find(a => a.id === addonId);
    return acc + (item ? item.price : 0);
  }, 0);

  const grandTotal = Number((basePackagePrice + addOnsTotal).toFixed(2));

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

  const handleWhatsAppBooking = (e?: React.FormEvent) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }

    const code = `GOTG-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(code);
    setBookingConfirmed(true);
    setIsRedirecting(true);

    const vehicleDesc = formData.vehicleYearMakeModel 
      ? `${formData.vehicleYearMakeModel} (${selectedVehicleObj.name})`
      : selectedVehicleObj.name;

    const addOnsList = formData.selectedAddOns
      .map(id => ADDONS_DATA.find(a => a.id === id)?.name)
      .filter((name): name is string => Boolean(name));

    const preferredTimeStr = formData.preferredDate 
      ? `${formData.preferredDate} (${formData.preferredTime})` 
      : formData.preferredTime;

    const rawNotes = (
      formData.specialNotes || 
      formData.notes || 
      formData.description || 
      formData.comments || 
      formData.specialRequests || 
      ''
    ).trim();

    const targetUrl = generateWhatsAppUrl({
      vehicleType: vehicleDesc,
      selectedVehicle: vehicleDesc,
      serviceName: selectedPackageObj.name,
      selectedPackage: selectedPackageObj.name,
      addOns: addOnsList,
      selectedAddons: addOnsList,
      totalPrice: grandTotal.toFixed(2),
      clientName: formData.fullName || 'Prospective Client',
      name: formData.fullName || 'Prospective Client',
      clientPhone: formData.phone || 'Not provided',
      phone: formData.phone || 'Not provided',
      clientEmail: formData.email.trim() ? formData.email.trim() : 'Not provided',
      email: formData.email.trim() ? formData.email.trim() : 'Not provided',
      serviceAddress: formData.mobileAddress.trim() 
        ? formData.mobileAddress.trim() 
        : 'Bronx / NYC Metropolitan Area (Mobile - We Come To You)',
      address: formData.mobileAddress.trim() 
        ? formData.mobileAddress.trim() 
        : 'Bronx / NYC Metropolitan Area (Mobile - We Come To You)',
      preferredTime: preferredTimeStr || '9:00 AM – 8:00 PM Window',
      notes: rawNotes,
      description: rawNotes,
      details: rawNotes,
      comments: rawNotes,
      specialRequests: rawNotes,
      specialNotes: rawNotes
    });

    setWhatsAppUrl(targetUrl);
    window.open(targetUrl, '_blank');

    setTimeout(() => {
      setIsRedirecting(false);
    }, 3000);
  };

  return (
    <section id="quote-builder" className="py-20 sm:py-24 bg-[#090b10] relative carbon-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono-tech text-emerald-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Mobile Quote & WhatsApp Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Schedule Your Mobile Visit
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Select your vehicle size, pick your package, choose add-ons, and book directly with Hershel on WhatsApp. We come right to your driveway in the Bronx and NYC.
          </p>
        </div>

        {/* Quote Builder Form */}
        <form onSubmit={handleWhatsAppBooking} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Selection Options */}
            <div className="lg:col-span-8 bg-[#0f131d] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-8">
              
              {/* STEP 1: Vehicle Classification */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-display font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-black text-xs font-black flex items-center justify-center font-mono-tech">1</span>
                    Select Vehicle Size
                  </label>
                  <span className="text-xs text-slate-400 font-mono-tech">Determines Full Interior Rate</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500/15 border-amber-500 text-white shadow-md shadow-amber-500/10'
                            : 'bg-[#090b10] border-white/10 text-slate-400 hover:bg-[#121620] hover:text-slate-200'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="font-bold text-sm text-white">{veh.name}</div>
                          <span className={`text-[11px] px-2 py-0.5 rounded font-mono-tech font-bold ${
                            isSelected ? 'bg-amber-500 text-black' : 'bg-white/10 text-amber-400'
                          }`}>
                            {veh.id === 'sedan' ? 'Sedan ($200)' : '3-Row/Truck ($249.99)'}
                          </span>
                        </div>
                        <div className="text-xs text-slate-400 mt-1 font-mono-tech">{veh.examples}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Specific Vehicle Make & Model */}
                <div className="mt-3">
                  <input
                    type="text"
                    id="booking-vehicle-input"
                    placeholder="Enter your vehicle make & model (e.g., 2022 Honda Accord Sedan, Black)"
                    value={formData.vehicleYearMakeModel}
                    onChange={(e) => setFormData(prev => ({ ...prev, vehicleYearMakeModel: e.target.value }))}
                    className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* STEP 2: Detailing Package Tier */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-display font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-black text-xs font-black flex items-center justify-center font-mono-tech">2</span>
                    Select Service Package
                  </label>
                  <span className="text-xs text-emerald-400 font-mono-tech font-semibold">Mobile — We Come To You</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PACKAGES_DATA.map((pkg) => {
                    const isSelected = pkg.id === formData.packageTierId;
                    const tierPrice = getPackagePrice(pkg.id, activeVehicleType);

                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setFormData(prev => ({ ...prev, packageTierId: pkg.id }))}
                        className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-gradient-to-br from-[#182236] to-[#101726] border-amber-500 shadow-lg shadow-amber-500/10'
                            : 'bg-[#090b10] border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div>
                          <div className="flex justify-between items-start">
                            <span className="text-[10px] font-mono-tech uppercase text-amber-400 font-bold">{pkg.duration}</span>
                            <div className="font-display font-black text-base text-amber-400">${tierPrice.toFixed(2)}</div>
                          </div>
                          <div className="font-bold text-sm text-white mt-1 leading-snug">{pkg.name}</div>
                          <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">{pkg.subtitle}</div>
                        </div>
                        <div className="text-[10px] text-emerald-400 font-mono-tech mt-3 flex items-center gap-1 font-semibold">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{pkg.id === 'full-interior-steam' ? 'Sedans $200 / SUVs $249.99' : 'Flat Rate'}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STEP 3: Add-On Services */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-display font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-black text-xs font-black flex items-center justify-center font-mono-tech">3</span>
                    Add-On Services (Optional Driveway Upgrades)
                  </label>
                  <span className="text-xs text-slate-400 font-mono-tech">Engine Bay, Brakes, Stereo</span>
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
                            ? 'bg-amber-500/10 border-amber-500/60 text-white'
                            : 'bg-[#090b10] border-white/5 text-slate-400 hover:bg-[#121620] hover:text-slate-200'
                        }`}
                      >
                        <div className="pr-2">
                          <div className="font-semibold text-xs text-white">{addon.name}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{addon.description}</div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs font-bold text-amber-400 font-mono-tech">+${addon.price.toFixed(2)}</span>
                          <div className={`w-4 h-4 rounded border mt-1 ml-auto flex items-center justify-center ${
                            isChecked ? 'bg-amber-500 border-amber-500 text-black' : 'border-slate-600'
                          }`}>
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Live Quote Summary & Quick Action Card */}
            <div className="lg:col-span-4 w-full">
              <div className="lg:sticky lg:top-6 space-y-4">
                <div className="bg-[#121622] border border-amber-500/30 rounded-2xl p-6 shadow-2xl space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-display font-bold text-white text-base">Booking Summary</span>
                    <span className="text-[11px] font-mono-tech text-emerald-400 font-bold">● Mobile Dispatch</span>
                  </div>

                  {/* Summary Rows */}
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-400 font-mono-tech">Vehicle Size:</span>
                      <span className="font-bold text-white">{selectedVehicleObj.name}</span>
                    </div>

                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-400 font-mono-tech">Service Package:</span>
                      <span className="font-bold text-amber-400">{selectedPackageObj.name}</span>
                    </div>

                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-400 font-mono-tech">Base Package Rate:</span>
                      <span className="font-mono-tech font-bold text-white">${basePackagePrice.toFixed(2)}</span>
                    </div>

                    {/* Selected Add-ons */}
                    {formData.selectedAddOns.length > 0 && (
                      <div className="pt-2 border-t border-white/5 space-y-1">
                        <span className="text-[10px] font-mono-tech uppercase text-slate-400 block font-semibold">Selected Add-Ons:</span>
                        {formData.selectedAddOns.map(addId => {
                          const addon = ADDONS_DATA.find(a => a.id === addId);
                          if (!addon) return null;
                          return (
                            <div key={addId} className="flex justify-between text-[11px] text-slate-300">
                              <span className="truncate pr-2">• {addon.name}</span>
                              <span className="font-mono-tech text-amber-400">+${addon.price.toFixed(2)}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    <div className="flex justify-between text-slate-300 pt-2 border-t border-white/5">
                      <span className="text-slate-400 font-mono-tech">Service Area:</span>
                      <span className="font-bold text-white">Bronx & NYC Metropolitan Area</span>
                    </div>

                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-400 font-mono-tech">Hours:</span>
                      <span className="text-slate-300 font-mono-tech">Mon–Sat: 9 AM – 8 PM</span>
                    </div>
                  </div>

                  {/* Estimated Total Block */}
                  <div className="bg-[#090b10] p-4 rounded-xl border border-white/10 space-y-1">
                    <div className="text-[11px] text-slate-400 font-mono-tech uppercase">Total Estimated Rate:</div>
                    <div className="text-3xl font-display font-black text-[#25D366] flex items-baseline justify-between">
                      <span>${grandTotal.toFixed(2)}</span>
                      <span className="text-[10px] text-slate-400 font-mono-tech font-normal">No Hidden Surcharges</span>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Links Box */}
                <div className="bg-[#0f131d] border border-white/10 rounded-xl p-4 text-xs space-y-2">
                  <div className="text-slate-400 font-mono-tech text-center">Need instant answers before booking?</div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a 
                      href={getTelLink()} 
                      className="py-2 px-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-center font-bold text-amber-400 text-[11px] flex items-center justify-center space-x-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Hershel</span>
                    </a>
                    <a 
                      href={getSmsLink()} 
                      className="py-2 px-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-center font-bold text-slate-300 hover:text-white text-[11px] flex items-center justify-center space-x-1"
                    >
                      <MessageCircle className="w-3 h-3 text-amber-500" />
                      <span>Send SMS</span>
                    </a>
                  </div>
                  <div className="text-center pt-1">
                    <a 
                      href={getEmailLink()} 
                      className="text-[11px] text-slate-400 hover:text-amber-400 font-mono-tech underline"
                    >
                      Or email: {BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Section: Address, Schedule, Client Info & Description/Notes */}
          <div className="bg-[#0f131d] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* STEP 4: Service Address & Scheduling */}
            <div>
              <label className="text-sm font-display font-bold text-white flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-black text-xs font-black flex items-center justify-center font-mono-tech">4</span>
                Your Location & Preferred Schedule (Mobile - We Come To You)
              </label>

              <div className="space-y-3">
                <div>
                  <label className="text-xs text-slate-300 font-mono-tech block mb-1">
                    Service Address / Driveway Location in Bronx or NYC:
                  </label>
                  <input
                    type="text"
                    id="booking-address-input"
                    placeholder="e.g. 1219 Woodycrest Ave, Bronx, NY 10452 (Driveway, street, or parking lot)"
                    value={formData.mobileAddress}
                    onChange={(e) => setFormData(prev => ({ ...prev, mobileAddress: e.target.value }))}
                    className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-300 font-mono-tech block mb-1">Preferred Date (Mon–Sat):</label>
                    <input
                      type="date"
                      id="booking-date-input"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, preferredDate: e.target.value }))}
                      className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-300 font-mono-tech block mb-1">Preferred Time Window (9 AM – 8 PM):</label>
                    <select
                      id="booking-time-select"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
                      className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="09:00 AM">Morning Slot (09:00 AM)</option>
                      <option value="11:30 AM">Late Morning (11:30 AM)</option>
                      <option value="02:00 PM">Afternoon Slot (02:00 PM)</option>
                      <option value="04:30 PM">Late Afternoon (04:30 PM)</option>
                      <option value="06:00 PM">Evening Slot (06:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 5: Client Contact Details & Notes / Description */}
            <div className="pt-4 border-t border-white/10">
              <label className="text-sm font-display font-bold text-white flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-black text-xs font-black flex items-center justify-center font-mono-tech">5</span>
                Your Contact Information & Notes / Description
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] text-slate-400 font-mono-tech block mb-1">Your Full Name:</label>
                  <input
                    type="text"
                    id="booking-name-input"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 font-mono-tech block mb-1">Phone Number (Required for WhatsApp):</label>
                  <input
                    type="tel"
                    id="booking-phone-input"
                    placeholder="e.g. +1 (347) 593-7649"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 font-mono-tech block mb-1">Email Address:</label>
                  <input
                    type="email"
                    id="booking-email-input"
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Customer Notes / Description Field */}
              <div className="mt-3">
                <label className="text-[11px] text-slate-400 font-mono-tech block mb-1">
                  Customer Notes / Description (Vehicle condition, pet hair, brake details, stereo unit, etc.):
                </label>
                <textarea
                  id="booking-notes-input"
                  name="description"
                  placeholder="Tell Hershel about your vehicle (e.g. heavy pet hair in back seat, coffee stain on passenger seat, front brake pads ready for install, etc.)..."
                  rows={3}
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
                  className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500 resize-none"
                ></textarea>
              </div>
            </div>

            {/* CTA Button: "Book via WhatsApp" */}
            <button
              id="booking-submit-final-btn"
              type="submit"
              disabled={isRedirecting}
              className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] disabled:opacity-80 text-black font-black uppercase tracking-wider text-sm rounded-xl shadow-xl shadow-[#25D366]/25 flex items-center justify-center space-x-2 transition-all duration-300 ease-in-out hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
            >
              {isRedirecting ? (
                <>
                  <Loader2 className="w-4 h-4 text-black animate-spin" />
                  <span>Preparing WhatsApp Message...</span>
                </>
              ) : (
                <>
                  <MessageSquare className="w-4 h-4 fill-black text-black" />
                  <span>Book via WhatsApp (${grandTotal.toFixed(2)})</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* CTA Trust Micro-Disclaimer */}
            <p className="text-xs text-slate-400/80 text-center flex items-center justify-center gap-1.5 pt-1">
              <Shield className="w-3.5 h-3.5 text-amber-500/70 shrink-0" />
              <span>By submitting an inquiry or reaching out, you consent to sending your request details directly to the independent business operator via WhatsApp, SMS, Phone, or Email.</span>
            </p>

            {isRedirecting && (
              <div className="p-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 flex items-center justify-center space-x-2 animate-pulse font-mono-tech">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Redirecting to WhatsApp with your pre-filled booking details...</span>
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Booking Confirmation Dialog */}
      {bookingConfirmed && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121622] border border-[#25D366]/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto border border-[#25D366]/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono-tech uppercase text-[#25D366] font-bold">Booking Request Prepared</span>
              <h3 className="text-2xl font-display font-black text-white">Your Request Is Ready</h3>
              <p className="text-xs text-slate-300">
                Thank you <strong className="text-white">{formData.fullName || 'Valued Client'}</strong>. Your mobile detailing request has been encoded with your selected service, vehicle size, client name, and notes.
              </p>
            </div>

            <div className="bg-[#090b10] border border-white/10 rounded-xl p-4 text-xs text-left space-y-1.5 font-mono-tech">
              <div className="flex justify-between"><span className="text-slate-400">Confirmation Code:</span><span className="text-amber-400 font-bold">{confirmationCode}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Selected Service:</span><span className="text-white">{selectedPackageObj.name}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Vehicle Size:</span><span className="text-white">{formData.vehicleYearMakeModel || selectedVehicleObj.name}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Estimated Total:</span><span className="text-[#25D366] font-bold">${grandTotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Service Area:</span><span className="text-white">Bronx & Greater NYC Area (Mobile)</span></div>
              {formData.specialNotes && (
                <div className="flex justify-between border-t border-white/5 pt-1.5">
                  <span className="text-slate-400">Details / Notes:</span>
                  <span className="text-white max-w-[65%] text-right truncate">{formData.specialNotes}</span>
                </div>
              )}
            </div>

            <p className="text-[11px] text-slate-400">
              If WhatsApp did not automatically open, tap the button below to message Hershel directly:
            </p>

            {whatsAppUrl && (
              <div className="space-y-2">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold uppercase tracking-wider text-xs rounded-xl transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 fill-black text-black" />
                  <span>Open in WhatsApp Now</span>
                </a>
              </div>
            )}

            <button
              onClick={() => setBookingConfirmed(false)}
              className="w-full py-2.5 bg-white/10 text-white font-semibold uppercase tracking-wider text-xs rounded-xl hover:bg-white/20 transition-colors"
            >
              Close & Return to Site
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
