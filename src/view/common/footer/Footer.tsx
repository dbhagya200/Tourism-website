import { Link } from "react-router-dom";
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    MessageCircle,
    Youtube,
    MessageSquare,
    Globe,
    Star,
    Send
} from "lucide-react";

// TikTok SVG Logo Component
export function TiktokIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="tiktok-icon"
        >
            <path
                d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                fill="currentColor"
            />
        </svg>
    );
}

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

                        {/* Social Icons - All Platforms */}
                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            {[
                                {
                                    icon: Facebook,
                                    href: "https://www.facebook.com/share/1C8r22fs8y/?mibextid=wwXIfr",
                                    label: "Facebook",
                                    color: "hover:bg-blue-600 hover:border-blue-600"
                                },
                                {
                                    icon: Instagram,
                                    href: "https://www.instagram.com/ceylonvisittourssrilanka?igsh=MTJ0MjNtYTIweXlseA%3D%3D&utm_source=qr",
                                    label: "Instagram",
                                    color: "hover:bg-pink-600 hover:border-pink-600"
                                },
                                {
                                    icon: TiktokIcon,
                                    href: "https://www.tiktok.com/@ceylonvisittours?_r=1&_t=ZS-93dQ65dxUTH",
                                    label: "TikTok",
                                    color: "hover:bg-black hover:border-black"
                                },
                                {
                                    icon: Youtube,
                                    href: "https://youtube.com/@ceylonvisittours?si=v3X1aFEAW88jqcze",
                                    label: "YouTube",
                                    color: "hover:bg-red-600 hover:border-red-600"
                                },
                                {
                                    icon: Star,
                                    href: "https://share.google/IrlqKkU39u7eX2QxY",
                                    label: "Google",
                                    color: "hover:bg-green-600 hover:border-green-600"
                                },
                                {
                                    icon: Globe,
                                    href: "https://www.tripadvisor.co.uk/Attraction_Review-g297896-d27698089-Reviews-Ceylon_Visit_Tours_Sri_Lanka-Galle_Galle_District_Southern_Province.html",
                                    label: "TripAdvisor",
                                    color: "hover:bg-emerald-600 hover:border-emerald-600"
                                },
                                {
                                    icon: MessageCircle,
                                    href: "https://wa.me/message/RUNTC5D42W2QI1",
                                    label: "WhatsApp",
                                    color: "hover:bg-green-500 hover:border-green-500"
                                },
                                {
                                    icon: MessageSquare,
                                    href: "weixin://dl/chat?wxid_mdvgqxr7r9jr12",
                                    label: "WeChat",
                                    color: "hover:bg-green-400 hover:border-green-400"
                                },
                                {
                                    icon: Send,
                                    href: "https://t.me/ceylonvisittourssrilanka",
                                    label: "Telegram",
                                    color: "hover:bg-blue-500 hover:border-blue-500"
                                }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-sky-100 ${social.color} hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg`}
                                    aria-label={social.label}
                                    title={social.label}
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
                                    // { to: "/packages", label: "Packages" },
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
                                { icon: Phone, text: "+94 76 431 0628", href: "tel:+94764310628" },
                                { icon: Mail, text: "ceylonvisittours@gmail.com", href: "mailto:ceylonvisittours@gmail.com" },
                                { icon: MapPin, text: "No 84/2, Havelock Rd, Galle 80000", href: "https://maps.google.com/?q=No+84/2,+Havelock+Rd,+Galle+80000" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 lg:gap-3 group">
                                    <div className="text-sky-500 group-hover:text-white transition-colors">
                                        <item.icon size={16} className="lg:w-[18px] lg:h-[18px]" />
                                    </div>
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith("http") ? "_blank" : "_self"}
                                        rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
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