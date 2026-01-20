import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/packages", label: "Packages" },
        { path: "/reels", label: "TravelReels" },
        { path: "/reviews", label: "Reviews" },
        { path: "/gallery", label: "Gallery" },
        { path: "/contact", label: "Contact" },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-gray-300 backdrop-blur-md border-b border-sky-100 py-3 px-6 md:px-8 shadow-sm"
                    : "bg-transparent py-6 px-6 md:px-8"
            }`}
        >
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-300 ${
                        isScrolled ? "text-blue-600" : "text-white"
                    } hover:text-sky-400`}
                >
                    CEYLON <span className={isScrolled ? "text-sky-400" : "text-sky-200"}>VISTA</span>
                </Link>

                <ul className="hidden lg:flex gap-8 list-none items-center">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`text-sm font-bold transition-all duration-300 ${
                                    isActive(link.path)
                                        ? "text-sky-400"
                                        : isScrolled
                                            ? "text-slate-600 hover:text-sky-500"
                                            : "text-white/90 hover:text-sky-200"
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    to="/contact"
                    className={`hidden lg:inline-block px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md ${
                        isScrolled
                            ? "bg-gradient-to-r from-sky-400 to-blue-600 text-white hover:shadow-sky-200"
                            : "bg-white text-blue-600 hover:bg-sky-50"
                    } hover:scale-105 hover:shadow-lg`}
                >
                    Book a Trip
                </Link>

                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="lg:hidden flex flex-col gap-1.5 justify-center w-6 h-6 z-50 relative"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-6 h-0.5 transition-all duration-300 ${
                            isScrolled || isMobileOpen ? "bg-slate-800" : "bg-white"
                        } ${isMobileOpen ? "rotate-45 translate-y-2 !bg-slate-800" : ""}`}
                    />
                    <span
                        className={`w-6 h-0.5 transition-all duration-300 ${
                            isScrolled || isMobileOpen ? "bg-slate-800" : "bg-white"
                        } ${isMobileOpen ? "opacity-0" : ""}`}
                    />
                    <span
                        className={`w-6 h-0.5 transition-all duration-300 ${
                            isScrolled || isMobileOpen ? "bg-slate-800" : "bg-white"
                        } ${isMobileOpen ? "-rotate-45 -translate-y-2 !bg-slate-800" : ""}`}
                    />
                </button>

                {/* Mobile/Tablet Navigation Drawer */}
                <div
                    className={`absolute top-0 right-0 w-3/4 md:w-[400px] h-screen bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-24 px-8 gap-4 ${
                        isMobileOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    {/* Drawer Logo */}
                    <div className="absolute top-6 left-8 text-xl font-black text-blue-600">
                        CEYLON <span className="text-sky-400">VISTA</span>
                    </div>

                    <ul className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    onClick={() => setIsMobileOpen(false)}
                                    className={`block px-4 py-3 rounded-xl transition-all duration-300 text-lg font-bold ${
                                        isActive(link.path)
                                            ? "bg-sky-50 text-blue-600 border border-sky-100"
                                            : "text-slate-500 hover:bg-slate-50 hover:text-blue-600"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4 border-t border-slate-100 pt-6">
                        <Link
                            to="/contact"
                            onClick={() => setIsMobileOpen(false)}
                            className="block w-full py-4 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-white font-bold text-center shadow-lg shadow-sky-200 hover:shadow-sky-300 transition-all"
                        >
                            Book a Trip Now
                        </Link>
                    </div>
                </div>

                {/* Overlay */}
                {isMobileOpen && (
                    <div
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] lg:hidden"
                        onClick={() => setIsMobileOpen(false)}
                    />
                )}
            </nav>
        </header>
    );
}