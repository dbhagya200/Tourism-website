import { useState } from "react";
import {contactInfo, socialLinks} from "../../../GlobalData.ts";
import {Send} from "lucide-react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        destination: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: "", email: "", phone: "", destination: "", message: "" });
            setSubmitted(false);
        }, 3000);
    };


    return (
        <main className="bg-slate-900 pt-24">
            {/* Header */}
            <section className="px-8 py-16 bg-gradient-to-b from-slate-800 to-slate-900">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 font-serif">
                        Let's Plan Your Adventure
                    </h1>
                    <p className="text-slate-300/80 text-lg">
                        Get in touch with our travel experts to create your perfect Sri
                        Lankan experience
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-black text-white mb-8 font-display">
                                Get In Touch
                            </h2>

                            <div className="space-y-6 mb-12">
                                {contactInfo.map((info) => {
                                    const Icon = info.icon;
                                    return (
                                        <div
                                            key={info.title}
                                            className="flex gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-teal-400/50 transition-all duration-300"
                                        >
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-400/20 text-teal-400">
                                                    <Icon size={24} />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white">
                                                    {info.title}
                                                </h3>
                                                <p className="text-teal-400 font-semibold">
                                                    {info.value}
                                                </p>
                                                <p className="text-slate-400 text-sm">{info.detail}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Social Media */}
                            <div>
                                <h3 className="font-bold text-white mb-4">Follow Us</h3>

                                <div className="flex gap-3">
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon;

                                        return (
                                            <a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.name}
                                                className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg
                                                    flex items-center justify-center text-slate-100
                                                    hover:bg-teal-400 hover:text-slate-900 hover:border-teal-400
                                                     transition-all duration-300 hover:scale-110"
                                            >
                                                <Icon size={20} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>

                        {/* Contact Form */}
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:border-teal-400 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="you@example.com"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:border-teal-400 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-white font-semibold mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 123-4567"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:border-teal-400 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="destination" className="block text-white font-semibold mb-2">
                                        Interested In
                                    </label>
                                    <select
                                        id="destination"
                                        name="destination"
                                        value={formData.destination}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-teal-400 focus:outline-none transition-colors"
                                    >
                                        <option value="">Select a package or destination</option>
                                        <option value="highland-magic">Highland Magic</option>
                                        <option value="coastal-serenity">Coastal Serenity</option>
                                        <option value="safari-wilderness">Safari Wilderness</option>
                                        <option value="cultural-heritage">Cultural Heritage</option>
                                        <option value="tropical-paradise">Tropical Paradise</option>
                                        <option value="adventure-seeker">Adventure Seeker</option>
                                        <option value="custom">Custom Itinerary</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                                        Tell Us More *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Describe your dream trip, dates, budget, and any special requests..."
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:border-teal-400 focus:outline-none transition-colors resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitted}
                                    className="w-full bg-teal-400 text-slate-900 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-teal-400/30 disabled:opacity-75 disabled:hover:scale-100 flex items-center justify-center gap-2"
                                >
                                    {submitted ? (
                                        <>
                                            <span className="inline-block w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {submitted && (
                                    <div className="p-4 bg-teal-400/20 border border-teal-400/50 rounded-lg text-teal-400 text-center font-semibold">
                                        Message sent successfully! We'll get back to you soon.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-8 bg-slate-950">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-black text-white mb-12 text-center font-display">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "How far in advance should I book?",
                                a: "We recommend booking 2-3 months in advance for the best rates and availability, but we can accommodate last-minute bookings based on availability.",
                            },
                            {
                                q: "Can I customize my itinerary?",
                                a: "Absolutely! All our packages are customizable. Contact us with your preferences and we'll create the perfect trip for you.",
                            },
                            {
                                q: "What is included in the packages?",
                                a: "Our packages typically include accommodation, meals, transportation, guide services, and entrance fees. See individual package details for specifics.",
                            },
                            {
                                q: "Is travel insurance required?",
                                a: "While not mandatory, we highly recommend travel insurance. We can help arrange it for you.",
                            },
                        ].map((faq, idx) => (
                            <details
                                key={idx}
                                className="group border border-white/10 rounded-lg overflow-hidden hover:border-teal-400/50 transition-colors"
                            >
                                <summary className="p-6 cursor-pointer font-semibold text-white bg-white/5 group-open:bg-white/10 flex justify-between items-center">
                                    <span>{faq.q}</span>
                                    <span className="text-teal-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                                </summary>
                                <div className="p-6 bg-white/5 border-t border-white/10 text-slate-300/80">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
