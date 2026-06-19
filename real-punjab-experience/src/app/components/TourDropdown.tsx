"use client";  //Required if using App Router, as we are using useState

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const TourDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
 const dropdownRef = useRef<any>(null);

  const tours = [
    { name: "Golden Temple Tour", href: "/tours/GoldenTemple1" },
    { name: "Wagah Border Tour", href: "/tours/BorderTour" },
    { name: "Food Tour", href: "/tours/FoodTour" },
    { name: "Heritage Walk Tour", href: "/tours/HeritageWalk" },
    { name: "Full Day Tour", href: "/Package-Tour/OnedayTour" },

  ];

  // Close dropdown when clicking outside of it
 useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <div className="relative text-center " ref={dropdownRef}>
      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`text-gray-700 px-7 py-2 text-center  rounded-full transition-all duration-300 ease-in-out font-light flex text-sm lg:text-base items-center gap-2
          ${isOpen ? ' -translate-y-1' : 'lg:hover:text-white lg:hover:bg-[#1c2b60] lg:hover:-translate-y-1'}
        `}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Our Tours
        {/* Chevron Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="currentColor" 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 gap-3 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-fadeIn">
          <div className="py-1">
            {tours.map((tour) => (
              <Link
                key={tour.name}
                href={tour.href}
                className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200"
                onClick={() => setIsOpen(false)} // Close menu when a tour is selected
              >
                {tour.name}
              </Link>
            ))}
            
            {/* Optional: "View All Tours" link at the bottom */}
            <div className="border-t  border-gray-100 mt-1 pt-1">
              <Link
                href="/explore-more"
                className="block px-4 py-2 text-lg font-semibold text-blue-900 hover:bg-blue-50 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                View All Tours →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourDropdown;