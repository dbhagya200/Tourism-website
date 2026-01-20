import { Star, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { packages } from "../../../GlobalData.ts";

export function Packages() {
    return (
        // FIX 1: Removed 'pt-24'. Now the content starts at the very top of the screen (behind the navbar).
        <main className="min-h-screen font-sans text-slate-800 bg-white">

            {/* Header / Hero Section */}
            {/* FIX 2: Added specific height (h-[60vh]), background image, and overlay */}
            <section
                className="relative h-[100vh] flex items-center justify-center bg-cover bg-center bg-fixed"
                style={{
                    // Sigiriya / Sri Lanka Nature Image
                    backgroundImage: "url('https://www.lovesrilanka.org/wp-content/uploads/2019/09/key-destinations_1920x700-10.jpg')"
                }}
            >
                {/* Dark Overlay: Ensures text is readable and Navbar text (White) pops */}
                <div className="absolute inset-0 bg-slate-900/50"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10 px-4 mt-20">
                    <p className="text-sky-300 font-bold uppercase tracking-wider mb-3 text-sm drop-shadow-md">
                        Explore the Island
                    </p>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-serif drop-shadow-xl">
                        Sri Lanka Holiday <span className="text-sky-400">Packages</span>
                    </h1>
                    <p className="text-slate-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
                        Carefully curated travel experiences to suit every adventurer.
                        Choose your perfect getaway below.
                    </p>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-20 px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {packages.map((pkg, idx) => (
                            <div
                                key={pkg.id}
                                className="rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-sky-200/50 hover:-translate-y-2 transition-all duration-300 group flex flex-col"
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                {/* Image */}
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-blue-600 px-4 py-1.5 rounded-full font-bold text-sm shadow-sm">
                                        ${pkg.price}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-1">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif group-hover:text-sky-600 transition-colors">
                                        {pkg.name}
                                    </h3>

                                    <div className="flex items-center gap-5 text-sm text-slate-500 mb-6 border-b border-slate-100 pb-4">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={16} className="text-sky-500" />
                                            {pkg.location}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={16} className="text-sky-500" />
                                            {pkg.duration}
                                        </div>
                                    </div>

                                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                        {pkg.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="mb-6 flex-1 bg-sky-50/50 p-5 rounded-2xl border border-sky-100/50">
                                        <p className="font-bold text-sky-600 text-xs uppercase tracking-wider mb-3">
                                            Package Highlights
                                        </p>
                                        <ul className="space-y-2">
                                            {pkg.highlights.map((highlight, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-slate-600 text-sm flex items-start gap-2"
                                                >
                                                    <span className="text-sky-400 font-bold text-lg leading-none mt-[-2px]">•</span>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center justify-between mb-6 pb-2">
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
                                            <span className="text-slate-400 text-xs ml-1 font-medium">
                                                ({pkg.reviews} reviews)
                                            </span>
                                        </div>
                                    </div>

                                    {/* Price and CTA */}
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                                        <div>
                                            <p className="text-slate-400 text-[10px] uppercase tracking-wide font-bold">Per person</p>
                                            <p className="text-slate-900 font-black text-2xl">
                                                ${pkg.price}
                                            </p>
                                        </div>
                                        <Link
                                            to="/contact"
                                            className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-8 py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-sky-500/30 hover:scale-105 transition-all duration-300"
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
            <section className="py-20 px-8 bg-sky-50 border-t border-sky-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12 font-serif">
                        Why Choose <span className="text-sky-500">Ceylon Vista?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Expert Local Guides",
                                desc: "Experienced guides with deep knowledge of Sri Lanka's hidden gems.",
                                icon: "🗺️"
                            },
                            {
                                title: "Luxury Accommodations",
                                desc: "Handpicked hotels and resorts ensuring ultimate comfort and elegance.",
                                icon: "🏨"
                            },
                            {
                                title: "Customizable Itineraries",
                                desc: "Tailor-made packages to match your interests and travel style.",
                                icon: "✨"
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="p-8 bg-white border border-slate-100 shadow-lg shadow-slate-200/50 rounded-3xl hover:-translate-y-2 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-8 bg-white">
                <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-sky-500 to-blue-600 p-12 rounded-[3rem] shadow-2xl shadow-sky-500/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6 font-serif relative z-10">
                        Not Sure Which Package Is Right?
                    </h2>
                    <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                        Our travel experts are here to help. Contact us for personalized
                        recommendations tailored to your budget and interests.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg relative z-10"
                    >
                        Get Free Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}