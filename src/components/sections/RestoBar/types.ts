export interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: 'smoothies' | 'protein-shakes' | 'healthy-snacks';
  image: string;
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
  };
}