<<<<<<< HEAD

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-6">Funiro.</h2>
          <address className="mt-2 text-gray-600 not-italic">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </address>
        </div>

        {/* Links Section */}
        <div className="font-poppins text-[500] text-base">
          <h3 className="mb-2 text-gray-400">Links</h3>
          <ul className="space-y-4 mt-6">
            <li>
              <Link href="/" className="text-black hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-black hover:text-gray-700">
                Shop
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-gray-700">
                About
              </Link>
            </li>
            <li>
              <Link href="contact" className="text-black hover:text-gray-700">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="font-poppins text-[500] text-base">
          <h3 className="mb-2 text-gray-400">Help</h3>
          <ul className="space-y-4 mt-6">
            <li>
              <Link href="#" className="text-black hover:text-gray-700">
                Payment Options
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-gray-700">
                Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-gray-700">
                Privacy Policies
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-poppins text-[500] text-base mb-2 text-gray-400">
            Newsletter
          </h3>
          <form className="flex items-start">
            <div className="w-full flex items-center">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full p-1 border-b border-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="text-[#000000] p-1 font-poppins font-bold border-b  border-gray-400"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-gray-100 py-4">
        {/* Copyright */}
        <div className="container mx-auto px-4 text-left text-sm text-[#000000]">
          © 2023 Funiro. Sana ishaq All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
=======

import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";
import { BsSend } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Branding Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Funiro.</h3>
          <p className="text-gray-600 mb-4">
            Worldwide furniture store since 2020. We sell over 1000+ branded
            products on our website.
          </p>
          <p className="text-gray-600 flex"><IoLocationSharp className="mt-1"/>Sawojajar Malang, Indonesia</p>
          <p className="text-gray-600 flex"><MdOutlineLocalPhone className="mt-1" />+62 89 456 3455</p>
          <Link href="https://www.funiro.com" className="text-primary hover:underline">
            www.funiro.com
          </Link>
        </div>

        {/* Menu Section */}
        <div>
          <h4 className="font-semibold mb-4">Menu</h4>
          <ul className="text-gray-600 space-y-2">
            <li><Link href="#" className="hover:underline">Products</Link></li>
            <li><Link href="#" className="hover:underline">Rooms</Link></li>
            <li><Link href="#" className="hover:underline">Inspirations</Link></li>
            <li><Link href="#" className="hover:underline">About Us</Link></li>
            <li><Link href="#" className="hover:underline">Terms & Policy</Link></li>
          </ul>
        </div>

        {/* Account Section */}
        <div>
          <h4 className="font-semibold mb-4">Account</h4>
          <ul className="text-gray-600 space-y-2">
            <li><Link href="#" className="hover:underline">My Account</Link></li>
            <li><Link href="#" className="hover:underline">Checkout</Link></li>
            <li><Link href="/card" className="hover:underline">My Cart</Link></li>
            <li><Link href="#" className="hover:underline">My Catalog</Link></li>
          </ul>
        </div>

        {/* Stay Connected Section */}
        <div>
          <h4 className="font-semibold mb-4">Stay Connected</h4>
          <ul className="text-gray-600 space-y-2">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>

        {/* Stay Updated Section */}
        <div>
          <h4 className="font-semibold mb-4">Stay Updated</h4>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
        
            <button
              type="submit"
              className="bg-primary text-white  py-2 rounded-r-md"
            >
              →
            </button>
            <div className="bg-[#B88E2F] p-3"><BsSend/></div> 
          </form>
        </div>
      </div>
      
      <div className="border-t border-[#D9D9D9] pb-10 sm:pb-14 w-full ml-10 ">
        <br />
        <span className="text-xs sm:text-sm">2023 Funiro. All rights reserved</span>
      </div>

    </footer>
  );
};

export default Footer;

>>>>>>> 91a95cc9800027ad7578e5d07468c3779b1bd425
