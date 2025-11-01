// src/app/cart/page.tsx - FINAL, CLEANED FIX (Phone: 7059068366)
"use client";

import React, { useCallback } from 'react'; 
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, XCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
// import { motion, AnimatePresence } from 'framer-motion'; 

// Currency formatter defined INLINE (to avoid import errors)
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(amount);
};


const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  // --- START CURRENCY/CALCULATION LOGIC ---
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 50.0 : 0.0; // ₹50 shipping
  const total = subtotal + shipping;

  // --- PROCEED TO CHECKOUT LOGIC: CALL NUMBER ---
  const handleProceedToCheckout = useCallback(() => {
    // NOTE: Phone number updated to 7059068366
    const phoneNumber = '917059068366'; 
    window.location.href = `tel:+${phoneNumber}`;
  }, []);
  // --- END CHECKOUT LOGIC ---

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center min-h-[60vh]">
        <XCircle size={64} className="text-secondary-color mb-4" />
        <h1 className="text-3xl font-bold text-primary-color mb-3">Your Cart is Empty</h1>
        <p className="text-lg text-gray-600 mb-6">Looks like you haven&apos;t added anything to your cart yet.</p>
        <Link 
          href="/" 
          className="bg-secondary-color text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-primary-color mb-8 border-b-2 border-secondary-color pb-2">
        Your Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Cart Items List */}
        <div className="lg:w-3/5 space-y-6">
          <div className="flex justify-between items-center pb-2 border-b">
            <h2 className="text-xl font-semibold text-text-color">Items ({cartItems.length})</h2>
            <button 
              onClick={clearCart} 
              className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-600 transition-colors"
            >
              <Trash2 size={16} />
              <span>Clear Cart</span>
            </button>
          </div>

          {cartItems.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                {/* Image */}
                <div className="relative w-20 h-20 flex-shrink-0 mr-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                    sizes="80px"
                    onError={(e) => { e.currentTarget.src = "/placeholder-product.png"; }}
                  />
                </div>
                
                {/* Details */}
                <div className="flex-grow">
                  <Link href={`/products/${item.id}`} className="text-lg font-semibold text-text-color hover:text-primary-color transition-colors truncate block">
                    {item.title}
                  </Link>
                  <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2 mx-4">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-medium text-text-color">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary-color text-white hover:bg-primary-color transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Price & Remove - NOW RUPEES */}
                <div className="flex flex-col items-end min-w-[100px]">
                  <span className="text-lg font-bold text-primary-color mb-1">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-gray-500 hover:text-red-600 transition-colors flex items-center space-x-1"
                  >
                    <Trash2 size={16} />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            ))}
        </div>
        
        {/* Order Summary - NOW RUPEES */}
        <div className="lg:w-2/5 sticky top-20">
          <div className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-secondary-color">
            <h2 className="text-2xl font-bold text-primary-color mb-6 border-b pb-2">Order Summary</h2>
            
            <div className="space-y-3 mb-6 text-text-color">
              <div className="flex justify-between">
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="font-semibold">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Estimate</span>
                <span className="font-semibold">{formatCurrency(shipping)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-4 border-t border-gray-200 text-primary-color">
                <span>Order Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>

            {/* CHECKOUT BUTTON - NOW TRIGGERS CALL */}
            <button 
              onClick={handleProceedToCheckout}
              className="w-full bg-secondary-color text-white py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-colors"
            >
              Proceed to Checkout
            </button>
            <p className="text-center text-sm text-gray-500 mt-3">
              Clicking &apos;Proceed to Checkout&apos; will call a representative.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
