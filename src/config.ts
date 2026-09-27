export const BUSINESS_CONFIG = {
  businessName: "LMC Car Wash & Lube",
  city: "Brooklyn, NY",
  area: "Brooklyn, NY",
  location: "Brooklyn, NY",
  serviceArea: "Brooklyn, NY",
  countryCode: "US",
  phone: "7187866228",
  phoneNumber: "7187866228",
  ownerPhone: "7187866228",
  primaryPhone: "(718) 786-6228",
  currency: "$",
  currencySymbol: "$",
  defaultBookingMessage: "Hi LMC team, I'd like to get a price quote or request an appointment for",
  email: "",
  primaryEmail: "",
  directSmsPhone: "+17187866228",
  directTelPhone: "+17187866228",
  packages: [
    {
      id: "full-service-wash",
      name: "Full Service Wash",
      price: 25,
      description: "Exterior hand/machine wash, vacuum, window wipe down, tire shine"
    },
    {
      id: "deluxe-wash-express-wax",
      name: "Deluxe Wash & Express Wax",
      price: 70,
      description: "Full service wash + hand wax sealant & interior deep vacuum"
    },
    {
      id: "oil-change-quick-lube",
      name: "Oil Change & Quick Lube + Free Wash",
      price: 95,
      description: "Full oil & filter change, liquid top-offs, includes complimentary exterior car wash"
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
