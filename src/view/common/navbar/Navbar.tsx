import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// CHANGED: Renamed "Navigation" to "Navbar" and used named export to match your project
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
        { path: "/reels", label: "Travel Reels" },
        { path: "/reviews", label: "Reviews" },
        { path: "/gallery", label: "Gallery" },
        { path: "/contact", label: "Contact" },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-slate-900/90 backdrop-blur-md border-b border-white/10 py-3 px-8"
                    : "bg-transparent py-6 px-8"
            }`}
        >
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                <Link
                    to="/"
                    className="text-xl font-black tracking-tight text-teal-400 hover:text-teal-300 transition-colors"
                >
                    CEYLON VISTA
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-8 list-none">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`text-sm font-medium transition-all duration-300 ${
                                    isActive(link.path)
                                        ? "text-slate-100/80 hover:text-teal-400"
                                        : "text-slate-100/80 hover:text-teal-400"
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Book Button */}
                <Link
                    to="/contact"
                    className="hidden md:inline-block bg-teal-400 text-slate-900 px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-teal-400/30"
                >
                    Book a Trip
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="md:hidden flex flex-col gap-1.5 justify-center w-6 h-6"
                    aria-label="Toggle menu"
                >
          <span
              className={`w-6 h-0.5 bg-slate-100 transition-all duration-300 ${
                  isMobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
                    <span
                        className={`w-6 h-0.5 bg-slate-100 transition-all duration-300 ${
                            isMobileOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-slate-100 transition-all duration-300 ${
                            isMobileOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    />
                </button>

                {/* Mobile Navigation */}
                {isMobileOpen && (
                    <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-white/10 md:hidden shadow-xl">
                        <ul className="flex flex-col p-4 gap-2">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsMobileOpen(false)}
                                        className={`block px-4 py-2 rounded-md transition-all duration-300 ${
                                            isActive(link.path)
                                                ? "bg-teal-400 text-slate-900 font-semibold"
                                                : "text-slate-100/80 hover:bg-slate-800"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="block px-4 py-2 rounded-md bg-teal-400 text-slate-900 font-bold text-center hover:bg-teal-300 transition-colors mt-2"
                                >
                                    Book a Trip
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}