// components/ReviewsSection.tsx

"use client";

const reviews = [
  {
    id: 1,
    name: "Harpreet Singh",
    location: "Chandigarh, India",
    rating: 5,
    text: "An absolutely unforgettable experience! The Golden Temple tour was spiritual and beautifully organized. Our guide knew every hidden story of Amritsar.",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    location: "London, UK",
    rating: 5,
    text: "I was worried about transport, but Real Punjab Experience made it so easy. The taxi service was punctual, clean, and the driver was very polite.",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    location: "Delhi, India",
    rating: 5,
    text: "Great food tour in Ludhiana! We tried authentic Punjabi dishes I had never heard of. Highly recommended for foodies visiting Punjab.",
  },
  {
    id: 4,
    name: "Emily Chen",
    location: "Toronto, Canada",
    rating: 5,
    text: "The Wagah Border ceremony tour was thrilling. The team handled all the logistics perfectly so we could just enjoy the moment. 10/10!",
  },
  {
    id: 5,
    name: "Amit Patel",
    location: "Mumbai, India",
    rating: 5,
    text: "Booked a weekend getaway to Patiala. The heritage walk was fascinating. The booking process was smooth and the support team was very helpful.",
  },
  {
    id: 6,
    name: "David Miller",
    location: "Sydney, Australia",
    rating: 5,
    text: "Best travel agency in Punjab! They customized a trip for my family including Jallianwala Bagh and local markets. Safe, fun, and memorable.",
  },
];

// Helper function to get consistent colors based on name
const getAvatarColor = (name: string) => {
  const colors = [
    "bg-blue-100 text-blue-600",
    "bg-green-100 text-green-600",
    "bg-purple-100 text-purple-600",
    "bg-yellow-100 text-yellow-600",
    "bg-pink-100 text-pink-600",
    "bg-indigo-100 text-indigo-600",
  ];
  // Simple hash to pick a color based on name length/chars
  const index = name.length % colors.length;
  return colors[index];
};

export default function ReviewsSection() {
  return (
    <section className="py-20 rounded-4xl bg-[#f7e9ca]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[var(--primary)] font-bold uppercase tracking-widest text-lg mb-2">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h3>
          <p className="text-gray-600 font-serif max-w-2xl mx-auto">
            Don't just take our word for it. Here are some experiences shared by our happy customers who explored Punjab with us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => {
            const initials = review.name.charAt(0).toUpperCase();
            const avatarClass = getAvatarColor(review.name);

            return (
              <div 
                key={review.id} 
                className="bg-white/90 p-8 rounded-2xl border
                 border-white hover:shadow-xl transition-all duration-300 
                hover:-translate-y-1 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 font-serif italic mb-6 flex-grow">
                  "{review.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  
                  {/* Avatar Circle with Initials */}
                  <div className={`w-12 h-12  rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 ${avatarClass}`}>
                    {initials}
                  </div>

                  <div>
                    <h4 className="font-bold  font-serif text-[var(--primary)] text-sm">
                      {review.name}
                    </h4>
                    <p className="text-xs  text-gray-500 uppercase tracking-wider">
                      {review.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        

      </div>
    </section>
  );
}