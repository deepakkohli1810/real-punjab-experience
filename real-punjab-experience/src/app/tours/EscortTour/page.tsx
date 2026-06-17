// app/tour-escort/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Users, ShieldCheck, Phone, Star, ChevronRight, Compass, Heart } from "lucide-react";

const tourEscorts = [
  {
    id: "himachal-escorted",
    name: "Himachal Pradesh Escorted Tour",
    type: "Mountain Retreat",
    duration: "5 to 10 Days",
    locations: "Shimla, Manali, Dharamshala",
    features: [
      "Professional escort accompanying 24/7",
      "Seamless hotel & transport coordination",
      "Local cultural & historical insights",
      "Perfect for families & senior citizens"
    ],
    image: "/PackagePhotos/5DayPhotos/[FiveDays]1.jpg",
    recommended: true,
  },
  {
    id: "ladakh-kashmir",
    name: "Kashmir & Ladakh Expedition",
    type: "High-Altitude Journey",
    duration: "7 to 12 Days",
    locations: "Srinagar, Leh, Nubra, Pangong",
    features: [
      "High-altitude experienced tour escort",
      "Inner line permit assistance for Ladakh",
      "Acclimatization & safety management",
      "Luxury houseboat & camp coordination"
    ],
    image: "/Images/ladakh.jpg",
    recommended: true,
  },
  {
    id: "hindu-temples",
    name: "Sacred Hindu Temple Pilgrimage",
    type: "Spiritual Journey",
    duration: "Customizable",
    locations: "Vaishno Devi, Jwala Ji, Chintpurni",
    features: [
      "Guided temple rituals & Darshan assistance",
      "Priority queue & VIP access management",
      "Knowledgeable spiritual guide",
      "Comfortable pacing for elderly pilgrims"
    ],
    image: "/Images/vaishnoDevi.jpg",
    recommended: false,
  },
  {
    id: "sikh-temples",
    name: "Sikh Heritage & Gurudwara Darshan",
    type: "Religious Heritage",
    duration: "3 to 7 Days",
    locations: "Golden Temple, Anandpur Sahib, Rewalsar",
    features: [
      "Deep dive into Sikh history & traditions",
      "Langar & Kirtan experience coordination",
      "Visit to historic Takhts & Gurudwaras",
      "Respectful and highly knowledgeable escort"
    ],
    image: "/Images/gurudwara.jpg",
    recommended: true,
  },
  {
    id: "custom-spiritual",
    name: "Custom Spiritual & Cultural Escort",
    type: "Tailored Expedition",
    duration: "On Request",
    locations: "Pan India / Custom Route",
    features: [
      "Fully customized itinerary planning",
      "Multi-lingual tour escorts available",
      "Special pooja & ritual arrangements",
      "24/7 on-ground emergency assistance"
    ],
    image: "/Images/logo.png",
    recommended: false,
  }
];

export default function TourEscortPage() {
  
  // Function to generate the contact link with pre-filled tour data
  const getQuoteLink = (tourName: string, type: string) => {
    const params = new URLSearchParams({
      service: "Tour Escort Booking",
      tour: tourName,
      type: type,
      message: `Hello, I am interested in booking a Tour Escort for the "${tourName}". Please share the detailed itinerary and pricing.`,
    });
    return `/contact?${params.toString()}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
      
      {/* --- HERO SECTION --- */}
      <div className="relative  text-white py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="" />
         
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-primary lg:text-6xl font-sans tracking-wide font-bold mb-6 tracking-tight">
            Professional Tour Escort Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Travel with absolute peace of mind. Our experienced, multi-lingual tour escorts accompany you throughout your journey, 
            managing logistics, providing cultural insights, and ensuring a seamless travel experience across India.
          </p>
        </div>
      </div>

      {/* --- TOUR ESCORT PACKAGES SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourEscorts.map((tour) => (
            <div key={tour.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 relative group flex flex-col">
              
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#1c2b60] font-serif text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {tour.type}
                </span>
              </div>
              
              {tour.recommended && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-[#f4ebd7] text-[#1c2b60] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <Star size={12} className="fill-current" /> Popular
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative font-sans h-56 w-full bg-gray-200">
                <Image 
                  src={tour.image} 
                  alt={tour.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-sans tracking-wider font-bold text-gray-900 mb-2">{tour.name}</h3>
                
                {/* Specs Row */}
                <div className="flex items-center gap-4 mb-4 text-sm font-serif text-gray-600 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock size={16} className="text-[#1c2b60]" />
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 overflow-hidden">
                    <MapPin size={16} className="text-[#1c2b60] flex-shrink-0" />
                    <span className="font-medium truncate">{tour.locations}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2 font-serif mb-6 flex-grow">
                  {tour.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <Compass size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Get Quote Button */}
                <Link 
                  href={getQuoteLink(tour.name, tour.type)}
                  className="w-full bg-[#1c2b60] hover:bg-[#000a1f] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  Get a Quote
                  <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- WHY CHOOSE US --- */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-sans tracking-wide font-bold text-gray-900 mb-4">Why Hire a Tour Escort?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto tracking-wide">A tour escort is your travel companion, manager, and guide rolled into one, ensuring your trip is stress-free and memorable.</p>
          </div>

          <div className="grid grid-cols-1 font-serif font-sans md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<ShieldCheck size={28} />}
              title="Safety & Security"
              description="Your escort handles all on-ground logistics, ensuring you travel safely in unfamiliar terrains."
            />
            <FeatureCard 
              icon={<Users size={28} />}
              title="Seamless Coordination"
              description="From hotel check-ins to transport schedules, we manage the details so you can enjoy the views."
            />
            <FeatureCard 
              icon={<Heart size={28} />}
              title="Cultural Connection"
              description="Bridge the language barrier and gain deep, authentic insights into local traditions and history."
            />
            <FeatureCard 
              icon={<Clock size={28} />}
              title="24/7 Assistance"
              description="Have a question or an emergency? Your tour escort is available round-the-clock to help."
            />
          </div>
        </div>
      </div>

      {/* --- BOTTOM CTA --- */}
  

    </div>
  );
}

// --- Sub Components ---

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-300 text-center">
      <div className="w-14 h-14 bg-[#1c2b60]/10 text-[#1c2b60] rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold font-sans text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}