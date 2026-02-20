import React from "react";
import { AlertCircle, Camera, ShieldPlus, Webhook } from "lucide-react";

export default function QuickActions() {
    const actions = [
        {
            title: "Report a Crime",
            description: "Immediate direct line to the Spider-Net. Overrides 911 queues for superpowered threats.",
            icon: <AlertCircle className="text-red-500" size={32} />,
            color: "border-red-500/50 hover:border-red-500 hover:shadow-[0_0_30px_rgba(230,36,41,0.3)]",
        },
        {
            title: "Lost Pet Rescue",
            description: "Cats in trees, dogs in sewers. No job is too small for a friendly neighborhood hero.",
            icon: <ShieldPlus className="text-blue-400" size={32} />,
            color: "border-blue-500/50 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
        },
        {
            title: "Found Webbing?",
            description: "Report leftover webbing blocks for accelerated dissolving formula cleanup.",
            icon: <Webhook className="text-gray-300" size={32} />,
            color: "border-gray-500/50 hover:border-gray-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]",
        },
        {
            title: "Submit Evidence",
            description: "Upload videos or photos of criminal activities securely and anonymously.",
            icon: <Camera className="text-yellow-400" size={32} />,
            color: "border-yellow-500/50 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]",
        }
    ];

    return (
        <section className="py-24 px-6 md:px-24 w-full relative z-10 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-mono font-bold text-white text-glow mb-12 text-center uppercase">
                    Quick Actions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {actions.map((action, i) => (
                        <div
                            key={i}
                            className={`glass p-6 rounded-xl border transition-all duration-300 cursor-pointer group flex flex-col items-center text-center ${action.color}`}
                        >
                            <div className="mb-4 p-4 rounded-full bg-black/40 group-hover:scale-110 transition-transform">
                                {action.icon}
                            </div>
                            <h3 className="text-xl font-mono text-white mb-2">{action.title}</h3>
                            <p className="text-sm text-gray-400 font-sans">{action.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
