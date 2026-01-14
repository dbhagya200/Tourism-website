import { Star, Quote, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { allReviews} from "../../../GlobalData.ts";

export function Reviews() {
    const averageRating = (
        allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length
    ).toFixed(1);

    return (
        <main className="bg-slate-900 pt-24 min-h-screen">
            {/* Header */}
            <section className="px-8 py-16 bg-gradient-to-b from-slate-800 to-slate-900">
                <div className="max-w-7xl mx-auto">
                    {/* CHANGED: font-display -> font-serif */}
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-serif">
                        Guest Reviews
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={24}
                                            className="fill-amber-400 text-amber-400"
                                        />
                                    ))}
                                </div>
                                <span className="text-3xl font-bold text-white">
                  {averageRating}
                </span>
                            </div>
                            <p className="text-slate-300/80 text-lg">
                                Based on {allReviews.length} verified reviews
                            </p>
                        </div>
                        <Link
                            to="/contact"
                            className="bg-teal-400 text-slate-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-teal-400/30 text-center shadow-[0_0_20px_rgba(45,212,191,0.3)]"
                        >
                            Book Your Trip
                        </Link>
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {allReviews.map((review, idx) => (
                            <div
                                key={review.id}
                                className="bg-slate-800/40 border border-white/10 rounded-3xl p-8 hover:border-teal-400/50 transition-all duration-300 flex flex-col hover:-translate-y-1 relative"
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                {/* Quote Icon Background */}
                                <Quote size={80} className="absolute top-6 right-8 text-white/5 rotate-180 pointer-events-none" />

                                <div className="flex gap-1 mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            className="fill-amber-400 text-amber-400"
                                        />
                                    ))}
                                </div>

                                <p className="text-slate-200 mb-8 italic flex-1 text-lg leading-relaxed relative z-10">
                                    "{review.comment}"
                                </p>

                                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                                    <img
                                        src={review.avatar}
                                        alt={review.name}
                                        className="w-16 h-16 rounded-full border-2 border-teal-400/30"
                                    />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p className="font-bold text-white text-lg">{review.name}</p>
                                            {review.verified && (
                                                <CheckCircle size={16} className="text-teal-400" fill="currentColor" stroke="black" />
                                            )}
                                        </div>
                                        <p className="text-slate-400 text-sm">{review.role}</p>
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
                    <h2 className="text-3xl font-black text-white mb-12 text-center font-serif">
                        Why Our Guests Love Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { stat: "1,240+", label: "Happy Guests" },
                            { stat: "98%", label: "Satisfaction Rate" },
                            { stat: "50+", label: "Expert Guides" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="text-center p-10 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-teal-400/30 transition-colors"
                                data-aos="zoom-in"
                                data-aos-delay={idx * 100}
                            >
                                <div className="text-5xl font-black text-teal-400 mb-2 font-serif">
                                    {item.stat}
                                </div>
                                <p className="text-slate-400 uppercase tracking-widest text-sm">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-8">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-teal-900/20 to-slate-900/40 p-12 rounded-3xl border border-teal-500/20">
                    <h2 className="text-4xl font-black text-white mb-6 font-serif">
                        Join Our Community of Happy Travelers
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                        Experience the Ceylon Vista Tours difference. Book your adventure
                        today and become part of our success stories.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-teal-400 text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-teal-400/30"
                    >
                        Plan Your Trip Now
                    </Link>
                </div>
            </section>
        </main>
    );
}