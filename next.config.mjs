// /** @type {import("next").NextConfig} */
// export const experimental = { appDir: true, serverComponentsExternalPackages: ["mongoose"] };
// export function webpack(config) {
//   config.experiments = { ...config.experiments, topLevelAwait: true };
//   config.resolve.fallback = {
//     "mongodb-client-encryption": false ,
//     "aws4": false
//   };

//   return config;
// }
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    },
    config.resolve.fallback = {
      "mongodb-client-encryption": false ,
      "aws4": false
    }
    
    return config
  }
}

export default nextConfig