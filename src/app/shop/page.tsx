<<<<<<< HEAD

"use client";

import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useState, useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "@/context/WishlistContext";
import FilterSearchBar from "../components/FilterSearchBar";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState<string[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  
  const productsPerPage = 8;
  const { wishItems, toggleWishlist } = useWishlist();

  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "product"] { tages }`;
      const result = await client.fetch(query);
      const allTags = result.flatMap((product: any) => product.tages || []);
      const uniqueTags = Array.from(new Set(allTags));
      setCategories(uniqueTags as string[]);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const skip = (currentPage - 1) * productsPerPage;
      const searchPattern = `*${searchQuery}*`;
      
      const productsQuery = `
        *[_type == "product" 
          && (title match $searchPattern || description match $searchPattern)
          && (tages == $selectedCategory || $selectedCategory == "all")] 
        | order(_createdAt desc) 
        [${skip}...${skip + productsPerPage}] {
          _id,
          title,
          description,
          "imageUrl": productImage.asset->url,
          isNew,
          price,
          tages,
          discountPercentage
        }
      `;
      
      const countQuery = `
        count(*[_type == "product" 
          && (title match $searchPattern || description match $searchPattern)
          && (tages == $selectedCategory || $selectedCategory == "all")])
      `;

      const params = { searchPattern, selectedCategory };

      try {
        const [fetchedProducts, total] = await Promise.all([
          client.fetch(productsQuery, params),
          client.fetch(countQuery, params),
        ]);
        setProducts(fetchedProducts);
        setTotalProducts(total);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
        setTotalProducts(0);
      }
      setIsLoading(false);
    };
    
    fetchProducts();
  }, [currentPage, searchQuery, selectedCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4">
      <div>
        <BreadCrumb title="Shop" url="shop" />
      </div>
      <div className="px-8 py-4 max-w-7xl mx-auto">
        <FilterSearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        {/* Rest of your existing content */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-600">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product: any) => (
              // Your existing product card JSX
              <div
                key={product._id}
                className="relative border rounded-md p-4 bg-white shadow-md group hover:shadow-lg transition-shadow duration-300"
              >
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    New
                  </span>
                )}
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
                <div className="overflow-hidden rounded-md mb-4 relative">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">
                  {product.description?.length > 30
                    ? product.description.slice(0, 30) + "..."
                    : product.description || "No description available."}
                </p>
                <p className="text-gray-600 mb-4">
                  {product.discountPercentage ? (
                    <>
                      <span className="line-through text-red-500">
                        Rs. {product.price}
                      </span>{" "}
                      <span className="font-bold text-green-600">
                        Rs.{" "}
                        {Math.round(
                          product.price -
                            (product.price * product.discountPercentage) / 100
                        )}
                      </span>
                    </>
                  ) : (
                    `Rs. ${product.price}`
                  )}
                </p>
                <Link href={`/product/${product._id}`}>
                  <button className="w-full bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Updated Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              } hover:scale-105 transition-transform duration-200`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;





=======

import Image from "next/image";
import { FaShareAlt, FaExchangeAlt, FaHeart } from "react-icons/fa";
import Footer2 from "../components/Footer2";
// import { JSX } from "react";
interface Iproducts {
  // map(renderProductCard: (product: Iproducts) => JSX.Element): import("react").ReactNode;
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  discountedPrice: string;
  isNew: boolean;
} 
export default function Product() {
  const products:Iproducts[] = [
    {
      id: 1,
      image: "/product.png",
      title: "Product",
      description: "Minimalist flower pot",
      price: "RP 500.000",
      discountedPrice: "RP 350.000",
      isNew: false,
    },
    {
      id: 2,
      image: "/product8.png",
      title: "Chair",
      description: "Modern furniture",
      price: "RP 700.000",
      discountedPrice: "null",
      isNew: true,
    },
    {
      id: 3,
      image: "/product3.png",
      title: "Product3",
      description: "Cozy essentials",
      price: "RP 600.000",
      discountedPrice: "RP 450.000",
      isNew: false,
    },
    {
      id: 4,
      image: "/dinning.png",
      title: "Dining 2",
      description: "Elegant design",
      price: "RP 550.000",
      discountedPrice: "null",
      isNew: true,
    },
    {
      id: 5,
      image: "/sofa1.png",
      title: "Sofa1",
      description: "Stylish decor",
      price: "RP 750.000",
      discountedPrice: "350.000",
      isNew: false,
    },
    {
      id: 6,
      image: "/product6.png",
      title: "Product6",
      description: "Modern comfort",
      price: "RP 650.000",
      discountedPrice: "null",
      isNew: false,
    },
    {
      id: 7,
      image: "/product7.png",
      title: "Product7",
      description: "Luxury comfort",
      price: "RP 800.000",
      discountedPrice: "RP 650.000",
      isNew: true,
    },
    {
      id: 8,
      image: "/product8.png",
      title: "Product8",
      description: "Elegant aesthetics",
      price: "RP 900.000",
      discountedPrice: "null",
      isNew: false,
    },

    {
      id: 9,
      image: "/product.png",
      title: "Product",
      description: "Minimalist flower pot",
      price: "RP 500.000",
      discountedPrice: "RP 350.000",
      isNew: false,
    },
    {
      id: 10,
      image: "/product8.png",
      title: "Chair",
      description: "Modern furniture",
      price: "RP 700.000",
      discountedPrice: "null",
      isNew: true,
    },
    {
      id: 11,
      image: "/product3.png",
      title: "Product3",
      description: "Cozy essentials",
      price: "RP 600.000",
      discountedPrice: "RP 450.000",
      isNew: false,
    },
    {
      id: 12,
      image: "/dinning.png",
      title: "Dining 2",
      description: "Elegant design",
      price: "RP 550.000",
      discountedPrice: "null",
      isNew: true,
    },
    {
      id: 13,
      image: "/sofa1.png",
      title: "Sofa1",
      description: "Stylish decor",
      price: "RP 750.000",
      discountedPrice: "350.000",
      isNew: false,
    },
    {
      id: 14,
      image: "/product6.png",
      title: "Product6",
      description: "Modern comfort",
      price: "RP 650.000",
      discountedPrice: "null",
      isNew: false,
    },
    {
      id: 15,
      image: "/product7.png",
      title: "Product7",
      description: "Luxury comfort",
      price: "RP 800.000",
      discountedPrice: "RP 650.000",
      isNew: true,
    },
    {
      id: 16,
      image: "/product8.png",
      title: "Product8",
      description: "Elegant aesthetics",
      price: "RP 900.000",
      discountedPrice: "null",
      isNew: false,
    },
  ];

  const renderProductCard = (product:Iproducts) => (
    <div
      key={product.id}
      className="relative bg-white shadow-lg overflow-hidden group"
    >
      {/* Labels */}
      {product.discountedPrice && (
        <div className="absolute top-4 right-4 bg-red-700 text-white text-xs font-bold rounded-full px-2 py-1">
          -50%
        </div>
      )}
      {product.isNew && (
        <div className="absolute top-4 right-4 bg-green-700 rounded-full text-white text-xs font-bold px-2 py-1">
          New
        </div>
      )}

      {/* Product Image */}
      <Image
        src={product.image}
        alt={product.title}
        width={350}
        height={400}
        className="object-cover w-full h-[400px] transition-opacity duration-300 group-hover:opacity-70"
      />

      {/* Hover Effect */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
        <button className="bg-white text-black font-bold px-4 py-2 rounded-lg mb-4">
          Add to Cart
        </button>
        <div className="flex gap-4 text-white text-sm">
          <div className="flex flex-col items-center">
            <FaShareAlt />
            <span>Share</span>
          </div>
          <div className="flex flex-col items-center">
            <FaExchangeAlt />
            <span>Compare</span>
          </div>
          <div className="flex flex-col items-center">
            <FaHeart />
            <span>Like</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 text-[#3A3A3A]">
        <h3 className="font-bold text-lg text-gray-800">{product.title}</h3>
        <p className="font-thin font-mono text-gray-400">
          {product.description}
        </p>
        <div className="flex items-center gap-2">
          {product.discountedPrice ? (
            <>
              <p className="line-through text-red-700">{product.price}</p>
              <h3 className="font-bold text-green-700">
                {product.discountedPrice}
              </h3>
            </>
          ) : (
            <h3 className="font-bold text-gray-800">{product.price}</h3>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section>
      <div>
        <Image
          src={"/shop.png"}
          alt="contact"
          width={1440}
          height={316}
          className="w-full h-auto"
        />
         <Image
          src={"/shop2.png"}
          alt="contact"
          width={1440}
          height={100}
          className="w-full h-auto"
        />
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(renderProductCard)}
        </div>
        <div className="flex items-center justify-center gap-2 mb-10 lg:gap-8 mt-14">
          {["1", "2", "3", "Next"].map((item) => (
            <div
              key={item}
              className={`w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] flex items-center justify-center ${
                item === "1" ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7]"
              } hover:scale-105 transition-transform duration-200 cursor-pointer`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <Footer2 />
    </section>
  );
}
>>>>>>> 91a95cc9800027ad7578e5d07468c3779b1bd425
