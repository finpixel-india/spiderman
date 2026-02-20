"use client";

import React, { useState } from "react";
import { Lock, FileUp, Send, ShieldCheck, EyeOff } from "lucide-react";

export default function TipLinePage() {
    const [anonymous, setAnonymous] = useState(true);

    return (
        <div className="min-h-screen py-24 px-6 md:px-24 bg-black relative">
            <div className="max-w-4xl mx-auto relative z-10">

                <header className="mb-12 border-b border-red-500/20 pb-8 flex flex-col items-center text-center">
                    <Lock className="text-red-500 mb-4" size={48} />
                    <h1 className="text-4xl md:text-5xl font-mono font-bold text-white uppercase tracking-widest text-glow">
                        Secure Tip Line
                    </h1>
                    <p className="mt-4 text-gray-400 font-sans max-w-2xl">
                        Encrypted end-to-end communication. Report super-villain activity, organized crime, or submit evidence securely without fear of retaliation.
                    </p>
                </header>

                <div className="glass border border-red-500/30 p-8 rounded-xl shadow-[0_0_50px_rgba(230,36,41,0.1)]">

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>

                        {/* Anonymous Toggle */}
                        <div className="flex items-center justify-between p-4 rounded bg-red-500/5 border border-red-500/20">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className={anonymous ? "text-green-500" : "text-gray-500"} />
                                <div>
                                    <h3 className="text-white font-mono text-sm">Anonymous Routing</h3>
                                    <p className="text-xs text-gray-400 font-sans">
                                        IP address scrubbed. Data beamed directly to decentralized offline servers.
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setAnonymous(!anonymous)}
                                className={`w-14 h-8 rounded-full transition-colors flex items-center px-1 ${anonymous ? "bg-green-500" : "bg-gray-700"}`}
                            >
                                <div className={`w-6 h-6 bg-black rounded-full shadow transform transition-transform ${anonymous ? "translate-x-6" : "translate-x-0"}`} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {!anonymous && (
                                <>
                                    <div className="space-y-2">
                                        <label className="text-gray-300 font-mono text-sm uppercase">Alias / Name (Optional)</label>
                                        <input type="text" className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:border-red-500 outline-none transition-colors" placeholder="Citizen-1" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-gray-300 font-mono text-sm uppercase">Contact Info (Optional)</label>
                                        <input type="text" className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:border-red-500 outline-none transition-colors" placeholder="Signal/ProtonMail" />
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-gray-300 font-mono text-sm uppercase">Incident Details & Location</label>
                            <textarea
                                className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white h-32 focus:border-red-500 outline-none transition-colors"
                                placeholder="Describe what you saw and where..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-gray-300 font-mono text-sm uppercase">Secure File Drop</label>
                            <div className="w-full border-2 border-dashed border-gray-700 hover:border-red-500/50 rounded-xl p-8 flex flex-col items-center justify-center text-center transition-colors cursor-pointer bg-black/20 group">
                                <FileUp className="text-gray-500 group-hover:text-red-400 mb-4 transition-colors" size={32} />
                                <p className="text-sm text-gray-400 font-sans">
                                    Drag and drop audio, video, or photos here, or <span className="text-red-400">browse</span>.
                                </p>
                                <p className="text-xs text-gray-600 font-mono mt-2 flex items-center gap-1">
                                    <EyeOff size={12} /> EXIF data will be automatically wiped.
                                </p>
                            </div>
                        </div>

                        <button type="submit" className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-mono font-bold tracking-widest uppercase transition-colors rounded glass-red flex justify-center items-center gap-2">
                            <Send size={20} /> Transmit Over Secure Network
                        </button>

                    </form>

                </div>
            </div>
        </div>
    );
}
