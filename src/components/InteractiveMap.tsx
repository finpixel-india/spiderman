"use client";

import React, { useState } from "react";
import { AlertTriangle, MapPin, Radio, Shield, Crosshair } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// SVGs are simplified approximations of Manhattan for effect
const ManhattanMapSVG = () => (
    <svg viewBox="0 0 400 600" className="w-full h-full opacity-30 text-red-500 fill-current" preserveAspectRatio="xMidYMid slice">
        {/* Manhattan Base */}
        <path d="M 150 50 Q 180 30, 200 60 L 250 180 Q 280 250, 260 300 L 200 450 Q 170 500, 150 480 L 100 350 Q 80 280, 110 200 Z" stroke="rgba(255, 0, 0, 0.5)" strokeWidth="2" />

        {/* Grid Lines */}
        <line x1="120" y1="100" x2="220" y2="120" stroke="rgba(255, 0, 0, 0.2)" strokeWidth="1" />
        <line x1="110" y1="150" x2="240" y2="170" stroke="rgba(255, 0, 0, 0.2)" strokeWidth="1" />
        <line x1="105" y1="200" x2="260" y2="220" stroke="rgba(255, 0, 0, 0.2)" strokeWidth="1" />
        <line x1="105" y1="250" x2="270" y2="260" stroke="rgba(255, 0, 0, 0.2)" strokeWidth="1" />
        <line x1="115" y1="300" x2="250" y2="300" stroke="rgba(255, 0, 0, 0.2)" strokeWidth="1" />
        <line x1="130" y1="350" x2="230" y2="330" stroke="rgba(255, 0, 0, 0.2)" strokeWidth="1" />

        <line x1="150" y1="80" x2="120" y2="400" stroke="rgba(255, 0, 0, 0.2)" strokeWidth="1" />
        <line x1="180" y1="100" x2="160" y2="420" stroke="rgba(255, 0, 0, 0.2)" strokeWidth="1" />
        <line x1="210" y1="120" x2="200" y2="440" stroke="rgba(255, 0, 0, 0.2)" strokeWidth="1" />
    </svg>
);

export default function InteractiveMap() {
    const [activeZone, setActiveZone] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 md:px-24 w-full relative z-10 bg-black/80 backdrop-blur-md overflow-hidden border-t border-red-500/20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/3 space-y-6"
                    >
                        <div className="flex items-center gap-3 text-red-500 mb-2">
                            <Radio className="animate-pulse" />
                            <h2 className="text-xl font-mono tracking-widest uppercase">Live Scanners</h2>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold text-white text-glow font-mono">
                            SPIDER-SENSE <br />
                            <span className="text-red-500">NETWORK</span>
                        </h3>
                        <p className="text-gray-400 font-sans leading-relaxed">
                            Monitoring active patrol zones, reported incidents, and city traffic. Stay clear of designated red zones until authorities give the all-clear.
                        </p>

                        <div className="space-y-4 pt-4 relative z-20">
                            <motion.div
                                onHoverStart={() => setActiveZone(1)}
                                onHoverEnd={() => setActiveZone(null)}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className={`glass p-4 border-l-4 border-red-500 flex items-start gap-4 transition-all cursor-pointer ${activeZone === 1 ? 'bg-red-900/20 border-r border-r-red-500/20' : 'hover:bg-white/5'}`}
                            >
                                <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <h4 className="text-white font-mono text-sm">ACTIVE COMBAT</h4>
                                    <p className="text-xs text-gray-400">Times Square - Potential Shocker sighting.</p>
                                    <div className="mt-2 text-[10px] font-mono text-red-400 opacity-60 flex gap-2">
                                        <span>THREAT: HIGH</span>
                                        <span>UNITS: EN ROUTE</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                onHoverStart={() => setActiveZone(2)}
                                onHoverEnd={() => setActiveZone(null)}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className={`glass p-4 border-l-4 border-yellow-500 flex items-start gap-4 transition-all cursor-pointer ${activeZone === 2 ? 'bg-yellow-900/20 border-r border-r-yellow-500/20' : 'hover:bg-white/5'}`}
                            >
                                <Shield className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <h4 className="text-white font-mono text-sm">CIVILIAN RESCUE ONGOING</h4>
                                    <p className="text-xs text-gray-400">Queensboro Bridge - MTA bus secured with webbing.</p>
                                    <div className="mt-2 text-[10px] font-mono text-yellow-400 opacity-60 flex gap-2">
                                        <span>PRIORITY: MAXIMUM</span>
                                        <span>STATUS: STABILIZED</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-2/3 h-[400px] lg:h-[600px] glass-red relative overflow-hidden flex items-center justify-center rounded-xl border border-red-500/30 group cursor-crosshair shadow-[0_0_80px_rgba(230,36,41,0.15)] bg-[#050000]"
                    >
                        {/* High Tech Grid Background */}
                        <div className="absolute inset-0 bg-[url('/blueprint-grid.svg')] opacity-10 bg-center" />

                        {/* The Actual SVG Map */}
                        <div className="absolute inset-0 flex items-center justify-center scale-150 transform transition-transform duration-[10s] group-hover:scale-[1.6]">
                            <ManhattanMapSVG />
                        </div>

                        {/* Interactive Pins - Tied to Hover State */}
                        <AnimatePresence>
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: activeZone === 1 || activeZone === null ? 1 : 0.3, scale: activeZone === 1 ? 1.5 : 1 }}
                                transition={{ delay: 1, type: "spring" }}
                                className="absolute top-[35%] left-[45%] flex flex-col items-center gap-1 transition-all z-20"
                            >
                                <div className={`w-16 h-16 rounded-full bg-red-500/20 absolute ${activeZone === 1 ? 'animate-ping' : ''}`} />
                                <MapPin className="text-red-500 relative z-10 drop-shadow-[0_0_8px_rgba(230,36,41,0.8)]" fill="red" />
                                <span className="text-[10px] font-mono text-red-500 font-bold bg-black/80 px-2 py-0.5 rounded border border-red-500/50 backdrop-blur-md">Times Sq</span>

                                {activeZone === 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="absolute top-12 w-32 border border-red-500/30 bg-black/80 p-2 text-[8px] font-mono text-red-400 glass"
                                    >
                                        &gt; Seismic anomaly detected<br />
                                        &gt; Target matching DB: SHOCKER
                                    </motion.div>
                                )}
                            </motion.div>

                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: activeZone === 2 || activeZone === null ? 1 : 0.3, scale: activeZone === 2 ? 1.5 : 1 }}
                                transition={{ delay: 1.2, type: "spring" }}
                                className="absolute top-[45%] left-[60%] flex flex-col items-center gap-1 transition-all z-20"
                            >
                                <div className={`w-12 h-12 rounded-full bg-yellow-500/20 absolute ${activeZone === 2 ? 'animate-ping' : ''}`} />
                                <MapPin className="text-yellow-500 relative z-10 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" fill="currentColor" />
                                <span className="text-[10px] font-mono text-yellow-400 font-bold bg-black/80 px-2 py-0.5 rounded border border-yellow-500/50 backdrop-blur-md">Queensboro</span>
                            </motion.div>
                        </AnimatePresence>

                        {/* Ambient scan overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 via-transparent to-black/40 mix-blend-overlay pointer-events-none" />
                        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(230,36,41,0.3)] pointer-events-none" />

                        {/* High tech radar sweep */}
                        <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/5 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,rgba(230,36,41,0.2)_360deg)] animate-[spin_8s_linear_infinite] pointer-events-none mix-blend-screen" />

                        <div className="absolute top-4 right-4 flex flex-col gap-1 items-end pointer-events-none">
                            <Crosshair className="text-red-500/50" />
                            <span className="font-mono text-[8px] text-red-500/50">SAT-LINK: SECURE</span>
                            <span className="font-mono text-[8px] text-red-500/50">NYPD_FREQ: 450.25MHz</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
