import React from 'react'
import TourDetails from '../../components/TourDetailCompo';

export default function page() {
  const tourData = {
    title: "Authentic Punjabi Village Day Tour",
    location: "Amritsar, Punjab",
    rating: 4.9,
    reviews: 184,
    price: 25,
    originalPrice: 35,
    duration: "Full Day (8-9 Hours)",
    groupSize: "Max 10 People",
    difficulty: "Easy" as const, 
    description: "Experience the true essence of traditional Punjabi lifestyle on this slow-paced, immersive village day tour. Starting early to catch a beautiful sunrise over the fields, you will visit a local village near the India-Pakistan border. This hands-on experience allows you to participate in daily farm chores, enjoy a thrilling tractor ride, and cook on a traditional clay oven (Chulha). Engage in traditional village games, dress up in a Pagri, dance Bhangra, and savor a delicious farm-to-table lunch prepared with homegrown ingredients. Perfect for travelers of all ages, this tour offers a fascinating glimpse into the innocent way of living and the incredible warmth of the local people.",
    
    meetingPoint: "Amritsar Hotel Lobby", 
    
    highlights: [
      "Witness a breathtaking sunrise over the lush agricultural fields",
      "Enjoy a thrilling tractor ride through the heart of rural Punjab",
      "Participate in daily farm chores: milking cows, feeding livestock, and harvesting",
      "Learn to cook authentic rotis on a traditional clay oven (Chulha)",
      "Play traditional village games like Kancha (Marbles) and Gulli Danda",
      "Dress up in traditional Punjabi attire (Pagri) and dance Bhangra with locals",
      "Savor a delicious, farm-to-table breakfast and lunch at a local village home"
    ],
    
    schedule: [
      {
        activity: "Early Morning Pickup & Sunrise Farm Visit",
        description: "Start your day with an early morning pickup from your hotel and drive to a nearby local village close to the border. Enjoy a breathtaking sunrise over the lush green fields.",
        bullets: [
          "🌅 Witness a beautiful sunrise over the agricultural fields",
          "🚜 Experience the serene morning atmosphere of rural Punjab",
          "📸 Capture stunning photographs of the misty farmlands"
        ]
      },
      {
        activity: "Welcome Tea & Traditional Breakfast",
        description: "Head to a friendly local village family house for a warm welcome. Enjoy morning tea and snacks, followed by a delicious, freshly prepared breakfast.",
        bullets: [
          "☕ Sip on authentic Punjabi Masala Chai with local snacks",
          "🫓 Taste fresh rotis and parathas cooked on a traditional clay oven (Chulha)",
          "🥗 Enjoy dishes made from 100% homegrown vegetables and fresh oils",
          "🏡 Experience the warmth and hospitality of a real Punjabi family"
        ]
      },
      {
        activity: "Interactive Farm Chores & Livestock",
        description: "Get your hands dirty and join the villagers in their daily morning chores. A hands-on experience of rural life suitable for all ages.",
        bullets: [
          "🐄 Learn the traditional method of milking cows",
          "🌾 Prepare fresh fodder and feed the livestock",
          "🍎 Pick fresh seasonal fruits directly from the orchards",
          "🥬 Harvest and cut fresh vegetables from the farm for your lunch"
        ]
      },
      {
        activity: "Tractor Ride & Agriculture Insights",
        description: "Hop on a traditional tractor for a thrilling ride through the fields. Learn about the agricultural backbone of Punjab from the locals.",
        bullets: [
          "🚜 Enjoy a bumpy, fun tractor ride plowing through the fields",
          "🌾 Learn about the cultivation seasons of wheat and paddy",
          "💧 Understand the utilization of natural resources in farming",
          "👨‍🌾 Interact directly with local farmers and learn about their lives"
        ]
      },
      {
        activity: "Traditional Cooking on the Chulha",
        description: "Step into the traditional village kitchen and learn the art of cooking on a mud stove (Chulha) alongside the village women.",
        bullets: [
          "🔥 Learn how to light and manage a traditional clay oven (Chulha)",
          "🫓 Prepare and flip your own rotis under local guidance",
          "🍲 Watch the preparation of traditional Punjabi curries for lunch",
          "🌿 Experience the unique smoky flavor that only a Chulha can provide"
        ]
      },
      {
        activity: "Village Games & Cultural Immersion",
        description: "Take a break from chores and join the villagers in their traditional leisure activities. Dress up and dance!",
        bullets: [
          "🎯 Play traditional village games like Kancha (Marbles) and Gulli Danda",
          "👳 Learn how to tie a traditional Punjabi Turban (Pagri) and look like a local",
          "💃 Join the villagers in a high-energy Bhangra dance session",
          "📸 Take amazing, colorful pictures in traditional Punjabi attire"
        ]
      },
      {
        activity: "Authentic Punjabi Lunch",
        description: "Sit down for a grand, traditional Punjabi lunch served with love. The food is cooked using the fresh vegetables you harvested and the rotis you made!",
        bullets: [
          "🍛 Feast on a multi-course traditional Punjabi Thali",
          "🥘 Enjoy freshly cooked seasonal vegetables and rich dals",
          "🥛 Savor homemade dairy products (curd, buttermilk, and white butter)",
          "🍽️ Eat traditionally, sitting on charpoys (woven beds) or the floor"
        ]
      },
      {
        activity: "Tour Ends & Drop-off",
        description: "Bid farewell to your new village friends and drive back to Amritsar. Drop-off at your hotel with a heart full of memories.",
        bullets: [
          "👋 Say goodbye to the warm village family",
          "🚗 Comfortable air-conditioned drive back to the city",
          "🏨 Drop-off at your hotel or preferred location in Amritsar"
        ]
      }
    ],
    
    inclusions: [
      "Hotel pickup and drop-off in an air-conditioned vehicle",
      "Morning tea, snacks, breakfast, and traditional lunch",
      "Tractor ride through the agricultural fields",
      "All village activities (milking, farming, cooking on Chulha)",
      "Traditional games (Kancha, Gulli Danda) and Turban tying experience",
      "Bhangra dance session with local villagers",
      "Professional English-speaking local guide"
    ],
    exclusions: [
      "Gratuities for the guide and village hosts",
      "Personal shopping or souvenirs",
      "Any additional food or beverages outside the mentioned meals",
      "Entry fees to any optional monuments"
    ],
    images: [
      "/Images/village-tour-hero.jpg",
      "/Images/tractor-ride-punjab.jpg",
      "/Images/punjabi-village-lunch.jpg",
      "/Images/bhangra-dance-village.jpg"
    ]
  };

  return (
    <div>
      <TourDetails {...tourData} />
    </div>
  )
}