/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Optimize for production
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig
