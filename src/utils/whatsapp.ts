import { BUSINESS_CONFIG } from '../config';

export interface WhatsAppBookingData {
  vehicleType?: string;
  vehicle?: string;
  selectedVehicle?: string;
  serviceName?: string;
  package?: string;
  selectedPackage?: string;
  addOns?: string[] | string;
  selectedAddons?: string[] | string;
  totalPrice?: number | string;
  grandTotal?: number | string;
  price?: number | string;
  clientName?: string;
  customerName?: string;
  name?: string;
  fullName?: string;
  clientPhone?: string;
  customerPhone?: string;
  phone?: string;
  clientEmail?: string;
  customerEmail?: string;
  email?: string;
  serviceAddress?: string;
  address?: string;
  mobileAddress?: string;
  location?: string;
  preferredTime?: string;
  preferredDate?: string;
  notes?: string;
  comments?: string;
  specialRequests?: string;
  specialNotes?: string;
  description?: string;
}

/**
 * Strips all non-numeric characters from ownerPhone and ensures US country code (1) prefix for wa.me
 */
export function getCleanOwnerPhone(): string {
  const p = (BUSINESS_CONFIG.ownerPhone || BUSINESS_CONFIG.phone || BUSINESS_CONFIG.phoneNumber || '').replace(/\D/g, '');
  if (p.length === 10) {
    return `1${p}`;
  }
  return p;
}

/**
 * Formats ownerPhone for user-facing display with US format (718) 786-6228
 */
export function getDisplayOwnerPhone(): string {
  const p = (BUSINESS_CONFIG.ownerPhone || BUSINESS_CONFIG.phone || BUSINESS_CONFIG.phoneNumber || '').trim();
  const digits = p.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) {
    return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return p.startsWith('+') ? p : `+${p}`;
}

/**
 * Returns a tel: RFC 3966 URI for phone links
 */
export function getTelLink(): string {
  const digits = (BUSINESS_CONFIG.ownerPhone || BUSINESS_CONFIG.phone || BUSINESS_CONFIG.phoneNumber || '').replace(/\D/g, '');
  return digits.length === 10 ? `tel:+1${digits}` : `tel:+${digits}`;
}

/**
 * Generates a pre-filled WhatsApp booking URL with clean line-by-line encoding
 */
export function generateWhatsAppUrl(bookingData: WhatsAppBookingData | any): string {
  const cleanPhone = getCleanOwnerPhone();
  const addOnsRaw = bookingData.selectedAddons ?? bookingData.addOns ?? [];
  const addOnsText = Array.isArray(addOnsRaw)
    ? (addOnsRaw.join(', ') || 'None')
    : (addOnsRaw || 'None');

  const clientName = bookingData.name || bookingData.fullName || bookingData.clientName || bookingData.customerName || '';
  const clientPhone = bookingData.phone || bookingData.clientPhone || bookingData.customerPhone || '';
  const clientEmail = bookingData.email || bookingData.clientEmail || bookingData.customerEmail || 'Not provided';
  const serviceAddress = bookingData.address || bookingData.serviceAddress || bookingData.mobileAddress || bookingData.location || 'At Brooklyn center';
  const selectedVehicle = bookingData.selectedVehicle || bookingData.vehicleType || bookingData.vehicle || 'Standard';
  const selectedPackage = bookingData.selectedPackage || bookingData.serviceName || bookingData.package || 'Full Service Wash';
  const totalPrice = bookingData.totalPrice ?? bookingData.grandTotal ?? bookingData.price ?? '0';

  const introPrefix = BUSINESS_CONFIG.defaultBookingMessage || "Hi LMC team, I'd like to get a price quote or request an appointment for";

  const lines = [
    `${introPrefix} *${selectedPackage}*:`,
    ``,
    `*Client:* ${clientName}`,
    `*Phone:* ${clientPhone}`,
    `*Email:* ${clientEmail}`,
    `*Location:* ${serviceAddress}`,
    ``,
    `*Vehicle:* ${selectedVehicle}`,
    `*Package:* ${selectedPackage}`,
    `*Add-ons:* ${addOnsText}`,
    `*Estimated Total:* ${BUSINESS_CONFIG.currencySymbol || BUSINESS_CONFIG.currency}${totalPrice}`
  ];

  if (bookingData.preferredTime || bookingData.preferredDate) {
    const timeStr = bookingData.preferredDate && bookingData.preferredTime 
      ? `${bookingData.preferredDate} (${bookingData.preferredTime})`
      : (bookingData.preferredTime || bookingData.preferredDate);
    lines.push(`*Preferred Time:* ${timeStr}`);
  }

  const rawNotes = (
    bookingData.notes ?? 
    bookingData.specialNotes ?? 
    bookingData.comments ?? 
    bookingData.specialRequests ?? 
    bookingData.description ?? 
    ''
  ).trim();

  if (rawNotes.length > 0 && rawNotes !== 'None provided') {
    lines.push(`*Notes:* ${rawNotes}`);
  }

  const encodedMessage = lines.map(line => encodeURIComponent(line)).join('%0A');
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Returns an SMS link to send a direct text message to +17187866228
 */
export function getSmsLink(prefilledText?: string): string {
  const clean = getCleanOwnerPhone();
  const phone = clean.startsWith('1') ? `+${clean}` : `+1${clean}`;
  return prefilledText 
    ? `sms:${phone}?body=${encodeURIComponent(prefilledText)}`
    : `sms:${phone}`;
}

/**
 * Generates an SMS URL for booking or price quotes
 */
export function generateSmsUrl(bookingData: any): string {
  const introPrefix = BUSINESS_CONFIG.defaultBookingMessage || "Hi LMC team, I'd like to get a price quote or request an appointment for";
  const selectedPackage = bookingData.selectedPackage || bookingData.serviceName || bookingData.package || 'Full Service Wash';
  const totalPrice = bookingData.totalPrice ?? bookingData.grandTotal ?? bookingData.price ?? '0';
  const clientName = bookingData.name || bookingData.fullName || bookingData.clientName || 'Customer';
  const selectedVehicle = bookingData.selectedVehicle || bookingData.vehicleType || bookingData.vehicle || 'Standard';
  const msg = `${introPrefix} ${selectedPackage} ($${totalPrice}). Vehicle: ${selectedVehicle}. Name: ${clientName}. Please confirm availability.`;
  return getSmsLink(msg);
}

/**
 * Constructs a structured WhatsApp reservation message and triggers redirect
 */
export function sendWhatsAppBooking(bookingData: any) {
  const url = generateWhatsAppUrl(bookingData);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank');
  }
  return url;
}

