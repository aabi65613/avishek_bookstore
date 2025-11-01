// src/context/CartContext.tsx - Corrected Exports
"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
// import { toast } from 'sonner'; // NOTE: Commented out for Vercel build fix

import { Product } from '@/types/product';

// Define the structure of an item in the cart
export interface CartItem extends Product {
  quantity: number;
}

// Define the structure of the Cart Context
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Define the Provider component (MUST be EXPORTED)
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { // <-- EXPORT ADDED
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
  }, [cartItems]);


  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        // Update quantity of existing item
        const newItems = prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
        // toast.success(`Updated ${product.title} quantity in cart!`); // NOTE: Commented out for Vercel build fix
        return newItems;
      } else {
        // Add new item to cart
        const newItem = { ...product, quantity };
        // toast.success(`${product.title} added to cart!`); // NOTE: Commented out for Vercel build fix
        return [...prevItems, newItem];
      }
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCartItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.id === productId);
      const newItems = prevItems.filter(item => item.id !== productId);
      // if (itemToRemove) {
      //   toast.info(`${itemToRemove.title} removed from cart.`); // NOTE: Commented out for Vercel build fix
      // }
      return newItems;
    });
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
    // toast.warning("Cart cleared!"); // NOTE: Commented out for Vercel build fix
  }, []);

  // The context value
  const contextValue: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Define the useCart hook (MUST be EXPORTED)
export const useCart = () => { // <-- EXPORT ADDED
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
