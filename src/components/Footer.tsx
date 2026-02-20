import React from "react";
import { ShieldAlert } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full glass border-t border-red-500/20 py-8 mt-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <ShieldAlert className="text-red-500" size={24} />
                    <span className="font-mono text-sm text-gray-400 tracking-wider">
                        FRIENDLY NEIGHBORHOOD SECURE NETWORK
                    </span>
                </div>
                <div className="font-mono text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} PeterNet. Not endorsed by the Daily Bugle.
                </div>
            </div>
        </footer>
    );
}
