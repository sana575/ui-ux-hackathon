// // components/AddToWishlistButton.tsx
// 'use client';

// import { useWishlist } from "@/context/WishlistContext";
// import { FaRegHeart, FaHeart } from "react-icons/fa";

// export default function AddToWishlistButton({ product }: { product: {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
// } }) {
//   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
//   const isWishlisted = isInWishlist(product.id);

//   const handleClick = () => {
//     if (isWishlisted) {
//       removeFromWishlist(product.id);
//     } else {
//       addToWishlist(product);
//     }
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className="p-2 rounded-full hover:bg-gray-100 transition-colors"
//       title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
//     >
//       {isWishlisted ? (
//         <FaHeart className="w-6 h-6 text-red-500" />
//       ) : (
//         <FaRegHeart className="w-6 h-6 text-gray-600" />
//       )}
//     </button>
//   );
// }