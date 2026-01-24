import { Plane } from "lucide-react";

export function Loading() {
    return (
        // Full screen, white background, high z-index to cover app
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">

            {/* Animated Loader Graphic */}
            <div className="relative mb-6">
                {/* Spinning Outer Ring (Sky Blue) */}
                <div className="w-20 h-20 rounded-full border-4 border-slate-100 border-t-sky-500 animate-spin"></div>

                {/* Center Icon (Plane) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Rotated slightly to look like it's flying */}
                    <Plane
                        className="text-blue-600 animate-pulse -rotate-45"
                        size={28}
                        fill="currentColor"
                    />
                </div>
            </div>

            {/* Brand Text */}
            <h1 className="text-2xl font-black tracking-tight text-slate-900 mb-2 font-serif animate-pulse">
                CEYLON <span className="text-sky-500">VISTA</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-400 text-xs font-bold tracking-[0.2em] uppercase">
                Loading Paradise...
            </p>
        </div>
    );
}