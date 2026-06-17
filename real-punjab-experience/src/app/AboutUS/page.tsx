import React from 'react';
import TourPageLayout from '../components/TourPageLayout';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
  <div>
      <div className="w-full bg-white px-8">
      
      {/* 1. Hero / Header Section */}
      <section className="relative text-primary mt-20">
      
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl  md:text-6xl font-bold mb-6 tracking-wide">
            Discover the World with <span className="text-amber-500 tracking-wider">Real Punjab Experience</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Crafting authentic, seamless, and unforgettable travel experiences across Punjab and beyond since 2012.
          </p>
        </div>
      </section>

      {/* 2. Founder's Message */}
      <section className=" bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-4 px-2 -left-4 w-full h-full border-2 border-amber-500 rounded-2xl"></div>
              <img 
                src="/Images/ajay-profile.png" // Replace with actual image
                alt="Ajay Kumar, Founder" 
                className="relative w-full h-[450px] object-cover rounded-2xl shadow-xl z-10"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="text-amber-600 font-bold tracking-wider uppercase mb-2">A Message from Our Founder</p>
              <h2 className="text-3xl md:text-4xl tracking-wide font-bold text-gray-900 mb-6">
                "Travel is not just about the destination; it's about the stories you bring home."
              </h2>
              <p className="text-gray-600 text-lg font-serif leading-relaxed mb-6">
                Welcome to our travel family. I’m Ajay Kumar, and in 2012, 
                I started this company with a simple but powerful vision: 
                to show the world the true, unfiltered beauty of our heritage, culture, and landscapes. 
              </p>
              <p className="text-gray-600 text-lg font-serif leading-relaxed mb-6">
                Over the past decade, we have grown
                 from a small local initiative into a trusted
                  name in the travel industry. But our core philosophy remains
                   unchanged. We don't just book trips; we curate experiences. 
                   Whether you are walking the historic streets of Amritsar, 
                   seeking spiritual peace, or exploring hidden gems, my team and
                    I are dedicated to ensuring every detail is handled with care, transparency, and warmth.
              </p>
              <div className="mt-8">
                <img src="/Images/signature-placeholder.png" alt="Ajay Kumar Signature" className="h-12 mb-2 opacity-70" /> {/* Optional: Add a signature image */}
                <p className="font-bold text-gray-900 text-xl tracking-wide">Ajay Kumar</p>
                <p className="text-gray-500 tracking-wider">Founder & Chief Travel Architect</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Journey (Timeline) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto tracking-wide">A decade of growth, learning, and creating unforgettable memories.</p>
          </div>
          <div className="grid grid-cols-1 font-serif md:grid-cols-4 gap-8">
            {[
              { year: "2012", title: "The Beginning", desc: "Founded by Ajay Kumar with a single vehicle and a passion for authentic local tours." },
              { year: "2016", title: "Expanding Horizons", desc: "Grew our fleet and introduced customized heritage walks and cultural immersion packages." },
              { year: "2019", title: "A Milestone", desc: "Celebrated our 10,000th happy traveler and received recognition for outstanding customer service." },
              { year: "2024", title: "The Future of Travel", desc: "Continuing to innovate with seamless digital bookings, sustainable tourism, and premium experiences." }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-0 md:text-center border-l-2 md:border-l-0 md:border-t-2 border-amber-200 pt-4 md:pt-8">
                <div className="absolute -left-[9px] top-4 md:left-1/2 md:-translate-x-1/2 md:-top-[9px] w-4 h-4 bg-amber-500 rounded-full border-4 border-white"></div>
                <span className="text-amber-600 font-bold text-2xl block mb-2">{item.year}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The [Company Name] Difference (Why Choose Us) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Travel Experience, Redefined</h2>
            <p className="text-gray-600 max-w-2xl mx-auto tracking-wide">We go above and beyond to ensure your journey is flawless from start to finish.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-serif">
            {[
              { 
                icon: "🗺️", 
                title: "Deep Local Expertise", 
                desc: "Our guides aren't just narrators; they are locals with generations of knowledge, sharing stories you won't find in guidebooks." 
              },
              { 
                icon: "🛡️", 
                title: "Safety & Transparency", 
                desc: "No hidden fees, no surprises. We provide clear pricing, verified vehicles, and 24/7 on-ground support for your peace of mind." 
              },
              { 
                icon: "✨", 
                title: "Highly Customizable", 
                desc: "Your trip, your rules. We tailor every itinerary to match your pace, interests, and dietary preferences." 
              },
              { 
                icon: "🤝", 
                title: "Community First", 
                desc: "We partner with local artisans, family-run eateries, and community kitchens to ensure your travel benefits the local economy." 
                },
              { 
                icon: "🚗", 
                title: "Premium Comfort", 
                desc: "Travel in well-maintained, air-conditioned vehicles with professional, courteous, and experienced drivers." 
              },
              { 
                icon: "🌱", 
                title: "Sustainable Tourism", 
                desc: "We are committed to eco-friendly practices, respecting cultural heritage, and minimizing our environmental footprint." 
              }
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Meet Our Experts */}
      

      {/* 6. Stats Section */}
      <section className="py-16 bg-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "12+", label: "Years of Excellence" },
              { number: "15,000+", label: "Happy Travelers" },
              { number: "50+", label: "Unique Itineraries" },
              { number: "4.9/5", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-amber-100 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-wide">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Let us handle the details while you focus on making memories. Contact us today to customize your perfect itinerary.
          </p>
       
        </div>
      </section>
       
      
       
    </div>
     <Footer/>
  </div>
  );
}