import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const fontOrbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const fontRajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-rajdhani",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PeterNet | The Friendly Neighborhood Network",
  description: "Official secure network of Spider-Man. Incident reporting, Threat tracking, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontRajdhani.variable} ${fontOrbitron.variable} font-sans antialiased selection:bg-red-500/30 selection:text-white`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
