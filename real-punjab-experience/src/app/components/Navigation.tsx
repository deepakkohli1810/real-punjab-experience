"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TourDropdown from "./TourDropdown";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-2 mb-2 md:top-3 lg:top-4 z-50 w-full">
      {/* Desktop & Mobile Navbar */}
      <nav className="w-[95%] max-w-8xl mx-auto bg-white border border-gray-200 rounded-full shadow-lg">
        <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-2">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/Images/logo.png"
              alt="Logo"
              width={140}
              height={50}
              priority
              className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-1 lg:gap-3 xl:gap-5">
            
            <Link
              href="/"
              className="text-gray-700 hover:text-white  px-3
               lg:px-5 xl:px-7 py-2 rounded-full  text-sm lg:text-base tracking-wide 
               hover:bg-[#1c2b60] hover:-translate-y-1 transition-all duration-300 ease-in-out "
            >
              Home
            </Link>

            <TourDropdown />

            <Link
              href="/TaxiServices"
              className="text-gray-700 hover:text-white
                px-2 lg:px-5 xl:px-7 py-2 
               rounded-full text-sm lg:text-base tracking-wide 
               hover:bg-[#1c2b60] hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              Taxi Services
            </Link>

            <Link
              href="/AboutUS"
              className="text-gray-700 hover:text-white
               px-3 lg:px-5 xl:px-7 py-2 rounded-full 
                text-sm lg:text-base  tracking-wide 
               hover:bg-[#1c2b60] hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-white
                px-3 lg:px-5 xl:px-7 py-2 rounded-full 
              text-sm lg:text-base tracking-wide 
               hover:bg-[#1c2b60] hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/explore-more"
            className="hidden md:flex items-center justify-center
             bg-[#1c2b60] text-white px-4 lg:px-6 py-2 rounded-full 
              hover:bg-blue-900 text-sm lg:text-base 
               hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            Explore More
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 mt-3 flex justify-center">
          <div className="w-[95%] max-w-md bg-white rounded-3xl shadow-xl border border-gray-200  animate-fadeIn">
            
            <div className="flex flex-col p-4">

              <Link
                href="/"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100"
              >
                Home
              </Link>

              <div className=" px-4 lg:px-0 py-1 lg:py-0">
                <TourDropdown />
              </div>

              <Link
                href="/TaxiServices"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100"
              >
                Taxi Services
              </Link>

              <Link
                href="/AboutUS"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100"
              >
                Contact Us
              </Link>

              <Link
                href="/explore-more"
                onClick={closeMenu}
                className="mt-3 bg-[#1c2b60] text-white text-center py-3 rounded-full hover:bg-blue-900 transition-all"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}