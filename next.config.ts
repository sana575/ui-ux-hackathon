<<<<<<< HEAD


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



=======
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
>>>>>>> 91a95cc9800027ad7578e5d07468c3779b1bd425
