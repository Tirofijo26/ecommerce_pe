/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    // experimental: {
    //     appDir: true,
    // },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'trueshop.co'
      },
      {
        protocol: 'https',
        hostname: 'imagedelivery.net'
      },
      {
        protocol: 'https',
        hostname: 'tugocolombia.vteximg.com.br'
      },
      {
        protocol: 'https',
        hostname: 'i3.wp.com'
      },
      {
        protocol: 'https',
        hostname: 'mediaserver.goepson.com'
      },
      {
        protocol: 'https',
        hostname: 'elaco.vteximg.com.br'
      },
      {
        protocol: 'https',
        hostname: 'exitocol.vtexassets.com'
      },
      {
        protocol: 'https',
        hostname: 'http2.mlstatic.com'
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com'
      },
      {
        protocol: 'https',
        hostname: 'cdnx.jumpseller.com'
      },
    ]
  }
};

export default nextConfig;
