/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/habits",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
