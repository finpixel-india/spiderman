"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, Pizza, Palette, Heart, Music } from "lucide-react";

export default function SatiricIntro() {
    const flashcards = [
        {
            title: "Hobbies",
            desc: "Photography, Web-swinging, Annoying JJJ",
            icon: <Camera className="text-blue-500 mb-4" size={32} />,
            color: "border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
        },
        {
            title: "Favorite Food",
            desc: "Aunt May's Cherry Pie & NY Dollar Pizza",
            icon: <Pizza className="text-yellow-500 mb-4" size={32} />,
            color: "border-yellow-500/30 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]",
        },
        {
            title: "Favorite Color",
            desc: "Red and Blue (Obviously)",
            icon: <Palette className="text-red-500 mb-4" size={32} />,
            color: "border-red-500/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]",
        },
        {
            title: "Favorite Song",
            desc: "That one catchy theme song...",
            icon: <Music className="text-green-500 mb-4" size={32} />,
            color: "border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
        }
    ];

    return (
        <section className="py-24 px-6 md:px-24 w-full relative z-10 bg-black overflow-hidden border-t border-white/5">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/blueprint-grid.svg')] opacity-[0.03] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">

                {/* The Poem Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <Heart className="text-red-500 animate-pulse mx-auto mb-6 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" size={48} />
                    <h2 className="text-3xl md:text-6xl font-serif italic text-white text-glow mb-4 leading-relaxed">
                        "Spiderman - Spiderman<br />
                        <span className="text-red-500">Tune churaya mere dil ka chain"</span>
                    </h2>
                    <p className="text-gray-500 font-mono tracking-widest uppercase text-sm mt-6">
                        - Citywide Cultural Phenomenon
                    </p>
                </motion.div>

                {/* The Flashcards Grid */}
                <div className="w-full">
                    <h3 className="text-center text-white font-mono uppercase tracking-widest text-glow mb-10 text-xl border-b border-white/10 pb-4 inline-block mx-auto flex justify-center">
                        <span className="border-b-2 border-red-500 pb-4 px-8">Classified Personal Data</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {flashcards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className={`glass bg-black/40 p-8 rounded-2xl border transition-all duration-300 cursor-default group flex flex-col items-center text-center relative overflow-hidden ${card.color}`}
                            >
                                {/* Futuristic scan line over cards */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200%] -translate-y-full group-hover:animate-[scan_2s_linear_infinite]" />

                                {card.icon}
                                <h4 className="font-mono text-white text-lg font-bold mb-2 uppercase tracking-wide z-10">
                                    {card.title}
                                </h4>
                                <p className="text-gray-400 font-sans text-sm z-10">
                                    {card.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
