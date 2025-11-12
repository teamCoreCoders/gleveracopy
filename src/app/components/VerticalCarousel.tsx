"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Item = {
    key: string;
    title: string;
    subtitle?: string;
    desc?: string;
    image: string;
    alt: string;
};

const ITEMS: Item[] = [
    {
        key: "rings",
        title: "Rings",
        subtitle: "Modern cuts",
        desc: "Signature solitaire, halo, and eternity silhouettes crafted to shine from every angle.",
        image: "/images/hover3.png",
        alt: "Rings",
    },
    {
        key: "earrings",
        title: "Earrings",
        subtitle: "Everyday sparkle",
        desc: "From delicate studs to statement drops, elevate looks with effortless brilliance.",
        image: "/images/hover2.png",
        alt: "Earrings",
    },
    {
        key: "necklaces",
        title: "Necklaces",
        subtitle: "Layer with love",
        desc: "Chains and pendants designed for stacking and story‑telling moments.",
        image: "/images/hover4.png",
        alt: "Necklaces",
    },
    {
        key: "bracelets",
        title: "Bracelets",
        subtitle: "Stack your shine",
        desc: "Tennis and cuff styles that bring a refined finish to every ensemble.",
        image: "/images/hover1.png",
        alt: "Bracelets",
    },
];

export default function VerticalCarousel() {
    return (
        <section className="bg-black text-white relative overflow-hidden">
            <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
                {/* Section Header */}
                <motion.div
                    className="mb-10 sm:mb-12 lg:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <motion.h2
                        className="text-center text-[40px] sm:text-[56px] lg:text-[80px] font-[500] leading-[0.95] tracking-[-0.02em]"
                        style={{ fontFamily: "Bodoni Moda, serif" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Our Collections
                    </motion.h2>
                    <motion.p
                        className="text-center mt-4 text-white/60 text-sm sm:text-base max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Discover timeless elegance in every piece
                    </motion.p>
                </motion.div>

                {/* Luxury Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                    {ITEMS.map((item, index) => (
                        <LuxuryCard key={item.key} item={item} index={index} />
                    ))}
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}

function LuxuryCard({ item, index }: { item: Item; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
        stiffness: 300,
        damping: 30,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
        stiffness: 300,
        damping: 30,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        mouseX.set(x - 0.5);
        mouseY.set(y - 0.5);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    };

    // Alternate layout: first two items get larger images, last two get text-focused
    const isLargeImage = index < 2;

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.15,
            },
        },
    };

    if (isLargeImage) {
        return (
            <motion.div
                className="group relative overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-50px" }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
            >
                {/* Image Container with 3D Effect */}
                <motion.div
                    className="relative aspect-[3/4] overflow-hidden bg-black/20"
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                >
                    <motion.div
                        className="absolute inset-0"
                        animate={{
                            scale: isHovered ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <Image
                            src={item.image}
                            alt={item.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={index === 0}
                        />
                    </motion.div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 lg:p-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: isHovered ? 1 : 0.9,
                                y: isHovered ? 0 : 10,
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <motion.h3
                                className="text-[36px] sm:text-[48px] lg:text-[64px] font-[500] leading-[0.95] tracking-[-0.02em] mb-2"
                                style={{ fontFamily: "Bodoni Moda, serif" }}
                            >
                                {item.title}
                            </motion.h3>
                            {item.subtitle && (
                                <motion.p
                                    className="text-white/80 text-sm sm:text-base uppercase tracking-widest mb-3"
                                    animate={{
                                        opacity: isHovered ? 1 : 0.7,
                                    }}
                                >
                                    {item.subtitle}
                                </motion.p>
                            )}
                            <motion.p
                                className="text-white/70 text-sm sm:text-base leading-relaxed max-w-md"
                                animate={{
                                    opacity: isHovered ? 1 : 0,
                                    height: isHovered ? "auto" : 0,
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                {item.desc}
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* Shine Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{
                            x: isHovered ? ["-100%", "200%"] : "-100%",
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: isHovered ? Infinity : 0,
                            repeatDelay: 2,
                        }}
                        style={{
                            transform: "skewX(-20deg)",
                        }}
                    />
                </motion.div>

                {/* Border Glow */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors duration-500 pointer-events-none" />
            </motion.div>
        );
    }

    // Text-focused card for last two items
    return (
        <motion.div
            className="group relative flex flex-col justify-center p-6 sm:p-8 lg:p-12 min-h-[300px] sm:min-h-[380px]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            {/* Background Image (Subtle) */}
            <motion.div
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/60" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10">
                <motion.div
                    animate={{
                        y: isHovered ? -10 : 0,
                    }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <motion.h3
                        className="text-[40px] sm:text-[56px] lg:text-[72px] font-[500] leading-[0.95] tracking-[-0.02em] mb-4"
                        style={{ fontFamily: "Bodoni Moda, serif" }}
                        animate={{
                            scale: isHovered ? 1.02 : 1,
                        }}
                    >
                        {item.title}
                    </motion.h3>
                    {item.subtitle && (
                        <motion.p
                            className="text-white/60 text-sm sm:text-base uppercase tracking-[0.2em] mb-6"
                            animate={{
                                opacity: isHovered ? 1 : 0.7,
                            }}
                        >
                            {item.subtitle}
                        </motion.p>
                    )}
                    <motion.p
                        className="text-white/70 text-base sm:text-lg leading-relaxed max-w-lg"
                        animate={{
                            opacity: isHovered ? 1 : 0.8,
                        }}
                    >
                        {item.desc}
                    </motion.p>

                    {/* Decorative Line */}
                    <motion.div
                        className="mt-8 h-px bg-white/20"
                        animate={{
                            scaleX: isHovered ? 1 : 0.5,
                            opacity: isHovered ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.6 }}
                    />
                </motion.div>
            </div>

            {/* Border */}
            <div className="absolute inset-0 border border-white/10 group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />
        </motion.div>
    );
}
