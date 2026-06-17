// components/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TourDropdown from "./TourDropdown";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // 1. Wrapper with relative and z-50 to ensure the navbar sits above ALL page content
    <header className=" sticky lg:top-4 xl:top-4 md:top-3 top-2 relative z-50 w-full ">
      
      {/* Main Top Navbar */}
      <nav className="bg-white  shadow-md mt-4 max-w-[95%] border-[1px] border-gray-800 mx-auto rounded-full relative">
        <div className="mx-auto py-2 px-4 md:px-6 flex items-center justify-between">
          
          {/* 1. Logo (Left) */}
          <Link href="/" className="font-bold text-blue-600 relative z-10">
            <Image
              src="/Images/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="w-24 h-auto md:w-32 lg:w-[120px]"
            />
          </Link>

          {/* 2. Desktop Navigation Links (Centered) */}
          <div className="hidden md:flex tracking-wide flex-1 justify-center items-center gap-2 lg:gap-4 xl:gap-6">
            <Link
              href="/"
              className="text-gray-700 tracking-wide hover:text-white hover:bg-[#1c2b60] hover:-translate-y-1 px-3 md:px-6 lg:px-8 py-1.5 rounded-full transition-all duration-300 ease-in-out font-light text-lg lg:text-lg"
            >
              Home
            </Link>

            <div className="relative group">
               <TourDropdown />
            </div>

            <Link
              href="/TaxiServices"
              className="text-gray-700 hover:text-white tracking-wide hover:bg-[#1c2b60] hover:-translate-y-1 px-3 md:px-6 lg:px-8 py-1.5 rounded-full transition-all duration-300 ease-in-out font-light text-sm lg:text-lg"
            >
              Taxi Services
            </Link>
            
            <Link
              href="/AboutUS"
              className="text-gray-700 hover:text-white tracking-wide hover:bg-[#1c2b60] hover:-translate-y-1 px-3 md:px-6 lg:px-8 py-1.5 rounded-full transition-all duration-300 ease-in-out font-light text-lg lg:text-lg"
            >
              About
            </Link>

            <Link
              href="/contact" 
              className="text-gray-700 hover:text-white tracking-wide hover:bg-[#1c2b60] hover:-translate-y-1 px-3 md:px-6 lg:px-8 py-1.5 rounded-full transition-all duration-300 ease-in-out font-light text-lg lg:text-lg"
            >
              Contact Us 
            </Link>
          </div>

          {/* 3. Desktop Explore More Button (Right) */}
          <Link
            href="/explore-more"
            className="hidden md:block bg-[#1c2b60] font-light text-base lg:text-lg text-white px-5 py-2 rounded-full hover:bg-blue-900 transition-all duration-300 ease-in-out flex-shrink-0 shadow-lg hover:shadow-xl"
          >
            Explore More
          </Link>

          {/* 4. Mobile Hamburger Button (Right) */}
          <button
            className="md:hidden text-gray-700 focus:outline-none z-[9999] touch-manipulation relative"
            onClick={() => {
   
    setIsMobileMenuOpen(prev => !prev);
  }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* 🚨 MOBILE DROPDOWN - MOVED OUTSIDE THE <nav> 🚨 */}
      {/* This prevents it from being clipped if the nav or a parent has overflow-hidden */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 flex justify-center  z-50">
          <div className="pointer-events-auto w-[95%] bg-white rounded-2xl shadow-xl 
          md:hidden animate-fadeIn border border-gray-400">
            <div className="flex flex-col p-4 gap-2 text-xl tracking-wider">
              
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[#1c2b60] hover:bg-white px-4 py-3 rounded-lg transition-colors text-lg font-light "
              >
                Home
              </Link>

              <div className="ml-4">
                 <TourDropdown />
              </div>

              <Link
                href="/TaxiServices"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[#1c2b60] hover:bg-white px-4 py-3 rounded-lg transition-colors text-lg font-light "
              >
                Taxi Services
              </Link>
              
              <Link
                href="/AboutUS"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[#1c2b60] hover:bg-white px-4 py-3 rounded-lg transition-colors text-lg font-light "
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[#1c2b60] hover:bg-white px-4 py-3 rounded-lg transition-colors text-lg font-light"
              >
                Contact Us
              </Link>

              <Link
                href="/explore-more"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#1c2b60] text-white text-center text-lg font-light px-5 py-3 rounded-full hover:bg-blue-900 transition-all duration-300 mt-2"
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