/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "picsum.photos"],
  },
  async redirects() {
    return [
      {
        source: "/people",
        destination: "/people/1",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
