// src/app/page.tsx - WITH ANIMATED HERO SLIDER
"use client";

import React, { useState } from 'react';
import SimpleProductSlider from '@/components/SimpleProductSlider';
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
      {/* Simple Product Slider - NEW COMPONENT */}
      <section>
        <SimpleProductSlider />
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
    </div>
  );
};

export default HomePage;
