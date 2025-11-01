// src/components/FeaturedProductsSlider.tsx
"use client"; // Required for Swiper component

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'; // Import desired modules
import { demoProducts } from '@/data/products'; // Import demo products
import ProductCard from './ProductCard'; // Reuse the ProductCard component

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Import fade effect CSS if using it

const FeaturedProductsSlider = () => {
  // Select a subset of products to feature in the slider (e.g., first 6)
  const featuredProducts = demoProducts.slice(0, 6);

  return (
    <section id="featured" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Products</h2>
        <Swiper
          // Install Swiper modules
          modules={[Navigation, Pagination, Autoplay, EffectFade]} // Add EffectFade for smooth transitions
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Default slides per view
          loop={true} // Enable looping
          autoplay={{
            delay: 4000, // Autoplay delay in ms
            disableOnInteraction: false, // Autoplay continues after user interaction
          }}
          pagination={{ clickable: true }} // Enable clickable pagination dots
          navigation={true} // Enable navigation arrows
          effect="fade" // Use fade effect for single slide view
          fadeEffect={{
             crossFade: true // Enable cross-fade for smoother transitions
          }}
          className="pb-10" // Add padding bottom for pagination dots
          // Responsive breakpoints
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              effect: "slide", // Switch back to slide effect for multiple views
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              effect: "slide",
            },
             // when window width is >= 1280px
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
              effect: "slide",
            },
          }}
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id} className="h-auto pb-4"> {/* Ensure slides adapt height */}
              <div className="h-full"> {/* Wrapper to ensure card takes full height */} 
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProductsSlider;

