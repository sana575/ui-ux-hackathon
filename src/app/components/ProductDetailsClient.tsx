
'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import AddToCartButton from "@/app/components/AddToCartButton";
import { IProduct } from "@/types";
const ProductDetailsClient = ({ product, params }: { product: IProduct, params: { id: string } }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const productInWishlist = wishlist.find((item: { id: string }) => item.id === params.id);
    setIsInWishlist(!!productInWishlist);
  }, [params.id]);

  const toggleWishlist = (product: any) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    if (isInWishlist) {
      const updatedWishlist = wishlist.filter((item: { id: string }) => item.id !== product.id);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    } else {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
    setIsInWishlist(!isInWishlist);
  };

  const discountedPrice = product.discountPercentage
    ? Math.round(product.price - (product.price * product.discountPercentage) / 100)
    : product.price;

  return (
    <div className="max-w-screen-lg mx-auto py-10 px-4">
      <div className="text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/shop" className="hover:underline">
          Shop
        </Link>{" "}
        &gt; <span>{product.title}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-md overflow-hidden shadow-md">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={600}
            height={500}
            className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="space-y-4">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block z-10">
              New
            </span>
          )}
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <AiFillStar key={index} className="text-yellow-500 text-xl" />
            ))}
            <span className="ml-2 text-gray-500">|</span>
            <span className="text-gray-500 text-sm ml-2">
              (5 Customer Reviews)
            </span>
          </div>
          <p className="text-gray-600 text-justify leading-relaxed line-clamp-5">
            {product.description}
          </p>
          <div className="text-lg font-semibold text-gray-800">
            {product.discountPercentage ? (
              <>
                <span className="line-through text-red-500 mr-2">
                  Rs. {product.price}
                </span>
                <span className="text-green-600">Rs. {discountedPrice}</span>
              </>
            ) : (
              `Rs. ${product.price}`
            )}
          </div>

          <AddToCartButton
            product={{
              _id: product._id,
              title: product.title,
              price: discountedPrice,
              imageUrl: product.imageUrl,
            }}
          />

          <button
            onClick={() =>
              toggleWishlist({
                id: product._id,
                name: product.title,
                price: discountedPrice,
                image: product.imageUrl,
              })
            }
            className="w-full bg-white border border-black text-black py-3 px-6 rounded-md hover:bg-gray-100 transition duration-200 mt-4"
          >
            {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>

          <div className="border-b border-[#9F9F9F] w-full mt-14"></div>
          <div className="mt-8 flex items-center justify-start gap-8">
            <div className="flex flex-col text-[#9F9F9F]">
              <h4>SKU</h4>
              <h4>Category</h4>
              <h4>Tags</h4>
              <h4>Share</h4>
            </div>
            <div className="flex flex-col text-[#9F9F9F]">
              <h4>: SS001</h4>
              <h4>: Sofas</h4>
              <h4>: Sofa, Chair, Home, Shop</h4>
              <div className="flex items-center justify-start gap-3">
                :
                <Link href="#">
                  <FaFacebook className="hover:text-gray-600 text-black h-6 w-4" />
                </Link>
                <FaLinkedin className="h-6 w-4 hover:text-gray-600 text-black" />
                <Link href="# ">
                  <AiFillTwitterCircle className="hover:text-gray-600 text-black h-6 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsClient;


















