"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Clock, MapPin, Star, CheckCircle2, XCircle, 
  User, ShieldCheck, Heart, Share2, 
  Calendar, Award, Car, Navigation
} from "lucide-react";

interface Activity {
  time?: string; // Optional time like "09:00 AM"
  title: string;
  description: string;
}

interface DayItinerary {
  day: number;
  title: string; // e.g., "Arrival in Amritsar & Heritage Walk"
  activities: Activity[];
}

interface PackageTourDetailProps {
  title: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  duration: string; // e.g., "3 Days / 2 Nights"
  groupSize: string;
  transportType: string; // e.g., "Private AC Innova"
  description: string;
  highlights?: string[];
  itinerary: DayItinerary[];
  inclusions?: string[];
  exclusions?: string[];
  images?: string[];
}

export default function PackageTourDetails({
  title, location, rating, reviews, price, originalPrice,
  duration, groupSize, transportType, description, 
  highlights = [],
  itinerary = [], 
  inclusions = [],
  exclusions = [],
  images = [],
}: PackageTourDetailProps) {

  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleBookNow = () => {
    const params = new URLSearchParams({
      tour: title,
      date: selectedDate,
      travelers: travelers.toString(),
      totalAmount: price.toString(),
      message: `Hello, I would like to book the "${title}" package for ${travelers} people starting on ${selectedDate}.`,
    });
    router.push(`/contact?${params.toString()}`);
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-serif selection:bg-blue-100">
      
      {/* --- HEADER --- */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <div className="flex gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100">
                  Multi-Day Package
                </span>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-orange-50 text-orange-700 border border-orange-100">
                  Customizable
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
                {title}
              </h1>

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

      {/* --- IMAGE GALLERY --- */}
      {images.length > 0 && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl bg-black/10 overflow-hidden shadow-sm border border-gray-100 mb-4">
            <Image 
              src={images[selectedImageIndex]} 
              alt={`${title} - Image ${selectedImageIndex + 1}`} 
              fill 
              className="object-contain transition-transform duration-500 z-10" 
              priority 
            />
            {images.length > 1 && (
              <div className="absolute top-4 right-4 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm z-20 bg-black/40">
                {selectedImageIndex + 1} / {images.length}
              </div>
            )}
          </div>

          {images.length > 1 && (
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImageIndex === index 
                      ? 'border-blue-500 ring-2 ring-blue-200' 
                      : 'border-gray-200 hover:border-gray-300 opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={image} alt={`${title} thumbnail ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* --- MAIN CONTENT LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Quick Facts Bar */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6">
              <FactItem icon={<Clock size={20}/>} label="Duration" value={duration} />
              <FactItem icon={<User size={20}/>} label="Group Size" value={groupSize} />
              <FactItem icon={<Car size={20}/>} label="Transport" value={transportType} />
              <FactItem icon={<Navigation size={20}/>} label="Service" value="Guide + Taxi" />
            </div>

            {/* Overview & Disclaimer */}
            <section id="overview">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">About This Package</h2>
              
              {/* Important Disclaimer for Taxi/Guide Packages */}
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-6">
                <div className="flex items-start gap-3">
                  <Award size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-amber-800 text-sm">Flexible & Customizable</h4>
                    <p className="text-amber-700 text-sm leading-relaxed mt-1">
                      This package provides a dedicated AC vehicle and an expert local guide. 
                      <strong> Accommodation and meals are not included</strong>, giving you the freedom to choose your preferred hotels and dining experiences.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-base">{description}</p>
            </section>

            {/* Highlights */}
            {highlights.length > 0 && (
              <section className="bg-blue-50/40 border border-blue-100 p-8 rounded-2xl">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Package Highlights</h3>
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
            )}

            {/* NEW ITINERARY DESIGN */}
            {itinerary.length > 0 && (
              <section id="itinerary">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Day-by-Day Itinerary</h2>
                <div className="space-y-6">
                  {itinerary.map((day, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      
                      {/* Day Header */}
                      <div className="bg-gradient-to-r from-blue-50 to-white p-5 border-b border-gray-100 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md flex-shrink-0">
                          {day.day}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Day {day.day}</span>
                          <h3 className="text-lg font-bold text-gray-900 leading-tight">{day.title}</h3>
                        </div>
                      </div>
                      
                      {/* Activities List */}
                      <div className="p-6">
                        <div className="relative pl-6 border-l-2 border-blue-100 space-y-6">
                          {day.activities.map((activity, actIdx) => (
                            <div key={actIdx} className="relative">
                              {/* Timeline Dot */}
                              <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                              
                              <div>
                                {activity.time && (
                                  <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded mb-1">
                                    {activity.time}
                                  </span>
                                )}
                                <h4 className="font-bold text-gray-800 mb-1">{activity.title}</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">{activity.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Inclusions / Exclusions */}
            {(inclusions.length > 0 || exclusions.length > 0) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inclusions.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2 text-lg">
                      <CheckCircle2 size={20}/> What's Included
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      {inclusions.map((i, idx) => (<li key={idx} className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> {i}</li>))}
                    </ul>
                  </div>
                )}
                {exclusions.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2 text-lg">
                      <XCircle size={20}/> Not Included
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      {exclusions.map((e, idx) => (<li key={idx} className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✕</span> {e}</li>))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* --- RIGHT COLUMN: BOOKING SIDEBAR --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              
              {/* Booking Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-gray-500 text-sm">Starting From</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-900">₹{price}</span>
                      {originalPrice && <span className="text-gray-400 line-through text-lg">₹{originalPrice}</span>}
                    </div>
                    <span className="text-xs text-gray-500">per vehicle / per day</span>
                  </div>
                  <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    Best Price
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Start Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                      <input 
                        type="date" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Total Travelers</label>
                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                      <button 
                        type="button" 
                        onClick={() => setTravelers(Math.max(1, travelers - 1))} 
                        className="px-4 py-3 bg-gray-50 hover:bg-gray-100 border-r border-gray-200 text-gray-600 font-bold transition-colors"
                      >
                        -
                      </button>
                      <span className="w-full text-center py-3 text-sm font-bold text-gray-900">{travelers}</span>
                      <button 
                        type="button" 
                        onClick={() => setTravelers(travelers + 1)} 
                        className="px-4 py-3 bg-gray-50 hover:bg-gray-100 border-l border-gray-200 text-gray-600 font-bold transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="text-sm text-gray-600">Total Package Price</span>
                  <span className="text-xl font-bold text-gray-900">₹{price}</span>
                </div>

                <button 
                  onClick={handleBookNow}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-base mb-4"
                >
                  Book This Package
                </button>

                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <ShieldCheck size={14} className="text-green-600" />
                    <span>Free cancellation up to 48h before</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <ShieldCheck size={14} className="text-green-600" />
                    <span>Secure & Direct Booking</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="font-bold text-sm mb-4 text-gray-900">Why Book With Us?</h4>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg"><Car size={16} className="text-blue-600" /></div>
                    <div>
                      <h5 className="text-sm font-bold text-gray-900">Well-Maintained Fleet</h5>
                      <p className="text-xs text-gray-500">Sanitized & AC vehicles</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg"><Award size={16} className="text-blue-600" /></div>
                    <div>
                      <h5 className="text-sm font-bold text-gray-900">Expert Local Guides</h5>
                      <p className="text-xs text-gray-500">Certified professionals</p>
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