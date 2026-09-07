export type VehicleType = 'coupe' | 'sedan' | 'suv' | 'truck' | 'exotic';

export interface VehicleOption {
  id: VehicleType;
  name: string;
  category: string;
  multiplier: number;
  iconName: string;
  examples: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  startingPrice: number;
  duration: string;
  popular?: boolean;
  features: string[];
  specs: { label: string; value: string }[];
  idealFor: string;
  imageUrl: string;
}

export interface PackageTier {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  duration: string;
  warranty: string;
  popular?: boolean;
  bestValue?: boolean;
  serviceType: string;
  includes: string[];
  perfectFor: string;
}

export interface AddOnOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  vehicle: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  highlight: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'ceramic' | 'correction' | 'mobile' | 'general' | 'tinting' | 'booking' | string;
}

export interface BookingFormData {
  vehicleType: VehicleType;
  vehicleYearMakeModel: string;
  serviceId: string;
  packageTierId?: string;
  selectedAddOns: string[];
  serviceMode: 'studio' | 'mobile';
  mobileAddress?: string;
  preferredDate: string;
  preferredTime: string;
  fullName: string;
  email: string;
  phone: string;
  specialNotes?: string;
}
