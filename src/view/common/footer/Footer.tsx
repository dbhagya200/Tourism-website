import { Facebook, Instagram, Phone, MessageCircle, Mail, MapPin, PhoneCall } from 'lucide-react';
import {Link} from "react-router-dom";

export function Footer () {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Packages', path: '/packages' },
        { name: 'Reels', path: '/reels' },
        { name: 'Contact', path: '/contact' }
    ];
    return (
        <footer className="bg-[#070b14] px-[8%] py-20 border-t border-white/10 mt-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-bold text-primary mb-4 font-serif">CEYLON VISTA TOURS</h2>
                    <p className="text-gray-400 mb-6 max-w-sm">Ceylon Vista Tours provides world-class travel experiences across Sri Lanka. Discover hidden gems with unmatched luxury.</p>
                    <div className="flex gap-4">
                        {[Facebook, Instagram, Phone, MessageCircle].map((Icon, i) => (
                            <a key={i} href="#" className="w-12 h-12 glass-card flex items-center justify-center rounded-xl hover:text-primary hover:scale-110 transition">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-serif font-bold mb-6">Quick Links</h3>
                    <ul className="space-y-3 text-gray-400">
                        {links.map((item) => (
                            <li key={item.name}>
                                {/* Use Link instead of a tag */}
                                <Link to={item.path} className="hover:text-primary transition">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-serif font-bold mb-6">Contact Info</h3>
                    <div className="space-y-4 text-gray-400">
                        <div className="flex items-center gap-3"><PhoneCall size={18} /> +94 77 123 4567</div>
                        <div className="flex items-center gap-3"><Mail size={18} /> info@ceylonvista.lk</div>
                        <div className="flex items-center gap-3"><MapPin size={18} /> Colombo 07, Sri Lanka</div>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-600 mt-16 pt-8 border-t border-white/5">
                &copy; 2026 Ceylon Vista Tours. All Rights Reserved.
            </div>
        </footer>
    );
};
