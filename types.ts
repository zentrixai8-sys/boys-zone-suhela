
export type Category = 'T-Shirts' | 'Shirts' | 'Jeans' | 'Hoodies' | 'Jackets' | 'All';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  category: Category;
  image: string;
  description: string;
  sizes: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export interface User {
  email: string;
  name: string;
  isLoggedIn: boolean;
}
