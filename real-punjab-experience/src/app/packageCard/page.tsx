// components/PackageTourCard.tsx
import Image from "next/image";
import Link from "next/link";

interface PackageTourCardProps {
  title: string;
  days: number | string;
  price: number | string;
  image: string;
  slug: string;
  minPersons?: number | string; // Optional prop
}

export default function PackageTourCard({ 
  title, 
  days, 
  price, 
  image, 
  slug,
  minPersons = 2 // Default to 2 if not provided
}: PackageTourCardProps) {
  return (
    <div className="group font-serif bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      
      {/* --- Image Section --- */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Top Left Badge: Duration */}
        <div className="absolute top-4 left-4 bg-[#1c2b60] text-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-wider">
            {days} Days
          </span>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Title */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-[#1c2b60] transition-colors leading-tight">
            {title}
          </h3>
        </div>

        {/* Meta Info Row: Min Persons & Guided Tour */}
        <div className="flex flex-wrap gap-2 mb-4">
          {/* Min Persons Badge */}
          <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xs font-medium text-gray-700">Min {minPersons} Pax</span>
          </div>

          {/* Guided Tour Badge */}
          <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
             </svg>
            <span className="text-xs font-medium text-gray-700">Guided Tour</span>
          </div>
        </div>

        {/* Transport Availability Highlight (Small Tab) */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-800 text-white text-xs font-medium shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Transport Also Available
          </span>
        </div>

        {/* Footer: Price & Buttons */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase">Package Price</p>
            <div className="flex items-baseline gap-1">
              <p className="text-2xl font-bold text-[#1c2b60]">₹{price}</p>
              <span className="text-xs text-gray-400">/person</span>
            </div>
          </div>

          {/* Button Group */}
          <div className="flex gap-2">
            {/* Details Button */}
            <Link 
              href={`/packages/${slug}`}
              className="px-3 py-2 text-sm font-semibold text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-[#1c2b60] transition-colors"
            >
              View Plan
            </Link>

            {/* Book Button */}
            <Link 
              href={`/book-now?package=${slug}`}
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