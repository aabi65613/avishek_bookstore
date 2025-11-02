// src/components/ProductCard.tsx - WITH MODAL TRIGGER
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import ProductDescriptionModal from './ProductDescriptionModal';

interface ProductCardProps {
  product: Product;
  index: number; 
}

// Currency formatter defined INLINE
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(amount);
};

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleAddToCart = () => {
    addToCart(product);
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 border border-gray-100 hover:shadow-2xl hover:scale-[1.03] hover:rotate-1 transform"
        style={{
          animation: `slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s both`,
        }}
      >
        {/* Clickable Image */}
        <button
          onClick={handleImageClick}
          className="relative block w-full aspect-square sm:h-56 bg-gray-100 cursor-pointer group overflow-hidden"
        >
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-all duration-500 group-hover:opacity-80 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            onError={(e) => {
              e.currentTarget.src = "/placeholder-product.png";
              e.currentTarget.style.objectFit = 'contain';
            }}
          />
          
          {/* Overlay with "View Details" text */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Details
            </span>
          </div>
        </button>
        
        <div className="p-3 flex flex-col">
          {/* Title and Category using brand colors */}
          <p className="text-[10px] font-medium text-secondary-color uppercase tracking-wider mb-0.5">
            {product.category}
          </p>
          <h3 className="text-base font-semibold text-text-color mb-1 truncate">
            <Link href={`/products/${product.id}`} className="hover:text-primary-color transition-colors">
              {product.title}
            </Link>
          </h3>

          {/* Price using primary color - NOW RUPEES */}
          <div className="text-lg font-bold text-primary-color mb-2">
            {formatCurrency(product.price)}
          </div>

          {/* Add to Cart Button (Animated) */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-primary-color text-white py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-secondary-color focus:ring-2 focus:ring-secondary-color focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Description Modal */}
      <ProductDescriptionModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <style jsx>{`
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateX(-50px) translateY(20px); /* Slide from left and up */
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
}
      `}</style>
    </>
  );
};

export default ProductCard;
