// components/WhyChooseUs.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// --- Animated Counter Component ---
const AnimatedCounter = ({ end, duration = 2500, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          let startTime: number | null = null;
          
          const updateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
            
            setCount(Math.floor(easeOutQuart * end));

            if (progress < duration) {
              requestAnimationFrame(updateCount);
            }
          };
          requestAnimationFrame(updateCount);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={countRef} className="tabular-nums">{count}{suffix}</span>;
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#f7e9ca] rounded-4xl font-serif relative rou overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1c2b60]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1c2b60]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-[#1c2b60]/10 text-[#1c2b60] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            Since 2014
          </span>
          <h2 className="text-4xl md:text-5xl font-rubik font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We don't just show you Amritsar; we help you feel it. From the spiritual serenity of the Golden Temple to the patriotic fervor of Wagah Border, experience the city with a licensed expert who knows every hidden gem.
          </p>
        </div>

        {/* --- Top Row: Founder & Stats --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left: Founder Story (Span 5) */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col justify-center relative">
              <div className="absolute -top-4 -left-4 bg-[#1c2b60] text-white p-3 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Meet Mr. Ajay Kumar</h3>
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "Tourism isn't just about showing places; it's about sharing stories. As a <strong>Licensed Guide</strong>, I ensure every guest leaves Amritsar with not just photos, but memories etched in their hearts."
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
                <div className="h-14 w-14 bg-gray-200 rounded-full overflow-hidden relative ring-2 ring-white shadow-sm">
                   <Image src="/Images/ajay-profile.png" alt="Ajay Kumar"  fill className="object-center" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Ajay Kumar</p>
                  <p className="text-xs text-[#1c2b60] font-semibold uppercase tracking-wide">Founder & Govt. Licensed Guide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats Grid (Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
             {/* Stat 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform">
              <div className="bg-blue-50 p-3 rounded-full mb-3 group-hover:bg-[#1c2b60] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1c2b60] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h5 className="text-3xl font-bold text-gray-900"><AnimatedCounter end={15000} suffix="+" /></h5>
              <p className="text-xs text-gray-500 font-medium uppercase mt-1">Happy Guests</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform">
              <div className="bg-blue-50 p-3 rounded-full mb-3 group-hover:bg-[#1c2b60] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1c2b60] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h5 className="text-3xl font-bold text-gray-900"><AnimatedCounter end={12} /></h5>
              <p className="text-xs text-gray-500 font-medium uppercase mt-1">Years Exp.</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform">
              <div className="bg-blue-50 p-3 rounded-full mb-3 group-hover:bg-[#1c2b60] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1c2b60] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h5 className="text-3xl font-bold text-gray-900"><AnimatedCounter end={500} suffix="+" /></h5>
              <p className="text-xs text-gray-500 font-medium uppercase mt-1">Tours Led</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform">
              <div className="bg-blue-50 p-3 rounded-full mb-3 group-hover:bg-[#1c2b60] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1c2b60] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h5 className="text-3xl font-bold text-gray-900">100%</h5>
              <p className="text-xs text-gray-500 font-medium uppercase mt-1">Licensed</p>
            </div>
          </div>
        </div>

        {/* --- Bottom Row: Detailed Features (The "Deep" Content) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-white shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-[#1c2b60] rounded-xl flex items-center justify-center text-white mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Golden Temple Expertise</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Navigate the spiritual heart of Amritsar with dignity. We guide you through the complex protocols, best times for Darshan, and the historical significance of the Sarovar, ensuring a peaceful and respectful visit.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-white shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-[#1c2b60] rounded-xl flex items-center justify-center text-white mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Seamless Logistics</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From early morning Wagah Border trips to late-night food walks, we handle all transportation. Our fleet is clean, safe, and driven by professionals who know every shortcut in the city.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-white shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-[#1c2b60] rounded-xl flex items-center justify-center text-white mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Hidden Histories</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Go beyond the guidebooks. Discover the stories of Jallianwala Bagh, the architecture of Gobindgarh Fort, and the secret lanes of the Old City that only a local expert can reveal.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}