import Image from 'next/image'
import React from 'react'
import TourCard from './tourCard/page'
import PackageTourCard from './packageCard/page'
import WhyChooseUs from './WhyChooseUs/page'
import Footer from './components/Footer'
import ReviewsSection from './components/reviewSection'
import TourDetails from './components/TourDetailCompo'

export default function page() {
  const tourData = {
    title: "Golden Triangle Luxury Tour",
    location: "Delhi, Agra, Jaipur",
    rating: 4.8,
    reviews: 124,
    price: 450,
    originalPrice: 600,
    duration: "7 Days / 6 Nights",
    groupSize: "Max 12 People",
    difficulty: "Easy",
    description: "Experience the best of India with our curated Golden Triangle luxury tour. Visit the majestic Taj Mahal, explore the vibrant streets of Jaipur, and delve into the history of Old Delhi.",
    highlights: [
      "Private AC Vehicle throughout the tour",
      "Luxury accommodation in 4-star hotels",
      "Professional English-speaking guide",
      "All entrance fees included",
      "Daily breakfast and dinner"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Delhi", description: "Meet and greet at the airport. Transfer to hotel. Evening free to explore Connaught Place." },
      { day: 2, title: "Delhi Sightseeing", description: "Visit Red Fort, Jama Masjid, and Qutub Minar. Evening light and sound show at Red Fort." },
      { day: 3, title: "Delhi to Agra", description: "Drive to Agra (200km). Visit Taj Mahal at sunrise. Explore Agra Fort." },
      // ... add more days
    ],
    inclusions: [
      "Accommodation (6 nights)",
      "Breakfast & Dinner daily",
      "Transportation (Mercedes/VW Vento)",
      "Guide services",
      "Entrance tickets"
    ],
    exclusions: [
      "Lunch",
      "Personal expenses",
      "Airfare to/from Delhi",
      "Tips and gratuities"
    ],
    images: [
      "/Images/tour-hero.jpg",
      "/Images/taj-mahal.jpg",
      "/Images/jaipur-fort.jpg",
      "/Images/delhi-food.jpg"
    ]
  };
  return (
<div>
  <div className='relative px-4 md:px-6 lg:px-20 py-6 md:py-8 lg:py-8'>
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
    <div className='px-2 mt-30 xl:px-40 lg:px-30 md:px-10  ' >
      <div className='mt-10 mb-10 '>
        <h1 className='text-black text-4xl text-start font-rubik  '>Top Rated Tours In Amritsar </h1>
      <p className='text-black ml-1 tracking-wider font-rubik'> Specially curated for you</p>
      </div>
      {/* First Row of the card  */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-20 lg:gap-20 md:gap-10 gap-10 '>

     
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
     image="/Tours/Heritage-Walk.jpeg"
     slug="HeritageWalk"
      
      />
       <TourCard
       title="Night Palki Sahib Ceremony "
     location="Amritsar"
     days={1}
     people={2}
     price={1400}
     image="/Tours/Food-Tour1.jpeg"
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
  slug="kerala-backwaters-hills"
  inclusions={["5 Star Hotel", "Breakfast & Dinner", "Private Cab", "Houseboat Stay"]}
/>
 <PackageTourCard 
  title="Amritsar Two Days Tour "
  days={2}
  price={15999}
  image="/Tours/GoldentTemple.jpeg"
  slug="kerala-backwaters-hills"
  inclusions={["5 Star Hotel", "Breakfast & Dinner", "Private Cab", "Houseboat Stay"]}
/>
 <PackageTourCard 
  title="Amritsar Excursion with Mountains Escapes"
  days={5}
  price={15999}
  image="/Tours/GoldentTemple.jpeg"
  slug="kerala-backwaters-hills"
  inclusions={["5 Star Hotel", "Breakfast & Dinner", "Private Cab", "Houseboat Stay"]}
/>
     </div>

      <div className="flex justify-center lg:justify-end mt-10">
  <button className="bg-primary text-lg font-sans uppercase text-white px-10 py-3 
  rounded-4xl tracking-wide hover:opacity-90  transition">
    OR Customise Your Tour
  </button>
</div>

 <div className='mt-20'>
  <WhyChooseUs/>
 </div>

 <div className='mt-20 '>
  <ReviewsSection/>
 </div>
      
  </div>

  <TourDetails  {...tourData} />
  
</div>
<Footer/>
</div>
  )
}
