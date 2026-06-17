// components/CleanTourCard.tsx
import Image from "next/image";
import Link from "next/link";

export default function CleanTourCard({ title, location, days, people, price, image, slug }) {
  return (
    <div className="group bg-white/50 font-serif rounded-2xl 
    shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all 
    duration-300 overflow-hidden  flex flex-col h-full">
      
      {/* --- Image Section --- */}
      <div className="relative h-90 w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Top Left Badge: Duration */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
          <span className="text-xs font-bold text-[#1c2b60] uppercase tracking-wider">
            {days} Hours
          </span>
        </div>

       
      </div>

      {/* --- Content Section --- */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Title & Rating */}
        <div className="mb-3">
          <h3 className="text-xl font-bold font-Helvetica text-gray-900 line-clamp-1 group-hover:text-[#1c2b60] transition-colors">
            {title}
          </h3>
         
        </div>

        {/* Meta Info (People & Type) */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1c2b60]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-gray-800">Min {people}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0b1849]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
             </svg>
            <span className="text-gray-800" >Guided Tour</span>
          </div>
        </div>

        {/* Footer: Price & Buttons */}
        <div className="mt-auto pt-4 border-t border-gray-600/25 flex items-center justify-between gap-3">
          <div>
            
            <p className="text-xs text-gray-900 font-medium uppercase">Starting Price</p>
            <p className="text-2xl font-bold text-[#1c2b60]">₹{price}</p>
          </div>

          {/* Button Group */}
          <div className="flex gap-2">
            {/* Details Button (Secondary) */}
            <Link 
              href={`/tours/${slug}`}
              className="px-3 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-colors"
            >
              Details
            </Link>

            {/* Book Button (Primary) */}
            <Link 
              href={`/book-now?tour=${slug}`}
              className="px-4 py-2 text-sm font-bold text-white bg-[#1c2b60] rounded-lg hover:bg-blue-800 shadow-md hover:shadow-lg transition-all transform active:scale-95"
            >
              Book Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}