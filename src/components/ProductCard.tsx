// src/components/ProductCard.tsx - WITH MODAL TRIGGER - RESPONSIVE FIX
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
          animation: ,
        }}
      >
        {/* Clickable Image - PERFECT SQUARE FOR ALL SCREEN SIZES */}
        <button
          onClick={handleImageClick}
          className="relative block w-full aspect-square bg-gray-100 cursor-pointer group overflow-hidden"
        >
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-all duration-500 group-hover:opacity-80 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            onError={(e) => {
              e.currentTarget.src = "/placeholder-product.png";
              e.currentTarget.style.objectFit = 'contain';
            }}
          />

          {/* Overlay with "View Details" text */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-sm sm:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Details
            </span>
          </div>
        </button>

        {/* RESPONSIVE PADDING */}
        <div className="p-2 sm:p-3 md:p-4 flex flex-col flex-grow">
          {/* Title and Category using brand colors - RESPONSIVE TEXT */}
          <p className="text-[9px] sm:text-[10px] font-medium text-secondary-color uppercase tracking-wider mb-0.5">
            {product.category}
          </p>
          <h3 className="text-sm sm:text-base font-semibold text-text-color mb-1 line-clamp-2">
            <Link href={} className="hover:text-primary-color transition-colors">
              {product.title}
            </Link>
          </h3>

          {/* Price using primary color - RESPONSIVE TEXT */}
          <div className="text-base sm:text-lg font-bold text-primary-color mb-2">
            {formatCurrency(product.price)}
          </div>

          {/* Add to Cart Button (Animated) - RESPONSIVE */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-primary-color text-white py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 hover:bg-secondary-color focus:ring-2 focus:ring-secondary-color focus:ring-offset-2 mt-auto"
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

      <style jsx>{}</style>
    </>
  );
};

export default ProductCard;
