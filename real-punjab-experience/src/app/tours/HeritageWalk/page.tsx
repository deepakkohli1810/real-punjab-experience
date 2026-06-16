import React from 'react'
import TourDetails from '../../components/TourDetailCompo';

export default function HeritageWalk() {
  const tourData = {
    title: "Amritsar Heritage Walk: Back in Time",
    location: "Amritsar, Punjab",
    rating: 4.8,
    reviews: 24,
    price: 999,
    originalPrice: 1499,
    duration: "2.5 Hours",
    groupSize: "Min 2 People",
    difficulty: "Easy" as const, 
    description: "Step back in time on a guided walking tour through the narrow, 400-year-old lanes of Old Amritsar. Starting from the historic Town Hall and ending at the Golden Temple, discover the city's rich architecture, bustling traditional markets, and hidden stories.",
    
    // Meeting point for the walking tour
    meetingPoint: "Town Hall (In front of Brothers Dhaba), Amritsar", 
    
    highlights: [
      "Explore the 400-year-old narrow lanes and by-lanes of Old Amritsar",
      "Discover traditional architecture including Katras, Akharas, Bungas, and Havelis",
      "Walk down the historic Heritage Street connecting Town Hall to the Golden Temple",
      "Witness traditional artisans practicing ancient crafts and trades",
      "Cover 14 major heritage spots with an expert local guide"
    ],
    
    schedule: [
      {
        activity: "Meeting at Town Hall",
        description: "Meet your guide at the historic Town Hall, built in 1870, which once housed the British secretary's office during the Raj.",
        bullets: [
          "🏛️ Town Hall Architecture — admire the colonial-era building that marks the starting point of the walk",
          "🗺️ Tour Briefing — get an overview of the 14 heritage spots you will explore today",
          "🍵 Welcome Refreshment — enjoy a quick sip of traditional chai or water before setting off"
        ]
      },
      {
        activity: "Heritage Street & Qila Ahluwalia",
        description: "Walk down the oldest street in Amritsar, connecting Town Hall to the Golden Temple, and explore the ancient fort.",
        bullets: [
          "🛤️ Heritage Street — stroll down the beautifully restored pedestrian street lined with historic facades",
          "🏰 Qila Ahluwalia — visit the 18th-century fort built by Jai Singh Kanumango, a key figure in Amritsar's history",
          "🙏 Gurdwara Saragarhi — pass by the memorial dedicated to the epic 1897 Battle of Saragarhi"
        ]
      },
      {
        activity: "Traditional Lanes, Bungas & Katras",
        description: "Dive deep into the by-lanes to see the traditional residential and community structures of old Amritsar.",
        bullets: [
          "🏘️ Katras (Residential Quarters) — explore the historic fortified neighborhoods where clans once lived together",
          "🏰 Bungas (Tower Structures) — see the traditional tower-like buildings that once housed pilgrims and Sikh warriors",
          "🏛️ Havelis — admire the intricate wooden facades and balconies of the old merchant mansions"
        ]
      },
      {
        activity: "Bustling Markets (Hatties) & Crafts",
        description: "Experience the vibrant trade centers of the old city and watch artisans at work.",
        bullets: [
          "🛍️ Hatties (Traditional Markets) — walk through the ancient bazaars that have been trading hubs for centuries",
          "👞 Amritsari Jutti — watch local cobblers crafting the famous, colorful traditional Punjabi footwear",
          "🔨 Artisan Workshops — see traditional woodcarvers, metalworkers, and block printers preserving ancient crafts"
        ]
      },
      {
        activity: "Jalebiwala Chowk & Tour Conclusion",
        description: "Pass through the famous food square and conclude your walk at the entrance of the Golden Temple.",
        bullets: [
          "🧑‍🏫 Expert local heritage guide throughout the walk",
          "💧 Bottled water provided during the tour",
          "🍽️ Food expenses (complimentary traditional snack tasting)"
        ]
      }
    ],
    
    inclusions: [
      "Professional English-speaking heritage guide",
      "Bottled water during the walk",
      "Food expenses (traditional snack tasting)"
    ],
    exclusions: [
      "Hotel pickup and drop-off (walking tour)",
      "Gratuities for the guide",
      "Personal shopping in the local markets",
      "Entry fees to any optional monuments"
    ],
    images: [
  "/HeritageImages/[Heritage]1.jpg",
  "/HeritageImages/[Heritage]2.jpg",
  "/HeritageImages/[Heritage]3.jpg",
  "/HeritageImages/[Heritage]4.jpg",
  "/HeritageImages/[Heritage]5.jpg",
  "/HeritageImages/[Heritage]6.jpg",
  "/HeritageImages/[Heritage]7.jpg"

]
  };

  return (
    <div>
      <TourDetails {...tourData} />
    </div>
  )
}