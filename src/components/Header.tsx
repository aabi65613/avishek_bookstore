// src/components/Header.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
// import { motion } from 'framer-motion'; // <-- COMMENTED OUT: Build Fix

const Header = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Replaced motion.header with standard <header>
  return (
    <header className="sticky top-0 z-40 w-full bg-primary-color text-white shadow-xl transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Site Title */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide text-secondary-color hover:text-white transition-colors">
          Books.shyamnagar
        </Link>

        {/* Navigation/Cart */}
        <nav className="flex items-center space-x-6">
          {/* Main Links (Optional) */}
          <Link href="/about" className="text-white font-medium hover:text-secondary-color transition-colors hidden sm:inline">
            About
          </Link>
          <Link href="/contact" className="text-white font-medium hover:text-secondary-color transition-colors hidden sm:inline">
            Contact
          </Link>

          {/* Cart Icon */}
          <Link href="/cart" className="relative p-2 rounded-full hover:bg-white/10 transition-colors">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              // Replaced motion.span with standard <span>
              <span 
                className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-secondary-color rounded-full min-w-[20px] min-h-[20px]"
              >
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
