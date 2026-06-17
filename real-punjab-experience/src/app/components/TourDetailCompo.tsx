"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Clock, MapPin, Star, CheckCircle2, XCircle, 
  User, ShieldCheck, Heart, Share2, 
  Calendar, Award, Navigation
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
  highlights?: string[];

  schedule?: {
    time?: string;
    activity: string;
    description: string;
    bullets: string[];
  }[];

  meetingPoint?: string;
  inclusions?: string[];
  exclusions?: string[];
  images?: string[];
}

export default function TourDetails({
  title, location, rating, reviews, price, originalPrice,
  duration, groupSize, difficulty, description, 
  highlights = [],
  schedule = [], 
  meetingPoint = "Contact for details",
  inclusions = [],
  exclusions = [],
  images = [],
}: TourDetailProps) {

  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleBookNow = () => {
    const params = new URLSearchParams({
      tour: title,
      date: selectedDate,
      travelers: travelers.toString(),
      totalAmount: (price * travelers).toString(),
    });
    router.push(`/contact?${params.toString()}`);
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-serif selection:bg-blue-100">
      
      {/* --- HEADER & BREADCRUMBS --- */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <div className="flex gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100">
                  Instant Confirmation
                </span>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-orange-50 text-orange-700 border border-orange-100">
                  Free Cancellation
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

      {/* --- IMAGE GALLERY WITH THUMBNAILS --- */}
{images.length > 0 && (
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    
    {/* Main Image Container - Fixed Height Maintained */}
    <div className="relative h-[400px] md:h-[500px] rounded-2xl bg-black/10 overflow-hidden shadow-sm border border-gray-100  mb-4">
      
      {/* 1. Blurred Background Layer (Fills the empty spaces elegantly) */}
     

      {/* 2. Main Image Layer (Fully visible, no cropping, centered) */}
      <Image 
        src={images[selectedImageIndex]} 
        alt={`${title} - Image ${selectedImageIndex + 1}`} 
        fill 
        className="object-contain transition-transform duration-500 z-10 pointer-events-none" 
        priority 
      />
      
      {images.length > 1 && (
        <div className="absolute  top-4 right-4  backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm z-20">
          {selectedImageIndex + 1} / {images.length}
        </div>
      )}
    </div>

    {/* Thumbnail Gallery */}
      {images.length > 1 && (
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 ">
        {images.map((image, index) => (
          <button
            key={index}
            type="button" // Good practice for buttons
            onClick={() => handleImageClick(index)}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              selectedImageIndex === index 
                ? 'border-blue-500 ring-2 ring-blue-200' 
                : 'border-gray-200 hover:border-gray-300 opacity-70 hover:opacity-100'
            }`}
          >
            <Image 
              src={image} 
              alt={`${title} thumbnail ${index + 1}`} 
              fill 
              // 👇 ADD pointer-events-none HERE 👇
              className="object-cover pointer-events-none" 
            />
          </button>
        ))}
      </div>
    )}
  </div>
)}
      {/* --- MAIN CONTENT LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- LEFT COLUMN (8 cols) --- */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Quick Facts Bar */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6">
              <FactItem icon={<Clock size={20}/>} label="Duration" value={duration} />
              <FactItem icon={<User size={20}/>} label="Group Size" value={groupSize} />
              <FactItem icon={<Navigation size={20}/>} label="Meeting Point" value={meetingPoint} />
              <FactItem icon={<Award size={20}/>} label="Difficulty" value={difficulty} />
            </div>

            {/* Overview */}
            <section id="overview">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">About This Experience</h2>
              <p className="text-gray-600 leading-relaxed text-base">{description}</p>
            </section>

            {/* Highlights */}
            {highlights.length > 0 && (
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
            )}

            {/* Tour Schedule */}
           {schedule.length > 0 && (
  <section id="schedule">
    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Tour Schedule</h2>
    <div className="relative border-l-2 border-blue-100 ml-3 pl-8 space-y-8">
      {schedule.map((item, idx) => (
        <div key={idx} className="relative">
          <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-500" />
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <h4 className="text-lg font-bold text-gray-900">{item.activity}</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>

            {item.bullets && item.bullets.length > 0 && (
              <ul className="mt-4 space-y-2">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed pl-1 border-l-2 border-amber-400">
                    <span className="ml-2">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
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

          {/* --- RIGHT COLUMN: BOOKING SIDEBAR (4 cols) --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              
              {/* Booking Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-gray-500 text-sm">From</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-900">₹{price}</span>
                      {originalPrice && <span className="text-gray-400 line-through text-lg">₹{originalPrice}</span>}
                    </div>
                    <span className="text-xs text-gray-500">per person</span>
                  </div>
                  <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    Best Price
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Select Date</label>
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
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Travelers</label>
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
                  <span className="text-sm text-gray-600">Total for {travelers} traveler(s)</span>
                  <span className="text-xl font-bold text-gray-900">₹{price * travelers}</span>
                </div>

                <button 
                  onClick={handleBookNow}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-base mb-4"
                >
                  Book Now
                </button>

                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <ShieldCheck size={14} className="text-green-600" />
                    <span>Free cancellation up to 24h before</span>
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
                    <div className="p-2 bg-blue-100 rounded-lg"><Award size={16} className="text-blue-600" /></div>
                    <div>
                      <h5 className="text-sm font-bold text-gray-900">Expert Local Guides</h5>
                      <p className="text-xs text-gray-500">Certified professionals</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg"><ShieldCheck size={16} className="text-blue-600" /></div>
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