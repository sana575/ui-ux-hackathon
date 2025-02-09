
"use client";

import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { IProduct } from "../../types";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "@/context/WishlistContext";

const ProductListing = ({ product }: { product: IProduct }) => {
  const { wishItems, toggleWishlist } = useWishlist();

  const displayPrice = (price: number | null | undefined, discount?: number) => {
    if (typeof price === "number") {
      if (discount && discount > 0) {
        const discountedPrice = price - (price * discount) / 100;
        return (
          <>
            <span className="line-through text-red-500">${price.toFixed(2)}</span>{" "}
            <span className="text-green-600">${discountedPrice.toFixed(2)}</span>
          </>
        );
      }
      return `${price.toFixed(2)}`;
    }
    return "Price not available";
  };

  return (
    <div className="relative border rounded-md p-4 bg-white shadow-md group hover:shadow-lg transition-shadow duration-300 z-10">
      {/* Badges Container */}
      <div className="absolute top-2 left-2 flex gap-2 z-20">
        {product.isNew && (
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded z-20">
            New
          </span>
        )}

        {product.discountPercentage && product.discountPercentage > 0 && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-20">
            {product.discountPercentage}% OFF
          </span>
        )}
      </div>
      <div className="absolute top-2 left-2 flex gap-2 z-20 pointer-events-none">
        {/* Wishlist Icon */}
        <button
          onClick={() =>
            toggleWishlist({
              id: product._id,
              name: product.title,
              price: product.price,
              image: product.imageUrl,
            })
          }
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-100 transition duration-200 z-10"
          title={
            wishItems.some((item) => item.id === product._id)
              ? "Remove from Wishlist"
              : "Add to Wishlist"
          }
        >
          <FaHeart
            className={`w-6 h-6 ${
              wishItems.some((item) => item.id === product._id)
                ? "text-red-500"
                : "text-gray-300"
            }`}
          />
        </button>
      </div>

      {/* Product Image */}
      <Link href={`/product/${product._id}`}>
        <div className="aspect-square relative overflow-hidden rounded-md mb-4 group-hover:scale-105 transition-transform duration-300">
          {product.imageUrl ? (
            <Image
              src={urlFor(product.imageUrl).url()}
              alt={product.title || "Product Image"}
              width={300}
              height={300}
              className="w-full h-full object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">No Image</p>
            </div>
          )}
        </div>
      </Link>

      {/* Product Details */}
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description || "No description available"}
        </p>
        <p className="text-lg font-bold text-gray-900">
          {displayPrice(product.price, product.discountPercentage)}
        </p>
      </div>
      <Link href={`/product/${product._id}`}>
        <button className="w-full bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors mt-4">
          View Details
        </button>
      </Link>
    </div>
  );
};export default ProductListing;










