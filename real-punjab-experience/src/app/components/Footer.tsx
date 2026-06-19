// components/Footer.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa'; 

export default function Footer() {
  // Function to scroll to top on click
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // CHANGED: Changed 'font-sans' to 'font-serif', reduced vertical padding from 'pt-20 pb-12' to 'pt-12 pb-8'
    <footer className="bg-primary pt-12 pb-8 border-t rounded-t-4xl border-white/10 font-serif">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- MAIN CONTENT GRID --- */}
        {/* CHANGED: Reduced bottom margin from 'mb-16' to 'mb-10' */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-10">
          
          {/* 1. BRANDING SECTION */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Logo & Name */}
              <div className="flex items-center gap-1 group">
                <div className="w-[25%] rounded-xl ">
                  <Image
                    src="/Images/halflogo.png" 
                    alt="Real Punjab Experience Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                <div>
                  {/* CHANGED: Slightly smaller title to fit compact design, font inherited */}
                  <h2 className="text-xl font-bold text-white tracking-wide">Real Punjab Experience</h2>
                  <p className="text-[#f4ebd7]/90 text-xs font-medium uppercase tracking-widest mt-1">Authentic Journey</p>
                </div>
              </div>

              {/* CHANGED: Increased description text size to 'text-base' */}
              <p className="text-gray-300/80 leading-relaxed mt-4 max-w-md text-base">
                Discover the vibrant culture, breathtaking landscapes, and warm hospitality of Punjab. 
                We offer meticulously planned tours and reliable taxi services to make your journey unforgettable.
              </p>
            </div>

            {/* Social Icons Row */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: <FaFacebookF size={16} />, href: '#' },
                { icon: <FaTwitter size={16} />, href: '#' },
                { icon: <FaInstagram size={16} />, href: '#' },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Social Media"
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#f4ebd7] hover:text-[#1c2b60] hover:border-[#f4ebd7] transition-all duration-300 transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. LINKS & CONTACT GRID */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Column: Explore */}
            <div className="space-y-4">
              {/* CHANGED: Increased heading size from 'text-xs' to 'text-base' */}
              <h3 className="text-base font-bold uppercase tracking-widest border-b border-[#f4ebd7]/20 pb-3 text-[#f4ebd7]">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "Taxi Services", href: "/TaxiServices" },
                  { name: "Contact", href: "/contact" },
                  { name: "About Us", href: "/AboutUS" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      // CHANGED: Increased link font size from 'text-sm' to 'text-base'
                      className="text-base hover:text-[#f4ebd7] transition-colors duration-200 inline-block group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

           
            {/* Column: Contact Details */}
            <div className="col-span-2 md:col-span-1 space-y-4">
              <h3 className="text-base font-bold uppercase tracking-widest border-b border-[#f4ebd7]/20 pb-3 text-[#f4ebd7]">
                Contact Us
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: <FaPhoneAlt />, text: "+91 98036 29487", link: "https://wa.me/91980360007?text=Hello%20I%20would%20like%20a%20free%20quote" },
                  { icon: <FaEnvelope />, text: "contact@realpunjabexperience.com", link: "mailto:contact@realpunjabexperience.com" },
                  { icon: <FaMapMarkerAlt />, text: "Amritsar, India", link: "" },
                ].map((contact, i) => (
                  <li key={i} className="flex items-start gap-3 group cursor-pointer">
                    <div className="mt-1 text-[#f4ebd7] bg-[#f4ebd7]/10 p-1.5 rounded-md transition-colors group-hover:bg-[#f4ebd7] group-hover:text-[#1c2b60]">
                      {contact.icon}
                    </div>
                    {/* CHANGED: Increased contact text size */}
                    <Link href={contact.link} className="text-base hover:text-[#f4ebd7] transition-colors leading-snug">
                      {contact.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        {/* CHANGED: Reduced top padding from 'pt-8' to 'pt-6' */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* CHANGED: Increased footer text size from 'text-xs' to 'text-sm' */}
          <p className="text-gray-400 text-sm font-light tracking-wide text-center md:text-left">
            © {new Date().getFullYear()} Real Punjab Experience. All rights reserved.
          </p>
          
          
        </div>

      </div>
    </footer>
  );
}