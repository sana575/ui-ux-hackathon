import React from "react";
import Image from "next/image";
import Footer2 from "../components/Footer2";

const Cart = () => {
  return (
    <div>
      {/* Background Image */}
      <Image
        src="/cart background.png"
        alt="Cart background"
        width={1440}
        height={316}
        priority
        className="w-full object-cover"
      />
      <div className="flex justify-evenly">
        <div className="min-h-screen  flex items-center justify-center">
          <div className="p-6 max-w-5xl w-full ">
            {/* Cart Header */}
            <div className="flex justify-between items-center pb-4 bg-[#F9F1E7] py-3 mt-3">
              <h2 className="font-semibold text-[16px] ml-[160px]">Product</h2>
              <h2 className="font-semibold text-[16px] mr-[140px] ml-[110px]">
                Price
              </h2>
              <div className="flex">
                <h2 className="font-semibold text-[16px] mr-[220px]">
                  Quantity
                </h2>
                <h2 className="font-semibold text-[16px] mr-[20px]">
                  Subtotal
                </h2>
              </div>
            </div>

            {/* Cart Items */}
            <div className="mt-60">
              <div className="flex items-center justify-between pb-4 ">
                {/* Product Image */}
                <div className="flex items-center space-x-4 ">
                  <Image
                    src="/sofa.png"
                    alt="Asgaard sofa"
                    className="h-[105px] w-[108px] object-cover rounded-md"
                  />
                  <div className="flex  gap-20">
                    <h3 className="text-[#9F9F9F] text-[16px] font-medium text-lg mt-[8px] ml-[20px]">
                      Asgaard sofa
                    </h3>
                    <p className="text-gray-500 mt-[8px]">Rs. 250,000.00</p>
                    <input
                      type="number"
                      defaultValue="1"
                      className="w-11 border rounded-md text-center item-center py-1"
                    />

                    <p className="text-black mt-[8px]">Rs. 250,000.00</p>
                    <button className="text-red-500 hover:text-red-700">
                      🗑
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-[#F9F1E7] py-11  ">
            {/* Cart Header */}
            <div className="p-2 mb-1">
              <h2 className="font-semibold text-center w-[179px] h-[179px] text-[32px] ml-[120]  ">
                Cart Totals
              </h2>
            </div>

            {/* Cart Items */}
            <div className="p-2 mb-2 mt-[-90px]">
              <div className="items-center justify-between pb-1 px-20   ">
                <h2 className="flex items-center gap-x-16 text-lg mt-[-18px]">
                  <span>Subtotal</span>
                  <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
                </h2>
                <br />
                <br />
                <h2 className="flex items-center gap-x-24 text-lg">
                  <span>Total</span>
                  <span className="text-[#B88E2F]">Rs. 250,000.00</span>
                </h2>
              </div>

              {/* Cart Totals */}
              <div className="rounded-lg p-4"></div>
              <button className="ml-[95px] w-[222px] border-2 border-black rounded-[15px] py-3 font-400 text-[20px] hover:bg-black hover:text-white transition">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  
  );
};

export default Cart;
