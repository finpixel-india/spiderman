import React from "react";
import Link from "next/link";
import { Crosshair } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-red-500/20 px-6 py-4 shadow-[0_4px_30px_rgba(230,36,41,0.1)] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Crosshair className="text-red-500 group-hover:text-red-400 group-hover:rotate-90 transition-all duration-300" size={28} />
          <span className="font-mono text-xl font-bold tracking-widest text-glow uppercase text-white">
            Peter<span className="text-red-500">Net</span>
          </span>
        </Link>

        <div className="hidden md:flex gap-8 font-mono text-sm tracking-wide">
          <Link href="/" className="text-gray-300 hover:text-white hover:text-glow hover:scale-105 transition-all">Home</Link>
          <Link href="/arsenal" className="text-gray-300 hover:text-white hover:text-glow hover:scale-105 transition-all">Arsenal</Link>
          <Link href="/tip-line" className="text-gray-300 hover:text-white hover:text-glow hover:scale-105 transition-all">Tip Line</Link>
          <Link href="/rogues" className="text-gray-300 hover:text-red-400 hover:text-glow hover:scale-105 transition-all">Threat DB</Link>
          <Link href="/media-kit" className="text-gray-300 hover:text-white hover:text-glow hover:scale-105 transition-all">Media Kit</Link>
        </div>
      </div>
    </nav>
  );
}
