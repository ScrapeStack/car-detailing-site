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
 * Strips all non-numeric characters from ownerPhone
 */
export function getCleanOwnerPhone(): string {
  return BUSINESS_CONFIG.ownerPhone.replace(/\D/g, '');
}

/**
 * Formats ownerPhone for user-facing display with a leading +
 */
export function getDisplayOwnerPhone(): string {
  const p = BUSINESS_CONFIG.ownerPhone.trim();
  return p.startsWith('+') ? p : `+${p}`;
}

/**
 * Returns a tel: RFC 3966 URI for phone links
 */
export function getTelLink(): string {
  const clean = BUSINESS_CONFIG.ownerPhone.replace(/[^\d+]/g, '');
  return clean.startsWith('+') ? `tel:${clean}` : `tel:+${clean}`;
}

/**
 * Generates a pre-filled WhatsApp booking URL with clean line-by-line encoding
 */
export function generateWhatsAppUrl(bookingData: WhatsAppBookingData | any): string {
  const cleanPhone = BUSINESS_CONFIG.ownerPhone.replace(/\D/g, '');
  const addOnsRaw = bookingData.selectedAddons ?? bookingData.addOns ?? [];
  const addOnsText = Array.isArray(addOnsRaw)
    ? (addOnsRaw.join(', ') || 'None')
    : (addOnsRaw || 'None');

  const clientName = bookingData.name || bookingData.fullName || bookingData.clientName || bookingData.customerName || '';
  const clientPhone = bookingData.phone || bookingData.clientPhone || bookingData.customerPhone || '';
  const clientEmail = bookingData.email || bookingData.clientEmail || bookingData.customerEmail || 'Not provided';
  const serviceAddress = bookingData.address || bookingData.serviceAddress || bookingData.mobileAddress || bookingData.location || 'To be coordinated';
  const selectedVehicle = bookingData.selectedVehicle || bookingData.vehicleType || bookingData.vehicle || 'Standard';
  const selectedPackage = bookingData.selectedPackage || bookingData.serviceName || bookingData.package || 'Custom Detail';
  const totalPrice = bookingData.totalPrice ?? bookingData.grandTotal ?? bookingData.price ?? '0';

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
    `*Add-ons:* ${addOnsText}`,
    `*Estimated Total:* ${BUSINESS_CONFIG.currency}${totalPrice}`
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
 * Constructs a structured WhatsApp reservation message and triggers redirect
 */
export function sendWhatsAppBooking(bookingData: any) {
  const url = generateWhatsAppUrl(bookingData);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank');
  }
  return url;
}
