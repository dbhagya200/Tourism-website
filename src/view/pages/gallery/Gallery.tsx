import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const galleryItems = [
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

    const categories = ["All", ...new Set(galleryItems.map((item) => item.category))];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredItems =
        selectedCategory === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.category === selectedCategory);

    return (
        <main className="bg-slate-900 pt-24 min-h-screen">
            {/* Header */}
            <section className="px-8 py-16 bg-gradient-to-b from-slate-800 to-slate-900">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 font-serif">
                        Sri Lanka Destination Gallery
                    </h1>
                    <p className="text-slate-300/80 text-lg">
                        Explore the stunning beauty of our travel destinations
                    </p>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-5xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
                            aria-label="Close"
                        >
                            <X size={32} />
                        </button>
                        <img
                            src={filteredItems[selectedImage].src}
                            alt={filteredItems[selectedImage].alt}
                            className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                        />
                        <div className="mt-4 text-center">
                            <p className="text-white text-xl font-serif tracking-wide">
                                {filteredItems[selectedImage].alt}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Category Filter */}
            <section className="py-12 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                                    selectedCategory === cat
                                        ? "bg-teal-400 text-slate-900 shadow-lg shadow-teal-400/30"
                                        : "bg-white/5 text-slate-100 border border-white/10 hover:border-teal-400/50"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="pb-20 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                        {filteredItems.map((item, idx) => (
                            <div
                                key={item.id}
                                className={`relative rounded-2xl overflow-hidden cursor-pointer group border border-white/10 hover:border-teal-400/50 transition-all duration-300 ${
                                    (idx === 0 || idx === 4) && selectedCategory === 'All' ? "sm:col-span-2 lg:row-span-2 auto-rows-[600px]" : ""
                                }`}
                                onClick={() => setSelectedImage(idx)}
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div>
                                        <p className="text-white font-semibold text-lg">{item.alt}</p>
                                        <p className="text-teal-400 text-sm font-medium uppercase tracking-wider">{item.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-8 bg-slate-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
                        {[
                            { number: "500+", label: "Destination Photos" },
                            { number: "50+", label: "Beautiful Locations" },
                            { number: "1000+", label: "Moments Captured" },
                        ].map((item, idx) => (
                            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                                <p className="text-5xl font-black text-teal-400 mb-2 font-serif">
                                    {item.number}
                                </p>
                                <p className="text-slate-400 uppercase tracking-widest text-sm">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <h3 className="text-2xl text-white font-serif mb-6">Ready to see it in person?</h3>
                        <Link
                            to="/contact"
                            className="inline-block bg-teal-400 text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(45,212,191,0.3)]"
                        >
                            Start Your Journey
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}