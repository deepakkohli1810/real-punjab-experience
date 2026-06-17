"use client";

import { useState, useEffect } from "react";
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle2, 
  User, Plane, Car, MessageSquare, ChevronDown,
} from "lucide-react";

const tourOptions = [
  "Golden Temple Tour with Jallianwala Bagh",
  "Amritsar Full Day Tour (Recommended) ",
  "Amritsar Heritage Walk",
  "Wagah Border Ceremony Tour",
  "Local Village Tour ",
  "Food Walking Tour",
  "Heritage Walk Tour ",
  "Custom / Private Tour",
  "Amritsar Two Day Tour",
  "Amritsar and Dharamshala Tour (5days)",
  "Escorted Tours (Himachal (Shimla , Manali , Dharamshala ) , Leh Ladakh , Sikh Temples , Hindu Temples) ",
];

const transportOptions = [
  "Sedan (4 Seater)",
  " Innova (4-5 Seater)",
  "Tempo Traveller (12+ Seater)",
  "Tempo Traveller (12+ Seater)",
  "Luxury Urbania (12 Seater)",
  "Luxury Bus (20+ Seater)",
  "Kia Carens 4+1 "
];

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    tour: "",
    hasTransport: "no",
    transportType: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setStatusMessage("Thank you! Your inquiry has been sent successfully. We will contact you shortly.");
        setFormData({
          firstName: "", lastName: "", email: "", countryCode: "+91", phone: "",
          tour: "", hasTransport: "no", transportType: "", message: "",
        });
      } else {
        setStatus("error");
        setStatusMessage("Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-primary font-serif uppercase tracking-wider">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Plan Your <span className="text-[#1c2b60]">Perfect Journey</span>
          </h1>
          <p className="text-gray-600 text-lg tracking-wide max-w-2xl mx-auto">
            Have questions about our tours? Our travel experts are ready to craft your ideal experience.
          </p>
        </div>

        {/* Main Container - Split Layout */}
        <div className={`bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-5">
            
            {/* LEFT PANEL - Branding & Info (Hidden on mobile) */}
            <div className="hidden lg:flex lg:col-span-2 bg-gradient-to-br from-[#1c2b60] via-[#2a3d7f] to-[#0b1849] text-white p-10 flex-col justify-between relative overflow-hidden">
              
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <span className="text-sm font-medium">✨ Trusted by 10,000+ Travelers</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 tracking-wider leading-tight">
                    Ready to Explore the Heart of Punjab?
                  </h2>
                  <p className="text-blue-100 text-base font-serif leading-relaxed">
                    From the sacred Golden Temple to the historic streets of Old Amritsar, we craft unforgettable journeys tailored just for you.
                  </p>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-4 mt-10 font-serif">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/15 transition-colors">
                    <div className="w-11 h-11 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200 uppercase tracking-wider mb-0.5">Call Us</p>
                      <p className="font-semibold">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/15 transition-colors">
                    <div className="w-11 h-11 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200 uppercase tracking-wider mb-0.5">Email Us</p>
                      <p className="font-semibold">info@yourcompany.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/15 transition-colors">
                    <div className="w-11 h-11 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200 uppercase tracking-wider mb-0.5">Visit Us</p>
                      <p className="font-semibold">Amritsar, Punjab, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/15 transition-colors">
                    <div className="w-11 h-11 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200 uppercase tracking-wider mb-0.5">Response Time</p>
                      <p className="font-semibold">Within 24 Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL - Form */}
            <div className="lg:col-span-3 p-6 md:p-10 font-serif bg-white">
              
              {status === "success" ? (
                <div className="text-center py-16 animate-fade-in">
                  <div className="relative mx-auto w-20 h-20 mb-6">
                    <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-10 w-10 text-green-600 animate-scale-in" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">{statusMessage}</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center gap-2 text-[#1c2b60] font-semibold hover:underline"
                  >
                    <Send size={16} /> Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Row 1: Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    <div className="group">
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">First Name *</label>
                      <div className="relative">
                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1c2b60] transition-colors" />
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full text-gray-800 pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#1c2b60] focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50/50 focus:bg-white"
                          placeholder="John"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">Last Name *</label>
                      <div className="relative">
                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1c2b60] transition-colors" />
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full text-gray-800 pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#1c2b60] focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50/50 focus:bg-white"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <div className="group">
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">Email Address *</label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1c2b60] transition-colors" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full text-gray-800 pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#1c2b60] focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50/50 focus:bg-white"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    {/* Phone Number Field */}
                    <div className="group">
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <div className="flex gap-0">
                        {/* Manual Country Code Input */}
                        <input
                          type="text"
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="w-20 px-3 py-3.5 rounded-l-xl border-2 border-r-0 border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#1c2b60] focus:ring-4 focus:ring-blue-50 outline-none transition-all text-sm text-gray-800 font-medium text-center"
                          placeholder="+91"
                        />
                        
                        {/* Phone Input */}
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="flex-1 px-4 text-gray-900 placeholder-gray-400 py-3 rounded-r-xl border-2 border-gray-200 focus:border-[#1c2b60] focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50/50 focus:bg-white"
                          placeholder="98765 43210"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Tour Selection */}
                  <div className="group animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">Interested Tour *</label>
                    <div className="relative">
                      <Plane size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1c2b60] transition-colors pointer-events-none" />
                      <select
                        name="tour"
                        required
                        value={formData.tour}
                        onChange={handleChange}
                        className="w-full text-gray-800 pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#1c2b60] focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50/50 focus:bg-white appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select a tour...</option>
                        {tourOptions.map((tour) => (
                          <option key={tour} value={tour}>{tour}</option>
                        ))}
                      </select>
                      <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Row 4: Transportation */}
                  <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-3">Transportation *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      <label className={`relative flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.hasTransport === "yes" 
                          ? 'border-[#1c2b60] bg-blue-50/50 shadow-sm' 
                          : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                      }`}>
                        <input
                          type="radio"
                          name="hasTransport"
                          value="yes"
                          checked={formData.hasTransport === "yes"}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          formData.hasTransport === "yes" ? 'border-[#1c2b60] bg-[#1c2b60]' : 'border-gray-300'
                        }`}>
                          {formData.hasTransport === "yes" && <div className="w-2 h-2 bg-white rounded-full"></div>}
                        </div>
                        <Car size={18} className="text-gray-600" />
                        <span className="font-medium text-gray-800 text-sm">Yes, with transport</span>
                      </label>

                      <label className={`relative flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.hasTransport === "no" 
                          ? 'border-[#1c2b60] bg-blue-50/50 shadow-sm' 
                          : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                      }`}>
                        <input
                          type="radio"
                          name="hasTransport"
                          value="no"
                          checked={formData.hasTransport === "no"}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          formData.hasTransport === "no" ? 'border-[#1c2b60] bg-[#1c2b60]' : 'border-gray-300'
                        }`}>
                          {formData.hasTransport === "no" && <div className="w-2 h-2 bg-white rounded-full"></div>}
                        </div>
                        <User size={18} className="text-gray-600" />
                        <span className="font-medium text-gray-800 text-sm">I'll manage myself</span>
                      </label>
                    </div>

                    {formData.hasTransport === "yes" && (
                      <div className="animate-slide-down">
                        <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">Vehicle Type *</label>
                        <div className="relative">
                          <Car size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          <select
                            name="transportType"
                            required={formData.hasTransport === "yes"}
                            value={formData.transportType}
                            onChange={handleChange}
                            className="w-full text-gray-800 pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#1c2b60] focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50/50 focus:bg-white appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Choose a vehicle...</option>
                            {transportOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                          <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Row 5: Message */}
                  <div className="group animate-slide-up" style={{ animationDelay: '0.5s' }}>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">Additional Message</label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-4 top-4 text-gray-400 group-focus-within:text-[#1c2b60] transition-colors" />
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full text-gray-800 pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#1c2b60] focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50/50 focus:bg-white resize-none"
                        placeholder="Tell us about your travel plans, group size, or any special requests..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-gradient-to-r from-[#1c2b60] to-[#2a3d7f] hover:from-[#0b1849] hover:to-[#1c2b60] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group mt-8 animate-slide-up"
                    style={{ animationDelay: '0.6s' }}
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm text-center p-3 rounded-xl animate-shake">
                      {statusMessage}
                    </div>
                  )}

                  {/* Trust Badges */}
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs text-gray-800">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-green-600" />
                      <span>24h Response</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-green-600" />
                      <span>No Spam</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-green-600" />
                      <span>Secure & Private</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-10px); max-height: 0; }
          to { opacity: 1; transform: translateY(0); max-height: 500px; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-slide-up { animation: slide-up 0.6s ease-out forwards; opacity: 0; }
        .animate-slide-down { animation: slide-down 0.4s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.5s ease-out 0.2s forwards; transform: scale(0); }
        .animate-shake { animation: shake 0.4s ease-in-out; }
      `}</style>
    </div>
  );
}