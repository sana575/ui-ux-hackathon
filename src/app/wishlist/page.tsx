
"use client";

import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { product } from "@/sanity/product";
import BreadCrumb from "../components/BreadCrumb";

export default function WishlistPage() {
  const { wishItems, removeFromWishlist } = useWishlist();

  return (
    <section>
         {/* Breadcrumb Section */}
      <BreadCrumb title="My Wishlist" url="wishlist" />
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          Your Wishlist
        </h1>

        {wishItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-100 transition duration-200"
                    title="Remove from Wishlist"
                  >
                    <FaHeart className="text-red-500" />
                  </button>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-lg text-gray-600 mt-2">Rs.{item.price}</p>
              
                   <Link href={`/product/${item.id}`}>
                  <button className="w-full bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    View Details
                  </button>
                </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-600">Your wishlist is empty.</p>
            <Link
              href="/shop"
              className="mt-4 inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              Go to Shop
            </Link>
          </div>
        )}
      </div>
    </div>
    </section>
  );
}


