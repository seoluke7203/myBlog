import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: [ 'image/avif', 'image/webp' ], // Define the supported image formats
    // why add this?
    // avif format has 20% more compression than webp

  },
}

export default nextConfig
