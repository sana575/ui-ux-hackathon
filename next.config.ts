

// // export default nextConfig;
// /**@type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn.sanity.io",
//         port: "",
//         pathname: "**",
//       },
//     ],
//   },
// };




/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Correct key
        pathname: "/images/**", // Specific path for Sanity images
      },
    ],
  },
};

export default nextConfig



