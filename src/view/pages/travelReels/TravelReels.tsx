import { Play } from 'lucide-react';
import { reels } from '../../../data.ts';

export function TravelReels () {
    return (
        <div className="px-[8%] py-20 bg-dark">
            <div className="text-center mb-16" data-aos="fade-up">
                <h2 className="text-4xl font-serif font-bold mb-4">Travel Shorts</h2>
                <p className="text-gray-400">Catch a glimpse of paradise</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {reels.map((reel, idx) => (
                    <div key={reel.id} className="aspect-[9/16] glass-card rounded-2xl overflow-hidden relative group hover:border-primary transition duration-300" data-aos="fade-up" data-aos-delay={idx * 100}>
                        <iframe
                            src={`${reel.src}?controls=0&modestbranding=1&rel=0&loop=1&mute=1`}
                            className="w-full h-full pointer-events-none"
                            title="Reel"
                        />
                        <div className="absolute bottom-5 left-5 z-10">
                            <div className="bg-black/60 px-3 py-1 rounded-full text-xs flex items-center gap-2 border border-white/20">
                                <Play size={12} /> {reel.tag}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
