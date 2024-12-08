import React from "react";
import Link from "next/link"
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";


export default function Navbar ()  {
  return (
    <nav className="bg-white text-black w-full ">
      <div className="  mx-auto flex  justify-around gap-10 px-3 py-3 2xl:w-[1500px]">
        {/* Logo */}
        

        {/* Navigation Links */}
        <ul className=" px-4 hidden md:flex space-x-6">
          <li><Link href="/Home" className="hover:text-yellow-500">Home</Link></li>
          <li><Link href="/Shop" className="hover:text-yellow-500">Shop</Link></li>
          <li><Link href="/About" className="hover:text-yellow-500">About</Link></li>
          <li><Link href="/Contact" className="hover:text-yellow-500">Contact</Link></li>
        </ul>

        {/* Icons */}
        <div className="flex space-x-4">
      {/* Search Icon */}
      <button aria-label="Search" className="hover:text-yellow-500">
        <MagnifyingGlassIcon className="h-6 w-6" />
      </button>

      {/* Favorites Icon */}
      <button aria-label="Favorites" className="hover:text-yellow-500">
        <HeartIcon className="h-6 w-6" />
      </button>

      {/* Cart Icon */}
      <button aria-label="Cart" className="hover:text-yellow-500">
        <ShoppingCartIcon className="h-6 w-6" />
      </button>

      {/* Profile Icon */}
      <button aria-label="Profile" className="hover:text-yellow-500">
        <UserIcon className="h-6 w-6" />
      </button>
    </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-center bg-gray-700 py-2">
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
          <li><Link href="/shop" className="hover:text-yellow-500">Shop</Link></li>
          <li><Link href="/about" className="hover:text-yellow-500">About</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-500">Contact</Link></li>
        </ul>
      </div>
      </div>
    </nav>
  );
};


