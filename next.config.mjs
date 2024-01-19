/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2norla3tyc4cn.cloudfront.net',
        port: '',
        pathname: '/i/s3/**',
      },
    ],
  },

};

export default nextConfig;
