import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryItems } from "../../../GlobalData.ts";

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [selectedCategory] = useState("All");

    const filteredItems =
        selectedCategory === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.category === selectedCategory);

    // Handle keyboard navigation - FIXED VERSION
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImage === null) return;

            switch (e.key) {
                case "Escape":
                    setSelectedImage(null);
                    document.body.style.overflow = 'auto';
                    break;
                case "ArrowLeft":
                    // Move to previous image
                    if (selectedImage > 0) {
                        setSelectedImage(selectedImage - 1);
                    }
                    break;
                case "ArrowRight":
                    // Move to next image
                    if (selectedImage < filteredItems.length - 1) {
                        setSelectedImage(selectedImage + 1);
                    }
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage, filteredItems.length]);

    const navigateImage = (direction: number) => {
        if (selectedImage === null) return;

        const newIndex = selectedImage + direction;
        if (newIndex >= 0 && newIndex < filteredItems.length) {
            setSelectedImage(newIndex);
        }
    };

    const goToPrevious = () => navigateImage(-1);
    const goToNext = () => navigateImage(1);

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <main className="min-h-screen font-sans text-slate-800 bg-white">
            {/* Header / Hero Section */}
            <section
                className="relative h-[100vh] flex items-center justify-center bg-cover bg-center bg-fixed mb-12"
                style={{
                    backgroundImage: "url('https://www.lovesrilanka.org/wp-content/uploads/2019/09/key-destinations_1920x700-2.jpg')"
                }}
            >
                <div className="absolute inset-0 bg-slate-900/40"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10 px-8 mt-16" data-aos="zoom-out">
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
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Top Right Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/80 hover:text-white transition-colors p-3 bg-black/50 hover:bg-black/70 rounded-full z-50"
                            aria-label="Close"
                        >
                            <X size={28} />
                        </button>

                        {/* Navigation Buttons */}
                        {selectedImage > 0 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToPrevious();
                                }}
                                className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-50"
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={28} />
                            </button>
                        )}

                        {selectedImage < filteredItems.length - 1 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToNext();
                                }}
                                className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-50"
                                aria-label="Next image"
                            >
                                <ChevronRight size={28} />
                            </button>
                        )}

                        {/* Image Container - Centered */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Close Icon on Image (Bottom Center) */}
                            <button
                                onClick={closeModal}
                                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors p-4 bg-black/50 hover:bg-black/70 rounded-full z-50 flex items-center gap-2"
                                aria-label="Close image"
                            >
                                <X size={24} />
                                <span className="text-sm font-medium">Close</span>
                            </button>

                            {/* Image - Centered */}
                            <img
                                src={filteredItems[selectedImage].src as string}
                                alt={filteredItems[selectedImage].alt}
                                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10 animate-fadeIn"
                            />
                        </div>

                        {/* Counter & Caption - Fixed at Bottom */}
                        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                {/* Image Counter */}
                                <div className="text-white/70 text-sm bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                                    {selectedImage + 1} / {filteredItems.length}
                                </div>

                                {/* Caption */}
                                <div className="text-center bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
                                    <p className="text-white text-lg font-serif tracking-wide">
                                        {filteredItems[selectedImage].alt}
                                    </p>
                                    <p className="text-sky-400 text-xs uppercase tracking-widest font-bold mt-1">
                                        {filteredItems[selectedImage].category}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Gallery Grid */}
            <section className="pb-20 px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                        {filteredItems.map((item, idx) => (
                            <div
                                key={item.id}
                                className={`relative rounded-3xl overflow-hidden cursor-pointer group border border-slate-100 shadow-md hover:shadow-xl hover:shadow-sky-200/50 transition-all duration-500 ${
                                    (idx === 0 || idx === 4) && selectedCategory === 'All'
                                        ? "sm:col-span-2 lg:row-span-2 auto-rows-[600px]"
                                        : ""
                                }`}
                                onClick={() => {
                                    setSelectedImage(idx);
                                    document.body.style.overflow = 'hidden';
                                }}
                                data-aos="fade-up"
                            >
                                <img
                                    src={item.src as string}
                                    alt={item.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Overlay */}
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

            {/* CTA Section */}
            <section className="py-20 px-8 bg-sky-50 border-t border-sky-100">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-4xl mx-auto text-center bg-white p-12 rounded-[3rem] shadow-xl shadow-sky-200/50 border border-sky-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

                        <h3 className="text-3xl font-black text-slate-900 font-serif mb-6 relative z-10">
                            Ready to see it in person?
                        </h3>
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