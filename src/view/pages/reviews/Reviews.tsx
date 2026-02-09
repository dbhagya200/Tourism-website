import { useEffect } from "react";
import { Star, ExternalLink, CheckCircle, Calendar, User, MessageCircle, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { allReviews } from "../../../GlobalData.ts"; // Import from GlobalData

export function Reviews() {
    const TRIPADVISOR_URL = "https://www.tripadvisor.co.uk/Attraction_Review-g297896-d27698089-Reviews-Ceylon_Visit_Tours_Sri_Lanka-Galle_Galle_District_Southern_Province.html";

    // Google search links
    const GOOGLE_SEARCH_URL = "https://www.google.com/search?kgmid=%2Fg%2F11y5tntr0b&hl=en-LK&q=Ceylon%20Visit%20Tours-Sri%20Lanka&shndl=30&shem=lcuae%2Clsptb2%2Cnpsc3%2Csdl1pl&kgs=71996618cf530b4b";
    // const GOOGLE_REVIEWS_URL = "https://g.page/r/CeylonVisitTours/review"; // Replace with actual Google reviews link

    // Use reviews from GlobalData.ts
    const manualReviews = allReviews || [];

    // Load TripAdvisor widget script
    useEffect(() => {
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

    // Function to get country flag
    // const getCountryFlag = (countryCode: string) => {
    //     const flagMap: Record<string, string> = {
    //         'US': 'us', 'USA': 'us',
    //         'UK': 'gb', 'United Kingdom': 'gb',
    //         'AU': 'au', 'Australia': 'au',
    //         'CA': 'ca', 'Canada': 'ca',
    //         'DE': 'de', 'Germany': 'de',
    //         'CH': 'ch', 'Switzerland': 'ch',
    //         'FR': 'fr', 'France': 'fr',
    //         'ES': 'es', 'Spain': 'es',
    //         'IT': 'it', 'Italy': 'it',
    //         'NL': 'nl', 'Netherlands': 'nl',
    //         'DK': 'dk', 'Denmark': 'dk',
    //         'SE': 'se', 'Sweden': 'se',
    //         'NO': 'no', 'Norway': 'no',
    //         'FI': 'fi', 'Finland': 'fi',
    //         'IN': 'in', 'India': 'in',
    //         'JP': 'jp', 'Japan': 'jp',
    //         'KR': 'kr', 'South Korea': 'kr',
    //         'CN': 'cn', 'China': 'cn',
    //         'SG': 'sg', 'Singapore': 'sg',
    //         'MY': 'my', 'Malaysia': 'my',
    //         'AE': 'ae', 'UAE': 'ae',
    //         'SA': 'sa', 'Saudi Arabia': 'sa',
    //         'ZA': 'za', 'South Africa': 'za'
    //     };
    //
    //     if (countryCode && flagMap[countryCode]) {
    //         return `https://flagcdn.com/w20/${flagMap[countryCode]}.png`;
    //     }
    //     return null;
    // };

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
                                {/*<div className="flex items-center gap-3">*/}
                                {/*    <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">*/}
                                {/*        <img*/}
                                {/*            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"*/}
                                {/*            alt="TripAdvisor"*/}
                                {/*            className="h-5 w-auto"*/}
                                {/*        />*/}
                                {/*    </div>*/}
                                {/*    <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">*/}
                                {/*        <img*/}
                                {/*            src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"*/}
                                {/*            alt="Google"*/}
                                {/*            className="h-5 w-auto"*/}
                                {/*        />*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                            <p className="text-sky-100 font-medium text-lg">
                                <span className="font-bold">{manualReviews.length * 10}+</span> verified reviews across platforms
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg text-center whitespace-nowrap"
                            >
                                Book Your Trip
                            </Link>
                            <div className="flex gap-3">
                                <a
                                    href={TRIPADVISOR_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#2d8f68] text-white px-6 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg text-center whitespace-nowrap flex items-center justify-center gap-2"
                                >
                                    <img
                                        src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                                        alt="TripAdvisor"
                                        className="h-5 w-auto"
                                    />
                                    TripAdvisor
                                </a>
                                <a
                                    href={GOOGLE_SEARCH_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#4285F4] text-white px-6 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg text-center whitespace-nowrap flex items-center justify-center gap-2"
                                >
                                    <img
                                        src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                                        alt="Google"
                                        className="h-5 w-auto"
                                    />
                                    Google
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Quick Links */}
            <section className="py-12 px-8 bg-gradient-to-r from-sky-50 to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Find Us Online</h3>
                            <p className="text-slate-600">Search for Ceylon Visit Tours on these platforms</p>
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center">
                            {/*<a*/}
                            {/*    href={GOOGLE_SEARCH_URL}*/}
                            {/*    target="_blank"*/}
                            {/*    rel="noopener noreferrer"*/}
                            {/*    className="inline-flex items-center gap-3 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-full font-medium hover:bg-slate-50 hover:shadow-md transition-all duration-300"*/}
                            {/*>*/}
                            {/*    <img*/}
                            {/*        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"*/}
                            {/*        alt="Google"*/}
                            {/*        className="h-4 w-auto"*/}
                            {/*    />*/}
                            {/*    <span>Google Search</span>*/}
                            {/*    <Search size={16} />*/}
                            {/*</a>*/}

                            <a
                                href={GOOGLE_SEARCH_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-full font-medium hover:bg-slate-50 hover:shadow-md transition-all duration-300"
                            >
                                <img
                                    src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                                    alt="Google"
                                    className="h-4 w-auto"
                                />
                                <span>Google Reviews</span>
                                <Star size={16} className="fill-amber-400 text-amber-400" />
                            </a>

                            <a
                                href={TRIPADVISOR_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-full font-medium hover:bg-slate-50 hover:shadow-md transition-all duration-300"
                            >
                                <img
                                    src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                                    alt="TripAdvisor"
                                    className="h-4 w-auto"
                                />
                                <span>TripAdvisor</span>
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Reviews Section */}
            <section className="py-20 px-8 bg-gradient-to-b from-white via-sky-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 font-serif mb-4">
                            Featured <span className="text-sky-500">Reviews</span>
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Read what our guests have to say about their experiences with Ceylon Visit Tours
                        </p>
                    </div>

                    {/* Main Featured Review */}
                    {manualReviews.length > 0 && (
                        <div className="bg-white rounded-3xl border-2 border-[#34E0A1]/20 shadow-xl p-8 mb-12 cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                             onClick={() => manualReviews[0].sourceUrl && window.open(manualReviews[0].sourceUrl, '_blank')}>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-[#34E0A1]/10 p-3 rounded-full">
                                        <MessageCircle className="text-[#34E0A1]" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">Review of the Year</h3>
                                        <p className="text-slate-600 text-sm">Most detailed review from {manualReviews[0].date.split(' ').pop() || '2025'}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <ExternalLink size={18} className="text-[#34E0A1]" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2">
                                    <h4 className="text-lg font-bold text-slate-900 mb-3">
                                        {manualReviews[0].title}
                                    </h4>
                                    <p className="text-slate-700 mb-6 leading-relaxed line-clamp-5">
                                        "{manualReviews[0].content.substring(0, 300)}..."
                                    </p>

                                    <div className="flex items-center gap-4 flex-wrap">
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <User size={14} />
                                            <span>{manualReviews[0].author}</span>
                                        </div>
                                        {/*{manualReviews[0].country && (*/}
                                        {/*    <div className="flex items-center gap-2 text-sm text-slate-600">*/}
                                        {/*        {getCountryFlag(manualReviews[0].country) && (*/}
                                        {/*            <img*/}
                                        {/*                src={getCountryFlag(manualReviews[0].country)!}*/}
                                        {/*                alt={manualReviews[0].country}*/}
                                        {/*                className="w-5 h-3 rounded"*/}
                                        {/*            />*/}
                                        {/*        )}*/}
                                        {/*        <span>{manualReviews[0].country}</span>*/}
                                        {/*    </div>*/}
                                        {/*)}*/}
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <Calendar size={14} />
                                            <span>{manualReviews[0].stayDate}</span>
                                        </div>
                                        <div className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                                            {manualReviews[0].tripType}
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 rounded-2xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        {manualReviews[0].source === 'TripAdvisor' ? (
                                            <img
                                                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                                                alt="TripAdvisor"
                                                className="h-6 w-auto"
                                            />
                                        ) : (
                                            <img
                                                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                                                alt="Google"
                                                className="h-6 w-auto"
                                            />
                                        )}
                                        <span className="font-bold text-slate-900">Verified Review</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-sm text-slate-600">Platform</p>
                                            <p className="font-medium">{manualReviews[0].source}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-600">Date Posted</p>
                                            <p className="font-medium">{manualReviews[0].date}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-600">Rating</p>
                                            <div className="flex items-center gap-2">
                                                <div className="flex gap-0.5">
                                                    {[...Array(manualReviews[0].rating)].map((_, i) => (
                                                        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                                                    ))}
                                                </div>
                                                <span className="font-bold">{manualReviews[0].rating}.0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href={manualReviews[0].sourceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center gap-2 text-[#34E0A1] font-medium hover:underline text-sm"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        View on {manualReviews[0].source}
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* All Reviews Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {manualReviews.slice(1).map((review) => (
                            <div
                                key={review.id}
                                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-[#34E0A1]/30 group"
                                onClick={() => review.sourceUrl && window.open(review.sourceUrl, '_blank')}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="flex gap-0.5">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={14}
                                                        className="fill-amber-400 text-amber-400"
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-slate-500">{review.date}</span>
                                        </div>
                                        <h4 className="font-bold text-slate-900 line-clamp-1 group-hover:text-[#34E0A1] transition-colors">
                                            {review.title}
                                        </h4>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className={`px-2 py-1 rounded text-xs font-bold ${review.source === 'TripAdvisor' ? 'bg-[#34E0A1]/10 text-[#34E0A1]' : 'bg-blue-100 text-blue-600'}`}>
                                            {review.source}
                                        </div>
                                        <ExternalLink size={14} className="text-slate-400 group-hover:text-[#34E0A1] transition-colors" />
                                    </div>
                                </div>

                                <p className="text-slate-700 text-sm mb-4 line-clamp-4">
                                    "{review.content.substring(0, 200)}..."
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center group-hover:bg-[#34E0A1]/10 transition-colors">
                                            <User size={14} className="text-slate-500 group-hover:text-[#34E0A1] transition-colors" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm">{review.author}</p>
                                            {/*{review.country && (*/}
                                            {/*    <p className="text-xs text-slate-500 flex items-center gap-1">*/}
                                            {/*        {getCountryFlag(review.country) && (*/}
                                            {/*            <img*/}
                                            {/*                src={getCountryFlag(review.country)!}*/}
                                            {/*                alt={review.country}*/}
                                            {/*                className="w-4 h-3 rounded inline-block"*/}
                                            {/*            />*/}
                                            {/*        )}*/}
                                            {/*        {review.country}*/}
                                            {/*    </p>*/}
                                            {/*)}*/}
                                        </div>
                                    </div>
                                    <CheckCircle size={16} className="text-green-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Stats Section */}
            <section className="py-20 px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center font-serif">
                        Our <span className="text-sky-500">Ratings</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Google Rating */}
                        <div className="bg-gradient-to-br from-[#4285F4]/5 to-white p-8 rounded-3xl border border-[#4285F4]/20 text-center">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <img
                                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                                    alt="Google"
                                    className="h-8 w-auto"
                                />
                                <h3 className="text-xl font-bold text-slate-900">Google</h3>
                            </div>
                            <div className="text-6xl font-black text-[#4285F4] mb-4">5.0</div>
                            <div className="flex gap-1 justify-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={24} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className="text-slate-600 mb-6">Based on Google reviews</p>
                            <a
                                href={GOOGLE_SEARCH_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#4285F4] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3367D6] transition-colors"
                            >
                                <Search size={16} />
                                Search on Google
                            </a>
                        </div>

                        {/* TripAdvisor Widget */}
                        <div className="md:col-span-2 bg-white p-8 rounded-3xl border-2 border-[#34E0A1]/20 shadow-xl">
                            <div className="mb-6 flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                                        alt="TripAdvisor"
                                        className="h-8 w-auto"
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">Live TripAdvisor Reviews</h3>
                                        <p className="text-slate-600 text-sm">Real-time reviews from travelers</p>
                                    </div>
                                </div>
                                <CheckCircle className="text-[#34E0A1]" size={24} />
                            </div>

                            {/* TripAdvisor Widget Container */}
                            <div id="tripadvisor-widget-container">
                                <div id="TA_selfserveprop189" className="TA_selfserveprop">
                                    <ul id="0jkyy07l3" className="TA_links iF2P0IT">
                                        <li id="iQbXX4S" className="3jkq2z">
                                            <a target="_blank" href={TRIPADVISOR_URL}>
                                                <img
                                                    src="https://static.tacdn.com/img2/widget/tripadvisor_logo_115x18.gif"
                                                    alt="TripAdvisor"
                                                    className="widEXCIMG"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-200">
                                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                    <p className="text-slate-600">
                                        Search for more reviews
                                    </p>
                                    <div className="flex gap-3">
                                        {/*<a*/}
                                        {/*    href={GOOGLE_SEARCH_URL}*/}
                                        {/*    target="_blank"*/}
                                        {/*    rel="noopener noreferrer"*/}
                                        {/*    className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full font-medium hover:bg-slate-200 transition-colors"*/}
                                        {/*>*/}
                                        {/*    <img*/}
                                        {/*        src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"*/}
                                        {/*        alt="Google"*/}
                                        {/*        className="h-4 w-auto"*/}
                                        {/*    />*/}
                                        {/*    Google*/}
                                        {/*</a>*/}
                                        <a
                                            href={TRIPADVISOR_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-[#2d8f68] text-white px-4 py-2 rounded-full font-medium hover:scale-105 transition-colors"
                                        >
                                            <img
                                                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                                                alt="TripAdvisor"
                                                className="h-4 w-auto invert"
                                            />
                                            TripAdvisor
                                        </a>
                                    </div>
                                </div>
                            </div>
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
                            Experience why travelers rate us excellent on TripAdvisor and Google.
                            Book your adventure and join our community of satisfied guests.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-block bg-white text-[#2170d0] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg relative z-10"
                            >
                                Book Your Trip
                            </Link>
                            <div className="flex gap-4">
                                {/*<a*/}
                                {/*    href={GOOGLE_REVIEWS_URL}*/}
                                {/*    target="_blank"*/}
                                {/*    rel="noopener noreferrer"*/}
                                {/*    className="inline-block bg-[#4285F4] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#3367D6] transition-colors duration-300 shadow-lg relative z-10 flex items-center gap-2"*/}
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
                                {/*    className="inline-block bg-[#34E0A1] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2d8f68] transition-colors duration-300 shadow-lg relative z-10 flex items-center gap-2"*/}
                                {/*>*/}
                                {/*    <img*/}
                                {/*        src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"*/}
                                {/*        alt="TripAdvisor"*/}
                                {/*        className="h-5 w-auto invert"*/}
                                {/*    />*/}
                                {/*    Review on TripAdvisor*/}
                                {/*</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Badges */}
            {/*<div className="bg-white border-t border-slate-200 py-8">*/}
            {/*    <div className="max-w-7xl mx-auto px-8">*/}
            {/*        <div className="flex flex-col md:flex-row items-center justify-between gap-6">*/}
            {/*            <div>*/}
            {/*                <h3 className="font-bold text-slate-900 mb-2">Ceylon Visit Tours - Sri Lanka Galle</h3>*/}
            {/*                <p className="text-slate-600 text-sm">Rated Excellent on All Platforms</p>*/}
            {/*            </div>*/}
            {/*            <div className="flex gap-4">*/}
            {/*                <a*/}
            {/*                    href={TRIPADVISOR_URL}*/}
            {/*                    target="_blank"*/}
            {/*                    rel="noopener noreferrer"*/}
            {/*                    className="flex items-center gap-3 bg-[#2d8f68] text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg"*/}
            {/*                >*/}
            {/*                    <img*/}
            {/*                        src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"*/}
            {/*                        alt="TripAdvisor"*/}
            {/*                        className="h-5 w-auto"*/}
            {/*                    />*/}
            {/*                    #1 in Galle District*/}
            {/*                </a>*/}
            {/*                <a*/}
            {/*                    href={GOOGLE_SEARCH_URL}*/}
            {/*                    target="_blank"*/}
            {/*                    rel="noopener noreferrer"*/}
            {/*                    className="flex items-center gap-3 bg-[#4285F4] text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg"*/}
            {/*                >*/}
            {/*                    <img*/}
            {/*                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"*/}
            {/*                        alt="Google"*/}
            {/*                        className="h-5 w-auto"*/}
            {/*                    />*/}
            {/*                    5.0 Google Rating*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </main>
    );
}