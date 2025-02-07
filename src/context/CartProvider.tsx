
'use client';

import { useState, useEffect, createContext, useContext } from "react";
import { toast } from "react-toastify";

// -------------------- Type Definitions --------------------
interface CartItem {
  id: string;
  name: string;
  price: number;
 discount: number;
 stock: number;
 quantity: number;
 image: string;

}

interface WishListItem {
  id: string;
  name: string;
  price: number;
  discount: number;
  stock: number;
  quantity: number;
  image: string;

  // Add other wishlist item properties
}

// -------------------- Context Definitions --------------------
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
}

interface WishListContextType {
  wishItems: WishListItem[];
  addToWishlist: (item: WishListItem) => void;
  removeFromWishlist: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const WishListContext = createContext<WishListContextType | undefined>(undefined);

// -------------------- Combined Provider --------------------
export function CartProvider({ children }: { children: React.ReactNode }) {
  // -------------------- Cart Logic --------------------
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems(prev => [...prev, item]);
    toast.success("Item added to cart!");
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast.warning("Item removed from cart");
  };

  // -------------------- Wishlist Logic --------------------
  const [wishItems, setWishItems] = useState<WishListItem[]>(() => {
    if (typeof window !== "undefined") {
      const savedWishlist = localStorage.getItem("wishItems");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("wishItems", JSON.stringify(wishItems));
  }, [wishItems]);

  const addToWishlist = (item: WishListItem) => {
    setWishItems(prev => [...prev, item]);
    toast.success("Item added to wishlist!");
  };

  const removeFromWishlist = (id: string) => {
    setWishItems(prev => prev.filter(item => item.id !== id));
    toast.warning("Item removed from wishlist");
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      <WishListContext.Provider value={{ wishItems, addToWishlist, removeFromWishlist }}>
        {children}
      </WishListContext.Provider>
    </CartContext.Provider>
  );
}

// -------------------- Custom Hooks --------------------
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CombinedProvider');
  }
  return context;
}

export function useWishlist() {
  const context = useContext(WishListContext);
  if (!context) {
    throw new Error('useWishlist must be used within a CombinedProvider');
  }
  return context;
}