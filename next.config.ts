// next.config.ts - Corrected for TypeScript

import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Retained your existing configurations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // --- IMAGE & BUILD CONFIGURATION FIX ---
  images: {
    // This is the critical line to fix the persistent "red cross" broken image issue
    unoptimized: true,
  },
  // ------------------------------------------
}

export default nextConfig
