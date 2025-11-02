// src/components/AnimatedHeroSlider.tsx - HORIZONTAL CAROUSEL WITH CURVED SIDES
"use client";

import React, { useState, useEffect } from 'react';

interface SlideContent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  icon: string;
}

const AnimatedHeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at center slide
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides: SlideContent[] = [
    {
      id: 0,
      title: "Stationery & Writing",
      subtitle: "Premium Collection",
      description: "Discover our finest selection of pens, notebooks, and writing essentials.",
      color: "from-blue-500 to-blue-600",
      icon: "✏️",
    },
    {
      id: 1,
      title: "Discover Our Premium Collection",
      subtitle: "Welcome to Books.shyamnagar",
      description: "Discount beyond your expectations. Shop the latest styles and quality products delivered fast.",
      color: "from-primary-color to-slate-800",
      icon: "🎁",
    },
    {
      id: 2,
      title: "Art & Craft",
      subtitle: "Creative Supplies",
      description: "Explore our amazing collection of art supplies, brushes, and craft materials.",
      color: "from-purple-500 to-purple-600",
      icon: "🎨",
    },
  ];

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
    <div className="relative w-full bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Main Carousel Container */}
      <div className="relative h-96 md:h-[500px] flex items-center justify-center px-4 py-8">
        {/* Slides Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {slides.map((slide, index) => {
            const position = (index - currentSlide + slides.length) % slides.length;
            let translateX = 0;
            let scale = 1;
            let opacity = 0;
            let zIndex = 0;
            let borderRadius = "0px";

            if (position === 0) {
              // Left curved slide
              translateX = -100;
              scale = 0.75;
              opacity = 0.6;
              zIndex = 1;
              borderRadius = "0 50px 50px 0"; // Curved right side
            } else if (position === 1) {
              // Center stable slide
              translateX = 0;
              scale = 1;
              opacity = 1;
              zIndex = 10;
              borderRadius = "20px";
            } else if (position === 2) {
              // Right curved slide
              translateX = 100;
              scale = 0.75;
              opacity = 0.6;
              zIndex = 1;
              borderRadius = "50px 0 0 50px"; // Curved left side
            }

            return (
              <div
                key={slide.id}
                className="absolute w-full max-w-2xl h-full transition-all duration-700 ease-out"
                style={{
                  transform: `translateX(${translateX}%) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
              >
                <div
                  className={`relative w-full h-full bg-gradient-to-br ${slide.color} rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8 text-white`}
                  style={{
                    borderRadius,
                  }}
                >
                  {/* Background blur effect */}
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div
                      className="text-6xl md:text-7xl mb-4"
                      style={{
                        animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                      }}
                    >
                      {slide.icon}
                    </div>
                    <h2
                      className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight"
                      style={{
                        animation: `slideInUp 0.6s ease-out ${index * 0.1 + 0.1}s both`,
                      }}
                    >
                      {slide.title}
                    </h2>
                    <p
                      className="text-lg md:text-xl font-semibold mb-4 text-white/90"
                      style={{
                        animation: `slideInUp 0.6s ease-out ${index * 0.1 + 0.2}s both`,
                      }}
                    >
                      {slide.subtitle}
                    </p>
                    <p
                      className="text-base md:text-lg text-white/80 max-w-xl mx-auto"
                      style={{
                        animation: `slideInUp 0.6s ease-out ${index * 0.1 + 0.3}s both`,
                      }}
                    >
                      {slide.description}
                    </p>
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-primary-color p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          style={{
            animation: 'slideInFromLeft 0.6s ease-out 0.3s both',
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNextSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-primary-color p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          style={{
            animation: 'slideInFromRight 0.6s ease-out 0.3s both',
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
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
            style={{
              animation: `slideInUp 0.6s ease-out ${index * 0.1 + 0.4}s both`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes slideInUp {
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
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedHeroSlider;
