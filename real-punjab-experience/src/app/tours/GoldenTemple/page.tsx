

import React from 'react'
import TourDetails from '../../components/TourDetailCompo';

export default function GoldenTemple() {
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
      <TourDetails/>
    </div>
  )
}
