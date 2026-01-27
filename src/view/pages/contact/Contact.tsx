import { useState } from "react";
import { contactInfo, socialLinks } from "../../../GlobalData.ts";
import { Send, ChevronDown } from "lucide-react";

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
        setSubmitted(true);

        // --- EMAIL LOGIC STARTS HERE ---

        const recipientEmail = "info@ceylonvistatours.lk";
        const subject = `Trip Inquiry: ${formData.destination || "General"} - ${formData.name}`;

        // UPDATED: Cleaner Email Body Format
        const bodyContent = `
                Dear Ceylon Vista Team,
                
                I would like to inquire about a trip to Sri Lanka. Please find my details below:
                
                Name:  ${formData.name}
                Email: ${formData.email}
                Phone: ${formData.phone || "Not provided"}
                
                Interested In: ${formData.destination || "General Inquiry"}
                
                ${formData.message}
                
                ---------------------------------------
                Sent via Ceylon Vista Website
`;

        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;

        window.location.href = mailtoLink;

        // Reset form
        setTimeout(() => {
            setFormData({ name: "", email: "", phone: "", destination: "", message: "" });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <main className="min-h-screen font-sans text-slate-800 bg-white">

            {/* Header / Hero Section */}
            <section
                className="relative h-[100vh] flex items-center justify-center bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: "url('https://www.lovesrilanka.org/wp-content/uploads/2019/09/key-destinations_1920x700-7.jpg')"
                }}
            >
                <div className="absolute inset-0 bg-slate-900/40"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10 px-8 mt-16">
                    <p className="text-sky-300 font-bold uppercase tracking-wider mb-3 text-sm drop-shadow-md">
                        Start Your Journey
                    </p>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 font-serif drop-shadow-xl">
                        Let's Plan Your <span className="text-sky-400">Adventure</span>
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md font-medium">
                        Get in touch with our travel experts to create your perfect Sri
                        Lankan experience.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-8 bg-gradient-to-b from-white via-sky-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info Column */}
                        <div data-aos="fade-right">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 font-serif">
                                Get In <span className="text-sky-500">Touch</span>
                            </h2>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                Whether you have a specific itinerary in mind or need inspiration, we are here to help you every step of the way.
                            </p>

                            <div className="space-y-6 mb-12">
                                {contactInfo.map((info) => {
                                    const Icon = info.icon;
                                    return (
                                        <div
                                            key={info.title}
                                            className="flex gap-5 p-6 bg-white border border-slate-100 rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-sky-200/50 hover:-translate-y-1 transition-all duration-300"
                                        >
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-sky-50 text-blue-600">
                                                    <Icon size={24} />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900 mb-1">
                                                    {info.title}
                                                </h3>
                                                <p className="text-blue-600 font-bold text-lg mb-1">
                                                    {info.value}
                                                </p>
                                                <p className="text-slate-500 text-sm">{info.detail}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Social Media */}
                            <div>
                                <h3 className="font-bold text-slate-900 mb-6 text-lg">Follow Our Journey</h3>

                                <div className="flex gap-4">
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.name}
                                                className="w-12 h-12 bg-white border border-slate-200 rounded-xl
                                                    flex items-center justify-center text-slate-400
                                                    hover:bg-gradient-to-br hover:from-sky-400 hover:to-blue-600 hover:text-white hover:border-transparent
                                                    transition-all duration-300 hover:shadow-lg hover:shadow-sky-300/50"
                                            >
                                                <Icon size={20} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Column */}
                        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100" data-aos="fade-left">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Send us a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-slate-700 font-bold mb-2 text-sm uppercase tracking-wide">
                                        Your Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 focus:outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-slate-700 font-bold mb-2 text-sm uppercase tracking-wide">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="you@example.com"
                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 focus:outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-slate-700 font-bold mb-2 text-sm uppercase tracking-wide">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 123-4567"
                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 focus:outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="destination" className="block text-slate-700 font-bold mb-2 text-sm uppercase tracking-wide">
                                        Interested In
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="destination"
                                            name="destination"
                                            value={formData.destination}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 focus:outline-none transition-all appearance-none cursor-pointer"
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
                                        <ChevronDown className="absolute right-5 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-slate-700 font-bold mb-2 text-sm uppercase tracking-wide">
                                        Tell Us More <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Describe your dream trip, dates, budget, and any special requests..."
                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 focus:outline-none transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitted}
                                    className="w-full bg-gradient-to-r from-sky-400 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-sky-500/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-75 disabled:hover:scale-100 flex items-center justify-center gap-2"
                                >
                                    {submitted ? (
                                        <>
                                            <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Preparing Email...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {submitted && (
                                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-600 text-center font-bold animate-fade-in">
                                        Opening your email client...
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-8 bg-sky-50 border-t border-sky-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center font-serif">
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
                                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
                            >
                                <summary className="p-6 cursor-pointer font-bold text-slate-900 flex justify-between items-center group-hover:text-blue-600 transition-colors">
                                    <span className="text-lg">{faq.q}</span>
                                    <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300 bg-slate-100 p-2 rounded-full group-open:bg-sky-100 group-open:text-sky-600">
                                        <ChevronDown size={20} />
                                    </span>
                                </summary>
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100">
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