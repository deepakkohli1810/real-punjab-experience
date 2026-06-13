// components/TourDetails.tsx
import Image from "next/image";
import Link from "next/link";
import { 
  Clock, MapPin, Star, CheckCircle2, XCircle, 
  User, ShieldCheck, Heart, Share2, 
  Calendar, Award, ChevronRight, Globe
} from "lucide-react";

interface TourDetailProps {
  title: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  duration: string;
  groupSize: string;
  difficulty: "Easy" | "Moderate" | "Hard";
  description: string;
  highlights: string[];
  itinerary: { day: number; title: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
  images: string[];
}

export default function TourDetails({
  title, location, rating, reviews, price, originalPrice,
  duration, groupSize, difficulty, description, highlights,
  itinerary, inclusions, exclusions, images,
}: TourDetailProps) {

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-serif selection:bg-blue-100">
      
      {/* --- HEADER & BREADCRUMBS --- */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          
          {/* Breadcrumbs */}
          <nav className="flex text-sm text-gray-500 mb-4 overflow-hidden">
            <Link href="/" className="hover:text-blue-600 flex-shrink-0">Home</Link>
            <ChevronRight size={14} className="mx-2 flex-shrink-0" />
            <Link href="/tours" className="hover:text-blue-600 flex-shrink-0">Tours</Link>
            <ChevronRight size={14} className="mx-2 flex-shrink-0" />
            <span className="text-gray-900 font-medium truncate">{title}</span>
          </nav>
          
          {/* Title & Meta Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              {/* Status Badges */}
              <div className="flex gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100">
                  Popular
                </span>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-orange-50 text-orange-700 border border-orange-100">
                  Most Requested
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
                {title}
              </h1>

              {/* Reviews & Location */}
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
                <div className="flex items-center gap-1.5 bg-green-50 px-2 py-1 rounded border border-green-100">
                  <Star size={14} className="fill-green-600 text-green-600" />
                  <span className="font-bold text-green-800">{rating} Excellent</span>
                </div>
                <Link href="#reviews" className="text-blue-600 hover:underline font-medium">
                  {reviews} Reviews
                </Link>
                <div className="flex items-center gap-1 text-gray-500">
                  <MapPin size={14} />
                  {location}
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors border border-gray-200">
                <Heart size={18} />
              </button>
              <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors border border-gray-200">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- IMAGE GALLERY GRID --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-200">
          {/* Main Large Image */}
          <div className="md:col-span-2 relative group cursor-pointer overflow-hidden">
            <Image 
              src={images[0]} 
              alt={title} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105" 
              priority 
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
          
          {/* Top Right Small Image */}
          <div className="hidden md:block relative group cursor-pointer overflow-hidden">
            <Image 
              src={images[1] || images[0]} 
              alt={`${title} view 2`} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
          
          {/* Bottom Right Small Image (with overlay) */}
          <div className="hidden md:block relative group cursor-pointer overflow-hidden">
            <Image 
              src={images[2] || images[0]} 
              alt={`${title} view 3`} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-medium text-gray-800 shadow-sm text-sm">
                📷 View all {images.length} photos
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- LEFT COLUMN (8 cols) --- */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Quick Facts Bar */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6">
              <FactItem icon={<Clock size={20}/>} label="Duration" value={duration} />
              <FactItem icon={<User size={20}/>} label="Group Size" value={groupSize} />
              <FactItem icon={<Globe size={20}/>} label="Languages" value="English, Hindi" />
              <FactItem icon={<Award size={20}/>} label="Difficulty" value={difficulty} />
            </div>

            {/* Overview */}
            <section id="overview">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">About This Tour</h2>
              <p className="text-gray-600 leading-relaxed text-base">{description}</p>
            </section>

            {/* Highlights */}
            <section className="bg-blue-50/40 border border-blue-100 p-8 rounded-2xl">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Tour Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-blue-100 rounded-full">
                      <CheckCircle2 size={14} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section id="itinerary">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Day-by-Day Itinerary</h2>
              <div className="relative border-l-2 border-blue-100 ml-3 pl-8 space-y-8">
                {itinerary.map((day, idx) => (
                  <div key={idx} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-500" />
                    
                    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase tracking-wider">
                          Day {day.day}
                        </span>
                        <h4 className="text-lg font-bold text-gray-900">{day.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions / Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2 text-lg">
                  <CheckCircle2 size={20}/> What's Included
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  {inclusions.map(i => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2 text-lg">
                  <XCircle size={20}/> Not Included
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  {exclusions.map(e => (
                    <li key={e} className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span> {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* --- RIGHT COLUMN: BOOKING SIDEBAR (4 cols) --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              
              {/* Booking Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-gray-500 text-sm">From</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-900">${price}</span>
                      {originalPrice && <span className="text-gray-400 line-through text-lg">${originalPrice}</span>}
                    </div>
                    <span className="text-xs text-gray-500">per person</span>
                  </div>
                  <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    Best Price
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Check Availability</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white appearance-none">
                        <option>Select Date</option>
                        <option>Tomorrow</option>
                        <option>Next Week</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-base mb-3">
                  Check Availability
                </button>
                
                <button className="w-full bg-white border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-700 font-semibold py-3 rounded-xl transition-all text-sm">
                  Reserve Now & Pay Later
                </button>

                <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <ShieldCheck size={14} className="text-green-600" />
                    <span>Free cancellation up to 24h before</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <ShieldCheck size={14} className="text-green-600" />
                    <span>Secure payment processing</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="font-bold text-sm mb-4 text-gray-900">Why Book With Us?</h4>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Award size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-gray-900">Expert Guides</h5>
                      <p className="text-xs text-gray-500">Local professionals</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <ShieldCheck size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-gray-900">Best Price Guarantee</h5>
                      <p className="text-xs text-gray-500">No hidden fees</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Sub-component for Quick Facts
function FactItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-blue-600 bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{label}</span>
      <span className="text-sm font-bold text-gray-900">{value}</span>
    </div>
  )
}