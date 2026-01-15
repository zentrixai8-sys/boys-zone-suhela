
import { Product, Category } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic White Oversized Tee',
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    category: 'T-Shirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    description: 'A premium heavy cotton oversized t-shirt designed for ultimate comfort and street style.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Midnight Black Denim Jacket',
    price: 89.99,
    originalPrice: 120.00,
    discount: 25,
    category: 'Jackets',
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&w=800&q=80',
    description: 'Durable and stylish midnight black denim jacket with adjustable waist tabs and premium hardware.',
    sizes: ['M', 'L', 'XL'],
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Desert Sand Cargo Pants',
    price: 54.99,
    originalPrice: 65.00,
    discount: 15,
    category: 'Jeans',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
    description: 'Utility-focused cargo pants with multiple pockets and a relaxed taper fit.',
    sizes: ['30', '32', '34', '36'],
    inStock: true
  },
  {
    id: '4',
    name: 'Navy Blue Oxford Shirt',
    price: 45.00,
    originalPrice: 55.00,
    discount: 18,
    category: 'Shirts',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    description: 'Classic fit Oxford shirt perfect for both casual and semi-formal occasions.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Slate Grey Essential Hoodie',
    price: 59.99,
    originalPrice: 75.00,
    discount: 20,
    category: 'Hoodies',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
    description: 'Plush fleece hoodie with a modern minimalist silhouette and kangaroo pocket.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: '6',
    name: 'Vintage Wash Slim Jeans',
    price: 69.99,
    originalPrice: 85.00,
    discount: 17,
    category: 'Jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80',
    description: 'Slim-fit denim with a unique vintage wash and stretch for all-day comfort.',
    sizes: ['30', '32', '34', '36'],
    inStock: true,
    featured: true
  }
];

export const CATEGORIES: Category[] = ['All', 'T-Shirts', 'Shirts', 'Jeans', 'Hoodies', 'Jackets'];
