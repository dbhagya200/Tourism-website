import { Star } from 'lucide-react';
import { reviews } from '../../../data.ts';

export function Reviews ()  {
    return (
        <div className="px-[8%] py-20 bg-[#0a0f1d]">
            <div className="text-center mb-16" data-aos="fade-up">
                <h2 className="text-4xl font-serif font-bold mb-4">Our Guest Stories</h2>
                <p className="text-gray-400">Verified reviews from our happy global community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reviews.map((review, idx) => (
                    <div
                        key={review.id}
                        className="glass-card p-10 rounded-3xl hover:border-primary/50 transition duration-300"
                        data-aos="fade-up"
                        data-aos-delay={idx * 100}
                    >
                        {/* Star Rating */}
                        <div className="flex gap-1 mb-6 text-secondary">
                            {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} size={18} fill="currentColor" />
                            ))}
                        </div>

                        <p className="text-lg italic text-gray-300 mb-8">"{review.text}"</p>

                        {/* User Info */}
                        <div className="flex items-center gap-4">
                            <img
                                src={review.avatar}
                                alt={review.name}
                                className="w-14 h-14 rounded-full border-2 border-primary/30"
                            />
                            <div>
                                <strong className="block text-light">{review.name}</strong>
                                <p className="text-sm text-gray-500">{review.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
