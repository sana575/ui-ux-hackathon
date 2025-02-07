
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
