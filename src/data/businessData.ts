import { VehicleOption, ServiceDetail, PackageTier, AddOnOption, ReviewItem, FaqItem } from '../types';
import engineBayCleaningImg from '../assets/images/engine_bay_cleaning_1787210678628.jpg';
import ceramicApplicatorImg from '../assets/images/ceramic_applicator_hood_1787210837591.jpg';
import luxuryInteriorImg from '../assets/images/luxury_interior_clean_1787211008247.jpg';

export const BUSINESS_INFO = {
  name: "RetroClean Detailing - Bayside",
  fullName: "RetroClean Detailing - Bayside",
  tagline: "Premium Mobile Auto Detailing in Bayside, Queens & Long Island — We Bring Water & Power to You",
  address: "32-24 Corporal Kennedy St, Bayside, NY 11361 (Serving Queens & Long Island - Fully Mobile with Water & Power)",
  addressShort: "32-24 Corporal Kennedy St, Bayside, NY",
  serviceLocationNote: "Serving Queens & Long Island - Fully Mobile with Water & Power",
  phone: "(347) 494-0646",
  phoneRaw: "3474940646",
  email: "info@retrocleandetailing.com",
  rating: 4.9,
  reviewCount: 118,
  hours: {
    weekdays: "Mon-Sat: 8:00 AM - 6:00 PM",
    saturday: "Mon-Sat: 8:00 AM - 6:00 PM",
    sunday: "Closed (Sunday Appointments Available by Request)"
  },
  serviceAreas: [
    "Bayside",
    "Queens",
    "Long Island (Nassau & Western Suffolk)",
    "Whitestone",
    "Flushing",
    "Little Neck",
    "Douglaston",
    "Great Neck",
    "Manhasset",
    "Garden City"
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
    id: 'mobile-auto-detail',
    title: 'Premium Mobile Auto Detailing (Full Interior & Exterior Reset)',
    badge: '100% Fully Mobile • Water & Power Onboard',
    shortDesc: 'Complete interior deep reset, hot-vapor steam sanitization, gentle 2-bucket exterior hand wash, clay decontamination, and paint sealant.',
    fullDesc: 'We bring our specialized mobile detailing rig directly to your home or office in Bayside, Queens, or Long Island. Equipped with our own ultra-pure deionized water tank and whisper-quiet power generators, we perform a concours-level full interior and exterior reset with zero hookups required from you.',
    startingPrice: 195,
    duration: '3.5 – 5 Hours',
    popular: true,
    features: [
      'Self-contained mobile setup: We provide 100% of water & electric power',
      'Gentle 2-bucket foam hand wash & spot-free deionized water rinse',
      'Paint clay bar decontamination & synthetic polymer gloss sealant',
      'Full cabin dry-vapor steam sanitization & deep crevices detailing',
      'Hot-water carpet & seat extraction plus leather cleaning & UV shield'
    ],
    specs: [
      { label: 'Convenience', value: '100% Mobile at Your Door' },
      { label: 'Water & Power', value: 'Fully Self-Sufficient' },
      { label: 'Reset Level', value: 'Showroom Interior & Exterior' }
    ],
    idealFor: 'Busy car owners across Bayside, Queens, and Long Island who demand showroom-condition detailing without leaving their driveway or desk.',
    imageUrl: luxuryInteriorImg
  },
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating & Long-Term Paint Protection',
    badge: 'Years of Hydrophobic Mirror Shield',
    shortDesc: 'Precision machine paint correction eliminating swirl marks and scratches, sealed with authentic multi-year 9H nano-ceramic chemical armor.',
    fullDesc: 'Defend your vehicle against harsh Northeast road salt, acid rain, bird droppings, and UV clear-coat oxidation. Our certified technicians perform multi-stage paint correction to remove 85%–95%+ of paint defects before locking in a permanent 9H ceramic bond with extreme self-cleaning water beading.',
    startingPrice: 695,
    duration: '1 – 2 Days',
    popular: true,
    features: [
      'Ultrasonic paint depth analysis and multi-panel defect mapping',
      'Dual-action rotary machine compounding to eliminate swirl marks',
      'Professional-grade 9H nano-ceramic molecular covalent bond',
      'Extreme 115°+ hydrophobic water-beading & stain rejection',
      'Multi-year written warranty & Carfax registered vehicle protection'
    ],
    specs: [
      { label: 'Correction', value: 'Up to 90%–95%+ Swirl Removal' },
      { label: 'Hardness', value: 'Certified 9H Nano-Ceramic' },
      { label: 'Protection Life', value: '3 to 5+ Years Durability' }
    ],
    idealFor: 'New vehicle protection, sports cars, daily commuters facing Queens/Long Island traffic, and enthusiasts seeking eternal high gloss.',
    imageUrl: ceramicApplicatorImg
  },
  {
    id: 'tint-and-wraps',
    title: 'Window Tinting & Vehicle Wraps',
    badge: 'Heat Rejection & Custom Aesthetics',
    shortDesc: 'Computer-cut nano-ceramic window films rejecting up to 99% UV rays and infrared heat, alongside custom color change wraps and chrome deletes.',
    fullDesc: 'Upgrade your vehicle cabin comfort and exterior styling. Our premium nano-ceramic window tint films reject scorching solar heat and blinding glare while shielding your leather from UV degradation. We also specialize in bespoke vinyl accents, roof wraps, and blackout chrome deletes.',
    startingPrice: 220,
    duration: '2 – 4 Hours',
    features: [
      'Premium nano-ceramic films with up to 99% UV & 85%+ IR heat rejection',
      'Computer-cut precision plot templates (zero razor blades on vehicle glass)',
      'Single-piece rear glass installation without unsightly seams or bubbles',
      'High-grade cast vinyl for roof wraps, accents, and chrome deletes',
      'Lifetime manufacturer warranty against bubbling, fading, or peeling'
    ],
    specs: [
      { label: 'Heat Rejection', value: 'Up to 99% UV / 85%+ IR' },
      { label: 'Cutting Method', value: 'Digital CAD Computer Plotted' },
      { label: 'Warranty', value: 'Lifetime Film Warranty' }
    ],
    idealFor: 'Drivers wanting cooler summer cabin temperatures, privacy, glare reduction, and custom aesthetic transformations.',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'recurring-care-plans',
    title: 'Recurring Car Care Plans',
    badge: 'Hassle-Free Maintenance Memberships',
    shortDesc: 'Bi-weekly or monthly mobile maintenance visits to ensure your vehicle stays permanently immaculate without thinking about it.',
    fullDesc: 'Maintain that freshly detailed showroom aura all year long. Our recurring car care memberships offer discounted routine mobile maintenance washes, interior decontamination, hydrophobic top-up sprays, and priority scheduling dispatched straight to your driveway or workplace.',
    startingPrice: 95,
    duration: '1.5 Hours / Visit',
    popular: true,
    features: [
      'Scheduled bi-weekly or monthly mobile detailing at your convenience',
      'Gentle deionized hand wash & synthetic spray sealant top-up',
      'Full interior vacuum, dash wipe-down, and leather nourishment',
      'Wheels, tires, brake dust decontamination & satin tire dress',
      'Priority emergency call-out slots and members-only discount rates'
    ],
    specs: [
      { label: 'Cadence', value: 'Bi-Weekly or Monthly' },
      { label: 'Savings', value: 'Up to 30% Off Regular Rates' },
      { label: 'Convenience', value: 'Automated Priority Booking' }
    ],
    idealFor: 'Professionals, families, and busy enthusiasts who desire clean, protected cars year-round with effortless automated scheduling.',
    imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'stain-odor-engine',
    title: 'Stain Extraction, Odor Neutralization & Engine Bay Detail',
    badge: 'Clinical Sanitization & Mechanical Care',
    shortDesc: 'Deep commercial hot-water carpet extraction, ozone biological odor neutralizer, and safe pressurized dry-vapor engine bay detailing.',
    fullDesc: 'Eliminate stubborn coffee spills, salt buildup, pet odors, smoke residue, and engine compartment grime. We employ commercial heated injection extractors, medical-grade ozone treatments that destroy odor-causing bacteria at the molecular level, and safe steam degreasing of your engine bay.',
    startingPrice: 150,
    duration: '2 – 3 Hours',
    features: [
      'High-temp commercial hot-water injection carpet and seat extraction',
      'Ozone generator & enzyme treatment to neutralize smoke and pet odors',
      'Pressurized dry-steam degreasing safely cleans engine bay grease and grime',
      'Sensitive electronics, alternator, and air intakes masked and protected',
      'Non-greasy satin silicone-free protective dressing on all engine hoses & covers'
    ],
    specs: [
      { label: 'Odor Removal', value: 'Molecular Ozone & Enzyme' },
      { label: 'Stain Removal', value: 'High-Temp Heated Extraction' },
      { label: 'Engine Bay', value: 'Pressurized Dry Steam' }
    ],
    idealFor: 'Vehicles with stubborn interior stains, unpleasant odors, pre-sale preparations, or neglected engine compartments.',
    imageUrl: engineBayCleaningImg
  }
];

export const PACKAGES_DATA: PackageTier[] = [
  {
    id: 'recurring-plan',
    name: 'Recurring Mobile Car Care Plan',
    subtitle: 'Scheduled Bi-Weekly or Monthly Mobile Maintenance',
    price: 95,
    originalPrice: 135,
    duration: '1.5 Hours / Visit',
    warranty: 'Continuous Perfection Guarantee',
    serviceType: 'Mobile Dispatch to You',
    includes: [
      'Self-contained mobile visit: we bring 100% water & power',
      'Deionized spot-free foam hand wash & synthetic gloss spray sealant',
      'Interior vacuum, dashboard sanitization, and console wipe-down',
      'Brake dust wheel scrub, tire dressing & streak-free crystal windows',
      'Priority automated appointment booking for members'
    ],
    perfectFor: 'Bayside & Long Island drivers wanting their vehicle consistently immaculate without lifting a finger.'
  },
  {
    id: 'signature-mobile-reset',
    name: 'Premium Mobile Detail (Full Reset)',
    subtitle: 'Comprehensive Interior & Exterior Transformation',
    price: 249,
    originalPrice: 299,
    duration: '3.5 – 5 Hours',
    warranty: '100% Reset Guarantee',
    popular: true,
    bestValue: true,
    serviceType: 'Mobile Unit (Water & Power Onboard)',
    includes: [
      'Full mobile rig arrives with pure deionized water & electric generator',
      'Gentle foam hand wash, iron decontamination & paint clay bar',
      'Deep hot-water carpet & upholstery stain extraction',
      'Pressurized interior dry-vapor steam sanitization & crevice detail',
      'pH-balanced leather conditioning and matte UV dashboard barrier',
      'Single-stage machine polish enhancement for deep exterior gloss'
    ],
    perfectFor: 'Vehicles needing a complete reset, seasonal rejuvenation, or deep interior sanitization at your doorstep.'
  },
  {
    id: 'stain-odor-engine-pkg',
    name: 'Stain, Odor & Engine Restoration',
    subtitle: 'Heated Extraction, Ozone Treatment & Engine Bay Detail',
    price: 340,
    originalPrice: 395,
    duration: '3 – 4 Hours',
    warranty: 'Freshness & Clarity Guarantee',
    serviceType: 'Mobile or Studio Service',
    includes: [
      'High-temp commercial hot-water injection extraction on all seats & carpets',
      'Medical-grade ozone biological odor neutralization (smoke, pet, spills)',
      'Engine bay pressurized dry-vapor steam degrease & satin protective dress',
      'Headlight clarity wet-sand polish & durable UV clear sealant',
      'Full exterior hand wash and spot-free blow dry'
    ],
    perfectFor: 'Severe interior stains, tough odor elimination, engine bay detailing, or pre-sale vehicle prep.'
  },
  {
    id: 'ceramic-armor-pkg',
    name: 'RetroClean Ceramic & Paint Armor',
    subtitle: 'Multi-Stage Paint Correction & Multi-Year 9H Nano Armor',
    price: 795,
    originalPrice: 995,
    duration: '1 – 2 Days',
    warranty: 'Certified Multi-Year Warranty',
    serviceType: 'Certified Specialist Care',
    includes: [
      'Multi-Stage Paint Correction (Removing 90%–95%+ swirls and clear coat scratches)',
      'Certified 9H Nano-Ceramic Coating applied to all exterior painted panels',
      'Wheel faces ceramic coated against corrosive brake dust and road grime',
      'Hydrophobic glass rain shield applied to windshield and all side windows',
      'Plastic trim ceramic restoration to prevent sun fading and chalking',
      'Carfax documented warranty certificate'
    ],
    perfectFor: 'New luxury vehicles, sports cars, and owners seeking permanent hydrophobic mirror reflections.'
  }
];

export const ADDONS_DATA: AddOnOption[] = [
  {
    id: 'ceramic-tint-addon',
    name: 'Nano-Ceramic Window Tint Upgrade',
    price: 195,
    description: 'Computer-cut ceramic tint with up to 99% UV and 85%+ infrared solar heat rejection.'
  },
  {
    id: 'engine-bay-detail',
    name: 'Engine Bay Steam Clean & Dress',
    price: 90,
    description: 'Safe pressurized dry-steam degreasing and non-greasy satin protective dressing.'
  },
  {
    id: 'ozone-odor-treatment',
    name: 'Ozone Biological Odor Neutralization',
    price: 85,
    description: 'Deep gaseous ozone cycle neutralizing stubborn smoke, pet, and mildew odors at the source.'
  },
  {
    id: 'vinyl-chrome-delete',
    name: 'Chrome Delete / Vinyl Accent Wrap',
    price: 160,
    description: 'Sleek gloss or satin black vinyl overlay on window trim, mirrors, or front grille.'
  },
  {
    id: 'wheel-ceramic',
    name: 'Wheels & Calipers Ceramic Coating',
    price: 140,
    description: 'Prevents corrosive brake dust accumulation and makes wheel washing completely effortless.'
  },
  {
    id: 'glass-rain-shield',
    name: 'Hydrophobic Glass Rain Shield (All Windows)',
    price: 80,
    description: 'Extreme water repellency so rain beads and blows right off your glass while driving.'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Mark Goldstein',
    location: 'Bayside, Queens, NY',
    vehicle: 'Porsche 911 Carrera 4S',
    service: 'Premium Mobile Detail & Ceramic Coating',
    rating: 5,
    date: '3 days ago',
    comment: 'RetroClean Detailing came right to my driveway in Bayside. They literally bring their own water and power in their mobile unit! My Porsche looks 100 times better than when I picked it up from the dealership. The paint correction and ceramic shine is unreal.',
    verified: true,
    highlight: 'Brought water & power — incredible results'
  },
  {
    id: 'rev-2',
    author: 'Jessica Chen',
    location: 'Great Neck, Long Island',
    vehicle: 'Tesla Model X',
    service: 'Recurring Mobile Car Care Plan',
    rating: 5,
    date: '1 week ago',
    comment: 'I signed up for their recurring car care plan for our family Tesla. Having them show up once a month at our home in Long Island with zero hassle has been a game-changer. Calling or texting (347) 494-0646 makes scheduling so quick!',
    verified: true,
    highlight: 'Best mobile detailing service in Long Island'
  },
  {
    id: 'rev-3',
    author: 'David R.',
    location: 'Whitestone, Queens, NY',
    vehicle: 'BMW M4 Competition',
    service: 'Window Tinting & Full Reset Detail',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Got the ceramic window tint and full interior/exterior reset done by RetroClean. The computer cut on the tint is flawless without any bubbles. The cabin stays so much cooler in the sun. Super friendly and punctual team.',
    verified: true,
    highlight: 'Flawless ceramic tint & interior reset'
  },
  {
    id: 'rev-4',
    author: 'Robert Morano',
    location: 'Manhasset, NY',
    vehicle: 'Mercedes-Benz GLS 450',
    service: 'Stain Extraction & Odor Neutralization',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Our kids had spilled juice and milk on the back carpets that smelled awful after sitting in the heat. RetroClean performed high-temp extraction and an ozone treatment. The smell is 100% gone and the carpets look brand new. Cannot recommend them enough!',
    verified: true,
    highlight: 'Tough stains and smells completely gone'
  },
  {
    id: 'rev-5',
    author: 'Stephanie V.',
    location: 'Bayside, NY',
    vehicle: 'Audi Q7 Prestige',
    service: 'Full Mobile Auto Detailing',
    rating: 5,
    date: '1 month ago',
    comment: 'Texted them at (347) 494-0646 to book a mobile detail before a family trip. They arrived on time with everything self-contained. The attention to detail around the vents, seams, and wheels was remarkable.',
    verified: true,
    highlight: 'Super fast text booking & meticulous detail'
  },
  {
    id: 'rev-6',
    author: 'Kevin Gallagher',
    location: 'Flushing, Queens, NY',
    vehicle: 'Corvette C8 Stingray',
    service: 'Ceramic Coating & Engine Bay Detail',
    rating: 5,
    date: '1 month ago',
    comment: 'The dry steam clean on my engine bay and the multi-year ceramic coating on my C8 turned out spectacular. They know high-end cars inside and out. RetroClean is definitely my go-to mobile detailer in Queens.',
    verified: true,
    highlight: 'Engine bay and paint look immaculate'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'How does RetroClean Mobile Detailing work, and do I need to supply water or power?',
    answer: 'No! Our mobile detailing units are 100% self-contained. We bring our own high-capacity spot-free deionized water tanks and whisper-quiet onboard generators. Whether you live in a house in Bayside or work at an office in Queens or Long Island, we can detail your vehicle right on site with zero hookups required.'
  },
  {
    id: 'faq-2',
    category: 'booking',
    question: 'How do I book an appointment or request service?',
    answer: 'You can easily call or text us at (347) 494-0646 to book your appointment, discuss your vehicle, or ask any questions. You can also use the Instant Quote Builder on this website to customize your package and lock in your preferred date.'
  },
  {
    id: 'faq-3',
    category: 'service-areas',
    question: 'What areas do you serve?',
    answer: 'We are based at 32-24 Corporal Kennedy St in Bayside, NY 11361, and proudly serve all of Bayside, Queens, and Long Island (Nassau County and western Suffolk County), including Whitestone, Flushing, Douglaston, Little Neck, Great Neck, Manhasset, and Garden City.'
  },
  {
    id: 'faq-4',
    category: 'ceramic',
    question: 'What are the benefits of Ceramic Coating and Paint Protection?',
    answer: 'Our professional 9H nano-ceramic coatings chemically bond to your vehicle clear coat to create an ultra-durable, hydrophobic barrier. It shields your paint from harsh winter road salts, bird drop etchings, UV oxidation, and road chemicals, while providing an intense mirror gloss that makes future washing effortless.'
  },
  {
    id: 'faq-5',
    category: 'plans',
    question: 'How do the Recurring Car Care Plans work?',
    answer: 'Our recurring plans provide hassle-free bi-weekly or monthly mobile detailing at your home or office. Members receive scheduled priority time slots, discounted rates, continuous paint sealant protection, and a consistently pristine vehicle year-round.'
  },
  {
    id: 'faq-6',
    category: 'tinting',
    question: 'What type of window tinting and wrap services do you offer?',
    answer: 'We install high-performance nano-ceramic window films computer-cut to your exact vehicle specs, blocking up to 99% of damaging UV rays and significant infrared solar heat. We also offer custom vinyl accent wraps, roof wraps, and chrome delete packages.'
  }
];

export const STYLE_GUIDE_DATA = {
  themeName: "RetroClean Detailing - Bayside Luxury Mobile Aesthetic",
  conceptOverview: "High-contrast dark obsidian canvas with vibrant electric amber and cyber gold accents, highlighting precision mobile auto detailing, ceramic protection, and seamless text/call scheduling.",
  colors: [
    { name: "Obsidian Carbon (Canvas)", hex: "#090B10", role: "Primary background providing high contrast and deep luxury depth" },
    { name: "Graphite Surface", hex: "#121620", role: "Component cards, elevated containers, and structural panels" },
    { name: "Electric Amber (CTA Accent)", hex: "#F59E0B", role: "Primary conversion trigger, badges, star ratings, and active highlights" },
    { name: "Molten Gold Glow", hex: "#D97706", role: "Glow gradients, hover states, and accent borders" },
    { name: "Precision Cyan", hex: "#38BDF8", role: "Technical callouts, deionized water specs, and ceramic metrics" },
    { name: "Pure Platinum", hex: "#F8FAFC", role: "High-legibility primary display headlines and badges" },
    { name: "Muted Steel", hex: "#94A3B8", role: "Secondary labels, technical specs, and body descriptions" }
  ],
  typography: {
    displayHeading: "Outfit / Space Grotesk (700/800 Bold)",
    technicalMonospace: "Space Grotesk (500 Medium) with tabular figures",
    body: "Plus Jakarta Sans (400 Regular / 500 Medium) for crisp 16px+ baseline readability"
  },
  heroConcept: {
    headline: "RetroClean Detailing - Bayside | Queens & Long Island",
    subheadline: "Premium Mobile Auto Detailing in Bayside, Queens & Long Island — We Bring Water & Power to You.",
    primaryCta: "CALL / TEXT (347) 494-0646",
    secondaryCta: "BOOK APPOINTMENT",
    visualStyle: "Luxury high-gloss supercar, self-contained mobile detailing badges, spot-free deionized water specs, and 4.9★ verified social proof banner."
  },
  wireframeSections: [
    { number: "01", name: "Global Header & Status Bar", purpose: "Persistent trust signals (4.9★, 32-24 Corporal Kennedy St Bayside, instant phone/text dial (347) 494-0646)" },
    { number: "02", name: "Hero Showcase & Performance Typography", purpose: "RetroClean Detailing - Bayside headline emphasizing mobile water & power, with call/text CTAs" },
    { number: "03", name: "Core Services Breakdown (5 Disciplines)", purpose: "Mobile Reset, Ceramic Coating, Window Tint & Wraps, Recurring Plans, Stain/Odor/Engine Bay" },
    { number: "04", name: "Interactive Pricing & Package Matrix", purpose: "Clear transparent pricing tiers with vehicle size adjustments" },
    { number: "05", name: "Live Quote & Multi-Step Booking Builder", purpose: "High-conversion lead capture and instant estimated quote calculator with mobile dispatch address" },
    { number: "06", name: "Verified Customer Reviews (118+ Reviews)", purpose: "Social proof with Bayside, Queens & Long Island authenticity (4.9 / 5.0)" },
    { number: "07", name: "Interactive FAQ Accordion", purpose: "Answers for self-contained mobile water/power, service areas, ceramic, tinting, and recurring care plans" },
    { number: "08", name: "Bayside & Queens/Long Island Contact", purpose: "32-24 Corporal Kennedy St, mobile service area coverage, Google directions, and phone/text dial (347) 494-0646" }
  ]
};
