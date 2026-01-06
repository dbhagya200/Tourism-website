import { Link } from "react-router-dom";
import { Play } from "lucide-react";

export function Home() {

    return (
        <main className="bg-slate-900 ">
            {/* Hero Section */}
            <section
                className="relative h-screen flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="text-center z-10 px-4 mt-20" data-aos="zoom-out">
                    <p className="text-white text-lg font-semibold mb-4 tracking-wider">
                        Sri Lanka's Most Premium Agency
                    </p>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-6 leading-tight font-serif">
                        Discover Local <br/>
                        <span className="text-teal-400">Paradise</span>
                    </h1>
                    <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Experience the ultimate luxury travel in Sri Lanka. From mountains
                        to beaches, we plan it all.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/reels"
                            className="bg-teal-400 text-slate-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] flex items-center justify-center gap-2"
                        >
                            <Play size={20} fill="currentColor" />
                            Watch Stories
                        </Link>
                        <Link
                            to="/packages"
                            className="border-2 border-white/20 text-white backdrop-blur-sm px-8 py-4 rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all duration-300"
                        >
                            Explore Packages
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}