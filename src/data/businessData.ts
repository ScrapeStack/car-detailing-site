import { VehicleOption, ServiceDetail, PackageTier, AddOnOption, ReviewItem, FaqItem } from '../types';
import engineBayCleaningImg from '../assets/images/engine_bay_cleaning_1787210678628.jpg';
import ceramicApplicatorImg from '../assets/images/ceramic_applicator_hood_1787210837591.jpg';
import luxuryInteriorImg from '../assets/images/luxury_interior_clean_1787211008247.jpg';

export const BUSINESS_INFO = {
  name: "Beverly Hills Detailing Center",
  fullName: "Beverly Hills Detailing Center",
  tagline: "Professional Auto Detailing on Astoria Blvd in East Elmhurst, NY",
  address: "70-11 Astoria Blvd N, East Elmhurst, NY 11370",
  addressShort: "70-11 Astoria Blvd N",
  phone: "(718) 777-7600",
  phoneRaw: "7187777600",
  email: "info@beverlyhillsdetailingcenter.com",
  rating: 4.4,
  reviewCount: 97,
  hours: {
    weekdays: "Mon-Sat: 8:00 AM - 6:00 PM",
    saturday: "Mon-Sat: 8:00 AM - 6:00 PM",
    sunday: "Sun: 8:00 AM - 3:00 PM"
  },
  serviceAreas: [
    "East Elmhurst",
    "Astoria Blvd",
    "Jackson Heights",
    "Corona",
    "Flushing",
    "Astoria",
    "Woodside",
    "Queens & NYC"
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
    title: 'Full Interior & Exterior Auto Detailing',
    badge: 'Complete Transformation',
    shortDesc: 'Complete interior deep sanitization, exterior hand polish, leather conditioning, and wheel decontamination.',
    fullDesc: 'Our complete auto detailing treatment rejuvenates both the exterior body and interior cabin. We perform a multi-stage snow foam hand wash, iron decontamination, clay treatment, deep interior dry-steam extraction, and leather conditioning to restore that factory-fresh luxury feel on Astoria Blvd.',
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
    idealFor: 'Vehicles needing a complete reset, seasonal rejuvenation, or routine luxury maintenance in East Elmhurst.',
    imageUrl: luxuryInteriorImg
  },
  {
    id: 'hand-wash-wax',
    title: 'Premium Hand Wash & Paint Protection Wax',
    badge: 'Gentle & Gloss Shield',
    shortDesc: '100% scratch-free 2-bucket hand wash with high-foam pH-neutral shampoo, wheel decontamination, and high-gloss carnauba polymer wax.',
    fullDesc: 'Forget abrasive car wash tunnels that scratch your clear coat. At Beverly Hills Detailing Center, every wash is completed 100% by hand using ultra-plush microfiber mitts, filtered spot-free rinse water, and a high-grade hydrophobic paint protection wax barrier.',
    startingPrice: 65,
    duration: '1 – 1.5 Hours',
    features: [
      'Citrus snow foam pre-wash to lift grit and NYC road grime safely',
      'Two-bucket hand wash with dirt traps & plush microfiber mitts',
      'Brake dust wheel face, barrel & tire deep scrubbing',
      'Hand-applied synthetic polymer / carnauba paint protection wax',
      'Interior cabin vacuum, dashboard wipe & streak-free glass clean'
    ],
    specs: [
      { label: 'Wash Method', value: '100% Hand Wash' },
      { label: 'Wax Barrier', value: 'Polymer Carnauba Shield' },
      { label: 'Water Quality', value: 'Spot-Free Filtered' }
    ],
    idealFor: 'Regular vehicle maintenance, gloss enhancement, and dependable paint protection on Astoria Blvd.',
    imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ceramic-paint-correction',
    title: 'Ceramic Coating & Paint Correction',
    badge: 'Flawless Mirror Armor',
    shortDesc: 'Multi-stage machine compounding and polishing eliminating swirl marks, locked in with a multi-year 9H nano-ceramic chemical shield.',
    fullDesc: 'Our certified paint correction process eliminates 85%–98% of swirl marks, wash scratches, holograms, and oxidation. We then seal the perfected paint with an authentic 9H nano-ceramic coating that provides intense hydrophobic water beading and permanent gloss.',
    startingPrice: 650,
    duration: '1 – 2 Days (Curing Bay)',
    popular: true,
    features: [
      'Digital ultrasonic paint depth assessment prior to machine jeweling',
      'Multi-stage rotary & dual-action compound and swirl elimination',
      'Certified 9H SiO2 nano-ceramic molecular bond to clear coat',
      'Extreme 115°+ hydrophobic water beading & self-cleaning effect',
      'Defends against road salt, acid rain, bird dropping etchings & UV fade'
    ],
    specs: [
      { label: 'Defect Removal', value: 'Up to 90%–98%' },
      { label: 'Protection', value: 'Certified 9H Nano-Ceramic' },
      { label: 'Lifespan', value: '2 to 5+ Years Durability' }
    ],
    idealFor: 'Vehicles with visible spiderweb swirls, light scratches, new car protection, or drivers demanding mirror reflections.',
    imageUrl: ceramicApplicatorImg
  },
  {
    id: 'leather-conditioning',
    title: 'Leather Cleaning & Conditioning',
    badge: 'Supple OEM Restoration',
    shortDesc: 'Deep pore leather cleaning, stain extraction, natural nutrient replenishing, and UV inhibitor protection to prevent drying and cracking.',
    fullDesc: 'Over time, dirt, body oils, and UV exposure harden and crack automotive leather. Our master detailers gently clean every leather surface using pH-balanced horsehair brushes and apply essential conditioners that restore supple softness and natural OEM matte appearance.',
    startingPrice: 120,
    duration: '1.5 – 2 Hours',
    features: [
      'Deep pore pH-neutral foaming cleaner lifts grime without stripping oils',
      'Gentle horsehair agitation for perforated, nappa, and semi-aniline leather',
      'Rich organic conditioner deeply penetrates to restore softness & flexibility',
      'Matte OEM finish with zero greasy or slippery residue',
      'UV blocking barrier guards against sun discoloration and premature cracking'
    ],
    specs: [
      { label: 'Finish', value: 'OEM Factory Matte' },
      { label: 'Leather Types', value: 'Nappa, Merino, Standard' },
      { label: 'Protection', value: 'UV & Dye Transfer Shield' }
    ],
    idealFor: 'Vehicles with dry, stiff, or soiled leather seats, steering wheels, and armrests.',
    imageUrl: luxuryInteriorImg
  },
  {
    id: 'headlight-engine-bay',
    title: 'Headlight Restoration & Engine Bay Cleaning',
    badge: 'Clarity & Performance Detail',
    shortDesc: 'Wet-sand headlight clarity restoration paired with precision dry-steam engine bay degreasing and protective satin dress.',
    fullDesc: 'Restore yellowed, hazy headlights back to crystal-clear optical brilliance for safer night driving, combined with a safe, detailed engine bay clean that removes accumulated dirt, grease, and road salt while conditioning all hoses and plastics.',
    startingPrice: 140,
    duration: '2 – 2.5 Hours',
    features: [
      'Multi-stage wet-sanding removes oxidized yellow polycarbonate layer',
      'High-gloss machine jeweling & durable UV clear sealant protection',
      'Engine bay sensitive electronics masked and protected',
      'Pressurized dry-steam degreasing safely lifts grease and road grim',
      'Non-greasy satin silicone-free conditioner applied to hoses and plastic covers'
    ],
    specs: [
      { label: 'Headlight Optical', value: '100% Clarity Restored' },
      { label: 'Engine Cleaning', value: 'Dry-Steam & Masked' },
      { label: 'UV Sealant', value: 'Multi-Year Clear Shield' }
    ],
    idealFor: 'Older vehicles with cloudy headlights, performance car owners, or pre-sale preparation.',
    imageUrl: engineBayCleaningImg
  }
];

export const PACKAGES_DATA: PackageTier[] = [
  {
    id: 'express-wash-detail',
    name: 'Executive Hand Wash & Paint Wax',
    subtitle: '100% Hand Wash & Carnauba Paint Protection',
    price: 85,
    originalPrice: 110,
    duration: '1 – 1.5 Hours',
    warranty: '100% Satisfaction Guarantee',
    serviceType: 'In-Center Service',
    includes: [
      'pH-neutral citrus snow foam pre-wash & 2-bucket hand wash',
      'Wheels, tires, calipers & arches cleaned and dressed',
      'Synthetic polymer / carnauba paint protection wax applied',
      'Express interior cabin vacuum, dash & door panels wiped',
      'Windows cleaned inside and out for crystal streak-free clarity'
    ],
    perfectFor: 'Weekly or bi-weekly maintenance and keeping daily drivers protected from NYC weather.'
  },
  {
    id: 'signature-auto-detail',
    name: 'Beverly Hills Full Auto Detail',
    subtitle: 'Comprehensive Interior & Exterior Reset',
    price: 249,
    originalPrice: 299,
    duration: '3.5 – 5 Hours',
    warranty: 'Gloss & Hygiene Guarantee',
    popular: true,
    serviceType: 'In-Center Service',
    includes: [
      'Complete 2-bucket hand wash & paint clay bar decontamination',
      'Full interior dry-vapor steam sanitization & deep vacuum',
      'Hot-water carpet & upholstery shampoo stain extraction',
      'Leather cleaned, conditioned & protected with UV inhibitor',
      'Single-stage machine polish enhancement for rich gloss',
      'Tire conditioning, wheel barrel scrub & exhaust tip polish'
    ],
    perfectFor: 'Vehicles needing a complete rejuvenation, deep stain removal, and fresh interior.'
  },
  {
    id: 'leather-engine-package',
    name: 'Interior Leather & Engine Bay Detail',
    subtitle: 'Leather Deep Nourish & Engine Bay Restoration',
    price: 320,
    originalPrice: 380,
    duration: '3 – 4 Hours',
    warranty: 'Cleanliness & Protection Guarantee',
    serviceType: 'In-Center Service',
    includes: [
      'Deep pore leather foaming clean & organic feeding conditioner',
      'Complete engine bay degrease, dry-steam & protective satin dress',
      'Headlight clarity wet-sand polish & UV clear seal',
      'Full interior vacuum, dash UV treatment & door jamb detail',
      'Exterior gentle hand wash and spot-free blow dry'
    ],
    perfectFor: 'Enthusiasts wanting pristine leather and an immaculate, show-ready engine bay.'
  },
  {
    id: 'ceramic-shield-package',
    name: 'Beverly Hills Ceramic & Correction',
    subtitle: 'Paint Correction & Multi-Year 9H Nano Armor',
    price: 795,
    originalPrice: 995,
    duration: '1 – 2 Days (Curing Bay)',
    warranty: '3-Year Certified Warranty',
    bestValue: true,
    serviceType: 'Climate-Controlled Bay',
    includes: [
      'Multi-Stage Paint Correction (Up to 95%+ Defect Removal)',
      'Certified 9H Nano-Ceramic Coating on all painted exterior panels',
      'Wheel faces ceramic coated against corrosive NYC brake dust',
      'Windshield & exterior glass hydrophobic rain repellent',
      'Exterior plastic trim & rubber ceramic restoration barrier',
      'Infrared heat-lamp curing cycle for maximum hardness'
    ],
    perfectFor: 'New vehicles, luxury daily drivers, and owners seeking permanent mirror gloss on Astoria Blvd.'
  }
];

export const ADDONS_DATA: AddOnOption[] = [
  {
    id: 'engine-bay-detail',
    name: 'Engine Bay Steam Clean & Dress',
    price: 90,
    description: 'Safe pressurized dry-steam degreasing and non-greasy satin hose conditioning.'
  },
  {
    id: 'headlight-resto',
    name: 'Headlight Wet-Sand & UV Clear Coat Restoration',
    price: 85,
    description: 'Restores yellowed, hazy polycarbonate headlights back to 100% optical clarity.'
  },
  {
    id: 'leather-conditioning-addon',
    name: 'Premium Leather Cleaning & Conditioning',
    price: 95,
    description: 'Deep pore leather sanitization, organic feeding conditioner, and UV sun shield.'
  },
  {
    id: 'wheel-ceramic',
    name: 'Wheels & Caliper Ceramic Coating',
    price: 140,
    description: 'Prevents corrosive brake dust buildup and makes wheel washing effortless.'
  },
  {
    id: 'glass-rain-shield',
    name: 'Hydrophobic Glass Rain Shield (All Windows)',
    price: 80,
    description: 'Extreme water repellency; raindrops slide right off in rain for high driving visibility.'
  },
  {
    id: 'paint-sealant-boost',
    name: 'Polymer Paint Sealant Gloss Booster',
    price: 65,
    description: 'Extended 6-month synthetic paint sealant providing deep gloss and slick surface.'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Dimitri Kostas',
    location: 'East Elmhurst, NY',
    vehicle: 'BMW M3 Competition',
    service: 'Paint Correction & Ceramic Coating',
    rating: 5,
    date: '1 week ago',
    comment: 'Brought my M3 into Beverly Hills Detailing Center on Astoria Blvd after noticing heavy swirl marks. The team did an incredible multi-stage correction and ceramic coating. The paint looks deeper than glass. Hands down the best auto detailing center on Astoria Blvd.',
    verified: true,
    highlight: 'Deeper than showroom glass'
  },
  {
    id: 'rev-2',
    author: 'Sarah Jenkins',
    location: 'Astoria Blvd, East Elmhurst',
    vehicle: 'Tesla Model Y',
    service: 'Full Interior & Exterior Detailing',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Got my Model Y detailed here with the full interior and exterior package. The interior looks completely spotless and smells fresh. Quick turnaround and easy communication by phone at (718) 777-7600.',
    verified: true,
    highlight: 'Spotless interior & great communication'
  },
  {
    id: 'rev-3',
    author: 'Michael Rossi',
    location: 'Jackson Heights, NY',
    vehicle: 'Porsche Macan GTS',
    service: 'Leather Conditioning & Hand Wash',
    rating: 5,
    date: '3 weeks ago',
    comment: 'I live nearby and brought my Porsche to Beverly Hills Detailing Center. They restored the leather seats to a clean OEM matte finish and gave the car an immaculate hand wash and wax. Very fair pricing and great service!',
    verified: true,
    highlight: 'Restored leather to OEM matte finish'
  },
  {
    id: 'rev-4',
    author: 'Anthony Vasquez',
    location: 'Corona, Queens, NY',
    vehicle: 'Mercedes-Benz C43 AMG',
    service: 'Premium Hand Wash & Paint Protection Wax',
    rating: 4.5,
    date: '1 month ago',
    comment: 'Beverly Hills Detailing Center on Astoria Blvd is my regular spot. The 2-bucket hand wash is gentle on the clear coat and they clean every spoke on the wheels. Friendly staff, clean shop, and they treat your car with real respect.',
    verified: true,
    highlight: 'Gentle hand wash & great attention'
  },
  {
    id: 'rev-5',
    author: 'Elena Pavlova',
    location: 'East Elmhurst, NY',
    vehicle: 'Audi RS5 Sportback',
    service: 'Headlight Restoration & Engine Bay Cleaning',
    rating: 5,
    date: '1 month ago',
    comment: 'Had cloudy headlights and a neglected engine bay. The team completely transformed both! Headlights look like brand new factory lenses and the engine bay is spotless. Highly recommend them!',
    verified: true,
    highlight: 'Headlights look brand new'
  },
  {
    id: 'rev-6',
    author: 'Carlos Mendez',
    location: 'Flushing, NY',
    vehicle: 'Jeep Grand Cherokee',
    service: 'Full Auto Detail & Leather Care',
    rating: 4.5,
    date: '2 months ago',
    comment: 'Had stains and pet hair all over the back seats from weekend trips. The team steamed and extracted everything and treated all the leather. Looks brand new again. Call them at (718) 777-7600!',
    verified: true,
    highlight: 'Pet hair and stains 100% gone'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'Where is Beverly Hills Detailing Center located and what are your operating hours?',
    answer: 'We are located at 70-11 Astoria Blvd N, East Elmhurst, NY 11370. We are open Monday through Saturday from 8:00 AM to 6:00 PM, and Sunday from 8:00 AM to 3:00 PM. We welcome walk-ins for hand car washes and advance appointments for full detailing, leather restoration, and ceramic coatings.'
  },
  {
    id: 'faq-2',
    category: 'booking',
    question: 'How do I book an appointment or speak directly with the detailing center?',
    answer: 'You can call our direct line at (718) 777-7600 to schedule your appointment, ask questions, or discuss custom requirements. You can also use the instant quote calculator on this website.'
  },
  {
    id: 'faq-3',
    category: 'ceramic',
    question: 'How does ceramic coating protect against NYC weather and road salt?',
    answer: 'Our 9H nano-ceramic coatings form a durable, glassy covalent bond over your clear coat. Unlike traditional waxes that wash away within weeks, ceramic coating creates an ultra-hydrophobic shield that prevents NYC winter road salts, acid rain, bird droppings, brake dust, and UV oxidation from etching into your paint.'
  },
  {
    id: 'faq-4',
    category: 'correction',
    question: 'What is the difference between a hand car wash and a full paint correction?',
    answer: 'A hand car wash safely cleans surface grime and brake dust without scratching your paint. Paint correction is a precision machine polishing discipline that removes 85%–98% of existing swirl marks, scratches, oxidation, and clear coat haze to restore flawless mirror reflections.'
  },
  {
    id: 'faq-5',
    category: 'leather',
    question: 'How often should automotive leather be cleaned and conditioned?',
    answer: 'In New York climate conditions, automotive leather should be cleaned and conditioned every 3 to 6 months to prevent body oils and UV sun rays from drying out the hide, causing stiffness and cracks. Our pH-balanced treatment restores natural softness and OEM matte look.'
  },
  {
    id: 'faq-6',
    category: 'engine',
    question: 'Is engine bay cleaning and headlight restoration safe for my vehicle?',
    answer: 'Yes! We use specialized low-moisture dry vapor steam to safely degrease engine bays while carefully protecting electrical components, sensors, and intakes. For headlights, our multi-stage wet sanding and UV clear seal restore crystal optical clarity for safer night driving.'
  }
];

export const STYLE_GUIDE_DATA = {
  themeName: "Beverly Hills Detailing Center - Luxury Dark & Electric Amber",
  conceptOverview: "High-contrast luxury automotive detailing aesthetic with dark obsidian carbon canvas, crisp electric amber accents, and transparent pricing architecture.",
  colors: [
    { name: "Obsidian Carbon (Canvas)", hex: "#090B10", role: "Primary background providing high contrast and deep luxury depth" },
    { name: "Graphite Surface", hex: "#121620", role: "Component cards, elevated containers, and structural panels" },
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
    headline: "Beverly Hills Detailing Center | East Elmhurst, NY",
    subheadline: "Professional Auto Detailing on Astoria Blvd in East Elmhurst: Full interior & exterior auto detailing, premium hand wash & wax, ceramic coating, paint correction, leather conditioning, and engine bay cleaning.",
    primaryCta: "CALL (718) 777-7600",
    secondaryCta: "BOOK APPOINTMENT",
    visualStyle: "Studio spotlighting on a high-gloss supercar, interactive technical spec nodes, dynamic before/after paint clarity slider, and 4.4★ Google verified social proof banner."
  },
  wireframeSections: [
    { number: "01", name: "Global Header & Live Status Bar", purpose: "Persistent trust signals (4.4★, 70-11 Astoria Blvd N, instant phone dial (718) 777-7600)" },
    { number: "02", name: "Hero Showcase & Performance Typography", purpose: "Immediate visual impact, Beverly Hills Detailing Center headline on Astoria Blvd, and direct call CTA" },
    { number: "03", name: "Core Services Breakdown (5 Disciplines)", purpose: "Full Interior/Exterior, Hand Wash & Wax, Ceramic Coating & Correction, Leather Conditioning, Headlight/Engine Bay" },
    { number: "04", name: "Interactive Pricing & Package Matrix", purpose: "Clear transparent pricing tiers with vehicle size adjustments" },
    { number: "05", name: "Live Quote & Multi-Step Booking Builder", purpose: "High-conversion lead capture and instant estimated quote calculator" },
    { number: "06", name: "Verified Customer Reviews (97+ Reviews)", purpose: "Social proof with real car models and East Elmhurst / Astoria Blvd authenticity (4.4 / 5.0)" },
    { number: "07", name: "Interactive FAQ Accordion", purpose: "Answers for ceramic longevity, hours, location, and leather care" },
    { number: "08", name: "East Elmhurst Studio Map & Direct Contact", purpose: "70-11 Astoria Blvd N address, business hours (Mon-Sat 8AM-6PM, Sun 8AM-3PM), Google directions, and phone dial (718) 777-7600" }
  ]
};
