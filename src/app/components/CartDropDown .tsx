import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartDropDown() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // Safe calculation with optional chaining
  const total =
    cartItems?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;

  return (
    <div className="bg-white p-6 sm:p-8 shadow-lg max-w-sm w-full rounded-md">
      {/* Cart Header */}
      <div className="flex items-center justify-between border-b pb-4">
        <h2 className="text-lg font-semibold">Shopping Cart</h2>
      </div>

      {/* Cart Items */}
      <div className="py-4 space-y-6 max-h-[60vh] overflow-y-auto">
        {cartItems?.map((item) => (
          <div key={item.id} className="flex gap-2 sm:gap-4 border-b pb-4">
            <div className="relative h-16 w-16 sm:h-20 sm:w-20">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-md bg-gray-100"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, 10vw"
                />
              )}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-sm sm:text-base font-medium">
                  {item.name}
                </h3>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-500 hover:text-red-500 text-xl"
                >
                  &times;
                </button>
              </div>
              <p className="text-sm text-darkyellow">Rs. {item.price}</p>
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
          </div>
        ))}
      </div>

      {/* Cart Total */}
      <div className="border-t pt-4 space-y-4">
        <div className="flex justify-between text-sm font-medium">
          <span>Subtotal</span>
          <span className="text-darkyellow">Rs. {total}</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <Link
            href="/cart"
            className="block border text-center px-2 py-2 text-sm rounded hover:bg-gray-100"
          >
            Cart
          </Link>
          <Link
            href="/checkout"
            className="block border text-center px-2 py-2 text-sm rounded hover:bg-gray-100"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
