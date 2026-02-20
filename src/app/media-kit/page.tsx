import React from "react";
import { Download, Camera, CheckCircle } from "lucide-react";

export const metadata = {
    title: "Press & Media Kit | PeterNet",
    description: "High-resolution action shots for press use.",
};

// Dummy image placeholders since we don't have actual Spidey action shots
// Mock images with real Unsplash superhero/tech/new york URLs
const images = [
    { id: 1, title: "Web-Swinging Mid-town", size: "4.2 MB", url: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "Doc Ock Encounter", size: "5.1 MB", url: "https://images.unsplash.com/photo-1534809027769-621741407efa?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: "Sunset over Brooklyn Bridge", size: "3.8 MB", url: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=800&auto=format&fit=crop" },
    { id: 4, title: "Hero Landing", size: "6.2 MB", url: "https://images.unsplash.com/photo-1620336655055-088d06e36bf0?q=80&w=800&auto=format&fit=crop" },
    { id: 5, title: "Saving MTA Bus", size: "4.5 MB", url: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=800&auto=format&fit=crop" },
    { id: 6, title: "Friendly Neighborhood Gear", size: "3.1 MB", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
];

export default function MediaKitPage() {
    return (
        <div className="min-h-screen py-24 px-6 md:px-24 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">

                <header className="mb-16 border-b border-white/10 pb-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="w-full md:w-2/3">
                        <h1 className="text-4xl md:text-5xl font-mono font-bold text-white uppercase tracking-widest text-glow mb-4">
                            Press & Media Kit
                        </h1>
                        <p className="text-gray-400 font-sans text-lg">
                            High-resolution, unedited action shots courtesy of Peter Parker. Free for editorial use by legitimate news outlets (Looking at you, Daily Bugle).
                        </p>
                    </div>

                    <div className="w-full md:w-1/3 bg-black/40 border border-gray-800 rounded-xl p-6 glass">
                        <h3 className="text-white font-mono uppercase tracking-widest text-sm mb-4 border-b border-gray-800 pb-2">Usage Rights</h3>
                        <ul className="space-y-3 font-sans text-sm text-gray-400">
                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Free for Editorial Use</li>
                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Must credit: "Peter Parker"</li>
                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-red-500" /> No defamatory alterations</li>
                        </ul>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((img) => (
                        <div key={img.id} className="group relative rounded-xl overflow-hidden glass border border-gray-800 hover:border-red-500/50 transition-colors aspect-video flex flex-col justify-end">

                            {/* Unsplash specific spider-man / superhero / tech related pictures */}
                            <div
                                className="absolute inset-0 bg-cover bg-center -z-10 group-hover:scale-105 transition-transform duration-500"
                                style={{ backgroundImage: `url(${img.url})` }}
                            />

                            {/* Gradient overlay for text */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />

                            <div className="p-6 relative z-10 flex justify-between items-end">
                                <div>
                                    <h3 className="text-white font-mono font-bold">{img.title}</h3>
                                    <p className="text-gray-400 text-sm font-sans">RAW / {img.size}</p>
                                </div>

                                <button className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center text-white transition-colors group-hover:scale-110">
                                    <Download size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
