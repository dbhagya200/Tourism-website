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
        <footer className="bg-gradient-to-br from-slate-900 to-blue-950 border-t border-sky-900/30 pt-16 pb-8 px-6 md:px-8 mt-auto text-white font-sans">
            <div className="max-w-7xl mx-auto text-center lg:text-left">

                {/* DESKTOP LAYOUT: 3 Columns (Brand | Links | Contact) */}
                <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-20">

                    {/* --- COLUMN 1: Brand & Socials --- */}
                    <div className="flex flex-col items-center lg:items-start max-w-sm mx-auto lg:mx-0">
                        <h2 className="text-3xl font-black tracking-tight text-white mb-4">
                            CEYLON <span className="text-sky-400">VISTA</span>
                        </h2>
                        <p className="text-sky-100/80 mb-8 text-sm leading-relaxed">
                            Discover hidden gems with unmatched luxury and local expertise across Sri Lanka.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
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
                                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-sky-100 hover:bg-sky-500 hover:text-white hover:border-sky-500 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* --- COLUMN 2: Quick Links --- */}
                    <div className="flex flex-col lg:items-start border-t border-white/10 lg:border-none pt-8 lg:pt-0">
                        <h3 className="font-bold text-white mb-6 text-lg hidden lg:block">Quick Links</h3>

                        {/* RESPONSIVE:
                           - Mobile/Tab: 'flex-row justify-center flex-wrap' (One Line)
                           - Desktop: 'lg:flex-col lg:items-start' (List)
                        */}
                        <nav>
                            <ul className="flex flex-row flex-wrap justify-center gap-6 lg:flex-col lg:gap-3">
                                {[
                                    { to: "/", label: "Home" },
                                    { to: "/packages", label: "Packages" },
                                    { to: "/reels", label: "Shorts" },
                                    { to: "/contact", label: "Contact" }
                                ].map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            className="text-sky-100/70 hover:text-white hover:text-sky-400 transition-colors text-sm font-bold uppercase tracking-wide lg:normal-case lg:font-medium lg:text-base lg:tracking-normal"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* --- COLUMN 3: Contact Info --- */}
                    <div className="flex flex-col lg:items-start border-t border-white/10 lg:border-none pt-8 lg:pt-0">
                        <h3 className="font-bold text-white mb-6 text-lg hidden lg:block">Contact Us</h3>

                        {/* RESPONSIVE:
                           - Mobile/Tab: 'flex-row justify-center flex-wrap' (One Line)
                           - Desktop: 'lg:flex-col lg:items-start' (List)
                        */}
                        <div className="flex flex-row flex-wrap justify-center gap-6 lg:flex-col lg:gap-4">
                            {[
                                { icon: Phone, text: "+94 77 123 4567", href: "tel:+94771234567" },
                                { icon: Mail, text: "info@ceylonvista.lk", href: "mailto:info@ceylonvistatours.lk" },
                                { icon: MapPin, text: "Colombo 07", href: "http://googleusercontent.com/maps.google.com/5" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 lg:gap-3 group">
                                    <div className="text-sky-500 group-hover:text-white transition-colors">
                                        <item.icon size={16} className="lg:w-[18px] lg:h-[18px]" />
                                    </div>
                                    <a
                                        href={item.href}
                                        className="text-sky-100/90 text-sm font-medium hover:text-sky-400 transition-colors whitespace-nowrap"
                                    >
                                        {item.text}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM: Copyright --- */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sky-200/40">
                    <p>
                        © 2026 Ceylon Vista Tours.
                    </p>
                    <div className="flex gap-6">
                        <Link to="#" className="hover:text-sky-400 transition-colors">Privacy</Link>
                        <Link to="#" className="hover:text-sky-400 transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}