import { VehicleOption, ServiceDetail, PackageTier, AddOnOption, ReviewItem, FaqItem } from '../types';
import { BUSINESS_CONFIG } from '../config';
import engineBayCleaningImg from '../assets/images/engine_bay_cleaning_1787210678628.jpg';
import luxuryInteriorImg from '../assets/images/luxury_interior_clean_1787211008247.jpg';

export const BUSINESS_INFO = {
  name: BUSINESS_CONFIG.businessName,
  ownerName: BUSINESS_CONFIG.ownerName,
  tagline: "NYC’s Premier Mobile Detailing — We Come To Your Doorstep",
  subheadline: "Professional steam extraction, high-foam exterior washes, and deep interior care delivered directly to your driveway in the Bronx and NYC.",
  address: BUSINESS_CONFIG.address,
  phone: BUSINESS_CONFIG.ownerPhone,
  phoneRaw: BUSINESS_CONFIG.ownerPhone.replace(/\D/g, ''),
  email: BUSINESS_CONFIG.email,
  rating: 5.0,
  reviewCount: 20,
  serviceArea: BUSINESS_CONFIG.serviceArea,
  hours: {
    weekdays: "Monday – Saturday: 9:00 AM – 8:00 PM",
    saturday: "Monday – Saturday: 9:00 AM – 8:00 PM",
    sunday: "Sunday: Closed"
  },
  serviceAreas: [
    "Bronx, NY",
    "Riverdale",
    "Pelham Bay",
    "Throggs Neck",
    "Woodlawn",
    "Upper Manhattan",
    "Harlem & Washington Heights",
    "Queens",
    "Westchester County Border",
    "Greater NYC Metropolitan Area"
  ]
};

export const VEHICLE_OPTIONS: VehicleOption[] = [
  {
    id: 'sedan',
    name: 'Sedans & Coupes',
    category: 'Standard Size',
    multiplier: 1.0,
    iconName: 'Car',
    examples: 'Honda Accord, Toyota Camry, BMW 3/5 Series, Tesla Model 3/S, Civic'
  },
  {
    id: 'suv',
    name: '3-Row SUVs & Trucks',
    category: 'Large Size (3-Row / Truck)',
    multiplier: 1.25,
    iconName: 'Truck',
    examples: 'Chevy Suburban/Tahoe, Ford F-150, Explorer, Honda Pilot, Escalade'
  }
];

export const PACKAGES_DATA: PackageTier[] = [
  {
    id: 'full-interior-steam',
    name: 'Full Interior Steam & Shampoo',
    subtitle: 'Full Blowout, Deep Vacuum, Steam Extraction, Seat/Carpet Shampoo & UV Protection',
    price: 200,
    originalPrice: 230,
    duration: '3 – 4 Hours',
    warranty: 'Hospital-Grade Steam Sanitization',
    popular: true,
    bestValue: true,
    serviceType: 'Sedans $200.00 • 3-Row/Trucks $249.99',
    includes: [
      'Full blowout of all air vents, crevices, seams, and seat rails',
      'Deep vacuuming across entire cabin, under seats & trunk',
      'High-temperature steam extraction (eradicates bacteria & odors)',
      'Deep shampoo of fabric seats, carpets, and floor mats',
      'Complete door jambs cleaned, degreased, and wiped down',
      'UV surface protection & factory-matte conditioning'
    ],
    perfectFor: 'Sedans ($200.00) & 3-Row SUVs/Trucks ($249.99) needing complete interior rejuvenation.'
  },
  {
    id: 'interior-express',
    name: 'Interior Express Maintenance',
    subtitle: 'Surface Wipe-Down, Light Vacuum, Glass Cleaning & Cabin Refresh',
    price: 99.99,
    originalPrice: 120,
    duration: '1 – 1.5 Hours',
    warranty: 'Factory Clean Matte Refresh',
    popular: false,
    serviceType: 'Mobile Flat Rate $99.99',
    includes: [
      'Comprehensive surface wipe-down of dash, console & panels',
      'Light vacuum across seating surfaces and floor carpets',
      'Streak-free interior and exterior glass cleaning',
      'Cabin refresh, dust elimination & deodorization',
      'Rubber and carpet floor mat wipe-down',
      'Trash removal and console decluttering'
    ],
    perfectFor: 'Routine upkeep and periodic refresh for all vehicle sizes at a flat $99.99 rate.'
  },
  {
    id: 'exterior-foam',
    name: 'Exterior Foam Wash & Gloss Seal',
    subtitle: 'High-Foam Bath, Hand Wash, Deep Wheel/Tire Clean & Hydrophobic Glass Treatment',
    price: 74.99,
    originalPrice: 90,
    duration: '1 – 1.5 Hours',
    warranty: 'Hydrophobic Glass Shield',
    popular: false,
    serviceType: 'Mobile Flat Rate $74.99',
    includes: [
      'Thick high-foam pre-wash bath encapsulating dirt and road grime',
      'Scratch-free two-bucket hand wash with plush microfiber mitts',
      'Deep wheel face, rim barrel, and tire cleaning & degreasing',
      'Deep satin tire shine dressing application',
      'Hydrophobic glass treatment shedding rain at highway speeds',
      'Hand-drying with ultra-plush drying towels & blowout drying'
    ],
    perfectFor: 'Restoring exterior gloss, protecting paint, and clearing NYC road grime safely.'
  }
];

export function getPackagePrice(packageId: string, vehicleId: string): number {
  if (packageId === 'full-interior-steam' || packageId.includes('interior-steam')) {
    return (vehicleId === 'suv' || vehicleId === 'truck') ? 249.99 : 200.00;
  }
  if (packageId === 'interior-express') {
    return 99.99;
  }
  if (packageId === 'exterior-foam') {
    return 74.99;
  }
  return 99.99;
}

export const ADDONS_DATA: AddOnOption[] = [
  {
    id: 'engine-bay',
    name: 'Engine Bay Deep Cleaning',
    price: 59.99,
    description: 'Safe electronics masking, engine bay degreasing, steam cleaning, and satin thermal dressing.'
  },
  {
    id: 'pet-hair',
    name: 'Pet Hair Removal Treatment',
    price: 59.99,
    description: 'Specialized rubber needle agitation and high-suction extraction to eliminate stubborn pet hair.'
  },
  {
    id: 'radio-install',
    name: 'Radio Installation',
    price: 119.99,
    description: 'Mobile on-site aftermarket head unit, touchscreen stereo, Apple CarPlay / Android Auto radio installation.'
  },
  {
    id: 'front-brakes',
    name: 'Front Brake Installation',
    price: 60.00,
    description: 'Mobile on-site front brake pads and rotors replacement directly at your doorstep.'
  },
  {
    id: 'rear-brakes',
    name: 'Rear Brake Installation',
    price: 80.00,
    description: 'Mobile on-site rear brake pads and rotors replacement directly at your doorstep.'
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'full-interior-steam',
    title: 'Full Interior Steam & Shampoo',
    badge: 'Signature Deep Clean',
    shortDesc: 'Full blowout, deep vacuum, steam extraction, seat/carpet shampoo, door jambs, and UV surface protection.',
    fullDesc: 'Our most comprehensive interior restoration package. Hershel arrives directly at your doorstep with commercial-grade steam extraction equipment. We blow out all trapped dirt from vents and crevices, deeply vacuum every fiber, shampoo seats and carpets to lift embedded stains, clean door jambs, and apply UV surface protection for a fresh, non-greasy OEM finish.',
    startingPrice: 200.00,
    duration: '3 – 4 Hours',
    popular: true,
    features: [
      'Full high-pressure blowout of vents, crevices, seams, and seat rails',
      'Deep thorough vacuum of cabin, under-seat areas, mats & trunk',
      'High-temperature commercial steam extraction (eradicates bacteria & odors)',
      'Deep hot-water shampoo of seats and floor carpets',
      'Complete door jambs cleaned, degreased, and wiped down',
      'UV surface protection and OEM non-greasy matte conditioning'
    ],
    specs: [
      { label: 'Sedans / Coupes', value: '$200.00' },
      { label: '3-Row SUVs / Trucks', value: '$249.99' },
      { label: 'Service Type', value: 'Mobile - We Come To You' }
    ],
    idealFor: 'Vehicles needing complete interior rejuvenation, spill/stain removal, and hospital-grade sanitization.',
    imageUrl: luxuryInteriorImg
  },
  {
    id: 'interior-express',
    title: 'Interior Express Maintenance',
    badge: 'Flat Rate $99.99',
    shortDesc: 'Surface wipe-down, light vacuum, glass cleaning, and cabin refresh.',
    fullDesc: 'Quick, efficient mobile cabin refresh designed for busy drivers across the Bronx and NYC. We thoroughly wipe down all hard surfaces, perform a light vacuum throughout the vehicle, clean interior and exterior glass streak-free, and revitalize your cabin atmosphere.',
    startingPrice: 99.99,
    duration: '1 – 1.5 Hours',
    popular: false,
    features: [
      'Surface wipe-down of dashboard, steering wheel, console & panels',
      'Light vacuum of seats, footwells, and floor mats',
      'Streak-free interior and exterior glass cleaning',
      'Cabin refresh, dust elimination, and deodorization',
      'Floor mat wipe-down and trash removal'
    ],
    specs: [
      { label: 'Rate', value: '$99.99 Flat Rate' },
      { label: 'Duration', value: '60 – 90 Minutes' },
      { label: 'Service Area', value: 'Bronx & NYC Metropolitan Area' }
    ],
    idealFor: 'Routine upkeep, daily drivers, and rideshare vehicles needing a crisp, clean cabin refresh.',
    imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'exterior-foam',
    title: 'Exterior Foam Wash & Gloss Seal',
    badge: 'Flat Rate $74.99',
    shortDesc: 'High-foam bath, hand wash, deep wheel/tire cleaning, tire shine, and hydrophobic glass treatment.',
    fullDesc: 'Treat your car to a swirl-free, high-foam bath right in your driveway. Thick lubricating snow foam encapsulates road film and abrasive dirt before our scratch-free hand wash. Wheels and tires are thoroughly degreased, dressed in rich satin tire shine, and finished with a hydrophobic glass treatment.',
    startingPrice: 74.99,
    duration: '1 – 1.5 Hours',
    popular: false,
    features: [
      'High-foam snow bath loosening stubborn dirt, grime, and NYC salt',
      'Gentle microfiber contact hand wash using two-bucket method',
      'Deep wheel face, rim barrel, and tire cleaning & degreasing',
      'Long-lasting satin tire shine dressing',
      'Hydrophobic glass treatment shedding water at driving speeds',
      'Ultra-plush microfiber towel hand dry & blow dry crevices'
    ],
    specs: [
      { label: 'Rate', value: '$74.99 Flat Rate' },
      { label: 'Glass Protection', value: 'Hydrophobic Seal' },
      { label: 'Dispatch', value: 'Mobile Direct To You' }
    ],
    idealFor: 'All vehicle owners wanting swirl-free exterior shine and durable rain repellency.',
    imageUrl: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'mechanical-addons',
    title: 'Mechanical & Mobile Add-Ons',
    badge: 'Driveway Upgrades',
    shortDesc: 'Engine bay deep cleaning, pet hair removal, radio installation, and mobile brake installations.',
    fullDesc: 'More than just detailing — Hershel provides convenient mobile mechanical upgrades at your doorstep. From engine bay deep cleaning ($59.99) and heavy pet hair removal ($59.99) to aftermarket radio/stereo installation ($119.99) and mobile front ($60.00) / rear ($80.00) brake installations.',
    startingPrice: 59.99,
    duration: '1 – 2.5 Hours',
    popular: true,
    features: [
      'Engine Bay Deep Cleaning & Satin Dressing: $59.99',
      'Pet Hair Removal Treatment: $59.99',
      'Radio / Touchscreen Stereo Installation: $119.99',
      'Front Brake Installation (Pads / Rotors): $60.00',
      'Rear Brake Installation (Pads / Rotors): $80.00'
    ],
    specs: [
      { label: 'Brakes', value: 'From $60.00' },
      { label: 'Radio Install', value: '$119.99' },
      { label: 'Engine Bay / Hair', value: '$59.99' }
    ],
    idealFor: 'Drivers seeking convenient mobile auto care and mechanical installation without leaving home.',
    imageUrl: engineBayCleaningImg
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Anthony Rivera',
    location: 'Bronx, NY (Pelham Bay)',
    vehicle: 'Honda Accord Sedan',
    service: 'Full Interior Steam & Shampoo',
    rating: 5,
    date: '1 week ago',
    comment: 'Hershel did an exceptional job on my Accord. Years of NYC winter salt and coffee stains on the driver seat were completely lifted by his steam extraction. Having him come right to my driveway was so convenient. 5 stars!',
    verified: true,
    highlight: 'Removed years of embedded stains'
  },
  {
    id: 'rev-2',
    author: 'Jessica Morales',
    location: 'Bronx, NY (Riverdale)',
    vehicle: 'Chevy Tahoe (3-Row SUV)',
    service: 'Full Interior Steam & Pet Hair Removal',
    rating: 5,
    date: '2 weeks ago',
    comment: 'With two dogs and three kids, my Tahoe was a disaster zone. Hershel spent over 3.5 hours carefully blowing out every vent, steam shampooing the carpets, and removing every trace of pet hair. Smells like a brand new showroom car.',
    verified: true,
    highlight: 'Tahoe looks and smells brand new'
  },
  {
    id: 'rev-3',
    author: 'Marcus Jenkins',
    location: 'Manhattan, NY (Washington Heights)',
    vehicle: 'BMW 330i',
    service: 'Exterior Foam Wash & Radio Installation',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Hershel installed my new Apple CarPlay touchscreen unit right at my street parking spot, then gave the BMW a high-foam bath and gloss treatment. Top-tier craftsmanship and super friendly communication via WhatsApp.',
    verified: true,
    highlight: 'Flawless radio install and exterior foam wash'
  },
  {
    id: 'rev-4',
    author: 'Carlos Delgado',
    location: 'Bronx, NY (Woodlawn)',
    vehicle: 'Ford F-150 SuperCrew',
    service: 'Front Brake Installation & Engine Bay Clean',
    rating: 5,
    date: '1 month ago',
    comment: 'Saved me an entire Saturday at the mechanic shop. Hershel installed my front brake pads right in my driveway for $60 and cleaned up my dirty engine bay for $59.99. Honest, punctual, and highly skilled.',
    verified: true,
    highlight: 'Driveway brake install saved my whole weekend'
  },
  {
    id: 'rev-5',
    author: 'Elena Vasquez',
    location: 'Queens, NY (Astoria)',
    vehicle: 'Toyota RAV4',
    service: 'Interior Express Maintenance',
    rating: 5,
    date: '1 month ago',
    comment: 'The $99.99 Interior Express flat rate is the best deal in NYC. Super thorough wipe-down, clean glass, and fresh cabin scent. Booked through WhatsApp in 2 minutes and he was at my door the next morning.',
    verified: true,
    highlight: 'Fast WhatsApp booking and flawless finish'
  },
  {
    id: 'rev-6',
    author: 'David O\'Connor',
    location: 'Yonkers / Bronx Border',
    vehicle: 'Jeep Grand Cherokee',
    service: 'Full Interior Steam & Rear Brakes',
    rating: 5,
    date: '2 months ago',
    comment: 'Hershel is a true professional. The steam extraction made my carpets look factory-fresh and my rear brake pads were replaced perfectly. Guy On The Go is now my go-to for all car maintenance.',
    verified: true,
    highlight: 'True professional who comes to you'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'mobile',
    question: 'How does mobile detailing work, and where do you travel?',
    answer: 'We are 100% mobile — we come directly to your home driveway, apartment complex, or designated parking area across Bronx, NY and the Greater NYC Metropolitan Area. Hershel arrives fully equipped with specialized tools, steam extractors, high-foam systems, and supplies.'
  },
  {
    id: 'faq-2',
    category: 'ceramic',
    question: 'What is included in the Full Interior Steam & Shampoo?',
    answer: 'Full Interior Steam & Shampoo includes: full air blowout of all vents and crevices, deep vacuuming across the cabin and trunk, high-temperature steam extraction (kills 99.9% of bacteria and odors), deep shampoo of fabric seats and floor carpets, door jamb cleaning, and UV surface protection leaving an OEM non-greasy matte finish. Sedans are $200.00 flat; 3-Row SUVs and Trucks are $249.99 flat.'
  },
  {
    id: 'faq-3',
    category: 'general',
    question: 'What are your hours of operation and how do I schedule?',
    answer: 'We operate Monday through Saturday from 9:00 AM to 8:00 PM (Sunday: Closed). You can easily schedule an appointment by clicking "Book via WhatsApp", calling directly at +1 (347) 593-7649, sending an SMS, or emailing guyonthego21@gmail.com.'
  },
  {
    id: 'faq-4',
    category: 'mobile',
    question: 'Do you offer mechanical services like brake and radio installations?',
    answer: 'Yes! In addition to detailing, Hershel offers mobile mechanical upgrades: Front Brake Installation ($60.00), Rear Brake Installation ($80.00), and Aftermarket Radio / Touchscreen Installation ($119.99). We perform these directly at your location so you do not have to wait at an auto repair shop.'
  },
  {
    id: 'faq-5',
    category: 'general',
    question: 'What is the pricing for Interior Express Maintenance and Exterior Foam Wash?',
    answer: 'Both are flat-rate services! Interior Express Maintenance is a flat $99.99 for all vehicles and includes surface wipe-down, light vacuum, glass cleaning, and cabin refresh. Exterior Foam Wash & Gloss Seal is a flat $74.99 and includes a high-foam bath, scratch-free hand wash, deep wheel/tire clean, tire shine, and hydrophobic glass treatment.'
  },
  {
    id: 'faq-6',
    category: 'general',
    question: 'Do I need to provide water or electricity?',
    answer: 'Our mobile unit arrives fully stocked with professional equipment. Access to a standard outdoor electrical outlet and water spigot at your home or facility is helpful and coordinated with Hershel prior to your appointment.'
  }
];

export const STYLE_GUIDE_DATA = {
  themeName: "Obsidian NYC Mobile Detailing",
  conceptOverview: "High-contrast luxury dark aesthetic for Guy On The Go Mobile Detailing, delivering mobile steam extraction, high-foam washes, and automotive upgrades throughout the Bronx & NYC.",
  colors: [
    { name: "Obsidian Carbon (Canvas)", hex: "#090B10", role: "Primary dark luxury canvas" },
    { name: "Graphite Surface", hex: "#12161F", role: "Component cards and elevated containers" },
    { name: "Electric Amber (CTA Accent)", hex: "#F59E0B", role: "Primary conversion trigger, badges, star ratings, and active highlights" },
    { name: "WhatsApp Green", hex: "#25D366", role: "Instant booking and chat triggers" },
    { name: "Pure Platinum", hex: "#F8FAFC", role: "High-legibility primary display headlines" },
    { name: "Muted Steel", hex: "#94A3B8", role: "Secondary labels and body text" }
  ],
  typography: {
    displayHeading: "Outfit (700/800 Bold)",
    technicalMonospace: "Space Grotesk (500 Medium)",
    body: "Plus Jakarta Sans / Inter"
  },
  heroConcept: {
    headline: "NYC’s Premier Mobile Detailing — We Come To Your Doorstep",
    subheadline: "Professional steam extraction, high-foam exterior washes, and deep interior care delivered directly to your driveway in the Bronx and NYC.",
    primaryCta: "Book via WhatsApp",
    secondaryCta: "View Services & Pricing",
    visualStyle: "Atmospheric high-contrast mobile detailing presentation with pre-filled WhatsApp booking triggers, transparent Bronx/NYC pricing, and 5.0-star verified client proof."
  },
  wireframeSections: [
    { number: "01", name: "Top Trust Bar & Header", purpose: "Persistent trust signals (5.0★ Google, 1219 Woodycrest Ave Bronx base, instant call, and WhatsApp booking)" },
    { number: "02", name: "Hero Showcase & Quick Pricing Badges", purpose: "Direct value proposition: NYC's Premier Mobile Detailing — We Come To Your Doorstep" },
    { number: "03", name: "Core Services Breakdown", purpose: "Full Interior Steam & Shampoo, Interior Express Maintenance, Exterior Foam Wash & Gloss Seal, and Mechanical Add-Ons" },
    { number: "04", name: "Transparent Pricing & Size Matrix", purpose: "Sedans ($200.00) vs 3-Row/Trucks ($249.99), Flat-Rate Express ($99.99), and Foam Wash ($74.99)" },
    { number: "05", name: "Live Quote & WhatsApp Booking Scheduler", purpose: "Interactive selection with pre-filled WhatsApp message including service, vehicle size, client name, and notes" },
    { number: "06", name: "Verified Customer Reviews (20+ Reviews)", purpose: "Social proof with real car models and authentic Bronx and NYC client feedback" },
    { number: "07", name: "Frequently Asked Questions", purpose: "Clear answers on steam extraction, mobile logistics, hours of operation, and driveway installations" },
    { number: "08", name: "Mobile Dispatch Base & Contact Actions", purpose: "1219 Woodycrest Ave, Bronx, NY 10452, direct call, SMS, email, and Google Maps" },
    { number: "09", name: "Global Footer & Legal Shields", purpose: "Untouched Terms of Service, Privacy Policy modals, and © 2026 Guy On The Go Mobile Detailing copyright" }
  ]
};
