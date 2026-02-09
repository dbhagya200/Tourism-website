import { useState, useEffect } from "react";
import { Play, ArrowRight, Star, MapPin, Eye, X, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import {galleryItems, reels} from "../../../GlobalData.ts";

export function Home() {
    const [selectedReel, setSelectedReel] = useState<number | null>(null);
    const [loadingReviews, setLoadingReviews] = useState(true);

    const TRIPADVISOR_URL = "https://www.tripadvisor.com/Attraction_Review-g297896-d8862399-Reviews-Visit_Ceylon_Tours-Galle_Galle_District_Southern_Province.html";

    // Load TripAdvisor widget on component mount
    useEffect(() => {
        const loadTripAdvisorWidget = () => {
            const script = document.createElement('script');
            script.src = 'https://www.jscache.com/wejs?wtype=selfserveprop&uniq=1&locationId=8862399&lang=en_US&rating=true&nreviews=4&writereviewlink=true&popIdx=true&iswide=false&border=true&display_version=2';
            script.async = true;
            script.charset = 'utf-8';
            script.onload = () => setLoadingReviews(false);

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

            {/* --- Live TripAdvisor Reviews Section --- */}
            <section className="py-20 px-6 md:px-12 relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-white">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div data-aos="fade-right">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                                alt="TripAdvisor"
                                className="h-8 w-auto"
                            />
                            <span className="text-sm font-bold text-[#2559a2] bg-[#34E0A1]/10 px-3 py-1 rounded-full">
                                Certificate of Excellence 2024
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-slate-900 leading-tight">
                            Live Reviews from <br /><span className="text-sky-500">TripAdvisor</span>
                        </h2>
                        <p className="text-slate-600 mb-8 text-base leading-relaxed">
                            See what travelers are saying about us in real-time.
                            Our 5-star rating speaks for itself.
                        </p>

                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={24} className="fill-[#1588ff] text-[#1588ff]" />
                                ))}
                            </div>
                            <span className="text-2xl font-bold text-slate-900">5.0</span>
                            <span className="text-slate-500">(150+ reviews)</span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={TRIPADVISOR_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center gap-2 bg-[#234377] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#2170d0] transition-colors shadow-xl shadow-[#34E0A1]/20 text-sm"
                            >
                                View All Reviews
                                <ExternalLink size={16} />
                            </a>
                            <Link
                                to="/reviews"
                                className="inline-flex justify-center items-center gap-2 bg-white px-6 py-3 rounded-xl border border-slate-200 shadow-sm text-sky-600 text-sm font-bold hover:border-[#2170d0] hover:text-[#1588ff] transition-all"
                            >
                                See More
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border-2 border-[#34E0A1]/20 shadow-xl" data-aos="fade-left">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-slate-900">Recent Reviews</h3>
                            <div className="flex items-center gap-1 bg-[#34E0A1]/10 px-2 py-1 rounded-full">
                                <span className="text-xs font-bold text-[#1588ff]">Live</span>
                                <div className="w-2 h-2 bg-[#1588ff] rounded-full animate-pulse"></div>
                            </div>
                        </div>

                        {/* TripAdvisor Widget Container */}
                        <div id="tripadvisor-widget-container">
                            {loadingReviews ? (
                                <div className="text-center py-12">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#34E0A1] mx-auto mb-4"></div>
                                    <p className="text-slate-500">Loading live reviews from TripAdvisor...</p>
                                </div>
                            ) : (
                                <div className="min-h-[200px] flex items-center justify-center">
                                    {/* Widget will load here automatically */}
                                    <div id="TA_selfserveprop1" className="TA_selfserveprop">
                                        <ul id="0jkyy07l3" className="TA_links iF2P0IT">
                                            <li id="iQbXX4S" className="3jkq2z">
                                                <a target="_blank" href={TRIPADVISOR_URL}>
                                                    <img src="https://static.tacdn.com/img2/widget/tripadvisor_logo_115x18.gif"
                                                         alt="TripAdvisor"
                                                         className="widEXCIMG" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-200 text-center">
                            <a
                                href={TRIPADVISOR_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#1588ff] font-bold hover:underline text-sm"
                            >
                                Write your own review on TripAdvisor
                                <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- Packages Teaser Section ---*/}
            {/*<section className="py-16 px-6 md:px-12 bg-white">*/}
            {/*    <div className="max-w-7xl mx-auto text-center mb-10">*/}
            {/*        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-slate-900">*/}
            {/*            Popular <span className="text-sky-500">Destinations</span>*/}
            {/*        </h2>*/}
            {/*        <p className="text-slate-500 max-w-xl mx-auto text-base">*/}
            {/*            Our most booked luxury experiences tailored for comfort and adventure.*/}
            {/*        </p>*/}
            {/*    </div>*/}

            {/*    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">*/}
            {/*        {featuredPackages.map((pkg, idx) => (*/}
            {/*            <div key={pkg.id} className="bg-white rounded-[1.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-sky-200/50 hover:-translate-y-2 transition-all duration-300 flex flex-col group border border-slate-100" data-aos="fade-up" data-aos-delay={idx * 100}>*/}
            {/*                <div className="h-60 overflow-hidden relative">*/}
            {/*                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />*/}
            {/*                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">*/}
            {/*                        {pkg.duration}*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="p-6 flex flex-col flex-grow">*/}
            {/*                    <h3 className="text-xl font-bold mb-2 font-serif text-slate-900 group-hover:text-sky-600 transition-colors">{pkg.title}</h3>*/}
            {/*                    <div className="mt-auto pt-4 border-t border-slate-100">*/}
            {/*                        <p className="text-[10px] text-slate-400 uppercase tracking-wide mb-1 font-semibold">Starting from</p>*/}
            {/*                        <div className="flex justify-between items-end">*/}
            {/*                            <p className="text-2xl font-black text-slate-800">{pkg.price}</p>*/}
            {/*                            <Link*/}
            {/*                                to="/packages"*/}
            {/*                                className="bg-sky-50 text-sky-700 px-5 py-2 rounded-lg font-bold text-xs hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:text-white transition-all hover:shadow-lg flex items-center gap-2"*/}
            {/*                            >*/}
            {/*                                View <ArrowRight size={14} />*/}
            {/*                            </Link>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}

            {/*    <div className="mt-12 text-center">*/}
            {/*        <Link to="/packages" className="inline-flex items-center gap-2 border-2  border-blue-950 bg-amber-50-400 text-slate-600 px-8 py-3 rounded-full hover:border-sky-500 hover:text-sky-600 transition-colors font-bold uppercase tracking-wider text-xs">*/}
            {/*            Explore All Packages*/}
            {/*        </Link>*/}
            {/*    </div>*/}
            {/*</section>*/}

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

            {/* --- Contact CTA with TripAdvisor Badge --- */}
            <section className="py-20 px-6 md:px-12 bg-sky-50">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-sky-400 to-blue-600 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl shadow-sky-400/30 relative overflow-hidden" data-aos="zoom-in">

                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="absolute top-6 right-6">
                        <a href={TRIPADVISOR_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                            <img
                                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                                alt="TripAdvisor"
                                className="h-5 w-auto"
                            />
                            <span className="text-white text-sm font-bold">5.0 ★</span>
                        </a>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif font-black mb-4 relative z-10">Ready for your <br/>Dream Vacation?</h2>
                    <p className="text-sky-100 text-base md:text-xl max-w-xl mx-auto mb-8 relative z-10 font-light">
                        Join 150+ happy travelers who rated us 5 stars on TripAdvisor.
                        Let us handle the details while you create the memories.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-50 hover:shadow-xl hover:scale-105 transition-all relative z-10 shadow-lg">
                            <MapPin size={20} />
                            Plan My Trip
                        </Link>
                        <a
                            href={TRIPADVISOR_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#234377] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1d2e4f] hover:shadow-xl hover:scale-105 transition-all relative z-10 shadow-lg"
                        >
                            <ExternalLink size={20} />
                            View Reviews
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}