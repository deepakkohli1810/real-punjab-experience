// app/tours/5-day-amritsar-dharamshala/page.tsx
import React from 'react'
import PackageTourDetails from '../../components/PackageTourCompo';

export default function FiveDayAmritsarDharamshalaTour() {
    const packageData = {
        title: "5-Day Amritsar, Dharamshala & Palampur Grand Tour",
        location: "Amritsar, Dharamshala, Palampur",
        rating: 4.9,
        reviews: 98,
        price: 18500, // Total for the vehicle for 5 days (Adjust as needed)
        originalPrice: 22000,
        duration: "5 Days / 4 Nights",
        groupSize: "Up to 5 People (4+1)",
        transportType: "Private AC Innova / Dzire",
        description: "Experience the ultimate North India journey, transitioning from the vibrant plains of Punjab to the majestic Himalayas. Spend your first two days exploring the profound heritage, spirituality, and rural culture of Amritsar. On Day 3, embark on a scenic drive into the hills of Dharamshala, the home of the Dalai Lama. Day 4 takes you through Tibetan monasteries, lush Palampur tea gardens, and panoramic Himalayan viewpoints. Conclude your 5-day journey with a comfortable drop-off to your next destination.",
        
        highlights: [
            "Comprehensive 5-day itinerary covering Punjab's heritage and Himachal's mountains",
            "Full-day authentic Punjabi village experience with traditional lunch",
            "Guided spiritual tour of the Golden Temple and Wagah Border ceremony",
            "Scenic mountain drive from Amritsar to Dharamshala",
            "Explore Tibetan culture at the Norbulingka Institute and McLeod Ganj",
            "Walk through the lush, green Tea Gardens of Palampur",
            "Panoramic Himalayan views from Naddi Viewpoint and St. John's Church",
            "Private AC vehicle and expert local guide for the entire duration"
        ],
        
        itinerary: [
            {
                day: 1,
                title: "Amritsar Heritage, Golden Temple & Wagah Border",
                activities: [
                    { time: "08:30 AM", title: "Hotel Pickup", description: "Meet your guide and driver at your hotel. Begin your Amritsar exploration in a comfortable AC vehicle." },
                    { time: "09:30 AM", title: "Jallianwala Bagh & Partition Museum", description: "Pay respects at the historic Jallianwala Bagh memorial, then explore the emotional exhibits at the Partition Museum." },
                    { time: "12:30 PM", title: "The Golden Temple Complex", description: "Guided walk through the Darshani Deori, Sarovar, main sanctum, and the Akal Takht. Experience the soulful Kirtan." },
                    { time: "02:00 PM", title: "Guru Ka Langar & Lunch", description: "Experience the world's largest community kitchen. Enjoy a traditional vegetarian meal served on the floor." },
                    { time: "04:00 PM", title: "Drive to Wagah Border", description: "Enjoy a scenic drive to the India-Pakistan international border (approx. 28 km)." },
                    { time: "05:30 PM", title: "Wagah Border Ceremony", description: "Witness the high-energy 'Beating Retreat' ceremony with synchronized military drills by Indian and Pakistani troops." },
                    { time: "07:30 PM", title: "Return to Hotel", description: "Drive back to Amritsar and drop off at your hotel. Overnight stay in Amritsar." }
                ]
            },
            {
                day: 2,
                title: "Village Life, Forts, Heritage Walk & Ram Tirath",
                activities: [
                    { time: "08:00 AM", title: "Hotel Pickup & Village Tour", description: "Drive to a local village near the border. Participate in farm chores, enjoy a thrilling tractor ride, and cook rotis on a traditional Chulha." },
                    { time: "11:30 AM", title: "Cultural Activities & Games", description: "Play traditional village games (Kancha, Gulli Danda), tie a Pagri, and dance Bhangra with the locals." },
                    { time: "01:00 PM", title: "Traditional Punjabi Lunch", description: "Savor a delicious, farm-to-table lunch prepared with homegrown ingredients at a local village home." },
                    { time: "03:00 PM", title: "Durgiana Temple", description: "Drive back to the city and visit the stunning Durgiana Temple, known for its intricate silver doors and beautiful architecture." },
                    { time: "04:30 PM", title: "Gobindgarh Fort", description: "Explore the historic 18th-century fort. Discover live history shows, museums, and the fascinating vault of the Sikh Empire." },
                    { time: "06:00 PM", title: "Old City Heritage Walk", description: "Stroll through the vibrant streets of Hall Bazaar. Experience the bustling food street and traditional markets." },
                    { time: "07:30 PM", title: "Ram Tirath Ashram", description: "Visit the ancient ashram where Sita gave birth to Luv and Kush. Attend the mesmerizing evening light and sound show." },
                    { time: "09:00 PM", title: "Tour Concludes & Drop-off", description: "Drop-off at your hotel. Overnight stay in Amritsar." }
                ]
            },
            {
                day: 3,
                title: "Scenic Drive to Dharamshala & Tibetan Culture",
                activities: [
                    { time: "08:00 AM", title: "Hotel Pickup & Drive to Dharamshala", description: "Check out from your Amritsar hotel and begin the scenic 4 to 5-hour drive (approx. 190 km) into the foothills of the Himalayas." },
                    { time: "01:00 PM", title: "En-Route Lunch Stop", description: "Stop at a scenic highway restaurant or dhaba for lunch (at your own cost)." },
                    { time: "03:00 PM", title: "Check-in at Dharamshala", description: "Arrive in Dharamshala/McLeod Ganj and check into your pre-booked hotel. Freshen up and relax." },
                    { time: "05:00 PM", title: "Evening Market Stroll", description: "Take a leisurely walk through the vibrant McLeod Ganj or Dharamshala lower market. Explore Tibetan handicrafts, thangka paintings, and enjoy a cup of Tibetan tea at a local cafe." },
                    { time: "08:00 PM", title: "Dinner & Overnight Stay", description: "Enjoy dinner at a local restaurant. Overnight stay in Dharamshala." }
                ]
            },
            {
                day: 4,
               title: "Dalai Lama Temple, Dharamshala Sightseeing & Palampur Tea Gardens",
               activities: [
    { time: "07:00 AM", title: "Dalai Lama Temple Complex (Tsuglagkhang)", description: "Begin your morning with a visit to the most sacred site in McLeod Ganj — the residence of the 14th Dalai Lama. Explore the main prayer hall adorned with golden Buddhist statues, spin the giant prayer wheels, and soak in the peaceful, spiritual atmosphere cherished by pilgrims and travellers alike." },
    { time: "09:00 AM", title: "Norbulingka Institute", description: "Visit the beautiful Norbulingka Institute, dedicated to preserving and promoting Tibetan culture, art, and architecture." },
    { time: "11:00 AM", title: "Drive to Palampur", description: "Embark on a scenic 1.5-hour drive down into the Kangra Valley to the 'Tea Capital of Himachal Pradesh'." },
    { time: "12:30 PM", title: "Palampur Tea Gardens", description: "Take a mesmerizing walk through the lush, emerald-green tea estates. Learn about the tea-plucking process and enjoy the fresh mountain air." },
    { time: "02:00 PM", title: "Lunch in Palampur", description: "Enjoy a relaxing lunch at a cafe overlooking the tea gardens or the Dhauladhar ranges (at your own cost)." },
    { time: "04:00 PM", title: "Naddi Viewpoint", description: "Drive back up towards Dharamshala and stop at Naddi Village. Enjoy breathtaking, close-up panoramic views of the snow-capped Dhauladhar mountains." },
    { time: "05:30 PM", title: "St. John in the Wilderness Church", description: "Visit this beautiful neo-Gothic church nestled in a dense deodar forest, featuring stunning Belgian stained-glass windows." },
    { time: "06:30 PM", title: "HPCA Cricket Stadium (Optional)", description: "If time permits and you are a cricket fan, visit the world-famous Himachal Pradesh Cricket Association stadium, renowned for its breathtaking mountain backdrop." },
    { time: "08:00 PM", title: "Return to Hotel", description: "Drive back to your hotel in Dharamshala. Overnight stay." }
]
            },
            {
                day: 5,
                title: "Departure from the Hills",
                activities: [
                    { time: "08:00 AM", title: "Breakfast at Hotel", description: "Enjoy a peaceful breakfast at your hotel with a final look at the mountains." },
                    { time: "09:30 AM", title: "Check-out & Final Drive", description: "Check out from the hotel. Your driver will take you to your next destination." },
                    { time: "10:30 AM", title: "Drop-off", description: "Drop-off at the Dharamshala (Gaggal) Airport, the Dharamshala/Pathankot Bus Station, or drive onwards to your next planned location (e.g., Manali, Dalhousie, or Chandigarh)." },
                    { time: "11:00 AM", title: "Tour Concludes", description: "Your 5-day Grand Tour comes to an end with wonderful memories of Punjab and Himachal!" }
                ]
            }
        ],
        
        inclusions: [
            "Private AC Vehicle (Sedan/SUV) for 5 full days",
            "Professional English-speaking local guide (for Amritsar & Dharamshala sightseeing)",
            "Complete Village Tour in Amritsar with traditional lunch and activities",
            "Fuel, Toll Taxes, State Taxes, and Parking charges for 5 days",
            "Driver allowances and night charges",
            "Bottled water in the vehicle"
        ],
        
        exclusions: [
            "Hotel accommodation (We can assist with recommendations and booking)",
            "Meals and beverages (Except the village lunch on Day 2)",
            "Monument entry tickets, camera fees, and special shows (e.g., Gobindgarh Fort, Ram Tirath)",
            "Personal expenses, shopping, and guide/driver tips",
            "Any extra mileage if the final drop-off location exceeds the agreed route"
        ],
        
        images: [
            "/Images/5-day-tour-hero.jpg", 
            "/Images/golden-temple-day.jpg", 
            "/Images/punjabi-village-lunch.jpg",
            "/Images/dharamshala-mcleodganj.jpg", 
            "/Images/palampur-tea-garden.jpg",
            "/Images/naddi-viewpoint.jpg",
            "/Images/hpca-stadium.jpg"
        ]
    };

    return (
        <div>
            <PackageTourDetails {...packageData} />
        </div>
    )
}