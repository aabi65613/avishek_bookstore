// src/components/ProductDisplay.tsx - RESPONSIVE GRID FIX
import React from 'react';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';
import { demoProducts, getCategories } from '@/data/products';

const ProductDisplay = () => {
  const categories = getCategories();
  const products = demoProducts;

  return (
    <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-12">
      {/* Iterate through each category */}
      {categories.map((category) => {
        // Filter products belonging to the current category
        const productsInCategory = products.filter(
          (product) => product.category === category
        );

        // If no products in this category, don't render the section
        if (productsInCategory.length === 0) {
          return null;
        }

        // Generate an ID for the section based on the category name
        const categoryId = category.toLowerCase().replace(/\s+/g, '-');

        return (
          <section key={category} id={categoryId} className="mb-8 sm:mb-12 md:mb-16 scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-l-4 border-primary-color pl-3">
              {category}
            </h2>
            
            {/* IMPROVED RESPONSIVE GRID LAYOUT */}
            {/* Mobile: 2 cols | Tablet: 3 cols | Desktop: 4 cols | XL: 5 cols */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {/* Map through products in this category and render ProductCard */}
              {productsInCategory.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProductDisplay;
