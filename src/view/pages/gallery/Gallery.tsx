import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryItems } from "../../../GlobalData.ts";

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const categories = ["All", ...new Set(galleryItems.map((item) => item.category))];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredItems =
        selectedCategory === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.category === selectedCategory);

    return (
        // THEME: Light Background, removed pt-24 to fix navbar transparency
        <main className="min-h-screen font-sans text-slate-800 bg-white">

            {/* Header / Hero Section */}
            <section
                className="relative h-[100vh] flex items-center justify-center bg-cover bg-center bg-fixed"
                style={{
                    // Scenic Sri Lanka Beach/Nature Image
                    backgroundImage: "url('https://www.lovesrilanka.org/wp-content/uploads/2019/09/key-destinations_1920x700-2.jpg')"
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/40"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10 px-8 mt-16">
                    <p className="text-sky-300 font-bold uppercase tracking-wider mb-3 text-sm drop-shadow-md">
                        Visual Journey
                    </p>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 font-serif drop-shadow-xl">
                        Destination <span className="text-sky-400">Gallery</span>
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md font-medium">
                        Explore the stunning beauty of our travel destinations through our lens.
                    </p>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-6xl w-full flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 md:right-[-2rem] text-white/70 hover:text-white transition-colors p-2"
                            aria-label="Close"
                        >
                            <X size={36} />
                        </button>

                        {/* Image */}
                        <img
                            src={filteredItems[selectedImage].src}
                            alt={filteredItems[selectedImage].alt}
                            className="w-auto h-auto max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                        />

                        {/* Caption */}
                        <div className="mt-4 text-center bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                            <p className="text-white text-lg font-serif tracking-wide">
                                {filteredItems[selectedImage].alt}
                            </p>
                            <p className="text-sky-400 text-xs uppercase tracking-widest font-bold mt-1">
                                {filteredItems[selectedImage].category}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Category Filter */}
            <section className="py-12 px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 text-sm ${
                                    selectedCategory === cat
                                        // Active: Blue Gradient
                                        ? "bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-lg shadow-sky-500/30 scale-105"
                                        // Inactive: White with Slate text
                                        : "bg-white text-slate-500 border border-slate-200 hover:border-sky-400 hover:text-sky-500 hover:shadow-md"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="pb-20 px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Masonry-style grid effect */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                        {filteredItems.map((item, idx) => (
                            <div
                                key={item.id}
                                className={`relative rounded-3xl overflow-hidden cursor-pointer group border border-slate-100 shadow-md hover:shadow-xl hover:shadow-sky-200/50 transition-all duration-500 ${
                                    // Make first and 5th item larger for visual interest if showing 'All'
                                    (idx === 0 || idx === 4) && selectedCategory === 'All' ? "sm:col-span-2 lg:row-span-2 auto-rows-[600px]" : ""
                                }`}
                                onClick={() => setSelectedImage(idx)}
                                data-aos="fade-up"
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Overlay: Dark Blue/Black Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-white font-bold text-xl font-serif mb-1">{item.alt}</p>
                                        <div className="flex items-center gap-2">
                                            <span className="w-8 h-0.5 bg-sky-400 rounded-full"></span>
                                            <p className="text-sky-300 text-xs font-bold uppercase tracking-widest">{item.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-8 bg-sky-50 border-t border-sky-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
                        {[
                            { number: "500+", label: "Destination Photos" },
                            { number: "50+", label: "Beautiful Locations" },
                            { number: "1000+", label: "Moments Captured" },
                        ].map((item, idx) => (
                            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} className="p-6">
                                <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 mb-4 font-serif">
                                    {item.number}
                                </p>
                                <p className="text-slate-500 uppercase tracking-widest font-bold text-sm">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Box */}
                    <div className="max-w-4xl mx-auto text-center bg-white p-12 rounded-[3rem] shadow-xl shadow-sky-200/50 border border-sky-100 relative overflow-hidden">
                        {/* Decorative blobs */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

                        <h3 className="text-3xl font-black text-slate-900 font-serif mb-6 relative z-10">Ready to see it in person?</h3>
                        <Link
                            to="/contact"
                            className="inline-block bg-gradient-to-r from-sky-400 to-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-sky-500/40 relative z-10"
                        >
                            Start Your Journey
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}