// src/components/AnimatedHeroSlider.tsx - FINAL REFINEMENT WITH PRODUCT DATA AND TILT EFFECT
"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { demoProducts } from '@/data/products';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

// Currency formatter defined INLINE
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(amount);
};

const AnimatedHeroSlider: React.FC = () => {
  const { addToCart } = useCart();
  // Use the first 3 products for the slider
  const slides = demoProducts.slice(0, 3); 
  
  const [currentSlide, setCurrentSlide] = useState(1); // Start at center slide
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Main Carousel Container */}
      <div className="relative h-96 md:h-[500px] flex items-center justify-center px-4 py-8">
        {/* Slides Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {slides.map((slide, index) => {
            // Calculate the position relative to the current slide
            const position = (index - currentSlide + slides.length) % slides.length;
            let translateX = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;
            let filter = "brightness(1)";
            let pointerEvents = "auto";
            let transformSkew = "none";

            if (position === 1) {
              // Center stable slide
              translateX = 0;
              scale = 1;
              zIndex = 20;
              transformSkew = "none";
            } else if (position === 0) {
              // Left side slide (partially visible)
              translateX = -50; // Pull it slightly to the left
              scale = 0.9;
              zIndex = 10;
              // filter = "brightness(0.8)";
              // pointerEvents = "none";
              transformSkew = "skewY(2deg)"; // Slight tilt
            } else if (position === 2) {
              // Right side slide (partially visible)
              translateX = 50; // Push it slightly to the right
              scale = 0.9;
              zIndex = 10;
              // filter = "brightness(0.8)";
              // pointerEvents = "none";
              transformSkew = "skewY(-2deg)"; // Slight tilt
            }

            return (
              <div
                key={slide.id}
                className="absolute w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-full transition-all duration-700 ease-out"
                style={{
                  transform: `translateX(${translateX}%) scale(${scale}) ${transformSkew}`,
                  transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.7s ease-out',
                  opacity,
                  zIndex,
                  filter,
                  pointerEvents,
                }}
              >
                <div
                  className={`relative w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8 text-text-color border border-gray-100`}
                  style={{
                    // Custom curvature for the side slides
                    borderRadius: position === 1 ? "20px" : "50px",
                  }}
                >
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
                      {slide.category}
                    </h3>
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={slide.imageUrl}
                        alt={slide.title}
                        fill
                        style={{ objectFit: 'contain' }}
                        sizes="128px"
                      />
                    </div>
                    <h2
                      className="text-2xl md:text-3xl font-extrabold mb-3 leading-tight"
                    >
                      {slide.title}
                    </h2>
                    <p
                      className="text-lg font-bold text-primary-color mb-4"
                    >
                      {formatCurrency(slide.price)}
                    </p>
                    <p
                      className="text-base text-gray-700 max-w-xl mx-auto mb-6 line-clamp-2"
                    >
                      {slide.description}
                    </p>
                    
                    <button
                      onClick={() => addToCart(slide)}
                      className="bg-primary-color text-white px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:bg-secondary-color hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-primary-color p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <ArrowLeft size={24} />
        </button>

        <button
          onClick={handleNextSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-primary-color p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <ArrowRight size={24} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-3 pb-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? 'bg-primary-color w-8 h-3'
                : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedHeroSlider;
