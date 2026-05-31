/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ro",
        permanent: false
      }
    ];
  }
};

export default nextConfig;
