export interface PlantCardProps {
  plant: Plant;
  onAddToCart: (plant: Plant) => void;
  style?: React.CSSProperties;
}
export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  category: PlantCategory;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  careLevel: 'Easy' | 'Moderate' | 'Challenging';
  light: 'Low' | 'Medium' | 'High';
  water: 'Low' | 'Medium' | 'High';
  size: 'Small' | 'Medium' | 'Large';
  inStock: boolean;
  rating: number;
  reviews: number;
  features: string[];
}

export type PlantCategory = 'indoor' | 'outdoor' | 'succulents' | 'flowering' | 'herbs';

export interface CartItem {
  plant: Plant;
  quantity: number;
}

export interface DeliveryZone {
  id: string;
  name: string;
  deliveryFee: number;
  estimatedDays: number;
}