/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname:'v2.exercisedb.io'}, {hostname:'images.unsplash.com'}],
      },
};
export default nextConfig;
