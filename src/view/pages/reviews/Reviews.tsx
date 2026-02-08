import {  useEffect } from "react";
import { Star, ExternalLink, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function Reviews() {
    const TRIPADVISOR_URL = "https://www.tripadvisor.com/Attraction_Review-g297896-d8862399-Reviews-Visit_Ceylon_Tours-Galle_Galle_District_Southern_Province.html";

    // Load TripAdvisor widget script
    useEffect(() => {
        // Load TripAdvisor widget script
        const script = document.createElement('script');
        script.src = 'https://www.jscache.com/wejs?wtype=selfserveprop&uniq=189&locationId=8862399&lang=en_US&rating=true&nreviews=5&writereviewlink=true&popIdx=true&iswide=false&border=true&display_version=2';
        script.async = true;
        script.charset = 'utf-8';

        const container = document.getElementById('tripadvisor-widget-container');
        if (container) {
            container.appendChild(script);
        }

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <main className="min-h-screen font-sans text-slate-800 bg-white">

            {/* Header Section */}
            <section
                className="relative h-[100vh] flex items-center justify-center bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: "url('https://www.lovesrilanka.org/wp-content/uploads/2020/06/LS_B2_Main-landing-page_1920x700-1.jpg')"
                }}
            >
                <div className="absolute inset-0 bg-slate-900/40"></div>

                <div className="max-w-7xl mx-auto w-full px-8 relative z-10 mt-20" data-aos="zoom-out">
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 font-serif drop-shadow-xl text-center md:text-left">
                        Guest <span className="text-sky-400">Reviews</span>
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl">
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={28}
                                            className="fill-amber-400 text-amber-400 drop-shadow-sm"
                                        />
                                    ))}
                                </div>
                                <span className="text-4xl font-black text-white drop-shadow-md">5.0</span>
                                <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                                    <img
                                        src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                                        alt="TripAdvisor"
                                        className="h-5 w-auto"
                                    />
                                </div>
                            </div>
                            <p className="text-sky-100 font-medium text-lg">
                                <span className="font-bold">150+</span> verified reviews on TripAdvisor
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg text-center whitespace-nowrap"
                            >
                                Book Your Trip
                            </Link>
                            <a
                                href={TRIPADVISOR_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#2d8f68] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg text-center whitespace-nowrap flex items-center justify-center gap-2"
                            >
                                <img
                                    src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                                    alt="TripAdvisor"
                                    className="h-5 w-auto"
                                />
                                View Our Page
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live TripAdvisor Reviews */}
            <section className="py-20 px-8 bg-gradient-to-b from-white via-sky-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 font-serif">
                            Live <span className="text-sky-500">Reviews</span>
                        </h2>
                        <a
                            href={TRIPADVISOR_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sky-600 font-bold hover:underline"
                        >
                            See all reviews
                            <ExternalLink size={16} />
                        </a>
                    </div>

                    {/* TripAdvisor Widget Container */}
                    <div className="bg-white p-8 rounded-3xl border-2 border-[#34E0A1]/20 shadow-xl">
                        <div className="mb-6 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                                    alt="TripAdvisor"
                                    className="h-8 w-auto"
                                />
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Visit Ceylon Tours Reviews</h3>
                                    <p className="text-slate-600 text-sm">Real-time reviews from travelers</p>
                                </div>
                            </div>
                            <CheckCircle className="text-sky-700" size={24} />
                        </div>

                        {/* TripAdvisor Widget will load here */}
                        <div id="tripadvisor-widget-container">
                            <div id="TA_selfserveprop189" className="TA_selfserveprop">
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
                            {/* Widget will be inserted here by the script */}
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-200 text-center">
                            <a
                                href={TRIPADVISOR_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-400 to-blue-600 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
                            >
                                <img
                                    src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                                    alt="TripAdvisor"
                                    className="h-6 w-auto invert"
                                />
                                Write a Review on TripAdvisor
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Multiple TripAdvisor Widgets Section */}
            <section className="py-20 px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center font-serif">
                        What Travelers Say
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Rating Summary Widget */}
                        <div className="bg-gradient-to-br from-[#34E0A1]/5 to-white p-8 rounded-3xl border border-[#34E0A1]/20">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Overall Rating</h3>
                            <div className="flex items-center justify-center gap-6 mb-8">
                                <div className="text-center">
                                    <div className="text-6xl font-black text-[#2170d0]">5.0</div>
                                    <div className="flex gap-1 mt-2 justify-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={20} className="fill-[#1588ff] text-[#1588ff]" />
                                        ))}
                                    </div>
                                    <p className="text-slate-600 mt-2">Based on 150+ reviews</p>
                                </div>
                            </div>
                            <a
                                href={TRIPADVISOR_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center text-[#2b62f0] font-bold hover:underline"
                            >
                                View detailed ratings →
                            </a>
                        </div>

                        {/* Recent Reviews Widget */}
                        <div className="bg-white p-8 rounded-3xl border-2 border-[#34E0A1]/20 shadow-lg">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Reviews</h3>
                            <div className="space-y-6">
                                {/* This would be populated by TripAdvisor widget */}
                                <div className="text-center py-12">
                                    <p className="text-slate-500 mb-4">Loading live reviews from TripAdvisor...</p>
                                    <div className="animate-pulse">
                                        <div className="h-4 bg-slate-200 rounded mb-4"></div>
                                        <div className="h-4 bg-slate-200 rounded mb-4"></div>
                                        <div className="h-4 bg-slate-200 rounded"></div>
                                    </div>
                                </div>
                            </div>
                            <a
                                href={TRIPADVISOR_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 block text-center text-[#2b62f0] font-bold hover:underline"
                            >
                                Read more reviews on TripAdvisor →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-8 bg-gradient-to-b from-white to-sky-50">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-12 rounded-[3rem] shadow-2xl shadow-[#34E0A1]/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-serif relative z-10">
                            Be Our Next 5-Star Review
                        </h2>
                        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                            Experience why travelers rate us excellent on TripAdvisor.
                            Book your adventure and join our community of satisfied guests.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-block bg-white text-[#2170d0] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg relative z-10"
                            >
                                Book Your Trip
                            </Link>
                            <a
                                href={TRIPADVISOR_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#2170d0] transition-all duration-300 shadow-lg relative z-10"
                            >
                                Write a Review
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* TripAdvisor Badge Footer */}
            <div className="bg-white border-t border-slate-200 py-8">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <img
                                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                                alt="TripAdvisor"
                                className="h-8 w-auto"
                            />
                            <div>
                                <p className="font-bold text-slate-900">Visit Ceylon Tours on TripAdvisor</p>
                                <p className="text-slate-600 text-sm">Ranked #1 in Galle District</p>
                            </div>
                        </div>
                        <a
                            href={TRIPADVISOR_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#2d8f68] text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2"
                        >
                            <ExternalLink size={16} />
                            Visit Our Page
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}