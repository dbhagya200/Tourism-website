import { useState } from "react";
import { Play, MapPin, X } from "lucide-react";
import { Link } from "react-router-dom";
import { reels} from "../../../GlobalData.ts";

export function TravelReels() {
    const [selectedReel, setSelectedReel] = useState<number | null>(null);
    return (
        <main className="bg-slate-900 pt-24 min-h-screen">
            {/* Header */}
            <section className="px-8 py-16 bg-gradient-to-b from-slate-800 to-slate-900">
                <div className="max-w-7xl mx-auto text-center">
                    {/* CHANGED: font-display -> font-serif to match your project font */}
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 font-serif">
                        Sri Lanka Travel Shorts
                    </h1>
                    <p className="text-slate-300/80 text-lg max-w-2xl mx-auto">
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
                                className="text-white/60 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
                                aria-label="Close"
                            >
                                <X size={24} />
                            </button>
                        </div>

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
                        <div className="mt-6 bg-slate-800/50 p-6 rounded-xl border border-white/10 backdrop-blur-md">
                            <h2 className="text-2xl font-bold text-white mb-2 font-serif">
                                {reels[selectedReel].title}
                            </h2>
                            <div className="flex items-center gap-2 text-slate-300/80 mb-4">
                                <MapPin size={16} className="text-teal-400" />
                                {reels[selectedReel].location}
                            </div>
                            <p className="text-slate-300/80 leading-relaxed">
                                {reels[selectedReel].description}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Reels Grid */}
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {reels.map((reel, idx) => (
                            <div
                                key={reel.id}
                                className="rounded-2xl overflow-hidden border border-white/10 hover:border-teal-400/50 transition-all duration-300 bg-slate-800/50 group cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-400/10"
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="w-14 h-14 bg-teal-400/90 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-all duration-300">
                                            <Play size={20} className="text-slate-900 ml-1" fill="currentColor" />
                                        </div>
                                    </div>

                                    <div className="absolute top-3 right-3">
                    <span className="bg-black/60 backdrop-blur-md border border-white/10 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {reel.badge}
                    </span>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="font-bold text-white mb-1 text-lg leading-tight">
                                            {reel.title}
                                        </h3>
                                        <div className="flex items-center gap-1.5 text-teal-400 text-xs font-medium">
                                            <MapPin size={12} />
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
            <section className="py-20 px-8 bg-slate-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6 font-serif">
                        Inspired? Let's Plan Your Adventure
                    </h2>
                    <p className="text-slate-300/80 text-lg mb-8">
                        These destinations and experiences can be customized for your
                        perfect trip. Contact us to start planning.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-teal-400 text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-teal-400/30"
                    >
                        Book Your Experience
                    </Link>
                </div>
            </section>
        </main>
    );
}