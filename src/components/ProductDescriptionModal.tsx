// src/components/ProductDescriptionModal.tsx
"use client";

import React, { useEffect } from 'react';
import { Product } from '@/types/product';
import { X } from 'lucide-react';
import Image from 'next/image';

interface ProductDescriptionModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(amount);
};

const ProductDescriptionModal: React.FC<ProductDescriptionModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <>
      {/* Backdrop with fade animation */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        onClick={onClose}
        style={{
          animation: 'fadeIn 0.3s ease-out',
        }}
      />

      {/* Modal with slide and scale animation */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
        style={{
          animation: 'fadeIn 0.3s ease-out',
        }}
      >
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
          style={{
            animation: 'slideInUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 z-10"
            style={{
              animation: 'slideInFromRight 0.4s ease-out 0.1s both',
            }}
          >
            <X size={24} className="text-gray-700" />
          </button>

          {/* Modal Content */}
          <div className="p-8">
            {/* Product Image */}
            <div
              className="relative w-full h-96 mb-8 rounded-xl overflow-hidden bg-gray-100"
              style={{
                animation: 'fadeInUp 0.5s ease-out',
              }}
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 600px"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder-product.png';
                  e.currentTarget.style.objectFit = 'contain';
                }}
              />
            </div>

            {/* Product Details */}
            <div
              style={{
                animation: 'fadeInUp 0.5s ease-out 0.1s both',
              }}
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block bg-gradient-to-r from-primary-color to-secondary-color text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-text-color mb-4">
                {product.title}
              </h2>

              {/* Price */}
              <div className="text-3xl font-bold text-primary-color mb-6">
                {formatCurrency(product.price)}
              </div>

              {/* Divider */}
              <div className="w-full h-1 bg-gradient-to-r from-primary-color via-secondary-color to-accent-color rounded-full mb-6" />

              {/* Description */}
              <div
                className="mb-8"
                style={{
                  animation: 'fadeInUp 0.5s ease-out 0.2s both',
                }}
              >
                <h3 className="text-xl font-bold text-text-color mb-3">
                  Product Description
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Additional Info */}
              <div
                className="grid grid-cols-2 gap-4 mb-8"
                style={{
                  animation: 'fadeInUp 0.5s ease-out 0.3s both',
                }}
              >
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 font-medium">Product ID</p>
                  <p className="text-lg font-bold text-text-color">{product.id}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 font-medium">Category</p>
                  <p className="text-lg font-bold text-secondary-color">
                    {product.category}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                className="flex gap-4"
                style={{
                  animation: 'fadeInUp 0.5s ease-out 0.4s both',
                }}
              >
                <button
                  onClick={onClose}
                  className="flex-1 bg-primary-color text-white py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-opacity-90 hover:scale-105"
                >
                  Add to Cart
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 border-2 border-primary-color text-primary-color py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-primary-color hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default ProductDescriptionModal;
