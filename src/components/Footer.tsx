// src/components/Footer.tsx - FINAL CONTACT FIX (Phone: 7059068366)
"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Facebook, Twitter, Instagram } from 'lucide-react'; 

const Footer = () => {
  return (
    // Footer uses Deep Navy background and light text
    <footer className="bg-background-color text-gray-300 border-t border-gray-700 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
          
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-primary-color mb-3">
              Books.shyamnagar
            </h3>
            <p className="text-sm">
              Discount beyond your expectations. Quality products delivered fast.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-secondary-color mb-4 border-b border-secondary-color inline-block pb-1">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary-color transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary-color transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary-color transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="text-lg font-semibold text-secondary-color mb-4 border-b border-secondary-color inline-block pb-1">
              Service
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-primary-color transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-primary-color transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/terms" className="hover:text-primary-color transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Connect & Phone Number FIX */}
          <div>
            <h4 className="text-lg font-semibold text-secondary-color mb-4 border-b border-secondary-color inline-block pb-1">
              Connect
            </h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-primary-color transition-colors"><Facebook size={20} /></a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-primary-color transition-colors"><Twitter size={20} /></a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-primary-color transition-colors"><Instagram size={20} /></a>
            </div>
            
            {/* NEW: Phone Number Link */}
            <div className="flex items-center space-x-2 text-sm">
              <Phone size={16} className="text-primary-color" />
              {/* Phone number hardcoded: +91 7059068366 */}
              <a href="tel:+917059068366" className="hover:text-primary-color transition-colors font-semibold">
                +91 7059068366
              </a>
            </div>

          </div>

        </div>

        {/* Copyright */}
        <div className="text-center pt-6 text-sm text-gray-500">
          © 2025 Books.shyamnagar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
