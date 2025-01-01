export interface OfferType {
  title: string;
  description: string;
  price: number;
  duration: string;
  validity: string;
  features: string[];
  featured?: boolean;
}