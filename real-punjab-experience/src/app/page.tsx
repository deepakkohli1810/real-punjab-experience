import Image from 'next/image'
import React from 'react'
import TourCard from './tourCard/page'

export default function page() {
  return (
<div className='relative px-4 md:px-6 lg:px-20 py-6 md:py-8 lg:py-10'>
    <div className="relative w-full h-[70vh] md:h-[60vh] lg:h-[750px] overflow-hidden">
      
      {/* --- BACKGROUND IMAGE --- */}
      <Image
        src="/Images/HeroImage.jpeg"
        alt="Hero Background"
        fill // Fills the parent div completely
        className="object-cover object-top rounded-4xl" // 'object-center' keeps the main subject in middle
        priority // Loads immediately for better LCP score
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
      />

      {/* --- DARK OVERLAY (Optional but Recommended) --- */}
      {/* This makes white text readable regardless of the image brightness */}
      <div className="absolute inset-0 rounded-4xl bg-black/40 z-10"></div>

      {/* --- TEXT CONTENT --- */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-serif  md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Real Punjab Experience
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8 drop-shadow-md">
          Discover amazing tours and reliable taxi services for your next adventure.
        </p>
        
        {/* Call to Action Button */}
        <button className="bg-primary hover:bg-blue-900 tracking-wider text-xl text-white font-bold py-3 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
          Book Now
        </button>
      </div>

    </div>

    
 {/* // Tours Details  */}
    <div className='p-4 mt-8 font-mono'>
      <h1>Tours </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>

     
      <TourCard 
      title="Golden Temple Tour"
    location="France"
    days={5}
    people={2}
    price={1200}
    image="/Tours/GoldentTemple.jpeg"
    slug="paris-romantic-getaway"
      />
       <TourCard
      
      />
       <TourCard
      
      />
    </div>
    </div>
</div>
  )
}
