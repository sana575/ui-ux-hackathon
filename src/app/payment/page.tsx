"use client"; // This directive ensures the component runs only on the client side in a Next.js app.
// Install @stripe/stripe-js & @stripe/react-stripe-js
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "./action";

// Initialize Stripe with the public key from environment variables
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    createPaymentIntent()
      .then((res) => {
          setClientSecret(res.clientSecret);
      })
  }, []);
  console.log(clientSecret);

  if (!clientSecret) {
    return <div>Loading...</div>;
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <Elements stripe={stripePromise} 
      options={{ clientSecret }}>
        <PaymentForm />
      </Elements>
    </div>
  );
}

// Component that handles the payment form
function PaymentForm() {
  const stripe = useStripe(); // Hook to access Stripe methods
  const elements = useElements(); // Hook to access Stripe elements
  const [isProcessing, setIsProcessing] = useState(false); // State to manage loading state while processing
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State to show error messages

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh when submitting the form

    if (!stripe || !elements) return; // Ensure Stripe is loaded before proceeding

    setIsProcessing(true); // Indicate that the payment is being processed

    // Attempt to confirm the payment
    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required", // Redirect if required by the payment method
    });

    if (error) {
      setErrorMessage(error.message || "An unknown error occurred"); // Display error message if payment fails
      setIsProcessing(false);
    } else {
      // Payment was successful
      setErrorMessage(null);
      alert("Payment successful!"); // Notify the user
      setIsProcessing(false);
      // You can optionally redirect the user to a success page here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Stripe's payment element (handles input fields for card details, etc.) */}
      <PaymentElement />
      <button type="submit" 
      disabled={!stripe || isProcessing}>
        {isProcessing ? "Processing..." : "Pay Now"} {/* Show dynamic button text */}
      </button>
      {/* Display any error messages if they occur */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </form>
  );
}












