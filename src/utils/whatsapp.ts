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
 * Constructs a structured WhatsApp reservation message and triggers redirect
 */
export function sendWhatsAppBooking(bookingData: WhatsAppBookingData): string {
  const cleanPhone = getCleanOwnerPhone();

  const message =
    "👋 *New Booking Request - " + BUSINESS_CONFIG.businessName + "*\n\n" +
    "🚗 *Vehicle:* " + bookingData.vehicleType + "\n" +
    "✨ *Service:* " + bookingData.serviceName + "\n" +
    "🛠️ *Add-ons:* " + (bookingData.addOns.join(", ") || "None") + "\n" +
    "💰 *Estimated Total:* " + BUSINESS_CONFIG.currency + bookingData.totalPrice + "\n\n" +
    "👤 *Client Name:* " + bookingData.clientName + "\n" +
    "📞 *Client Phone:* " + bookingData.clientPhone + "\n" +
    "📅 *Preferred Date/Time:* " + (bookingData.preferredTime || "ASAP");

  const encodedMsg = encodeURIComponent(message);
  const targetUrl = `https://wa.me/${cleanPhone}?text=${encodedMsg}`;

  try {
    const newWindow = window.open(targetUrl, '_blank');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = targetUrl;
    }
  } catch {
    window.location.href = targetUrl;
  }

  return targetUrl;
}
