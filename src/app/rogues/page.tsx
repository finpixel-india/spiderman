import React from "react";
import { AlertTriangle, ServerCrash, ShieldAlert, Zap } from "lucide-react";

export const metadata = {
    title: "The Rogue's Gallery | PeterNet",
    description: "Public threat database.",
};

const threats = [
    {
        name: "Doctor Octopus",
        alias: "Otto Octavius",
        status: "AT LARGE",
        level: "RED",
        description: "Highly intelligent and armed with four mechanical appendages of near-indestructible material.",
        protocol: "Evacuate high-density areas. Avoid elevated structures. EMP devices deployed by NYPD.",
        icon: <ServerCrash className="text-red-500" size={24} />
    },
    {
        name: "Green Goblin",
        alias: "Norman Osborn",
        status: "UNKNOWN",
        level: "RED",
        description: "Uses a goblin glider, explosive pumpkins, and razor bats. Extremely dangerous and unpredictable.",
        protocol: "Seek immediate subterranean shelter. Do not engage. Beware of hallucinogenic gas.",
        icon: <AlertTriangle className="text-red-500" size={24} />
    },
    {
        name: "Electro",
        alias: "Max Dillon",
        status: "CONTAINED (RAVENCROFT)",
        level: "YELLOW",
        description: "Generates massive amounts of electricity. Can travel through power lines.",
        protocol: "Stay indoors. Avoid all electrical appliances. Report any localized grid outages immediately.",
        icon: <Zap className="text-yellow-500" size={24} />
    }
];

export default function RoguesGalleryPage() {
    return (
        <div className="min-h-screen py-24 px-6 md:px-24 bg-black relative">
            <div className="max-w-6xl mx-auto relative z-10">

                <header className="mb-16 border-b border-red-500/20 pb-8 flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-mono font-bold text-red-500 uppercase tracking-widest text-glow mb-2">
                            Threat Database
                        </h1>
                        <p className="text-gray-400 font-sans max-w-2xl">
                            Public service log detailing known super-villains. Study their patterns. Know the evacuation protocols.
                        </p>
                    </div>
                    <ShieldAlert className="text-red-500 opacity-20 hidden md:block" size={100} />
                </header>

                <div className="space-y-8">
                    {threats.map((threat, idx) => (
                        <div key={idx} className="glass p-6 md:p-8 border border-red-500/20 rounded-xl relative overflow-hidden group">

                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full pointer-events-none" />

                            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">

                                {/* Threat Profile */}
                                <div className="w-full md:w-1/3">
                                    <div className="flex items-center gap-3 mb-2">
                                        {threat.icon}
                                        <h2 className="text-2xl font-mono font-bold text-white uppercase">{threat.name}</h2>
                                    </div>
                                    <p className="text-gray-400 text-sm font-mono uppercase mb-4">A.K.A: {threat.alias}</p>

                                    {/* Threat Level Meter */}
                                    <div className="mt-6">
                                        <span className="text-xs uppercase text-white font-mono tracking-widest block mb-2">Threat Level</span>
                                        <div className="w-full h-2 bg-gray-800 rounded overflow-hidden flex">
                                            <div className={`h-full ${threat.level === 'RED' ? 'bg-red-500 w-full animate-pulse text-glow' : 'bg-yellow-500 w-2/3'}`} />
                                        </div>
                                        <span className={`text-xs font-mono uppercase mt-1 block ${threat.level === 'RED' ? 'text-red-500' : 'text-yellow-500'}`}>
                                            {threat.level} PRIORITY
                                        </span>
                                    </div>

                                    <div className="mt-4 inline-block px-3 py-1 bg-black/50 border border-gray-700 rounded font-mono text-xs text-gray-300">
                                        STATUS: <span className={threat.status.includes('CONTAINED') ? 'text-green-500' : 'text-red-500'}>{threat.status}</span>
                                    </div>
                                </div>

                                <div className="hidden md:block w-px h-full min-h-[150px] bg-red-500/20" />

                                {/* Threat Details & Protocol */}
                                <div className="w-full md:w-2/3 space-y-6">
                                    <div>
                                        <h3 className="text-sm font-mono text-red-400 uppercase tracking-widest mb-2 border-b border-red-500/20 pb-1">Profile Overview</h3>
                                        <p className="text-gray-300 font-sans leading-relaxed">
                                            {threat.description}
                                        </p>
                                    </div>

                                    <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded">
                                        <h3 className="text-sm font-mono text-red-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                                            <AlertTriangle size={16} /> Emergency Protocol
                                        </h3>
                                        <p className="text-white text-sm font-sans">
                                            {threat.protocol}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
