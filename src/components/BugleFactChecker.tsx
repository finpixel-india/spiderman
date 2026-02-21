"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareOff, Video, CheckCircle2 } from "lucide-react";

const facts = [
    {
        id: 1,
        headline: '"MENACE DESTROYS HISTORIC CLOCK TOWER!"',
        truth: "Vulture attempted to drop the clock face on civilians. Webbing stabilized it until emergency crews arrived.",
        evidenceType: "Drone Footage",
    },
    {
        id: 2,
        headline: '"SPIDER-MAN COLLUDES WITH BANK ROBBERS?"',
        truth: "Recovered 100% of the cash and left the specialized vault crack-team webbed up for the NYPD.",
        evidenceType: "Security Cam Reclaimed",
    },
    {
        id: 3,
        headline: '"MASKED VIGILANTE TERRORIZES LOCAL PIZZA SHOP!"',
        truth: "I paid for the pizza. Joe gave me a slice on the house for returning his stolen delivery bike.",
        evidenceType: "Citizen Testimony",
    }
];

export default function BugleFactChecker() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextFact = () => {
        setCurrentIndex((prev) => (prev + 1) % facts.length);
    };

    return (
        <section className="py-24 px-6 md:px-24 w-full relative z-10 bg-black">
            <div className="max-w-5xl mx-auto flex flex-col items-center">

                <div className="flex items-center gap-4 mb-12">
                    <MessageSquareOff className="text-red-500" size={32} />
                    <h2 className="text-3xl md:text-5xl font-mono font-bold text-white text-glow uppercase">
                        Bugle Fact-Checker
                    </h2>
                </div>

                <div className="w-full relative flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                            className="w-full glass border border-red-500/30 rounded-2xl p-6 md:p-12"
                        >

                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                {/* The Bugle Claim */}
                                <div className="w-full md:w-1/2 space-y-4">
                                    <span className="text-red-500 font-mono text-sm tracking-widest uppercase bg-red-500/10 px-3 py-1 rounded">
                                        The Bugle Claims:
                                    </span>
                                    <h3 className="text-2xl font-bold font-serif italic text-gray-300">
                                        {facts[currentIndex].headline}
                                    </h3>
                                </div>

                                <div className="hidden md:block w-px h-32 bg-red-500/20" />

                                {/* The Truth */}
                                <div className="w-full md:w-1/2 space-y-4">
                                    <span className="text-green-400 font-mono text-sm tracking-widest uppercase bg-green-500/10 px-3 py-1 rounded flex items-center gap-2 w-max">
                                        <CheckCircle2 size={16} />
                                        Verified Truth:
                                    </span>
                                    <p className="text-lg text-white font-sans leading-relaxed">
                                        {facts[currentIndex].truth}
                                    </p>

                                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-gray-400 text-sm font-mono">
                                        <Video size={16} />
                                        Evidence Source: <span className="text-white">{facts[currentIndex].evidenceType}</span>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

                <button
                    onClick={nextFact}
                    className="mt-12 px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-mono font-bold tracking-widest uppercase transition-colors rounded glass-red"
                >
                    Next Headline
                </button>

            </div>
        </section>
    );
}
