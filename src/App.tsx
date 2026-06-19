import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, X, Mail, Phone, MapPin, Check, Send, Sparkles, Compass, Shield, 
  Award, Plane, GraduationCap, Map, Globe, Heart, ArrowRight, Star, 
  Search, Users, Calendar, Clock, DollarSign, ChevronRight, CheckCircle2,
  Instagram
} from "lucide-react";

// Beautiful SVG vector representation of the luxury TRAVLIN emblem uploaded by the user
export function TravlinEmblem({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Specular premium luxury metallic brush copper/bronze primary gradient */}
        <linearGradient id="bronze-primary" x1="40" y1="50" x2="160" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f7ebd8" />    {/* Highly polished golden-bronze specular highlight */}
          <stop offset="20%" stopColor="#dfa785" />   {/* Core rose copper metal */}
          <stop offset="50%" stopColor="#fcdbbd" />   {/* Secondary metallic shimmer luster */}
          <stop offset="75%" stopColor="#b57a58" />   {/* Warm shadow bronze */}
          <stop offset="100%" stopColor="#784428" />  {/* Deepest base copper shadow */}
        </linearGradient>
        
        {/* Shaded/matte gradient for realistic 3D shadow chamfer and bevel profiles */}
        <linearGradient id="bronze-shaded" x1="40" y1="50" x2="160" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ca9776" />    {/* Soft reflection matte bronze */}
          <stop offset="35%" stopColor="#9c6646" />   {/* Deep shadow copper */}
          <stop offset="70%" stopColor="#6d391e" />   {/* Dark base baseline */}
          <stop offset="100%" stopColor="#32180a" />  {/* Ultimate black-bronze shadow groove */}
        </linearGradient>

        {/* 3D drop-shadow filter to separate the golden emblem of metallic foil from background */}
        <filter id="logo-drop-shadow" x="-20%" y="-20%" width="140%" height="145%">
          <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#04060c" floodOpacity="0.45" />
        </filter>
      </defs>
      
      <g filter="url(#logo-drop-shadow)">
        {/* 1. MAGIC BACKGROUND COSMIC HALO - Orbiting back dust curves (Drawn behind the T) */}
        <path 
          d="M 32 110 C 22 84, 52 52, 94 48 C 130 44, 164 62, 172 82" 
          stroke="url(#bronze-primary)" 
          strokeWidth="0.8" 
          opacity="0.35" 
          strokeDasharray="2 3" 
          fill="none" 
        />
        {/* Specular cosmic gold dust particles along the back path */}
        <circle cx="38" cy="98" r="1.2" fill="#ffd3b5" opacity="0.65" />
        <circle cx="45" cy="80" r="1.8" fill="#dfa785" opacity="0.75" />
        <circle cx="58" cy="64" r="1" fill="#fcdbbd" opacity="0.5" />
        <circle cx="76" cy="54" r="2.2" fill="#ffd3b5" opacity="0.85" />
        <path d="M 76,51 L 77,53 L 79,54 L 77,55 L 76,57 L 75,55 L 73,54 L 75,53 Z" fill="#ffffff" opacity="0.8" />
        <circle cx="96" cy="50" r="1.5" fill="#f7ebd8" opacity="0.7" />
        <circle cx="118" cy="54" r="2" fill="#dfa785" opacity="0.85" />
        <circle cx="138" cy="62" r="1.2" fill="#fcdbbd" opacity="0.55" />
        <circle cx="156" cy="74" r="2.4" fill="#ffd3b5" opacity="0.9" />
        <path d="M 156,71 L 157,73 L 159,74 L 157,75 L 156,77 L 155,75 L 153,74 L 155,73 Z" fill="#ffffff" opacity="0.85" />
        <circle cx="166" cy="88" r="1.6" fill="#f7ebd8" opacity="0.65" />

        {/* 2. MAIN T EMBLEM - Horizontal crossbar Left Wing Section (with downward curve & scroll tip) */}
        <path 
          d="M 100 56 L 68 56 C 60 56, 54 58, 54 63 C 54 67, 58 68, 64 67 C 76 65, 88 64.5, 100 64.5 Z" 
          fill="url(#bronze-shaded)" 
        />
        
        {/* Horizontal crossbar of the T - Right Wing Section (with tapered arrow-like tip) */}
        <path 
          d="M 100 56 L 132 56 C 140 56, 145 58, 145 61 C 145 64, 141 66, 135 66 C 124 65, 112 64.5, 100 64.5 Z" 
          fill="url(#bronze-primary)" 
        />

        {/* Stem of the T - Left Bevel with hollow leaf split */}
        <path 
          d="M 100 64.5 L 91 64.5 L 91 114 C 91 123, 83 129, 83 137 C 83 147, 93 151, 100 156 L 100 64.5 Z M 100 120 C 95 120, 91.5 126, 91.5 132 C 91.5 138, 95 143, 100 146 L 100 120 Z" 
          fill="url(#bronze-shaded)" 
          fillRule="evenodd"
        />

        {/* Stem of the T - Right Bevel with hollow leaf split */}
        <path 
          d="M 100 64.5 L 109 64.5 L 109 114 C 109 123, 117 129, 117 137 C 117 147, 107 151, 100 156 L 100 64.5 Z M 100 120 C 105 120, 108.5 126, 108.5 132 C 108.5 138, 105 143, 100 146 L 100 120 Z" 
          fill="url(#bronze-primary)" 
          fillRule="evenodd"
        />

        {/* 3. MAGIC FOREGROUND COSMIC HALO - Orbiting front dust curves (Drawn in front of T stem) */}
        <path 
          d="M 172 82 C 182 104, 158 132, 118 140 C 78 148, 40 134, 32 110" 
          stroke="url(#bronze-primary)" 
          strokeWidth="0.8" 
          opacity="0.35" 
          strokeDasharray="2 3" 
          fill="none" 
        />
        {/* Specular golden front particles wrapping around */}
        <circle cx="172" cy="102" r="2.5" fill="#fcdbbd" opacity="0.95" />
        <path d="M 172,99 L 173,101 L 175,102 L 173,103 L 172,105 L 171,103 L 169,102 L 171,101 Z" fill="#ffffff" opacity="0.9" />
        <circle cx="168" cy="116" r="1.2" fill="#ffd3b5" opacity="0.75" />
        <circle cx="156" cy="128" r="1.8" fill="#f7ebd8" opacity="0.8" />
        <circle cx="138" cy="137" r="1.5" fill="#dfa785" opacity="0.85" />
        <circle cx="118" cy="141" r="2" fill="#fcdbbd" opacity="0.9" />
        <circle cx="96" cy="140" r="1.1" fill="#ffd3b5" opacity="0.65" />
        <circle cx="76" cy="134" r="2.2" fill="#f7ebd8" opacity="0.85" />
        <path d="M 76,131 L 77,133 L 79,134 L 77,135 L 76,137 L 75,135 L 73,134 L 75,133 Z" fill="#ffffff" opacity="0.8" />
        <circle cx="58" cy="126" r="1.4" fill="#dfa785" opacity="0.75" />
        <circle cx="45" cy="116" r="1.8" fill="#ffd3b5" opacity="0.8" />
        <circle cx="36" cy="106" r="1" fill="#fcdbbd" opacity="0.5" />

        {/* 4. FLIGHT PATH RIBBON LOOP (Tilted inner sweep loop) */}
        <path 
          d="M 82 120 C 44 120, 36 94, 52 82 C 68 70, 88 80, 100 90 C 112 100, 130 96, 148 84" 
          stroke="url(#bronze-shaded)" 
          strokeWidth="6" 
          strokeLinecap="round" 
          fill="none" 
        />
        <path 
          d="M 82 120 C 44 120, 36 94, 52 82 C 68 70, 88 80, 100 90 C 112 100, 130 96, 148 84" 
          stroke="url(#bronze-primary)" 
          strokeWidth="3.2" 
          strokeLinecap="round" 
          fill="none" 
        />

        {/* Dynamic engine glittering stardust firetail trailing behind the passenger jet */}
        <circle cx="126" cy="94" r="1" fill="#f7ebd8" opacity="0.6" />
        <circle cx="132" cy="91" r="1.5" fill="#fcdbbd" opacity="0.8" />
        <circle cx="138" cy="88" r="2.2" fill="#ffd3b5" opacity="0.95" />
        <path d="M 138,85 L 139,87 L 141,88 L 139,89 L 138,91 L 137,89 L 135,88 L 137,87 Z" fill="#ffffff" opacity="0.9" />
        <circle cx="144" cy="85" r="1" fill="#f7ebd8" opacity="0.75" />

        {/* 5. METALLIC SWEPT-WING PASSENGER JET SILHOUETTE */}
        <g transform="translate(148, 84) rotate(-18)">
          <path 
            d="M 16,0 L 14,2 L 15,4.5 L 12.5,4.5 L 9,2 L 1.5,2 L 4.5,7.5 L 1,7.5 L -4,2 L -10,2 L -10,-2 L -4,-2 L 1,-7.5 L 4.5,-7.5 L 1.5,-2 L 9,-2 L 12.5,-4.5 L 15,-4.5 L 14,-2 Z" 
            fill="url(#bronze-primary)" 
          />
          
          {/* Polished custom sparkly nose flare */}
          <path 
            d="M 23,-3.5 Q 23,0 26.5,0 Q 23,0 23,3.5 Q 23,0 19.5,0 Q 23,0 23,-3.5 Z" 
            fill="#ffffff" 
            opacity="0.9"
          />
        </g>
      </g>
    </svg>
  );
}

// Complete trademark layout with horizontal lines and TRAVEL EXPERT sublabel
export function TravlinLogoFull({ className = "flex flex-col items-center", isLight = false }: { className?: string; isLight?: boolean }) {
  return (
    <div className={className}>
      <h2 className={`text-2xl font-normal tracking-[0.380em] font-serif select-none pl-[0.380em] ${
        isLight 
          ? "bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 bg-clip-text text-transparent" 
          : "bg-gradient-to-r from-[#ffd3b5] via-[#dfa785] to-[#fbc8a9] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.48)]"
      }`}>
        TRAVLIN
      </h2>
      <div className="flex items-center gap-3 mt-2 w-full max-w-[200px] opacity-90">
        <div className={`h-[1px] flex-1 ${isLight ? "bg-slate-300" : "bg-slate-800"}`} />
        <span className={`text-[8px] font-medium tracking-[0.28em] font-serif select-none whitespace-nowrap ${isLight ? "text-slate-500/95" : "text-[#dfa785]/90"}`}>
          TRAVEL EXPERT
        </span>
        <div className={`h-[1px] flex-1 ${isLight ? "bg-slate-300" : "bg-slate-800"}`} />
      </div>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("Study Abroad");
  const [activeTourTab, setActiveTourTab] = useState<"intl" | "domestic">("intl");
  
  // Scrolled state to trigger the floating premium navigation bar transition
  const [isScrolled, setIsScrolled] = useState(false);

  // Flight Ticket Search Custom State Simulator
  const [flightFrom, setFlightFrom] = useState("COK");
  const [flightTo, setFlightTo] = useState("DXB");
  const [flightDate, setFlightDate] = useState("2026-07-15");
  const [flightClass, setFlightClass] = useState("Economy");
  const [searchFlightResults, setSearchFlightResults] = useState<any[]>([]);
  const [searchingFlights, setSearchingFlights] = useState(false);

  // Footer / Embedded Form Custom State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  // Modal contact state
  const [modalFormSubmitted, setModalFormSubmitted] = useState(false);
  const [modalFormData, setModalFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Header Scroll tracking for gorgeous sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleModalInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setModalFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      
      const waText = `Hello TRAVLIN, I would like to submit a travel enquiry:\n\n` +
        `• *Name*: ${formData.name}\n` +
        `• *Phone*: ${formData.phone}\n` +
        `• *Email*: ${formData.email}\n` +
        `• *Service Interested*: ${formData.service || 'General Enquiry'}\n` +
        `• *Message*: ${formData.message || 'None'}`;
      
      const whatsappUrl = `https://wa.me/919895405535?text=${encodeURIComponent(waText)}`;
      window.open(whatsappUrl, "_blank");

      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      }, 4000);
    }
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (modalFormData.name && modalFormData.email) {
      setModalFormSubmitted(true);
      
      const waText = `Hello TRAVLIN, I would like to submit a strategic enquiry:\n\n` +
        `• *Name*: ${modalFormData.name}\n` +
        `• *Email*: ${modalFormData.email}\n` +
        `• *Category*: ${selectedInterest}\n` +
        `• *Aspirations & Notes*: ${modalFormData.message || 'None'}`;
      
      const whatsappUrl = `https://wa.me/919895405535?text=${encodeURIComponent(waText)}`;
      window.open(whatsappUrl, "_blank");

      setTimeout(() => {
        setModalFormSubmitted(false);
        setModalFormData({ name: "", email: "", message: "" });
        setContactModalOpen(false);
      }, 4000);
    }
  };

  // Safe smooth scroll utility to make navigation gorgeous
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate dynamic offset so sticky header doesn't overlap section headings
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  // Simulating custom flight queries
  const triggerFlightSearch = () => {
    setSearchingFlights(true);
    setTimeout(() => {
      const db: Record<string, any[]> = {
        "COK-DXB": [
          { airline: "Emirates", rate: "₹12,499", time: "3h 45m", stops: "Non-stop" },
          { airline: "FlyDubai", rate: "₹9,800", time: "4h 05m", stops: "Non-stop" },
          { airline: "Air India Express", rate: "₹8,990", time: "4h 20m", stops: "Non-stop" }
        ],
        "BOM-LHR": [
          { airline: "British Airways", rate: "₹58,999", time: "9h 20m", stops: "Non-stop" },
          { airline: "Air India", rate: "₹49,500", time: "9h 45m", stops: "Non-stop" },
          { airline: "Gulf Air", rate: "₹38,200", time: "11h 30m", stops: "1 Stop" }
        ],
        "DEL-JFK": [
          { airline: "Air India", rate: "₹74,999", time: "14h 10m", stops: "Non-stop" },
          { airline: "Qatar Airways", rate: "₹82,400", time: "17h 50m", stops: "1 Stop" },
          { airline: "Kuwait Airways", rate: "₹59,990", time: "19h 15m", stops: "1 Stop" }
        ]
      };

      const key = `${flightFrom}-${flightTo}`;
      if (db[key]) {
        setSearchFlightResults(db[key]);
      } else {
        // Fallback random generation
        setSearchFlightResults([
          { airline: "Qatar Airways", rate: "₹45,999", time: "8h 15m", stops: "1 Stop" },
          { airline: "Indigo Airlines", rate: "₹39,800", time: "9h 40m", stops: "1 Stop" }
        ]);
      }
      setSearchingFlights(false);
    }, 1200);
  };

  // Initial flight search results loaded by default
  useEffect(() => {
    triggerFlightSearch();
  }, [flightFrom, flightTo]);

  const navItems = [
    { name: "International tours", target: "tour-packages" },
    { name: "Domestic tours", target: "tour-packages" },
    { name: "Ticketing", target: "flight-ticketing" },
    { name: "Study abroad", target: "study-abroad" },
    { name: "Contact", target: "contact" }
  ];

  // International escapes and domestic items curated strictly according to user's specified list
  const toursData = {
    intl: [
      {
        id: "dubai",
        title: "Dubai Escape",
        badge: "Bestseller",
        duration: "5D/4N",
        pax: "2-15 pax",
        type: "All-inclusive",
        price: "₹89,999",
        rating: "4.9",
        desc: "Stunning desert safaris, world-famous skyscrapers, and rich premium custom shopping guides.",
        img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "bali",
        title: "Bali Bliss",
        badge: "Romantic",
        duration: "7D/6N",
        pax: "2-20 pax",
        type: "All-inclusive",
        price: "₹74,999",
        rating: "4.8",
        desc: "Exotic beaches, majestic ancient temples, serene rice terraces, and handpicked boutique resort stays.",
        img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "europe",
        title: "European Dream",
        badge: "Premium",
        duration: "12D/11N",
        pax: "2-12 pax",
        type: "All-inclusive",
        price: "₹1,89,999",
        rating: "4.9",
        desc: "Traverse high alpine landscapes, majestic French wineries, and centuries of Roman historic architectures.",
        img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "singapore",
        title: "Singapore Explorer",
        badge: "Family Fav",
        duration: "6D/5N",
        pax: "2-18 pax",
        type: "All-inclusive",
        price: "₹64,999",
        rating: "4.7",
        desc: "Futuristic gardens, world-class theme parks, and vibrant night safari experiences built for total joy.",
        img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=700&q=80"
      }
    ],
    domestic: [
      {
        id: "kashmir",
        title: "Kashmir Paradise",
        badge: "Bestseller",
        duration: "6D/5N",
        pax: "2-10 pax",
        type: "All-inclusive",
        price: "₹29,999",
        rating: "4.9",
        desc: "Heaven on earth. Experience pristine Shikara rides, frozen valleys of Gulmarg, and premium hotels.",
        img: "https://images.unsplash.com/photo-1595815771614-1244368f294a?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kerala",
        title: "Kerala Backwaters",
        badge: "Natural Escape",
        duration: "5D/4N",
        pax: "2-12 pax",
        type: "All-inclusive",
        price: "₹19,999",
        rating: "4.8",
        desc: "Traverse standard houseboats, lush Munnar tea fields, and historic spice trails of God's Own Country.",
        img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "lakshadweep",
        title: "Lakshadweep Islands",
        badge: "Exotic Beaches",
        duration: "5D/4N",
        pax: "2-8 pax",
        type: "All-inclusive",
        price: "On Request",
        rating: "4.9",
        desc: "Turquoise lagoons, crystal-clear water adventures, coral reef scuba diving, and white sandy beaches.",
        img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "manali-kasol",
        title: "Manali & Kasol Magic",
        badge: "Adventure Valley",
        duration: "6D/5N",
        pax: "2-15 pax",
        type: "All-inclusive",
        price: "On Request",
        rating: "4.8",
        desc: "Pine forests, high mountain passes, vibrant cafes of Parvati Valley, and riverside campsite stays.",
        img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "jaipur",
        title: "Jaipur Royal Heritage",
        badge: "Heritage Tour",
        duration: "7D/6N",
        pax: "2-12 pax",
        type: "All-inclusive",
        price: "On Request",
        rating: "4.9",
        desc: "Explore the majestic Pink City of Jaipur, stunning Amber Fort, iconic Hawa Mahal, and beautiful heritage monuments.",
        img: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80"
      }
    ]
  };

  const destinations = [
    { country: "United States", flag: "🇺🇸", tag: "Most Popular", desc: "4,500+ Universities · F-1 Visa", bg: "from-blue-50 to-indigo-50" },
    { country: "United Kingdom", flag: "🇬🇧", tag: "Top Ranked", desc: "160+ Universities · Student Visa", bg: "from-sky-50 to-blue-50" },
    { country: "Canada", flag: "🇨🇦", tag: "PR Friendly", desc: "200+ Colleges · Study Permit", bg: "from-red-50 to-rose-50" },
    { country: "Australia", flag: "🇦🇺", tag: "Work Rights", desc: "43 Universities · Student Visa", bg: "from-cyan-50 to-emerald-50" },
    { country: "Germany", flag: "🇩🇪", tag: "Low Tuition", desc: "400+ Institutions · National Visa", bg: "from-amber-50 to-orange-50" },
    { country: "New Zealand", flag: "🇳🇿", tag: "Safe & Scenic", desc: "8 Universities · Student Visa", bg: "from-purple-50 to-fuchsia-50" }
  ];

  const highlights = [
    { text: "Free Counselling", desc: "One-on-one expert evaluations to map your ideal career roadmap." },
    { text: "Admission Assistance", desc: "Comprehensive application reviews and mock program interviews." },
    { text: "Visa Filing", desc: "98% track-record visa file processing by certified specialists." },
    { text: "Scholarship Search", desc: "Securing financial merit aids and exclusive grant access." },
    { text: "Accommodation Help", desc: "Safe, university-affiliated and off-campus housing allocations." },
    { text: "Forex & Insurance", desc: "Instant high-speed currency exchanges and student health protection." }
  ];

  return (
    <div id="travlin-root" className="min-h-screen bg-gray-50 text-gray-950 font-sans antialiased relative selection:bg-slate-200 selection:text-slate-900 scroll-smooth">
      
      {/* Floating Header (glassmorphism shifts when scrolled) */}
      <header 
        id="main-nav-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-gray-100" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          
          {/* Trademark Logo */}
          <div 
            id="logo-brand-btn"
            className="flex flex-col cursor-pointer group justify-center"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-2xl font-bold tracking-tight text-gray-900 leading-none select-none group-hover:text-amber-700 transition-colors duration-200">
              TRAVLIN
            </span>
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.280em] pl-0.5 text-[#b57a58] uppercase leading-none mt-1.5 whitespace-nowrap font-sans">
              TRAVEL EXPERT
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav id="desktop-links" className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={`${item.name}-${index}`}
                onClick={() => scrollToSection(item.target)}
                className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors cursor-pointer relative py-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#202A36] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right quick consult CTA on desktop Header */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => {
                setSelectedInterest("General Enquiry");
                setContactModalOpen(true);
              }}
              style={{ backgroundColor: "#202A36" }}
              className="px-5 py-2 rounded-full text-xs font-semibold text-white tracking-wider uppercase hover:bg-[#1a2229] transition-colors shadow-sm cursor-pointer"
            >
              Consult Now
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div id="hamburger-menu-wrapper" className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-900 hover:text-gray-700 p-2 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Overlay menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-popup"
              className="absolute top-16 right-6 left-6 md:hidden z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col space-y-4"
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <button
                  key={`mob-${index}`}
                  onClick={() => scrollToSection(item.target)}
                  className="text-left py-2.5 px-3 rounded-xl text-gray-900 hover:bg-gray-100 font-medium transition-colors cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <hr className="border-gray-100 my-2" />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setContactModalOpen(true);
                }}
                style={{ backgroundColor: "#202A36" }}
                className="w-full text-center py-3 rounded-full text-white font-medium text-sm transition-transform cursor-pointer hover:scale-[1.02]"
              >
                ENQUIRE NOW
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section (100vh with Video Background and Overlapping typography) */}
      <section id="hero-sec" className="relative h-screen w-full overflow-hidden">
        
        {/* Background Video directly linked to secure high definition Cloudfront file */}
        <video
          id="hero-bg-video"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Pure minimal light overlay for superb premium visibility of elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-slate-50/85 backdrop-blur-[1px] pointer-events-none" />

        {/* Content Centered Container */}
        <div className="relative h-full flex flex-col justify-between z-10">
          
          {/* Spacer for navbar */}
          <div className="h-16" />

          {/* Core Overlapping Brand content centered */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-6">
            <div id="hero-core-content" className="mt-12 sm:mt-16 md:mt-24 flex flex-col items-center text-center max-w-4xl cursor-default">
              
              {/* Premium small uppercase subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="mb-4"
              >
                <span className="text-xs md:text-sm font-semibold text-gray-700 tracking-wider uppercase">
                  "Travel Beyond Borders. Achieve Beyond Dreams." 🌟
                </span>
              </motion.div>

              {/* Master overlapping typography display */}
              <div id="overlapping-typography" className="flex flex-col items-center justify-center mb-6 text-center">
                <motion.h1
                  className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-slate-400 leading-tight tracking-tighter uppercase"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                >
                  EXPLORE.
                </motion.h1>
                <motion.h1
                  style={{ color: "#202A36" }}
                  className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter uppercase -mt-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.5 }}
                >
                  DISCOVER.
                </motion.h1>
              </div>

              {/* Multi-discipline dynamic subtitles - forced into a clean, premium, scrollable single-line border badge */}
              <motion.div
                className="w-full max-w-full overflow-x-auto text-center mb-8 px-4"
                style={{ scrollbarWidth: 'none' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="inline-flex whitespace-nowrap text-xs sm:text-sm md:text-base font-semibold tracking-wide text-slate-800 bg-white/80 backdrop-blur-md border border-gray-200/60 px-6 py-2.5 rounded-full shadow-sm">
                  <span>🚀 Study Abroad</span>
                  <span className="text-gray-300 mx-3 select-none">|</span>
                  <span>✈️ Flight Ticketing</span>
                  <span className="text-gray-300 mx-3 select-none">|</span>
                  <span>🌍 International Tours</span>
                  <span className="text-gray-300 mx-3 select-none">|</span>
                  <span>🏕️ Domestic Trips</span>
                </div>
              </motion.div>

              {/* Action Trigger Buttons */}
              <motion.div
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <button
                  onClick={() => scrollToSection("tour-packages")}
                  className="px-4 py-2 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors pointer-events-auto cursor-pointer"
                >
                  Discover
                </button>
                <button
                  onClick={() => {
                    setSelectedInterest("General Consulting");
                    setContactModalOpen(true);
                  }}
                  style={{ backgroundColor: "#202A36" }}
                  className="px-4 py-2 rounded-full text-white font-medium hover:bg-[#1a2229] transition-colors pointer-events-auto cursor-pointer"
                >
                  CONTACT
                </button>
              </motion.div>

            </div>
          </div>

          {/* Dynamic Trust Badges in Bottom Screen Banner */}
          <div className="w-full max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-900/5 text-gray-500 text-xs md:text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-emerald-700">
                <Shield className="w-4 h-4" />
                <span>Fully Bonded & Insured</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-600">
                <Award className="w-4 h-4" />
                <span>Kerala's Best Agency Status</span>
              </div>
            </div>
            <div className="text-slate-400 flex items-center gap-2">
              <span>Scroll down for curated luxury solutions</span>
              <Compass className="w-4 h-4 animate-spin text-slate-300" style={{ animationDuration: '8s' }} />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: What We Offer (Everything You Need for Your Global Journey) */}
      <section id="what-we-offer" className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          {/* Module Heading */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-widest text-[#ca9c7f] uppercase block mb-3">WHAT WE OFFER</span>
            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-4">
              Everything You Need for Your <br /><span className="text-[#202A36] font-semibold">Global Journey</span>
            </h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              From booking your flight to settling into a university abroad — we handle it all with expertise and care.
            </p>
          </div>

          {/* Core Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CARD 1: Study Abroad */}
            <motion.div 
              className="bg-slate-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              whileHover={{ y: -6 }}
            >
              <div>
                <div className="w-12 h-12 bg-amber-50 border border-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Study Abroad</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  Turn your academic ambitions into reality with our end-to-end study abroad consultancy.
                </p>
                <ul className="space-y-3 mb-8">
                  {["University Selection & Applications", "Visa Guidance & Documentation", "Scholarship Assistance", "Pre-departure Orientation"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => {
                  setSelectedInterest("Study Abroad");
                  setContactModalOpen(true);
                }}
                className="w-full py-3.5 rounded-xl border border-slate-200 hover:border-slate-800 text-slate-800 font-semibold text-xs uppercase tracking-wider transition-colors bg-white hover:bg-slate-900 hover:text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            {/* CARD 2: Flight Ticketing */}
            <motion.div 
              className="bg-slate-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              whileHover={{ y: -6 }}
            >
              <div>
                <div className="w-12 h-12 bg-sky-50 border border-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Plane className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Flight Ticketing</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  Get the best fares across 500+ airlines worldwide, with flexible booking and instant confirmation.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Domestic & International Flights", "Multi-city & Round Trips", "Group Booking Discounts", "24/7 Travel Support"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => {
                  setSelectedInterest("Flight Ticketing");
                  setContactModalOpen(true);
                }}
                className="w-full py-3.5 rounded-xl border border-slate-200 hover:border-slate-800 text-slate-800 font-semibold text-xs uppercase tracking-wider transition-colors bg-white hover:bg-slate-900 hover:text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            {/* CARD 3: Holiday Tours */}
            <motion.div 
              className="bg-slate-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              whileHover={{ y: -6 }}
            >
              <div>
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Holiday Tours</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  Curated international and domestic tour packages designed for every budget and travel style.
                </p>
                <ul className="space-y-3 mb-8">
                  {["International Escapes", "Domestic Discoveries", "Hotel & Resort Packages", "Customizable Itineraries"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => {
                  setSelectedInterest("Holiday Tours");
                  setContactModalOpen(true);
                }}
                className="w-full py-3.5 rounded-xl border border-slate-200 hover:border-slate-800 text-slate-800 font-semibold text-xs uppercase tracking-wider transition-colors bg-white hover:bg-slate-900 hover:text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION: Tour Packages (International & Domestic tabs, handpicked curation) */}
      <section id="tour-packages" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          {/* Header section with tab selectors built in together */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#ca9c7f] uppercase block mb-3">TOUR PACKAGES</span>
              <h2 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight">
                Curated Escapes <br /><span className="font-semibold text-[#202A36]">for Every Soul</span>
              </h2>
            </div>

            {/* Filter Tabs matching "🌍 International Escapes" & "🇮🇳 Domestic Gems" */}
            <div className="flex bg-slate-200/60 rounded-full p-1.5 shrink-0 border border-slate-200/20">
              <button
                onClick={() => setActiveTourTab("intl")}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeTourTab === "intl"
                    ? "bg-[#202A36] text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                🌍 International Escapes
              </button>
              <button
                onClick={() => setActiveTourTab("domestic")}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeTourTab === "domestic"
                    ? "bg-[#202A36] text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                🇮🇳 Domestic Gems
              </button>
            </div>
          </div>

          {/* Cards Dynamic layout rendering */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="wait">
              {toursData[activeTourTab].map((tour) => (
                <motion.div
                  key={tour.id}
                  className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  
                  {/* Tour Image with Zoom */}
                  <div className="h-52 overflow-hidden relative">
                    <img 
                      src={tour.img} 
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Floating top pills */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                      <span className="text-[10px] font-bold tracking-wider text-white bg-slate-900/80 px-2.5 py-1 rounded-full uppercase backdrop-blur-md">
                        {tour.badge}
                      </span>
                      <div className="flex items-center gap-1 bg-white/95 text-slate-900 px-2.5 py-1 rounded-full shadow-sm text-xs font-bold font-mono">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>{tour.rating}</span>
                      </div>
                    </div>

                    {/* Bottom glass blur specs inside image */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2.5 flex items-center justify-between text-[11px] text-white">
                      <div className="flex items-center gap-1 font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 font-semibold">
                        <Users className="w-3.5 h-3.5" />
                        <span>{tour.pax}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body text details */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1 leading-tight group-hover:text-amber-700 transition-colors uppercase">
                        {tour.title}
                      </h4>
                      <p className="text-[10px] text-[#ca9c7f] uppercase font-bold tracking-widest mb-3">{tour.type}</p>
                      <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-6">{tour.desc}</p>
                    </div>

                    <div>
                      <div className="h-[1px] bg-slate-100 my-4" />
                      <button
                        onClick={() => {
                          setSelectedInterest(`Inquiry for ${tour.title} Pack`);
                          setContactModalOpen(true);
                        }}
                        style={{ backgroundColor: "#202A36" }}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-white text-xs font-semibold hover:bg-slate-800 transition-all cursor-pointer group-hover:scale-[1.02]"
                      >
                        <span>Get Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* SECTION: Flight Ticketing Details with Live Search Quote Simulator */}
      <section id="flight-ticketing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold tracking-widest text-[#ca9c7f] uppercase block mb-3">FLIGHT TICKETING</span>
              <h2 className="text-4xl font-normal text-slate-900 tracking-tight mb-4">
                Best Fares. <br /><span className="font-semibold text-[#202A36]">Zero Hassle.</span>
              </h2>
              <p className="text-slate-500 font-light mb-8 leading-relaxed">
                We search across 500+ airlines to find you the perfect fare — with guaranteed real-time updates and total post-booking flexibility.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Price Match Guarantee</span>
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Find a lower price? We'll match it and give you an extra discount.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>24/7 Support</span>
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Round-the-clock travel assistance for any situation, anywhere.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Group Booking Deals</span>
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Special rates for families, corporate groups, and student batches.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Loyalty Rewards</span>
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Earn points on every booking and redeem for free tickets.</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Simulator Column */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/65 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10">
                  
                  {/* Widget title & label */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                      <Plane className="w-5 h-5 text-amber-400 rotate-12" />
                      <span>Live Fare & Path Tool</span>
                    </h3>
                    <span className="text-[10px] text-emerald-400 font-mono tracking-wider flex items-center gap-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span>REAL-TIME RATES</span>
                    </span>
                  </div>

                  {/* Flight parameters choices */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">Origin</label>
                      <select 
                        value={flightFrom} 
                        onChange={(e) => setFlightFrom(e.target.value)}
                        className="w-full bg-slate-850/90 border border-slate-700 rounded-xl px-2 py-2 text-xs font-semibold text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                      >
                        <option value="COK">COK - Kochi</option>
                        <option value="BOM">BOM - Mumbai</option>
                        <option value="DEL">DEL - Delhi</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">Destination</label>
                      <select 
                        value={flightTo} 
                        onChange={(e) => setFlightTo(e.target.value)}
                        className="w-full bg-slate-850/90 border border-slate-700 rounded-xl px-2 py-2 text-xs font-semibold text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                      >
                        <option value="DXB">DXB - Dubai</option>
                        <option value="LHR">LHR - London</option>
                        <option value="JFK">JFK - New York</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">Dep Date</label>
                      <input 
                        type="date" 
                        value={flightDate}
                        onChange={(e) => setFlightDate(e.target.value)}
                        className="w-full bg-slate-850/90 border border-slate-700 rounded-xl px-2 py-2 text-xs font-semibold text-white focus:outline-none focus:border-amber-400 cursor-pointer" 
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">Cabin Type</label>
                      <select 
                        value={flightClass}
                        onChange={(e) => setFlightClass(e.target.value)}
                        className="w-full bg-slate-850/90 border border-slate-700 rounded-xl px-2 py-2 text-xs font-semibold text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                      >
                        <option value="Economy">Economy</option>
                        <option value="Business">Business Class</option>
                        <option value="First">First Class Luxury</option>
                      </select>
                    </div>
                  </div>

                  {/* Dynamic results layout */}
                  <div className="bg-slate-850/60 rounded-2xl p-4 border border-slate-800">
                    <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold mb-3">AVAILABLE TICKETING OPTIONS:</p>
                    
                    {searchingFlights ? (
                      <div className="h-32 flex flex-col items-center justify-center">
                        <Compass className="w-8 h-8 text-amber-400 animate-spin mb-2" />
                        <span className="text-xs text-slate-400">Searching global GDS systems...</span>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {searchFlightResults.map((ticket, idx) => (
                          <div 
                            key={idx} 
                            className="bg-slate-800 rounded-xl p-3.5 flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-700/50 hover:border-slate-600 transition-colors"
                          >
                            <div className="flex items-center gap-3 w-full md:w-auto">
                              <div className="p-2 rounded-lg bg-slate-700 text-amber-400">
                                <Plane className={`w-4 h-4 ${idx % 2 === 0 ? "rotate-95" : "rotate-45"}`} />
                              </div>
                              <div>
                                <h5 className="font-bold text-sm text-slate-100">{ticket.airline}</h5>
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest">{flightClass} flight</p>
                              </div>
                            </div>

                            <div className="flex items-center justify-between md:justify-center gap-6 w-full md:w-auto">
                              <div className="text-center">
                                <p className="text-xs text-slate-400">Total Duration</p>
                                <p className="text-sm font-semibold text-slate-100">{ticket.time}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-xs text-slate-400">Transit</p>
                                <p className="text-xs font-semibold text-emerald-400">{ticket.stops}</p>
                              </div>
                            </div>

                            <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto border-t border-slate-700/50 md:border-none pt-3 md:pt-0">
                              <div className="text-left md:text-right">
                                <span className="text-xs text-slate-400 block">Travlin Exclusive Fare</span>
                                <span className="text-base font-bold text-amber-400">{ticket.rate}</span>
                              </div>
                              <button
                                onClick={() => {
                                  setSelectedInterest(`Flight from ${flightFrom} to ${flightTo} (${ticket.airline})`);
                                  setContactModalOpen(true);
                                }}
                                className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                              >
                                Book Now
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <p className="text-slate-500 text-[10px] mt-4 text-center">
                    Note: Airline charges shown above are strictly dynamic GDS price match indices and include all airport taxes.
                  </p>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION: Study Abroad Details */}
      <section id="study-abroad" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#ca9c7f] uppercase block mb-3">STUDY ABROAD</span>
            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-4">
              Your Gateway to <span className="font-semibold text-[#202A36]">Global Education</span>
            </h2>
            <p className="text-slate-500 font-light leading-relaxed">
              Admission assistance, visa processing, scholarships, housing, and pre-departure support — we guide you every step of the way.
            </p>
          </div>

          {/* Core Assistance Items list style */}
          <div className="bg-slate-900/5 border border-slate-900/5 rounded-3xl p-8 backdrop-blur-sm max-w-5xl mx-auto">
            <h4 className="text-slate-900 text-center font-semibold tracking-wider text-sm mb-8 uppercase">OUR TOTAL ENHANCED STUDENT CARE SERVICES</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((hl, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#202A36] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900 mb-1">{hl.text}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">{hl.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button 
                onClick={() => {
                  setSelectedInterest("Study Abroad Comprehensive Consultation");
                  setContactModalOpen(true);
                }}
                className="px-6 py-3 rounded-full text-white font-medium text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-md inline-flex items-center gap-2 hover:bg-[#1a2229]"
                style={{ backgroundColor: "#202A36" }}
              >
                <span>Book Free Career Counselling Session</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: Why TRAVLIN Trust highlights */}
      <section id="why-travlin" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background ambient accents for luxury branding */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ca9c7f]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Heading + stats block on left */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold tracking-widest text-[#ca9c7f] uppercase block mb-3">TRUST & ACCREDITATION</span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                Your Trust is <br /><span className="font-semibold text-white">Our Priority</span>
              </h2>
              <p className="text-slate-400 font-light mb-8 max-w-sm leading-relaxed">
                We are a customer-first certified travel network, guaranteeing zero processing delays and fully bonded flight cover.
              </p>

              {/* Counter highlights */}
              <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-8">
                <div>
                  <span className="text-3xl font-extrabold text-[#ca9c7f] block mb-1">98%</span>
                  <span className="text-xs text-slate-400 capitalize tracking-wider">Visa Success Ratio</span>
                </div>
                <div>
                  <span className="text-3xl font-extrabold text-[#ca9c7f] block mb-1">5+ Yrs</span>
                  <span className="text-xs text-slate-400 capitalize tracking-wider">Kerala's Best Agency Award</span>
                </div>
              </div>
            </div>

            {/* List of 4 main benefits listed in specification guidelines */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Box 1 */}
              <div className="bg-slate-800/50 border border-slate-700/30 rounded-2xl p-6 hover:bg-slate-800 transition-all duration-200">
                <div className="p-3 w-max bg-[#ca9c7f]/10 text-[#ca9c7f] rounded-xl mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="text-md font-bold mb-2 text-white uppercase">IATA Certified</h4>
                <p className="text-xs text-slate-450 leading-relaxed font-light">
                  Fully licensed and certified travel consultancy with international airline accreditation.
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-slate-800/50 border border-slate-700/30 rounded-2xl p-6 hover:bg-slate-800 transition-all duration-200">
                <div className="p-3 w-max bg-[#ca9c7f]/10 text-[#ca9c7f] rounded-xl mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-md font-bold mb-2 text-white uppercase">Award Winning</h4>
                <p className="text-xs text-slate-450 leading-relaxed font-light">
                  Recognized as Kerala's best travel agency for 5 consecutive years.
                </p>
              </div>

              {/* Box 3 */}
              <div className="bg-slate-800/50 border border-slate-700/30 rounded-2xl p-6 hover:bg-slate-800 transition-all duration-200">
                <div className="p-3 w-max bg-[#ca9c7f]/10 text-[#ca9c7f] rounded-xl mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-md font-bold mb-2 text-white uppercase">Expert Team</h4>
                <p className="text-xs text-slate-450 leading-relaxed font-light">
                  30+ travel and visa specialists with decades of combined corporate experience.
                </p>
              </div>

              {/* Box 4 */}
              <div className="bg-slate-800/50 border border-slate-700/30 rounded-2xl p-6 hover:bg-slate-800 transition-all duration-200">
                <div className="p-3 w-max bg-[#ca9c7f]/10 text-[#ca9c7f] rounded-xl mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-md font-bold mb-2 text-white uppercase">98% Visa Success</h4>
                <p className="text-xs text-slate-450 leading-relaxed font-light">
                  Industry-leading success rate backed by meticulous, error-free documentation reviews.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION: Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#ca9c7f] uppercase block mb-3">TESTIMONIALS</span>
            <h2 className="text-4xl font-normal text-slate-900 tracking-tight mb-4">
              Stories That <span className="font-semibold text-[#202A36]">Inspire</span>
            </h2>
            <p className="text-slate-500 font-light text-sm leading-relaxed">
              Read how our dedicated flight team and study abroad consultants made international targets straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Review 1 */}
            <div className="bg-slate-50 border border-gray-100 rounded-3xl p-8 relative flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
                </div>
                <p className="text-slate-700 text-sm italic font-light leading-relaxed mb-6">
                  "TRAVLIN made my dream of studying in Canada a reality. From visa to accommodation, everything was seamless. Couldn't have done it without them!"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-[#ca9c7f] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  AM
                </div>
                <div>
                  <h5 className="font-bold text-sm text-slate-950">Arjun Mehta</h5>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Study Abroad Client</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-slate-50 border border-gray-100 rounded-3xl p-8 relative flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
                </div>
                <p className="text-slate-700 text-sm italic font-light leading-relaxed mb-6">
                  "The Dubai package was absolutely breathtaking. Every detail was taken care of. TRAVLIN truly delivers a premium travel experience!"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-[#ca9c7f] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  PS
                </div>
                <div>
                  <h5 className="font-bold text-sm text-slate-950">Priya Sharma</h5>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">International Tour Client</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-slate-50 border border-gray-100 rounded-3xl p-8 relative flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
                </div>
                <p className="text-slate-700 text-sm italic font-light leading-relaxed mb-6">
                  "Best ticketing service I've used. Got amazing fares and the support team was available 24/7. Will always book through TRAVLIN!"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-[#ca9c7f] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  RN
                </div>
                <div>
                  <h5 className="font-bold text-sm text-slate-950">Rahul Nair</h5>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Flight Booking Client</p>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-slate-50 border border-gray-100 rounded-3xl p-8 relative flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
                </div>
                <p className="text-slate-700 text-sm italic font-light leading-relaxed mb-6">
                  "The Kashmir tour was magical! TRAVLIN organized every detail perfectly. Our family had the best vacation ever. Highly recommended!"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-[#ca9c7f] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  ST
                </div>
                <div>
                  <h5 className="font-bold text-sm text-slate-950">Sneha Thomas</h5>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Domestic Tour Client</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION: Get In Touch (Interactive Inquiry Form) */}
      <section id="contact" className="py-24 bg-slate-50 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column Address Info */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#ca9c7f] uppercase block mb-3">GET IN TOUCH</span>
                <h2 className="text-4xl font-normal text-slate-900 tracking-tight mb-4">
                  Ready to Start <br /><span className="font-semibold text-[#202A36]">Your Journey?</span>
                </h2>
                <p className="text-slate-500 font-light mb-8 leading-relaxed max-w-sm">
                  Whether you're planning a holiday, booking flights, or charting your study abroad path — our experts are here to help. Fill in the form and we'll reach out within 24 hours.
                </p>

                {/* Grid coordinates strictly customized per specification instructions */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white border border-gray-150 rounded-xl text-slate-800 shadow-sm shrink-0">
                      <Phone className="w-5 h-5 text-[#202A36]" />
                    </div>
                    <div>
                      <h4 className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Call Us</h4>
                      <p className="text-slate-800 font-semibold">{`+91 98954 05535`}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-600 shadow-sm shrink-0">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[11px] uppercase tracking-wider font-bold text-emerald-600">WhatsApp Us</h4>
                      <p className="text-slate-800 font-semibold">
                        <a 
                          href="https://wa.me/919895405535?text=Hello%20TRAVLIN,%20I'd%20love%20to%20know%20more%20about%20your%20study%20abroad%20and%20travel%20packages!" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-emerald-600 transition-all duration-200 inline-flex items-center gap-1.5"
                        >
                          +91 98954 05535
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-medium uppercase tracking-wider">Chat Live</span>
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white border border-gray-150 rounded-xl text-slate-800 shadow-sm shrink-0">
                      <Mail className="w-5 h-5 text-[#202A36]" />
                    </div>
                    <div>
                      <h4 className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Email Address</h4>
                      <p className="text-slate-800 font-semibold">{`travlin.travelexpert@gmail.com`}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-pink-50 border border-pink-100/60 rounded-xl text-pink-600 shadow-sm shrink-0">
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="text-[11px] uppercase tracking-wider font-bold text-pink-600">Instagram</h4>
                      <p className="text-slate-800 font-semibold">
                        <a 
                          href="https://www.instagram.com/travlin_travelexpert?igsh=MWRjbW0wa3UxbTdqaQ==" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-pink-600 transition-all duration-200 inline-flex items-center gap-1.5"
                        >
                          @travlin_travelexpert
                          <span className="text-[10px] bg-pink-100 text-pink-800 px-1.5 py-0.5 rounded font-medium uppercase tracking-wider">Follow</span>
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white border border-gray-150 rounded-xl text-slate-800 shadow-sm shrink-0">
                      <MapPin className="w-5 h-5 text-[#202A36]" />
                    </div>
                    <div>
                      <h4 className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Visit Us Office</h4>
                      <p className="text-slate-800 font-semibold text-sm leading-relaxed">{`Pappini Mall, Rajiv Gandhi Bypass, Jaseela Junction, Manjeri, 676121`}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small branding badge */}
              <div className="mt-12 hidden lg:block border-t border-gray-200 pt-6">
                <TravlinLogoFull className="flex flex-col items-start text-left" isLight={true} />
              </div>
            </div>

            {/* Right Column Form Submission panel */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-100 shadow-lg relative">
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form 
                    key="form-embed"
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Full Name</label>
                        <input 
                          type="text" 
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-all text-gray-950" 
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98000 00000"
                          className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-all text-gray-950" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Email Address</label>
                        <input 
                          type="email" 
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="you@email.com"
                          className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-all text-gray-950" 
                        />
                      </div>

                      {/* Dropdown service interested in requested */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Service Interested In</label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-all text-gray-950 cursor-pointer"
                        >
                          <option value="">Select a service</option>
                          <option value="Study Abroad Consultancy">Study Abroad Consultancy</option>
                          <option value="Flight Ticketing Deals">Flight Ticketing Deals</option>
                          <option value="International Tour Packages">International Tour Packages</option>
                          <option value="Domestic Tour Packages">Domestic Tour Packages</option>
                        </select>
                      </div>
                    </div>

                    {/* Message description box */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Your Message</label>
                      <textarea 
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your travel plans..."
                        className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-all text-gray-950"
                      />
                    </div>

                    {/* Button trigger */}
                    <button
                      type="submit"
                      style={{ backgroundColor: "#202A36" }}
                      className="w-full py-3.5 rounded-xl text-white font-medium text-xs tracking-widest uppercase hover:bg-[#1a2229] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-4 h-4 text-white" />
                      <span>Send Enquiry</span>
                    </button>

                  </motion.form>
                ) : (
                  <motion.div 
                    key="form-success"
                    className="flex flex-col items-center justify-center text-center py-16"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6 animate-bounce">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Enquiry Logged Successfully!</h3>
                    <p className="text-slate-500 font-light text-sm max-w-md leading-relaxed mb-4">
                      Thank you for contacting <strong className="text-slate-800">TRAVLIN</strong>. One of our destination specialists will call or WhatsApp your number shortly to discuss bespoke pricing solutions.
                    </p>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#ca9c7f] bg-[#ca9c7f]/10 px-4 py-1.5 rounded-full mt-4">
                      Expected Response: &lt; 2 Hours
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION: Global FOOTER element */}
      <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Left main brand column */}
            <div className="md:col-span-5">
              <div className="flex flex-col items-start text-left mb-6">
                <div className="mb-4">
                  <span className="text-2xl font-semibold text-white leading-none select-none">
                    TRAVLIN
                  </span>
                  <div className="text-[10px] font-bold tracking-[0.280em] text-[#dfa785] uppercase leading-none mt-2 whitespace-nowrap font-sans">
                    TRAVEL EXPERT
                  </div>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm mt-4">
                  Your trusted partner for study abroad programs, flight ticketing, and unforgettable international and domestic tours. We turn travel dreams into journeys.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                  <a 
                    href="https://www.instagram.com/travlin_travelexpert?igsh=MWRjbW0wa3UxbTdqaQ==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-pink-400 hover:text-white hover:bg-pink-600/25 hover:border-pink-500/50 transition-all duration-300 w-fit"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Follow us on Instagram</span>
                  </a>
                  <span className="text-[10px] text-slate-500 font-mono">@travlin_travelexpert</span>
                </div>
              </div>
            </div>

            {/* Grid 1 Services */}
            <div className="md:col-span-2.5 col-span-6">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-[#ca9c7f] mb-6">Services</h4>
              <ul className="space-y-3.5 text-xs text-slate-400">
                {["Study Abroad", "Flight Booking", "International Tours", "Domestic Tours", "Visa Assistance", "Travel Insurance"].map((link, i) => (
                  <li key={i}>
                    <button onClick={() => {
                      if (link.includes("Abroad")) scrollToSection("study-abroad");
                      else if (link.includes("Flight") || link.includes("Booking")) scrollToSection("flight-ticketing");
                      else scrollToSection("tour-packages");
                    }} className="hover:text-white transition-colors cursor-pointer">{link}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Grid 2 Company */}
            <div className="md:col-span-2.5 col-span-6">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-[#ca9c7f] mb-6">Company</h4>
              <ul className="space-y-3.5 text-xs text-slate-400">
                {["About Us", "Our Team", "Awards", "Careers", "Blog", "Contact"].map((link, i) => (
                  <li key={i}>
                    <button onClick={() => {
                      if (link === "Contact") scrollToSection("contact");
                      else {
                        setSelectedInterest(`General Info: ${link}`);
                        setContactModalOpen(true);
                      }
                    }} className="hover:text-white transition-colors cursor-pointer">{link}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Grid 3 Newsletter */}
            <div className="md:col-span-2">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-[#ca9c7f] mb-6">Newsletter</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                Get exclusive deals, travel tips, and study abroad updates.
              </p>
              <div className="flex bg-slate-900 border border-slate-800 rounded-xl overflow-hidden p-1">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="w-full bg-transparent px-3 text-xs text-white focus:outline-none placeholder:text-slate-600" 
                />
                <button 
                  onClick={() => alert("Subscribed successfully!")}
                  className="p-2 rounded-lg bg-[#ca9c7f] text-slate-950 hover:bg-[#dfb295] transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Social icons & copyright bottom */}
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              <span>© {new Date().getFullYear()} TRAVLIN Travels & Consultants. All Rights Reserved.</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400 transition-colors">IATA Accreditation #912341</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Modern Contact Modal Overlay (retained for rapid consultations) */}
      <AnimatePresence>
        {contactModalOpen && (
          <div id="contact-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop Layer */}
            <motion.div
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setContactModalOpen(false);
                setModalFormSubmitted(false);
              }}
            />

            {/* Modal Content container layout */}
            <motion.div
              id="contact-modal-card"
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row z-10"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              
              {/* Left Brand Identity Info panel */}
              <div className="md:w-5/12 bg-slate-900 text-white p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div>
                  <div className="mb-4">
                    <TravlinLogoFull className="flex flex-col items-start text-left" />
                  </div>
                  <p className="text-xs text-slate-400 mb-6">Let's craft your next travel memory with flawless design and perfect safety.</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Email Us</p>
                        <p className="text-xs font-medium text-slate-200">travlin.travelexpert@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Call Support</p>
                        <p className="text-xs font-medium text-slate-200">+91 98954 05535</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-400 mt-1 shrink-0 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">WhatsApp Chat</p>
                        <p className="text-xs font-medium text-slate-200">
                          <a 
                            href="https://wa.me/919895405535?text=Hello%20TRAVLIN,%20I'd%20love%20to%20know%20more%20about%20your%20study%20abroad%20and%20travel%20packages!" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                          >
                            +91 98954 05535
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Headquarters</p>
                        <p className="text-[10px] text-slate-300 leading-relaxed">Pappini Mall, Rajiv Gandhi Bypass,<br/>Jaseela Junction, Manjeri - 676121</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 text-slate-500 text-[10px] uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span>Curators of Wonder</span>
                </div>
              </div>

              {/* Right Form Inquiry panel */}
              <div className="md:w-7/12 p-8 relative flex flex-col justify-center bg-white">
                
                {/* Close Button */}
                <button
                  onClick={() => {
                    setContactModalOpen(false);
                    setModalFormSubmitted(false);
                  }}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors rounded-full p-1.5 hover:bg-gray-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <AnimatePresence mode="wait">
                  {!modalFormSubmitted ? (
                    <motion.div
                      key="modal-form-layout"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">Plan Your Experience</h4>
                      <p className="text-xs text-slate-500 mb-6">Tell us about your upcoming plans regarding <strong className="text-[#ca9c7f]">{selectedInterest}</strong>.</p>

                      <form onSubmit={handleModalSubmit} className="space-y-4">
                        {/* Name field */}
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Your Name</label>
                          <input
                            type="text"
                            required
                            name="name"
                            value={modalFormData.name}
                            onChange={handleModalInputChange}
                            placeholder="Alex Mercer"
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-slate-400/90 focus:bg-white transition-all text-gray-900 placeholder:text-gray-400"
                          />
                        </div>

                        {/* Email field */}
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Email Address</label>
                          <input
                            type="email"
                            required
                            name="email"
                            value={modalFormData.email}
                            onChange={handleModalInputChange}
                            placeholder="alex@example.com"
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-slate-400/90 focus:bg-white transition-all text-gray-900 placeholder:text-gray-400"
                          />
                        </div>

                        {/* Dropdown Choice based on interest */}
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Category of Interest</label>
                          <div className="grid grid-cols-2 gap-2">
                            {["Study Abroad", "Ticketing", "International", "Domestic"].map((cat) => (
                              <button
                                key={cat}
                                type="button"
                                onClick={() => setSelectedInterest(cat)}
                                className={`px-2 py-2 text-xs rounded-xl border text-center transition-all cursor-pointer font-medium ${
                                  selectedInterest.toLowerCase().includes(cat.toLowerCase().slice(0, 4))
                                    ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                                    : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                                }`}
                              >
                                {cat}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Optional notes */}
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Aspirations & Notes (Optional)</label>
                          <textarea
                            name="message"
                            value={modalFormData.message}
                            onChange={handleModalInputChange}
                            rows={2}
                            placeholder="e.g. Seeking information for summer study schemes or bespoke ticketing quotes."
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-slate-400/90 focus:bg-white transition-all text-gray-900 placeholder:text-gray-400 resize-none"
                          />
                        </div>

                        {/* Submit button with styled parameters */}
                        <button
                          type="submit"
                          style={{ backgroundColor: "#202A36" }}
                          className="w-full py-3 rounded-xl text-white font-medium text-sm hover:bg-[#1a2229] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                        >
                          <Send className="w-4 h-4 text-white" />
                          <span>SEND STRATEGIC INQUIRY</span>
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="modal-success-prompt"
                      className="flex flex-col items-center justify-center text-center py-12"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mb-6">
                        <Check className="w-8 h-8 text-emerald-600 animate-bounce" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Request Processed!</h4>
                      <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
                        Thank you, <strong className="text-slate-800">{modalFormData.name}</strong>. Our bespoke curators are compiling your flight and travel recommendations for <strong className="text-slate-800">{selectedInterest}</strong>.
                      </p>
                      <p className="text-[10px] text-slate-400 mt-6 uppercase tracking-wider">
                        A dispatch confirmation has been sent to {modalFormData.email}.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
              
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Action Button with premium pulse design */}
      <motion.a
        id="whatsapp-float-btn"
        href="https://wa.me/919895405535?text=Hello%20TRAVLIN,%20I'd%20love%20to%20know%20more%20about%20your%20study%20abroad%20and%20travel%20packages!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer group hover:bg-[#20ba5a] transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute right-full mr-3 py-1 px-2.5 bg-slate-900 border border-slate-800 text-white text-[10px] uppercase tracking-wider font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          WhatsApp Chat
        </span>
        <svg className="w-6 h-6 fill-current text-white cursor-pointer" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>

    </div>
  );
}
