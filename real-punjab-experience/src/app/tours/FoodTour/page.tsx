import React from 'react'
import TourDetails from '../../components/TourDetailCompo';

export default function AmritsarFoodTour() {
  const tourData = {
    title: "Amritsar Heritage Food Walking Tour",
    location: "Amritsar, Punjab",
    rating: 4.9,
    reviews: 428,
    price: 55,
    originalPrice: 75,
    duration: "5-6 Hours",
    groupSize: "Max 8 People",
    difficulty: "Easy" as const, 
    description: "Embark on a culinary journey through the vibrant streets of Amritsar and discover why this city is considered the food capital of Punjab. This guided walking tour takes you to the most iconic dhabas, sweet shops, and street food stalls that have been serving authentic Punjabi flavors for generations. From the world-famous Amritsari Kulcha to creamy Lassi and spicy Chole Bhature, taste your way through history.",
    
    meetingPoint: "Hall Gate Clock Tower, Amritsar", 
    
    highlights: [
      "Taste authentic Amritsari Kulcha at century-old dhabas",
      "Savor the famous creamy Lassi at legendary shops",
      "Sample crispy Amritsari Fish and Chole Bhature",
      "Explore the bustling food streets of Hall Bazaar and Katra Jaimal Singh",
      "Enjoy traditional Punjabi sweets like Pinni and Jalebi",
      "Small group experience with a knowledgeable local food guide"
    ],
    
    schedule: [
      {
        activity: "Meeting Point & Introduction",
        description: "Meet your food guide at the iconic Hall Gate Clock Tower and begin your culinary adventure through the old city.",
        bullets: [
          "👋 Meet your local food expert guide",
          "📜 Brief introduction to Amritsar's rich food heritage",
          "🗺️ Overview of the food trail ahead"
        ]
      },
      {
        activity: "Breakfast at Bharawan Da Dhaba",
        description: "Start your day at one of the oldest and most famous dhabas in Amritsar, established in 1948.",
        bullets: [
          "🫓 Taste the legendary Amritsari Kulcha (stuffed with spiced potatoes)",
          "🍛 Savor the spicy Chole (chickpea curry) cooked overnight",
          "🧈 Enjoy it with a generous dollop of white butter",
          "☕ Sip on traditional Masala Chai"
        ]
      },
      {
        activity: "Lassi Tasting at Ahuja Lassi",
        description: "Visit the world-famous Ahuja Lassi shop, a pilgrimage site for lassi lovers since 1940.",
        bullets: [
          "🥛 Experience the creamiest, thickest Lassi in Punjab",
          "🍯 Try the special Malai Lassi topped with fresh cream",
          "🌰 Sample the Dry Fruit Lassi loaded with nuts",
          "📸 See the traditional clay kulhads (cups) used for serving"
        ]
      },
      {
        activity: "Hall Bazaar Food Walk",
        description: "Stroll through the bustling Hall Bazaar, Amritsar's oldest and most vibrant market.",
        bullets: [
          "🍬 Taste freshly made Jalebi (crispy sweet spirals)",
          "🥜 Sample traditional Punjabi snacks and namkeen",
          "🛍️ Explore shops selling spices, dry fruits, and pickles",
          "👀 Watch local artisans at work in traditional shops"
        ]
      },
      {
        activity: "Lunch at Kesar Da Dhaba",
        description: "Experience a traditional Punjabi lunch at this iconic vegetarian dhaba, serving pure ghee-cooked food since 1935.",
        bullets: [
          "🍛 Enjoy unlimited Dal Makhani cooked with pure ghee",
          "🫓 Taste the famous Paneer Paratha",
          "🥘 Savor seasonal vegetable curries",
          "🍚 Finish with sweet Meethe Chawal (Punjabi sweet rice)",
          "🥛 Cool down with fresh Chaas (buttermilk)"
        ]
      },
      {
        activity: "Sweet Treats at Gopal Sweets",
        description: "Visit one of Amritsar's most beloved sweet shops for traditional Punjabi mithai.",
        bullets: [
          "🍬 Taste Pinni (traditional winter sweet made with ghee and nuts)",
          "🥥 Sample Gajar ka Halwa (carrot pudding)",
          "🍯 Try Gulab Jamun and other classic Indian sweets",
          "🎁 Learn about the ingredients and preparation methods"
        ]
      },
     
      {
        activity: "Katra Jaimal Singh Market",
        description: "Explore this historic market known for its traditional food stalls and local delicacies.",
        bullets: [
          "🥟 Try Gol Gappe (Pani Puri) with tangy tamarind water",
          " Sample Amritsari Papdi Chaat",
          "🥤 Enjoy refreshing Faluda (rose-flavored milk drink)",
          "🛒 Shop for spices, pickles, and papad to take home"
        ]
      },
     {
  "activity": "Tour Conclusion",
  "description": "End your food tour with a full stomach and wonderful memories. Drop-off at your hotel or preferred location.",
  "bullets": [
    "📝 Receive a food guide with recommendations for your stay",
    "💧 Complimentary water bottle",
    "🍽️ All food expenses included"
  ]
}
    ],
    
    inclusions: [
      "Professional English-speaking food guide",
      "All food tastings mentioned in the itinerary (10+ stops)",
      "Bottled water throughout the tour",
      "Traditional clay kulhad (cup) to take home",
      "Small souvenir (Punjabi spice mix)",
      "Hotel pickup and drop-off (within city limits)",
      "All taxes and service charges"
    ],
    exclusions: [
      "Additional food or drinks beyond the planned tastings",
      "Gratuities for guide (optional)",
      "Personal shopping expenses",
      "Alcoholic beverages",
      "Entry fees to any monuments (if visited)"
    ],
    images: [
      "/Images/amritsar-food-tour-hero.jpg",
      "/Images/amritsari-kulcha.jpg",
      "/Images/lassi-amritsar.jpg",
      "/Images/hall-bazaar.jpg",
      "/Images/kesar-da-dhaba.jpg"
    ]
  };

  return (
    <div>
      <TourDetails {...tourData} />
    </div>
  )
}