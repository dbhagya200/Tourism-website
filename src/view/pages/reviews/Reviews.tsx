import { useEffect } from "react";
import { Star, ExternalLink, CheckCircle, Calendar, User, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
// import { allReviews } from "../../../GlobalData.ts";

export function Reviews() {
    const TRIPADVISOR_URL = "https://www.tripadvisor.co.uk/Attraction_Review-g297896-d27698089-Reviews-Ceylon_Visit_Tours_Sri_Lanka-Galle_Galle_District_Southern_Province.html";

    // Manual reviews data - you can add more from TripAdvisor
    const manualReviews = [
        {
            id: 1,
            author: "Sonia D",
            rating: 5,
            date: "September 14, 2025",
            title: "Wonderful family experience in Sri Lanka\n",
            content: "We have just arrived from a 15-day tour in this fascinating country. " +
                "We have traveled with family, children and other family friends." +
                "Sri Lanka really is a highly recommended, very safe and accessible destination for traveling with young children." +
                " The people are super respectful, hospitable and very friendly. Always ready to help and teach you their culture." +
                " It is a very genuine country, of unforgettable landscapes, framed in nature." +
                " Admeh and his team have demonstrated great professionalism, " +
                "guiding our experience always attentive to meet our needs and meet our expectations. " +
                "Always with much pampering, patience and respecting our rhythms and especially the children. " +
                "It has really exceeded our expectation making our experience in your country totally rewarding and very enjoyed. " +
                "It helps you personalize the tour and the different experiences, always conveying a lot of passion," +
                " love and respect for your country and the local people." +
                " I definitely recommend it 100%",
            source: "TripAdvisor",
            sourceUrl: "https://www.tripadvisor.com/ShowUserReviews-g297896-d8862399-r1030310635-Visit_Ceylon_Tours-Galle_Galle_District_Southern_Province.html?m=19905",
            // country: "Switzerland",
            tripType: "Traveled with family",
            stayDate: "September 2025"
        },
        {
            id: 2,
            author: "Julio M",
            rating: 5,
            date: "September 14, 2025",
            title: "Sri lanka in family",
            content: "Thanks to Ahmed and his team we have enjoyed a totally rewarding family experience with children and friends in an extraordinary country like Sri Lanka." +
                " Very professional, detailed, respectful and always attentive to the needs of the group and the rhythms " +
                "and expectations of the little ones. We have felt very well accompanied by him. Sri Lanka is a very hospitable, " +
                "genuine and captivating country. I recommend it 100%, always with Ahmed’s guide that will make " +
                "you even more surprised by his country.",
            source: "TripAdvisor",
            sourceUrl: "https://www.tripadvisor.com/ShowUserReviews-g297896-d8862399-r1030312385-Visit_Ceylon_Tours-Galle_Galle_District_Southern_Province.html?m=19905",
            // country: "United Kingdom",
            tripType: "Traveled with family",
            stayDate: "September 2025"
        },
        {
            id: 3,
            author: "Megan H",
            rating: 5,
            date: "April 24, 2025",
            title: "Magical Sri Lanka 🇱🇰",
            content: "Ahmed planned the most magical family vacation for my family to Sri Lanka! Both he and " +
                "our tour guide Fiham (“phenomenal Fiham”, as we called him) love their country and it shows." +
                " Communication was wonderful throughout the planning process and while we were there. " +
                "This country is rich in beauty and history. The enchanting, changing landscapes of mountain" +
                " and sea were spectacular. I feel as though we were able to experience so much during our 10 day trip" +
                ". I wish we could’ve stayed longer! Our itinerary was customized and tailored to suit our needs, " +
                "and this will be remembered as one of, The if not the best, of family vacations!",
            source: "TripAdvisor",
            sourceUrl: "https://www.tripadvisor.com/ShowUserReviews-g297896-d8862399-r1004161577-Visit_Ceylon_Tours-Galle_Galle_District_Southern_Province.html?m=19905",
            // country: "Australia",
            tripType: "Traveled with family",
            stayDate: "March 2025"
        },
        {
            id: 4,
            author: "CultureExplorer",
            rating: 5,
            date: "November 2024",
            title: "Cultural Immersion at its Best",
            content: "Nilan's deep knowledge of Sri Lankan culture and history made our trip educational and fun. We visited places we never would have found on our own. The food experiences were incredible!",
            source: "Google",
            country: "Germany",
            tripType: "Solo",
            stayDate: "October 2024"
        },
        {
            id: 5,
            author: "BeachLover99",
            rating: 5,
            date: "October 2024",
            title: "Perfect Beach & Wildlife Combo",
            content: "We wanted both wildlife and beach time, and Ceylon Visit Tours delivered perfectly. The Yala safari was incredible, and the southern beaches were paradise. Great balance of adventure and relaxation.",
            source: "Google",
            country: "Canada",
            tripType: "Couple",
            stayDate: "September 2024"
        },
        {
            id: 6,
            author: "MountainHiker",
            rating: 5,
            date: "September 2024",
            title: "Excellent Hill Country Tour",
            content: "The train ride through tea plantations was magical. Our guide knew all the best viewpoints and tea factories. Accommodations in Nuwara Eliya were charming and authentic.",
            source: "TripAdvisor",
            sourceUrl: "https://www.tripadvisor.com/ShowUserReviews-g297896-d8862399-r1028765432",
            country: "USA",
            tripType: "Family",
            stayDate: "August 2024"
        }
    ];

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
                                <span className="font-bold">{manualReviews.length * 50}+</span> verified reviews across platforms
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

                    {/* Main Featured Review (The one you linked) */}
                    <div className="bg-white rounded-3xl border-2 border-[#34E0A1]/20 shadow-xl p-8 mb-12">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#34E0A1]/10 p-3 rounded-full">
                                    <MessageCircle className="text-[#34E0A1]" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Review of the Year</h3>
                                    <p className="text-slate-600 text-sm">Most detailed review from September 2025</p>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2">
                                <h4 className="text-lg font-bold text-slate-900 mb-3">
                                    {manualReviews[0].title}
                                </h4>
                                <p className="text-slate-700 mb-6 leading-relaxed">
                                    "{manualReviews[0].content}"
                                </p>

                                <div className="flex items-center gap-4 flex-wrap">
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <User size={14} />
                                        <span>{manualReviews[0].author}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <img
                                            src={`https://flagcdn.com/w20/${manualReviews[0].country === 'Switzerland' ? 'ch' : 'gb'}.png`}
                                            alt={manualReviews[0].country}
                                            className="w-5 h-3 rounded"
                                        />
                                        <span>{manualReviews[0].country}</span>
                                    </div>
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
                                    <img
                                        src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                                        alt="TripAdvisor"
                                        className="h-6 w-auto"
                                    />
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
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                                                ))}
                                            </div>
                                            <span className="font-bold">5.0</span>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href={manualReviews[0].sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 text-[#34E0A1] font-medium hover:underline text-sm"
                                >
                                    View on TripAdvisor
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* All Reviews Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {manualReviews.slice(1).map((review) => (
                            <div
                                key={review.id}
                                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
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
                                        <h4 className="font-bold text-slate-900 line-clamp-1">{review.title}</h4>
                                    </div>
                                    <div className={`px-2 py-1 rounded text-xs font-bold ${review.source === 'TripAdvisor' ? 'bg-[#34E0A1]/10 text-[#34E0A1]' : 'bg-blue-100 text-blue-600'}`}>
                                        {review.source}
                                    </div>
                                </div>

                                <p className="text-slate-700 text-sm mb-4 line-clamp-4">
                                    "{review.content}"
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                                            <User size={14} className="text-slate-500" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm">{review.author}</p>
                                            <p className="text-xs text-slate-500">{review.country}</p>
                                        </div>
                                    </div>
                                    <CheckCircle size={16} className="text-green-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Live TripAdvisor Widget Section */}
            <section className="py-20 px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white p-8 rounded-3xl border-2 border-[#34E0A1]/20 shadow-xl">
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

                        <div className="mt-8 pt-8 border-t border-slate-200 text-center">
                            <a
                                href={TRIPADVISOR_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#34E0A1] to-[#2d8f68] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
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
        </main>
    );
}