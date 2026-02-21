import React from "react";
import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export default function Footer() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Arsenal", href: "/arsenal" },
        { name: "Tip Line", href: "/tip-line" },
        { name: "Threat DB", href: "/rogues" },
        { name: "Media Kit", href: "/media-kit" },
    ];

    return (
        <footer className="w-full glass border-t border-red-500/20 py-12 mt-20 bg-black/50">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center gap-2">
                        <ShieldAlert className="text-red-500" size={24} />
                        <span className="font-mono text-sm text-gray-400 tracking-wider">
                            FRIENDLY NEIGHBORHOOD SECURE NETWORK
                        </span>
                    </div>
                    <div className="font-mono text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} PeterNet. Not endorsed by the Daily Bugle.
                    </div>
                </div>

                <div className="flex flex-wrap justify-center md:justify-end gap-6 font-mono text-sm tracking-wide">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-400 hover:text-white hover:text-glow transition-all uppercase"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
