/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {nextConfig, 
  async redirects() {
    return [
      {
        source: '/',
        destination: '/users',
        permanent: true,
      },
    ]
  },
  
  images: {
    domains: ['robohash.org'],
  },
}
