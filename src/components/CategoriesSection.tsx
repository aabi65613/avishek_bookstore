// src/components/CategoriesSection.tsx
import React from 'react';
import { getCategories } from '@/data/products'; // Import function to get categories

const CategoriesSection = () => {
  const categories = getCategories(); // Fetch the unique category names

  return (
    <section id="categories" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Shop by Category</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Map through the categories and create a button/link for each */}
          {categories.map((category) => (
            <a
              key={category} // Use category name as key (assuming unique)
              href={`#${category.toLowerCase().replace(/\s+/g, '-')}`} // Simple anchor link for now
              className="bg-gray-100 hover:bg-primary-color hover:text-white text-gray-700 font-medium py-2 px-5 rounded-full transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              {category} {/* Display category name */}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

