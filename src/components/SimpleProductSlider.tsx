// src/components/SimpleProductSlider.tsx - BASED ON USER'S CODE
"use client";

import { useRef } from "react";
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { demoProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

// Currency formatter defined INLINE
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(amount);
};

export default function SimpleProductSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();
  const products = demoProducts.slice(0, 8); // Use more products for a proper slider

  const scroll = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Calculate scroll amount based on card width + gap
    const cardWidth = 250; // min-w-[250px]
    const gap = 24; // gap-6 (6 * 4px = 24px)
    const scrollAmount = cardWidth + gap;

    slider.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex flex-col items-center py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-primary-color mb-8">Featured Products</h2>
      
      <div className="relative w-full max-w-6xl px-4">
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between z-10 px-4 sm:px-0">
          <button
            onClick={() => scroll("left")}
            className="bg-white/80 p-3 rounded-full shadow-lg text-primary-color hover:bg-white transition-colors hover:scale-110"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white/80 p-3 rounded-full shadow-lg text-primary-color hover:bg-white transition-colors hover:scale-110"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Slider Content */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-scroll scroll-smooth scrollbar-hide w-full py-4 px-10"
        >
          {products.map((p, i) => (
            <div
              key={p.id}
              className="min-w-[250px] bg-white rounded-2xl shadow-xl p-4 flex flex-col transition-transform duration-300 hover:scale-[1.02] border border-gray-100"
              style={{
                animation: `scaleIn 0.6s ease-out ${i * 0.05}s both`,
              }}
            >
              {/* Product Image */}
              <div className="relative h-40 w-full bg-gray-100 rounded-xl mb-4 overflow-hidden">
                <Image
                  src={p.imageUrl}
                  alt={p.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="250px"
                />
              </div>
              
              {/* Product Details */}
              <h3 className="font-semibold text-sm text-secondary-color uppercase mb-1">{p.category}</h3>
              <h3 className="font-semibold text-lg text-text-color truncate mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm mb-3 line-clamp-2">{p.description}</p>
              
              {/* Price and Button */}
              <p className="text-xl font-bold text-primary-color mt-auto mb-3">{formatCurrency(p.price)}</p>
              <button 
                onClick={() => addToCart(p)}
                className="bg-primary-color text-white px-4 py-2 rounded-xl hover:bg-secondary-color transition-colors font-medium"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
