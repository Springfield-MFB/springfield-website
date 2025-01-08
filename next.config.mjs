/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Skips ESLint checks during the build
  },
  webpack: (config) => {
    config.resolve.alias["my-alias"] = "some/path"; // Correct path
    return config;
  },
};

export default nextConfig;
