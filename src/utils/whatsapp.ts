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
  description?: string;
  details?: string;
  comments?: string;
  specialRequests?: string;
  specialNotes?: string;
}

export const WHATSAPP_LINK = 'https://wa.me/13475937649';
export const TEL_LINK = 'tel:+13475937649';
export const SMS_LINK = 'sms:+13475937649';
export const EMAIL_LINK = 'mailto:guyonthego21@gmail.com';

/**
 * Strips all non-numeric characters from ownerPhone
 */
export function getCleanOwnerPhone(): string {
  return (BUSINESS_CONFIG.ownerPhone || '+13475937649').replace(/\D/g, '');
}

/**
 * Formats ownerPhone for user-facing display
 */
export function getDisplayOwnerPhone(): string {
  return '+1 (347) 593-7649';
}

/**
 * Returns a tel: RFC 3966 URI for phone calls
 */
export function getTelLink(): string {
  return TEL_LINK;
}

/**
 * Returns an sms: URI for SMS text messaging
 */
export function getSmsLink(): string {
  return SMS_LINK;
}

/**
 * Returns a mailto: URI for email inquiries
 */
export function getEmailLink(): string {
  return EMAIL_LINK;
}

/**
 * Returns direct WhatsApp link
 */
export function getWhatsAppLink(): string {
  return WHATSAPP_LINK;
}

/**
 * Generates a pre-filled WhatsApp booking URL with clean line-by-line encoding
 * Triggers pre-filled message with selected service, vehicle size, client name, and customer notes/description field under "*Details / Notes:*".
 */
export function generateWhatsAppUrl(bookingData: WhatsAppBookingData | any): string {
  const cleanPhone = getCleanOwnerPhone();
  const addOnsRaw = bookingData?.selectedAddons ?? bookingData?.addOns ?? [];
  const addOnsText = Array.isArray(addOnsRaw)
    ? (addOnsRaw.join(', ') || 'None')
    : (addOnsRaw || 'None');

  const clientName = (
    bookingData?.name || 
    bookingData?.fullName || 
    bookingData?.clientName || 
    bookingData?.customerName || 
    'Prospective Client'
  ).toString().trim();

  const clientPhone = (
    bookingData?.phone || 
    bookingData?.clientPhone || 
    bookingData?.customerPhone || 
    'Not provided'
  ).toString().trim();

  const clientEmail = (
    bookingData?.email || 
    bookingData?.clientEmail || 
    bookingData?.customerEmail || 
    'Not provided'
  ).toString().trim();

  const serviceAddress = (
    bookingData?.address || 
    bookingData?.serviceAddress || 
    bookingData?.mobileAddress || 
    bookingData?.location || 
    'Bronx / NYC Area (To be confirmed)'
  ).toString().trim();

  const selectedVehicle = (
    bookingData?.selectedVehicle || 
    bookingData?.vehicleType || 
    bookingData?.vehicle || 
    'Sedan'
  ).toString().trim();

  const selectedService = (
    bookingData?.selectedPackage || 
    bookingData?.serviceName || 
    bookingData?.package || 
    'Full Interior Steam & Shampoo'
  ).toString().trim();

  const totalPrice = bookingData?.totalPrice ?? bookingData?.grandTotal ?? bookingData?.price ?? '';

  // Capture, trim, and prepare notes / description
  const rawNotes = (
    bookingData?.details ??
    bookingData?.notes ?? 
    bookingData?.description ?? 
    bookingData?.specialNotes ?? 
    bookingData?.comments ?? 
    bookingData?.specialRequests ?? 
    ''
  ).toString().trim();

  const lines: string[] = [
    `*New Booking Request - ${BUSINESS_CONFIG.businessName}*`,
    ``,
    `*Selected Service:* ${selectedService}`,
    `*Vehicle Size / Model:* ${selectedVehicle}`,
    `*Client Name:* ${clientName}`,
    `*Phone Number:* ${clientPhone}`,
    `*Email:* ${clientEmail}`,
    `*Service Address:* ${serviceAddress}`
  ];

  if (addOnsText && addOnsText !== 'None') {
    lines.push(`*Add-on Services:* ${addOnsText}`);
  }

  if (totalPrice) {
    lines.push(`*Estimated Total:* ${BUSINESS_CONFIG.currency}${totalPrice}`);
  }

  if (bookingData?.preferredTime || bookingData?.preferredDate) {
    const timeStr = bookingData.preferredDate && bookingData.preferredTime 
      ? `${bookingData.preferredDate} (${bookingData.preferredTime})`
      : (bookingData.preferredTime || bookingData.preferredDate);
    lines.push(`*Preferred Date/Time:* ${timeStr}`);
  }

  // Exact requirement: Custom notes/description captured, trimmed, and encoded under "*Details / Notes:*"
  lines.push(`*Details / Notes:* ${rawNotes && rawNotes !== 'None provided' ? rawNotes : 'None'}`);

  const fullMessage = lines.join('\n');
  const encodedMessage = encodeURIComponent(fullMessage);
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
