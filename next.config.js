/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/zaplatform-app-showcase-hub' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zaplatform-app-showcase-hub/' : '',
}

module.exports = nextConfig 