import { VehicleOption, ServiceDetail, PackageTier, AddOnOption, ReviewItem, FaqItem } from '../types';
import engineBayCleaningImg from '../assets/images/engine_bay_cleaning_1787210678628.jpg';
import ceramicApplicatorImg from '../assets/images/ceramic_applicator_hood_1787210837591.jpg';
import luxuryInteriorImg from '../assets/images/luxury_interior_clean_1787211008247.jpg';

export const BUSINESS_INFO = {
  name: "Jonathan's Mobile Carwash",
  fullName: "Jonathan's Mobile Carwash & Detailing",
  tagline: "Professional On-Site Hand Wash & Mobile Auto Detailing",
  serviceArea: "Queens, Long Island & Greater NYC (Fully Mobile Unit — We Bring Water & Power)",
  address: "Queens, Long Island & Greater NYC",
  addressShort: "Queens, LI & Greater NYC",
  serviceLocationNote: "Fully Mobile Unit — 100% Water & Electric Power Onboard",
  phone: "(347) 946-2748",
  phoneRaw: "3479462748",
  email: "jonathan@jonathansmobilecarwash.com",
  rating: 4.9,
  reviewCount: 142,
  hours: {
    weekdays: "Mon-Sat: 7:00 AM - 6:00 PM",
    saturday: "Mon-Sat: 7:00 AM - 6:00 PM",
    sunday: "Sun: 8:00 AM - 4:00 PM (By Appointment)"
  },
  serviceAreas: [
    "Queens",
    "Bayside",
    "Flushing",
    "Astoria",
    "Long Island (Nassau & Suffolk)",
    "Great Neck",
    "Garden City",
    "Brooklyn",
    "Manhattan",
    "Greater NYC Metro"
  ]
};

export const VEHICLE_OPTIONS: VehicleOption[] = [
  {
    id: 'coupe',
    name: 'Coupe / Sedan',
    category: 'Standard Size',
    multiplier: 1.0,
    iconName: 'Car',
    examples: 'Tesla Model 3, BMW 3/4 Series, Mercedes C-Class, Honda Accord, Audi A4'
  },
  {
    id: 'suv',
    name: 'Mid-Size SUV / Crossover',
    category: 'Medium Size (+15%)',
    multiplier: 1.15,
    iconName: 'Shield',
    examples: 'Tesla Model Y, BMW X3/X5, Audi Q5, Porsche Macan, Jeep Grand Cherokee'
  },
  {
    id: 'truck',
    name: 'Full-Size SUV / Truck / Van',
    category: 'Large Size (+30%)',
    multiplier: 1.3,
    iconName: 'Truck',
    examples: 'Cadillac Escalade, Chevy Tahoe, Ford F-150, Dodge Ram, Suburban'
  },
  {
    id: 'exotic',
    name: 'Exotic & Luxury Sports',
    category: 'Bespoke Care (+25%)',
    multiplier: 1.25,
    iconName: 'Sparkles',
    examples: 'Porsche 911/GT3, Corvette C8, Ferrari, Lamborghini, Aston Martin'
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'mobile-hand-wash-wax',
    title: 'Complete Mobile Hand Wash & Wax',
    badge: '100% Scratch-Free On-Site Care',
    shortDesc: 'Gentle two-bucket pH-balanced foam bath, spot-free deionized water rinse, warm filtered air dry, premium Carnauba or ceramic spray wax, and wheel detailing.',
    fullDesc: 'We bring our self-contained mobile detailing unit equipped with spot-free deionized water and electric power directly to your driveway, residence, or office. We use ultra-plush microfiber mitts with grit guards to safely lift road grime, apply a high-gloss protective wax shield, and dress tires with non-sling satin shine.',
    startingPrice: 65,
    duration: '1 – 1.5 Hours',
    popular: true,
    features: [
      'Luxurious pH-neutral foam pre-soak dissolving road film, salt, and bugs without rubbing',
      'Two-bucket scratch-free hand wash method with plush Korean microfiber mitts',
      '100% spot-free deionized water rinse pumped directly from our mobile tank',
      'Warm filtered air blow dry to eliminate hidden drips from mirrors, badges, and jambs',
      'High-gloss Carnauba or SiO2 spray wax sealant providing deep gloss and water beading'
    ],
    specs: [
      { label: 'Equipment', value: 'Onboard Deionized Spot-Free Water & Power' },
      { label: 'Protection', value: '30-45 Day High-Gloss UV Wax Barrier' },
      { label: 'Convenience', value: 'We Come To Your Home or Office' }
    ],
    idealFor: 'Busy car owners in Queens, Long Island, and NYC wanting showroom cleanliness without wasting hours at a car wash.',
    imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'interior-deep-clean-steam',
    title: 'Full Interior Deep Clean & Steam Sanitization',
    badge: '220°F Chemical-Free Deep Disinfection',
    shortDesc: 'Comprehensive cabin vacuuming, pressurized 220°F dry-steam sanitization of all vents, console, door cards, crevices, and hospital-grade antibacterial wipe-down.',
    fullDesc: 'Breathe clean, allergen-free air in your car. Our mobile unit uses pressurized dry vapor steam reaching 220°F to instantly kill 99.9% of bacteria, mold spores, and viruses in your AC vents, cup holders, switches, and seat rails without soaking electrical components. Finished with UV interior dressing and crystal-clear glass cleaning.',
    startingPrice: 175,
    duration: '2.5 – 3.5 Hours',
    popular: true,
    features: [
      'High-pressure dry-vapor steam sanitization of HVAC vents, dashboard, and touchpoints',
      'Deep high-suction vacuuming across all carpets, seats, trunk, and under-seat tracks',
      'Enzymatic spot cleaning of food spills, sticky residues, and grease on hard panels',
      'Hospital-grade anti-bacterial disinfection killing 99.9% of pathogens and viruses',
      'Non-greasy, OEM matte interior dressing with anti-static UV sun inhibitors'
    ],
    specs: [
      { label: 'Steam Temp', value: '220°F Pressurized Dry Vapor' },
      { label: 'Sanitization', value: '99.9% Bacteria, Allergen & Virus Kill Rate' },
      { label: 'Cabin Finish', value: 'OEM Factory Matte — Zero Greasy Glare' }
    ],
    idealFor: 'Families with children, pet owners, daily commuters, and vehicles needing a complete sterile cabin refresh.',
    imageUrl: luxuryInteriorImg
  },
  {
    id: 'paint-correction-gloss',
    title: 'Paint Correction & Gloss Enhancement',
    badge: 'Mirror Swirl & Scratch Elimination',
    shortDesc: 'Precision multi-stage dual-action machine compounding and polishing to eliminate wash swirls, spiderwebs, light scratches, oxidation, and clear coat haze.',
    fullDesc: 'Tired of seeing unsightly swirl marks and spiderwebs when the sun hits your paint? Jonathan\'s Mobile Carwash performs precision on-site machine compounding and polishing. We measure clear coat levels with digital ultrasonic gauges before deploying dual-action rotary polishers to permanently level defects and restore deep liquid reflections.',
    startingPrice: 325,
    duration: '4 – 6 Hours',
    popular: true,
    features: [
      'Chemical iron fallout de-ironing and fine clay bar treatment to remove embedded grit',
      'Digital ultrasonic paint depth inspection across every panel for safe correction',
      'Dual-action machine polishing removing 80% to 90%+ of wash scratches and swirls',
      'Eliminates dull oxidation, water spot etching, and buffer holograms',
      'Finished with high-grade synthetic polymer sealant or prepped for ceramic coating'
    ],
    specs: [
      { label: 'Defect Removal', value: '80%–90%+ Swirl & Scratch Elimination' },
      { label: 'Machine System', value: 'Rupes & Flex Dual-Action Polishers' },
      { label: 'Finish Clarity', value: 'Flawless Liquid Mirror Reflections' }
    ],
    idealFor: 'Dark-colored vehicles with noticeable wash swirls, enthusiast cars, and owners preparing for ceramic coatings.',
    imageUrl: ceramicApplicatorImg
  },
  {
    id: 'leather-carpet-extraction',
    title: 'Leather Care & Carpet Upholstery Extraction',
    badge: 'Heated Stain & Salt Removal',
    shortDesc: 'Commercial heated shampoo extraction pulling deep coffee, salt, dirt, and mud from carpets and fabrics, paired with gentle leather cleaning and conditioning.',
    fullDesc: 'NYC winters and daily use trap salt, mud, grease, and pet dander deep within your automotive carpets and upholstery. We use commercial heated extraction that injects pressurized hot shampoo solution and extracts it at 200 CFM suction. Fine leather seats are treated with pH-balanced cleaners and natural lanolin conditioners to prevent cracking and fading.',
    startingPrice: 145,
    duration: '2 – 3 Hours',
    popular: false,
    features: [
      'Commercial hot-water heated shampoo extraction flushing embedded winter salt and mud',
      'Enzymatic stain removal for coffee, soda, pet accidents, and stubborn dye transfer',
      'pH-neutral delicate brush cleansing of leather pores and perforated seating',
      'Deep leather conditioning with UV sunblock preventing premature drying and cracks',
      'Fast-drying extraction technology ensuring your vehicle is ready to drive shortly after'
    ],
    specs: [
      { label: 'Extraction', value: 'Commercial Heated 200 CFM Hot-Water Suction' },
      { label: 'Leather Treatment', value: 'pH-Balanced Lanolin Nourishing Conditioner' },
      { label: 'Drying Time', value: 'Rapid Low-Moisture Drying' }
    ],
    idealFor: 'Vehicles with winter salt crust, coffee/drink spills, stained upholstery, or dry and stiff leather seats.',
    imageUrl: engineBayCleaningImg
  },
  {
    id: 'ceramic-maintenance-tire-rim',
    title: 'Ceramic Maintenance & Tire/Rim Detailing',
    badge: 'Hydrophobic Shield & Brake Dust Removal',
    shortDesc: 'Specialized SiO2 ceramic booster wash and sealant reload, deep brake dust acid-free iron removal, wheel barrel scrub, and non-sling satin tire dressing.',
    fullDesc: 'Keep your wheels and ceramic coatings performing at their absolute peak. We spray color-changing iron dissolvers to safely dissolve embedded metallic brake dust from wheels and calipers, agitate inner barrels with wool brushes, apply a silica ceramic booster to rejuvenate hydrophobic water beading, and apply rich satin tire dressing.',
    startingPrice: 95,
    duration: '1.5 – 2 Hours',
    popular: false,
    features: [
      'Acid-free chemical iron decontamination dissolving baked-on brake dust on rims & calipers',
      'Inner wheel barrel, spoke, and lug nut detailing using soft scratch-free microfiber wands',
      'Ceramic SiO2 booster wash recharging existing ceramic coatings or sealant layers',
      'Extreme water beading and self-cleaning hydrophobic surface properties renewed',
      'Premium water-based non-sling satin tire dressing that protects rubber from browning'
    ],
    specs: [
      { label: 'Wheel Decontamination', value: 'Color-Changing Iron Dissolver & Barrel Scrub' },
      { label: 'Ceramic Booster', value: 'High-Concentrate SiO2 Hydrophobic Infusion' },
      { label: 'Tire Finish', value: 'Zero-Sling Rich OEM Satin Black' }
    ],
    idealFor: 'Coated cars, sport packages with aggressive brake dust, and owners who love immaculate wheels and tires.',
    imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80'
  }
];

export const PACKAGES_DATA: PackageTier[] = [
  {
    id: 'mobile-hand-wash-package',
    name: 'Complete Mobile Hand Wash & Wax',
    subtitle: 'On-Site 2-Bucket Foam Bath & Carnauba Wax',
    price: 65,
    originalPrice: 85,
    duration: '1 – 1.5 Hours',
    warranty: '100% Swirl-Free Guarantee',
    serviceType: 'Mobile Hand Wash & Spray Wax',
    includes: [
      'Self-contained mobile unit arrives at your home or office with water & power',
      'Gentle 2-bucket foam pre-soak with grit-guard microfiber wash mitts',
      'Brake dust wheel scrub, wheel barrel clean & tire sidewall wash',
      '100% spot-free deionized water rinse (no hard water spots or mineral etching)',
      'Warm filtered air blow dry and premium Carnauba or SiO2 spray wax shield',
      'Crystal optical window cleaning and non-sling satin tire dressing'
    ],
    perfectFor: 'Routine regular vehicle maintenance to keep your car shining without leaving your driveway.'
  },
  {
    id: 'interior-steam-package',
    name: 'Full Interior Deep Clean & Steam',
    subtitle: 'Deep Heated Extraction & 220°F Sanitization',
    price: 185,
    originalPrice: 230,
    duration: '2.5 – 3.5 Hours',
    warranty: '99.9% Sanitization Guarantee',
    popular: true,
    serviceType: 'Complete Interior Mobile Reset',
    includes: [
      'Pressurized 220°F dry-vapor steam sanitization of HVAC vents and dashboard',
      'Deep high-suction vacuuming of carpets, seats, trunk, and under-seat tracks',
      'Hot-water heated extraction on floor mats and fabric upholstery stains',
      'Delicate leather cleaning with pH-balanced conditioning nourishment',
      'Door jambs degreased, center console disinfected, and cup holders scrubbed',
      'Hospital-grade antibacterial wipe-down and anti-fog streak-free glass'
    ],
    perfectFor: 'Vehicles needing an interior reset, stain removal, odor elimination, or germ sanitization.'
  },
  {
    id: 'signature-mobile-detail',
    name: 'Signature Full Mobile Detail',
    subtitle: 'Complete Interior Deep Clean + Mobile Hand Wash & Wax',
    price: 245,
    originalPrice: 310,
    duration: '3.5 – 4.5 Hours',
    warranty: 'Complete Showroom Reset Guarantee',
    popular: true,
    bestValue: true,
    serviceType: 'Full Interior & Exterior Transformation',
    includes: [
      'Complete Mobile Hand Wash & Wax with spot-free water & warm blow dry',
      'Full Interior Deep Clean & 220°F Dry-Steam Sanitization of all vents & panels',
      'Heated carpet and upholstery shampoo extraction removing deep stains',
      'pH-balanced leather conditioning and matte UV interior panel protection',
      'Clay bar exterior paint decontamination to remove industrial fallout',
      'Ceramic spray sealant application giving 3+ months of water-beading protection',
      'Inner and outer wheel barrel detailing with non-sling satin tire dressing'
    ],
    perfectFor: 'The ultimate on-site rejuvenation for owners who want their car to look, feel, and smell brand new.'
  },
  {
    id: 'correction-ceramic-package',
    name: 'Paint Correction & Ceramic Protection',
    subtitle: 'Machine Swirl Removal & 9H Ceramic Shield',
    price: 395,
    originalPrice: 495,
    duration: '4 – 6 Hours',
    warranty: 'Mirror Clarity & Gloss Guarantee',
    popular: false,
    serviceType: 'Mobile Machine Correction & Ceramic Shield',
    includes: [
      'Full chemical iron decontamination and clay bar paint cleansing on-site',
      'Digital ultrasonic paint depth measurement across all body panels',
      'Dual-action machine compounding removing 80%–90%+ of swirls and scratches',
      'Jeweling finishing polish creating deep, liquid reflection clarity',
      'Long-lasting ceramic paint protection shield sealing in the gloss',
      'Complete wheel face ceramic detail, headlight clarity boost, and tire dress'
    ],
    perfectFor: 'Enthusiasts, dark-colored cars with wash swirls, and owners seeking liquid-gloss mirror paint.'
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
    id: 'leather-nourish',
    name: 'Deep Leather Cleansing & Lanolin Conditioning',
    price: 60,
    description: 'Gently cleans pores and applies rich conditioner to prevent leather cracking and drying.'
  },
  {
    id: 'wheel-ceramic-boost',
    name: 'Wheel & Caliper Ceramic Booster',
    price: 95,
    description: 'Prevents corrosive brake dust accumulation and makes future wheel washing effortless.'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'David Goldstein',
    location: 'Bayside, Queens, NY',
    vehicle: 'Tesla Model Y',
    service: 'Signature Full Mobile Detail',
    rating: 5,
    date: '2 days ago',
    comment: 'Jonathan\'s Mobile Carwash is an absolute game-changer. They pulled up right to my driveway in Bayside with their own water tank and generator. My Model Y was spotless inside and out. The steam clean made the interior smell like a new car.',
    verified: true,
    highlight: 'Water and power onboard — pure convenience'
  },
  {
    id: 'rev-2',
    author: 'Elena Rostova',
    location: 'Great Neck, Long Island, NY',
    vehicle: 'BMW X5 xDrive40i',
    service: 'Full Interior Deep Clean & Steam Sanitization',
    rating: 5,
    date: '5 days ago',
    comment: 'With two toddlers and beach sand everywhere, my interior was trashed. Called Jonathan\'s Mobile Carwash at (347) 946-2748 and they came to my house the next morning. The heated extraction pulled out coffee and juice stains that other places missed.',
    verified: true,
    highlight: 'Steam extraction erased years of stains'
  },
  {
    id: 'rev-3',
    author: 'Marcus Vance',
    location: 'Astoria, Queens, NY',
    vehicle: 'Audi S4 Quattro',
    service: 'Paint Correction & Gloss Enhancement',
    rating: 5,
    date: '1 week ago',
    comment: 'I was hesitant about mobile paint correction, but Jonathan brought professional Rupes polishers and digital depth gauges. He spent 5 hours on my black Audi and eliminated virtually every wash swirl. It looks like black glass now.',
    verified: true,
    highlight: 'Liquid mirror paint correction right in my driveway'
  },
  {
    id: 'rev-4',
    author: 'Brian Kowalski',
    location: 'Garden City, Long Island, NY',
    vehicle: 'Porsche 911 Carrera',
    service: 'Complete Mobile Hand Wash & Wax',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Zero water spots because they use 100% deionized water. Jonathan is extremely meticulous, uses two buckets with grit guards, and dries with warm filtered air so there are no swirl marks on the soft Porsche clear coat. My regular bi-weekly wash now.',
    verified: true,
    highlight: 'Deionized water & 100% scratch-free hand wash'
  },
  {
    id: 'rev-5',
    author: 'Jessica Chen',
    location: 'Flushing, Queens, NY',
    vehicle: 'Mercedes-Benz GLC 300',
    service: 'Leather Care & Carpet Upholstery Extraction',
    rating: 5,
    date: '3 weeks ago',
    comment: 'The convenience of having a professional mobile carwash come to my home while I was working was incredible. The leather seats look supple and matte, not greasy, and the carpets look brand new. Prompt, courteous, and top quality.',
    verified: true,
    highlight: 'Came to my home while I worked — 10/10 service'
  },
  {
    id: 'rev-6',
    author: 'Sal Tarantino',
    location: 'Brooklyn & NYC Metro, NY',
    vehicle: 'Ford F-150 Lariat',
    service: 'Signature Full Mobile Detail',
    rating: 5,
    date: '1 month ago',
    comment: 'Jonathan\'s Mobile Carwash is the real deal across Queens, Long Island, and NYC. Big truck was covered in construction dust and road grime. They spent almost 4 hours getting every inch immaculate. Well worth every penny.',
    verified: true,
    highlight: 'Real deal across Queens, Long Island and NYC'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'How does Jonathan\'s Mobile Carwash work? Do you bring your own water and power?',
    answer: 'Yes! Our custom mobile detailing rig is completely self-contained. We carry our own 100% spot-free deionized water tank and an ultra-quiet commercial electric generator. We don\'t need to hook up to your garden hose or outdoor outlets — we can detail your vehicle at your home, driveway, apartment complex, or workplace.'
  },
  {
    id: 'faq-2',
    category: 'coverage',
    question: 'What areas do you serve and what are your operating hours?',
    answer: 'We proudly serve all of Queens, Long Island (Nassau & Suffolk counties), Brooklyn, and the Greater NYC metro area. Our mobile units operate Monday through Saturday from 7:00 AM to 6:00 PM, and Sundays from 8:00 AM to 4:00 PM by appointment.'
  },
  {
    id: 'faq-3',
    category: 'booking',
    question: 'How do I book an on-site mobile appointment or get an instant quote?',
    answer: 'You can call or text us directly at (347) 946-2748 for immediate scheduling and customer inquiries. You can also use the Instant Quote Builder on this page to configure your vehicle, view upfront pricing, and submit a booking request for your preferred date and address.'
  },
  {
    id: 'faq-4',
    category: 'services',
    question: 'What is included in the Full Interior Deep Clean & Steam Sanitization?',
    answer: 'Our interior service includes deep high-suction vacuuming, heated hot-water extraction on carpets and fabric seats, 220°F pressurized dry-vapor steam sanitization through all AC vents and console crevices, pH-balanced leather conditioning, door jamb cleaning, and streak-free crystal glass cleaning.'
  },
  {
    id: 'faq-5',
    category: 'wash',
    question: 'Why is your Complete Mobile Hand Wash safer than automated or tunnel washes?',
    answer: 'Automated tunnel washes use abrasive spinning brushes that trap road sand and dirt from previous vehicles, scouring spiderweb swirls into your clear coat. We use a two-bucket grit-guard hand wash method with plush microfiber wash mitts, pH-neutral foam, and pure deionized water, guaranteeing a 100% scratch-free finish.'
  },
  {
    id: 'faq-6',
    category: 'paint',
    question: 'Can you perform Paint Correction and Scratch Removal on-site at my home?',
    answer: 'Absolutely. We carry heavy-duty mobile lighting, digital ultrasonic paint depth gauges, and professional dual-action polishers (Rupes & Flex) inside our mobile rig. As long as there is reasonable driveway or garage access, we can safely eliminate 80% to 90%+ of swirls and scratches right at your location.'
  }
];

export const STYLE_GUIDE_DATA = {
  themeName: "Jonathan's Mobile Carwash & Detailing Aesthetic",
  conceptOverview: "High-contrast dark obsidian canvas with vibrant electric amber and cyber gold accents, emphasizing premium on-site mobile car wash & detailing with water and power onboard across Queens, Long Island & Greater NYC.",
  colors: [
    { name: "Obsidian Carbon (Canvas)", hex: "#090B10", role: "Primary background providing high contrast and deep luxury depth" },
    { name: "Graphite Surface", hex: "#121620", role: "Component cards, elevated containers, and structural panels" },
    { name: "Electric Amber (CTA Accent)", hex: "#F59E0B", role: "Primary conversion trigger, badges, star ratings, and active highlights" },
    { name: "Molten Gold Glow", hex: "#D97706", role: "Glow gradients, hover states, and accent borders" },
    { name: "Deionized Cyan", hex: "#38BDF8", role: "Technical callouts, wash specs, and water & power metrics" },
    { name: "Pure Platinum", hex: "#F8FAFC", role: "High-legibility primary display headlines and badges" },
    { name: "Muted Steel", hex: "#94A3B8", role: "Secondary labels, technical specs, and body descriptions" }
  ],
  typography: {
    displayHeading: "Outfit / Space Grotesk (700/800 Bold)",
    technicalMonospace: "Space Grotesk (500 Medium) with tabular figures",
    body: "Plus Jakarta Sans (400 Regular / 500 Medium) for crisp 16px+ baseline readability"
  },
  heroConcept: {
    headline: "Jonathan's Mobile Carwash",
    subheadline: "Premium On-Site Mobile Car Wash & Detailing — We Bring the Care Directly to Your Doorstep.",
    primaryCta: "CALL NOW: (347) 946-2748",
    secondaryCta: "BOOK MOBILE DETAIL",
    visualStyle: "Self-contained mobile detailing rig, pure deionized spot-free water, onboard generator, and 4.9★ verified customer reviews across Queens, Long Island & NYC."
  },
  wireframeSections: [
    { number: "01", name: "Global Header & Status Bar", purpose: "Persistent trust signals (4.9★, Queens & Long Island Mobile Unit, Water & Power Onboard, direct call (347) 946-2748)" },
    { number: "02", name: "Hero Showcase & Mobile Rig Specs", purpose: "Premium On-Site Mobile Car Wash & Detailing headline, doorstep convenience, and instant booking" },
    { number: "03", name: "Featured Services Breakdown (5 Disciplines)", purpose: "Mobile Hand Wash & Wax, Interior Steam Sanitization, Paint Correction, Leather Care & Carpet Extraction, Ceramic Maintenance & Rim Detailing" },
    { number: "04", name: "Mobile Detailing Standards & Rig Hardware", purpose: "Deionized water filtration, quiet commercial generator, 220°F steam sanitizers, dual-action polishers" },
    { number: "05", name: "Interactive Pricing & Package Matrix", purpose: "Clear transparent pricing tiers with vehicle size adjustments" },
    { number: "06", name: "Live Quote & Multi-Step Mobile Booking", purpose: "High-conversion lead capture, doorstep dispatch scheduling, and instant quote calculator" },
    { number: "07", name: "Verified Customer Reviews (142+ Reviews)", purpose: "Social proof with Queens, Long Island, and NYC authenticity (4.9 / 5.0)" },
    { number: "08", name: "Interactive Mobile Detailing FAQ", purpose: "Answers for water/power onboard, service areas, hand wash safety, and steam extraction" },
    { number: "09", name: "Mobile Coverage & Direct Contact Section", purpose: "Queens, Long Island & Greater NYC coverage map, schedule, and direct phone inquiry (347) 946-2748" }
  ]
};

