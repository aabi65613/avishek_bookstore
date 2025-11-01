// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Toaster } from "sonner"; // <-- COMMENTED OUT: Build Fix

import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Books.shyamnagar - Premium E-Commerce",
  description: "Discount beyond your expectations. Shop the latest styles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {/* Header and Footer are now clean and use the Deep Navy/Gold colors */}
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          
          {/* <Toaster richColors position="top-right" /> */} {/* <-- COMMENTED OUT: Build Fix */}
        </CartProvider>
      </body>
    </html>
  );
}
