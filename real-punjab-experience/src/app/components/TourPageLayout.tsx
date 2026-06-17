import React from 'react';
import TourDetails from './TourDetailCompo';
import ReviewsSection from './reviewSection';
import WhyChooseUs from '../WhyChooseUs/page';
import Footer from './Footer';
import AboutUs from '../AboutUS/page';

// Adjust these import paths to match your actual project structure


// Define the shape of your tour data (adjust properties as needed)



export default function TourPageLayout() {
  return (
    <div className="w-full overflow-hidden">
      {/* Main Tour Details Section */}
     
      
      
      {/* Container for padded inner sections */}
      <div className="px-4 md:px-20 xl:px-50">
        
        {/* Reviews Section */}
        <div className="mt-16 md:mt-24">
         <ReviewsSection/>
        </div>

       
      
        
      </div>

      {/* Footer Section (Full Width) */}
      <AboutUs/>
    </div>
  );
}