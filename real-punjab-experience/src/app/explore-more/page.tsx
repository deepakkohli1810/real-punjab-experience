
"use client";
import React from 'react'
import ReviewsSection from '../components/reviewSection'
import TourCard from '../tourCard/page'
import PackageTourCard from '../packageCard/page'
import TourEscortPage from '../tours/EscortTour/page';
import AboutUs from '../AboutUS/page';
import Link from "next/link";

export default function ExploreMore() {
  return (
    <div>
               <div className=' lg:mt-20 md:mt-14 mt-10 px-6 sm:px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-80 ' >
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
                price={999}
                image="/Tours/GoldentTemple.jpeg"
                slug="GoldenTemple1"
                 />
                  <TourCard
                   title="Wagah Border Tour  "
                location="Amritsar"
                days={1}
                people={2}
                price={1999}
                image="/Tours/Border-Tour.jpeg"
                slug="BorderTour"
                 
                 />
                  <TourCard
                  title="Food Walking Tour  "
                location="Amritsar"
                days={1}
                people={2}
                price={1299}
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
                price={1199}
                image="/Tours/Village-Tour.jpeg"
                slug="VillageTour"
                 />
                  <TourCard
                   title="Heritage Walk Tour "
                location="Amritsar"
                days={1}
                people={2}
                price={999}
                image="/HeritageImages/[Heritage]1.jpg"
                slug="HeritageWalk"
                 
                 />
                  <TourCard
                  title="Night Palki Sahib Ceremony "
                location="Amritsar"
                days={1}
                people={2}
                price={999}
                image="/PalkiPhotos/[Palki]3.jpg"
                slug="NightCeremony"
                 />
                 
               </div>
              {/* For the explore button  */}
               <div className="flex justify-center mt-10">
            
             <Link 
             href="/explore-more"  className='bg-primary text-white px-10 py-3 rounded-4xl tracking-wide hover:opacity-90 transition'>
                   
                   Explore More
           
             </Link>
           </div>
               </div>
           
           
             {/* Handpick experience  */}
           
             <div className='mt-20  mb-10 px-6 sm:px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-80 ' >
                <h1 className='text-black text-4xl text-start font-rubik  '> Handpicked Experience </h1>
                 <p className='text-black ml-1 tracking-wider font-rubik'> Travel hassle free </p>
                  
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                   <PackageTourCard 
             title="Amritsar Full Day Excursion"
             days={1}
             price={3500}
             image="/Tours/GoldentTemple.jpeg"
             slug="OnedayTour"
             
           />
            <PackageTourCard 
             title="Amritsar Two Days Tour "
             days={2}
             price={6500}
             image="/Images/HeroImage.jpeg"
             slug="TwodayTour"
             
           />
            <PackageTourCard 
             title="Amritsar Excursion with Mountains Escapes"
             days={5}
             price={18500}
             image="/Images/5DayTour.jpg"
             slug="FivedayTour"
             
           />
                </div>
           
                 <div className="flex justify-center lg:justify-end mt-10">
           
             <Link
             href="/explore-more"
           className="bg-primary text-lg font-sans uppercase text-white px-10 py-3 
             rounded-4xl tracking-wide hover:opacity-90  transition"
             >
               OR Customise Your Tour
             </Link>
           </div>
           
           
                 
             </div>
             
               <div className='mt-20 '>
             <ReviewsSection/>
            </div>
            
              <TourEscortPage/>
              <AboutUs/>
    </div>
  )
}
