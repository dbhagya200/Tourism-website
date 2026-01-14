import { Link } from "react-router-dom";
import { Play, ArrowRight, Star, MapPin, Eye } from "lucide-react";
import '../../../GlobalData'
import {featuredPackages, featuredReviews} from "../../../GlobalData.ts";

export function Home() {
    return (
        <main className="bg-slate-900 text-slate-100 font-sans">
            {/* --- Hero Section --- */}
            <section
                className="relative h-screen flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('https://images.pexels.com/photos/29644512/pexels-photo-29644512.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="text-center z-10 px-4 mt-20" data-aos="zoom-out">
                    <p className="text-white/90 text-lg font-semibold mb-4 tracking-wider uppercase">
                        Sri Lanka's Most Premium Agency
                    </p>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-6 leading-tight font-serif">
                        Discover Local <br />
                        <span className="text-teal-400">Paradise</span>
                    </h1>
                    <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Experience the ultimate luxury travel in Sri Lanka. From mountains
                        to beaches, we plan it all.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/reels"
                            className="bg-teal-400 text-slate-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] flex items-center justify-center gap-2"
                        >
                            <Play size={20} fill="currentColor" />
                            Watch Stories
                        </Link>
                        <Link
                            to="/packages"
                            className="border-2 border-white/20 text-white backdrop-blur-sm px-8 py-4 rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all duration-300"
                        >
                            Explore Packages
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- Reels Teaser Section --- */}
            <section className="py-16 px-6 md:px-12 bg-slate-800  border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 max-w-7xl mx-auto">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">Travel Shorts</h2>
                        <p className="text-sm text-slate-400">Quick glimpses of paradise</p>
                    </div>
                    {/* Desktop View All Link */}
                    <Link to="/reels" className="hidden md:flex items-center gap-2 text-sm text-teal-400 font-semibold hover:text-white transition-colors">
                        View All Shorts <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Grid changed to 4 columns for smaller cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
                    {/* Added one more reel to fill the row */}
                    {[
                        { id: 1, title: "Ella Views", url: "https://www.youtube.com/embed/pSj7jS9XNn0" },
                        { id: 2, title: "Mirissa", url: "https://www.youtube.com/embed/j_N8YgK8Vyo" },
                        { id: 3, title: "Safari", url: "https://www.youtube.com/embed/S_vTOnY_F_M" },
                        { id: 4, title: "Nature", url: "https://www.youtube.com/embed/0SNoX_eF_L8" },
                    ].map((reel) => (
                        <div key={reel.id} className="relative aspect-[9/16] rounded-xl overflow-hidden group border border-white/10 shadow-lg" data-aos="zoom-in">
                            <iframe
                                src={`${reel.url}?controls=0&modestbranding=1&rel=0&loop=1&mute=1&autoplay=0`}
                                title={reel.title}
                                className="w-full h-full object-cover pointer-events-none"
                            />
                            {/* Dark Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>

                            {/* Compact Play Button (Appears on Hover) */}
                            <Link to="/reels" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center text-slate-900 shadow-lg transform scale-50 group-hover:scale-100 transition-transform">
                                    <Play size={16} fill="currentColor" />
                                </div>
                            </Link>

                            {/* Small Title Badge */}
                            <div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="block text-center text-xs font-bold text-white bg-black/50 backdrop-blur-md py-1 rounded-full border border-white/10">
                                    {reel.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-8 text-center md:hidden">
                    <Link to="/reels" className="inline-flex items-center gap-2 text-sm text-teal-400 font-bold uppercase tracking-wider">
                        View Gallery <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* --- Packages Teaser Section --- */}
            <section className="py-20 px-6 md:px-12 bg-slate-800">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Popular Destinations</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Our most booked luxury experiences tailored for comfort and adventure.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {featuredPackages.map((pkg, idx) => (
                        <div key={pkg.id} className="bg-slate-900 rounded-3xl overflow-hidden border border-white/5 hover:border-teal-400/50 transition-all duration-300 flex flex-col" data-aos="fade-up" data-aos-delay={idx * 100}>
                            <div className="h-64 overflow-hidden relative">
                                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold text-teal-400">
                                    {pkg.duration}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 font-serif">{pkg.title}</h3>
                                <div className="mt-auto">
                                    <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Starting from</p>
                                    <div className="flex justify-between items-end">
                                        <p className="text-2xl font-bold text-white">{pkg.price}</p>
                                        <Link
                                            to="/packages"
                                            className="bg-teal-400 text-slate-900 px-5 py-2 rounded-lg font-bold text-sm hover:bg-white transition-colors flex items-center gap-2"
                                        >
                                            View Details <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/packages" className="inline-flex items-center gap-2 border border-teal-400 text-teal-400 px-8 py-3 rounded-full hover:bg-teal-400 hover:text-slate-900 transition-colors font-bold uppercase tracking-wider text-sm">
                        Explore All Packages
                    </Link>
                </div>
            </section>

            {/* --- Reviews Teaser Section --- */}
            <section className="py-20 px-6 md:px-12 bg-slate-800 relative overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Loved by Travelers <br /><span className="text-teal-400">Worldwide</span></h2>
                        <p className="text-slate-400 mb-8 text-lg">Don't just take our word for it. Read verified reviews from guests who have experienced the magic of Ceylon Vista.</p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/reviews" className="inline-flex justify-center items-center gap-2 bg-teal-500 text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-white transition-colors">
                                Read All Stories <ArrowRight size={18} />
                            </Link>
                            <div className="inline-flex justify-center items-center gap-2 bg-slate-800 px-6 py-3 rounded-xl border border-white/10">
                                <Star size={18} className="text-yellow-400" fill="currentColor" />
                                <span className="font-semibold">4.9/5 Rating</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {featuredReviews.map((review) => (
                            <div key={review.id} className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-teal-400/30 transition-colors" data-aos="fade-up">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex gap-1 text-yellow-400">
                                        {[...Array(review.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                    </div>
                                </div>
                                <p className="text-slate-200 italic mb-4">"{review.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-teal-400 flex items-center justify-center font-bold text-slate-900 text-xs">
                                        {review.name.charAt(0)}
                                    </div>
                                    <span className="text-sm font-bold text-slate-300">{review.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Gallery Teaser Section --- */}
            <section className="py-20 px-6 md:px-12 bg-slate-800 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Captured Moments</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto h-96 mb-10">
                    <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
                        <img src="https://images.unsplash.com/photo-1529230117010-335661a5b89a?auto=format&fit=crop&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Sri Lanka 1" />
                    </div>
                    <div className="rounded-2xl overflow-hidden relative group">
                        <img src="https://images.unsplash.com/photo-1552423158-efc54b6df1e1?auto=format&fit=crop&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Sri Lanka 2" />
                    </div>
                    <div className="rounded-2xl overflow-hidden relative group">
                        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Sri Lanka 3" />
                    </div>
                    <div className="col-span-2 rounded-2xl overflow-hidden relative group flex items-center justify-center bg-slate-700">
                        <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=600" className="w-full h-full object-cover opacity-60" alt="Sri Lanka 4" />
                        <Link to="/gallery" className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 hover:bg-black/40 transition-colors z-10 group">
                            <div className="bg-white/10 backdrop-blur-md border border-white/30 p-4 rounded-full mb-2 group-hover:scale-110 transition-transform">
                                <Eye size={32} className="text-white" />
                            </div>
                            <span className="text-white font-bold text-lg">View Full Gallery</span>
                        </Link>
                    </div>
                </div>

                <Link to="/gallery" className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-3 rounded-full hover:bg-teal-400 hover:text-slate-900 transition-colors font-bold">
                    Visit Gallery Page <ArrowRight size={18} />
                </Link>
            </section>

            {/* --- Contact CTA --- */}
            <section className="py-24 px-6 md:px-12 bg-slate-800">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-teal-500 to-emerald-600 rounded-[3rem] p-10 md:p-16 text-center text-white shadow-[0_20px_50px_rgba(20,184,166,0.3)]" data-aos="zoom-in">
                    <h2 className="text-3xl md:text-5xl font-serif font-black mb-6">Ready for your Dream Vacation?</h2>
                    <p className="text-lg md:text-xl text-teal-50 max-w-2xl mx-auto mb-10">
                        Let us handle the details while you create the memories. Custom itineraries tailored just for you.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all">
                        <MapPin size={22} />
                        Plan My Trip
                    </Link>
                </div>
            </section>
        </main>
    );
}