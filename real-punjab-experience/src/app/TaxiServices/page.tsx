// app/taxi-services/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { User, Briefcase, Snowflake, ShieldCheck, Phone, Clock, Star, ChevronRight } from "lucide-react";
import Footer from "../components/Footer";

const vehicles = [
  {
    id: "swift-dzire",
    name: "Maruti Swift Dzire",
    type: "Sedan",
    seats: "4+1",
    luggage: "2 Large Bags",
    features: ["Air Conditioning", "Comfortable Seating", "Fuel Efficient", "Ideal for Couples/Small Families"],
    image: "/TaxiImages/swift-dzire-taxti.avif",
    recommended: false,
  },
  {
    id: "kia-carens",
    name: "Kia Carens",
    type: "Premium MPV",
    seats: "6+1",
    luggage: "3 Large Bags",
    features: ["Premium Interior", "Spacious Legroom", "Advanced Safety Features", "Smooth Ride"],
    image: "/TaxiImages/kia-carens.avif",
    recommended: true,
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    type: "Luxury SUV / MPV",
    seats: "6+1 or 7+1",
    luggage: "4 Large Bags",
    features: ["Premium Leather Seats", "Powerful Engine", "Excellent for Long Trips", "High Ground Clearance"],
    image: "/TaxiImages/innova-taxi.jpeg",
    recommended: true,
  },
  {
    id: "tempo-12",
    name: "Force Tempo Traveller",
    type: "Mini Bus",
    seats: "12+1",
    luggage: "Ample Roof Space",
    features: ["Push-back Recliner Seats", "AC Vents for Every Row", "Music System", "Perfect for Medium Groups"],
    image: "/TaxiImages/Tempo-Taxi.webp",
    recommended: false,
  },
  {
    id: "tempo-16",
    name: "Force Tempo Traveller",
    type: "Mini Bus",
    seats: "16+1",
    luggage: "Ample Roof Space",
    features: ["Spacious Seating", "Strong AC Performance", "Experienced Driver", "Ideal for Large Families"],
    image: "/TaxiImages/17-seater-tempo.jpg",
    recommended: false,
  },
  {
    id: "urbania",
    name: "Force Urbania",
    type: "Luxury Van",
    seats: "13+1 or 17+1",
    luggage: "Dedicated Luggage Zone",
    features: ["Airline-Style Recliner Seats", "Premium Interior", "Bluetooth Audio", "Ultimate Comfort for Long Journeys"],
    image: "/TaxiImages/urbania.jpg",
    recommended: true,
  },
  {
    id: "luxury-bus",
    name: "Luxury Bus / Coach",
    type: "Large Bus",
    seats: "30 to 50+",
    luggage: "Large Undercarriage Storage",
    features: ["Customizable Seating", "On-Requirement Booking", "Perfect for Corporate/Large Groups", "Professional Chauffeur"],
    image: "/TaxiImages/bus.jpg",
    recommended: false,
  },
];

export default function TaxiServicesPage() {
  
  // Function to generate the contact link with pre-filled vehicle data
  const getQuoteLink = (vehicleName: string, seats: string) => {
    const params = new URLSearchParams({
      service: "Taxi Booking",
      vehicle: vehicleName,
      seats: seats,
      message: `Hello, I would like to get a quote for a ${vehicleName} (${seats} Seater) for my upcoming trip.`,
    });
    return `/contact?${params.toString()}`;
  };

  return (
    <div className="bg-gray-50 mt-10 min-h-screen font-sans text-gray-900">
      
      {/* --- HERO SECTION --- */}
      <div className="relative  text-white py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute  z-10" />
         
        </div>
        
        <div className="relative z-20 max-w-7xl font-sans mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-primary lg:text-6xl tracking-wide font-bold mb-6">
            Premium Taxi & Cab Services in Punjab
          </h1>
          <p className="text-lg md:text-xl font-serif text-primary/80 max-w-3xl mx-auto leading-relaxed">
            Travel in comfort, style, and safety. Choose from our well-maintained fleet of vehicles, 
            driven by experienced, professional chauffeurs for local sightseeing or outstation trips.
          </p>
        </div>
      </div>

      {/* --- VEHICLE FLEET SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 font-serif lg:px-8 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 relative group flex flex-col">
              
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#1c2b60] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {vehicle.type}
                </span>
              </div>
              
              {vehicle.recommended && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-[#f4ebd7] text-[#1c2b60] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <Star size={12} className="fill-current" /> Popular
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 w-full bg-gray-200">
                <Image 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                
                {/* Specs Row (FIXED) */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-1.5">
                    <User size={16} className="text-[#1c2b60]" />
                    <span className="font-medium">{vehicle.seats} Seater</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase size={16} className="text-[#1c2b60]" />
                    <span className="font-medium">{vehicle.luggage}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <Snowflake size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Get Quote Button */}
                <Link 
                  href={getQuoteLink(vehicle.name, vehicle.seats)}
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
            <h2 className="text-3xl font-sans font-bold tracking-wide text-gray-900 mb-4">Why Choose Our Taxi Services?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto tracking-wide">We prioritize your safety, comfort, and peace of mind throughout your journey across Punjab.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-serif gap-8">
            <FeatureCard 
              icon={<ShieldCheck size={28} />}
              title="Verified & Safe"
              description="All our drivers are background-checked, licensed, and trained in defensive driving."
            />
            <FeatureCard 
              icon={<Clock size={28} />}
              title="24/7 Availability"
              description="Round-the-clock customer support and flexible pickup/drop-off timings."
            />
            <FeatureCard 
              icon={<Star size={28} />}
              title="Well-Maintained Fleet"
              description="Vehicles are regularly serviced, sanitized, and equipped with modern amenities."
            />
            <FeatureCard 
              icon={<Briefcase size={28} />}
              title="Transparent Pricing"
              description="No hidden charges. Get a clear, upfront quote before you confirm your booking."
            />
          </div>
        </div>
      </div>

      {/* --- BOTTOM CTA --- */}
      <div className="xl:px-40 lg:px-20 md:px-10 px-4">
        <div className="bg-[#1c2b60] rounded-4xl mt-2 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-sans tracking-wide font-bold mb-4">Ready to Plan Your Journey?</h2>
          <p className="text-[#f4ebd7]/80 font-serif mb-8 text-lg">
            Whether it's a quick airport transfer or a week-long tour of Punjab, we have the perfect vehicle for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-[#f4ebd7] font-serif text-[#1c2b60] font-bold py-3 px-8 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
            >
              Contact Us Today
            </Link>
            <a 
              href="tel:+911234567890"
              className="bg-transparent font-serif border-2 border-[#f4ebd7] text-[#f4ebd7] font-bold py-3 px-8 rounded-full hover:bg-[#f4ebd7] hover:text-[#1c2b60] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </div>
      </div>
        <div className="mt-10 text-white" >
            <Footer/>
        </div>
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
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}