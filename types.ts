export interface BrokenLink {
  id: string;
  url: string;
  sourcePage: string;
  statusCode: number;
  detectedAt: string;
  severity: 'high' | 'medium' | 'low';
  suggestedFix?: string;
}

export interface Plan {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  isPopular?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}
