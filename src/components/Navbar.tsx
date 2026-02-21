"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Crosshair, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Arsenal", href: "/arsenal" },
    { name: "Tip Line", href: "/tip-line" },
    { name: "Threat DB", href: "/rogues" },
    { name: "Media Kit", href: "/media-kit" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-red-500/20 px-6 py-4 shadow-[0_4px_30px_rgba(230,36,41,0.1)] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Crosshair className="text-red-500 group-hover:text-red-400 group-hover:rotate-90 transition-all duration-300" size={28} />
          <span className="font-mono text-xl font-bold tracking-widest text-glow uppercase text-white">
            Peter<span className="text-red-500">Net</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-mono text-sm tracking-wide">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white hover:text-glow hover:scale-105 transition-all">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Links Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass bg-black/90 border-b border-red-500/20 py-4 flex flex-col gap-4 font-mono text-sm tracking-wide items-center animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white hover:text-glow w-full text-center py-2 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
