import { useState, useMemo } from "react";
import { Star, MapPin, Clock, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { packages } from "../../../GlobalData.ts";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// --- MAP ICON FIX ---
// Leaflet markers sometimes disappear in React builds. This fixes the default icon.
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

// --- MOCK COORDINATES ---
const getCoordinates = (location: string) => {
    const loc = location.toLowerCase();
    if (loc.includes("kandy")) return [7.2906, 80.6337];
    if (loc.includes("sigiriya")) return [7.9541, 80.7547];
    if (loc.includes("ella")) return [6.8667, 81.0466];
    if (loc.includes("galle") || loc.includes("mirissa")) return [6.0535, 80.2210];
    if (loc.includes("yala") || loc.includes("safari")) return [6.3716, 81.5168];
    if (loc.includes("colombo")) return [6.9271, 79.8612];
    if (loc.includes("nuwara")) return [6.9497, 80.7891];
    return [7.8731, 80.7718]; // Default to center of Sri Lanka (Dambulla area)
};

export function Packages() {
    // --- STATE FOR FILTERING ---
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Define categories manually or derive them from data
    const categories = ["All", "Culture", "Adventure", "Beach", "Wildlife", "Hill Country"];

    // Filter Logic
    const filteredPackages = useMemo(() => {
        if (selectedCategory === "All") return packages;
        return packages.filter((pkg) => {
            const searchStr = (pkg.name + pkg.description + pkg.location).toLowerCase();
            if (selectedCategory === "Culture") return searchStr.includes("temple") || searchStr.includes("heritage") || searchStr.includes("history");
            if (selectedCategory === "Adventure") return searchStr.includes("hike") || searchStr.includes("trek") || searchStr.includes("rafting");
            if (selectedCategory === "Beach") return searchStr.includes("sea") || searchStr.includes("ocean") || searchStr.includes("coast");
            if (selectedCategory === "Wildlife") return searchStr.includes("safari") || searchStr.includes("elephant") || searchStr.includes("leopard");
            if (selectedCategory === "Hill Country") return searchStr.includes("ella") || searchStr.includes("tea") || searchStr.includes("nuwara");
            return true;
        });
    }, [selectedCategory]);

    return (
        <main className="min-h-screen font-sans text-slate-800 bg-white">

            {/* --- HERO SECTION --- */}
            <section
                className="relative h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat md:bg-fixed"
                style={{
                    backgroundImage: "url('https://www.lovesrilanka.org/wp-content/uploads/2019/09/key-destinations_1920x700-10.jpg')"
                }}
            >
                <div className="absolute inset-0 bg-slate-900/50"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10 px-4 mt-16">
                    <p className="text-sky-300 font-bold uppercase tracking-wider mb-2 text-xs md:text-sm drop-shadow-md">
                        Explore the Island
                    </p>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 font-serif drop-shadow-xl">
                        Sri Lanka Holiday <span className="text-sky-400">Packages</span>
                    </h1>
                    <p className="text-slate-100 text-base md:text-lg max-w-xl mx-auto leading-relaxed drop-shadow-md font-medium">
                        Carefully curated travel experiences to suit every adventurer.
                        Choose your perfect getaway below.
                    </p>
                </div>
            </section>

            {/* --- CATEGORY TABS --- */}
            <section className="pt-16 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-6 text-slate-400 text-sm font-bold uppercase tracking-wider">
                        <Filter size={16} /> Filter by Interest
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                                    selectedCategory === cat
                                        ? "bg-sky-500 text-white border-sky-500 shadow-lg shadow-sky-200"
                                        : "bg-white text-slate-500 border-slate-200 hover:border-sky-400 hover:text-sky-500"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MAP SECTION --- */}
            <section className="py-12 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="h-[400px] w-full rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 z-0 relative">
                        <MapContainer
                            center={[7.8731, 80.7718]}
                            zoom={7}
                            scrollWheelZoom={false}
                            style={{ height: "100%", width: "100%" }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            {/* Render Markers for filtered packages */}
                            {filteredPackages.map((pkg) => {
                                const coords = getCoordinates(pkg.location);
                                return (
                                    <Marker key={pkg.id} position={[coords[0], coords[1]]}>
                                        <Popup>
                                            <div className="text-center p-2">
                                                <h3 className="font-bold text-slate-900">{pkg.name}</h3>
                                                <p className="text-xs text-slate-500">{pkg.location}</p>
                                                <div className="mt-2 text-sky-600 font-bold">${pkg.price}</div>
                                            </div>
                                        </Popup>
                                    </Marker>
                                )
                            })}
                        </MapContainer>

                        {/* Map Overlay Label */}
                        <div className="absolute top-4 left-4 z-[400] bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-slate-100">
                            <p className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                                <MapPin size={14} className="text-sky-500" />
                                Showing {filteredPackages.length} Locations
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PACKAGES GRID --- */}
            <section className="pb-20 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPackages.length > 0 ? (
                            filteredPackages.map((pkg, idx) => (
                                <div
                                    key={pkg.id}
                                    className="rounded-[1.5rem] overflow-hidden bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-sky-200/50 hover:-translate-y-2 transition-all duration-300 group flex flex-col"
                                    data-aos="fade-up"
                                    data-aos-delay={idx * 100}
                                >
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={pkg.image}
                                            alt={pkg.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-blue-600 px-3 py-1 rounded-full font-bold text-xs shadow-sm">
                                            ${pkg.price}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif group-hover:text-sky-600 transition-colors">
                                            {pkg.name}
                                        </h3>

                                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-5 border-b border-slate-100 pb-4 font-medium">
                                            <div className="flex items-center gap-1.5">
                                                <MapPin size={14} className="text-sky-500" />
                                                {pkg.location}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock size={14} className="text-sky-500" />
                                                {pkg.duration}
                                            </div>
                                        </div>

                                        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                            {pkg.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="mb-6 flex-1 bg-sky-50/50 p-4 rounded-xl border border-sky-100/50">
                                            <p className="font-bold text-sky-600 text-[10px] uppercase tracking-wider mb-2">
                                                Package Highlights
                                            </p>
                                            <ul className="space-y-1.5">
                                                {pkg.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="text-slate-600 text-xs flex items-start gap-2">
                                                        <span className="text-sky-400 font-bold text-base leading-none mt-[-1px]">•</span>
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Rating & CTA */}
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                                            <div className="flex items-center gap-1">
                                                <Star size={14} className="fill-amber-400 text-amber-400" />
                                                <span className="text-slate-500 text-xs font-bold">{pkg.rating}</span>
                                            </div>
                                            <Link
                                                to="/contact"
                                                className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs hover:shadow-lg hover:shadow-sky-500/30 hover:scale-105 transition-all duration-300"
                                            >
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20">
                                <p className="text-slate-400 text-lg">No packages found for this category.</p>
                                <button
                                    onClick={() => setSelectedCategory("All")}
                                    className="text-sky-500 font-bold mt-2 hover:underline"
                                >
                                    View All Packages
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}