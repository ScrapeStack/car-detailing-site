import { BUSINESS_CONFIG } from '../config';

export interface WhatsAppBookingData {
  vehicleType: string;
  serviceName: string;
  addOns: string[];
  totalPrice: number | string;
  clientName: string;
  clientPhone: string;
  preferredTime?: string;
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
 * Constructs a structured WhatsApp reservation message with clean %0A line break encoding and triggers redirect
 */
export function sendWhatsAppBooking(bookingData: any): string {
  const cleanPhone = BUSINESS_CONFIG.ownerPhone.replace(/\D/g, '');
  
  const lines = [
    `*New Booking Request - ${BUSINESS_CONFIG.businessName}*`,
    '',
    `*Vehicle:* ${bookingData.vehicleType}`,
    `*Service:* ${bookingData.serviceName}`,
    `*Add-ons:* ${bookingData.addOns.join(', ') || 'None'}`,
    `*Estimated Total:* ${BUSINESS_CONFIG.currency}${bookingData.totalPrice}`,
    '',
    `*Client Name:* ${bookingData.clientName}`,
    `*Client Phone:* ${bookingData.clientPhone}`,
    `*Preferred Date/Time:* ${bookingData.preferredTime || 'ASAP'}`
  ];

  const formattedText = lines.map(line => encodeURIComponent(line)).join('%0A');
  const targetUrl = `https://wa.me/${cleanPhone}?text=${formattedText}`;
  
  window.open(targetUrl, '_blank');
  return targetUrl;
}
