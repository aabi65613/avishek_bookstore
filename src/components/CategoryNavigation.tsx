// src/components/CategoryNavigation.tsx - ENHANCED WITH SMOOTH SCROLL ANIMATION
"use client";

import React, { useState } from 'react';

interface CategoryNavigationProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({ 
  categories, 
  onCategorySelect 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0] || '');

  // Handle smooth scroll to category section with enhanced animation
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategorySelect(category);

    // Scroll to the section with smooth behavior
    const element = document.getElementById(`category-${category}`);
    if (element) {
      // Use requestAnimationFrame for smoother animation
      requestAnimationFrame(() => {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
      });
    }
  };

  return (
    <nav
      className="w-full bg-white shadow-md border-b-2 border-gray-100"
      style={{
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`relative px-4 sm:px-6 py-2 font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-300 transform hover:scale-105 rounded-full ${
                activeCategory === category
                  ? 'text-white shadow-lg'
                  : 'text-text-color hover:text-secondary-color'
              }`}
              style={{
                animation: `slideInFromTop 0.5s ease-out ${index * 0.08}s both`,
              }}
            >
              {/* Background pill for active category */}
              {activeCategory === category && (
                <span
                  className="absolute inset-0 bg-gradient-to-r from-primary-color via-slate-700 to-secondary-color rounded-full -z-10 transition-all duration-300"
                  style={{
                    animation: 'expandWidth 0.4s ease-out',
                  }}
                />
              )}
              {category}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
};

export default CategoryNavigation;
