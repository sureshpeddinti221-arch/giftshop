export interface ProductOption {
  id: string;
  label: string;
  priceAdjustment?: number;
  image?: string;
}

export interface Review {
  id: string;
  userName: string;
  userImage?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  occasion?: string;
  rating: number;
  isNew?: boolean;
  description?: string;
  videoUrl?: string;
  customerPhotos?: string[];
  reviews?: Review[];
  options?: {
    name: string;
    values: ProductOption[];
  }[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Occasion {
  id: string;
  name: string;
  image: string;
}
