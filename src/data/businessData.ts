import { VehicleOption, ServiceDetail, PackageTier, AddOnOption, ReviewItem, FaqItem } from '../types';
import engineBayCleaningImg from '../assets/images/engine_bay_cleaning_1787210678628.jpg';
import ceramicApplicatorImg from '../assets/images/ceramic_applicator_hood_1787210837591.jpg';
import luxuryInteriorImg from '../assets/images/luxury_interior_clean_1787211008247.jpg';

export const BUSINESS_INFO = {
  name: "Astoria Detailing",
  fullName: "Astoria Auto Detailing Center",
  tagline: "Astoria's Premier Auto Detailing, Car Wash, Window Tinting & Ceramic Coating Center",
  address: "42-09 31st Ave, Astoria, NY 11103",
  phone: "(917) 774-0051",
  phoneRaw: "9177740051",
  email: "info@astoriadetailing.com",
  rating: 4.2,
  reviewCount: 343,
  hours: {
    weekdays: "Monday – Saturday: 7:00 AM – 9:00 PM",
    saturday: "Saturday: 7:00 AM – 9:00 PM",
    sunday: "Sunday: 7:00 AM – 7:00 PM"
  },
  serviceAreas: [
    "Astoria",
    "Long Island City",
    "Sunnyside",
    "Woodside",
    "Jackson Heights",
    "Ditmars Steinway",
    "Upper East Side",
    "Manhattan & Queens"
  ]
};

export const VEHICLE_OPTIONS: VehicleOption[] = [
  {
    id: 'coupe',
    name: 'Coupe / Sedan',
    category: 'Standard Size',
    multiplier: 1.0,
    iconName: 'Car',
    examples: 'BMW 3/4 Series, Tesla Model 3, Mercedes C/E-Class, Audi A4/A5, Porsche 911'
  },
  {
    id: 'suv',
    name: 'Mid-Size SUV / Crossover',
    category: 'Medium Size (+15%)',
    multiplier: 1.15,
    iconName: 'Shield',
    examples: 'Tesla Model Y, BMW X3/X5, Audi Q5/Q7, Porsche Macan, Range Rover Velar'
  },
  {
    id: 'truck',
    name: 'Full-Size SUV / Truck / Van',
    category: 'Large Size (+30%)',
    multiplier: 1.3,
    iconName: 'Truck',
    examples: 'Cadillac Escalade, Mercedes G-Wagon, Chevy Tahoe, Ford F-150, Lincoln Navigator'
  },
  {
    id: 'exotic',
    name: 'Exotic & Luxury Sports',
    category: 'Bespoke Care (+25%)',
    multiplier: 1.25,
    iconName: 'Sparkles',
    examples: 'Porsche GT3/Turbo, Ferrari, Lamborghini, McLaren, Aston Martin, Bentley'
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'auto-detailing',
    title: 'Comprehensive Auto Detailing',
    badge: 'Signature Mastery',
    shortDesc: 'Complete interior deep sanitization, exterior hand polish, leather conditioning, and wheel decontamination.',
    fullDesc: 'Our complete auto detailing treatment rejuvenates both the exterior body and interior cabin. We perform a multi-stage snow foam hand wash, iron decontamination, clay treatment, deep interior dry-steam extraction, and leather conditioning to restore that factory-fresh luxury feel.',
    startingPrice: 180,
    duration: '3.5 – 5 Hours',
    popular: true,
    features: [
      'Complete exterior 2-bucket hand wash & gentle microfiber dry',
      'Full interior pressurized dry-vapor steam sanitization',
      'Deep hot-water carpet & upholstery stain extraction',
      'pH-balanced leather cleaning, feeding & matte UV shield',
      'Rims, brake calipers & wheel arches deep scrubbed and dressed'
    ],
    specs: [
      { label: 'Clean Level', value: '100% Comprehensive' },
      { label: 'Interior Care', value: 'Steam & Leather Conditioning' },
      { label: 'Finish', value: 'OEM Matte & Deep Gloss' }
    ],
    idealFor: 'Vehicles needing a complete reset, seasonal rejuvenation, or routine luxury maintenance in Astoria.',
    imageUrl: luxuryInteriorImg
  },
  {
    id: 'car-wash',
    title: 'Concourse Hand Car Wash',
    badge: 'Gentle & Spot-Free',
    shortDesc: '100% scratch-free 2-bucket hand wash with high-foam pH-neutral shampoo, wheel blast, and express interior vacuum.',
    fullDesc: 'Forget destructive automatic car wash brushes. At Astoria Detailing, every wash is done strictly by hand using ultra-plush microfiber mitts, filtered spot-free rinse water, and delicate blow drying to protect your clear coat from swirls and micro-scratches.',
    startingPrice: 45,
    duration: '45 – 60 Mins',
    features: [
      'Pre-wash citrus snow foam to loosen grit and NYC road grime',
      'Two-bucket hand wash with grit guards & plush microfibers',
      'Brake dust wheel face, barrel & tire scrubbing',
      'Spot-free deionized water rinse & warm air blower drying',
      'Express interior cabin vacuum, dash wipe & crystal glass clean'
    ],
    specs: [
      { label: 'Wash Method', value: '100% Hand Wash' },
      { label: 'Water Quality', value: 'Spot-Free Filtered' },
      { label: 'Drying Tech', value: 'Plush Microfiber & Warm Air' }
    ],
    idealFor: 'Regular weekly or bi-weekly vehicle maintenance to maintain clean, swirl-free paint.',
    imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'window-tinting',
    title: 'Precision Window Tinting',
    badge: 'Heat & UV Defense',
    shortDesc: 'Computer-cut ceramic & carbon automotive window film for maximum heat rejection, glare reduction, and privacy.',
    fullDesc: 'We install premium computer-cut nano-ceramic and carbon window tints that block up to 99% of harmful UV rays and up to 88% of solar infrared heat. Protect your vehicle interior leather from fading while ensuring privacy and comfort during hot NYC summers.',
    startingPrice: 220,
    duration: '2 – 3.5 Hours',
    features: [
      'Precision plotter computer-cut patterns tailored to your exact make/model',
      '99% UV radiation blockage protects skin and interior upholstery',
      'High infrared heat rejection keeps cabin noticeably cooler',
      'Multiple legal shade options (5%, 15%, 20%, 35%, 50%, 70%)',
      'Lifetime nationwide warranty against bubbling, peeling, and color fade'
    ],
    specs: [
      { label: 'UV Rejection', value: '99% UV Block' },
      { label: 'Film Type', value: 'Nano-Ceramic / Carbon' },
      { label: 'Warranty', value: 'Lifetime Guarantee' }
    ],
    idealFor: 'Drivers looking for heat relief, interior UV protection, reduced glare, and sleek privacy.',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ceramic-coating',
    title: 'Multi-Year Ceramic Coating',
    badge: 'Ultimate Armor',
    shortDesc: 'Military-grade 9H/10H SiO2 nano-ceramic molecular bond offering intense hydrophobic gloss, UV defense, and chemical barrier.',
    fullDesc: 'Our certified climate-controlled application creates a semi-permanent glassy shell over clear coat, wheels, plastics, and glass. Sheds rain, brake dust, bird droppings, acid rain, and New York winter road salt effortlessly.',
    startingPrice: 650,
    duration: '1 – 2 Days (Cure Bay)',
    popular: true,
    features: [
      'Genuine 9H / 10H certified nano-ceramic matrix bonded to clear coat',
      'Ultra-hydrophobic 115°+ water contact angle self-cleaning bead effect',
      'Defense against winter road salt, acid rain, bird droppings & UV rays',
      'Includes warranty certificate and multi-year durability',
      'Infrared heat-lamp curing cycle for maximum hardness'
    ],
    specs: [
      { label: 'Protection Lifespan', value: '2 to 5+ Years' },
      { label: 'Hardness Rating', value: '9H – 10H Ceramic' },
      { label: 'Maintenance', value: 'Hydrophobic Self-Cleaning' }
    ],
    idealFor: 'New vehicle protection, daily commuters, collector cars, and locking in paint perfection.',
    imageUrl: ceramicApplicatorImg
  },
  {
    id: 'paint-correction',
    title: 'Paint Correction & Restoration',
    badge: 'Flawless Mirror Finish',
    shortDesc: 'Eliminate 85%–99% of swirl marks, buffer holograms, water spots, and micro-scratches for an authentic mirror finish.',
    fullDesc: 'Using digital paint depth gauges and multi-stage rotary and dual-action polishers with precision micro-abrasives, we safely level and restore clear coat clarity without compromising factory paint thickness.',
    startingPrice: 350,
    duration: '5 – 8 Hours',
    popular: true,
    features: [
      'Paint thickness digital gauge measurement before and after machine polishing',
      'Decontamination foam bath & ultra-fine clay bar treatment',
      'Multi-stage compound & jeweling micro-polish',
      'Eliminates car wash swirls, spiderweb scratches, and clear coat haze',
      'Pre-sealant IPA alcohol surface prep inspection'
    ],
    specs: [
      { label: 'Defect Removal', value: 'Up to 90%–98%' },
      { label: 'Gloss Meter Jump', value: '+35 to +50 GU' },
      { label: 'Equipment', value: 'Rupes & Flex Precision Polishers' }
    ],
    idealFor: 'Vehicles with visible swirl marks, dull haze, micro-scratches, or preparing for ceramic coating.',
    imageUrl: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80'
  }
];

export const PACKAGES_DATA: PackageTier[] = [
  {
    id: 'express-wash-detail',
    name: 'Executive Hand Wash & Mini Detail',
    subtitle: 'Maintenance & Deep Refresh',
    price: 95,
    originalPrice: 120,
    duration: '1.5 – 2 Hours',
    warranty: '100% Satisfaction Guarantee',
    serviceType: 'In-Studio Service',
    includes: [
      'pH-neutral snow foam bath & 2-bucket hand wash',
      'Wheels, tires, calipers & arches cleaned and dressed',
      'Express interior cabin vacuum, dash & door panels wiped',
      'Windows cleaned inside and out for crystal clarity',
      'Spray sealant gloss enhancer & tire shine applied'
    ],
    perfectFor: 'Weekly or bi-weekly maintenance and keeping daily drivers pristine.'
  },
  {
    id: 'signature-auto-detail',
    name: 'Astoria Full Auto Detail',
    subtitle: 'Comprehensive Interior & Exterior Reset',
    price: 249,
    originalPrice: 299,
    duration: '3.5 – 5 Hours',
    warranty: 'Gloss & Hygiene Guarantee',
    popular: true,
    serviceType: 'In-Studio Service',
    includes: [
      'Complete 2-bucket hand wash & paint clay bar decontamination',
      'Full interior dry-vapor steam sanitization & deep vacuum',
      'Hot-water carpet & upholstery shampoo stain extraction',
      'Leather cleaned, conditioned & protected with UV inhibitor',
      'Single-stage machine polish enhancement for rich gloss',
      'Tire conditioning, wheel barrel scrub & exhaust tip polish'
    ],
    perfectFor: 'Vehicles needing a complete rejuvenation and fresh factory smell.'
  },
  {
    id: 'paint-correction-package',
    name: 'Signature Paint Correction',
    subtitle: 'Swirl Mark Removal & Mirror Gloss',
    price: 495,
    originalPrice: 595,
    duration: '6 – 8 Hours',
    warranty: '6-Month Poly-Shield',
    serviceType: 'In-Studio Precision Bay',
    includes: [
      'All Full Auto Detail wash & decontamination steps',
      'Multi-stage machine compounding & jeweling polish',
      '85%–95% removal of swirl marks, light scratches & haze',
      'Paint depth digital ultrasound micrometer evaluation',
      'Headlight & taillight polish for high clarity',
      '6-Month high-bonding polymer ceramic sealant applied'
    ],
    perfectFor: 'Vehicles with visible spiderwebs, wash marks, or preparing for ceramic coating.'
  },
  {
    id: 'ceramic-shield-package',
    name: 'Astoria 3-Year Ceramic Shield',
    subtitle: 'Multi-Year Nano Armor & Hydrophobic Shine',
    price: 890,
    originalPrice: 1090,
    duration: '1.5 Days (Cure Bay)',
    warranty: '3-Year Certified Warranty',
    bestValue: true,
    serviceType: 'Studio Climate-Controlled Bay',
    includes: [
      'Multi-Stage Paint Correction (Up to 95%+ Defect Removal)',
      '2 Coats of 9H Nano-Ceramic Coating on all body panels',
      'Wheel faces ceramic coated against corrosive NYC brake dust',
      'Windshield & exterior glass hydrophobic rain repellent',
      'Exterior plastic trim & rubber ceramic restoration barrier',
      'Infrared heat-lamp curing cycle for extreme hardness'
    ],
    perfectFor: 'New vehicles, luxury daily drivers, and owners seeking permanent hydrophobic gloss.'
  }
];

export const ADDONS_DATA: AddOnOption[] = [
  {
    id: 'window-tint-front',
    name: 'Front 2 Windows Ceramic Tinting',
    price: 130,
    description: 'High heat rejection & UV block matching factory rear privacy glass.'
  },
  {
    id: 'window-tint-full',
    name: 'Full Vehicle Ceramic Window Tinting',
    price: 260,
    description: 'All side and rear windows tinted with lifetime warranty nano-ceramic film.'
  },
  {
    id: 'wheel-ceramic',
    name: 'Wheels & Caliper Ceramic Coating',
    price: 150,
    description: 'Prevents corrosive brake dust buildup and makes wheel washing effortless.'
  },
  {
    id: 'glass-rain-shield',
    name: 'Hydrophobic Glass Rain Shield (All Windows)',
    price: 90,
    description: 'Extreme water repellency; raindrops slide off in rain for high driving visibility.'
  },
  {
    id: 'leather-ceramic',
    name: 'Interior Leather Ceramic Protection',
    price: 140,
    description: 'Prevents dye transfer from denim, liquid stains, and UV sun cracking.'
  },
  {
    id: 'headlight-resto',
    name: 'Headlight Wet-Sand & UV Clear Coat Restoration',
    price: 95,
    description: 'Restores yellowed, hazy polycarbonate headlights back to 100% optical clarity.'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Dimitri Kostas',
    location: 'Astoria, NY',
    vehicle: 'BMW M3 Competition',
    service: 'Paint Correction & Ceramic Coating',
    rating: 5,
    date: '1 week ago',
    comment: 'Brought my M3 into Astoria Detailing on 31st Ave after noticing heavy swirls from dealer prep. The team did an incredible multi-stage correction and ceramic coating. The Isle of Man green looks deeper than glass. Hands down the best auto detailing center in Queens.',
    verified: true,
    highlight: 'Deeper than showroom glass'
  },
  {
    id: 'rev-2',
    author: 'Sarah Jenkins',
    location: 'Long Island City, NY',
    vehicle: 'Tesla Model Y',
    service: 'Full Auto Detail & Ceramic Window Tinting',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Got my Model Y windows tinted with ceramic film and the full interior/exterior detail. The ceramic tint keeps the car so much cooler in the sun, and the interior looks spotless. Quick turnaround and great communication from the team.',
    verified: true,
    highlight: 'Huge difference with ceramic tint'
  },
  {
    id: 'rev-3',
    author: 'Michael Rossi',
    location: 'Astoria (Ditmars), NY',
    vehicle: 'Porsche Macan GTS',
    service: 'Comprehensive Auto Detailing & Hand Wash',
    rating: 5,
    date: '3 weeks ago',
    comment: 'I live right near 31st Ave and brought my Porsche in for a full detail. They took exceptional care of the satin black rims and restored the leather interior to a clean OEM matte finish. Very fair pricing and great hours (open till 9 PM)!',
    verified: true,
    highlight: 'Open till 9 PM & impeccable service'
  },
  {
    id: 'rev-4',
    author: 'Anthony Vasquez',
    location: 'Sunnyside, Queens, NY',
    vehicle: 'Mercedes-Benz C43 AMG',
    service: 'Concourse Hand Car Wash & Ceramic Boost',
    rating: 4.5,
    date: '1 month ago',
    comment: 'Astoria Auto Detailing Center is my go-to spot. The 2-bucket hand wash is gentle on the clear coat and they clean every spoke on the wheels. Friendly staff, clean shop, and they treat your car with real respect.',
    verified: true,
    highlight: 'Gentle hand wash & great attention'
  },
  {
    id: 'rev-5',
    author: 'Elena Pavlova',
    location: 'Upper East Side, NY',
    vehicle: 'Audi RS5 Sportback',
    service: '3-Year Ceramic Shield & Interior Steam Clean',
    rating: 5,
    date: '1 month ago',
    comment: 'Drove across the RFK Bridge specifically to come to Astoria Detailing. Worth every penny. The ceramic coating made winter road salt rinse right off with zero effort. Outstanding craftsmanship!',
    verified: true,
    highlight: 'Road salt slides right off'
  },
  {
    id: 'rev-6',
    author: 'Carlos Mendez',
    location: 'Jackson Heights, NY',
    vehicle: 'Jeep Grand Cherokee',
    service: 'Interior Deep Clean & Odor Neutralizer',
    rating: 4.5,
    date: '2 months ago',
    comment: 'Had stains and pet hair all over the back seats from weekend trips. The team steamed and extracted everything. Looks brand new again. Highly recommend Astoria Detailing for anyone in Queens!',
    verified: true,
    highlight: 'Pet hair and stains 100% gone'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'Where is Astoria Detailing located and what are your operating hours?',
    answer: 'We are located at 42-09 31st Ave, Astoria, NY 11103. We are open Monday through Saturday from 7:00 AM to 9:00 PM, and Sunday from 7:00 AM to 7:00 PM. We welcome both walk-ins for hand car washes and advance appointments for detailing, window tinting, and ceramic coatings.'
  },
  {
    id: 'faq-2',
    category: 'tinting',
    question: 'What types of window tinting do you offer and is it legal in New York?',
    answer: 'We offer state-of-the-art computer-cut Nano-Ceramic and Carbon window films with multiple shade options (5%, 15%, 20%, 35%, 50%, 70%). Our team ensures your vehicle meets your desired heat rejection, privacy, and NY state inspection compliance needs. All our tints come with a lifetime warranty against bubbling, fading, or peeling.'
  },
  {
    id: 'faq-3',
    category: 'ceramic',
    question: 'How does ceramic coating protect against NYC weather and road salt?',
    answer: 'Our 9H / 10H ceramic coatings form a durable, glassy covalent bond over your clear coat. Unlike waxes that wash away in weeks, ceramic coating creates an ultra-hydrophobic shield that prevents NYC road salts, acid rain, bird droppings, brake dust, and UV oxidation from etching into your paint.'
  },
  {
    id: 'faq-4',
    category: 'correction',
    question: 'What is the difference between a hand car wash and a paint correction?',
    answer: 'A hand car wash safely cleans surface grime and brake dust without scratching your paint. Paint correction is a precision machine polishing discipline that removes 85%–99% of existing swirl marks, scratches, oxidation, and clear coat haze to restore flawless mirror reflections.'
  },
  {
    id: 'faq-5',
    category: 'booking',
    question: 'How do I book an appointment or get an instant quote?',
    answer: 'You can select your vehicle class and services directly in our online Instant Quote Calculator on this page, or call our direct line at (917) 774-0051 to speak directly with our detailing concierge.'
  },
  {
    id: 'faq-6',
    category: 'general',
    question: 'Do you work on luxury, exotic, and daily commuter vehicles?',
    answer: 'Yes! From daily sedans and family SUVs to high-performance supercars (Porsche, BMW M, Mercedes-AMG, Ferrari), our master detailers treat every car with clinical precision and gentle, pH-balanced chemicals.'
  }
];

export const STYLE_GUIDE_DATA = {
  themeName: "Astoria Obsidian & Electric Amber",
  conceptOverview: "High-contrast luxury automotive detailing aesthetic with dark obsidian carbon canvas, crisp electric amber accents, and transparent pricing architecture.",
  colors: [
    { name: "Obsidian Carbon (Canvas)", hex: "#090B10", role: "Primary background providing high contrast and deep luxury depth" },
    { name: "Graphite Surface", hex: "#12161F", role: "Component cards, elevated containers, and structural panels" },
    { name: "Electric Amber (CTA Accent)", hex: "#F59E0B", role: "Primary conversion trigger, badges, star ratings, and active highlights" },
    { name: "Molten Gold Glow", hex: "#D97706", role: "Glow gradients, hover states, and accent borders" },
    { name: "Precision Cyan", hex: "#38BDF8", role: "Technical callouts, paint depth metrics, and ceramic layer specs" },
    { name: "Pure Platinum", hex: "#F8FAFC", role: "High-legibility primary display headlines and badges" },
    { name: "Muted Steel", hex: "#94A3B8", role: "Secondary labels, technical specs, and body descriptions" }
  ],
  typography: {
    displayHeading: "Outfit / Space Grotesk (700/800 Bold)",
    technicalMonospace: "Space Grotesk (500 Medium) with tabular figures",
    body: "Plus Jakarta Sans (400 Regular / 500 Medium) for crisp 16px+ baseline readability"
  },
  heroConcept: {
    headline: "Astoria Detailing | Astoria, NY",
    subheadline: "Astoria Auto Detailing Center: Concourse-grade auto detailing, 100% hand car wash, precision window tinting, multi-year ceramic coating, and paint correction.",
    primaryCta: "GET IN TOUCH",
    secondaryCta: "VIEW SERVICES & PRICING",
    visualStyle: "Studio spotlighting on a high-gloss supercar, interactive technical spec nodes, dynamic before/after paint clarity slider, and 4.2★ Google verified social proof banner."
  },
  wireframeSections: [
    { number: "01", name: "Global Header & Live Status Bar", purpose: "Persistent trust signals (4.2★, 42-09 31st Ave address, instant phone dial (917) 774-0051)" },
    { number: "02", name: "Hero Showcase & Performance Typography", purpose: "Immediate visual impact, Astoria Detailing headline, and instant quote CTA" },
    { number: "03", name: "Core Services Breakdown (5 Disciplines)", purpose: "Deep dive into Auto Detailing, Car Wash, Window Tinting, Ceramic Coating, and Paint Correction" },
    { number: "04", name: "Interactive Pricing & Package Matrix", purpose: "Clear transparent pricing tiers with vehicle size adjustments" },
    { number: "05", name: "Live Quote & Multi-Step Booking Builder", purpose: "High-conversion lead capture and instant estimated quote calculator" },
    { number: "06", name: "Verified Customer Reviews (343 Reviews)", purpose: "Social proof with real car models and Astoria / Queens authenticity (4.2 / 5.0)" },
    { number: "07", name: "Interactive FAQ Accordion", purpose: "Answers for ceramic longevity, window tinting, hours, and hand car washes" },
    { number: "08", name: "Astoria Studio Map & Direct Contact", purpose: "42-09 31st Ave address, business hours (7 AM - 9 PM), Google directions, and phone dial" }
  ]
};
