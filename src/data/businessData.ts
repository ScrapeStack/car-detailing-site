import { VehicleOption, ServiceDetail, PackageTier, AddOnOption, ReviewItem, FaqItem } from '../types';
import { BUSINESS_CONFIG } from '../config';
import engineBayCleaningImg from '../assets/images/engine_bay_cleaning_1787210678628.jpg';
import ceramicApplicatorImg from '../assets/images/ceramic_applicator_hood_1787210837591.jpg';
import luxuryInteriorImg from '../assets/images/luxury_interior_clean_1787211008247.jpg';

export const BUSINESS_INFO = {
  name: BUSINESS_CONFIG.businessName,
  tagline: `${BUSINESS_CONFIG.location}'s Trusted Car Wash & Quick Lube Center`,
  address: `550 4th Ave, ${BUSINESS_CONFIG.location} 11215`,
  phone: `+1${BUSINESS_CONFIG.phone}`,
  phoneRaw: BUSINESS_CONFIG.phone,
  email: BUSINESS_CONFIG.email,
  rating: 4.8,
  reviewCount: 260,
  hours: {
    weekdays: "Monday – Friday: 7:30 AM – 6:30 PM",
    saturday: "Saturday: 8:00 AM – 6:00 PM",
    sunday: "Sunday: 8:30 AM – 5:00 PM"
  },
  serviceAreas: [
    "Park Slope",
    "Gowanus",
    "Downtown Brooklyn",
    "Cobble Hill",
    "Sunset Park",
    "Bay Ridge",
    "Crown Heights",
    "Williamsburg"
  ]
};

export const VEHICLE_OPTIONS: VehicleOption[] = [
  {
    id: 'coupe',
    name: 'Coupe / Sedan',
    category: 'Standard Size',
    multiplier: 1.0,
    iconName: 'Car',
    examples: 'Honda Accord, BMW 3 Series, Toyota Camry, Tesla Model 3'
  },
  {
    id: 'suv',
    name: 'Mid-Size SUV / Crossover',
    category: 'Medium Size (+15%)',
    multiplier: 1.15,
    iconName: 'Shield',
    examples: 'Toyota RAV4, Honda CR-V, Subaru Outback, Jeep Grand Cherokee'
  },
  {
    id: 'truck',
    name: 'Full-Size SUV / Truck / Van',
    category: 'Large Size (+30%)',
    multiplier: 1.3,
    iconName: 'Truck',
    examples: 'Ford F-150, Chevy Tahoe, Suburban, Ram 1500'
  },
  {
    id: 'exotic',
    name: 'Luxury / Commercial Fleet',
    category: 'Custom Fleet & Luxury (+20%)',
    multiplier: 1.2,
    iconName: 'Sparkles',
    examples: 'Mercedes S-Class, BMW 7 Series, Sprinter Vans, TNC Fleets'
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'full-service-wash',
    title: 'Full Service Wash',
    badge: 'Daily Favorite',
    shortDesc: 'Exterior hand/machine wash, vacuum, window wipe down, and tire shine for a clean daily drive.',
    fullDesc: 'Our high-volume signature Full Service Wash gives your vehicle a pristine clean inside and out. Includes gentle exterior wash with rich foam lather, complete interior cabin vacuuming, streak-free window cleaning, and long-lasting tire dressing.',
    startingPrice: 25,
    duration: '20 – 30 Mins',
    popular: true,
    features: [
      'Exterior gentle hand/machine wash with active foam bath',
      'Full interior floor mats, carpets & seat vacuuming',
      'Streak-free interior & exterior glass and mirror cleaning',
      'Dashboard & center console dust wipe down',
      'Wheel cleaning & long-lasting deep black tire shine'
    ],
    specs: [
      { label: 'Wash Method', value: 'Gentle Wash & Rinse' },
      { label: 'Vacuum', value: 'Cabin & Mats' },
      { label: 'Turnaround', value: '20–30 Minutes' }
    ],
    idealFor: 'Weekly maintenance wash, ride-share drivers, and busy Brooklyn commuters.',
    imageUrl: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'deluxe-wash-express-wax',
    title: 'Deluxe Wash & Express Wax',
    badge: 'Gloss & Protection',
    shortDesc: 'Full service wash plus hand wax sealant application and interior deep vacuum.',
    fullDesc: 'Take your wash to the next level with our Deluxe treatment. Combines our complete Full Service Wash with a hand-buffed carnauba wax sealant that shields your paint against road grime and UV rays, paired with deep interior vacuuming.',
    startingPrice: 70,
    duration: '45 – 60 Mins',
    popular: true,
    features: [
      'Complete Full Service Wash included (exterior wash + vacuum)',
      'Hand-applied carnauba protective wax sealant & buff',
      'Deep interior vacuuming including trunk and under seats',
      'Air vent dusting & dashboard UV protectant wipe',
      'Brake dust wheel clean & premium tire luster shine'
    ],
    specs: [
      { label: 'Protection', value: 'Carnauba Hand Wax' },
      { label: 'Interior', value: 'Deep Vacuum & Wipe' },
      { label: 'Turnaround', value: '45–60 Minutes' }
    ],
    idealFor: 'Seasonal paint protection, deeper interior clean, and restoring brilliant wet shine.',
    imageUrl: ceramicApplicatorImg
  },
  {
    id: 'oil-change-quick-lube',
    title: 'Oil Change & Quick Lube + Free Wash',
    badge: 'Best Value Shop Combo',
    shortDesc: 'Full oil & filter change, liquid top-offs, plus a complimentary exterior car wash.',
    fullDesc: 'Get your scheduled engine maintenance and a squeaky-clean car in one quick stop! Includes up to 5 quarts of premium motor oil, new OEM filter, fluid top-offs, tire pressure check, plus a free exterior car wash.',
    startingPrice: 95,
    duration: '30 – 45 Mins',
    popular: true,
    features: [
      'Premium motor oil change (up to 5 qts) with new OEM oil filter',
      'Vital fluid level checks & complimentary top-offs (washer fluid, coolant)',
      'Tire pressure check and inflation to factory specification',
      'Battery terminal & engine air filter visual inspection',
      'Complimentary exterior car wash & spot-free dry included'
    ],
    specs: [
      { label: 'Oil Service', value: 'Up to 5 Qts + Filter' },
      { label: 'Fluids', value: 'Inspected & Topped' },
      { label: 'Bonus', value: 'Free Car Wash Included' }
    ],
    idealFor: 'Every 3,000 to 5,000 miles engine routine maintenance with zero hassle.',
    imageUrl: engineBayCleaningImg
  },
  {
    id: 'express-exterior',
    title: 'Express Exterior Tunnel Wash',
    badge: 'Quick In & Out',
    shortDesc: 'Fast 10-minute automated tunnel wash with spot-free rinse and power dry.',
    fullDesc: 'Quick drive-thru wash designed for drivers on the go. High-pressure underbody rinse, active wheel blasters, triple foam polish, and high-velocity touchless dryers.',
    startingPrice: 15,
    duration: '10 – 15 Mins',
    features: [
      'High-pressure undercarriage spray',
      'Triple-foam cleaning cycle',
      'Spot-free deionized rinse',
      'High-velocity air blow dry'
    ],
    specs: [
      { label: 'Speed', value: '10–15 Minutes' },
      { label: 'Process', value: 'Automated Tunnel' },
      { label: 'Dry', value: 'Power Air Dry' }
    ],
    idealFor: 'Quick exterior dust and road salt removal on busy workdays.',
    imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'interior-quick-refresh',
    title: 'Interior Quick Refresh & Sanitize',
    badge: 'Clean Cabin',
    shortDesc: 'Deep vacuuming, rubber mat washing, and interior door panel wipe down.',
    fullDesc: 'Dedicated interior cleaning service focusing on removing crumbs, dirt, and dust from seats, floors, cupholders, and dashboard surfaces with hospital-grade disinfectant wipes.',
    startingPrice: 40,
    duration: '30 – 40 Mins',
    features: [
      'Comprehensive seat and carpet vacuum',
      'Rubber all-weather floor mats pressure washed',
      'All door panels and cupholders sanitized',
      'Inside window glass crystal clear wipe'
    ],
    specs: [
      { label: 'Focus', value: 'Interior Cabin' },
      { label: 'Mats', value: 'Power Washed' },
      { label: 'Time', value: '30 Minutes' }
    ],
    idealFor: 'Family haulers, pet owners, and ride-share vehicles needing cabin sanitization.',
    imageUrl: luxuryInteriorImg
  }
];

export const PACKAGES_DATA: PackageTier[] = [
  {
    id: 'full-service-wash',
    name: 'Full Service Wash',
    subtitle: 'Exterior Hand/Machine Wash, Vacuum, Window Wipe Down, Tire Shine',
    price: 25,
    originalPrice: 32,
    duration: '20 – 30 Mins',
    warranty: 'Spot-Free Clean Guarantee',
    serviceType: 'Car Wash Bay',
    includes: [
      'Exterior hand/machine wash with rich foam bath',
      'Complete interior floor and seat vacuuming',
      'Streak-free interior and exterior window wipe down',
      'Dashboard & center console dust wipe down',
      'Wheel rim cleaning & tire shine dressing',
      'Door jambs wiped down clean'
    ],
    perfectFor: 'Routine weekly maintenance wash and quick clean for daily Brooklyn drivers.'
  },
  {
    id: 'deluxe-wash-express-wax',
    name: 'Deluxe Wash & Express Wax',
    subtitle: 'Full Service Wash + Hand Wax Sealant & Interior Deep Vacuum',
    price: 70,
    originalPrice: 85,
    duration: '45 – 60 Mins',
    warranty: 'Hand Wax High-Gloss Protection',
    popular: true,
    serviceType: 'Wash & Wax Bay',
    includes: [
      'Complete Full Service Wash included (exterior wash + vacuum)',
      'Hand-applied protective carnauba wax sealant',
      'Deep interior carpet & seat vacuuming with trunk cleaning',
      'Air vent dusting & dashboard UV protectant wipe',
      'Brake dust wheel clean & premium tire shine',
      'Exterior rain repellent glass treatment'
    ],
    perfectFor: 'Vehicles needing glossy weather protection, paint shine boost, and deep interior refresh.'
  },
  {
    id: 'oil-change-quick-lube',
    name: 'Oil Change & Quick Lube + Free Wash',
    subtitle: 'Full Oil & Filter Change, Fluid Top-Offs + Complimentary Exterior Wash',
    price: 95,
    originalPrice: 115,
    duration: '30 – 45 Mins',
    warranty: 'Certified Lube & Multi-Point Inspection',
    bestValue: true,
    serviceType: 'Quick Lube & Wash Bay',
    includes: [
      'Full oil & filter change (up to 5 qts premium motor oil)',
      'New OEM engine oil filter installed',
      'Vital fluid level checks & liquid top-offs',
      'Tire pressure check & adjustment to factory spec',
      'Complimentary exterior car wash & hand dry included',
      'Multi-point vehicle safety maintenance check'
    ],
    perfectFor: 'Every 3,000–5,000 miles engine maintenance while getting your car washed at the same stop.'
  }
];

export const ADDONS_DATA: AddOnOption[] = [
  {
    id: 'tire-shine-wheel',
    name: 'Tire Shine & Wheel Bright Cleaner',
    price: 10,
    description: 'Brake dust dissolver and high-gloss long-lasting tire dressing.'
  },
  {
    id: 'rubber-mats',
    name: 'Rubber All-Weather Floor Mat Wash',
    price: 12,
    description: 'High-pressure power washing and drying for all 4 all-weather mats.'
  },
  {
    id: 'engine-cabin-filter',
    name: 'Engine Air or Cabin Air Filter Check & Replacement',
    price: 35,
    description: 'Quick filter swap to maintain clean cabin air and optimal engine airflow.'
  },
  {
    id: 'rainx-treatment',
    name: 'Rain-X Windshield Rain Repellent Treatment',
    price: 15,
    description: 'Hydrophobic windshield coating for enhanced visibility in heavy rain.'
  },
  {
    id: 'underbody-flush',
    name: 'Underbody Salt & Road Grime Flush',
    price: 15,
    description: 'High-pressure undercarriage wash removing winter road salt and debris.'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Marcus K.',
    location: 'Park Slope, Brooklyn, NY',
    vehicle: 'Honda CR-V',
    service: 'Full Service Wash ($25)',
    rating: 5,
    date: '3 days ago',
    comment: 'LMC is my go-to weekly wash in Brooklyn. Fast, efficient, and they actually vacuum thoroughly under the child seats. Wheels and windows came out spotless for just $25. Can’t beat this value in the borough.',
    verified: true,
    highlight: 'Spotless windows and thorough vacuum'
  },
  {
    id: 'rev-2',
    author: 'Elena Rostova',
    location: 'Gowanus, Brooklyn, NY',
    vehicle: 'Toyota RAV4',
    service: 'Oil Change & Quick Lube + Free Wash ($95)',
    rating: 5,
    date: '1 week ago',
    comment: 'Getting an oil change and driving away in a clean washed car in under 40 minutes is unbeatable. The technicians were friendly, checked all my fluids, and the free wash was a great bonus.',
    verified: true,
    highlight: 'Oil change and clean car in 40 minutes'
  },
  {
    id: 'rev-3',
    author: 'David S.',
    location: 'Bay Ridge, Brooklyn, NY',
    vehicle: 'BMW 330i',
    service: 'Deluxe Wash & Express Wax ($70)',
    rating: 5,
    date: '2 weeks ago',
    comment: 'The hand wax on the Deluxe package made my car look brand new. The wax gave a deep gloss that has held up through two rainy weeks. Great Brooklyn local shop with honest pricing.',
    verified: true,
    highlight: 'Hand wax gave a deep gloss'
  },
  {
    id: 'rev-4',
    author: 'Carmine M.',
    location: 'Downtown Brooklyn, NY',
    vehicle: 'Toyota Camry (TNC Driver)',
    service: 'Full Service Wash ($25)',
    rating: 5,
    date: '3 weeks ago',
    comment: 'As a full-time TLC driver in NYC, keeping my car clean is my livelihood. LMC gets me in and out fast with spotless tire shine and fresh vacuuming. Best car wash in Brooklyn.',
    verified: true,
    highlight: 'Fast turnaround and spotless tire shine'
  },
  {
    id: 'rev-5',
    author: 'Sarah Jenkins',
    location: 'Cobble Hill, Brooklyn, NY',
    vehicle: 'Subaru Outback',
    service: 'Oil Change & Quick Lube + Free Wash ($95)',
    rating: 5,
    date: '1 month ago',
    comment: 'Honest mechanics and quick car wash all at once. Checked my tire pressure, topped off my washer fluid, and the exterior wash was sparkling. Highly recommend LMC Car Wash & Lube!',
    verified: true,
    highlight: 'Honest mechanics and sparkling wash'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'Do I need an appointment for a car wash or oil change?',
    answer: 'No appointment is strictly required! We welcome drive-up walk-ins every day for our Full Service Wash ($25), Deluxe Wash & Express Wax ($70), and Oil Change & Quick Lube ($95). You can also reserve or request an appointment online or via WhatsApp to streamline your visit.'
  },
  {
    id: 'faq-2',
    category: 'lube',
    question: 'What is included in the Oil Change & Quick Lube + Free Wash ($95)?',
    answer: 'Our $95 Quick Lube package includes up to 5 quarts of quality motor oil, a brand new OEM oil filter, fluid checks and top-offs (windshield washer, brake fluid, coolant), tire pressure adjustment to factory spec, and a complimentary exterior car wash with spot-free rinse and dry.'
  },
  {
    id: 'faq-3',
    category: 'wash',
    question: 'What is the difference between Full Service Wash ($25) and Deluxe Wash ($70)?',
    answer: 'The Full Service Wash ($25) covers exterior wash, cabin vacuuming, window wipe down, and tire shine. The Deluxe Wash & Express Wax ($70) adds a hand-applied carnauba protective wax sealant for high-gloss UV protection, plus deep vacuuming of the trunk and under-seat areas.'
  },
  {
    id: 'faq-4',
    category: 'location',
    question: 'Where is LMC Car Wash & Lube located in Brooklyn, NY?',
    answer: `We are conveniently located at 550 4th Ave, ${BUSINESS_CONFIG.location} 11215, easily accessible from Park Slope, Gowanus, Bay Ridge, Sunset Park, and Downtown Brooklyn. Call us directly at ${BUSINESS_CONFIG.primaryPhone}.`
  },
  {
    id: 'faq-5',
    category: 'general',
    question: 'How long does a typical service take at LMC?',
    answer: 'A Full Service Wash typically takes 20 to 30 minutes, an Oil Change & Quick Lube combo takes 30 to 45 minutes, and our Deluxe Wash & Express Wax takes approximately 45 to 60 minutes.'
  }
];

export const STYLE_GUIDE_DATA = {
  themeName: "Deep Blue & Electric Cyan Local Car Wash & Lube",
  conceptOverview: `High-contrast dark mode UI featuring deep royal blue (#0066FF) brand pillars and electric cyan (#00E5FF) precision accents for ${BUSINESS_CONFIG.businessName} in ${BUSINESS_CONFIG.location}.`,
  colors: [
    { name: "Deep Blue (Primary Brand)", hex: "#0066FF", role: "Primary conversion trigger, brand badges, and dominant buttons" },
    { name: "Electric Cyan (Accent)", hex: "#00E5FF", role: "Feature accents, technical metrics, hover glows, and active highlights" },
    { name: "Obsidian Canvas (Background)", hex: "#090B10", role: "Dark mode background providing contrast and readability" },
    { name: "Graphite Surface", hex: "#0F131D", role: "Component cards, elevated containers, and structural panels" },
    { name: "Pure Platinum", hex: "#F8FAFC", role: "High-legibility primary display headlines and badges" },
    { name: "Muted Steel", hex: "#94A3B8", role: "Secondary labels, technical specs, and body descriptions" }
  ],
  typography: {
    displayHeading: "Outfit / Space Grotesk (700/800 Bold)",
    technicalMonospace: "Space Grotesk (500 Medium) with tabular figures",
    body: "Plus Jakarta Sans / Outfit for crisp 16px+ baseline readability"
  },
  heroConcept: {
    headline: "Brooklyn's Trusted Local Car Wash & Quick Lube",
    subheadline: `Full Service Wash ($25), Deluxe Wash & Express Wax ($70), and Oil Change & Quick Lube + Free Wash ($95) in Brooklyn, NY.`,
    primaryCta: "Get a Quote & Book",
    secondaryCta: "View Services & Packages",
    visualStyle: "Pristine dark automotive studio lighting with Deep Blue and Electric Cyan ambient glow."
  },
  wireframeSections: [
    { number: "01", name: "Global Header & Trust Bar", purpose: "Persistent trust signals (4.8★, Brooklyn center address, instant phone dial)" },
    { number: "02", name: "Hero Showcase & Service Pillars", purpose: "Immediate visual impact, value proposition, and instant quote CTA" },
    { number: "03", name: "Core Services Breakdown", purpose: "Full Service Wash, Deluxe Wash & Express Wax, Oil Change & Quick Lube" },
    { number: "04", name: "Transparent Package Pricing Matrix", purpose: "Clear transparent pricing tiers with vehicle size adjustments ($25 to $95)" },
    { number: "05", name: "Live Quote & Appointment Scheduler", purpose: "High-conversion lead capture and instant estimated quote calculator" },
    { number: "06", name: "Verified Customer Reviews (Brooklyn, NY)", purpose: "Social proof with real car models and Brooklyn neighborhoods" },
    { number: "07", name: "Interactive FAQ Accordion", purpose: "Overcoming objections around oil change combos, wash speed, and location" },
    { number: "08", name: "Center Map & Direct Contact", purpose: "Physical address in Brooklyn, NY, business hours, and phone/WhatsApp booking" }
  ]
};
