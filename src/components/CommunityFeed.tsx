import React from "react";
import { Heart, MessageCircle, Repeat2, Verified } from "lucide-react";

const posts = [
    {
        id: 1,
        author: "Miles M.",
        handle: "@brooklyn_miles",
        content: "Just saw the man himself swing past my window! Doing a flip and everything.",
        likes: "12.4K",
        time: "2h ago",
    },
    {
        id: 2,
        author: "NYPD 109th Pct",
        handle: "@NYPD109Pct",
        content: "Thanks to our 'friendly neighborhood' assist for securely webbing those bank robbers before they left Queens.",
        likes: "45.2K",
        time: "5h ago",
        verified: true,
    },
    {
        id: 3,
        author: "Gloria Grant",
        handle: "@GloryG",
        content: "He got my cat down from the fire escape today. Even left a note telling me to have a nice day 😭🕷️",
        likes: "8,902",
        time: "1d ago",
    },
    {
        id: 4,
        author: "FEAST Center",
        handle: "@FEAST_NYC",
        content: "Shoutout to Spider-Man for dropping off 50 pizzas for the shelter tonight! He truly cares about the city.",
        likes: "50.1K",
        time: "2d ago",
        verified: true,
    },
    {
        id: 5,
        author: "Harry O.",
        handle: "@harry_osborn",
        content: "Oscorp grid saw a major spike during that last fight, but it looks like the webslinger handled it without catastrophic failure. Impressive.",
        likes: "3.2K",
        time: "3d ago",
    },
    {
        id: 6,
        author: "Daily Bugle Alerts",
        handle: "@BugleAlerts",
        content: "MENACE DESTROYS HISTORIC CLOCK TOWER! FULL STORY AT 11!",
        likes: "102K",
        time: "3d ago",
        verified: true,
    },
    {
        id: 7,
        author: "Cindy Moon",
        handle: "@cindy_spins",
        content: "Saw a red and blue blur zip across the financial district. Anyone else catch that? So fast!",
        likes: "5.5K",
        time: "4d ago",
    },
    {
        id: 8,
        author: "Yuri Watanabe",
        handle: "@CaptainWatanabe",
        content: "To whoever tied up the Fisk syndicate crew outside the precinct... the paperwork is a nightmare, but thanks.",
        likes: "28.9K",
        time: "5d ago",
        verified: true,
    },
    {
        id: 9,
        author: "Ned L.",
        handle: "@guy_in_the_chair",
        content: "Spider-Man is definitely the coolest hero. Not that I know him personally. But if I did, I'd say he's awesome.",
        likes: "800",
        time: "1w ago",
    }
];

export default function CommunityFeed() {
    return (
        <section className="py-24 px-6 md:px-24 w-full relative z-10 bg-gradient-to-b from-black to-[#050505]">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-3xl md:text-5xl font-mono font-bold text-white text-center mb-16 uppercase tracking-widest">
                    The <span className="text-glow text-red-500">Real</span> Word On The Street
                </h2>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {posts.map((post) => (
                        <div key={post.id} className="break-inside-avoid glass p-6 rounded-2xl hover:bg-white/5 transition-colors border border-white/5">

                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-500 to-blue-500 flex items-center justify-center font-bold text-white uppercase">
                                        {post.author[0]}
                                    </div>
                                    <div>
                                        <h4 className="flex items-center gap-1 font-bold text-white text-sm">
                                            {post.author} {post.verified && <Verified size={14} className="text-blue-400" />}
                                        </h4>
                                        <p className="text-xs text-gray-500 font-mono">{post.handle} • {post.time}</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                {post.content}
                            </p>

                            <div className="flex items-center gap-6 text-gray-500 text-xs font-mono border-t border-white/10 pt-4">
                                <button className="flex items-center gap-2 hover:text-red-400 transition-colors">
                                    <Heart size={16} /> {post.likes}
                                </button>
                                <button className="flex items-center gap-2 hover:text-white transition-colors">
                                    <MessageCircle size={16} /> Reply
                                </button>
                                <button className="flex items-center gap-2 hover:text-green-400 transition-colors">
                                    <Repeat2 size={16} /> Repost
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
