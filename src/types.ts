export interface WaterService {
  id: string;
  title: string;
  description: string;
  features: string[];
  capacityOptions: string[];
  lucideIconName: string;
  badge: string;
  whatsappMessage: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'delivery' | 'quality' | 'pricing' | 'general';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  rating: number; // 1-5
  date: string;
}

export interface CoverageDistrict {
  name: string;
  deliveryTime: string;
  status: 'active' | 'high-demand' | 'scheduled';
  popularFor: string;
}

export interface WaterCalculationResult {
  estimatedLitres: number;
  tankPercentage: number;
  priceFactor: number;
}
