import { VehicleOption, ServiceDetail, PackageTier, AddOnOption, ReviewItem, FaqItem } from '../types';
import { BUSINESS_CONFIG } from '../config';
import engineBayCleaningImg from '../assets/images/engine_bay_cleaning_1787210678628.jpg';
import ceramicApplicatorImg from '../assets/images/ceramic_applicator_hood_1787210837591.jpg';
import luxuryInteriorImg from '../assets/images/luxury_interior_clean_1787211008247.jpg';

export const BUSINESS_INFO = {
  name: BUSINESS_CONFIG.businessName,
  tagline: `${BUSINESS_CONFIG.location}'s Top-Rated Auto Detailing, Ceramic Coating & Paint Correction`,
  address: `1420 E Walnut St, Suite 104, ${BUSINESS_CONFIG.location} 91106`,
  phone: BUSINESS_CONFIG.ownerPhone.startsWith('+') ? BUSINESS_CONFIG.ownerPhone : `+${BUSINESS_CONFIG.ownerPhone}`,
  phoneRaw: BUSINESS_CONFIG.ownerPhone.replace(/\D/g, ''),
  rating: 4.8,
  reviewCount: 64,
  hours: {
    weekdays: "Monday – Friday: 7:30 AM – 6:30 PM",
    saturday: "Saturday: 8:00 AM – 5:00 PM",
    sunday: "Sunday: By VIP Appointment Only"
  },
  serviceAreas: [
    "Pasadena",
    "San Marino",
    "South Pasadena",
    "Arcadia",
    "La Cañada Flintridge",
    "Glendale",
    "Sierra Madre",
    "Downtown Los Angeles"
  ]
};

export const VEHICLE_OPTIONS: VehicleOption[] = [
  {
    id: 'coupe',
    name: 'Coupe / Sedan',
    category: 'Standard Size',
    multiplier: 1.0,
    iconName: 'Car',
    examples: 'Porsche 911, BMW M3/M4, Tesla Model 3, Corvette C8, Mercedes C-Class'
  },
  {
    id: 'suv',
    name: 'Mid-Size SUV / Crossover',
    category: 'Medium Size (+15%)',
    multiplier: 1.15,
    iconName: 'Shield',
    examples: 'Porsche Macan/Cayenne, Tesla Model Y, BMW X5, Audi Q7, Range Rover Sport'
  },
  {
    id: 'truck',
    name: 'Full-Size SUV / Truck / Van',
    category: 'Large Size (+30%)',
    multiplier: 1.3,
    iconName: 'Truck',
    examples: 'Cadillac Escalade, Mercedes G-Wagon, Ford F-150 Raptor, Rivian R1T/R1S'
  },
  {
    id: 'exotic',
    name: 'Exotic & Supercar',
    category: 'Precision Custom Care (+25%)',
    multiplier: 1.25,
    iconName: 'Sparkles',
    examples: 'Ferrari 458/F8/296, McLaren 720S, Lamborghini Huracán, Aston Martin'
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'paint-correction',
    title: 'Paint Correction & Auto Detailing',
    badge: 'Signature Mastery',
    shortDesc: 'Multi-stage paint correction designed to safely remove up to 80-90% of swirl marks and light defects.',
    fullDesc: 'Using digital paint depth gauges and multi-stage specialized equipment with precision micro-abrasives, we provide the ultimate auto detailing and paint correction service to gently restore clear coat clarity.',
    startingPrice: 450,
    duration: '6 – 10 Hours',
    popular: true,
    features: [
      'Paint thickness ultrasound digital measurement before/after',
      'Decontamination foam bath & ultra-fine clay bar auto detailing',
      'Multi-stage compound & jeweling micro-polish',
      'Reduces spiderwebs, car wash swirls, and clear coat haze',
      'Pre-coating alcohol prep wipe inspection'
    ],
    specs: [
      { label: 'Defect Reduction', value: 'Safely up to 80%–90%' },
      { label: 'Gloss Meter Jump', value: '+35 to +55 GU' },
      { label: 'Equipment', value: 'High-Efficiency Specialized Equipment' }
    ],
    idealFor: 'Vehicles with visible spiderwebs, dull sun haze, track micro-scuffs, or preparing for ceramic shield.',
    imageUrl: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ceramic-coating',
    title: 'Multi-Year Ceramic Coating',
    badge: 'Ultimate Armor',
    shortDesc: 'Professional-grade ceramic surface care solutions offering intense hydrophobic gloss and UV defense.',
    fullDesc: 'Our specialized climate-controlled application creates a durable glassy shell over clear coat, wheels, plastics, and glass. Premium professional ceramic coating sheds rain, brake dust, and road pollutants effortlessly.',
    startingPrice: 850,
    duration: '1 – 2 Days (Cure Bay)',
    popular: true,
    features: [
      'Professional-grade ceramic surface care matrix',
      'Ultra-hydrophobic 115°+ water contact angle bead effect',
      'UV & oxidation protection against California sun fading',
      'Includes service documentation & maintenance care guide',
      'Professional Multi-Stage Paint & Coating Curing Process'
    ],
    specs: [
      { label: 'Protection Lifespan', value: '2 to 7+ Years' },
      { label: 'Surface Protection', value: 'Professional-Grade Surface Defense' },
      { label: 'Maintenance', value: 'Self-Cleaning Hydrophobic' }
    ],
    idealFor: 'New vehicle protection, post-paint correction lock-in, daily luxury drivers and collector sports cars.',
    imageUrl: ceramicApplicatorImg
  },
  {
    id: 'interior-deep-clean',
    title: 'Interior Deep Cleaning & Steam Cleaning',
    badge: 'Sanitized Luxury',
    shortDesc: 'Hospital-grade pressurized steam cleaning, interior deep cleaning, and ozone odor elimination for your vehicle.',
    fullDesc: 'We dismantle seat rails, deep-clean crevices, shampoo and hot-water extract carpets, and utilize professional steam cleaning to condition delicate Nappa leathers, leaving an OEM factory scent.',
    startingPrice: 280,
    duration: '3.5 – 5 Hours',
    features: [
      'Dry-vapor pressurized steam cleaning (220°F kills 99.9% bacteria)',
      'Deep hot-water carpet & fabric seat stain interior deep cleaning',
      'Matte leather cleaning & Swiss-grade conditioning treatment',
      'Air vent duct sterilization & cabin ozone odor neutralization',
      'Zero greasy residue — factory fresh OEM matte finish'
    ],
    specs: [
      { label: 'Bacteria Eradication', value: '99.9% Sanitized' },
      { label: 'Leather Finish', value: 'Original OEM Matte Non-Greasy' },
      { label: 'Steam Temp', value: '220°F Dry Vapor' }
    ],
    idealFor: 'Vehicles needing interior rejuvenation, targeted deep-cleaning treatments, pet hair extraction, or leather restoration.',
    imageUrl: luxuryInteriorImg
  },
  {
    id: 'engine-bay',
    title: 'Engine Bay Detailing & Steam Cleaning',
    badge: 'Mechanical Elegance',
    shortDesc: 'Careful electronic-safe degreasing, dry steam cleaning, and satin thermal dressing for a factory-new engine.',
    fullDesc: 'Sensitive components (ECU, alternator) are securely masked before high-pressure steam cleaning breaks down heavy oil film and road grime, finished with heat-resistant satin polymer dressing.',
    startingPrice: 160,
    duration: '1.5 – 2 Hours',
    features: [
      'Water-sensitive wiring harness & ECU sensor masking',
      'Gentle bio-degradable degreaser agitated with horsehair brushes',
      'Controlled dry vapor steam cleaning rinse (minimal moisture)',
      'Heat-resistant, non-sticky satin plastic & rubber conditioner',
      'Prevents hose dry-rot and electrical dust buildup'
    ],
    specs: [
      { label: 'Safety Protocol', value: 'Masked Sensitive Electronics' },
      { label: 'Dressing Finish', value: 'Premium UV-Protective & Satin Anti-Glare Finish' },
      { label: 'Service Time', value: '90 Minutes' }
    ],
    idealFor: 'Performance sports cars, car show prep, resale appraisal boost, and routine mechanical care.',
    imageUrl: engineBayCleaningImg
  },
  {
    id: 'mobile-detailing',
    title: 'Mobile Auto Detailing Concierge',
    badge: 'Direct to You',
    shortDesc: 'Our fully equipped mobile detailing unit arrives directly at your residence or office for premium mobile auto detailing.',
    fullDesc: 'Our mobile detailing unit comes fully equipped with all professional tools, products, and equipment. Depending on your location and chosen package, access to a standard outdoor water spigot and electrical outlet may be coordinated prior to your service.',
    startingPrice: 220,
    duration: '2 – 4.5 Hours',
    features: [
      'Fully equipped mobile detailing unit with professional-grade supplies',
      'Professional detailing equipment and specialized exterior wash setup',
      'Flexible on-site service across our standard mobile coverage area',
      'Home garage, residential driveway, or corporate executive parking',
      'Same trained detail technicians & supplies as our studio'
    ],
    specs: [
      { label: 'Equipment Setup', value: 'Fully Equipped Mobile Rig' },
      { label: 'Service Range', value: 'Standard Mobile Coverage Area' },
      { label: 'Preparation', value: 'Flexible Water & Power Setup' }
    ],
    idealFor: 'Busy professionals, luxury homeowners, and car enthusiasts who value utmost convenience without compromising standards.',
    imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80'
  }
];

export const PACKAGES_DATA: PackageTier[] = [
  {
    id: 'basic-essential',
    name: 'Basic/Essential Clean',
    subtitle: 'Maintenance & Deep Refresh',
    price: 199,
    originalPrice: 249,
    duration: '2 – 3 Hours',
    warranty: 'Quality Assurance Walk-Around',
    serviceType: 'Mobile or Studio',
    includes: [
      'Professional-grade snow foam bath & gentle contact hand wash',
      'Wheels & brake calipers cleaned',
      'Light synthetic sealant application',
      'Interior vacuum & wipe down',
      'Glass streak-free cleaning',
      'Tire conditioning'
    ],
    perfectFor: 'Monthly maintenance and high-end daily drivers.'
  },
  {
    id: 'deep-detail',
    name: 'Deep Detail & Steam',
    subtitle: 'Flawless Interior & Exterior Refresh',
    price: 499,
    originalPrice: 599,
    duration: '5 – 7 Hours',
    warranty: 'Extended Surface Protection',
    popular: true,
    serviceType: 'Studio Recommended',
    includes: [
      'All Basic/Essential Clean steps included',
      'Clay bar physical paint decontamination',
      'Single-Stage Machine Paint Polish',
      'Interior complete deep steam extraction',
      'Leather cleaning & conditioning',
      'High-bonding polymer surface sealant application'
    ],
    perfectFor: 'Vehicles needing a thorough refresh and paint enhancement.'
  },
  {
    id: 'ultimate-ceramic',
    name: 'Ultimate Ceramic & Protection',
    subtitle: 'Permanent Nano Armor & Hydrophobic Shine',
    price: 1290,
    originalPrice: 1490,
    duration: '1.5 Days (Cure Bay)',
    warranty: 'Multi-Year Quality Commitment',
    bestValue: true,
    serviceType: 'Studio Required (IR Baking)',
    includes: [
      'Full Multi-Stage Paint Correction',
      'Multi-layer professional-grade ceramic protective application',
      'Wheel faces ceramic coat protection',
      'Windshield hydrophobic rain-repellent shield',
      'Plastic trim & rubber ceramic restoration',
      'Full interior deep clean & stain guard',
      'Professional multi-stage curing & complete service documentation'
    ],
    perfectFor: 'New cars, luxury exotics, and maximum long-term protection.'
  }
];

export const ADDONS_DATA: AddOnOption[] = [
  {
    id: 'wheel-ceramic',
    name: 'Wheels Ceramic Coating (Face & Calipers)',
    price: 180,
    description: 'Prevents corrosive brake dust buildup and makes wheel washing effortless.'
  },
  {
    id: 'glass-ceramic',
    name: 'Hydrophobic Glass Rain Shield (All Windows)',
    price: 120,
    description: 'Extreme water repellency; raindrops fly off at 35+ mph without wipers.'
  },
  {
    id: 'leather-ceramic',
    name: 'Interior Nappa Leather Ceramic Protection',
    price: 160,
    description: 'Prevents dye transfer from blue jeans, UV cracking, and liquid spills.'
  },
  {
    id: 'headlight-resto',
    name: 'Headlight Wet-Sand & UV Clear Coat Restoration',
    price: 110,
    description: 'Restores yellowed, hazy polycarbonate headlights back to clear optical brilliance.'
  },
  {
    id: 'engine-add',
    name: 'Engine Bay Steam Clean & Satin Dressing',
    price: 140,
    description: 'Electronic-safe degreasing and dry-vapor detailing under the hood.'
  },
  {
    id: 'pet-hair-ozone',
    name: 'Heavy Pet Hair Extraction + Ozone Sanitizer',
    price: 95,
    description: 'Micro-hair needle extraction tool and 30-min O3 medical odor neutralizer.'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Marcus Vance',
    location: 'San Marino, CA',
    vehicle: 'Porsche 911 GT3 (992)',
    service: 'Apex 5-Year Ceramic Shield & Paint Correction',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Took my GT3 to Apex after getting swirls from a previous dealership wash. The level of detail here is obsessive. The carbon roof and paint look deeper than when it rolled off the showroom floor in Stuttgart. Best detailing studio by far.',
    verified: true,
    highlight: 'Deeper than showroom delivery'
  },
  {
    id: 'rev-2',
    author: 'Elena Rostova',
    location: 'Pasadena, CA (Old Town)',
    vehicle: 'Tesla Model S Plaid',
    service: 'Mobile Detailing Concierge Unit',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Outstanding experience from start to finish. The service was punctual, professional, and delivered incredible results right at my doorstep. My interior looks and smells like new—every detail was handled with precision.',
    verified: true,
    highlight: 'Outstanding mobile detailing experience'
  },
  {
    id: 'rev-3',
    author: 'David Chen',
    location: 'Arcadia, CA',
    vehicle: 'BMW M3 Competition (Isle of Man Green)',
    service: 'Signature Paint Correction & 2-Year Ceramic',
    rating: 5,
    date: '1 month ago',
    comment: 'Under the LED inspection lights, the vast majority of hairline scratches and swirls were gone. Water literally falls off the hood now. Very honest pricing and expert craftsmanship. Will be bringing my wife’s car next month.',
    verified: true,
    highlight: 'Under LED lights it was flawless'
  },
  {
    id: 'rev-4',
    author: 'Robert K.',
    location: 'La Cañada Flintridge, CA',
    vehicle: 'Mercedes-Benz G63 AMG',
    service: 'Concourse Apex Bespoke & Engine Bay Detail',
    rating: 5,
    date: '1 month ago',
    comment: 'The G-Wagon is a monster to clean with all the square edges. Apex treated it with total precision. Engine bay was spotless, wheel calipers coated, and the durable graphene protection gives me total peace of mind in the SoCal sun.',
    verified: true,
    highlight: 'Treated my vehicle with total precision'
  },
  {
    id: 'rev-5',
    author: 'Sophia Martinez',
    location: 'South Pasadena, CA',
    vehicle: 'Audi RS6 Avant',
    service: 'Interior Deep Clean & Leather Spa',
    rating: 4.8,
    date: '2 months ago',
    comment: 'Kids and dogs had done a number on the back seats. The team did hot-water extraction and restored the Nappa leather without any cheap oily sheen. Clean, matte, and fresh. 10/10 recommend!',
    verified: true,
    highlight: 'Restored Nappa leather to OEM matte'
  },
  {
    id: 'rev-6',
    author: 'Julian Thorne',
    location: 'Glendale, CA',
    vehicle: 'Ferrari 458 Italia',
    service: 'Multi-Stage Paint Correction & Concourse Prep',
    rating: 5,
    date: '2 months ago',
    comment: 'Hard to trust anyone with delicate clear coat, but Apex has experienced detail technicians. The paint depth readings before and after were documented in detail. Simply unmatched professionalism.',
    verified: true,
    highlight: 'Documented paint depth readings'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'ceramic',
    question: 'How long does ceramic coating really last, and is it better than wax?',
    answer: 'Unlike traditional carnauba waxes or synthetic polymer sealants that degrade quickly in the hot California sun, our professional-grade ceramic care solutions create a durable surface bond with your vehicle’s clear coat. They provide extended protection depending on the chosen package, delivering robust chemical resistance, UV protection, and self-cleaning hydrophobic properties.'
  },
  {
    id: 'faq-2',
    category: 'correction',
    question: 'What is the difference between a 1-step and a multi-step paint correction?',
    answer: 'A 1-Step enhancement combines light polishing to boost gloss and reduce light micro-marring, ideal for newer vehicles. Multi-stage paint correction is designed to safely remove up to 80-90% of swirl marks and light defects, followed by a jeweling finishing polish for laser-sharp reflections.'
  },
  {
    id: 'faq-3',
    category: 'mobile',
    question: 'Do I need to provide water or power for the Mobile Detailing service?',
    answer: 'Our mobile detailing unit comes fully equipped with all professional tools, products, and equipment. Depending on your location and chosen package, access to a standard outdoor water spigot and electrical outlet may be coordinated prior to your service.'
  },
  {
    id: 'faq-4',
    category: 'ceramic',
    question: 'Can you detail or ceramic coat my vehicle if it already has Paint Protection Film (PPF)?',
    answer: 'Absolutely. We regularly apply ceramic coatings over PPF (Clear Bra). The ceramic layer enhances the gloss of the film, seals the pores to prevent staining and yellowing from road tar, and adds slick hydrophobic properties that make washing your wrapped vehicle effortless.'
  },
  {
    id: 'faq-5',
    category: 'general',
    question: 'Where is your studio located and do I need an appointment?',
    answer: `Our state-of-the-art detailing studio is located at 1420 E Walnut St, Suite 104, ${BUSINESS_CONFIG.location} 91106. Because we allocate dedicated technician hours and temperature-controlled bays for every car, we operate by appointment. You can book directly through our online quote tool or call us at +${BUSINESS_CONFIG.ownerPhone}.`
  },
  {
    id: 'faq-6',
    category: 'general',
    question: 'What is your quality assurance and service policy?',
    answer: 'Quality Assurance Commitment: Every detail includes a thorough walk-around inspection before handover to ensure your satisfaction. Our ceramic coating installations include complete service documentation and care guidelines to protect your vehicle surface for the long term.'
  }
];

export const STYLE_GUIDE_DATA = {
  themeName: "Obsidian Concourse & Electric Amber",
  conceptOverview: "Synthesizing TurboTweak's dark supercar studio aesthetic, ProAuto's high-conversion clarity, and bold motorsport ceramic branding into a high-converting digital showroom.",
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
    headline: "Concourse-Level Precision for High-Performance Automobiles",
    subheadline: `Multi-stage paint correction designed to safely remove up to 80-90% of swirl marks and light defects, professional-grade ceramic protective care, and bespoke interior restoration — at our climate-controlled ${BUSINESS_CONFIG.location} studio or via our fully equipped mobile unit.`,
    primaryCta: "Calculate Instant Quote & Book",
    secondaryCta: "Explore 5-Year Ceramic Packages",
    visualStyle: "Studio spotlighting on a high-gloss vehicle, interactive technical spec nodes, dynamic before/after paint clarity slider, and 4.8★ Google verified social proof banner."
  },
  wireframeSections: [
    { number: "01", name: "Global Header & Live Status Bar", purpose: "Persistent trust signals (4.8★, studio address, instant phone dial, mobile booking trigger)" },
    { number: "02", name: "Hero Showcase & Technical Spec Nodes", purpose: "Immediate visual impact, value proposition, and instant quote CTA" },
    { number: "03", name: "Interactive Before/After Paint Defect Slider", purpose: "Direct visual proof of swirl reduction vs. refined ceramic gloss" },
    { number: "04", name: "Core Services Breakdown (5 Pillars)", purpose: "Deep dive into Paint Correction, Ceramic Coating, Interior Deep Clean, Engine Bay, and Mobile Van" },
    { number: "05", name: "Interactive Pricing & Package Matrix", purpose: "Clear transparent pricing tiers with vehicle size adjustments and service documentation details" },
    { number: "06", name: "Live Quote & Multi-Step Booking Builder", purpose: "High-conversion lead capture and instant estimated quote calculator" },
    { number: "07", name: "Craftsmanship & Studio Standards", purpose: "Water filtration, high-CRI lighting, specialized equipment, and climate-controlled curing bay" },
    { number: "08", name: "Verified Customer Reviews (64 Reviews)", purpose: "Social proof with real car models and regional local authenticity" },
    { number: "09", name: "Interactive FAQ Accordion", purpose: "Overcoming objections around ceramic longevity, mobile logistics, and PPF compatibility" },
    { number: "10", name: "Studio Map & Direct Contact", purpose: "Physical address, business hours, Google directions, and VIP appointment booking" }
  ]
};
