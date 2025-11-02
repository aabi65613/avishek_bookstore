// src/components/CategorySection.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';

interface CategorySectionProps {
  category: string;
  products: Product[];
  index: number;
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  category, 
  products, 
  index 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`category-${category}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [category, hasAnimated]);

  return (
    <section
      id={`category-${category}`}
      className="py-16 px-4 scroll-mt-24 transition-all duration-500"
      style={{
        animation: isVisible
          ? `fadeInUp 0.8s ease-out ${index * 0.1}s both`
          : 'none',
      }}
    >
      <div className="container mx-auto">
        {/* Category Header with animated underline */}
        <div className="mb-12 relative">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-text-color mb-2"
            style={{
              animation: isVisible
                ? `slideInFromLeft 0.6s ease-out ${index * 0.1}s both`
                : 'none',
            }}
          >
            {category}
          </h2>
          <div
            className="h-1 w-24 bg-gradient-to-r from-primary-color to-secondary-color rounded-full"
            style={{
              animation: isVisible
                ? `expandWidth 0.8s ease-out ${index * 0.15}s both`
                : 'none',
            }}
          />
          <p
            className="text-gray-600 mt-2 text-lg"
            style={{
              animation: isVisible
                ? `fadeIn 0.6s ease-out ${index * 0.2}s both`
                : 'none',
            }}
          >
            Discover our premium {category.toLowerCase()} collection
          </p>
        </div>

        {/* Products Grid with staggered animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, productIndex) => (
            <div
              key={product.id}
              style={{
                animation: isVisible
                  ? `slideInUp 0.6s ease-out ${
                      index * 0.1 + productIndex * 0.05
                    }s both`
                  : 'none',
              }}
            >
              <ProductCard product={product} index={productIndex} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default CategorySection;
