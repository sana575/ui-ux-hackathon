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