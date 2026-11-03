export interface TestimonialConfig {
  quote: string;
  clientName: string;
  vehicleModel: string;
  rating: number;
}

export interface DetailingBusinessConfig {
  // Brand
  businessName: string;
  slogan: string;
  logoPlaceholder: string;
  city: string;
  state: string;
  foundedYear: string;

  // Contact & Location
  phoneNumber: string;
  emailAddress: string;
  streetAddress: string;
  cityState: string;
  businessHours: string;

  // Social & Messaging
  facebookMessengerLink: string;
  facebookPageLink: string;
  instagramLink: string;

  // Reviews
  googleRating: number;
  googleReviewCount: number;
  testimonials: [TestimonialConfig, TestimonialConfig, TestimonialConfig];

  // Pricing
  expressPrice: number;
  fullDetailPrice: number;
  ceramicPrice: number;

  // Visual Styling Theme
  accentColor: string; // '#007AFF' | '#FF3B30' | '#10B981'
  baseTheme: 'charcoal' | 'dark-slate' | 'obsidian';
}

export const DEFAULT_CONFIG: DetailingBusinessConfig = {
  businessName: "Apex Precision Detailing",
  slogan: "Precision Detailing & Ceramic Coating in Los Angeles",
  logoPlaceholder: "APEX // PRECISION",
  city: "Los Angeles",
  state: "CA",
  foundedYear: "2026",

  phoneNumber: "+1 (555) 789-2040",
  emailAddress: "service@apexdetailing.com",
  streetAddress: "1420 E Walnut St, Suite 104",
  cityState: "Pasadena, CA 91106",
  businessHours: "Mon – Sat: 8:00 AM – 6:30 PM | Sun: By Appointment",

  facebookMessengerLink: "https://m.me/apexdetailworks",
  facebookPageLink: "https://facebook.com/apexdetailworks",
  instagramLink: "https://instagram.com/apexdetailworks",

  googleRating: 5.0,
  googleReviewCount: 184,

  testimonials: [
    {
      quote: "Took my 911 GT3 to Apex after getting swirls from a previous dealership wash. The paint looks deeper than when it rolled off the showroom floor. Flawless ceramic coating and obsessive attention to detail.",
      clientName: "Marcus Vance",
      vehicleModel: "Porsche 911 GT3 (992)",
      rating: 5
    },
    {
      quote: "Outstanding service from start to finish. They arrived on time with a fully equipped mobile rig, extracted years of dirt from my seats, and left my Plaid with a mirror reflection.",
      clientName: "Elena Rostova",
      vehicleModel: "Tesla Model S Plaid",
      rating: 5
    },
    {
      quote: "Under LED inspection lights, 95% of the hairline scratches and swirl marks were gone. Water literally falls off the hood now. Super transparent pricing and master-grade care.",
      clientName: "David Chen",
      vehicleModel: "BMW M3 Competition",
      rating: 5
    }
  ],

  expressPrice: 149,
  fullDetailPrice: 349,
  ceramicPrice: 899,

  accentColor: "#007AFF", // Electric blue default
  baseTheme: "obsidian"
};

export const ACCENT_PALETTES = [
  { name: "Electric Blue", hex: "#007AFF", glow: "rgba(0, 122, 255, 0.35)" },
  { name: "Fiery Orange/Red", hex: "#FF3B30", glow: "rgba(255, 59, 48, 0.35)" },
  { name: "Hyper Lime", hex: "#10B981", glow: "rgba(16, 185, 129, 0.35)" },
  { name: "Molten Gold", hex: "#F59E0B", glow: "rgba(245, 158, 11, 0.35)" }
];

export const BASE_THEMES = [
  { id: "charcoal", name: "Deep Charcoal", hex: "#121212", surfaceHex: "#1C1C1C", borderHex: "rgba(255,255,255,0.08)" },
  { id: "dark-slate", name: "Dark Slate", hex: "#0F172A", surfaceHex: "#1E293B", borderHex: "rgba(255,255,255,0.08)" },
  { id: "obsidian", name: "Obsidian Concourse", hex: "#090B10", surfaceHex: "#111622", borderHex: "rgba(255,255,255,0.08)" }
];
