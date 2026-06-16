// app/tours/full-day-amritsar/page.tsx
import React from 'react'
import PackageTourDetails from '../../components/PackageTourCompo';
import TourPageLayout from '../../components/TourPageLayout';

export default function FullDayAmritsarTour() {
    const packageData = {
        title: "Full Day Amritsar Heritage & Wagah Border Tour",
        location: "Amritsar, Punjab",
        rating: 4.9,
        reviews: 214,
        price: 3500, // Total for the vehicle for the full day (Adjust as needed)
        originalPrice: 4500,
        duration: "Full Day (10-12 Hours)",
        groupSize: "Up to 5 People (4+1)",
        transportType: "Private AC Innova / Dzire",
        description: "Experience the ultimate Amritsar journey in a single, action-packed day. This comprehensive full-day tour covers the city's most profound historical landmarks, the spiritual heart of the Golden Temple, and culminates with the electrifying patriotic ceremony at the India-Pakistan border. Perfect for travelers short on time who want to see it all with the comfort of a private vehicle and expert guide.",
        
        highlights: [
            "Comprehensive city tour covering all major historical and religious sites",
            "Guided spiritual walk through the magnificent Golden Temple complex & Akal Takht",
            "Experience the soul-stirring Guru Ka Langar community kitchen",
            "Explore the emotional and historic exhibits at the Partition Museum",
            "Witness the high-energy Beating Retreat Ceremony at Wagah Border",
            "Flexible itinerary with a private AC vehicle and expert local guide"
        ],
        
        itinerary: [
            {
                day: 1,
                title: "Amritsar City Sightseeing & Wagah Border",
                activities: [
                    { 
                        time: "08:30 AM", 
                        title: "Hotel Pickup", 
                        description: "Meet your professional guide and driver at your hotel lobby or the Amritsar Railway Station. Begin your journey in a comfortable, air-conditioned vehicle." 
                    },
                    { 
                        time: "09:30 AM", 
                        title: "Jallianwala Bagh Memorial", 
                        description: "Visit the historic public garden and pay your respects at the site of the 1919 massacre. See the eternal flame, bullet-marked walls, and the Martyrs' Well." 
                    },
                    { 
                        time: "10:45 AM", 
                        title: "Partition Museum", 
                        description: "Located in the historic Town Hall, explore the world's only museum dedicated to the memory of the 1947 Partition. Witness oral histories, photographs, and artifacts." 
                    },
                    { 
                        time: "12:30 PM", 
                        title: "The Golden Temple (Harmandir Sahib)", 
                        description: "Arrive at the holiest Sikh shrine. Your guide will lead you through the Darshani Deori, around the sacred Sarovar, and into the main sanctum. Visit the Akal Takht and witness the continuous Kirtan." 
                    },
                    { 
                        time: "02:00 PM", 
                        title: "Guru Ka Langar & Lunch", 
                        description: "Experience the world's largest community kitchen. Sit on the floor and enjoy a delicious, freshly prepared vegetarian meal served to thousands daily. (Alternatively, you can take a break for a restaurant lunch)." 
                    },
                    { 
                        time: "04:00 PM", 
                        title: "Drive to Wagah Border", 
                        description: "Check out of the city and enjoy a scenic 1-hour drive to the India-Pakistan international border (approx. 28 km from Amritsar)." 
                    },
                    { 
                        time: "05:30 PM", 
                        title: "Wagah Border Ceremony", 
                        description: "Take your seats and witness the world-famous 'Beating Retreat' ceremony. Feel the patriotic fervor as the Indian BSF and Pakistani Rangers perform their synchronized, theatrical military dance." 
                    },
                    { 
                        time: "07:30 PM", 
                        title: "Return Drop-off", 
                        description: "After the ceremony concludes and the gates are locked, drive back to Amritsar. Your tour ends with a comfortable drop-off at your hotel or the railway station." 
                    }
                ]
            }
        ],
        
        inclusions: [
            "Private AC Vehicle (Sedan/SUV/Tempo) for the full day",
            "Professional English-speaking local guide",
            "Fuel, Toll Taxes, State Taxes, and Parking charges",
            "Driver allowances and night charges (if applicable)",
            "Bottled water in the vehicle"
        ],
        
        exclusions: [
            "Hotel accommodation (We can assist with recommendations)",
            "Meals and beverages (Langar is free, but restaurant meals are extra)",
            "Monument entry tickets (if applicable for foreign tourists)",
            "Camera fees at monuments",
            "Personal expenses and guide/driver tips"
        ],
        
        images: [
             "/Images/HeroImage.jpeg",
            "/Images/guest-at-golden-temple.jpeg",
            "/Images/GoldentTemple.jpeg",
            "/BorderImages/BorderImage.jpeg",
      "/BorderImages/audience.jpg",
       "/BorderImages/BorderGateImage.webp",
        "/BorderImages/indianflag.jpg",
        "/PackagePhotos/1DayPhotos/Jallianwala-bagh.jpg",
        "/PackagePhotos/1DayPhotos/well.jpg",
        "/PackagePhotos/1DayPhotos/partitionMuseum.jpg",
        "/PackagePhotos/1DayPhotos/partitionMuseum2.jpg",
        ]
    };

    return (
        <div>
            <PackageTourDetails {...packageData} />
            <TourPageLayout/>
        </div>
    )
}