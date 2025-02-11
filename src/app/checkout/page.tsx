
"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useForm } from "react-hook-form";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { createPaymentIntent } from "../payment/action";
import BreadCrumb from "../components/BreadCrumb";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

type FormData = {
  firstName: string;
  lastName: string;
  companyName?: string;
  country: string;
  streetAddress: string;
  city: string;
  province: string;
  zipCode: string;
  phone: string;
  email: string;
  additionalInfo?: string;
};

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    const initializePayment = async () => {
      const { clientSecret } = await createPaymentIntent();
      setClientSecret(clientSecret);
    };
    initializePayment();
  }, []);

  const onSubmit = (data: FormData) => {
    console.log("Billing Details:", data);
    // Handle form submission along with payment
  };

  if (!clientSecret) return <div>Loading...</div>;

  return (
    <section>
      <BreadCrumb title="Checkout" url="checkout" />
      <div className="bg-gray-100 min-h-screen py-10 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Billing Details Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Billing Details</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      {...register("firstName", { required: "First name is required" })}
                      className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-sm">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      {...register("lastName", { required: "Last name is required" })}
                      className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-sm">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company Name (Optional)
                  </label>
                  <input
                    {...register("companyName")}
                    className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Country / Region
                  </label>
                  <select
                    {...register("country", { required: "Country is required" })}
                    className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                  >
                    <option value="">Select a country</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="USA">United States</option>
                  </select>
                  {errors.country && (
                    <span className="text-red-500 text-sm">
                      {errors.country.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Street Address
                  </label>
                  <input
                    {...register("streetAddress", { required: "Street address is required" })}
                    className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                  />
                  {errors.streetAddress && (
                    <span className="text-red-500 text-sm">
                      {errors.streetAddress.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Town / City
                    </label>
                    <input
                      {...register("city", { required: "City is required" })}
                      className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                    />
                    {errors.city && (
                      <span className="text-red-500 text-sm">
                        {errors.city.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      State / Province
                    </label>
                    <input
                      {...register("province", { required: "Province is required" })}
                      className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                    />
                    {errors.province && (
                      <span className="text-red-500 text-sm">
                        {errors.province.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      ZIP Code
                    </label>
                    <input
                      {...register("zipCode", { required: "ZIP Code is required" })}
                      className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                    />
                    {errors.zipCode && (
                      <span className="text-red-500 text-sm">
                        {errors.zipCode.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      {...register("phone", { required: "Phone is required" })}
                      className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-sm">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    {...register("email", { required: "Email is required" })}
                    className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    {...register("additionalInfo")}
                    className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                    rows={4}
                  />
                </div>
              </form>
            </div>

            {/* Order Summary and Payment */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Order Summary</h2>
              <div className="mb-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between mb-2">
                    <span>{item.name} x {item.quantity}</span>
                    <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex justify-between py-4 border-t">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-4 border-b font-bold">
                  <span>Total</span>
                  <span className="text-[#B88E2F]">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <PaymentForm />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message || "Payment failed");
    } else {
      alert("Payment successful!");
    }
    setIsProcessing(false);
  };

  return (
    <form onSubmit={handlePaymentSubmit} className="space-y-4">
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-[#B88E2F] text-white py-3 rounded-md hover:bg-[#9a7627] transition"
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
      {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
    </form>
  );
}