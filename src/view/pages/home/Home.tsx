import { useState, useEffect } from "react";
import { Play, ArrowRight, Star, MapPin, Eye, X, MessageCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryItems, reels } from "../../../GlobalData.ts";
import { allReviews } from "../../../GlobalData.ts"; // Import your reviews

export function Home() {
    const [selectedReel, setSelectedReel] = useState<number | null>(null);
    // const [ setLoadingReviews] = useState(false);

    const TRIPADVISOR_URL = "https://www.tripadvisor.co.uk/Attraction_Review-g297896-d27698089-Reviews-Ceylon_Visit_Tours_Sri_Lanka-Galle_Galle_District_Southern_Province.html";
    // const GOOGLE_REVIEWS_URL = "https://g.page/r/CeylonVisitTours/review";

    // Use reviews from GlobalData
    const reviews = allReviews || [];
    const latestReviews = reviews.slice(0, 3); // Get 3 latest reviews

    // Load TripAdvisor widget on component mount
    useEffect(() => {
        const loadTripAdvisorWidget = () => {
            const script = document.createElement('script');
            script.src = 'https://www.jscache.com/wejs?wtype=selfserveprop&uniq=1&locationId=8862399&lang=en_US&rating=true&nreviews=4&writereviewlink=true&popIdx=true&iswide=false&border=true&display_version=2';
            script.async = true;
            script.charset = 'utf-8';
            // script.onload = () => setLoadingReviews(false);

            const container = document.getElementById('tripadvisor-widget-container');
            if (container) {
                container.appendChild(script);
            }
        };

        loadTripAdvisorWidget();

        return () => {
            const script = document.querySelector('script[src*="jscache.com/wejs"]');
            if (script && script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    const getEmbedUrl = (url: string) => {
        const videoId = url.split("/shorts/")[1]?.split("?")[0];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    const getThumbnailUrl = (url: string) => {
        if (url.includes('youtube.com/shorts/')) {
            const videoId = url.split('shorts/')[1]?.split('?')[0];
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
        return `https://img.youtube.com/vi/${url}/hqdefault.jpg`;
    };

    const featuredImages = galleryItems.slice(0, 4);

    // If you have fewer than 4 images, add fallback
    const imagesToShow = featuredImages.length >= 4
        ? featuredImages
        : [...featuredImages, ...Array(4 - featuredImages.length).fill({})];

    return (
        <main className="bg-gradient-to-b from-white via-sky-50 to-white text-slate-800 font-sans min-h-screen">

            {/* --- Hero Section --- */}
            <section
                className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat md:bg-fixed"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(15, 23, 42, 0.3), rgba(3, 105, 161, 0.2))," +
                        " url('https://www.lovesrilanka.org/wp-content/uploads/2020/04/LS_Ella_Main_Desktop_1920x700.jpg')",
                }}
            >
                <div className="text-center z-10 px-4 mt-16" data-aos="zoom-out">
                    <p className="text-sky-100 text-sm md:text-base font-bold mb-3 tracking-[0.2em] uppercase drop-shadow-md">
                        Sri Lanka's Premium Agency
                    </p>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight font-serif drop-shadow-xl">
                        Discover Local <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-200 to-white">
                            Paradise
                        </span>
                    </h1>
                    <p className="text-sky-50 text-base md:text-lg max-w-xl mx-auto mb-8 shadow-black/50 drop-shadow-md font-medium">
                        Experience the ultimate luxury travel in Sri Lanka. From mountains
                        to beaches, we plan it all.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/reels"
                            className="backdrop-blur-md bg-white/10 border border-white/40 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-sky-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                            <Play size={18} fill="currentColor" />
                            Watch Stories
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 py-3 rounded-full font-bold hover:scale-105 hover:shadow-lg hover:shadow-sky-500/40 transition-all duration-300 border border-white/10 text-sm md:text-base"
                        >
                            Book Your Trip
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- Reels Teaser Section --- */}
            <section className="py-16 px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 max-w-7xl mx-auto">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-slate-900">
                            Travel <span className="text-sky-500">Shorts</span>
                        </h2>
                        <p className="text-slate-500 text-sm">Quick glimpses of the island life</p>
                    </div>
                    <Link
                        to="/reels"
                        className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 hover:opacity-80 transition-opacity"
                    >
                        View All Shorts <ArrowRight size={14} className="text-sky-600" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
                    {reels.slice(0, 4).map((reel, idx) => (
                        <div
                            key={reel.id}
                            className="relative aspect-[9/16] rounded-xl overflow-hidden group shadow-lg shadow-sky-100 cursor-pointer"
                            data-aos="zoom-in"
                            data-aos-delay={idx * 100}
                            onClick={() => setSelectedReel(idx)}
                        >
                            <img
                                src={getThumbnailUrl(reel.src)}
                                alt={reel.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-50 group-hover:opacity-80 transition-all duration-300"></div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/50 border-2 border-white/30">
                                    <Play size={16} fill="currentColor" className="ml-1" />
                                </div>
                            </div>

                            <div className="absolute top-3 left-3">
                                <span className="px-2 py-1 bg-sky-500 text-white text-xs font-bold rounded-full shadow-sm">
                                    {reel.badge}
                                </span>
                            </div>

                            <div className="absolute top-3 right-3">
                                <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                                    📍 {reel.location.split(',')[0]}
                                </span>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/50 to-transparent transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="block text-sm font-bold text-white truncate drop-shadow-sm">
                                    {reel.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link
                        to="/reels"
                        className="inline-flex items-center gap-2 text-xs text-sky-600 font-bold uppercase tracking-wider"
                    >
                        View Gallery <ArrowRight size={14} />
                    </Link>
                </div>
            </section>

            {/* --- Video Modal --- */}
            {selectedReel !== null && (
                <div
                    className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedReel(null)}
                >
                    <div
                        className="w-full max-w-xl"
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

                        <div className="aspect-video bg-gradient-to-b from-slate-900 via-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10 p-1">
                            <iframe
                                src={`${getEmbedUrl(reels[selectedReel].src)}?autoplay=1`}
                                title={reels[selectedReel].title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-lg"
                            />
                        </div>

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

            {/* --- Review Summary Section (New) --- */}
            <section className="py-20 px-6 md:px-12 relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-white">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-4 mb-6">
                            <img
                                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                                alt="TripAdvisor"
                                className="h-8 w-auto"
                            />
                            <div className="h-8 w-px bg-slate-300"></div>
                            <img
                                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                                alt="Google"
                                className="h-6 w-auto"
                            />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-slate-900 leading-tight">
                            Loved by <span className="text-sky-500">Travelers</span>
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Join hundreds of satisfied guests who've experienced Sri Lanka with us
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {/* Overall Rating */}
                        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg text-center">
                            <div className="text-5xl font-black text-sky-600 mb-2">5.0</div>
                            <div className="flex gap-1 justify-center mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className="text-slate-600 text-sm">Overall Rating</p>
                        </div>

                        {/* Total Reviews */}
                        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg text-center">
                            <div className="text-5xl font-black text-[#34E0A1] mb-2">300+</div>
                            <p className="text-slate-600 text-sm">Verified Reviews</p>
                        </div>

                        {/* TripAdvisor Rating */}
                        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                                    alt="TripAdvisor"
                                    className="h-6 w-auto"
                                />
                                <span className="text-sm font-bold text-slate-900">TripAdvisor</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-[#1588ff] text-[#1588ff]" />
                                    ))}
                                </div>
                                <span className="text-2xl font-bold">5.0</span>
                            </div>
                            <p className="text-slate-500 text-sm mt-1">150+ reviews</p>
                        </div>

                        {/* Google Rating */}
                        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                                    alt="Google"
                                    className="h-6 w-auto"
                                />
                                <span className="text-sm font-bold text-slate-900">Google</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <span className="text-2xl font-bold">5.0</span>
                            </div>
                            <p className="text-slate-500 text-sm mt-1">150+ reviews</p>
                        </div>
                    </div>

                    {/* Recent Reviews Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        {/* Left Column: Summary & Stats */}
                        <div data-aos="fade-right">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-sky-100 p-3 rounded-full">
                                    <MessageCircle className="text-sky-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">What Travelers Say</h3>
                                    <p className="text-slate-600">Real feedback from our guests</p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-700">Service Quality</span>
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                        <span className="font-bold">5.0</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-700">Guide Knowledge</span>
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                        <span className="font-bold">5.0</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-700">Value for Money</span>
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                        <span className="font-bold">5.0</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-700">Overall Experience</span>
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                        <span className="font-bold">5.0</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={TRIPADVISOR_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex justify-center items-center gap-2 bg-[#2d8f68] text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-colors shadow-xl shadow-[#34E0A1]/20"
                                >
                                    <img
                                        src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                                        alt="TripAdvisor"
                                        className="h-7 w-auto"
                                    />

                                </a>
                                <a
                                    href={TRIPADVISOR_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex justify-center items-center gap-2 bg-[#4285F4] text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-colors shadow-xl shadow-[#34E0A1]/20"
                                >
                                    <img
                                        src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                                        alt="Google"
                                        className="h-7 w-auto"
                                    />


                                </a>
                                <Link
                                    to="/reviews"
                                    className="inline-flex justify-center items-center gap-2 bg-white px-6 py-3 rounded-xl border border-slate-200 shadow-sm text-sky-600 font-bold hover:border-[#2170d0] hover:text-[#1588ff] transition-all"
                                >
                                    See More Reviews
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Recent Reviews */}
                        <div className="space-y-6" data-aos="fade-left">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Recent Guest Reviews</h3>

                            {latestReviews.map((review) => (
                                <div
                                    key={review.id}
                                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                                    onClick={() => review.sourceUrl && window.open(review.sourceUrl, '_blank')}
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="flex gap-1">
                                                    {[...Array(review.rating)].map((_, i) => (
                                                        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                                                    ))}
                                                </div>
                                                <span className="text-sm text-slate-500">{review.date}</span>
                                            </div>
                                            <h4 className="font-bold text-slate-900 line-clamp-1">{review.title}</h4>
                                        </div>
                                        <div className={`px-2 py-1 rounded text-xs font-bold ${review.source === 'TripAdvisor' ? 'bg-[#34E0A1]/10 text-[#34E0A1]' : 'bg-blue-100 text-blue-600'}`}>
                                            {review.source}
                                        </div>
                                    </div>

                                    <p className="text-slate-700 text-sm mb-4 line-clamp-2">
                                        "{review.content.substring(0, 120)}..."
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                                                <span className="text-slate-600 font-bold text-sm">
                                                    {review.author.charAt(0)}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">{review.author}</p>
                                                <p className="text-xs text-slate-500">{review.tripType}</p>
                                            </div>
                                        </div>
                                        <CheckCircle size={16} className="text-green-500" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* --- Gallery Teaser Section --- */}
            <section className="py-5 px-6 md:px-12 text-center bg-white">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-slate-900">
                    Captured <span className="text-sky-500">Moments</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto h-[400px] mb-10">
                    {/* Main large image (first image) */}
                    <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group shadow-lg cursor-pointer">
                        {imagesToShow[0]?.src ? (
                            <>
                                <img
                                    src={imagesToShow[0].src}
                                    alt={imagesToShow[0].alt || "Gallery image 1"}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </>
                        ) : (
                            <div className="w-full h-full bg-slate-200 rounded-2xl flex items-center justify-center">
                                <span className="text-slate-400">Image 1</span>
                            </div>
                        )}
                    </div>

                    {/* Second image */}
                    <div className="rounded-2xl overflow-hidden relative group shadow-lg">
                        {imagesToShow[1]?.src ? (
                            <>
                                <img
                                    src={imagesToShow[1].src}
                                    alt={imagesToShow[1].alt || "Gallery image 2"}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </>
                        ) : (
                            <div className="w-full h-full bg-slate-200 rounded-2xl flex items-center justify-center">
                                <span className="text-slate-400">Image 2</span>
                            </div>
                        )}
                    </div>

                    {/* Third image */}
                    <div className="rounded-2xl overflow-hidden relative group shadow-lg">
                        {imagesToShow[2]?.src ? (
                            <>
                                <img
                                    src={imagesToShow[2].src}
                                    alt={imagesToShow[2].alt || "Gallery image 3"}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </>
                        ) : (
                            <div className="w-full h-full bg-slate-200 rounded-2xl flex items-center justify-center">
                                <span className="text-slate-400">Image 3</span>
                            </div>
                        )}
                    </div>

                    {/* Fourth image with overlay link to gallery */}
                    <div className="col-span-2 rounded-2xl overflow-hidden relative group shadow-lg">
                        {imagesToShow[3]?.src ? (
                            <img
                                src={imagesToShow[3].src}
                                alt={imagesToShow[3].alt || "Gallery image 4"}
                                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            />
                        ) : (
                            <div className="w-full h-full bg-slate-200 rounded-2xl"></div>
                        )}

                        {/* Overlay with link to full gallery */}
                        <Link
                            to="/gallery"
                            className="absolute inset-0 flex flex-col items-center justify-center bg-blue-900/40 hover:bg-blue-900/60 transition-colors z-10 group cursor-pointer backdrop-blur-[2px]"
                        >
                            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full mb-2 group-hover:scale-110 transition-transform shadow-xl border border-white/30">
                                <Eye size={28} className="text-white" />
                            </div>
                            <span className="text-white font-bold text-lg drop-shadow-lg tracking-wider">VIEW GALLERY</span>
                            <p className="text-white/90 text-sm mt-2 max-w-xs px-4">
                                Explore {galleryItems.length}+ stunning photos from our travels
                            </p>
                        </Link>
                    </div>
                </div>

                {/* Simple call to action */}
                {/*<div className="max-w-3xl mx-auto">*/}
                {/*    <p className="text-slate-600 mb-6">*/}
                {/*        A glimpse from our collection of {galleryItems.length} travel photos*/}
                {/*    </p>*/}
                {/*    <Link*/}
                {/*        to="/gallery"*/}
                {/*        className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg"*/}
                {/*    >*/}
                {/*        <Eye size={20} />*/}
                {/*        See All Photos*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </section>

            {/* --- CTA Section with Both Platform Options --- */}
            <section className="py-20 px-6 md:px-12 bg-sky-50">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-sky-400 to-blue-600 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl shadow-sky-400/30 relative overflow-hidden" data-aos="zoom-in">

                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    {/*<div className="absolute top-6 right-6">*/}
                    {/*    <a href={TRIPADVISOR_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white/30 transition-colors">*/}
                    {/*        <img*/}
                    {/*            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"*/}
                    {/*            alt="TripAdvisor"*/}
                    {/*            className="h-5 w-auto"*/}
                    {/*        />*/}
                    {/*        <span className="text-white text-sm font-bold">5.0 ★</span>*/}
                    {/*    </a>*/}
                    {/*</div>*/}

                    <h2 className="text-3xl md:text-5xl font-serif font-black mb-4 relative z-10">Ready for your <br/>Dream Vacation?</h2>
                    <p className="text-sky-100 text-base md:text-xl max-w-xl mx-auto mb-8 relative z-10 font-light">
                        Join hundreds of happy travelers who rated us 5 stars across all platforms.
                        Let us handle the details while you create the memories.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-50 hover:shadow-xl hover:scale-105 transition-all relative z-10 shadow-lg">
                            <MapPin size={20} />
                            Plan My Trip
                        </Link>
                        <div className="flex gap-4">
                            {/*<a*/}
                            {/*    href={GOOGLE_REVIEWS_URL}*/}
                            {/*    target="_blank"*/}
                            {/*    rel="noopener noreferrer"*/}
                            {/*    className="inline-flex items-center gap-3 bg-white text-[#4285F4] px-6 py-4 rounded-full font-bold text-lg hover:bg-slate-100 hover:shadow-xl hover:scale-105 transition-all relative z-10 shadow-lg"*/}
                            {/*>*/}
                            {/*    <img*/}
                            {/*        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"*/}
                            {/*        alt="Google"*/}
                            {/*        className="h-5 w-auto"*/}
                            {/*    />*/}
                            {/*    Review on Google*/}
                            {/*</a>*/}
                            {/*<a*/}
                            {/*    href={TRIPADVISOR_URL}*/}
                            {/*    target="_blank"*/}
                            {/*    rel="noopener noreferrer"*/}
                            {/*    className="inline-flex items-center gap-3 bg-white text-[#34E0A1] px-6 py-4 rounded-full font-bold text-lg hover:bg-slate-100 hover:shadow-xl hover:scale-105 transition-all relative z-10 shadow-lg"*/}
                            {/*>*/}
                            {/*    <img*/}
                            {/*        src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"*/}
                            {/*        alt="TripAdvisor"*/}
                            {/*        className="h-5 w-auto"*/}
                            {/*    />*/}
                            {/*    Review on TripAdvisor*/}
                            {/*</a>*/}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}