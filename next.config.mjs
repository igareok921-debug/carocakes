/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536],
    imageSizes: [48, 64, 96, 128, 256, 384, 512],
    formats: ["image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.carocakes.md"
          }
        ],
        destination: "https://carocakes.md/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
