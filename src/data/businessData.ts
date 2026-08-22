import { VehicleOption, ServiceDetail, PackageTier, AddOnOption, ReviewItem, FaqItem } from '../types';
import engineBayCleaningImg from '../assets/images/engine_bay_cleaning_1787210678628.jpg';
import ceramicApplicatorImg from '../assets/images/ceramic_applicator_hood_1787210837591.jpg';
import luxuryInteriorImg from '../assets/images/luxury_interior_clean_1787211008247.jpg';

export const BUSINESS_INFO = {
  name: "Apex Precision Auto Detailing",
  tagline: "Pasadena's Concourse-Grade Ceramic Coating & Paint Correction Specialists",
  address: "1420 E Walnut St, Suite 104, Pasadena, CA 91106",
  phone: "(626) 555-0184",
  phoneRaw: "6265550184",
  email: "concierge@apexprecisiondetailing.com",
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
    title: 'Paint Correction & Restoration',
    badge: 'Signature Mastery',
    shortDesc: 'Eliminate 85%–99% of swirl marks, buffer holograms, water spots, and micro-scratches for an authentic mirror finish.',
    fullDesc: 'Using digital paint depth gauges and multi-stage rotary/dual-action polishers with precision micro-abrasives, we gently restore clear coat clarity without compromising paint integrity.',
    startingPrice: 450,
    duration: '6 – 10 Hours',
    popular: true,
    features: [
      'Paint thickness ultrasound digital measurement before/after',
      'Decontamination foam bath & ultra-fine clay bar treatment',
      'Multi-stage compound & jeweling micro-polish',
      'Eliminates spiderwebs, car wash swirls, and clear coat haze',
      'Pre-coating alcohol prep wipe inspection'
    ],
    specs: [
      { label: 'Defect Removal', value: 'Up to 95%–99%' },
      { label: 'Gloss Meter Jump', value: '+35 to +55 GU' },
      { label: 'Equipment', value: 'Rupes Bigfoot & Flex Polishers' }
    ],
    idealFor: 'Vehicles with visible spiderwebs, dull sun haze, track micro-scuffs, or preparing for ceramic shield.',
    imageUrl: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ceramic-coating',
    title: 'Multi-Year Ceramic & Graphene Coating',
    badge: 'Ultimate Armor',
    shortDesc: 'Military-grade 9H/10H SiO2 nano-ceramic molecular bond offering intense hydrophobic gloss, UV defense, and chemical barrier.',
    fullDesc: 'Our certified climate-controlled application creates a semi-permanent glassy shell over clear coat, wheels, plastics, and glass. Sheds rain, brake dust, bird droppings, and Pasadena smog pollutants effortlessly.',
    startingPrice: 850,
    duration: '1 – 2 Days (Cure Bay)',
    popular: true,
    features: [
      'Genuine 9H / 10H certified nano-ceramic or graphene matrix',
      'Ultra-hydrophobic 115°+ water contact angle bead effect',
      'UV & oxidation protection against California sun fading',
      'Includes Carfax registration & official warranty certificate',
      'Infrared curing heat-lamp baking cycle'
    ],
    specs: [
      { label: 'Protection Lifespan', value: '2 to 7+ Years' },
      { label: 'Hardness Rating', value: '9H – 10H Ceramic / Graphene' },
      { label: 'Maintenance', value: 'Self-Cleaning Hydrophobic' }
    ],
    idealFor: 'New vehicle protection, post-paint correction lock-in, daily luxury drivers and collector sports cars.',
    imageUrl: ceramicApplicatorImg
  },
  {
    id: 'interior-deep-clean',
    title: 'Interior Deep Clean & Spa Sanitization',
    badge: 'Sanitized Luxury',
    shortDesc: 'Hospital-grade pressurized steam extraction, pH-neutral aniline leather conditioning, and ozone odor elimination.',
    fullDesc: 'We dismantle seat rails, deep-clean crevices, shampoo and hot-water extract carpets, condition delicate Nappa/Alcantara leathers with matte UV blockers, leaving an OEM factory scent.',
    startingPrice: 280,
    duration: '3.5 – 5 Hours',
    features: [
      'Dry-vapor pressurized steam sterilization (220°F kills 99.9% bacteria)',
      'Deep hot-water carpet & fabric seat stain extraction',
      'Matte leather cleaning & Swiss-grade conditioning treatment',
      'Air vent duct sterilization & cabin ozone odor neutralization',
      'Zero greasy residue — factory fresh OEM matte finish'
    ],
    specs: [
      { label: 'Bacteria Eradication', value: '99.9% Sanitized' },
      { label: 'Leather Finish', value: 'Original OEM Matte Non-Greasy' },
      { label: 'Steam Temp', value: '220°F Dry Vapor' }
    ],
    idealFor: 'Vehicles needing interior rejuvenation, coffee/food stain removal, pet hair extraction, or leather restoration.',
    imageUrl: luxuryInteriorImg
  },
  {
    id: 'engine-bay',
    title: 'Engine Bay Detailing & Dressing',
    badge: 'Mechanical Elegance',
    shortDesc: 'Careful electronic-safe degreasing, dry steam cleaning, and satin thermal dressing for a factory-new engine compartment.',
    fullDesc: 'Sensitive components (ECU, alternator, intake) are securely masked before high-pressure micro-steam breaks down heavy oil film, road grime, and salt residue, finished with heat-resistant satin polymer dressing.',
    startingPrice: 160,
    duration: '1.5 – 2 Hours',
    features: [
      'Water-sensitive wiring harness & ECU sensor masking',
      'Gentle bio-degradable degreaser agitated with horsehair brushes',
      'Controlled dry vapor steam rinse (minimal moisture)',
      'Heat-resistant, non-sticky satin plastic & rubber conditioner',
      'Prevents hose dry-rot and electrical dust buildup'
    ],
    specs: [
      { label: 'Safety Protocol', value: '100% Masked Electronics' },
      { label: 'Dressing Finish', value: 'Anti-Static Heat Resistant' },
      { label: 'Service Time', value: '90 Minutes' }
    ],
    idealFor: 'Performance sports cars, car show prep, resale appraisal boost, and routine mechanical care.',
    imageUrl: engineBayCleaningImg
  },
  {
    id: 'mobile-detailing',
    title: 'Mobile Detailing Concierge Unit',
    badge: 'Direct to You',
    shortDesc: 'Our fully equipped Mercedes Sprinter arrives at your Pasadena residence or office with spot-free deionized water and quiet power.',
    fullDesc: 'Experience luxury detailing at zero hassle. Our self-contained mobile van carries 100 gallons of pure 0-PPM deionized water, ultra-quiet generator, and full professional detailing machinery right to your driveway.',
    startingPrice: 220,
    duration: '2 – 4.5 Hours',
    features: [
      'Self-contained with 100% 0-PPM Spot-Free Deionized Water',
      'Eco-friendly on-board quiet inverter generator & compressors',
      'Available across Pasadena, San Marino, Arcadia, and Glendale',
      'Home garage, residential driveway, or corporate executive parking',
      'Same master-grade technicians & chemicals as our studio'
    ],
    specs: [
      { label: 'Water Quality', value: '0 PPM Deionized (Zero Spots)' },
      { label: 'Radius', value: 'Up to 25 Miles from Pasadena' },
      { label: 'Self-Sufficient', value: 'No Water/Power Hookups Needed' }
    ],
    idealFor: 'Busy professionals, luxury homeowners, and car enthusiasts who value utmost convenience without compromising standards.',
    imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80'
  }
];

export const PACKAGES_DATA: PackageTier[] = [
  {
    id: 'essential-detail',
    name: 'Precision Preservation',
    subtitle: 'Maintenance & Deep Refresh',
    price: 249,
    originalPrice: 299,
    duration: '3.5 – 4 Hours',
    warranty: '30-Day Gloss Guarantee',
    serviceType: 'Mobile or Studio',
    includes: [
      'Ph-neutral snow foam bath & 2-bucket hand wash',
      'Wheels, barrels, brake calipers & wheel wells deep scrub',
      'Paint chemical iron fallout decon & light synthetic sealant',
      'Interior steam sanitize, vacuum & console wipe down',
      'Glass crystal clarity streak-free treatment',
      'Tire conditioning with satin sling-free dressing'
    ],
    perfectFor: 'Monthly maintenance and high-end daily drivers.'
  },
  {
    id: 'signature-correction',
    name: 'Signature Paint Correction',
    subtitle: 'Flawless Mirror Finish',
    price: 649,
    originalPrice: 799,
    duration: '7 – 9 Hours',
    warranty: '6-Month Poly-Shield',
    popular: true,
    serviceType: 'Studio Recommended',
    includes: [
      'All Precision Preservation wash & decon steps included',
      'Complete clay bar physical paint decontamination',
      'Single-Stage or 2-Stage Machine Paint Polish (85–92% Swirl Removal)',
      'Digital paint depth micrometer evaluation',
      'Headlight & taillight high-gloss jeweling',
      'Interior complete deep steam extraction & leather conditioning',
      '6-Month high-bonding polymer paint sealant applied'
    ],
    perfectFor: 'Vehicles with swirl marks, spiderwebs, dull paint, or before resale.'
  },
  {
    id: 'elite-ceramic',
    name: 'Apex 5-Year Ceramic Shield',
    subtitle: 'Permanent Nano Armor & Hydrophobic Shine',
    price: 1290,
    originalPrice: 1490,
    duration: '1.5 Days (Cure Bay)',
    warranty: '5-Year Written Carfax Warranty',
    bestValue: true,
    serviceType: 'Studio Required (IR Baking)',
    includes: [
      'Full Multi-Stage Paint Correction (Up to 95%+ Defect Removal)',
      '2 Coats of 9H Graphene/Ceramic Coating on all painted body panels',
      'Wheel faces ceramic coat protection against hot brake dust',
      'Windshield & exterior glass hydrophobic rain-repellent shield',
      'Plastic trim & rubber ceramic restoration barrier',
      'Full interior deep clean + leather ceramic barrier',
      'Infrared bake cure & official Carfax recorded warranty'
    ],
    perfectFor: 'New cars, luxury exotics, and owners seeking zero-wax permanent gloss.'
  },
  {
    id: 'concourse-mastery',
    name: 'Concourse Apex Bespoke',
    subtitle: '7-Year Ultimate Armor & Engine Bay',
    price: 1850,
    originalPrice: 2200,
    duration: '2 Full Days',
    warranty: '7-Year Lifetime Ceramic Guarantee',
    serviceType: 'VIP Studio Exclusive',
    includes: [
      'Multi-Stage Jeweled Compound Paint Correction (99% Flawless Clarity)',
      '3-Layer 10H Ceramic + Graphene Matrix Armor (Body & Carbon Fiber)',
      'Wheels-off package: Full wheel barrel + brake caliper ceramic coated',
      'Complete Engine Bay dry-steam detailing & thermal dressing',
      'All exterior glass 2-year rain shedding crystal coating',
      'Full Interior Nappa leather ceramic coat & carpet stain guard',
      'Complimentary 1-Year quarterly checkup & maintenance wash'
    ],
    perfectFor: 'Supercars, rare collector builds, and Porsche / Ferrari owners wanting the pinnacle.'
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
    description: 'Restores yellowed, hazy polycarbonate headlights back to 100% optical clarity.'
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
    comment: 'Took my GT3 to Apex after getting swirls from a previous dealership wash. The level of detail here is obsessive. The carbon roof and paint look deeper than when it rolled off the showroom floor in Stuttgart. Best detailing studio in Pasadena by far.',
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
    comment: 'The mobile van came directly to my home in Pasadena. They brought their own purified water and silent generator. My interior looks and smells brand new, and they removed a tough espresso stain from my white seats completely.',
    verified: true,
    highlight: 'Zero water spots with mobile unit'
  },
  {
    id: 'rev-3',
    author: 'David Chen',
    location: 'Arcadia, CA',
    vehicle: 'BMW M3 Competition (Isle of Man Green)',
    service: 'Signature Paint Correction & 2-Year Ceramic',
    rating: 5,
    date: '1 month ago',
    comment: 'Under the LED inspection lights, you could see 99% of all hairline scratches were gone. Water literally falls off the hood now. Very honest pricing and master craftsmanship. Will be bringing my wife’s X5 next month.',
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
    comment: 'The G-Wagon is a monster to clean with all the square edges. Apex treated it like fine jewelry. Engine bay was spotless, wheel calipers coated, and the 7-year graphene warranty gives me total peace of mind in the SoCal sun.',
    verified: true,
    highlight: 'Treated my G63 like fine jewelry'
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
    comment: 'Hard to trust anyone with Rosso Corsa single-stage clear, but Apex has certified masters. The paint depth readings before and after were documented in detail. Simply unmatched professionalism.',
    verified: true,
    highlight: 'Documented paint depth readings'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'ceramic',
    question: 'How long does ceramic coating really last, and is it better than wax?',
    answer: 'Unlike traditional carnauba waxes or synthetic polymer sealants that melt away after 2–8 weeks in the hot California sun, our 9H / 10H ceramic coatings create a semi-permanent chemical and covalent bond with your vehicle’s clear coat. They last between 2 to 7+ years depending on the chosen package, providing extreme chemical resistance, UV protection, and self-cleaning hydrophobic properties.'
  },
  {
    id: 'faq-2',
    category: 'correction',
    question: 'What is the difference between a 1-step and a multi-step paint correction?',
    answer: 'A 1-Step enhancement combines light polishing to boost gloss and remove 50%–70% of micro-marring, ideal for newer vehicles. A 2-Step or Multi-Stage Paint Correction uses a heavy cutting compound with micro-abrasive pads to eliminate 85%–99% of deep swirl marks, scratches, and etching, followed by a jeweling finishing polish for laser-sharp reflections.'
  },
  {
    id: 'faq-3',
    category: 'mobile',
    question: 'Do I need to provide water or power for the Mobile Detailing service?',
    answer: 'No! Our mobile detailing Mercedes Sprinter van is 100% self-contained. We carry our own 100-gallon tank of 0-PPM deionized spot-free filtered water and an ultra-quiet internal inverter generator. All we need is access to your vehicle at your home, office, or private garage in Pasadena or surrounding cities.'
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
    question: 'Where is your Pasadena studio located and do I need an appointment?',
    answer: 'Our state-of-the-art detailing studio is located at 1420 E Walnut St, Suite 104, Pasadena, CA 91106. Because we allocate dedicated technician hours and temperature-controlled bays for every car, we operate by appointment. You can book directly through our online quote tool or call us at (626) 555-0184.'
  },
  {
    id: 'faq-6',
    category: 'general',
    question: 'What is your satisfaction guarantee and warranty policy?',
    answer: 'Every vehicle undergoes a 32-point inspection under high-CRI 5000K LED studio bay lighting before handover. Our ceramic coating installations include an official warranty certificate with Carfax registry reporting, ensuring your vehicle retains maximum resale value.'
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
    headline: "Concourse-Level Precision for Pasadena's Finest Automobiles",
    subheadline: "Master-certified multi-stage paint correction, 9H/10H ceramic shield protection, and bespoke interior restoration — at our climate-controlled Pasadena studio or via our self-contained mobile unit.",
    primaryCta: "Calculate Instant Quote & Book",
    secondaryCta: "Explore 5-Year Ceramic Packages",
    visualStyle: "Studio spotlighting on a high-gloss supercar, interactive technical spec nodes, dynamic before/after paint clarity slider, and 4.8★ Google verified social proof banner."
  },
  wireframeSections: [
    { number: "01", name: "Global Header & Live Status Bar", purpose: "Persistent trust signals (4.8★, Pasadena address, instant phone dial, mobile booking trigger)" },
    { number: "02", name: "Hero Showcase & Technical Spec Nodes", purpose: "Immediate visual impact, value proposition, and instant quote CTA" },
    { number: "03", name: "Interactive Before/After Paint Defect Slider", purpose: "Direct visual proof of swirl elimination vs. mirror ceramic gloss" },
    { number: "04", name: "Core Services Breakdown (5 Pillars)", purpose: "Deep dive into Paint Correction, Ceramic Coating, Interior Deep Clean, Engine Bay, and Mobile Van" },
    { number: "05", name: "Interactive Pricing & Package Matrix", purpose: "Clear transparent pricing tiers with vehicle size adjustments and Carfax warranty details" },
    { number: "06", name: "Live Quote & Multi-Step Booking Builder", purpose: "High-conversion lead capture and instant estimated quote calculator" },
    { number: "07", name: "Craftsmanship & Studio Standards", purpose: "Deionized water, high-CRI lighting, Rupes polishers, and climate-controlled curing bay" },
    { number: "08", name: "Verified Customer Reviews (64 Reviews)", purpose: "Social proof with real car models and Pasadena/San Marino local authenticity" },
    { number: "09", name: "Interactive FAQ Accordion", purpose: "Overcoming objections around ceramic longevity, mobile logistics, and PPF compatibility" },
    { number: "10", name: "Pasadena Studio Map & Direct Contact", purpose: "Physical address, business hours, Google directions, and VIP appointment booking" }
  ]
};
