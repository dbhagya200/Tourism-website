import { Link } from "react-router-dom";
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    MessageCircle,
} from "lucide-react";

// CHANGED: Using named export to match your project structure
export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/10 py-16 px-8 mt-auto">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-black tracking-tight text-teal-400 mb-4">
                            CEYLON VISTA TOURS
                        </h2>
                        <p className="text-slate-300/80 mb-6 text-sm leading-relaxed max-w-sm">
                            Ceylon Vista Tours provides world-class travel experiences across
                            Sri Lanka. Discover hidden gems with unmatched luxury and local
                            expertise.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://facebook.com/ceylonvistatours"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-slate-100 hover:bg-teal-400 hover:text-slate-900 hover:border-teal-400 transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://instagram.com/ceylonvistatours"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-slate-100 hover:bg-teal-400 hover:text-slate-900 hover:border-teal-400 transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://wa.me/94771234567"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-slate-100 hover:bg-teal-400 hover:text-slate-900 hover:border-teal-400 transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-slate-300/80 hover:text-teal-400 transition-colors text-sm"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/packages"
                                    className="text-slate-300/80 hover:text-teal-400 transition-colors text-sm"
                                >
                                    Sri Lanka Packages
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/reels"
                                    className="text-slate-300/80 hover:text-teal-400 transition-colors text-sm"
                                >
                                    Travel Shorts
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-slate-300/80 hover:text-teal-400 transition-colors text-sm"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-white mb-4">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-teal-400 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-300/80 text-sm">+94 77 123 4567</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-teal-400 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-300/80 text-sm">
                  info@ceylonvistatours.lk
                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-teal-400 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-300/80 text-sm">
                  Colombo 07, Sri Lanka
                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8">
                    <p className="text-center text-slate-400 text-sm">
                        &copy; 2026 Ceylon Vista Tours Sri Lanka. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}