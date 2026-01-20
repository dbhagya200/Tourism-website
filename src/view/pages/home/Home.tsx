import { Link } from "react-router-dom";
import { Play, ArrowRight, Star, MapPin, Eye } from "lucide-react";
import { featuredPackages, featuredReviews } from "../../../GlobalData.ts";

export function Home() {
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
                            to="/packages"
                            className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 py-3 rounded-full font-bold hover:scale-105 hover:shadow-lg hover:shadow-sky-500/40 transition-all duration-300 border border-white/10 text-sm md:text-base"
                        >
                            Explore Packages
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- Reels Teaser Section --- */}
            <section className="py-16 px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 max-w-7xl mx-auto">
                    <div className="max-w-7xl mx-auto text-center ">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-slate-900">
                            Travel <span className="text-sky-500">Shorts</span>
                        </h2>
                        <p className="text-slate-500 text-sm">Quick glimpses of the island life</p>
                    </div>
                    <Link to="/reels" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 hover:opacity-80 transition-opacity">
                        View All Shorts <ArrowRight size={14} className="text-sky-600" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
                    {[
                        { id: 1, title: "Ella Views", url: "https://www.youtube.com/embed/pSj7jS9XNn0" },
                        { id: 2, title: "Mirissa", url: "https://www.youtube.com/embed/j_N8YgK8Vyo" },
                        { id: 3, title: "Safari", url: "https://www.youtube.com/embed/S_vTOnY_F_M" },
                        { id: 4, title: "Nature", url: "https://www.youtube.com/embed/0SNoX_eF_L8" },
                    ].map((reel) => (
                        <div key={reel.id} className="relative aspect-[9/16] rounded-xl overflow-hidden group shadow-lg shadow-sky-100" data-aos="zoom-in">
                            <iframe
                                src={`${reel.url}?controls=0&modestbranding=1&rel=0&loop=1&mute=1&autoplay=0`}
                                title={reel.title}
                                className="w-full h-full object-cover pointer-events-none"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-50 group-hover:opacity-80 transition-all duration-300"></div>

                            <Link to="/reels" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-transform border border-white/20">
                                    <Play size={16} fill="currentColor" className="ml-1" />
                                </div>
                            </Link>

                            <div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="block text-center text-xs font-bold text-slate-800 bg-white/95 backdrop-blur-md py-1.5 rounded-lg shadow-sm border border-sky-100">
                                    {reel.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link to="/reels" className="inline-flex items-center gap-2 text-xs text-sky-600 font-bold uppercase tracking-wider">
                        View Gallery <ArrowRight size={14} />
                    </Link>
                </div>
            </section>

            {/* --- Packages Teaser Section --- */}
            <section className="py-16 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-slate-900">
                        Popular <span className="text-sky-500">Destinations</span>
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto text-base">
                        Our most booked luxury experiences tailored for comfort and adventure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {featuredPackages.map((pkg, idx) => (
                        <div key={pkg.id} className="bg-white rounded-[1.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-sky-200/50 hover:-translate-y-2 transition-all duration-300 flex flex-col group border border-slate-100" data-aos="fade-up" data-aos-delay={idx * 100}>
                            <div className="h-60 overflow-hidden relative">
                                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                                    {pkg.duration}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 font-serif text-slate-900 group-hover:text-sky-600 transition-colors">{pkg.title}</h3>
                                <div className="mt-auto pt-4 border-t border-slate-100">
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wide mb-1 font-semibold">Starting from</p>
                                    <div className="flex justify-between items-end">
                                        <p className="text-2xl font-black text-slate-800">{pkg.price}</p>
                                        <Link
                                            to="/packages"
                                            className="bg-sky-50 text-sky-700 px-5 py-2 rounded-lg font-bold text-xs hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:text-white transition-all hover:shadow-lg flex items-center gap-2"
                                        >
                                            View <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/packages" className="inline-flex items-center gap-2 border-2  border-blue-950 bg-amber-50-400 text-slate-600 px-8 py-3 rounded-full hover:border-sky-500 hover:text-sky-600 transition-colors font-bold uppercase tracking-wider text-xs">
                        Explore All Packages
                    </Link>
                </div>
            </section>

            {/* --- Reviews Teaser Section --- */}
            <section className="py-20 px-6 md:px-12 relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-white">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-slate-900 leading-tight">
                            Loved by <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Travelers</span>
                        </h2>
                        <p className="text-slate-600 mb-8 text-base leading-relaxed">
                            Don't just take our word for it. Read verified reviews from guests who have experienced the magic.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/reviews" className="inline-flex justify-center items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-sky-600 transition-colors shadow-xl shadow-slate-900/20 text-sm">
                                Read All Stories <ArrowRight size={16} />
                            </Link>
                            <div className="inline-flex justify-center items-center gap-2 bg-white px-6 py-3 rounded-xl border border-slate-200 shadow-sm text-slate-700 text-sm">
                                <Star size={16} className="text-yellow-400" fill="currentColor" />
                                <span className="font-bold">4.9/5 Rating</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-5">
                        {featuredReviews.map((review) => (
                            <div key={review.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-sky-100/50 hover:shadow-2xl transition-shadow" data-aos="fade-up">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex gap-1 text-yellow-400">
                                        {[...Array(review.stars)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                    </div>
                                </div>
                                <p className="text-slate-600 italic mb-4 text-base leading-relaxed">"{review.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center font-bold text-blue-600 text-base border border-sky-100">
                                        {review.name.charAt(0)}
                                    </div>
                                    <span className="font-bold text-slate-900 text-sm">{review.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Gallery Teaser Section --- */}
            <section className="py-20 px-6 md:px-12 text-center bg-white">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-slate-900">
                    Captured <span className="text-sky-500">Moments</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto h-[400px] mb-10">
                    <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group shadow-lg cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1529230117010-335661a5b89a?auto=format&fit=crop&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Sri Lanka 1" />
                    </div>
                    <div className="rounded-2xl overflow-hidden relative group shadow-lg">
                        <img src="https://images.unsplash.com/photo-1552423158-efc54b6df1e1?auto=format&fit=crop&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Sri Lanka 2" />
                    </div>
                    <div className="rounded-2xl overflow-hidden relative group shadow-lg">
                        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Sri Lanka 3" />
                    </div>
                    <div className="col-span-2 rounded-2xl overflow-hidden relative group flex items-center justify-center bg-slate-100 shadow-lg">
                        <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=600" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" alt="Sri Lanka 4" />

                        <Link to="/gallery" className="absolute inset-0 flex flex-col items-center justify-center bg-blue-900/40 hover:bg-blue-900/60 transition-colors z-10 group cursor-pointer backdrop-blur-[2px]">
                            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full mb-2 group-hover:scale-110 transition-transform shadow-xl border border-white/30">
                                <Eye size={28} className="text-white" />
                            </div>
                            <span className="text-white font-bold text-lg drop-shadow-lg tracking-wider">VIEW GALLERY</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- Contact CTA --- */}
            <section className="py-20 px-6 md:px-12 bg-sky-50">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-sky-400 to-blue-600 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl shadow-sky-400/30 relative overflow-hidden" data-aos="zoom-in">

                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <h2 className="text-3xl md:text-5xl font-serif font-black mb-4 relative z-10">Ready for your <br/>Dream Vacation?</h2>
                    <p className="text-base md:text-xl text-sky-100 max-w-xl mx-auto mb-8 relative z-10 font-light">
                        Let us handle the details while you create the memories.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-50 hover:shadow-xl hover:scale-105 transition-all relative z-10 shadow-lg">
                        <MapPin size={20} />
                        Plan My Trip
                    </Link>
                </div>
            </section>
        </main>
    );
}