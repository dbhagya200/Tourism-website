import { useState } from "react";
import { Play, MapPin, X } from "lucide-react";
import { Link } from "react-router-dom";
import { reels } from "../../../GlobalData.ts";

export function TravelReels() {
    const [selectedReel, setSelectedReel] = useState<number | null>(null);

    return (
        // THEME: Light background for the main content
        <main className="min-h-screen font-sans text-slate-800 bg-white">

            {/* Header / Hero Section with Background Image */}
            <section
                className="relative h-[100vh] flex items-center justify-center bg-cover bg-center bg-fixed"
                style={{
                    // Nine Arches Bridge / Train Image
                    backgroundImage: "url('https://www.lovesrilanka.org/wp-content/uploads/2019/09/key-destinations_1920x700-3.jpg')"
                }}
            >
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-slate-900/40"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10 px-8 mt-16">
                    <p className="text-sky-300 font-bold uppercase tracking-wider mb-3 text-sm drop-shadow-md">
                        Cinematic Journeys
                    </p>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 font-serif drop-shadow-xl">
                        Sri Lanka <span className="text-sky-400">Travel Shorts</span>
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md font-medium">
                        Catch a glimpse of paradise through our lenses. These short videos
                        showcase the best moments from our amazing travels.
                    </p>
                </div>
            </section>

            {/* Modal for selected reel */}
            {selectedReel !== null && (
                <div
                    className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedReel(null)}
                >
                    <div
                        className="w-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-end mb-4">
                            <button
                                onClick={() => setSelectedReel(null)}
                                className="text-white/80 hover:text-white transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full"
                                aria-label="Close"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Video Player */}
                        <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
                            <iframe
                                src={`${reels[selectedReel].src}&autoplay=1`}
                                title={reels[selectedReel].title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>

                        {/* Video Details (Updated to Light Theme inside Modal) */}
                        <div className="mt-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-xl">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2 font-serif">
                                {reels[selectedReel].title}
                            </h2>
                            <div className="flex items-center gap-2 text-slate-500 mb-4 text-sm font-medium">
                                <MapPin size={16} className="text-sky-500" />
                                {reels[selectedReel].location}
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                {reels[selectedReel].description}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Reels Grid */}
            <section className="py-20 px-8 bg-gradient-to-b from-white via-sky-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reels.map((reel, idx) => (
                            <div
                                key={reel.id}
                                // CARD THEME: White glass card with hover lift
                                className="rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-sky-200/50 transition-all duration-300 group cursor-pointer hover:-translate-y-2"
                                onClick={() => setSelectedReel(idx)}
                                data-aos="fade-up"
                                data-aos-delay={idx * 50}
                            >
                                <div className="relative aspect-[9/16] overflow-hidden">
                                    <img
                                        src={reel.thumbnail}
                                        alt={reel.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Gradient overlay for text readability at bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                    {/* Play Button Overlay (Orange/Sky Contrast) */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-all duration-300 border border-white/40">
                                            <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center shadow-lg">
                                                <Play size={20} className="ml-1" fill="currentColor" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                            {reel.badge}
                                        </span>
                                    </div>

                                    {/* Card Text */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="font-bold text-white mb-2 text-xl leading-tight font-serif drop-shadow-sm">
                                            {reel.title}
                                        </h3>
                                        <div className="flex items-center gap-1.5 text-sky-300 text-xs font-bold uppercase tracking-wide">
                                            <MapPin size={14} />
                                            {reel.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-8">
                {/* Blue Gradient CTA Box */}
                <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-sky-500 to-blue-600 p-12 rounded-[3rem] shadow-2xl shadow-sky-500/30 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-serif relative z-10">
                        Inspired? Let's Plan Your Adventure
                    </h2>
                    <p className="text-sky-100 text-lg mb-10 relative z-10 max-w-2xl mx-auto font-medium">
                        These destinations and experiences can be customized for your
                        perfect trip. Contact us to start planning.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg relative z-10 hover:shadow-xl"
                    >
                        Book Your Experience
                    </Link>
                </div>
            </section>
        </main>
    );
}