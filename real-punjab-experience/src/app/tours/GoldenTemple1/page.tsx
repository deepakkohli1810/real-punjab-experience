import React from 'react'
import TourDetails from '../../components/TourDetailCompo';
import ReviewsSection from '../../components/reviewSection';
import WhyChooseUs from '../../WhyChooseUs/page';
import Footer from '../../components/Footer';

export default function GoldenTemple() {
  const tourData = {
    title: "Golden Temple Tour with Jallianwala Bagh",
    location: "Amritsar, Punjab",
    rating: 4.9,
    reviews: 312,
    price: 999,
    originalPrice: 1499,
    duration: "8 Hours",
    groupSize: "Max 12 People",
    difficulty: "Easy" as const, // 'as const' ensures TypeScript recognizes the exact string literal
    description: "Experience the spiritual heart of Sikhism with our guided day tour to the magnificent Golden Temple. Witness the mesmerizing ceremonies, enjoy a traditional meal at the community kitchen (Langar), and explore the historic Jallianwala Bagh.",
    
    // NEW: Added meeting point required by the updated component
    meetingPoint: "Amritsar Railway Station or Hotel Lobby", 
    
    highlights: [
      "Guided walking tour of the Golden Temple complex",
      "Witness the spiritual Palki Sahib ceremony",
      "Experience the world's largest community kitchen (Langar)",
      "Visit the historic Jallianwala Bagh memorial",
      "Air-conditioned private vehicle for transfers"
    ],
    
    // CHANGED: Replaced multi-day 'itinerary' with single-day 'schedule'
   schedule: [
  {
    activity: "Hotel Pickup",
    description: "Meet your guide at the hotel lobby or Amritsar Railway Station and drive to the Golden Temple.",
    bullets: []
  },
  {
    activity: "Golden Temple Visit",
    description: "A guided walk through the entire Golden Temple complex — one of the most sacred sites in the world.",
    bullets: [
      "🕌 Darshani Deori — the ornate clock tower gateway and entrance arch into the complex",
      "💧 Sarovar (Holy Tank) — circumambulate the sacred pool that surrounds the temple",
      "🏛️ Harmandir Sahib (The Golden Temple) — enter the inner sanctum, adorned with 400 kg of gold leaf",
      "📖 Akal Takht — the highest seat of Sikh temporal authority, directly opposite the main shrine",
      "🎶 Shabad Kirtan — listen to the continuous, soulful recitation of sacred hymns inside the sanctum",
      "🌉 Guru's Bridge (Guru ki Pul) — the marble causeway leading to the main shrine over the holy water"
    ]
  },
  {
    activity: "Langar Experience",
    description: "Enjoy a traditional vegetarian meal at the Guru Ka Langar, the community kitchen that serves thousands daily.",
    bullets: [
      "👁️ Watch the kitchen in action — volunteer sevadars (helpers) rolling rotis and stirring enormous cauldrons",
      "🍽️ Sit on the langar hall floor and be served alongside pilgrims and visitors from across the world",
      "🫓 Meal includes dal, sabzi, roti, and kheer — all cooked and served free of charge to everyone"
    ]
  },
  {
    activity: "Jallianwala Bagh",
    description: "Walk through the memorial garden where the 1919 massacre took place — a sobering and essential part of India's independence story.",
    bullets: [
      "🚪 Narrow Entrance Passage — the only way in or out on that fateful day, still preserved as it was in 1919",
      "🌿 The Central Garden & Martyrs' Well (Shahidi Khu) — the well into which hundreds jumped to escape the firing; still standing as a memorial",
      "🔴 Bullet Marks on the Walls — the original boundary walls still bear the scars of General Dyer's orders",
      "🕯️ Eternal Flame (Jyoti) — the undying flame lit in memory of those who lost their lives on April 13, 1919",
      "🏛️ Gallery & Museum — photographs, documents, and artefacts that chronicle the events before and after the massacre"
    ]
  },
  {
    activity: "Tour Ends & Drop-off",
    description: "Return to your hotel or the railway station, concluding your memorable day in Amritsar.",
    bullets: []
  }
],
    
    inclusions: [
      "Hotel/Railway Station pickup and drop-off",
      "Air-conditioned private vehicle (if you have taken our taxi services)",
      "Professional English-speaking guide",
      "Bottled water during the tour",
      "All applicable taxes and fuel"
    ],
    exclusions: [
      "Lunch at a restaurant",
      "Gratuities for guide and driver",
      "Personal expenses and souvenirs",
      "Entry fees to any optional monuments"
    ],
    images: [
      "/Images/HeroImage.jpeg",
      "/Images/guest-at-golden-temple.jpeg",
      "/Images/GoldentTemple.jpeg",
      "/Images/langar-golden-temple.jpeg"
    ]
  };

  return (
    <div >
      <TourDetails {...tourData} />
      <div className='px-4 md:px-20 xl:px-50'>
        <ReviewsSection/>
      <div className="mt-16 md:mt-24">
      <WhyChooseUs />
    </div>
   
      </div>
      <div className="mt-16 md:mt-24">
    <Footer />
  </div>
    </div>
  )
}