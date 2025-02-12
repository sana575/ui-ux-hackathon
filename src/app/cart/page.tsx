"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import BreadCrumb from "../components/BreadCrumb";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  return (
    <section>
      <BreadCrumb title="Cart" url="cart" />

      <div className="max-w-screen-lg mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 mb-4">Your cart is empty</p>
            <Link href="/shop" className="text-blue-500 hover:underline">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap sm:flex-nowrap items-center border-b pb-4 gap-4"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 object-cover rounded"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Rs. {item.price}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="h-6 w-6 border rounded hover:bg-gray-200"
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      className="h-6 w-6 border rounded hover:bg-gray-200"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 text-sm sm:text-base"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="text-lg sm:text-2xl font-bold mt-8">
              Total: Rs.{" "}
              {cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              )}
            </div>

            <Link
              href="/checkout"
              className="inline-block bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-green-600 text-sm sm:text-base"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
