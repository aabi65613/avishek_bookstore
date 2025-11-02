// src/app/page.tsx - WITH CATEGORY NAVIGATION AND ANIMATED SECTIONS
"use client";

import React, { useState } from 'react';
import CategoryNavigation from '@/components/CategoryNavigation';
import CategorySection from '@/components/CategorySection';
import { demoProducts, getCategories } from '@/data/products';

const HomePage = () => {
  const products = demoProducts;
  const categories = getCategories();
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0] || '');

  // Group products by category
  const productsByCategory: { [key: string]: typeof products } = {};
  categories.forEach((category) => {
    productsByCategory[category] = products.filter(
      (product) => product.category === category
    );
  });

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Brand Colors */}
      <section className="text-center py-24 px-4 bg-gradient-to-br from-primary-color to-slate-800 text-white shadow-lg">
        <div className="container mx-auto">
          <h1 
            className="text-5xl md:text-6xl font-extrabold text-secondary-color mb-4 leading-tight"
            style={{
              animation: 'fadeInDown 0.8s ease-out',
            }}
          >
            Discover Our Premium Collection
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.2s both',
            }}
          >
            Discount beyond your expectations. Shop the latest styles and quality products delivered fast.
          </p>
          <a
            href="#categories"
            className="inline-block bg-secondary-color text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-md"
            style={{
              animation: 'slideInUp 0.8s ease-out 0.4s both',
            }}
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Category Navigation Bar */}
      <section id="categories" className="sticky top-0 z-30 bg-white shadow-md">
        <CategoryNavigation 
          categories={categories} 
          onCategorySelect={handleCategorySelect}
        />
      </section>

      {/* Category Sections with Products */}
      <div className="bg-gray-50">
        {categories.map((category, index) => (
          <CategorySection
            key={category}
            category={category}
            products={productsByCategory[category]}
            index={index}
          />
        ))}
      </div>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-primary-color text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Shop?</h2>
          <p className="text-lg mb-8 text-gray-200">
            Browse our complete collection and find exactly what you're looking for.
          </p>
          <a
            href="#categories"
            className="inline-block bg-secondary-color text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            Explore Categories
          </a>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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
      `}</style>
    </div>
  );
};

export default HomePage;
