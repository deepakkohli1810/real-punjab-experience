import React from 'react'
import TourDetails from '../../components/TourDetailCompo';

export default function NightPalkiSahibTour() {
  const tourData = {
    title: "Night Palki Sahib (Sukhasan) Ceremony Tour",
    location: "Amritsar, Punjab",
    rating: 5.0,
    reviews: 156,
    price: 30,
    originalPrice: 45,
    duration: "3-4 Hours",
    groupSize: "Max 10 People",
    difficulty: "Easy" as const, 
    description: "Experience the profound spiritual tranquility of Amritsar after dark. This exclusive evening tour takes you to the illuminated Harmandir Sahib (Golden Temple) to witness the mesmerizing Palki Sahib ceremony, also known as Sukhasan. Watch as the holy Guru Granth Sahib is reverently carried in a decorated palanquin from the inner sanctum to the Akal Takht for the night, accompanied by soulful hymns (Kirtan) and the rhythmic chanting of the congregation. The glowing reflection of the temple on the Sarovar (holy tank) at night creates an unforgettable, magical atmosphere.",
    
    meetingPoint: "Amritsar Hotel Lobby", 
    
    highlights: [
      "Witness the sacred Sukhasan (closing) ceremony of the Guru Granth Sahib",
      "See the Golden Temple beautifully illuminated against the night sky",
      "Listen to the soulful evening Kirtan (devotional hymns) in the Darbar Sahib",
      "Walk across the Guru's Bridge (Guru Ki Pul) with a knowledgeable local guide",
      "Experience the peaceful, crowd-free atmosphere of the temple at night",
      "Complimentary traditional head coverings (Rumal) provided"
    ],
    
    schedule: [
      {
        activity: "Evening Hotel Pickup",
        description: "Your guide will pick you up from your hotel in a comfortable, air-conditioned vehicle for a short drive to the Golden Temple complex.",
        bullets: [
          "🚗 Comfortable evening transfer from your hotel",
          "📜 Briefing by your guide about the significance of the night ceremony",
          "🕰️ Departure timed perfectly to arrive before the ceremony begins"
                ]
      },
      {
        activity: "Arrival & Preparations",
        description: "Upon arrival at the entrance of the Golden Temple complex, you will go through the traditional preparations required before entering the sanctum.",
        bullets: [
          "👣 Wash your feet in the provided foot-washing channels",
          "🧣 Receive and tie a complimentary traditional head covering (Rumal)",
          "🎒 Secure your shoes and belongings at the free cloakroom"
        ]
      },
      {
        activity: "Evening Darshan & Kirtan",
        description: "Walk across the marble causeway (Guru Ki Pul) and enter the main courtyard to experience the temple at its most serene.",
        bullets: [
          "✨ Marvel at the breathtaking sight of the illuminated Golden Temple reflecting on the Sarovar",
          "🎶 Listen to the continuous, soulful recitation of Shabad Kirtan inside the sanctum",
          "🙏 Pay your respects and soak in the deeply peaceful nighttime atmosphere"
        ]
      },
      {
        activity: "The Palki Sahib (Sukhasan) Ceremony",
        description: "The highlight of the evening. Witness the sacred ritual where the Guru Granth Sahib is prepared for its nightly rest.",
        bullets: [
          "📖 Watch the reverent closing of the holy scripture (Prakash to Sukhasan)",
          "🛕 Observe the decorated Palki (palanquin) being brought to the sanctum",
          "🚶‍♂️ Follow the slow, rhythmic procession as the Guru Granth Sahib is carried across the causeway to the Akal Takht",
          "🎺 Listen to the traditional instruments and hymns accompanying the procession"
        ]
      },
      {
        activity: "Post-Ceremony Reflections & Drop-off",
        description: "After the ceremony concludes and the Akal Takht doors are closed, your guide will escort you out of the complex.",
        bullets: [
          "💬 Q&A session with your guide about Sikh traditions and the ceremony",
          "📸 Opportunity for final night photographs at the entrance",
          "🚗 Comfortable, safe drive back to your hotel"
        ]
 
      }
    ],
    
    inclusions: [
      "Hotel pickup and drop-off in an air-conditioned vehicle",
      "Professional English-speaking local guide",
      "Complimentary traditional head coverings (Rumal)",
      "Assistance with shoe storage and complex navigation",
      "Bottled water"
    ],
    exclusions: [
      "Donations to the temple (Golak) – entirely optional",
      "Personal expenses or souvenirs",
      "Food or beverages (though free Langar is always available if you wish to partake)",
      "Gratuities for the guide and driver"
    ],
    images: [
      "/Images/palki-sahib-night-hero.jpg",
      "/Images/golden-temple-illuminated.jpg",
      "/Images/guru-ki-pul-night.jpg",
      "/Images/akal-takht-evening.jpg"
    ]
  };

  return (
    <div>
      <TourDetails {...tourData} />
    </div>
  )
}