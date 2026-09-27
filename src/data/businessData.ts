import { VehicleOption, ServiceDetail, PackageTier, AddOnOption, ReviewItem, FaqItem } from '../types';
import { BUSINESS_CONFIG } from '../config';
import engineBayCleaningImg from '../assets/images/engine_bay_cleaning_1787210678628.jpg';
import ceramicApplicatorImg from '../assets/images/ceramic_applicator_hood_1787210837591.jpg';
import luxuryInteriorImg from '../assets/images/luxury_interior_clean_1787211008247.jpg';

export const BUSINESS_INFO = {
  name: BUSINESS_CONFIG.businessName,
  tagline: `${BUSINESS_CONFIG.location}'s Top-Rated Hand Car Wash & Vehicle Detail Center`,
  address: `108-14 Northern Blvd, ${BUSINESS_CONFIG.location} 11368`,
  phone: BUSINESS_CONFIG.ownerPhone.startsWith('+') ? BUSINESS_CONFIG.ownerPhone : `+${BUSINESS_CONFIG.ownerPhone}`,
  phoneRaw: BUSINESS_CONFIG.ownerPhone.replace(/\D/g, ''),
  email: BUSINESS_CONFIG.email,
  rating: 4.9,
  reviewCount: 148,
  hours: {
    weekdays: "Monday – Friday: 7:30 AM – 6:30 PM",
    saturday: "Saturday: 8:00 AM – 6:00 PM",
    sunday: "Sunday: 8:30 AM – 4:30 PM"
  },
  serviceAreas: [
    "Astoria",
    "Long Island City",
    "Flushing",
    "Forest Hills",
    "Bayside",
    "Sunnyside",
    "Jackson Heights",
    "Howard Beach"
  ]
};

export const VEHICLE_OPTIONS: VehicleOption[] = [
  {
    id: 'coupe',
    name: 'Coupe / Sedan',
    category: 'Standard Size',
    multiplier: 1.0,
    iconName: 'Car',
    examples: 'Honda Accord, BMW 3/4 Series, Tesla Model 3, Mercedes C-Class'
  },
  {
    id: 'suv',
    name: 'Mid-Size SUV / Crossover',
    category: 'Medium Size (+15%)',
    multiplier: 1.15,
    iconName: 'Shield',
    examples: 'Toyota RAV4, Tesla Model Y, BMW X5, Audi Q5, Lexus RX'
  },
  {
    id: 'truck',
    name: 'Full-Size SUV / Truck / Van',
    category: 'Large Size (+30%)',
    multiplier: 1.3,
    iconName: 'Truck',
    examples: 'Chevy Tahoe, Cadillac Escalade, Ford F-150, Dodge Ram'
  },
  {
    id: 'exotic',
    name: 'Exotic & Luxury Sports Car',
    category: 'Precision Custom Care (+25%)',
    multiplier: 1.25,
    iconName: 'Sparkles',
    examples: 'Porsche 911, Corvette C8, Mercedes AMG GT, Maserati'
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'hand-wash',
    title: 'Gentle Touch Hand Wash',
    badge: 'Gentle Care',
    shortDesc: 'Scratch-free hand wash using pH-neutral foam baths and plush microfiber mitts for a mirror finish.',
    fullDesc: 'Our signature Gentle Touch Hand Wash safely lifts road grime, salt, and urban fallout without swirl marks. Includes complete hand drying with ultra-soft plush microfiber, wheel face cleaning, and crystal-clear glass polish.',
    startingPrice: 49.99,
    duration: '45 – 60 Mins',
    popular: true,
    features: [
      '100% Scratch-free hand wash with two-bucket grit guard method',
      'pH-balanced snow foam bath to encapsulate dirt particles',
      'Hand dried with ultra-soft plush microfiber drying towels',
      'Wheel faces, rims, and tire walls cleaned & conditioned',
      'Exterior streak-free glass & mirror finish'
    ],
    specs: [
      { label: 'Wash Method', value: '100% Gentle Hand Wash' },
      { label: 'Towels', value: 'Ultra-Soft Plush Microfiber' },
      { label: 'Finish', value: 'Spot-Free Gloss' }
    ],
    idealFor: 'Weekly maintenance, daily commuters, and vehicle owners who demand swirl-free exterior care.',
    imageUrl: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'interior-steam',
    title: 'Interior Deep Steam Cleaning',
    badge: 'Sanitized Luxury',
    shortDesc: 'Hospital-grade pressurized 220°F dry steam cleaning, carpet extraction, and allergen elimination.',
    fullDesc: 'We deep clean every nook and cranny with pressurized steam, hot-water extract stains from carpets and fabric seats, and condition fine leathers leaving an OEM matte factory-clean feel and fresh scent.',
    startingPrice: 179.99,
    duration: '2.5 – 3.5 Hours',
    popular: true,
    features: [
      'Dry-vapor pressurized steam cleaning (220°F kills 99.9% bacteria & allergens)',
      'Deep hot-water carpet & fabric upholstery shampoo extraction',
      'Leather cleaning & conditioning treatment with non-greasy matte finish',
      'HVAC air vent sterilization & cabin odor neutralization',
      'All consoles, cupholders, door panels, and crevices sanitized'
    ],
    specs: [
      { label: 'Steam Temp', value: '220°F Dry Vapor' },
      { label: 'Sanitization', value: '99.9% Bacteria Free' },
      { label: 'Leather Finish', value: 'OEM Factory Matte' }
    ],
    idealFor: 'Vehicles needing interior rejuvenation, stain and pet hair removal, odor elimination, or leather spa care.',
    imageUrl: luxuryInteriorImg
  },
  {
    id: 'wax-polish',
    title: 'Express Wax & Machine Polish',
    badge: 'High-Gloss Armor',
    shortDesc: 'Single-stage machine polish and premium hydrophobic polymer wax protection.',
    fullDesc: 'Revitalize your paint with gentle machine jeweling polish to enhance depth and reflectivity, sealed with a durable carnauba-polymer blend that shields against UV rays, acid rain, and Queens road grime.',
    startingPrice: 129.99,
    duration: '1.5 – 2 Hours',
    features: [
      'Gentle Touch Hand Wash & clay surface decontamination',
      'Single-stage machine polish to boost gloss and clarity',
      'High-grade hydrophobic polymer sealant & wax application',
      'Exterior plastics and black trim conditioning with UV inhibitors',
      'Brake dust wheel shield application'
    ],
    specs: [
      { label: 'Gloss Enhancement', value: 'Deep Wet Reflections' },
      { label: 'Protection', value: 'Hydrophobic Shield' },
      { label: 'Durability', value: 'Up to 3 Months' }
    ],
    idealFor: 'Cars needing gloss restoration, hydrophobic water beading, and weather defense.',
    imageUrl: ceramicApplicatorImg
  },
  {
    id: 'showroom-detail',
    title: 'Showroom Detail (Full Inside & Out)',
    badge: 'Complete Rejuvenation',
    shortDesc: 'Comprehensive inside-and-out vehicle rejuvenation returning your car to showroom presentation.',
    fullDesc: 'The complete vehicle treatment combining our full Gentle Touch Hand Wash, Interior Deep Steam extraction, single-stage gloss polish, protective paint sealant, and engine bay top-surface dressing.',
    startingPrice: 289.99,
    duration: '4 – 5 Hours',
    popular: true,
    features: [
      'Complete Gentle Touch Hand Wash & clay bar paint decontamination',
      'Full Interior Deep Steam sanitization & hot-water extraction',
      'Machine gloss polish & ceramic-infused polymer paint sealant',
      'Leather conditioning and fabric stain-guard shield',
      'Wheels, tires, wheel wells, and engine bay top dressed'
    ],
    specs: [
      { label: 'Coverage', value: 'Complete 360° Interior & Exterior' },
      { label: 'Protection', value: 'Multi-Month Sealant' },
      { label: 'Inspection', value: 'Full Walk-Around Assurance' }
    ],
    idealFor: 'Total vehicle revitalization, seasonal detailing, lease return preparation, or resale boost.',
    imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'engine-bay',
    title: 'Engine Bay & Specialty Detailing',
    badge: 'Mechanical Precision',
    shortDesc: 'Electronic-safe degreasing, dry steam cleaning, and satin thermal dressing under the hood.',
    fullDesc: 'Sensitive components (ECU, alternator) are protected before high-pressure dry steam dissolves built-up grime, finished with heat-resistant satin polymer dressing.',
    startingPrice: 99.99,
    duration: '1 – 1.5 Hours',
    features: [
      'Water-sensitive wiring harness & sensor masking',
      'Gentle bio-degradable degreaser agitated with specialized brushes',
      'Controlled dry-vapor steam rinse with minimal moisture',
      'Heat-resistant, non-sticky satin plastic & rubber conditioner'
    ],
    specs: [
      { label: 'Safety Protocol', value: 'Protected Sensitive Electronics' },
      { label: 'Dressing Finish', value: 'Non-Greasy Satin Finish' },
      { label: 'Service Time', value: '60 Minutes' }
    ],
    idealFor: 'Performance sports cars, car show prep, resale appraisal boost, and routine mechanical care.',
    imageUrl: engineBayCleaningImg
  }
];

export const PACKAGES_DATA: PackageTier[] = [
  {
    id: 'gentle-touch-hand-wash',
    name: 'Gentle Touch Hand Wash',
    subtitle: 'Scratch-Free Hand Wash & Wheel Treatment',
    price: 49.99,
    originalPrice: 65.00,
    duration: '45 – 60 Mins',
    warranty: 'Spot-Free Shine Guarantee',
    serviceType: 'Hand Wash Bay',
    includes: [
      '100% Gentle microfiber hand wash & pH-neutral foam soak',
      'Hand dried with ultra-soft plush microfiber towels',
      'Wheel faces, rims, and tire walls deep degreased',
      'Tire dressing with non-sling satin finish',
      'Crystal-clear exterior glass & mirror polish',
      'Door jambs wiped down and wiped clean'
    ],
    perfectFor: 'Routine maintenance wash and safe swirl-free clean for daily drivers.'
  },
  {
    id: 'interior-deep-steam',
    name: 'Interior Deep Steam',
    subtitle: 'Pressurized 220°F Dry Steam & Hot-Water Carpet Extraction',
    price: 179.99,
    originalPrice: 219.99,
    duration: '2.5 – 3.5 Hours',
    warranty: '99.9% Bacteria & Odor Sanitization',
    popular: true,
    serviceType: 'Interior Deep Clean',
    includes: [
      'Pressurized 220°F chemical-free dry steam sanitization',
      'Deep hot-water carpet & fabric seat shampoo extraction',
      'Leather seats cleaned & conditioned with OEM matte finish',
      'HVAC dashboard air vent steam sterilization',
      'Cup holders, center console, and crevices deep detailed',
      'Cabin air freshening & pet dander/stain elimination'
    ],
    perfectFor: 'Spills, pet hair, allergen removal, and restoring like-new interior freshness.'
  },
  {
    id: 'express-wax-polish',
    name: 'Express Wax & Polish',
    subtitle: 'Deep Gloss Enhancement & Hydrophobic Carnauba Shield',
    price: 129.99,
    originalPrice: 159.99,
    duration: '1.5 – 2 Hours',
    warranty: '3-Month Paint Protection',
    serviceType: 'Exterior Polish & Wax',
    includes: [
      'Full Gentle Touch Hand Wash & clay decontamination',
      'High-grade carnauba & synthetic polymer sealant wax',
      'Machine single-stage gloss polish & paint brighten',
      'Brake dust removal & alloy wheel protective seal',
      'Exterior trim rejuvenation & UV defense dressing',
      'Streak-free window cleaning inside & out'
    ],
    perfectFor: 'Cars needing gloss boost, hydrophobic water beading, and weather protection.'
  },
  {
    id: 'showroom-detail',
    name: 'Showroom Detail',
    subtitle: 'Complete Inside & Out Concourse Rejuvenation',
    price: 289.99,
    originalPrice: 349.99,
    duration: '4 – 5 Hours',
    warranty: 'Full Showroom Walk-Around Assurance',
    bestValue: true,
    serviceType: 'Full Vehicle Detail',
    includes: [
      'Complete Gentle Touch Hand Wash & clay bar paint decontam',
      'Full Interior Deep Steam sanitization & shampoo extraction',
      'Machine jewel polish & ceramic-infused polymer paint sealant',
      'Engine bay top surface wipe-down and satin dressing',
      'Full leather conditioning & fabric hydrophobic stain barrier',
      'Tires, wheels, wheel wells, and exterior trim treated'
    ],
    perfectFor: 'Total vehicle revitalization, seasonal prep, lease return, or resale readiness.'
  }
];

export const ADDONS_DATA: AddOnOption[] = [
  {
    id: 'engine-steam',
    name: 'Engine Bay Steam Clean & Satin Dressing',
    price: 60,
    description: 'Electronic-safe degreasing and dry-vapor detailing under the hood.'
  },
  {
    id: 'pet-hair',
    name: 'Heavy Pet Hair Extraction & Sanitizer',
    price: 45,
    description: 'Micro-hair needle extraction tool and specialized sanitizing treatment.'
  },
  {
    id: 'headlight-resto',
    name: 'Headlight Oxidation Removal & UV Seal',
    price: 55,
    description: 'Restores yellowed, hazy polycarbonate headlights back to optical clarity.'
  },
  {
    id: 'leather-conditioner',
    name: 'Premium Leather Deep Nourish & Shield',
    price: 40,
    description: 'Prevents dye transfer, UV drying, and cracking on delicate leather seats.'
  },
  {
    id: 'rain-repellent',
    name: 'Hydrophobic Glass Rain Repellent',
    price: 35,
    description: 'Extreme windshield water repellency for safer driving in heavy Queens rain.'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Anthony R.',
    location: 'Astoria, Queens, NY',
    vehicle: 'BMW M3 (Isle of Man Green)',
    service: 'Showroom Detail ($289.99)',
    rating: 5,
    date: '1 week ago',
    comment: 'Gentle Touch is the absolute real deal in Queens. My M3 had stubborn swirl marks from automatic car washes and dirty city street grime. After their Showroom Detail, the paint looks like glass. Completely swirl-free and the interior smells incredible.',
    verified: true,
    highlight: 'Paint looks like glass'
  },
  {
    id: 'rev-2',
    author: 'Jessica Chen',
    location: 'Long Island City, Queens, NY',
    vehicle: 'Tesla Model Y',
    service: 'Interior Deep Steam ($179.99)',
    rating: 5,
    date: '2 weeks ago',
    comment: 'With two toddlers and a golden retriever, our white Tesla interior was a disaster. The Interior Deep Steam worked absolute miracles on the seats and carpets. Every stain disappeared and zero harsh chemical smell. Will be coming back every season!',
    verified: true,
    highlight: 'Worked absolute miracles on the interior'
  },
  {
    id: 'rev-3',
    author: 'Michael Morales',
    location: 'Flushing, Queens, NY',
    vehicle: 'Mercedes-Benz E350',
    service: 'Express Wax & Polish ($129.99)',
    rating: 5,
    date: '3 weeks ago',
    comment: 'The Express Wax & Polish brought back the deep black shine I haven’t seen in years. Rain beads right off the hood now. The staff was polite, fast, and took genuine pride in their work. Best detail center in Queens hands down.',
    verified: true,
    highlight: 'Brought back deep black shine'
  },
  {
    id: 'rev-4',
    author: 'Dmitri V.',
    location: 'Bayside, Queens, NY',
    vehicle: 'Audi Q7',
    service: 'Gentle Touch Hand Wash ($49.99)',
    rating: 5,
    date: '1 month ago',
    comment: 'Finding a real hand car wash that actually uses clean microfiber mitts and gentle foam in Queens is rare. Gentle Touch never scratches the clear coat and the wheels come out spotless every single time.',
    verified: true,
    highlight: 'Clean microfiber mitts and zero scratches'
  },
  {
    id: 'rev-5',
    author: 'Sal G.',
    location: 'Forest Hills, Queens, NY',
    vehicle: 'Porsche Macan GTS',
    service: 'Showroom Detail ($289.99)',
    rating: 5,
    date: '1 month ago',
    comment: 'Brought my Macan in before putting it up for sale. The Showroom Detail made it look brand new. The buyer commented on how immaculate the engine bay and leather were. Got top dollar thanks to Gentle Touch.',
    verified: true,
    highlight: 'Made it look brand new'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'Why choose a 100% hand car wash over an automated machine wash?',
    answer: 'Automated drive-thru car washes use abrasive spinning plastic brushes that slap road grime into your clear coat, causing spiderweb scratches and swirl marks. Our Gentle Touch Hand Wash uses pH-balanced snow foam baths, clean wash mitts with grit guards, and ultra-plush drying towels for a completely scratch-free clean.'
  },
  {
    id: 'faq-2',
    category: 'correction',
    question: 'What is included in the Interior Deep Steam service ($179.99)?',
    answer: 'Our Interior Deep Steam utilizes medical-grade 220°F pressurized dry steam to kill 99.9% of bacteria, allergens, and odors without saturating your cabin. It includes deep hot-water extraction of carpets and cloth seats, gentle conditioning of leather surfaces, AC vent sterilization, and detailed cleaning of every console and crevice.'
  },
  {
    id: 'faq-3',
    category: 'mobile',
    question: 'Where is Gentle Touch Hand Car Wash located in Queens, NY?',
    answer: `We are conveniently located at 108-14 Northern Blvd, ${BUSINESS_CONFIG.location} 11368, easily accessible from Astoria, Flushing, Long Island City, Forest Hills, and Bayside. We also offer mobile detailing dispatch for customers preferring service at their home or office.`
  },
  {
    id: 'faq-4',
    category: 'ceramic',
    question: 'How long does the Express Wax & Polish ($129.99) last?',
    answer: 'Our Express Wax & Polish includes single-stage machine polishing and a high-grade hydrophobic polymer sealant wax that typically provides 2 to 3 months of durable water beading and UV defense against harsh Queens road salt and sun.'
  },
  {
    id: 'faq-5',
    category: 'general',
    question: 'Do I need an appointment for the Gentle Touch Hand Wash or detailing?',
    answer: `Walk-ins are welcomed for our Gentle Touch Hand Wash ($49.99) based on bay availability, but we strongly recommend booking an appointment online or calling us at ${BUSINESS_CONFIG.primaryPhone} to secure dedicated time, especially for Interior Deep Steam and Showroom Detail packages.`
  }
];

export const STYLE_GUIDE_DATA = {
  themeName: "Deep Blue & Electric Cyan Luxury Detailing",
  conceptOverview: "High-contrast dark mode UI featuring deep royal blue (#0066FF) brand pillars and electric cyan (#00E5FF) precision accents for Gentle Touch Hand Car Wash and Vehicle Detail Center in Queens, NY.",
  colors: [
    { name: "Deep Blue (Primary Brand)", hex: "#0066FF", role: "Primary conversion trigger, brand badges, and dominant buttons" },
    { name: "Electric Cyan (Accent)", hex: "#00E5FF", role: "Feature accents, technical metrics, hover glows, and active highlights" },
    { name: "Obsidian Canvas (Background)", hex: "#090B10", role: "Dark mode background providing contrast and luxury depth" },
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
    headline: "Queens' Premier Hand Car Wash & Detail Center",
    subheadline: `Gentle Touch Hand Wash ($49.99), Interior Deep Steam ($179.99), Express Wax & Polish ($129.99), and Showroom Detail ($289.99) in Queens, NY.`,
    primaryCta: "Book Your Detailing Bay",
    secondaryCta: "View Services & Packages",
    visualStyle: "Pristine dark automotive studio lighting with Deep Blue and Electric Cyan ambient glow."
  },
  wireframeSections: [
    { number: "01", name: "Global Header & Trust Bar", purpose: "Persistent trust signals (4.9★, Queens studio address, instant phone dial)" },
    { number: "02", name: "Hero Showcase & Service Pillars", purpose: "Immediate visual impact, value proposition, and instant quote CTA" },
    { number: "03", name: "Core Services Breakdown", purpose: "Gentle Touch Hand Wash, Interior Deep Steam, Express Wax & Polish, Showroom Detail" },
    { number: "04", name: "Transparent Package Pricing Matrix", purpose: "Clear transparent pricing tiers with vehicle size adjustments ($49.99 to $289.99)" },
    { number: "05", name: "Live Quote & Appointment Scheduler", purpose: "High-conversion lead capture and instant estimated quote calculator" },
    { number: "06", name: "Verified Customer Reviews (Queens, NY)", purpose: "Social proof with real car models and Queens neighborhoods" },
    { number: "07", name: "Interactive FAQ Accordion", purpose: "Overcoming objections around hand wash benefits, steam safety, and location" },
    { number: "08", name: "Studio Map & Direct Contact", purpose: "Physical address in Queens, NY, business hours, and phone/WhatsApp booking" }
  ]
};
