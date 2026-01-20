import { Link } from "react-router-dom";
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    MessageCircle,
} from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gradient-to-br from-slate-900 to-blue-950 border-t border-sky-900/30 py-12 md:py-16 px-6 md:px-8 mt-auto text-white font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 text-center md:text-left">

                    {/* Brand Section */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <h2 className="text-2xl font-black tracking-tight text-white mb-4">
                            CEYLON <span className="text-sky-400">VISTA TOURS</span>
                        </h2>
                        <p className="text-sky-100/80 mb-6 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                            Ceylon Vista Tours provides world-class travel experiences across
                            Sri Lanka. Discover hidden gems with unmatched luxury and local
                            expertise.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3 justify-center md:justify-start">
                            {[
                                { icon: Facebook, href: "https://facebook.com/ceylonvistatours", label: "Facebook" },
                                { icon: Instagram, href: "https://instagram.com/ceylonvistatours", label: "Instagram" },
                                { icon: MessageCircle, href: "https://wa.me/94771234567", label: "WhatsApp" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 md:w-11 md:h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-sky-100 hover:bg-sky-500 hover:text-white hover:border-sky-500 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-white mb-4 text-lg">Quick Links</h3>
                        <ul className="space-y-3 md:space-y-2 flex flex-col items-center md:items-start">
                            {[
                                { to: "/", label: "Home" },
                                { to: "/packages", label: "Sri Lanka Packages" },
                                { to: "/reels", label: "Travel Shorts" },
                                { to: "/contact", label: "Contact Us" }
                            ].map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-sky-100/70 hover:text-sky-400 transition-colors text-sm font-medium flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500/0 group-hover:bg-sky-500 transition-all duration-300 hidden md:block"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-white mb-4 text-lg">Contact Info</h3>
                        <ul className="space-y-4 flex flex-col items-center md:items-start">
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 group">
                                <div className="p-2 rounded-lg bg-sky-900/30 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                                    <Phone size={18} />
                                </div>
                                <span className="text-sky-100/80 text-sm md:mt-1.5">+94 77 123 4567</span>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 group">
                                <div className="p-2 rounded-lg bg-sky-900/30 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                                    <Mail size={18} />
                                </div>
                                <span className="text-sky-100/80 text-sm md:mt-1.5">
                                    info@ceylonvistatours.lk
                                </span>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 group">
                                <div className="p-2 rounded-lg bg-sky-900/30 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                                    <MapPin size={18} />
                                </div>
                                <span className="text-sky-100/80 text-sm md:mt-1.5">
                                    Colombo 07, Sri Lanka
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-sky-900/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-sky-200/50 text-xs md:text-sm">
                        &copy; 2026 Ceylon Vista Tours Sri Lanka. All Rights Reserved.
                    </p>
                    <div className="flex gap-6 text-xs md:text-sm text-sky-200/50">
                        <Link to="#" className="hover:text-sky-400 transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-sky-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}