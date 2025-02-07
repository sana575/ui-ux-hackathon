// // context/WishlistContext.tsx
// 'use client'

// import { createContext, useContext, useState, useEffect } from 'react';

// interface WishlistItem {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   // Add other product properties as needed
// }

// interface WishlistContextType {
//   wishItems: WishlistItem[];
//   addToWishlist: (item: WishlistItem) => void;
//   removeFromWishlist: (id: string) => void;
//   isInWishlist: (id: string) => boolean;
// }

// const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// export function WishlistProvider({ children }: { children: React.ReactNode }) {
//   const [wishItems, setWishItems] = useState<WishlistItem[]>([]);

//   // Load from localStorage
//   useEffect(() => {
//     const savedWishlist = localStorage.getItem('wishlist');
//     if (savedWishlist) setWishItems(JSON.parse(savedWishlist));
//   }, []);

//   // Save to localStorage
//   useEffect(() => {
//     localStorage.setItem('wishlist', JSON.stringify(wishItems));
//   }, [wishItems]);

//   const addToWishlist = (item: WishlistItem) => {
//     setWishItems(prev => {
//       if (prev.some(i => i.id === item.id)) return prev; // Prevent duplicates
//       return [...prev, item];
//     });
//   };

//   const removeFromWishlist = (id: string) => {
//     setWishItems(prev => prev.filter(item => item.id !== id));
//   };

//   const isInWishlist = (id: string) => {
//     return wishItems.some(item => item.id === id);
//   };

//   return (
//     <WishlistContext.Provider 
//       value={{ wishItems, addToWishlist, removeFromWishlist, isInWishlist }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// }

// export function useWishlist() {
//   const context = useContext(WishlistContext);
//   if (!context) {
//     throw new Error('useWishlist must be used within a WishlistProvider');
//   }
//   return context;
// }


// "use client"

// // context/WishlistContext.tsx
// import { createContext, useContext, useState } from "react";

// interface WishlistContextType {
//   wishItems: { id: string; name: string; price: number; image: string }[];
//   toggleWishlist: (item: { id: string; name: string; price: number; image: string }) => void;
//   removeFromWishlist: (id: string) => void;
// }

// const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// export const useWishlist = () => {
//   const context = useContext(WishlistContext);
//   if (!context) {
//     throw new Error("useWishlist must be used within a WishlistProvider");
//   }
//   return context;
// };

// export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
//   const [wishItems, setWishItems] = useState<{ id: string; name: string; price: number; image: string }[]>([]);

//   const toggleWishlist = (item: { id: string; name: string; price: number; image: string }) => {
//     setWishItems((prev) =>
//       prev.some((i) => i.id === item.id)
//         ? prev.filter((i) => i.id !== item.id) // Remove if already in wishlist
//         : [...prev, item] // Add if not in wishlist
//     );
//   };

//   const removeFromWishlist = (id: string) => {
//     setWishItems((prev) => prev.filter((i) => i.id !== id));
//   };

//   return (
//     <WishlistContext.Provider value={{ wishItems, toggleWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };












"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface WishlistContextType {
  wishItems: WishlistItem[];
  toggleWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishItems, setWishItems] = useState<WishlistItem[]>([]);

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishItems(JSON.parse(savedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishItems));
  }, [wishItems]);

  const toggleWishlist = (item: WishlistItem) => {
    setWishItems((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id) // Remove if already in wishlist
        : [...prev, item] // Add if not in wishlist
    );
  };

  const removeFromWishlist = (id: string) => {
    setWishItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishItems, toggleWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};