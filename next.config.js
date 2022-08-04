/** @type {import('next').NextConfig} */

const withImages = require('next-images')

const nextConfig = withImages({
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config, options) {
    return config
  }
})

module.exports = nextConfig
