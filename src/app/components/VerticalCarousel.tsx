"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

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
        image: "/images/ring-model.png",
        alt: "Rings",
    },
    {
        key: "earrings",
        title: "Earrings",
        subtitle: "Earspiration",
        desc: "Statement drops and refined studs that frame the face with vivid brilliance.",
        image: "/images/earring-model.png",
        alt: "Earrings",
    },
    {
        key: "necklaces",
        title: "Necklaces",
        subtitle: "Layer with love",
        desc: "Chains and pendants designed for stacking and story‑telling moments.",
        image: "/images/bracelet-model.png",
        alt: "Necklaces",
    },
    {
        key: "bracelets",
        title: "Bracelets",
        subtitle: "Stack your shine",
        desc: "Tennis and cuff styles that bring a refined finish to every ensemble.",
        image: "/images/necklace-model.png",
        alt: "Bracelets",
    },
];

export default function VerticalCarousel() {
    return (
        <section className="bg-black text-white relative overflow-hidden">
            <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-16">
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

                {/* Items with Text and Image Side by Side */}
                <div className="space-y-16 lg:space-y-20 xl:space-y-24">
                    {ITEMS.map((item, index) => (
                        <CollectionItem key={item.key} item={item} index={index} />
                    ))}
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}

function CollectionItem({ item, index }: { item: Item; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center min-h-[500px] lg:min-h-[600px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.15,
            }}
        >
            {/* Text Content - Left Side */}
            <div className="order-2 lg:order-1">
                <motion.h3
                    className="text-[36px] sm:text-[48px] lg:text-[64px] font-[500] leading-[0.95] tracking-[-0.02em] mb-4"
                    style={{ fontFamily: "Bodoni Moda, serif" }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
                >
                    {item.title}
                </motion.h3>
                {item.subtitle && (
                    <motion.p
                        className="text-white/80 text-sm sm:text-base uppercase tracking-widest mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                    >
                        {item.subtitle}
                    </motion.p>
                )}
                <motion.p
                    className="text-white/70 text-base sm:text-lg leading-relaxed max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                >
                    {item.desc}
                </motion.p>
            </div>

            {/* Image - Right Side with Sticky on Desktop */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-32 lg:self-start lg:h-[calc(100vh-8rem)] lg:flex lg:items-center">
            <motion.div
                className="group relative overflow-hidden rounded-[28px] shadow-[0_35px_90px_rgba(0,0,0,0.65)] w-full max-w-[500px] mx-auto lg:mx-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: index * 0.15 + 0.2,
                }}
            >
                {/* Image Container */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-gradient-to-b from-black/70 via-black/40 to-black/80 w-full">
                    <motion.div
                        className="absolute inset-0"
                        animate={{
                            scale: isHovered ? 1.12 : 1,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                    >
                        <Image
                            src={item.image}
                            alt={item.alt}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                            priority={index === 0}
                            quality={90}
                        />
                    </motion.div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                </div>
            </motion.div>
            </div>
        </motion.div>
    );
}
