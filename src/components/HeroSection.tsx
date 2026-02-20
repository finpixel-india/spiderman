"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const FRAME_COUNT = 240;

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            // Pad single/double digits to three digits: 001, 010, 100
            const paddedIndex = i.toString().padStart(3, "0");
            img.src = `/images/frames/ezgif-frame-${paddedIndex}.jpg`;
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress (0-1) to frame index (0-239)
    const currentFrameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useEffect(() => {
        if (images.length === 0) return;

        const render = () => {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext("2d");
            if (!canvas || !ctx) return;

            const frameIndex = Math.round(currentFrameIndex.get());
            const image = images[frameIndex];

            if (image && image.complete) {
                // Clear and draw image scaled to cover canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Calculate dimensions for object-fit: cover equivalent
                const hRatio = canvas.width / image.width;
                const vRatio = canvas.height / image.height;
                const ratio = Math.max(hRatio, vRatio);
                const centerShiftX = (canvas.width - image.width * ratio) / 2;
                const centerShiftY = (canvas.height - image.height * ratio) / 2;

                ctx.drawImage(
                    image,
                    0, 0, image.width, image.height,
                    centerShiftX, centerShiftY, image.width * ratio, image.height * ratio
                );
            }
        };

        render();

        // Subscribe to framer motion changes
        const unsubscribe = currentFrameIndex.on("change", render);

        // Handle resize
        const resizeCanvas = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                render();
            }
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        return () => {
            unsubscribe();
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [images, currentFrameIndex]);

    // Text Opacity transformations based on scroll progress
    const introOpacity = useTransform(scrollYProgress, [0, 0.08, 0.15], [1, 1, 0]);
    const alertOpacity = useTransform(scrollYProgress, [0.18, 0.22, 0.38, 0.42], [0, 1, 1, 0]);
    const actionOpacity = useTransform(scrollYProgress, [0.45, 0.5, 1], [0, 1, 1]);

    return (
        <div ref={containerRef} className="relative w-full" style={{ height: "800vh" }}>
            {/* Sticky container for the video canvas and HUD */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Canvas for image sequence */}
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

                {/* Red overlay gradient to blend bottom edge with the next section */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 z-10" />
                <div className="absolute inset-0 bg-black/40 z-[5]" /> {/* Tint to make HUD pop */}

                {/* HUD Text Overlays */}
                <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center px-6 md:px-24">

                    {/* Phase 1: Intro */}
                    <motion.div style={{ opacity: introOpacity }} className="absolute">
                        <h1 className="text-5xl md:text-8xl font-mono font-bold text-white text-glow mb-4">
                            NEW YORK<br />
                            NEEDS A HERO.
                        </h1>
                        <p className="text-red-400 font-mono text-xl tracking-widest uppercase glass-red inline-block px-4 py-2 border border-red-500/30 backdrop-blur-md">
                            System Online: Spider-Protocol active
                        </p>
                    </motion.div>

                    {/* Phase 2: Action / Threat Alert */}
                    <motion.div style={{ opacity: alertOpacity }} className="absolute font-mono">
                        <h2 className="text-4xl md:text-6xl font-bold text-red-500 text-glow mb-2">
                            WARNING: THREAT DETECTED
                        </h2>
                        <div className="flex flex-col gap-2 border-l-4 border-red-500 pl-4 mt-6 glass p-6 w-full max-w-lg">
                            <span className="text-gray-300">Scanner output: ACTIVE CONFLICT</span>
                            <span className="text-white">Loc: Midtown Manhattan (14th & Broadway)</span>
                            <span className="text-red-400 animate-pulse">Dispatching... ETA 4 seconds</span>
                        </div>
                    </motion.div>

                    {/* Phase 3: Resolution / Call to utilities */}
                    <motion.div style={{ opacity: actionOpacity }} className="absolute w-full bottom-32 -mx-6 md:-mx-24 px-6 md:px-24 text-center">
                        <h2 className="text-3xl md:text-5xl font-mono font-bold text-white text-glow mb-8 tracking-widest">
                            YOUR FRIENDLY NEIGHBORHOOD NETWORK
                        </h2>
                    </motion.div>

                </div>

                {/* HUD reticle/decorations */}
                <div className="absolute inset-0 z-30 pointer-events-none border-[1px] border-white/10 m-4 flex flex-col justify-between hidden md:flex">
                    <div className="flex justify-between w-full font-mono text-xs text-red-500 p-2 opacity-60">
                        <span>REC: 24.12.91</span>
                        <span>BAT: 89%</span>
                    </div>
                    <div className="flex justify-between w-full font-mono text-xs text-gray-500 p-2 opacity-60">
                        <span>ZOOM: 2.5X</span>
                        <span>PETER-NET-SECURE</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
