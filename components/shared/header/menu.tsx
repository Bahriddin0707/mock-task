"use client";

import { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-gray-300">
          <FaSearch size={20} />
        </button>

        <div className="relative">
          <button className="text-white hover:text-gray-300">
            <FaShoppingCart size={20} />
          </button>
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            1
          </span>
        </div>

        <button
          className="mobile-menu text-white hover:text-gray-300 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-[80%] h-full bg-black z-20 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              className="text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={28} />
            </button>
          </div>

          <nav className="flex flex-col items-center px-6 space-y-6 mt-8">
            <Link
              href="/"
              className="text-white text-xl hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-white text-xl hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className="text-white text-xl hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-white text-xl hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
