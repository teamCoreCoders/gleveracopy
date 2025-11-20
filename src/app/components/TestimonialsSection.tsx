"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Testimonial = {
    id: number;
    quote: string;
    name: string;
    title: string;
    avatar: string;
    rating: number;
};

const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        quote: "Every piece from Glevara has elevated my personal collection. The attention to detail and craftsmanship is unparalleled. I return for their exclusivity.",
        name: "Sophia Chen",
        title: "Luxury Interior Designer",
        avatar: "/images/testimonial-1.jpg",
        rating: 5,
    },
    {
        id: 2,
        quote: "Glevara represents everything I value in premium lifestyle. The curation is immaculate, and customer service sets the gold standard.",
        name: "Marcus Wellington",
        title: "Art Collector",
        avatar: "/images/testimonial-2.jpg",
        rating: 5,
    },
    {
        id: 3,
        quote: "From discovery to delivery, the Glevara experience is flawless. Their pieces are investment-worthy and timeless.",
        name: "Alexandra Dubois",
        title: "Fashion Editor",
        avatar: "/images/testimonial-3.jpg",
        rating: 5,
    },
];

export default function TestimonialsSection() {
    return (
        <section className="bg-black text-white relative overflow-hidden">
            {/* Star Map Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <StarMapPattern />
            </div>

            <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <motion.h2
                        className="text-[40px] sm:text-[56px] lg:text-[72px] font-[500] leading-[0.95] tracking-[-0.02em] mb-4"
                        style={{ fontFamily: "Bodoni Moda, serif" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Voices of Elegance
                    </motion.h2>
                    <motion.p
                        className="text-white/70 text-base sm:text-lg"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Trusted by discerning collectors worldwide
                    </motion.p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                    ))}
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
    return (
        <motion.article
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 lg:p-10 rounded-none group hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ margin: "-50px" }}
            transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.15,
            }}
        >
            {/* Rating Stars */}
            <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.svg
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ margin: "-50px" }}
                        transition={{
                            duration: 0.3,
                            delay: index * 0.15 + i * 0.1,
                        }}
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                ))}
            </div>

            {/* Quote */}
            <motion.blockquote
                className="text-white/90 text-sm sm:text-base leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
            >
                "{testimonial.quote}"
            </motion.blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4">
                <motion.div
                    className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-colors duration-500"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ margin: "-50px" }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.15 + 0.4,
                        type: "spring",
                        stiffness: 200,
                    }}
                >
                    {/* Placeholder avatar - replace with actual images */}
                    <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-white/60 text-lg font-semibold">
                        {testimonial.name.charAt(0)}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                >
                    <p className="text-white font-medium text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-white/60 text-xs sm:text-sm">{testimonial.title}</p>
                </motion.div>
            </div>
        </motion.article>
    );
}

function StarMapPattern() {
    // Create a subtle star map/network pattern
    return (
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="starPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1" fill="white" opacity="0.3" />
                    <circle cx="50" cy="30" r="1.5" fill="white" opacity="0.4" />
                    <circle cx="80" cy="25" r="1" fill="white" opacity="0.3" />
                    <circle cx="30" cy="60" r="1" fill="white" opacity="0.3" />
                    <circle cx="70" cy="70" r="1.5" fill="white" opacity="0.4" />
                    <circle cx="15" cy="85" r="1" fill="white" opacity="0.3" />
                    <circle cx="90" cy="90" r="1" fill="white" opacity="0.3" />
                    {/* Subtle connecting lines */}
                    <line x1="20" y1="20" x2="50" y2="30" stroke="white" strokeWidth="0.5" opacity="0.1" />
                    <line x1="50" y1="30" x2="80" y2="25" stroke="white" strokeWidth="0.5" opacity="0.1" />
                    <line x1="30" y1="60" x2="70" y2="70" stroke="white" strokeWidth="0.5" opacity="0.1" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#starPattern)" />
        </svg>
    );
}

