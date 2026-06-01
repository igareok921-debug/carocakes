/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536],
    imageSizes: [48, 64, 96, 128, 256, 384, 512],
    formats: ["image/webp"]
  },
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
