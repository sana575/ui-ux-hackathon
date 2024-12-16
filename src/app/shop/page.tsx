
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
