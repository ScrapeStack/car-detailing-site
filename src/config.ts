export const BUSINESS_CONFIG = {
  businessName: "Gentle Touch Hand Car Wash and Vehicle Detail Center",
  ownerPhone: "+17185550199", // (718) 555-0199
  primaryPhone: "(718) 555-0199",
  email: "info@gentletouchcarwash.com",
  primaryEmail: "info@gentletouchcarwash.com",
  location: "Queens, NY",
  serviceArea: "Queens, NY",
  currency: "$",
  packages: [
    {
      id: "gentle-touch-hand-wash",
      name: "Gentle Touch Hand Wash",
      price: 49.99
    },
    {
      id: "interior-deep-steam",
      name: "Interior Deep Steam",
      price: 179.99
    },
    {
      id: "express-wax-polish",
      name: "Express Wax & Polish",
      price: 129.99
    },
    {
      id: "showroom-detail",
      name: "Showroom Detail",
      price: 289.99
    }
  ],
  colors: {
    primary: "#0066FF",
    primaryHover: "#0052CC",
    accent: "#00E5FF",
    accentHover: "#00D0E8",
    background: "#090B10",
    surface: "#0F131D"
  }
};

export const CLIENT_CONFIG = BUSINESS_CONFIG;
