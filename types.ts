export enum Flavor {
  CHICKEN = 'Chicken',
  SALMON = 'Salmon',
  TUNA = 'Tuna',
  BEEF = 'Beef',
  SHRIMP = 'Shrimp',
}

export interface ProductVariant {
  weight: string;
  price: number;
  sku: string;
}

export interface Product {
  id: string;
  name: string;
  flavor: Flavor;
  description: string;
  slogan?: string;
  price: number;
  imageColor: string; 
  starburstColor?: string; // Hex or tailwind class for the #1 badge
  weight: string;
  rating: number;
  reviews: number;
  catImage?: string;
  foodImage?: string;
  variants?: ProductVariant[];
  sku?: string;
  isGrainFree?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}