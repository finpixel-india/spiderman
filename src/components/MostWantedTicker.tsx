"use client";

import React from "react";
import { motion } from "framer-motion";

const villains = [
    { name: "DOC OCK", threat: "OMEGA", bounty: "$50,000" },
    { name: "GREEN GOBLIN", threat: "OMEGA", bounty: "PRICELESS" },
    { name: "SHOCKER", threat: "BETA", bounty: "$15,000" },
    { name: "RHINO", threat: "ALPHA", bounty: "$25,000" },
    { name: "ELECTRO", threat: "ALPHA", bounty: "$30,000" },
    { name: "VULTURE", threat: "BETA", bounty: "$10,000" },
];

export default function MostWantedTicker() {
    return (
        <div className="w-full bg-red-950/40 border-y border-red-500/50 py-3 relative overflow-hidden flex items-center z-20">

            {/* Warning Label - Static */}
            <div className="absolute left-0 z-20 bg-red-600 px-6 py-4 flex items-center justify-center font-mono font-bold text-white tracking-widest shadow-[10px_0_20px_rgba(220,38,38,0.5)]">
                WANTED
            </div>

            {/* Marquee Content */}
            <div className="flex whitespace-nowrap overflow-hidden ml-32 md:ml-40 flex-1">
                <motion.div
                    className="flex gap-12 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                >
                    {/* Double the array for seamless looping */}
                    {[...villains, ...villains].map((villain, idx) => (
                        <div key={idx} className="flex items-center gap-4 font-mono font-bold">
                            <span className="text-white text-lg tracking-wider">{villain.name}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">
                                CLASS: {villain.threat}
                            </span>
                            <span className="text-gray-500">
                ///
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

        </div>
    );
}
