// src/types/product.ts

// Define the structure for a single product
// This interface ensures consistency across all product data
export interface Product {
  id: number; // Unique identifier for the product
  category: string; // Category the product belongs to (e.g., 'Skincare', 'Books')
  title: string; // Name of the product
  price: number; // Price of the product
  description: string; // Short description of the product
  imageUrl: string; // Path to the product image (e.g., '/products/book1.jpg')
}

