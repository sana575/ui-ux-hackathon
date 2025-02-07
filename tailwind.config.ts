<<<<<<< HEAD
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        poppins:['Poppins','sans-serif'],
        inter:['Inter','sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
=======
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        poppins:['Poppins','sans-serif'],
        inter:['Inter','sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
>>>>>>> 91a95cc9800027ad7578e5d07468c3779b1bd425
