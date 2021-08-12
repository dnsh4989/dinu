module.exports = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: [
      "dinu-node.herokuapp.com",
      "c.stocksy.com",
      "encrypted-tbn0.gstatic.com",
      "www.computerhope.com",
      "thumbs.dreamstime.com",
      "randomwordgenerator.com",
      "i.pinimg.com",
      "images.unsplash.com",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination: "https://dinu-node.herokuapp.com//:path*",
      },
    ];
  },
};
