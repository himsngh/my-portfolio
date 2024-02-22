/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // NOTE: If we want to use use external images on website
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aloia-systems.gumlet.io',
        pathname: "/images/articles/**",
        port: '',
      }
    ]
  }
}

module.exports = nextConfig
