// // components/AddToCartButton.tsx
// 'use client'

// import { useCart } from '@/context/CartContext';
// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
//   stock: number;
// }
// interface AddToCartButtonProps {
//   product: {
//     _id: string;
//     title: string;
//     price: number;
//     imageUrl: string;
//   };
// }

// export default function AddToCartButton({ product }: AddToCartButtonProps) {
//   const { addToCart } = useCart();

//   const handleAddToCart = () => {
//     addToCart(({
//       id: product._id,
//       name: product.title,
//       price: product.price,
//       image: product.imageUrl,
//       quantity: 1, // default quantity
//       stock: 100, // example stock value
//     }) as CartItem);
//   };

//   return (
//     <button
//       onClick={handleAddToCart}
//       className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
//     >
//       Add to Cart
//     </button>
//   );
// }





// "use client";

// import { useCart } from "@/context/CartContext";
// import { ToastContainer, toast, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
//   stock: number;
// }

// interface AddToCartButtonProps {
//   product: {
//     _id: string;
//     title: string;
//     price: number;
//     imageUrl: string;
//   };
// }

// export default function AddToCartButton({ product }: AddToCartButtonProps) {
//   const { addToCart } = useCart();

//   const handleAddToCart = () => {
//     const cartItem: CartItem = {
//       id: product._id,
//       name: product.title,
//       price: product.price,
//       image: product.imageUrl,
//       quantity: 1, // Default quantity
//       stock: 100, // Example stock value
//     };

//     addToCart(cartItem);

//     // Show success notification
//     toast.success(`${product.title} added to cart!`, {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "light",
//       transition: Bounce,
//     });
//   };

//   return (
//     <>
//       <button
//         onClick={handleAddToCart}
//         className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
//       >
//         Add to Cart
//       </button>
//       <ToastContainer />
//     </>
//   );
// }




'use client';

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '@/context/CartContext';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  stock: number;
}

interface AddToCartButtonProps {
  product: {
    _id: string;
    title: string;
    price: number;
    imageUrl: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product._id,
      name: product.title,
      price: product.price,
      image: product.imageUrl,
      quantity: 1, // Default quantity
      stock: 100, // Example stock value
    };

    // Add item to the cart
    addToCart(cartItem);

    // Show toast notification
    toast.success(`${product.title} added to cart successfully!`, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    });
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Add to Cart
      </button>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}
