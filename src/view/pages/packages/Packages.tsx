import { packages } from '../../../data.ts';

export function Packages () {
    return (
        <div className="px-[8%] py-20">
            <h2 className="text-4xl font-serif font-bold text-center mb-16" data-aos="fade-up">Sri Lanka Holiday Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {packages.map((pkg, idx) => (
                    <div key={pkg.id} className="bg-[#1e293b] rounded-3xl overflow-hidden group" data-aos="zoom-in" data-aos-delay={idx * 100}>
                        <div className="h-80 overflow-hidden">
                            <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold font-serif mb-2">{pkg.title}</h3>
                            <h4 className="text-primary text-xl font-bold">{pkg.price}</h4>
                            <button className="mt-6 w-full py-3 border border-white/20 rounded-xl hover:bg-primary hover:text-dark hover:border-primary transition font-semibold">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
