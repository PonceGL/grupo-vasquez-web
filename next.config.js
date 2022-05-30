/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",
      "tailwindui.com",
      "www.roaguirre.com",
      "images.unsplash.com",
      "res.cloudinary.com",
      "ui-avatars.com",
      "randomuser.me",
      "scontent-mia3-1.cdninstagram.com",
      "scontent-mia3-2.cdninstagram.com",
    ],
  },
};

module.exports = nextConfig;
