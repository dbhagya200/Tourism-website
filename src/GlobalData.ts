import {
    Mail, MapPin, Facebook,
    Instagram, MessageCircle,
    Youtube,
    Send
} from "lucide-react";
import {TiktokIcon} from "./view/common/footer/Footer.tsx";
import {GoogleIcon} from "./view/common/icons/GoogleIcon.tsx";
import {FaTripadvisor, FaWeixin, FaWhatsapp} from "react-icons/fa";

// Get all images from the folder
const imageModules = import.meta.glob('../public/cvt-images-new/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default'
});

// Convert to array
const images = Object.values(imageModules);


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
        title: "Ella Swing Adventures",
        location: "Ella, Central Highlands",
        badge: "Adventure",
        src: "https://youtube.com/shorts/Ft_ivmswTu8?si=83_yD6bVDlYWpDFJ",
        thumbnail: "https://img.youtube.com/vi/Ft_ivmswTu8/hqdefault.jpg",
        description: "Ella Swing is an adventure experience located at Ravana Pool Club, Namunakola Road, Passara, Ella, Sri Lanka, offering a unique blend of relaxation and thrill.",
    },
    {
        id: 2,
        title: "Mirissa Beach Paradise",
        location: "Mirissa, South Coast",
        badge: "Trending",
        src: "https://youtube.com/shorts/VyZFnyS1rnE?si=RtdhDOoHNckR7v7H",
        thumbnail: "https://img.youtube.com/vi/VyZFnyS1rnE/hqdefault.jpg",
        description: "An Instagram-famous viewpoint with sweeping views of the ocean and palm trees, best visited at sunrise for fewer crowds.",
    },
    {
        id: 3,
        title: "Safari Wilderness",
        location: "Yala National Park",
        badge: "Adventure",
        src: "https://youtube.com/shorts/9Cl7P_3UWAo?si=f5vWUyJhoJFQtRWm",
        thumbnail: "https://img.youtube.com/vi/9Cl7P_3UWAo/hqdefault.jpg",
        description: "A visit to Sri Lanka is never complete without a sojourn in the park that brings the fabled Jungle Book to life.",
    },
    {
        id: 4,
        title: "Welcome to Sri Lanka",
        location: "Bandaranaike International Airport",
        badge: "Welcome",
        src: "https://youtube.com/shorts/jo9fiBjLcqQ?si=qOnPr9FbgGOChAf9",
        thumbnail: "https://img.youtube.com/vi/jo9fiBjLcqQ/hqdefault.jpg",
        description: "Ancient temples, massive rock fortresses, and breathtaking natural landscapes of central Sri Lanka.",
    },
    {
        id: 5,
        title: "Tea Plantation Tour",
        location: "Nuwara Eliya",
        badge: "Experience",
        src: "https://youtube.com/shorts/dsyEb0SXjs8?si=FXpkvkSyCoNBesEC",
        thumbnail: "https://img.youtube.com/vi/dsyEb0SXjs8/hqdefault.jpg",
        description: "Journey through lush tea gardens, meet local tea pickers, and taste the world-famous Ceylon tea.",
    },
    {
        id: 6,
        title: "Sunset at Lighthouse",
        location: "Galle Fort",
        badge: "Romantic",
        src: "https://youtube.com/shorts/xqQvW5QEAIw?si=XBMl99VEQDGh3SwH",
        thumbnail: "https://img.youtube.com/vi/xqQvW5QEAIw/hqdefault.jpg",
        description: "Experience magical sunsets from the iconic lighthouse with champagne and ocean views.",
    },
    {
        id: 7,
        title: "Rowing Adventures",
        location: "A Sri Lankan village",
        badge: "Nature",
        src: "https://youtube.com/shorts/DHkAcCvxKqA?si=eBnhrbOfTnq_1Xc9",
        thumbnail: "https://img.youtube.com/vi/DHkAcCvxKqA/hqdefault.jpg",
        description: "The oruwa is more than a boat - it's a living piece of Sri Lankan heritage.",
    },
    {
        id: 8,
        title: "Sri Lankan Cinnamon Tea",
        location: "Madol Doova",
        badge: "Cultural",
        src: "https://youtube.com/shorts/5oyQkgnsrcs?si=xcpVB-SKdvKTMFm5",
        thumbnail: "https://img.youtube.com/vi/5oyQkgnsrcs/hqdefault.jpg",
        description: "Sri Lankan Cinnamon Tea, also known as Ceylon Cinnamon Tea, is a flavorful and health-focused beverage made from the inner bark of the cinnamon tree native to Sri Lanka.",
    },
    {
        id: 9,
        title: "A Cute Moment",
        location: "Kandy",
        badge: "Travel",
        src: "https://youtube.com/shorts/ISlGbWMoYfU?si=xA9aMEEhVnOWGNjp",
        thumbnail: "https://img.youtube.com/vi/ISlGbWMoYfU/hqdefault.jpg",
        description: "Sri Lanka offers many charming and memorable moments, especially during its scenic tours.",
    },
    {
        id: 10,
        title: "Surfing in Sri Lanka",
        location: "Weligama",
        badge: "Sports",
        src: "https://youtube.com/shorts/HoJxzN3Y3xQ?si=rtVbwCxaiJlMTrRS",
        thumbnail: "https://img.youtube.com/vi/HoJxzN3Y3xQ/hqdefault.jpg",
        description: "Sri Lanka is a year-round surfing destination with two distinct surf seasons, making it ideal for travelers at any time of year.",
    },
    {
        id: 11,
        title: "Perahara Festival in Sri Lanka",
        location: "Seenigama",
        badge: "Culture",
        src: "https://youtube.com/shorts/YqU6SJcPtNE?si=7wsH63BsMxPxAqiA",
        thumbnail: "https://img.youtube.com/vi/YqU6SJcPtNE/hqdefault.jpg",
        description: "Sri Lanka is a year-round surfing destination with two distinct surf seasons, making it ideal for travelers at any time of year.",
    },
    {
        id: 12,
        title: "The Ramboda Falls ",
        location: "Kothmale",
        badge: "Nature",
        src: "https://youtube.com/shorts/EFwJ1n7dUOY?si=PQC6RHVTX6nVlVcK",
        thumbnail: "https://img.youtube.com/vi/EFwJ1n7dUOY/hqdefault.jpg",
        description: "The Ramboda Falls is a majestic, multi-tiered waterfall located in the Central Highlands of Sri Lanka.",
    },
]

// Reviews Page Data
export const allReviews = [
    {
        id: 1,
        author: "Nagamani G",
        rating: 5,
        date: " 24 May 2025",
        title: "Sri Lanka trip",
        content: "An Unforgettable Sri Lankan Journey with Celon Visit Tours and Our Amazing Guide Budhhika! " +
            "Our recent trip to Sri Lanka was an absolute dream come true, and the credit goes entirely " +
            "to Celon Visit Tours and our exceptional tour guide, Budhhika. From start to finish, " +
            "the experience was flawlessly organized, deeply enriching, and incredibly enjoyable. " +
            "We traveled through some of Sri Lanka’s most beautiful and diverse locations—Pasikuda," +
            " Kandy, Nuwara Eliya, Bentota, and Colombo—and at every stop, Budhhika’s knowledge, " +
            "kindness, and professionalism elevated the entire journey. Our stay in Pasikuda was " +
            "the perfect beachside escape. The serene waters, soft sand, and peaceful atmosphere" +
            " offered a much-needed retreat. Budhhika ensured we had time to both relax and enjoy" +
            " optional activities, always checking in to make sure we were comfortable and happy. " +
            "In Kandy, we were immersed in the spiritual and cultural heart of Sri Lanka. Visiting" +
            " the Temple of the Tooth Relic was a moving experience, and Budhhika’s insights into the " +
            "history and traditions of the area made it all the more meaningful. " +
            "His passion for his country’s heritage was contagious. " +
            "Nuwara Eliya was a refreshing highlight, with its cooler " +
            "climate and lush landscapes. We loved the visit to the tea estates and factory," +
            " where we learned so much about Ceylon tea. Budhhika even arranged a scenic stop " +
            "for photos that turned out to be one of our favorite memories! Bentota offered " +
            "adventure and relaxation in perfect balance. From the river safari to the turtle" +
            " hatchery, every activity was thoughtfully planned, and Budhhika’s local connections " +
            "ensured we had the best possible experience without the touristy feel. Finally, Colombo provided a " +
            "wonderful conclusion to our trip. The city tour was both lively and insightful," +
            " with Budhhika showing us not just the main sights but also hidden gems that we " +
            "would have never discovered on our own. Throughout the entire trip, Budhhika was" +
            " more than a guide—he was a wonderful companion, always cheerful, respectful, and" +
            " incredibly knowledgeable. He went above and beyond to make sure we were safe," +
            " comfortable, and fully immersed in each experience. The vehicle was clean and" +
            " comfortable, and every hotel and activity was thoughtfully selected by Celon Visit Tours. " +
            "This was more than just a vacation—it was a deeply personal and unforgettable journey " +
            "through one of the most beautiful countries we’ve ever visited. If you are planning a" +
            " trip to Sri Lanka, we wholeheartedly recommend Celon Visit Tours—and if you’re lucky enough " +
            "to travel with Budhhika, you’re in for something truly special!",
        source: "TripAdvisor",
        sourceUrl: "https://www.tripadvisor.co.uk/ShowUserReviews-g297896-d27698089-r1008962650-Ceylon_Visit_Tours_Sri_Lanka-Galle_Galle_District_Southern_Province.html?m=19905",
        // country: "Switzerland",
        tripType: "Traveled with family",
        stayDate: "May 2025"
    },
    {
        id: 2,
        author: "Nadine L",
        rating: 5,
        date: " 5 December 2025",
        title: "Wonderful experience!",
        content: "Had a fantastic experience with Buddhi! Booked a " +
            "safari with him and both Buddhi and the driver went to so" +
            " much effort to make sure we saw as many animals as possible," +
            " never rushed us and only moved on when we were ready. We were so " +
            "impressed, we then booked an overnight trip to Sigiriya with Buddhi and" +
            " had another great experience - he was so helpful and friendly. Very comfortable new car too!",
        source: "TripAdvisor",
        sourceUrl: "https://www.tripadvisor.co.uk/ShowUserReviews-g297896-d27698089-r1041414503-Ceylon_Visit_Tours_Sri_Lanka-Galle_Galle_District_Southern_Province.html?m=19905",
        // country: "United Kingdom",
        tripType: "Travelled as a couple",
        stayDate: "December 2025"
    },
    {
        id: 3,
        author: "Abi S",
        rating: 5,
        date: " 31 July 2025",
        title: "The Kindest and Most Reliable Driver – Feels Like Family",
        content: "We had the absolute pleasure of traveling with Buddika," +
            " and we truly couldn’t have asked for a better driver and guide. " +
            "Our first trip with him was 2 years ago — it was an all-girls family trip, " +
            "and we felt completely safe, comfortable, and well taken care of throughout. In fact," +
            " we were his very first customers, and it's been heartwarming to see how he still " +
            "welcomes us so kindly every time we visit Galle. Buddika is always punctual, polite, " +
            "and incredibly kind. He goes above and beyond by recommending great places to visit and " +
            "ensuring everything runs smoothly. He’s very helpful, always ready with a warm smile, " +
            "and his vehicle is clean and well-maintained, making our journeys even more enjoyable. " +
            "Truly the best driver ever — we highly recommend Buddika to anyone visiting Sri Lanka." +
            " You’ll be in safe, friendly, and professional hands!",
        source: "TripAdvisor",
        sourceUrl: "https://www.tripadvisor.co.uk/ShowUserReviews-g297896-d27698089-r1021915250-Ceylon_Visit_Tours_Sri_Lanka-Galle_Galle_District_Southern_Province.html?m=19905",
        // country: "Australia",
        tripType: "Traveled with family",
        stayDate: "July 2025"
    },
    {
        id: 4,
        author: "Валерия Д",
        rating: 5,
        date: " 17 March 2025",
        title: "We are happy",
        content: "We spent 5 days in the company of the wonderful driver Buddhi. " +
            "He took into account all our wishes, suggested how to make the route " +
            "optimal and most interesting. Unobtrusively offered alternative options. " +
            "Cheerful, interesting, punctual. He answered all your questions. " +
            "The car has a comfortable temperature, pleasant music, very clean! You " +
            "can turn on your own music if you wish, but we liked the Buddhi's music." +
            " He gives advice and accompanies you to all locations. He gave our Mom a " +
            "surprise for her birthday! Decorated the car with balloons, turned on the music," +
            " presented a cake! We recommend using a driver when traveling to Sri Lanka, " +
            "as the road is not easy, the traffic is very heavy, and in fact it is difficult! " +
            "Buddhi has comfortable safe driving skills. It was a pity to break up! We became friends!",
        source: "TripAdvisor",
        sourceUrl: "https://www.tripadvisor.co.uk/ShowUserReviews-g297896-d27698089-r998623601-Ceylon_Visit_Tours_Sri_Lanka-Galle_Galle_District_Southern_Province.html?m=19905",
        // country: " United Kingdom",
        tripType: "Traveled with family",
        stayDate: "March 2025"
    },
    {
        id: 5,
        author: "Steve R",
        rating: 5,
        date: "12 November 2025",
        title: "Great Tour Company",
        content: "We had Ceylon Tours Buddi arrange two trips for us, " +
            "Yala Safari which we had a private vehicle tour and Whale watching in Mirrissa. " +
            "Was very flexible with times and dates with great prices. We even had to change a" +
            " date and this was no problem. Well organised and very punctual. Saw leopard, monkeys," +
            " elephants crocs etc on Safari. Would definitely recommended to use Ceylon Tours couldn’t " +
            "be more helpful",
        source: "TripAdvisor",
        sourceUrl: "https://www.tripadvisor.co.uk/ShowUserReviews-g297896-d27698089-r1038735339-Ceylon_Visit_Tours_Sri_Lanka-Galle_Galle_District_Southern_Province.html?m=19905",
        // country: "Canada",
        tripType: "Traveled with family",
        stayDate: " November 2025"
    }
];

// Gallery Page Data
export const galleryItems = [
    {
        id: 1,
        category: "Bandaranaike International Airport",
        src: images[19],
        alt: "Airport drop-off",
    },
    {
        id: 2,
        category: "Down South",
        src: images[7],
        alt: "Still Fishing",
    },
    {
        id: 3,
        category: "Nuwaraeliya",
        src: images[2],
        alt: "Tea Plantation",
    },
    {
        id: 4,
        category: "Down South",
        src: images[3],
        alt: "Group Tours",
    },
    {
        id: 5,
        category: "Yala",
        src: images[4],
        alt: "Wild Animal Safari",
    },
    {
        id: 6,
        category: "Down South",
        src: images[5],
        alt: "Tuk Tuk Ride",
    },
    {
        id: 7,
        category: "Nuawaraeliya",
        src: images[6],
        alt: "Tea Plantation",
    },
    {
        id: 8,
        category: "Kothmale",
        src: images[1],
        alt: "Ramboda Falls",
    },
    {
        id: 9,
        category: "Pinnawala",
        src: images[8],
        alt: "Elephant Riding",
    },  {
        id: 10,
        category: "Sigiriya",
        src: images[9],
        alt: "Pidurangala Rock",
    },  {
        id: 11,
        category: "Mountains",
        src: images[10],
        alt: "Madol Duwa Boat Safari",
    },  {
        id: 12,
        category: "Deniyaya ",
        src: images[11],
        alt: "Sinharaja Rain Forest",
    },  {
        id: 13,
        category: "Ella",
        src: images[12],
        alt: "Nine Arch Bridge",
    },  {
        id: 14,
        category: "Ella",
        src: images[13],
        alt: "Ella Rock",
    },  {
        id: 15,
        category: "Badulla",
        src: images[14],
        alt: "Upper Diyaluma Waterfalls",
    },  {
        id: 16,
        category: "Sigiriya",
        src: images[15],
        alt: "Sigiri Village Tour",
    },  {
        id: 17,
        category: "Dambulla",
        src: images[16],
        alt: "Sigiriya Rock",
    },  {
        id: 18,
        category: "Weligama",
        src: images[17],
        alt: "Weligama Beach",
    },  {
        id: 19,
        category: "Ella",
        src: images[18],
        alt: "Ravana Ella Waterfall",
    },  {
        id: 20,
        category: "Dewundara",
        src: images[0],
        alt: "Dewundara Lighthouse",
    },  {
        id: 21,
        category: "Yala",
        src: images[20],
        alt: "Wild Animal Safari",
    },  {
        id: 22,
        category: "Yala",
        src: images[21],
        alt: "Wild Animal Safari",
    },  {
        id: 23,
        category: "Sigiriya",
        src: images[22],
        alt: "Sigiriya Village Tour",
    },  {
        id: 24,
        category: "Ella",
        src: images[24],
        alt: "Train Tour",
    },
    {
        id: 25,
        category: "Sigiriya",
        src: images[23],
        alt: "Pidurangala Rock",
    },
    {
        id: 26,
        category: "Down South",
        src: images[25],
        alt: "Chilling With Coconut",
    },
    // {
    //     id: 26,
    //     category: "Mountains",
    //     src: images[25],
    //     alt: "Mountain peaks and valleys",
    // },  {
    //     id: 27,
    //     category: "Mountains",
    //     src: images[26],
    //     alt: "Mountain peaks and valleys",
    // },  {
    //     id: 28,
    //     category: "Mountains",
    //     src: images[27],
    //     alt: "Mountain peaks and valleys",
    // },
];

// Contact Page Data
export const contactInfo = [
    // {
    //     icon: Phone,
    //     title: "Phone",
    //     value: "+94 76 431 0628",
    //     detail: "Available 24/7",
    // },
    {
        icon: MessageCircle,
        title: "WhatsApp",
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
        value: "No 84/2, Havelock Rd, Galle, Sri Lanka",
        detail: "Visit us anytime",
    },
];

export const socialLinks = [
    {
        icon: Facebook,
        href: "https://www.facebook.com/share/1C8r22fs8y/?mibextid=wwXIfr",
        label: "Facebook",
        bgColor: "bg-[#166FE5]",
        hoverBg: "hover:bg-[#1877F2]",
        iconColor: "text-white"
    },
    {
        icon: Instagram,
        href: "https://www.instagram.com/ceylonvisittourssrilanka?igsh=MTJ0MjNtYTIweXlseA%3D%3D&utm_source=qr",
        label: "Instagram",
        bgColor: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
        hoverBg: "hover:opacity-90",
        iconColor: "text-white"
    },
    {
        icon: TiktokIcon,
        href: "https://www.tiktok.com/@ceylonvisittours?_r=1&_t=ZS-93dQ65dxUTH",
        label: "TikTok",
        bgColor: "bg-black",
        hoverBg: "hover:bg-gray-900",
        iconColor: "text-white"
    },
    {
        icon: Youtube,
        href: "https://youtube.com/@ceylonvisittours?si=v3X1aFEAW88jqcze",
        label: "YouTube",
        bgColor: "bg-[#CC0000]",
        hoverBg: "hover:bg-[#FF0000]",
        iconColor: "text-white"
    },
    {
        icon: GoogleIcon,
        href: "https://share.google/IrlqKkU39u7eX2QxY",
        label: "Google",
        bgColor: "bg-white",
        hoverBg: "hover:bg-white",
        iconColor: "text-white"
    },
    {
        icon: FaTripadvisor,
        href: "https://www.tripadvisor.co.uk/Attraction_Review-g297896-d27698089-Reviews-Ceylon_Visit_Tours_Sri_Lanka-Galle_Galle_District_Southern_Province.html",
        label: "TripAdvisor",
        bgColor: "bg-[#00AF87]",
        hoverBg: "hover:bg-[#00C494]",
        iconColor: "text-white"
    },
    {
        icon: FaWhatsapp,
        href: "https://wa.me/message/RUNTC5D42W2QI1",
        label: "WhatsApp",
        bgColor: "bg-[#1DA851]",
        hoverBg: "hover:bg-[#25D366]",
        iconColor: "text-white"
    },
    {
        icon: FaWeixin,
        href: "weixin://dl/chat?wxid_mdvgqxr7r9jr12",
        label: "WeChat",
        bgColor: "bg-[#06B056]",
        hoverBg: "hover:bg-[#07C160]",
        iconColor: "text-white"
    },
    {
        icon: Send,
        href: "https://t.me/ceylonvisittourssrilanka",
        label: "Telegram",
        bgColor: "bg-[#0077B8]",
        hoverBg: "hover:bg-[#0088CC]",
        iconColor: "text-white"
    },
    // {
    //   name: "LinkedIn",
    //   icon: Linkedin,
    //   href: "https://linkedin.com",
    //   color: "hover:bg-blue-700",
    // },
];