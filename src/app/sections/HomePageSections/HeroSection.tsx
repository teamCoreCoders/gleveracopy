"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Optimized parallax: reduced movement for better performance
    // Disable parallax if user prefers reduced motion
    const backgroundY = useTransform(
        scrollYProgress,
        [0, 1],
        prefersReducedMotion ? ["0%", "0%"] : ["0%", "30%"]
    );
    const contentY = useTransform(
        scrollYProgress,
        [0, 1],
        prefersReducedMotion ? ["0%", "0%"] : ["0%", "15%"]
    );
    const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.4]);

    return (
        <section ref={containerRef} className="relative isolate min-h-screen overflow-hidden">
            {/* Parallax Background Image */}
            <motion.div
                style={{
                    y: backgroundY,
                    opacity,
                }}
                className="absolute inset-0 z-0 [transform:translateZ(0)] [will-change:transform]"
            >
                <div className="absolute inset-0 [transform:translateZ(0)] [backface-visibility:hidden]">
                    <Image
                        src="/images/hero-hand.png"
                        alt="HeroSection"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover [transform:translateZ(0)]"
                    />
                </div>
            </motion.div>

            {/* Content with parallax */}
            <motion.div
                style={{
                    y: contentY,
                }}
                className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl place-items-center px-6 [transform:translateZ(0)]"
            >
                <div className="text-center">
                    <motion.h1
                        className="mb-[400] fraunces-text text-white text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-[0.04em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        Vibrant. Sustainable. Timeless.
                    </motion.h1>

                    <motion.div
                        className="mt-40 flex justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
                    >
                        <a
                            href="/categories/all-products"
                            className="group inline-flex items-center gap-2 rounded border border-white  px-5 py-2 text-white  transition"
                        >
                            <span>Shop all</span>
                            <svg
                                className="h-4 w-4 transition rotate-0 group-hover:-rotate-45"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M5 12h14" />
                                <path d="M13 5l7 7-7 7" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
