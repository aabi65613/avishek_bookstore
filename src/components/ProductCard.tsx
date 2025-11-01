// src/components/ProductCard.tsx - FINAL, CLEANED FIX
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
// import { motion } from 'framer-motion'; 

interface ProductCardProps {
  product: Product;
  index: number; 
}

// Currency formatter defined INLINE (FIXED the Module not found error)
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(amount);
};

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addToCart } = useCart();

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 border border-gray-100 hover:shadow-xl hover:scale-[1.03] transform"
    >
      <Link href={`/products/${product.id}`} className="relative block h-56 w-full">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-opacity duration-500 hover:opacity-90"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          onError={(e) => {
             e.currentTarget.src = "/placeholder-product.png";
             e.currentTarget.style.objectFit = 'contain';
          }}
        />
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        {/* Title and Category using brand colors */}
        <p className="text-xs font-medium text-secondary-color uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="text-lg font-semibold text-text-color mb-2 truncate">
          <Link href={`/products/${product.id}`} className="hover:text-primary-color transition-colors">
            {product.title}
          </Link>
        </h3>

        {/* Price using primary color - NOW RUPEES */}
        <div className="text-xl font-bold text-primary-color mb-3 mt-auto">
          {formatCurrency(product.price)}
        </div>

        {/* Add to Cart Button (Animated) */}
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-primary-color text-white py-2 rounded-lg font-medium transition-all duration-200 hover:bg-secondary-color focus:ring-2 focus:ring-secondary-color focus:ring-offset-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
