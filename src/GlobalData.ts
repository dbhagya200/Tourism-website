import {
    Mail, Phone, MapPin, Facebook,
    Instagram, MessageCircle,
    Youtube, MessageSquare, Globe,
    Star, Send
} from "lucide-react";
import {TiktokIcon} from "./view/common/footer/Footer.tsx";


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

// Travel Reels Page Data
export const reels = [
    {
        id: 1,
        title: "Ella Adventures",
        location: "Ella, Central Highlands",
        badge: "Watch",
        src: "https://youtube.com/shorts/agHPq_6vSCY?si=6SJ0N1dSI4KM0it8",
        thumbnail: "https://img.youtube.com/vi/agHPq_6vSCY/hqdefault.jpg",
        description: "Explore the misty mountains and tea plantations of Ella. Experience Little Adam's Peak trek and stunning viewpoints.",
    },
    {
        id: 2,
        title: "Mirissa Beach Paradise",
        location: "Mirissa, South Coast",
        badge: "Trending",
        src: "https://youtube.com/shorts/f0IoX3_jv2w?si=rHkxX98Iz6M8x5k1",
        thumbnail: "https://img.youtube.com/vi/f0IoX3_jv2w/hqdefault.jpg",
        description: "Pristine beaches and whale watching adventures. Watch the sunset from our luxury beach resort.",
    },
    {
        id: 3,
        title: "Safari Wilderness",
        location: "Yala National Park",
        badge: "Adventure",
        src: "https://youtube.com/shorts/EcV1XfP27eA?si=HsxxtXGaHJsuOnIN",
        thumbnail: "https://img.youtube.com/vi/EcV1XfP27eA/hqdefault.jpg",
        description: "Encounter Sri Lanka's incredible wildlife including leopards, elephants, and rare bird species.",
    },
    {
        id: 4,
        title: "Nature Beauty",
        location: "Sigiriya & Dambulla",
        badge: "Nature",
        src: "https://youtube.com/shorts/jo9fiBjLcqQ?si=qOnPr9FbgGOChAf9",
        thumbnail: "https://img.youtube.com/vi/jo9fiBjLcqQ/hqdefault.jpg",
        description: "Ancient temples, massive rock fortresses, and breathtaking natural landscapes of central Sri Lanka.",
    },
    {
        id: 5,
        title: "Tea Plantation Tour",
        location: "Nuwara Eliya",
        badge: "Cultural",
        src: "https://youtube.com/shorts/E3-fJx4egwE?si=hA7szN1AD6xdq-OT",
        thumbnail: "https://img.youtube.com/vi/E3-fJx4egwE/hqdefault.jpg",
        description: "Journey through lush tea gardens, meet local tea pickers, and taste the world-famous Ceylon tea.",
    },
    {
        id: 6,
        title: "Sunset at Lighthouse",
        location: "Galle Face",
        badge: "Romantic",
        src: "https://youtube.com/shorts/Npt_og3dxPY?si=MHgX8dA9Fn_avtDM",
        thumbnail: "https://img.youtube.com/vi/Npt_og3dxPY/hqdefault.jpg",
        description: "Experience magical sunsets from the iconic lighthouse with champagne and ocean views.",
    },
    {
        id: 7,
        title: "Water Sports Adventure",
        location: "Arugam Bay",
        badge: "Action",
        src: "https://youtube.com/shorts/DHkAcCvxKqA?si=eBnhrbOfTnq_1Xc9",
        thumbnail: "https://img.youtube.com/vi/DHkAcCvxKqA/hqdefault.jpg",
        description: "Surfing, diving, and water sports in one of Asia's most vibrant beach towns.",
    },
    {
        id: 8,
        title: "Colonial Colombo",
        location: "Colombo City",
        badge: "Cultural",
        src: "https://youtube.com/shorts/5oyQkgnsrcs?si=xcpVB-SKdvKTMFm5",
        thumbnail: "https://img.youtube.com/vi/5oyQkgnsrcs/hqdefault.jpg",
        description: "Discover the bustling capital with its colonial architecture, modern shopping, and vibrant nightlife.",
    },
    {
        id: 9,
        title: "Temple Exploration",
        location: "Kandy",
        badge: "Cultural",
        src: "https://youtube.com/shorts/ISlGbWMoYfU?si=xA9aMEEhVnOWGNjp",
        thumbnail: "https://img.youtube.com/vi/ISlGbWMoYfU/hqdefault.jpg",
        description: "Visit sacred temples and experience traditional Sri Lankan culture in the hill capital.",
    },
    {
        id: 10,
        title: "Beach Relaxation",
        location: "Bentota",
        badge: "Relax",
        src: "https://youtube.com/shorts/HoJxzN3Y3xQ?si=rtVbwCxaiJlMTrRS",
        thumbnail: "https://img.youtube.com/vi/HoJxzN3Y3xQ/hqdefault.jpg",
        description: "Relax on golden sandy beaches and enjoy water sports in the coastal paradise of Bentota.",
    },
]

// Reviews Page Data
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

// Contact Page Data
export const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        value: "+94 76 431 0628",
        detail: "Available 24/7",
    },
    {
        icon: Mail,
        title: "Email",
        value: "ceylonvisittours@gmail.com",
        detail: "Response within 2 hours",
    },
    {
        icon: MapPin,
        title: "Office",
        value: "No 84/2, Havelock Rd, Galle 80000",
        detail: "Visit us anytime",
    },
];

export const socialLinks = [
    {
        name: "Facebook",
        icon: Facebook,
        href: "https://www.facebook.com/share/1C8r22fs8y/?mibextid=wwXIfr",
        color: "hover:bg-blue-600",
    },
    {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/ceylonvisittourssrilanka?igsh=MTJ0MjNtYTIweXlseA%3D%3D&utm_source=qr",
        color: "hover:bg-pink-600",
    },
    {
        name: "TikTok",
        icon: TiktokIcon,
        href: "https://www.tiktok.com/@ceylonvisittours?_r=1&_t=ZS-93dQ65dxUTH",
        color: "hover:bg-gray-900",
    },
    {
        name: "YouTube",
        icon: Youtube,
        href: "https://youtube.com/@ceylonvisittours?si=v3X1aFEAW88jqcze",
        color: "hover:bg-red-600",
    },
    {
        name: "Google",
        icon: Star,
        href: "https://share.google/IrlqKkU39u7eX2QxY",
        color: "hover:bg-green-600",
    },
    {
        name: "TripAdvisor",
        icon: Globe,
        href: "https://www.tripadvisor.co.uk/Attraction_Review-g297896-d27698089-Reviews-Ceylon_Visit_Tours_Sri_Lanka-Galle_Galle_District_Southern_Province.html",
        color: "hover:bg-emerald-600",
    },
    {
        name: "WhatsApp",
        icon: MessageCircle,
        href: "https://wa.me/message/RUNTC5D42W2QI1",
        color: "hover:bg-green-500",
    },
    {
        name: "WeChat",
        icon: MessageSquare,
        href: "weixin://dl/chat?wxid_mdvgqxr7r9jr12",
        color: "hover:bg-green-400",
    },
    {
        name: "Telegram",
        icon: Send,
        href: "https://t.me/ceylonvisittourssrilanka",
        color: "hover:bg-blue-500",
    },
    // {
    //   name: "LinkedIn",
    //   icon: Linkedin,
    //   href: "https://linkedin.com",
    //   color: "hover:bg-blue-700",
    // },
];