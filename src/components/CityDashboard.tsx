"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Zap, ShieldAlert, Cpu } from "lucide-react";

const metrics = [
    {
        title: "OSCORP GRID LOAD",
        value: "92.4%",
        status: "CRITICAL",
        color: "text-yellow-500",
        icon: <Zap size={24} className="text-yellow-500" />
    },
    {
        title: "NYPD DISPATCH",
        value: "142 ACTIVE",
        status: "ELEVATED",
        color: "text-red-500",
        icon: <ShieldAlert size={24} className="text-red-500" />
    },
    {
        title: "SPIDER-BOT NETWORK",
        value: "41,023",
        status: "ONLINE",
        color: "text-blue-500",
        icon: <Cpu size={24} className="text-blue-500" />
    },
    {
        title: "WEBBING ZONES",
        value: "14 LOCAL",
        status: "DEGRADING",
        color: "text-green-500",
        icon: <Activity size={24} className="text-green-500" />
    }
];

export default function CityDashboard() {
    return (
        <section className="py-24 px-6 md:px-24 w-full relative z-10 bg-zinc-950 border-t border-b border-white/5">
            <div className="absolute inset-0 bg-[url('/blueprint-grid.svg')] opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="mb-12 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-6">
                    <div>
                        <h2 className="text-3xl font-mono font-bold text-white uppercase tracking-widest text-glow">
                            City Status Override
                        </h2>
                        <p className="text-gray-400 font-mono text-sm mt-2">Bypassing municipal encryptions...</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                        <div className="flex items-center gap-2 justify-end">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="font-mono text-green-500 text-sm tracking-widest">LIVE FEED</span>
                        </div>
                        <p className="font-mono text-xs text-gray-500">Updated: Just now</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((metric, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass p-6 border border-white/5 hover:border-white/20 transition-all rounded-xl relative overflow-hidden group bg-black/60"
                        >
                            {/* Scan effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent -translate-y-[150%] group-hover:animate-[scan_2s_ease-in-out_infinite]" />

                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-lg bg-white/5 ${metric.color} bg-opacity-10 backdrop-blur-md`}>
                                    {metric.icon}
                                </div>
                                <span className={`font-mono text-xs font-bold px-2 py-1 rounded bg-white/5 border border-white/10 ${metric.color}`}>
                                    {metric.status}
                                </span>
                            </div>

                            <h3 className="font-sans text-gray-400 text-sm uppercase mb-1">{metric.title}</h3>
                            <p className="font-mono text-3xl font-bold text-white tracking-wider">{metric.value}</p>

                            {/* Fake graph */}
                            <div className="mt-4 flex items-end gap-1 h-8 opacity-50 relative overflow-hidden">
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: "10%" }}
                                        animate={{ height: `${Math.random() * 80 + 20}%` }}
                                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: i * 0.05 }}
                                        className={`flex-1 ${metric.color.replace('text-', 'bg-')}`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
