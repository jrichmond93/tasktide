/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' for Vercel deployment
  // Vercel handles build automatically
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
