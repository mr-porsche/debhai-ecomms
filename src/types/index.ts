export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  tags: string[];
  brand: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  subcategories: string[];
  icon: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterOptions {
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
  rating: number;
  inStock: boolean;
  searchQuery: string;
}
