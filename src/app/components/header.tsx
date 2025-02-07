<<<<<<< HEAD

'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import CartDropDown from "./CartDropDown ";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { ClerkLoaded, SignedIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { PackageIcon, ShoppingCartIcon } from "lucide-react";


export default function Header() {
  const router = useRouter();
  const { cartCount } = useCart();
  const { wishItems } = useWishlist();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearchInput(false);
      setSearchQuery("");
      setMobileMenuOpen(false);
    }
  };
  const createClerkPasskey = async () => {
    try {
      const response = await user?.createPasskey();
      console.log(response);
    } catch (error) {
      console.error("Error:", JSON.stringify(error, null, 2));
    }
  }
  const { user } = useUser();
 
  return (
    <header className="shadow-sm w-full mx-auto px-4 sm:px-6 text-xl border-b border-gray-200 bg-white sticky top-0 z-50 md:px-16 lg:px-32">
      <div className="flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Website Logo"
            width={50}
            height={32}
            priority
            className="mr-2"
          />
          <span className="font-bold text-2xl hidden lg:block">Furniro</span>
        </div>

        {/* Desktop Navigation Links or Search Input */}
        {showSearchInput ? (
          <div className="hidden md:flex items-center flex-1 mx-8">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
              autoFocus
            />
            <button
              onClick={() => setShowSearchInput(false)}
              className="ml-4 text-gray-500 hover:text-black"
              title="Close search"
            >
              <IoClose className="h-6 w-6" />
            </button>
          </div>
        ) : (
          <nav className="hidden md:flex gap-x-12">
            <Link href="/" className="text-gray-800 hover:text-black">Home</Link>
            <Link href="/shop" className="text-gray-800 hover:text-black">Shop</Link>
            <Link href="/blog" className="text-gray-800 hover:text-black">Blog</Link>
            <Link href="/contact" className="text-gray-800 hover:text-black">Contact</Link>
          </nav>
        )}
  {/* <div className=" bg-slate-500 z-10">
  <div className="flex items-center space-x-4 mt-4 sm:'mt-0 flex-none' flex-1">
         
      

          <ClerkLoaded>
            <SignedIn>
              adnan
            </SignedIn>
            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}
            {user?.passkeys.length === 0 && (
              <button
                onClick={createClerkPasskey}
                className="bg-white hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded border-blue-300 border"
              >
                Create Passkey now
              </button>
            )}
          </ClerkLoaded>
        </div>
  </div> */}
        {/* Desktop Icons Section */}
        <div className="hidden md:flex items-center gap-4">
          {!showSearchInput && (
            <>
              <IoSearchOutline
                className="h-6 w-6 text-gray-800 hover:text-black cursor-pointer"
                onClick={() => setShowSearchInput(true)}
              />
              <Link href="/wishlist" className="relative">
                <FiHeart className="h-6 w-6 text-gray-800 hover:text-black" />
                {wishItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishItems.length}
                  </span>
                )}
              </Link>
              <Sheet>
                <SheetTrigger className="relative">
                  <IoCartOutline className="h-6 w-6 text-gray-800 hover:text-black" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </SheetTrigger>
                <SheetContent className="p-4">
                  <CartDropDown />
                </SheetContent>
              </Sheet>
             
            </>
          )}
        </div>

        {/* Mobile Icons and Menu */}
        <div className="md:hidden flex items-center gap-4">
          {/* Wishlist Icon */}
          <Link href="/wishlist" className="relative">
            <FiHeart className="h-6 w-6 text-gray-800 hover:text-black" />
            {wishItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {wishItems.length}
              </span>
            )}
          </Link>

          {/* Cart Icon */}
          <Sheet>
            <SheetTrigger className="relative">
              <IoCartOutline className="h-6 w-6 text-gray-800 hover:text-black" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </SheetTrigger>
            <SheetContent className="p-4">
              <CartDropDown />
            </SheetContent>
          </Sheet>

          {/* Hamburger Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger>
              <RxHamburgerMenu className="h-6 w-6 text-gray-800" />
            </SheetTrigger>
            <SheetContent side="left" className="p-4">
              <div className="mt-8 space-y-6">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <button
                    onClick={handleSearch}
                    className="w-full mt-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
                  >
                    Search
                  </button>
                </div>
                <Link href="/" className="block text-lg">Home</Link>
                <Link href="/shop" className="block text-lg">Shop</Link>
                <Link href="/blog" className="block text-lg">Blog</Link>
                <Link href="/contact" className="block text-lg">Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}







=======
"use client";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 lg:py-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={32}
            priority
            className="mr-2"
          />
          <span className="font-bold text-2xl hidden lg:block">funiro</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          <ul className="flex gap-8 text-gray-900">
            <li>
              <Link href="/" className="hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-gray-600">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-600">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icons Section */}
        <div className="hidden lg:flex items-center gap-6">
          <IoSearchSharp className="h-6 w-6" />
          <FaRegUser className="h-6 w-6" />
          <FaRegHeart className="h-6 w-6" />
          <MdOutlineShoppingCart className="h-6 w-6" />
        </div>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <AiOutlineClose className="h-6 w-6" />
            ) : (
              <AiOutlineMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col items-start gap-4 px-6 py-4 text-gray-900">
            <li>
              <Link href="/" className="hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-gray-600">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-600">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-600">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Icons */}
          <div className="flex justify-around items-center px-6 py-4 border-t border-gray-200">
            <IoSearchSharp className="h-6 w-6" />
            <FaRegUser className="h-6 w-6" />
            <FaRegHeart className="h-6 w-6" />
            <MdOutlineShoppingCart className="h-6 w-6" />
          </div>
        </div>
      )}
    </header>
  );
}
>>>>>>> 91a95cc9800027ad7578e5d07468c3779b1bd425
