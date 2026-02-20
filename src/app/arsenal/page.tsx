"use client";

import React from "react";
import { Cpu, Crosshair, Map, Shield } from "lucide-react";
import { motion, Variants } from "framer-motion";

const gearList = [
    {
        name: "Web-Shooters v3.1",
        function: "Rapid-fire containment & Traversal",
        feature: "Exploded 3D view showing high-pressure fluid cartridges.",
        icon: <Crosshair className="text-red-500" size={32} />,
        color: "text-red-500",
    },
    {
        name: "Spider-Bots (Recon)",
        function: "City-wide surveillance network",
        feature: "Live data-stream simulation and topographical mapping.",
        icon: <Cpu className="text-blue-500" size={32} />,
        color: "text-blue-500",
    },
    {
        name: "Impact Webbing",
        function: "Instant heavy takedowns",
        feature: "High-tensile strength expansion on contact.",
        icon: <Shield className="text-yellow-500" size={32} />,
        color: "text-yellow-500",
    },
    {
        name: "Spider-Tracers",
        function: "Target tracking via specific radio frequency",
        feature: "Interactive map tracking demo.",
        icon: <Map className="text-green-500" size={32} />,
        color: "text-green-500",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function ArsenalPage() {
    return (
        <div className="min-h-screen py-24 px-6 md:px-24 bg-zinc-950 relative overflow-hidden">

            {/* Blueprint background styling - fixed from prior red blend issues */}
            <div className="absolute inset-0 bg-[url('/blueprint-grid.svg')] opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                <motion.header
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 border-b border-blue-500/30 pb-8"
                >
                    <h1 className="text-4xl md:text-6xl font-mono items-center font-bold text-blue-400 uppercase tracking-widest text-shadow-sm shadow-blue-500">
                        Sector 4: The Arsenal
                    </h1>
                    <p className="mt-4 text-blue-300/70 font-mono text-lg max-w-2xl">
                        Accessing decentralized schematics database... Authorization accepted. Viewing current loadout.
                    </p>
                </motion.header>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {gearList.map((gear, idx) => (
                        <motion.div
                            variants={itemVariants}
                            key={idx}
                            className="glass p-8 border border-blue-500/20 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all rounded-xl group relative overflow-hidden bg-black/60"
                        >
                            {/* Scanning line animation */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/50 -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite]" />

                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                                {gear.icon}
                            </div>
                            <h2 className={`font-mono text-2xl font-bold mb-2 ${gear.color}`}>
                                {gear.name}
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <span className="text-xs uppercase text-blue-400/50 font-mono tracking-widest block mb-1">Primary Function</span>
                                    <p className="text-white font-sans">{gear.function}</p>
                                </div>
                                <div>
                                    <span className="text-xs uppercase text-blue-400/50 font-mono tracking-widest block mb-1">UI Feature</span>
                                    <p className="text-gray-400 font-sans italic">{gear.feature}</p>
                                </div>
                            </div>

                            {/* Fake UI blueprint UI details */}
                            <div className="mt-8 pt-4 border-t border-blue-500/10 flex justify-between font-mono text-[10px] text-blue-500/60">
                                <span>SCHEMATIC_ID: {idx.toString().padStart(4, '0')}</span>
                                <span className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    OPERATIONAL
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
}
