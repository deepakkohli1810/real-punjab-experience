import Image from 'next/image'
import React from 'react'
import TourCard from './tourCard/page'
import PackageTourCard from './packageCard/page'
import WhyChooseUs from './WhyChooseUs/page'
import Footer from './components/Footer'
import ReviewsSection from './components/reviewSection'
import TourDetails from './components/TourDetailCompo'
import TaxiServicesPage from './TaxiServices/page'
import AboutUs from './AboutUS/page'
import PackageTourDetails from './components/PackageTourCompo'

export default function page() {
 
  return (
<div>
  <div className='relative px-4 md:px-6 lg:px-20 py-6 md:py-8 lg:py-8'>
    <div className="relative w-full h-[75vh] md:h-[60vh] lg:h-[750px] ">
      
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
      <div className="absolute inset-0 rounded-4xl bg-black/40 z-0"></div>

      {/* --- TEXT CONTENT --- */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center text-center px-4">
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
    <div className='px-2 mt-30 xl:px-40 lg:px-30 md:px-10  ' >
      <div className='mt-10 mb-10 '>
        <h1 className='text-black text-4xl text-start font-rubik  '>Top Rated Tours In Amritsar </h1>
      <p className='text-black ml-1 tracking-wider font-rubik'> Specially curated for you</p>
      </div>
      {/* First Row of the card  */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-10 lg:gap-10 md:gap-10 gap-10 '>

     
      <TourCard 
      title="Golden Temple Tour"
     location="Amritsar"
     days={1}
     people={2}
     price={1200}
     image="/Tours/GoldentTemple.jpeg"
     slug="GoldenTemple1"
      />
       <TourCard
        title="Wagah Border Tour  "
     location="Amritsar"
     days={1}
     people={2}
     price={1400}
     image="/Tours/Border-Tour.jpeg"
     slug="BorderTour"
      
      />
       <TourCard
       title="Food Walking Tour  "
     location="Amritsar"
     days={1}
     people={2}
     price={1400}
     image="/Tours/Food-Tour1.jpeg"
     slug="FoodTour"
      />
      
    </div>
      {/* second Row of the card  */}
 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-15'>

     
      <TourCard 
      title="Amritsar Village Tour  "
     location="Amritsar"
     days={1}
     people={2}
     price={1200}
     image="/Tours/Village-Tour.jpeg"
     slug="VillageTour"
      />
       <TourCard
        title="Heritage Walk Tour "
     location="Amritsar"
     days={1}
     people={2}
     price={1400}
     image="/HeritageImages/[Heritage]1.jpg"
     slug="HeritageWalk"
      
      />
       <TourCard
       title="Night Palki Sahib Ceremony "
     location="Amritsar"
     days={1}
     people={2}
     price={1400}
     image="/PalkiPhotos/[Palki]3.jpg"
     slug="NightCeremony"
      />
      
    </div>
   {/* For the explore button  */}
    <div className="flex justify-center mt-10">
  <button className="bg-primary text-white px-10 py-3 rounded-4xl tracking-wide hover:opacity-90 transition">
    Explore More
  </button>
</div>
    </div>


  {/* Handpick experience  */}

  <div className='mt-20 mb-10 px-2 xl:px-40 lg:px-30 md:px-10 ' >
     <h1 className='text-black text-4xl text-start font-rubik  '> Handpicked Experience </h1>
      <p className='text-black ml-1 tracking-wider font-rubik'> Travel hassle free </p>
       
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
        <PackageTourCard 
  title="Amritsar Full Day Excursion"
  days={1}
  price={15999}
  image="/Tours/GoldentTemple.jpeg"
  slug="OnedayTour"
  
/>
 <PackageTourCard 
  title="Amritsar Two Days Tour "
  days={2}
  price={15999}
  image="/Images/HeroImage.jpeg"
  slug="TwodayTour"
  
/>
 <PackageTourCard 
  title="Amritsar Excursion with Mountains Escapes"
  days={5}
  price={15999}
  image="/Images/5DayTour.jpg"
  slug="FivedayTour"
  
/>
     </div>

      <div className="flex justify-center lg:justify-end mt-10">
  <button className="bg-primary text-lg font-sans uppercase text-white px-10 py-3 
  rounded-4xl tracking-wide hover:opacity-90  transition">
    OR Customise Your Tour
  </button>
</div>

 <div className='mt-20 '>
  <ReviewsSection/>
 </div>
      
  </div>
  
</div>
<AboutUs/>
<Footer/>

</div>
  )
}
