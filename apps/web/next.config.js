/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost'],
    },
    experimental: {
      cpus: 1,
      workerThreads: false,
      optimizePackageImports: ['icon-library'],
    },
    output: 'export'
  }
  
  module.exports = nextConfig