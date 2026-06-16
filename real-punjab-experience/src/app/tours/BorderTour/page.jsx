import React from 'react'
import TourDetails from '../../components/TourDetailCompo';
import TourPageLayout from '../../components/TourPageLayout';

export default function WagahBorder() {
  const tourData = {
    title: "Wagah Border Ceremony Tour with City Sightseeing",
    location: "Amritsar, Punjab",
    rating: 4.8,
    reviews: 285,
    price: 1999,
    originalPrice: 4999,
    duration: "3-4 Hours",
    groupSize: "Min 2 People",
    difficulty: "Easy" , 
    description: "Experience the patriotic fervor and high-energy spectacle of the Wagah Border ceremony. This half-day evening tour takes you through Amritsar's historic landmarks, including the majestic Khalsa College, the solemn Punjab State War Memorial, and the historic Attari Railway Station—the last stop on Indian soil—before culminating at the world-famous border retreat ceremony.",
    
    meetingPoint: "Amritsar Hotel Lobby ", 
    
    highlights: [
      "Witness the electrifying 'Beating Retreat' ceremony at the India-Pakistan border",
      "Visit the solemn Punjab State War Memorial near India Gate Amritsar",
      "Pass by the stunning Indo-Saracenic architecture of Khalsa College",
      "See the Attari Railway Station, the last railway station of India",
      "Enjoy comfortable air-conditioned transport and an expert local guide"
    ],
    
    schedule: [
      {
        activity: "Hotel Pickup & City Drive",
        description: "Meet your guide at your hotel or the Amritsar Railway Station and begin your scenic drive towards the international border.",
        bullets: []
      },
      {
        activity: "Khalsa College (Photo Stop)",
        description: "Pass by and take a quick photo stop at one of the most prestigious and historic educational institutions in Asia.",
        bullets: [
          "🏛️ Admire the breathtaking Indo-Saracenic architecture of the main building",
          "📸 Capture memories of this iconic landmark founded in 1892",
          "🌳 Enjoy the lush, green campus surroundings"
        ]
      },
      {
        activity: "Punjab State War Memorial",
        description: "Visit the solemn and beautifully maintained memorial located near the Amritsar India Gate, dedicated to the martyrs of the Indian Armed Forces.",
        bullets: [
          "🎖️ Pay your respects to the brave soldiers who laid down their lives for the nation",
          "🕯️ See the eternal flame and the names of martyrs inscribed on the granite walls",
          "🌳 Walk through the serene, landscaped gardens of the memorial complex"
        ]
      },
      {
        activity: "Last Station of India (Attari)",
        description: "Drive to the border town of Attari and visit the railway station that marks the final stop on Indian soil before crossing into Pakistan.",
        bullets: [
          "🚂 Stand at the historic Attari Railway Station, the gateway to the international border",
          "🛤️ See the railway tracks that form the lifeline connecting India and Pakistan",
          "🚧 View the final Indian checkpoint before the zero-line crossing"
        ]
      },
      {
        activity: "Wagah Border Ceremony",
        description: "Arrive at the iconic Wagah Border to witness the world-famous, high-energy 'Beating Retreat' ceremony between the Indian BSF and Pakistani Rangers.",
        bullets: [
          "🇮🇳 Feel the patriotic thrill as thousands chant 'Bharat Mata Ki Jai' and 'Vande Mataram'",
          "💃🕺 Watch the aggressive, synchronized, and theatrical dance-offs by the border troops",
          "🦅 See the dramatic uniform displays and high-kicking marches",
          "🚪 Witness the ceremonial lowering of the national flags and the locking of the main gates at sunset"
        ]
      },
      {
        activity: "Tour Ends & Drop-off",
        description: "After the ceremony concludes, drive back to Amritsar and drop off at your hotel or the railway station with unforgettable memories.",
        bullets: []
      }
    ],
    
    inclusions: [
      "Hotel/Railway Station pickup and drop-off",
      "Air-conditioned private vehicle",
      "Professional English-speaking guide",
      "All applicable taxes and fuel",
      "Bottled water during the tour"
    ],
    exclusions: [
      "Entry fees at Wagah Border (if applicable for foreign tourists)",
      "Gratuities for guide and driver",
      "Personal expenses and souvenirs",
      "Any food or beverages"
    ],
    images: [
      "/BorderImages/BorderImage.jpeg",
      "/BorderImages/audience.jpg",
       "/BorderImages/BorderGateImage.webp",
        "/BorderImages/indianflag.jpg",
      
    ]
  };

  return (
    <div>
       <TourDetails {...tourData} />
     <TourPageLayout/>
    </div>
  )
}