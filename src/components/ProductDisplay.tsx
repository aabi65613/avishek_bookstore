// src/components/ProductDisplay.tsx
import React from 'react';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';
import { demoProducts, getCategories } from '@/data/products'; // Import products and categories

const ProductDisplay = () => {
  const categories = getCategories();
  const products = demoProducts;

  return (
    <div className="container mx-auto px-4 py-12">
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
          <section key={category} id={categoryId} className="mb-16 scroll-mt-20"> {/* Add scroll-mt for header offset */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-l-4 border-primary-color pl-3">
              {category} {/* Category Title */}
            </h2>
            {/* Grid layout for products within the category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {/* Map through products in this category and render ProductCard */}
              {productsInCategory.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProductDisplay;

