import { Mail, Phone, MapPin,Facebook,
    Instagram, Linkedin, MessageCircle, } from "lucide-react";
// Home Page Data
export const featuredPackages = [
    {
        id: 1,
        title: "Highland Magic",
        price: "$450",
        duration: "5 Days",
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Coastal Serenity",
        price: "$720",
        duration: "7 Days",
        image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Wild Safari",
        price: "$600",
        duration: "4 Days",
        image: "https://images.unsplash.com/photo-1552423158-efc54b6df1e1?auto=format&fit=crop&w=800&q=80"
    }
];


export const featuredReviews = [
    {
        id: 1,
        name: "Amara Perera",
        text: "The hiking experience in Ella was beyond magical. Ceylon Vista Tours made it so easy!",
        stars: 5
    },
    {
        id: 2,
        name: "John Doe",
        text: "Best luxury travel agency in Sri Lanka. Everything was perfectly organized.",
        stars: 5
    }
];

// Packages Page Data
export const packages = [
    {
        id: 1,
        name: "Highland Magic",
        price: 450,
        duration: "3 days",
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800",
        location: "Ella, Central Highlands",
        description: "Experience the mystical mountains of Ella with breathtaking tea plantations and misty landscapes.",
        highlights: [
            "Little Adam's Peak hike",
            "Tea plantation tours",
            "Local village experience",
            "Traditional tea tasting",
        ],
        rating: 4.8,
        reviews: 127,
    },
    {
        id: 2,
        name: "Coastal Serenity",
        price: 720,
        duration: "4 days",
        image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=800",
        location: "Mirissa, South Coast",
        description: "Relax on pristine beaches of Mirissa with whale watching and vibrant beach culture.",
        highlights: [
            "Blue whale watching",
            "Beach relaxation",
            "Sunset catamaran cruise",
            "Local seafood dining",
        ],
        rating: 4.9,
        reviews: 156,
    },
    {
        id: 3,
        name: "Safari Wilderness",
        price: 650,
        duration: "3 days",
        image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800",
        location: "Yala National Park",
        description: "Encounter Sri Lanka's incredible wildlife in one of Asia's most biodiverse national parks.",
        highlights: [
            "Leopard and elephant safaris",
            "Bird watching",
            "Nature photography",
            "Luxury safari lodge",
        ],
        rating: 4.7,
        reviews: 98,
    },
    {
        id: 4,
        name: "Cultural Heritage",
        price: 550,
        duration: "3 days",
        image: "https://images.unsplash.com/photo-1548013146-72c260e80e32?auto=format&fit=crop&w=800",
        location: "Central Province",
        description: "Discover Sri Lanka's rich cultural heritage with ancient temples and historical sites.",
        highlights: [
            "Sigiriya Rock Fortress",
            "Ancient temples",
            "Local craft workshops",
            "Cultural performances",
        ],
        rating: 4.6,
        reviews: 112,
    },
    {
        id: 5,
        name: "Tropical Paradise",
        price: 800,
        duration: "5 days",
        image: "https://images.unsplash.com/photo-1522576474987-3019260edfbe?auto=format&fit=crop&w=800",
        location: "Multiple Destinations",
        description: "The ultimate Sri Lanka experience combining mountains, beaches, wildlife, and culture.",
        highlights: [
            "All major destinations",
            "Luxury accommodations",
            "Private guides",
            "Fine dining experiences",
        ],
        rating: 5.0,
        reviews: 203,
    },
    {
        id: 6,
        name: "Adventure Seeker",
        price: 600,
        duration: "4 days",
        image: "https://images.unsplash.com/photo-1551632786-28d8d8e32c3d?auto=format&fit=crop&w=800",
        location: "Nuwara Eliya",
        description: "For thrill seekers - hiking, climbing, white water rafting, and extreme sports.",
        highlights: [
            "Pidurutalagala hike",
            "Rock climbing",
            "White water rafting",
            "Adventure photography",
        ],
        rating: 4.8,
        reviews: 89,
    },
];

//Travel Reels Page Data

export const reels = [
    {
        id: 1,
        title: "Ella Adventures",
        location: "Ella, Central Highlands",
        badge: "Watch",
        src: "https://www.youtube.com/embed/pSj7jS9XNn0?controls=1&modestbranding=1&rel=0",
        thumbnail: "https://img.youtube.com/vi/pSj7jS9XNn0/hqdefault.jpg",
        description:
            "Explore the misty mountains and tea plantations of Ella. Experience Little Adam's Peak trek and stunning viewpoints.",
    },
    {
        id: 2,
        title: "Mirissa Beach Paradise",
        location: "Mirissa, South Coast",
        badge: "Trending",
        src: "https://www.youtube.com/embed/j_N8YgK8Vyo?controls=1&modestbranding=1&rel=0",
        thumbnail: "https://img.youtube.com/vi/j_N8YgK8Vyo/hqdefault.jpg",
        description:
            "Pristine beaches and whale watching adventures. Watch the sunset from our luxury beach resort.",
    },
    {
        id: 3,
        title: "Safari Wilderness",
        location: "Yala National Park",
        badge: "Adventure",
        src: "https://www.youtube.com/embed/S_vTOnY_F_M?controls=1&modestbranding=1&rel=0",
        thumbnail: "https://img.youtube.com/vi/S_vTOnY_F_M/hqdefault.jpg",
        description:
            "Encounter Sri Lanka's incredible wildlife including leopards, elephants, and rare bird species.",
    },
    {
        id: 4,
        title: "Nature Beauty",
        location: "Sigiriya & Dambulla",
        badge: "Nature",
        src: "https://www.youtube.com/embed/0SNoX_eF_L8?controls=1&modestbranding=1&rel=0",
        thumbnail: "https://img.youtube.com/vi/0SNoX_eF_L8/hqdefault.jpg",
        description:
            "Ancient temples, massive rock fortresses, and breathtaking natural landscapes of central Sri Lanka.",
    },
    {
        id: 5,
        title: "Tea Plantation Tour",
        location: "Nuwara Eliya",
        badge: "Cultural",
        src: "https://www.youtube.com/embed/pSj7jS9XNn0?controls=1&modestbranding=1&rel=0",
        thumbnail: "https://img.youtube.com/vi/pSj7jS9XNn0/hqdefault.jpg",
        description:
            "Journey through lush tea gardens, meet local tea pickers, and taste the world-famous Ceylon tea.",
    },
    {
        id: 6,
        title: "Sunset at Lighthouse",
        location: "Galle Face",
        badge: "Romantic",
        src: "https://www.youtube.com/embed/j_N8YgK8Vyo?controls=1&modestbranding=1&rel=0",
        thumbnail: "https://img.youtube.com/vi/j_N8YgK8Vyo/hqdefault.jpg",
        description:
            "Experience magical sunsets from the iconic lighthouse with champagne and ocean views.",
    },
    {
        id: 7,
        title: "Water Sports Adventure",
        location: "Arugam Bay",
        badge: "Action",
        src: "https://www.youtube.com/embed/S_vTOnY_F_M?controls=1&modestbranding=1&rel=0",
        thumbnail: "https://img.youtube.com/vi/S_vTOnY_F_M/hqdefault.jpg",
        description:
            "Surfing, diving, and water sports in one of Asia's most vibrant beach towns.",
    },
    {
        id: 8,
        title: "Colonial Colombo",
        location: "Colombo City",
        badge: "Cultural",
        src: "https://www.youtube.com/embed/0SNoX_eF_L8?controls=1&modestbranding=1&rel=0",
        thumbnail: "https://img.youtube.com/vi/0SNoX_eF_L8/hqdefault.jpg",
        description:
            "Discover the bustling capital with its colonial architecture, modern shopping, and vibrant nightlife.",
    },
];

//Reviews Page Data
export const allReviews = [
    {
        id: 1,
        name: "Amara Perera",
        role: "Local Guide • Google",
        avatar: "https://i.pravatar.cc/150?u=1",
        comment: "The hiking experience in Ella was beyond magical. Ceylon Vista Tours made it so easy!",
        rating: 5,
        verified: true,
    },
    {
        id: 2,
        name: "John Doe",
        role: "Adventurer • TripAdvisor",
        avatar: "https://i.pravatar.cc/150?u=2",
        comment: "Best luxury travel agency in Sri Lanka. Everything was perfectly organized.",
        rating: 5,
        verified: true,
    },
    {
        id: 3,
        name: "Sarah Johnson",
        role: "Travel Blogger • Facebook",
        avatar: "https://i.pravatar.cc/150?u=3",
        comment: "Exceptional service and attention to detail. Highly recommend for luxury travelers.",
        rating: 5,
        verified: true,
    },
    {
        id: 4,
        name: "Rajesh Kumar",
        role: "Business Traveler • LinkedIn",
        avatar: "https://i.pravatar.cc/150?u=4",
        comment: "Professional team that understands what luxury means. Outstanding experience throughout.",
        rating: 4,
        verified: true,
    },
    {
        id: 5,
        name: "Emma Williams",
        role: "Couple on Honeymoon • Google",
        avatar: "https://i.pravatar.cc/150?u=5",
        comment: "Made our honeymoon absolutely perfect. Every detail was thoughtfully planned.",
        rating: 5,
        verified: true,
    },
    {
        id: 6,
        name: "Michael Chen",
        role: "Family Traveler • TripAdvisor",
        avatar: "https://i.pravatar.cc/150?u=6",
        comment: "Great packages for families. Kids had amazing time exploring Sri Lanka safely.",
        rating: 4,
        verified: true,
    },
];

// Gallery Page Data
export const galleryItems = [
    {
        id: 1,
        category: "Mountains",
        src: "https://images.unsplash.com/photo-1529230117010-335661a5b89a?auto=format&fit=crop&w=800",
        alt: "Beautiful mountain landscape",
    },
    {
        id: 2,
        category: "Wildlife",
        src: "https://images.unsplash.com/photo-1552423158-efc54b6df1e1?auto=format&fit=crop&w=800",
        alt: "Sri Lanka wildlife",
    },
    {
        id: 3,
        category: "Culture",
        src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800",
        alt: "Cultural sites",
    },
    {
        id: 4,
        category: "Beaches",
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800",
        alt: "Pristine beaches",
    },
    {
        id: 5,
        category: "Nature",
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800",
        alt: "Lush nature and forests",
    },
    {
        id: 6,
        category: "Adventure",
        src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800",
        alt: "Adventure activities",
    },
    {
        id: 7,
        category: "Sunsets",
        src: "https://images.unsplash.com/photo-1495585816603-83d5b814b5a6?auto=format&fit=crop&w=800",
        alt: "Beautiful sunset",
    },
    {
        id: 8,
        category: "Culture",
        src: "https://images.unsplash.com/photo-1548013146-72c260e80e32?auto=format&fit=crop&w=800",
        alt: "Temple and cultural heritage",
    },
    {
        id: 9,
        category: "Mountains",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800",
        alt: "Mountain peaks and valleys",
    },
];

//Contact Page Data
export const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        value: "+94 77 123 4567",
        detail: "Available 24/7",
    },
    {
        icon: Mail,
        title: "Email",
        value: "info@ceylonvistatours.lk",
        detail: "Response within 2 hours",
    },
    {
        icon: MapPin,
        title: "Office",
        value: "Colombo 07, Sri Lanka",
        detail: "Visit us anytime",
    },
];

export const socialLinks = [
    {
        name: "Facebook",
        icon: Facebook,
        href: "https://facebook.com",
    },
    {
        name: "Instagram",
        icon: Instagram,
        href: "https://instagram.com",
    },
    {
        name: "WhatsApp",
        icon: MessageCircle,
        href: "https://wa.me/94771234567",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://linkedin.com",
    },
];