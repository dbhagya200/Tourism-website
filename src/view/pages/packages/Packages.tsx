import { Star, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

// CHANGED: Named export to match your App.tsx structure
export function Packages() {
    // Dynamic packages array
    const packages = [
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

    return (
        <main className="bg-slate-900 pt-24 min-h-screen">
            {/* Header Section */}
            <section className="px-8 py-16 bg-gradient-to-b from-slate-800 to-slate-900">
                <div className="max-w-7xl mx-auto text-center">
                    {/* CHANGED: font-display to font-serif to match your project font */}
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 font-serif">
                        Sri Lanka Holiday Packages
                    </h1>
                    <p className="text-slate-300/80 text-lg max-w-2xl mx-auto">
                        Carefully curated travel experiences to suit every adventurer.
                        Choose your perfect getaway below.
                    </p>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packages.map((pkg, idx) => (
                            <div
                                key={pkg.id}
                                className="rounded-3xl overflow-hidden bg-slate-800/50 border border-white/10 hover:border-teal-400/50 transition-all duration-300 group flex flex-col hover:-translate-y-2"
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                                    <div className="absolute top-4 right-4 bg-teal-400 text-slate-900 px-4 py-1.5 rounded-full font-bold text-sm shadow-lg">
                                        ${pkg.price}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2 font-serif">
                                        {pkg.name}
                                    </h3>

                                    <div className="flex items-center gap-4 text-sm text-slate-300/80 mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={16} className="text-teal-400" />
                                            {pkg.location}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={16} className="text-teal-400" />
                                            {pkg.duration}
                                        </div>
                                    </div>

                                    <p className="text-slate-300/80 text-sm mb-6 leading-relaxed">
                                        {pkg.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="mb-6 flex-1 bg-white/5 p-4 rounded-xl border border-white/5">
                                        <p className="font-semibold text-white text-xs uppercase tracking-wider mb-3 text-teal-400">
                                            Package Highlights
                                        </p>
                                        <ul className="space-y-2">
                                            {pkg.highlights.map((highlight, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-slate-300 text-sm flex items-start gap-2"
                                                >
                                                    <span className="text-teal-400 font-bold text-lg leading-none">•</span>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Rating & Reviews */}
                                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                                        <div className="flex items-center gap-2">
                                            <div className="flex gap-0.5">
                                                {[...Array(Math.round(pkg.rating))].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={16}
                                                        className="fill-amber-400 text-amber-400"
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-slate-400 text-xs ml-1">
                        ({pkg.reviews} reviews)
                      </span>
                                        </div>
                                    </div>

                                    {/* Price and CTA */}
                                    <div className="flex items-center justify-between mt-auto">
                                        <div>
                                            <p className="text-slate-400 text-xs">Total price per person</p>
                                            <p className="text-white font-bold text-xl">
                                                ${pkg.price}
                                            </p>
                                        </div>
                                        <Link
                                            to="/contact"
                                            className="bg-teal-400 text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-white transition-colors duration-300 shadow-[0_0_15px_rgba(45,212,191,0.2)]"
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-8 bg-slate-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-12 font-serif">
                        Why Choose Ceylon Vista Tours?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Expert Local Guides",
                                desc: "Experienced guides with deep knowledge of Sri Lanka's hidden gems.",
                            },
                            {
                                title: "Luxury Accommodations",
                                desc: "Handpicked hotels and resorts ensuring ultimate comfort and elegance.",
                            },
                            {
                                title: "Customizable Itineraries",
                                desc: "Tailor-made packages to match your interests and travel style.",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-teal-400/50 transition-colors" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <h3 className="text-xl font-bold text-teal-400 mb-3">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-8">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-teal-900/20 to-slate-900/40 p-10 rounded-3xl border border-teal-500/20">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6 font-serif">
                        Not Sure Which Package Is Right for You?
                    </h2>
                    <p className="text-slate-300 text-lg mb-8">
                        Our travel experts are here to help. Contact us for personalized
                        recommendations.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-teal-400 text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-teal-400/30"
                    >
                        Get Free Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}