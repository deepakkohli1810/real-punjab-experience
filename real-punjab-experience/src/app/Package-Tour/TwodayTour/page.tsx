// app/tours/2-day-amritsar/page.tsx
import React from 'react'
import PackageTourDetails from '../../components/PackageTourCompo';

export default function TwoDayAmritsarTour() {
    const packageData = {
        title: "2-Day Ultimate Amritsar: Heritage, Village & Border",
        location: "Amritsar, Punjab",
        rating: 4.9,
        reviews: 142,
        price: 6500, // Total for the vehicle for 2 days (Adjust as needed)
        originalPrice: 8000,
        duration: "2 Days / 1 Night",
        groupSize: "Up to 5 People (4+1)",
        transportType: "Private AC Innova ",
        description: "Immerse yourself in the complete essence of Amritsar over two action-packed days. Day 1 takes you through the city's profound history, the spiritual Golden Temple, and the patriotic Wagah Border ceremony. Day 2 offers a deep dive into rural Punjab with an authentic village tour, followed by visits to the magnificent Durgiana Temple, the historic Gobindgarh Fort, a vibrant heritage walk, and the ancient Ram Tirath ashram. Experience the perfect blend of spirituality, history, and rural culture with your own private vehicle and expert guide.",
        
        highlights: [
            "Comprehensive 2-day itinerary covering all major Amritsar attractions",
            "Full-day authentic village experience with traditional lunch and activities",
            "Guided spiritual tour of the Golden Temple and Langar",
            "Witness the electrifying Wagah Border Beating Retreat ceremony",
            "Explore the majestic Gobindgarh Fort and vibrant Old City Heritage Walk",
            "Visit the ancient Ram Tirath ashram and its evening light show",
            "Private AC vehicle and expert local guide for both days"
        ],
        
        itinerary: [
            {
                day: 1,
                title: "City Heritage, Golden Temple & Wagah Border",
                activities: [
                    { 
                        time: "08:30 AM", 
                        title: "Hotel Pickup", 
                        description: "Meet your guide and driver at your hotel. Begin your Amritsar exploration in a comfortable AC vehicle." 
                    },
                    { 
                        time: "09:30 AM", 
                        title: "Jallianwala Bagh & Partition Museum", 
                        description: "Pay respects at the historic Jallianwala Bagh memorial, then explore the emotional exhibits at the Partition Museum." 
                    },
                    { 
                        time: "12:30 PM", 
                        title: "The Golden Temple Complex", 
                        description: "Guided walk through the Darshani Deori, Sarovar, main sanctum, and the Akal Takht. Experience the soulful Kirtan." 
                    },
                    { 
                        time: "02:00 PM", 
                        title: "Guru Ka Langar & Lunch", 
                        description: "Experience the world's largest community kitchen. Enjoy a traditional vegetarian meal served on the floor." 
                    },
                    { 
                        time: "04:00 PM", 
                        title: "Drive to Wagah Border", 
                        description: "Enjoy a scenic drive to the India-Pakistan international border (approx. 28 km)." 
                    },
                    { 
                        time: "05:30 PM", 
                        title: "Wagah Border Ceremony", 
                        description: "Witness the high-energy 'Beating Retreat' ceremony with synchronized military drills by Indian and Pakistani troops." 
                    },
                    { 
                        time: "07:30 PM", 
                        title: "Return to Hotel", 
                        description: "Drive back to Amritsar and drop off at your hotel. Overnight stay in Amritsar." 
                    }
                ]
            },
            {
                day: 2,
                title: "Village Life, Forts, Heritage Walk & Ram Tirath",
                activities: [
                    { 
                        time: "08:00 AM", 
                        title: "Hotel Pickup & Village Tour", 
                        description: "Drive to a local village near the border. Participate in farm chores, enjoy a thrilling tractor ride, and cook rotis on a traditional Chulha." 
                    },
                    { 
                        time: "11:30 AM", 
                        title: "Cultural Activities & Games", 
                        description: "Play traditional village games (Kancha, Gulli Danda), tie a Pagri, and dance Bhangra with the locals." 
                    },
                    { 
                        time: "01:00 PM", 
                        title: "Traditional Punjabi Lunch", 
                        description: "Savor a delicious, farm-to-table lunch prepared with homegrown ingredients at a local village home." 
                    },
                    { 
                        time: "03:00 PM", 
                        title: "Durgiana Temple", 
                        description: "Drive back to the city and visit the stunning Durgiana Temple, known for its intricate silver doors and beautiful architecture." 
                    },
                    { 
                        time: "04:30 PM", 
                        title: "Gobindgarh Fort", 
                        description: "Explore the historic 18th-century fort. Discover live history shows, museums, and the fascinating vault of the Sikh Empire." 
                    },
                    { 
                        time: "06:00 PM", 
                        title: "Old City Heritage Walk", 
                        description: "Stroll through the vibrant streets of Hall Bazaar and Katra Jaimal Singh. Experience the bustling food street and traditional markets." 
                    },
                    { 
                        time: "07:30 PM", 
                        title: "Ram Tirath Ashram", 
                        description: "Visit the ancient ashram believed to be where Sita gave birth to Luv and Kush. Attend the mesmerizing evening light and sound show." 
                    },
                    { 
                        time: "09:00 PM", 
                        title: "Tour Concludes & Drop-off", 
                        description: "Bid farewell to your guide and driver. Drop-off at your hotel or railway station, concluding your 2-day Amritsar journey." 
                    }
                ]
            }
        ],
        
        inclusions: [
            "Private AC Vehicle (Sedan/SUV) for 2 full days",
            "Professional English-speaking local guide for both days",
            "Complete Village Tour with traditional lunch and activities",
            "Fuel, Toll Taxes, State Taxes, and Parking charges for 2 days",
            "Driver allowances and night charges",
            "Bottled water in the vehicle"
        ],
        
        exclusions: [
            "Hotel accommodation (We can assist with recommendations)",
            "Meals and beverages (Except the village lunch on Day 2)",
            "Monument entry tickets and camera fees",
            "Gobindgarh Fort special shows/tickets (if applicable)",
            "Personal expenses and guide/driver tips"
        ],
        
        images: [
            "/Images/GoldentTemple.jpeg",
           "/BorderImages/BorderImage.jpeg",
           "/PackagePhotos/2DayPhotos/durgiana-night.jpg",
             "/PackagePhotos/2DayPhotos/durgiana-temple.jpg",
               "/PackagePhotos/2DayPhotos/Durgiana-Temple.jpg",
                 "/PackagePhotos/2DayPhotos/fort.jpg",
                                  "/PackagePhotos/2DayPhotos/fort2.jpg",
                 "/PackagePhotos/2DayPhotos/font3.jpg",

            "/BorderImages/BorderGateImage.webp",
              "/PackagePhotos/1DayPhotos/Jallianwala-bagh.jpg",
               "/PackagePhotos/1DayPhotos/partitionMuseum2.jpg",
               "/VillageImages/village1.jpeg",
"/VillageImages/village2.jpeg",
"/VillageImages/village3.jpeg",
"/VillageImages/village4.jpeg"
,"/HeritageImages/[Heritage]3.jpg",
  "/HeritageImages/[Heritage]4.jpg",
       "/FoodImages/Food1.jpg",
  "/FoodImages/Food2.jpg",
  "/FoodImages/Food3.jpg",
  "/FoodImages/Food4.jpg",

        ]
    };

    return (
        <div>
            <PackageTourDetails {...packageData} />
        </div>
    )
}