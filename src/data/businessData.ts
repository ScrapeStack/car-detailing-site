import { VehicleOption, ServiceDetail, PackageTier, AddOnOption, ReviewItem, FaqItem } from '../types';
import engineBayCleaningImg from '../assets/images/engine_bay_cleaning_1787210678628.jpg';
import ceramicApplicatorImg from '../assets/images/ceramic_applicator_hood_1787210837591.jpg';
import luxuryInteriorImg from '../assets/images/luxury_interior_clean_1787211008247.jpg';

export const BUSINESS_INFO = {
  name: "Zephyr Auto Spa",
  fullName: "Zephyr Auto Spa",
  tagline: "High-Quality Auto Detailing at 233 Brinsmade Ave in the Bronx",
  address: "233 Brinsmade Ave, Bronx, NY 10465",
  addressShort: "233 Brinsmade Ave, Bronx, NY",
  serviceLocationNote: "Bronx, NY (Serving Throggs Neck, Pelham Bay, Country Club & NYC)",
  phone: "(347) 780-5287",
  phoneRaw: "3477805287",
  email: "info@zephyrautospa.com",
  rating: 4.9,
  reviewCount: 128,
  hours: {
    weekdays: "Mon-Fri: 7:30 AM - 4:30 PM",
    saturday: "Sat: 9:00 AM - 4:00 PM",
    sunday: "Sun: Closed"
  },
  serviceAreas: [
    "The Bronx",
    "Throggs Neck",
    "Pelham Bay",
    "Country Club",
    "City Island",
    "Morris Park",
    "Riverdale",
    "Westchester County",
    "Upper Manhattan",
    "Queens"
  ]
};

export const VEHICLE_OPTIONS: VehicleOption[] = [
  {
    id: 'coupe',
    name: 'Coupe / Sedan',
    category: 'Standard Size',
    multiplier: 1.0,
    iconName: 'Car',
    examples: 'BMW 3/4 Series, Tesla Model 3, Mercedes C/E-Class, Audi A4/A5, Honda Accord'
  },
  {
    id: 'suv',
    name: 'Mid-Size SUV / Crossover',
    category: 'Medium Size (+15%)',
    multiplier: 1.15,
    iconName: 'Shield',
    examples: 'Tesla Model Y, BMW X3/X5, Audi Q5/Q7, Porsche Macan, Jeep Grand Cherokee'
  },
  {
    id: 'truck',
    name: 'Full-Size SUV / Truck / Van',
    category: 'Large Size (+30%)',
    multiplier: 1.3,
    iconName: 'Truck',
    examples: 'Cadillac Escalade, Chevy Tahoe/Suburban, Ford F-150, Dodge Ram, Lincoln Navigator'
  },
  {
    id: 'exotic',
    name: 'Exotic & Luxury Sports',
    category: 'Bespoke Care (+25%)',
    multiplier: 1.25,
    iconName: 'Sparkles',
    examples: 'Porsche 911/GT3, Corvette C8, Ferrari, Lamborghini, Maserati, Aston Martin'
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'complete-auto-detail',
    title: 'Complete Auto Detailing & Interior Deep Clean',
    badge: 'Complete Interior & Exterior Showroom Reset',
    shortDesc: 'Full cabin hot-water shampoo extraction, dry-vapor steam sanitization, leather conditioning, gentle foam hand wash, and protective paint sealant.',
    fullDesc: 'Our signature complete detailing service delivers a total transformation inside and out at our 233 Brinsmade Ave Bronx facility or via our mobile service. We meticulously shampoo carpets and upholstery, steam disinfect all air vents and touchpoints, condition leather, and execute a multi-stage exterior hand wash with clay bar decontamination and gloss sealant.',
    startingPrice: 195,
    duration: '3 – 4 Hours',
    popular: true,
    features: [
      'High-temperature hot water extraction on all carpets, floor mats, and fabric seats',
      'Dry-vapor steam sanitization of HVAC vents, console, door panels, and cup holders',
      'pH-balanced leather cleansing and deep conditioning with UV barrier protection',
      'Gentle two-bucket exterior hand wash, wheel de-ironing, and synthetic paint sealant',
      'Streak-free optical interior and exterior glass cleaning plus satin tire dressing'
    ],
    specs: [
      { label: 'Interior Depth', value: 'Deep Heated Extraction & Steam' },
      { label: 'Exterior Finish', value: 'Decontaminated & Polymer Sealed' },
      { label: 'Cabin Sanitization', value: '99.9% Bacteria & Odor Free' }
    ],
    idealFor: 'Vehicles needing a complete reset, seasonal rejuvenation, deep family vehicle sanitization, or pre-sale preparation in the Bronx.',
    imageUrl: luxuryInteriorImg
  },
  {
    id: 'hand-wash-shine',
    title: 'Professional Hand Wash & Exterior Shine',
    badge: 'Scratch-Free 2-Bucket Foam Bath',
    shortDesc: 'Thorough pH-neutral snow foam bath, two-bucket grit-guard hand wash, microfiber towel and blow dry, spray wax enhancement, and tire gloss.',
    fullDesc: 'Far superior to harsh automated car washes that scour clear coats with abrasive brushes and recycled water. At Zephyr Auto Spa on Brinsmade Ave, every vehicle receives a lavish snow foam pre-soak, gentle two-bucket wash with plush microfiber mitts, wheel face and barrel cleaning, warm filtered air blow dry, and a high-gloss spray sealant.',
    startingPrice: 65,
    duration: '45 – 60 Mins',
    popular: false,
    features: [
      'Luxurious pH-neutral snow foam cannon pre-wash dissolving road grime and salt',
      'Two-bucket hand wash method with grit guards and ultra-plush microfiber wash mitts',
      'Brake dust de-ironing wheel cleaner, inner barrel agitation, and wheel arch rinse',
      'Spot-free filtered rinse and warm filtered air blow-dry to prevent water trapping',
      'High-gloss synthetic spray wax protection and non-sling satin tire dressing'
    ],
    specs: [
      { label: 'Wash Method', value: '100% Hand Wash & Dual Grit-Guards' },
      { label: 'Wheel Treatment', value: 'De-ironed & Detailed' },
      { label: 'Finish', value: 'Hydrophobic High-Gloss Seal' }
    ],
    idealFor: 'Weekly or bi-weekly maintenance wash to preserve paint clarity and gloss without introducing swirl marks.',
    imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'paint-correction',
    title: 'Paint Correction & Scratch Removal',
    badge: 'Mirror Clarity & Swirl Removal',
    shortDesc: 'Precision multi-stage machine compounding and polishing to eliminate swirl marks, spiderwebs, light scratches, oxidation, and clear coat haze.',
    fullDesc: 'Restore your vehicle\'s paintwork to true mirror perfection. Our master detailers measure clear coat thickness with digital ultrasonic gauges before deploying dual-action rotary polishers, micro-abrasive compounds, and finishing polishes to permanently level defects and reveal deep, liquid reflections.',
    startingPrice: 325,
    duration: '4 – 8 Hours',
    popular: true,
    features: [
      'Comprehensive chemical decontamination: iron fallout remover and clay bar treatment',
      'Digital ultrasonic paint depth measurement across all panels to ensure safe compounding',
      'Stage 1 or Stage 2 dual-action machine polishing removing 80%–95%+ of surface swirls',
      'Eliminates wash scratches, water spot etchings, holograms, and dull oxidation',
      'Sealed with high-grade synthetic polymer sealant or prepped for ceramic coating'
    ],
    specs: [
      { label: 'Defect Removal', value: '80%–95%+ Swirl & Scratch Elimination' },
      { label: 'Equipment', value: 'Rupes & Flex Dual-Action Polishers' },
      { label: 'Clarity', value: 'Flawless Liquid Mirror Reflections' }
    ],
    idealFor: 'Enthusiasts, black and dark-colored vehicles with noticeable wash swirls, lease returns, and prep before ceramic coating.',
    imageUrl: ceramicApplicatorImg
  },
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating Protection',
    badge: 'Multi-Year 9H Molecular Shield',
    shortDesc: 'Authentic 9H nano-ceramic chemical armor providing years of extreme hydrophobic water beading, chemical resistance, and permanent candy gloss.',
    fullDesc: 'Defend your vehicle against harsh Bronx and NYC road salt, acid rain, bird droppings, industrial fallout, and UV oxidation. Our certified technicians chemically bond a professional 9H nano-ceramic coating to your paint, wheels, and glass, creating an ultra-durable crystalline barrier that keeps your car cleaner for longer.',
    startingPrice: 695,
    duration: '1 – 2 Days',
    popular: true,
    features: [
      'Full exterior surface prep including clay bar and machine polish gloss enhancement',
      'Authentic 9H nano-ceramic coating creating a permanent covalent molecular bond',
      'Extreme 115°+ hydrophobic water contact angle — dirt and water slide off effortlessly',
      'UV-inhibitors prevent paint oxidation, clear coat fading, and chemical staining',
      'Includes windshield rain repellant treatment and warranty documentation'
    ],
    specs: [
      { label: 'Hardness', value: 'Certified 9H Nano-Ceramic' },
      { label: 'Protection', value: '3 to 5+ Years Durability' },
      { label: 'Maintenance', value: 'Wash Time Reduced by 70%' }
    ],
    idealFor: 'New car protection, luxury & sports cars, daily commuters facing Bronx & NYC traffic, and long-term vehicle preservation.',
    imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'headlight-tire-dressing',
    title: 'Headlight Restoration & Tire Dressing',
    badge: 'Optical Clarity & Deep Satin Finish',
    shortDesc: 'Multi-stage wet-sanding and UV clear seal to restore oxidized cloudy headlights to crystal clarity, paired with wheel detailing and premium satin tire dressing.',
    fullDesc: 'Foggy, yellowed headlights diminish nighttime driving safety and age an otherwise clean car. At Zephyr Auto Spa, we wet-sand, compound, and polish headlight lenses back to crystal clarity before baking on a permanent UV-blocking sealant. Paired with deep brake dust wheel cleaning and rich, sling-free silicone-free tire dressing.',
    startingPrice: 110,
    duration: '1.5 – 2 Hours',
    popular: false,
    features: [
      'Multi-stage wet sanding (1000, 2000, 3000 grit) eliminating yellowing and oxidation',
      'Rotary machine compounding and fine polishing to restore factory optical clarity',
      'Long-lasting UV-blocking protective ceramic clear sealant to prevent re-hazing',
      'Brake dust removal and deep cleaning of wheel faces, spokes, and inner barrels',
      'Non-sling, water-based satin tire dressing that nourishes rubber without attracting dust'
    ],
    specs: [
      { label: 'Light Output', value: 'Up to 200% Nighttime Visibility Increase' },
      { label: 'UV Sealant', value: 'Prevents Yellowing for 12+ Months' },
      { label: 'Tire Finish', value: 'Deep Satin Non-Sling Formula' }
    ],
    idealFor: 'Vehicles with hazy, yellowed lenses, safety inspections, night commuters, and finishing touches for a showroom stance.',
    imageUrl: engineBayCleaningImg
  }
];

export const PACKAGES_DATA: PackageTier[] = [
  {
    id: 'hand-wash-express',
    name: 'Professional Hand Wash & Shine',
    subtitle: 'Gentle 2-Bucket Foam Wash & Paint Gloss',
    price: 65,
    originalPrice: 85,
    duration: '45 – 60 Mins',
    warranty: '100% Swirl-Free Guarantee',
    serviceType: 'Hand Wash & Quick Shine',
    includes: [
      'Gentle 2-bucket foam bath with grit-guard microfiber wash mitts',
      'Brake dust wheel scrub, wheel barrel clean & tire sidewall wash',
      'Spot-free rinse and warm filtered air blow dry (no water drips)',
      'High-gloss synthetic polymer spray wax enhancement',
      'Sling-free satin tire dressing & crystal optical window clean'
    ],
    perfectFor: 'Regular routine car care to keep your paint sparkling and swirl-free.'
  },
  {
    id: 'complete-detail-reset',
    name: 'Complete Auto Detail & Deep Clean',
    subtitle: 'Comprehensive Interior Reset & Exterior Detail',
    price: 195,
    originalPrice: 245,
    duration: '3 – 4 Hours',
    warranty: 'Total Cleanliness Guarantee',
    popular: true,
    bestValue: true,
    serviceType: 'Complete Interior & Exterior Service',
    includes: [
      'High-temp heated shampoo extraction on carpets, mats & cloth seats',
      'Full dry-vapor steam sanitization of vents, console & cupholders',
      'pH-balanced leather conditioning with anti-aging UV barrier',
      'Complete 2-bucket exterior foam wash & clay bar decontamination',
      'Machine gloss polish & synthetic protective paint sealant',
      'Streak-free interior & exterior glass cleaning plus tire dressing'
    ],
    perfectFor: 'Vehicles needing a complete reset, seasonal rejuvenation, or deep interior sanitization.'
  },
  {
    id: 'paint-correction-package',
    name: 'Paint Correction & Scratch Removal',
    subtitle: 'Machine Compounding & Polish Defect Removal',
    price: 349,
    originalPrice: 420,
    duration: '4 – 6 Hours',
    warranty: 'Clarity & Gloss Guarantee',
    popular: true,
    serviceType: 'Precision Machine Restoration',
    includes: [
      'Ultrasonic digital paint gauge depth analysis across all body panels',
      'Iron chemical fallout decontamination & fine grade clay bar treatment',
      'Dual-action machine compounding removing 80%–95%+ of swirl marks & light scratches',
      'Jeweling finishing polish creating deep, liquid reflection clarity',
      'Headlight clarity enhancement & non-sling tire dressing',
      'Durable hydrophobic synthetic paint sealant protection'
    ],
    perfectFor: 'Vehicles with wash swirls, spiderwebs, dull oxidation, or preparing for ceramic coating.'
  },
  {
    id: 'ceramic-protection-package',
    name: 'Ceramic Coating Protection Armor',
    subtitle: 'Multi-Stage Paint Prep & Multi-Year 9H Nano Armor',
    price: 695,
    originalPrice: 850,
    duration: '1 – 2 Days',
    warranty: 'Certified Multi-Year Warranty',
    serviceType: 'Certified 9H Ceramic Specialist',
    includes: [
      'Multi-stage machine paint correction to eliminate swirls and imperfections',
      'Certified 9H Nano-Ceramic Coating applied to all exterior painted panels',
      'Wheel faces ceramic coated against corrosive brake dust and road grime',
      'Hydrophobic glass rain shield applied to windshield and all side windows',
      'Plastic trim ceramic restoration to prevent sun fading and chalking',
      'Official documentation and maintenance care guide'
    ],
    perfectFor: 'New luxury vehicles, sports cars, and owners seeking permanent hydrophobic mirror reflections.'
  }
];

export const ADDONS_DATA: AddOnOption[] = [
  {
    id: 'headlight-restore-addon',
    name: 'Headlight Restoration (Both Lenses)',
    price: 75,
    description: 'Multi-stage wet sanding and UV clear seal restoring yellowed cloudy lenses to crystal clarity.'
  },
  {
    id: 'engine-bay-detail',
    name: 'Engine Bay Steam Clean & Dress',
    price: 85,
    description: 'Safe pressurized dry-steam degreasing and non-greasy satin protective dressing.'
  },
  {
    id: 'ozone-odor-treatment',
    name: 'Ozone Biological Odor Neutralization',
    price: 75,
    description: 'Deep gaseous ozone cycle neutralizing stubborn smoke, pet, and mildew odors at the source.'
  },
  {
    id: 'glass-rain-shield',
    name: 'Hydrophobic Glass Rain Shield (All Windows)',
    price: 65,
    description: 'Extreme water repellency so rain beads and blows right off your glass while driving.'
  },
  {
    id: 'wheel-ceramic',
    name: 'Wheels & Calipers Ceramic Coating',
    price: 125,
    description: 'Prevents corrosive brake dust accumulation and makes wheel washing completely effortless.'
  },
  {
    id: 'leather-conditioner',
    name: 'Deep Leather Cleansing & Conditioning',
    price: 60,
    description: 'Gently cleans pores and applies rich conditioner to prevent leather cracking and drying.'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Anthony Mancuso',
    location: 'Throggs Neck, Bronx, NY',
    vehicle: 'BMW M3 Competition',
    service: 'Paint Correction & Ceramic Coating',
    rating: 5,
    date: '3 days ago',
    comment: 'Zephyr Auto Spa on Brinsmade Ave did an unbelievable job on my M3. The paint had swirl marks from previous automated washes. They completely removed every imperfection and applied the 9H ceramic coating. The car looks like a glass mirror!',
    verified: true,
    highlight: 'Flawless paint correction & mirror ceramic shine'
  },
  {
    id: 'rev-2',
    author: 'Maria Rodriguez',
    location: 'Pelham Bay, Bronx, NY',
    vehicle: 'Honda Pilot Touring',
    service: 'Complete Auto Detail & Interior Deep Clean',
    rating: 5,
    date: '1 week ago',
    comment: 'With 3 kids and a dog, our SUV interior was a disaster. Called (347) 780-5287 and brought it over to 233 Brinsmade Ave. When I picked it up, it literally smelled and looked brand new. Heated steam extraction worked miracles on the seats.',
    verified: true,
    highlight: 'Heated extraction got every stain out'
  },
  {
    id: 'rev-3',
    author: 'Derrick Washington',
    location: 'Country Club, Bronx, NY',
    vehicle: 'Mercedes-Benz E350',
    service: 'Professional Hand Wash & Headlight Restoration',
    rating: 5,
    date: '2 weeks ago',
    comment: 'My headlights were foggy and yellowed. Zephyr Auto Spa restored them back to 100% crystal clarity and gave the car a fantastic scratch-free hand wash. Quick turnaround and very professional staff.',
    verified: true,
    highlight: 'Headlights look brand new & great hand wash'
  },
  {
    id: 'rev-4',
    author: 'Gianna Rossi',
    location: 'City Island, Bronx, NY',
    vehicle: 'Jeep Grand Cherokee',
    service: 'Complete Auto Detailing & Interior Deep Clean',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Super easy booking by calling (347) 780-5287. Dropped off my Jeep at 233 Brinsmade Ave in the morning and picked it up sparkling clean inside and out. The leather feels soft and looks matte factory fresh.',
    verified: true,
    highlight: 'Top notch detailing shop in the Bronx'
  },
  {
    id: 'rev-5',
    author: 'Carlos Mendez',
    location: 'Morris Park, Bronx, NY',
    vehicle: 'Audi S5 Sportback',
    service: 'Ceramic Coating Protection & Paint Correction',
    rating: 5,
    date: '1 month ago',
    comment: 'The quality of craftsmanship at Zephyr Auto Spa is second to none in NYC. Transparent pricing, high attention to detail, and genuine care for the vehicle. Highly recommend to any car enthusiast.',
    verified: true,
    highlight: 'Second to none in NYC'
  },
  {
    id: 'rev-6',
    author: 'Michael O\'Connor',
    location: 'Riverdale, Bronx, NY',
    vehicle: 'Porsche Macan GTS',
    service: 'Professional Hand Wash & Tire Dressing',
    rating: 5,
    date: '1 month ago',
    comment: 'Best hand wash in the Bronx. No swirls, perfect tire dressing that doesn\'t sling all over the paint, and clean rims inside and out. Zephyr Auto Spa is my permanent detailing spot.',
    verified: true,
    highlight: 'Best hand wash in the Bronx'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'Where is Zephyr Auto Spa located and what are your operating hours?',
    answer: 'Zephyr Auto Spa is conveniently located at 233 Brinsmade Ave, Bronx, NY 10465 (serving Throggs Neck, Pelham Bay, Country Club, and the greater NYC area). Our hours are Monday through Friday from 7:30 AM to 4:30 PM, Saturday from 9:00 AM to 4:00 PM, and we are closed on Sunday.'
  },
  {
    id: 'faq-2',
    category: 'booking',
    question: 'How do I book an appointment or get a quote?',
    answer: 'You can easily call us at (347) 780-5287 for immediate scheduling, questions, or vehicle consultations. You can also use the Instant Quote Builder on this website to select your package, calculate pricing based on your vehicle size, and reserve your spot.'
  },
  {
    id: 'faq-3',
    category: 'services',
    question: 'What is included in the Complete Auto Detailing & Interior Deep Clean?',
    answer: 'Our Complete Auto Detailing includes deep hot-water shampoo extraction on carpets and seats, dry-vapor steam sanitization of HVAC vents and crevices, pH-balanced leather conditioning, full 2-bucket foam hand wash, paint clay bar decontamination, machine gloss sealant, and tire dressing.'
  },
  {
    id: 'faq-4',
    category: 'paint',
    question: 'What is the difference between Paint Correction and Ceramic Coating?',
    answer: 'Paint correction is the mechanical process of leveling clear coat to eliminate swirl marks, scratches, and haze. Ceramic coating is the protective shield applied afterward to chemically seal the restored paint with a 9H sacrificial barrier, providing years of UV resistance, intense water beading, and high gloss.'
  },
  {
    id: 'faq-5',
    category: 'headlights',
    question: 'How does Headlight Restoration work and how long does it last?',
    answer: 'We use a multi-stage precision wet sanding process (1000, 2000, 3000 grit) to shave off the yellowed, oxidized clear coat, followed by machine compounding and polishing. We then apply an authentic UV-blocking ceramic sealant that prevents future oxidation for over a year.'
  },
  {
    id: 'faq-6',
    category: 'hand-wash',
    question: 'Why choose your Professional Hand Wash over automated car washes?',
    answer: 'Automated car washes use harsh rotating brushes that hold sand and debris from previous cars, leaving micro-scratches and spiderwebs on your paint. At Zephyr Auto Spa, we exclusively use two-bucket grit-guard hand washes with plush microfiber mitts, filtered water, and warm air blow-drying to ensure 100% swirl-free results.'
  }
];

export const STYLE_GUIDE_DATA = {
  themeName: "Zephyr Auto Spa Precision Detailing Aesthetic",
  conceptOverview: "High-contrast dark obsidian canvas with vibrant electric amber and cyber gold accents, highlighting high-quality auto detailing at 233 Brinsmade Ave in the Bronx.",
  colors: [
    { name: "Obsidian Carbon (Canvas)", hex: "#090B10", role: "Primary background providing high contrast and deep luxury depth" },
    { name: "Graphite Surface", hex: "#121620", role: "Component cards, elevated containers, and structural panels" },
    { name: "Electric Amber (CTA Accent)", hex: "#F59E0B", role: "Primary conversion trigger, badges, star ratings, and active highlights" },
    { name: "Molten Gold Glow", hex: "#D97706", role: "Glow gradients, hover states, and accent borders" },
    { name: "Precision Cyan", hex: "#38BDF8", role: "Technical callouts, wash specs, and ceramic metrics" },
    { name: "Pure Platinum", hex: "#F8FAFC", role: "High-legibility primary display headlines and badges" },
    { name: "Muted Steel", hex: "#94A3B8", role: "Secondary labels, technical specs, and body descriptions" }
  ],
  typography: {
    displayHeading: "Outfit / Space Grotesk (700/800 Bold)",
    technicalMonospace: "Space Grotesk (500 Medium) with tabular figures",
    body: "Plus Jakarta Sans (400 Regular / 500 Medium) for crisp 16px+ baseline readability"
  },
  heroConcept: {
    headline: "Zephyr Auto Spa | Bronx, NY",
    subheadline: "High-Quality Auto Detailing at 233 Brinsmade Ave in the Bronx.",
    primaryCta: "CALL NOW: (347) 780-5287",
    secondaryCta: "BOOK APPOINTMENT",
    visualStyle: "Luxury high-gloss supercar, precision detailing badges, and 4.9★ verified Bronx customer ratings."
  },
  wireframeSections: [
    { number: "01", name: "Global Header & Status Bar", purpose: "Persistent trust signals (4.9★, 233 Brinsmade Ave Bronx, instant phone call (347) 780-5287)" },
    { number: "02", name: "Hero Showcase & Performance Typography", purpose: "Zephyr Auto Spa headline emphasizing high-quality detailing at 233 Brinsmade Ave in the Bronx" },
    { number: "03", name: "Core Services Breakdown (5 Disciplines)", purpose: "Complete Detail & Deep Clean, Hand Wash & Shine, Paint Correction, Ceramic Coating, Headlight Restoration & Tire Dressing" },
    { number: "04", name: "Interactive Pricing & Package Matrix", purpose: "Clear transparent pricing tiers with vehicle size adjustments" },
    { number: "05", name: "Live Quote & Multi-Step Booking Builder", purpose: "High-conversion lead capture and instant estimated quote calculator" },
    { number: "06", name: "Verified Customer Reviews (128+ Reviews)", purpose: "Social proof with Bronx, Throggs Neck & Pelham Bay authenticity (4.9 / 5.0)" },
    { number: "07", name: "Interactive FAQ Accordion", purpose: "Answers for operating hours, location, hand wash, ceramic coating, and paint correction" },
    { number: "08", name: "Bronx Facility & Contact Section", purpose: "233 Brinsmade Ave, operating hours, Google directions, and direct phone dial (347) 780-5287" }
  ]
};
