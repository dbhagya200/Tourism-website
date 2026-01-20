import { Star, Quote, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { allReviews } from "../../../GlobalData.ts";

export function Reviews() {
    const averageRating = (
        allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length
    ).toFixed(1);

    return (
        // THEME: Light Background
        <main className="min-h-screen font-sans text-slate-800 bg-white">

            {/* Header / Hero Section */}
            <section
                className="relative h-[100vh] flex items-center justify-center bg-cover bg-center bg-fixed"
                style={{
                    // Happy Travelers / Group Image
                    backgroundImage: "url('https://www.lovesrilanka.org/wp-content/uploads/2020/06/LS_B2_Main-landing-page_1920x700-1.jpg')"
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/40"></div>

                <div className="max-w-7xl mx-auto w-full px-8 relative z-10 mt-20">
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 font-serif drop-shadow-xl text-center md:text-left">
                        Guest <span className="text-sky-400">Reviews</span>
                    </h1>

                    {/* Rating Badge */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={28}
                                            className="fill-amber-400 text-amber-400 drop-shadow-sm"
                                        />
                                    ))}
                                </div>
                                <span className="text-4xl font-black text-white drop-shadow-md">
                                    {averageRating}
                                </span>
                            </div>
                            <p className="text-sky-100 font-medium text-lg">
                                Based on {allReviews.length} verified reviews
                            </p>
                        </div>
                        <Link
                            to="/contact"
                            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg text-center whitespace-nowrap"
                        >
                            Book Your Trip
                        </Link>
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="py-20 px-8 bg-gradient-to-b from-white via-sky-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {allReviews.map((review, idx) => (
                            <div
                                key={review.id}
                                // CARD THEME: White card with Sky Blue shadow
                                className="bg-white border border-slate-100 rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-sky-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col relative group"
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                {/* Quote Icon Background */}
                                <Quote size={80} className="absolute top-8 right-8 text-sky-100 rotate-180 pointer-events-none group-hover:text-sky-200 transition-colors" />

                                <div className="flex gap-1 mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={20}
                                            className="fill-amber-400 text-amber-400"
                                        />
                                    ))}
                                </div>

                                <p className="text-slate-600 mb-8 italic flex-1 text-lg leading-relaxed relative z-10 font-medium">
                                    "{review.comment}"
                                </p>

                                <div className="flex items-center gap-5 pt-6 border-t border-slate-100">
                                    <img
                                        src={review.avatar}
                                        alt={review.name}
                                        className="w-16 h-16 rounded-full border-2 border-sky-100 object-cover shadow-sm"
                                    />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p className="font-bold text-slate-900 text-lg">{review.name}</p>
                                            {review.verified && (
                                                <CheckCircle size={18} className="text-sky-500" fill="currentColor" stroke="white" />
                                            )}
                                        </div>
                                        <p className="text-slate-400 text-sm font-semibold">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-8 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12 text-center font-serif">
                        Why Our Guests <span className="text-sky-500">Love Us</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { stat: "1,240+", label: "Happy Guests" },
                            { stat: "98%", label: "Satisfaction Rate" },
                            { stat: "50+", label: "Expert Guides" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="text-center p-12 bg-sky-50 rounded-3xl border border-sky-100 hover:-translate-y-2 transition-transform duration-300"
                                data-aos="zoom-in"
                                data-aos-delay={idx * 100}
                            >
                                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 mb-4 font-serif">
                                    {item.stat}
                                </div>
                                <p className="text-slate-500 uppercase tracking-widest font-bold text-sm">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-8 bg-white">
                <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-sky-500 to-blue-600 p-12 rounded-[3rem] shadow-2xl shadow-sky-500/30 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-serif relative z-10">
                        Join Our Community of Happy Travelers
                    </h2>
                    <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                        Experience the Ceylon Vista Tours difference. Book your adventure
                        today and become part of our success stories.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg relative z-10"
                    >
                        Plan Your Trip Now
                    </Link>
                </div>
            </section>
        </main>
    );
}