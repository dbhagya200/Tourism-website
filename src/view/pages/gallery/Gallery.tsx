import { useState, useEffect } from "react";
import { X, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryItems } from "../../../GlobalData.ts";

// Define proper type for gallery items
interface GalleryItem {
    id: number;
    src: string;
    alt: string;
    category: string;
    optimizedSrc?: string;
}

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [loadingImages, setLoadingImages] = useState<Record<number, boolean>>({});
    const [optimizedGalleryItems, setOptimizedGalleryItems] = useState<GalleryItem[]>([]);
    // const categories = ["All", ...new Set(galleryItems.map((item) => item.category))];
    const [selectedCategory] = useState("All");

    const filteredItems =
        selectedCategory === "All"
            ? optimizedGalleryItems
            : optimizedGalleryItems.filter((item) => item.category === selectedCategory);

    // Function to extract Google Drive file ID from URL
    const extractFileId = (url: string): string | null => {
        // Try different Google Drive URL patterns

        // Pattern 1: https://drive.google.com/file/d/FILE_ID/view
        const match1 = url.match(/\/file\/d\/([^\/\?]+)/);
        if (match1) return match1[1];

        // Pattern 2: https://drive.google.com/open?id=FILE_ID
        const match2 = url.match(/[?&]id=([^&]+)/);
        if (match2) return match2[1];

        // Pattern 3: https://drive.google.com/drive/folders/FILE_ID
        const match3 = url.match(/\/folders\/([^\/\?]+)/);
        if (match3) return match3[1];

        // Pattern 4: Direct file ID
        if (url.length === 33 || url.length === 28) {
            return url;
        }

        return null;
    };

    // Function to create direct Google Drive image URL
    const createDirectImageUrl = (fileId: string, size: string = '800'): string => {
        // Method 1: Using Google's thumbnail service (most reliable)
        return `https://lh3.googleusercontent.com/d/${fileId}=w${size}-h${size}`;

        // Alternative method (uncomment if above doesn't work):
        // return `https://drive.google.com/uc?export=view&id=${fileId}&w=${size}&h=${size}`;
    };

    // Function to get optimized image URL
    const getOptimizedImageUrl = (item: GalleryItem, size: string = '800'): string => {
        // If we already have an optimized URL, use it
        if (item.optimizedSrc) {
            return item.optimizedSrc.replace(/=w\d+/, `=w${size}`);
        }

        // Otherwise, try to create one
        const fileId = extractFileId(item.src);
        if (fileId) {
            return createDirectImageUrl(fileId, size);
        }

        // Fallback to original URL
        return item.src;
    };

    // Pre-process gallery items to convert Google Drive URLs
    useEffect(() => {
        const processedItems = galleryItems.map(item => {
            const fileId = extractFileId(item.src);
            let optimizedSrc = item.src;

            if (fileId) {
                // Create a high-quality direct URL
                optimizedSrc = createDirectImageUrl(fileId, '1920');
            }

            return {
                ...item,
                optimizedSrc
            };
        });

        setOptimizedGalleryItems(processedItems);
    }, []);

    // Handle image load
    const handleImageLoad = (id: number) => {
        setLoadingImages(prev => ({ ...prev, [id]: false }));
    };

    const handleImageError = (id: number, e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setLoadingImages(prev => ({ ...prev, [id]: false }));
        console.error(`Failed to load image with ID: ${id}`);

        // Try to log more details about the error
        const item = filteredItems.find(item => item.id === id);
        if (item) {
            console.log('Failed to load image:', {
                id: item.id,
                originalSrc: item.src,
                optimizedSrc: item.optimizedSrc,
                srcUsed: e.currentTarget.src
            });

            // Try alternative URL if first method fails
            const fileId = extractFileId(item.src);
            if (fileId) {
                // Try the alternative method
                const altUrl = `https://drive.google.com/uc?export=view&id=${fileId}&w=800`;
                console.log('Trying alternative URL:', altUrl);

                // Update the src to try the alternative
                e.currentTarget.src = altUrl;
                setLoadingImages(prev => ({ ...prev, [id]: true }));
            }
        }
    };

    // Debug function to check URLs
    const debugUrls = () => {
        console.log('=== Debug Gallery URLs ===');
        galleryItems.forEach((item, index) => {
            const fileId = extractFileId(item.src);
            console.log(`Item ${index + 1}:`, {
                id: item.id,
                original: item.src,
                fileId: fileId,
                optimized: fileId ? createDirectImageUrl(fileId, '800') : 'No file ID'
            });
        });
    };

    // Call debug on mount
    useEffect(() => {
        debugUrls();
    }, []);

    return (
        <main className="min-h-screen font-sans text-slate-800 bg-white">

            {/* Header / Hero Section */}
            <section
                className="relative h-[100vh] flex items-center justify-center bg-cover bg-center bg-fixed"
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
            {selectedImage !== null && filteredItems[selectedImage] && (
                <div
                    className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-6xl w-full flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 md:right-[-2rem] text-white/70 hover:text-white transition-colors p-2"
                            aria-label="Close"
                        >
                            <X size={36} />
                        </button>

                        {/* Optimized image loading for modal */}
                        {loadingImages[selectedImage] !== false && (
                            <div className="flex items-center justify-center w-full h-[60vh]">
                                <Loader2 className="animate-spin text-white" size={48} />
                            </div>
                        )}

                        <img
                            src={getOptimizedImageUrl(filteredItems[selectedImage], '1920')}
                            alt={filteredItems[selectedImage].alt}
                            className={`w-auto h-auto max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10 ${
                                loadingImages[selectedImage] !== false ? 'hidden' : ''
                            }`}
                            onLoad={() => handleImageLoad(selectedImage)}
                            onError={(e) => handleImageError(selectedImage, e)}
                            crossOrigin="anonymous"
                        />

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
            {/*<section className="py-12 px-8 bg-white">*/}
            {/*    <div className="max-w-7xl mx-auto">*/}
            {/*        <div className="flex flex-wrap justify-center gap-3 mb-8">*/}
            {/*            {categories.map((cat) => (*/}
            {/*                <button*/}
            {/*                    key={cat}*/}
            {/*                    onClick={() => setSelectedCategory(cat)}*/}
            {/*                    className={`px-8 py-3 rounded-full font-bold transition-all duration-300 text-sm ${*/}
            {/*                        selectedCategory === cat*/}
            {/*                            ? "bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-lg shadow-sky-500/30 scale-105"*/}
            {/*                            : "bg-white text-slate-500 border border-slate-200 hover:border-sky-400 hover:text-sky-500 hover:shadow-md"*/}
            {/*                    }`}*/}
            {/*                >*/}
            {/*                    {cat}*/}
            {/*                </button>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Gallery Grid with Google Drive Images */}
            <section className="pb-20 px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    {filteredItems.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-xl text-slate-600">No images found for this category.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                            {filteredItems.map((item, idx) => (
                                <div
                                    key={item.id}
                                    className={`relative rounded-3xl overflow-hidden cursor-pointer group border border-slate-100 shadow-md hover:shadow-xl hover:shadow-sky-200/50 transition-all duration-500 ${
                                        (idx === 0 || idx === 4) && selectedCategory === 'All' ? "sm:col-span-2 lg:row-span-2 auto-rows-[600px]" : ""
                                    }`}
                                    onClick={() => {
                                        setSelectedImage(idx);
                                        setLoadingImages(prev => ({ ...prev, [idx]: true }));
                                    }}
                                    data-aos="fade-up"
                                >
                                    {/* Loading skeleton */}
                                    {loadingImages[item.id] !== false && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse flex items-center justify-center">
                                            <Loader2 className="animate-spin text-slate-400" size={32} />
                                        </div>
                                    )}

                                    {/* Optimized Google Drive image */}
                                    <img
                                        src={getOptimizedImageUrl(item, '800')}
                                        alt={item.alt}
                                        className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                                            loadingImages[item.id] !== false ? 'opacity-0' : 'opacity-100'
                                        }`}
                                        loading="lazy"
                                        onLoad={() => handleImageLoad(item.id)}
                                        onError={(e) => handleImageError(item.id, e)}
                                        crossOrigin="anonymous"
                                    />

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
                    )}
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-8 bg-sky-50 border-t border-sky-100">
                <div className="max-w-7xl mx-auto">
                    {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">*/}
                    {/*    {[*/}
                    {/*        { number: "500+", label: "Destination Photos" },*/}
                    {/*        { number: "50+", label: "Beautiful Locations" },*/}
                    {/*        { number: "1000+", label: "Moments Captured" },*/}
                    {/*    ].map((item, idx) => (*/}
                    {/*        <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} className="p-6">*/}
                    {/*            <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 mb-4 font-serif">*/}
                    {/*                {item.number}*/}
                    {/*            </p>*/}
                    {/*            <p className="text-slate-500 uppercase tracking-widest font-bold text-sm">{item.label}</p>*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                    {/*</div>*/}

                    <div className="max-w-4xl mx-auto text-center bg-white p-12 rounded-[3rem] shadow-xl shadow-sky-200/50 border border-sky-100 relative overflow-hidden">
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