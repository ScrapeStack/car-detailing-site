import React, { useState, useEffect } from 'react';
import { Calculator, Calendar, Clock, MapPin, Shield, Sparkles, CheckCircle2, User, Mail, Phone, Car, AlertCircle, ArrowRight } from 'lucide-react';
import { VEHICLE_OPTIONS, PACKAGES_DATA, SERVICES_DATA, ADDONS_DATA, BUSINESS_INFO } from '../data/businessData';
import { VehicleType, BookingFormData } from '../types';

interface InstantQuoteBookingProps {
  initialServiceId?: string;
  initialPackageId?: string;
  initialVehicleType?: VehicleType;
}

export const InstantQuoteBooking: React.FC<InstantQuoteBookingProps> = ({
  initialServiceId,
  initialPackageId,
  initialVehicleType = 'coupe'
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    vehicleType: initialVehicleType,
    vehicleYearMakeModel: '',
    serviceId: initialServiceId || SERVICES_DATA[0].id,
    packageTierId: initialPackageId || PACKAGES_DATA[1].id,
    selectedAddOns: [],
    serviceMode: 'studio',
    mobileAddress: '',
    preferredDate: '',
    preferredTime: '09:00 AM',
    fullName: '',
    email: '',
    phone: '',
    specialNotes: ''
  });

  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  useEffect(() => {
    if (initialPackageId) {
      setFormData(prev => ({ ...prev, packageTierId: initialPackageId }));
    }
  }, [initialPackageId]);

  useEffect(() => {
    if (initialVehicleType) {
      setFormData(prev => ({ ...prev, vehicleType: initialVehicleType }));
    }
  }, [initialVehicleType]);

  const selectedVehicleObj = VEHICLE_OPTIONS.find(v => v.id === formData.vehicleType) || VEHICLE_OPTIONS[0];
  const selectedPackageObj = PACKAGES_DATA.find(p => p.id === formData.packageTierId) || PACKAGES_DATA[1];

  // Calculate live price
  const basePackagePrice = Math.round(selectedPackageObj.price * selectedVehicleObj.multiplier);
  const addOnsTotal = formData.selectedAddOns.reduce((acc, addonId) => {
    const item = ADDONS_DATA.find(a => a.id === addonId);
    return acc + (item ? item.price : 0);
  }, 0);
  const mobileConvenienceFee = formData.serviceMode === 'mobile' ? 0 : 0; // complimentary mobile dispatch within Queens/NYC
  const grandTotal = basePackagePrice + addOnsTotal + mobileConvenienceFee;

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please enter your name and phone number to reserve your spot.');
      return;
    }
    const code = `ZAS-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(code);
    setBookingConfirmed(true);
  };

  return (
    <section id="quote-builder" className="py-24 bg-[#090b10] relative carbon-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono-tech text-amber-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Quote Calculator & Online Scheduler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Customize Your Detailing Package
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Get an instant, transparent quote calibrated to your specific vehicle size, desired protection level, and location preference.
          </p>
        </div>

        {/* Quote Builder Grid: Interactive Inputs vs Live Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Multi-Step Customization Form */}
          <div className="lg:col-span-8 bg-[#0f131d] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-8">
            <form onSubmit={handleFormSubmit} className="space-y-8">
              {/* STEP 1: Vehicle Classification */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-display font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-black text-xs font-black flex items-center justify-center font-mono-tech">1</span>
                    Select Vehicle Classification
                  </label>
                  <span className="text-xs text-slate-400 font-mono-tech">Affects clear coat surface area</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {VEHICLE_OPTIONS.map((veh) => {
                    const isSelected = veh.id === formData.vehicleType;
                    return (
                      <button
                        type="button"
                        key={veh.id}
                        onClick={() => setFormData(prev => ({ ...prev, vehicleType: veh.id }))}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-amber-500/15 border-amber-500 text-white shadow-md shadow-amber-500/10'
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
                    placeholder="e.g. 2024 Porsche 911 Carrera S, Jet Black Metallic"
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
                    Select Detailing / Ceramic Package
                  </label>
                  <span className="text-xs text-amber-400 font-mono-tech font-semibold">Includes Studio Curing Bay</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PACKAGES_DATA.map((pkg) => {
                    const isSelected = pkg.id === formData.packageTierId;
                    const tierPrice = Math.round(pkg.price * selectedVehicleObj.multiplier);

                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setFormData(prev => ({ ...prev, packageTierId: pkg.id }))}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-gradient-to-br from-[#182236] to-[#101726] border-amber-500 shadow-lg shadow-amber-500/10'
                            : 'bg-[#090b10] border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[10px] font-mono-tech uppercase text-amber-400 font-bold">{pkg.serviceType}</span>
                            <div className="font-bold text-sm text-white">{pkg.name}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-display font-black text-base text-amber-400">${tierPrice}</div>
                            <div className="text-[10px] text-slate-500 font-mono-tech">{pkg.duration}</div>
                          </div>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-2 line-clamp-2">{pkg.subtitle}</div>
                        <div className="text-[10px] text-emerald-400 font-mono-tech mt-2 flex items-center gap-1 font-semibold">
                          <Shield className="w-3 h-3" />
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
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-black text-xs font-black flex items-center justify-center font-mono-tech">3</span>
                    Add-On Precision Treatments (Optional)
                  </label>
                  <span className="text-xs text-slate-400 font-mono-tech">High-impact protection</span>
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
                          <span className="text-xs font-bold text-amber-400 font-mono-tech">+${addon.price}</span>
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

              {/* STEP 4: Service Location & Schedule */}
              <div className="pt-2 border-t border-white/10">
                <label className="text-sm font-display font-bold text-white flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-black text-xs font-black flex items-center justify-center font-mono-tech">4</span>
                  Location & Appointment Preferences
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, serviceMode: 'studio' }))}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      formData.serviceMode === 'studio'
                        ? 'bg-amber-500/15 border-amber-500 text-white'
                        : 'bg-[#090b10] border-white/10 text-slate-400 hover:bg-[#121620]'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-amber-400" />
                      <span className="font-bold text-xs text-white">Zephyr Auto Spa Detailing Bay</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {BUSINESS_INFO.addressShort} (Bronx facility)
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, serviceMode: 'mobile' }))}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      formData.serviceMode === 'mobile'
                        ? 'bg-amber-500/15 border-amber-500 text-white'
                        : 'bg-[#090b10] border-white/10 text-slate-400 hover:bg-[#121620]'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Car className="w-4 h-4 text-amber-400" />
                      <span className="font-bold text-xs text-white">Mobile Detailing Service</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Equipped with spot-free water & power dispatched across The Bronx & NYC
                    </p>
                  </button>
                </div>

                {formData.serviceMode === 'mobile' && (
                  <div className="mb-4">
                    <label className="text-xs text-slate-300 font-mono-tech block mb-1">Your Mobile Service Address (Bronx / Throggs Neck / NYC):</label>
                    <input
                      type="text"
                      id="booking-address-input"
                      placeholder="e.g. 233 Brinsmade Ave, Bronx, NY or your home/workplace address"
                      value={formData.mobileAddress}
                      onChange={(e) => setFormData(prev => ({ ...prev, mobileAddress: e.target.value }))}
                      className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
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
                      className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-300 font-mono-tech block mb-1">Preferred Time Window:</label>
                    <select
                      id="booking-time-select"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
                      className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
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
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-black text-xs font-black flex items-center justify-center font-mono-tech">5</span>
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
                      className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
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
                      className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="booking-email-input"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <textarea
                    id="booking-notes-input"
                    placeholder="Any special vehicle notes (e.g. PPF film present, heavy swirl areas, matte paint, sensitive leather)..."
                    rows={2}
                    value={formData.specialNotes}
                    onChange={(e) => setFormData(prev => ({ ...prev, specialNotes: e.target.value }))}
                    className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500 resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Trigger */}
              <button
                id="booking-submit-final-btn"
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-black uppercase tracking-wider text-sm rounded-xl shadow-xl shadow-amber-500/25 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <span>Reserve Appointment & Lock In Quote (${grandTotal})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right Column: Dynamic Order Summary Box */}
          <div className="lg:col-span-4 sticky top-24 space-y-4">
            <div className="bg-[#121622] border border-amber-500/30 rounded-2xl p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-display font-bold text-white text-base">Live Quote Summary</span>
                <span className="bg-amber-500/20 text-amber-300 text-[10px] px-2.5 py-1 rounded font-mono-tech font-bold">
                  ZEPHYR AUTO SPA RATES
                </span>
              </div>

              {/* Vehicle & Package Selected */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400 font-mono-tech">Vehicle Class:</span>
                  <span className="font-bold text-white">{selectedVehicleObj.name}</span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400 font-mono-tech">Package:</span>
                  <span className="font-bold text-amber-400">{selectedPackageObj.name}</span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400 font-mono-tech">Base Package:</span>
                  <span className="font-mono-tech font-semibold">${basePackagePrice}</span>
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
                          <span className="font-mono-tech text-amber-400">+${addon.price}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="flex justify-between text-slate-300 pt-2 border-t border-white/5">
                  <span className="text-slate-400 font-mono-tech">Location Mode:</span>
                  <span className="font-bold text-white capitalize">{formData.serviceMode === 'studio' ? 'Zephyr Bay (Bronx)' : 'Mobile Detailing Unit (The Bronx & NYC)'}</span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400 font-mono-tech">Estimated Duration:</span>
                  <span className="font-mono-tech text-sky-400 font-semibold">{selectedPackageObj.duration}</span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400 font-mono-tech">Warranty:</span>
                  <span className="font-mono-tech text-emerald-400 font-semibold">{selectedPackageObj.warranty}</span>
                </div>
              </div>

              {/* Total Price Block */}
              <div className="bg-[#090b10] p-4 rounded-xl border border-white/10 space-y-1">
                <div className="text-[11px] text-slate-400 font-mono-tech uppercase">Estimated Total Cost:</div>
                <div className="text-3xl font-display font-black text-amber-400 flex items-baseline justify-between">
                  <span>${grandTotal}</span>
                  <span className="text-[10px] text-slate-500 font-mono-tech font-normal">All Taxes & Chemicals Included</span>
                </div>
              </div>

              {/* Trust Guarantees */}
              <div className="space-y-2 pt-2 text-[11px] text-slate-400 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>No payment required until handover & inspection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Free cancellation up to 24 hours prior</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Carfax recorded ceramic warranty certificate</span>
                </div>
              </div>
            </div>

            {/* Quick Phone Call Card */}
            <div className="bg-[#0f131d] border border-white/10 rounded-xl p-4 text-xs text-center space-y-1">
              <span className="text-slate-400 font-mono-tech">Prefer to talk with our Master Detailer?</span>
              <div>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-amber-400 font-bold text-sm hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Dialog / Modal */}
      {bookingConfirmed && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121622] border border-amber-500/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono-tech uppercase text-amber-400 font-bold">Booking Request Confirmed</span>
              <h3 className="text-2xl font-display font-black text-white">You're Scheduled for Perfection!</h3>
              <p className="text-xs text-slate-300">
                Thank you <strong className="text-white">{formData.fullName}</strong>. Our Zephyr Auto Spa team has received your appointment request for your <strong className="text-white">{formData.vehicleYearMakeModel || selectedVehicleObj.name}</strong>.
              </p>
            </div>

            <div className="bg-[#090b10] border border-white/10 rounded-xl p-4 text-xs text-left space-y-2 font-mono-tech">
              <div className="flex justify-between"><span className="text-slate-400">Confirmation Code:</span><span className="text-amber-400 font-bold">{confirmationCode}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Package:</span><span className="text-white">{selectedPackageObj.name}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Service Mode:</span><span className="text-white">{formData.serviceMode === 'studio' ? 'Zephyr Bay (233 Brinsmade Ave, Bronx)' : 'Mobile Detailing Unit'}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Estimated Total:</span><span className="text-emerald-400 font-bold">${grandTotal}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Date & Slot:</span><span className="text-white">{formData.preferredDate || 'Earliest Available'} ({formData.preferredTime})</span></div>
            </div>

            <p className="text-[11px] text-slate-400">
              We have dispatched an SMS/Email confirmation to <strong className="text-slate-200">{formData.phone}</strong>. No upfront deposit is required.
            </p>

            <button
              onClick={() => setBookingConfirmed(false)}
              className="w-full py-3 bg-amber-500 text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-amber-400 transition-colors"
            >
              Done & Return to Site
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
