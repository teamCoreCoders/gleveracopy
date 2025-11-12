"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Card = {
  title: string;
  src: string;
  alt: string;
};

const CARDS: Card[] = [
  {
    title: "Best Sellers",
    src: "/images/card-1.png",
    alt: "Best sellers diamond ring",
  },
  {
    title: "New In",
    src: "/images/card-2.png",
    alt: "New in diamond necklace",
  },
  {
    title: "gift of love",
    src: "/images/card-3.png",
    alt: "Gift of love diamond earrings",
  },
];

export default function ThreeFeatureCards() {
  return (
    <section className="bg-black text-white relative overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {CARDS.map((c, i) => (
            <FeatureCard key={i} card={c} index={i} />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

function FeatureCard({ card, index }: { card: Card; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
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

  return (
    <article className="group relative">
      <motion.div
        className="relative aspect-[4/5] w-full overflow-hidden bg-black"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ margin: "-50px" }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay: index * 0.15,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Image */}
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={card.src}
            alt={card.alt}
            fill
            priority={index === 0}
            className="object-contain md:object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
          animate={{
            opacity: isHovered ? 0.5 : 0.7,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Title Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
          <motion.div
            animate={{
              y: isHovered ? 0 : 10,
              opacity: isHovered ? 1 : 0.9,
            }}
            transition={{ duration: 0.4 }}
          >
            <motion.h3
              className="text-[32px] sm:text-[40px] lg:text-[48px] font-[500] leading-[0.95] tracking-[-0.02em] text-white"
              style={{ fontFamily: "Bodoni Moda, serif" }}
              animate={{
                scale: isHovered ? 1.02 : 1,
              }}
            >
              {card.title}
            </motion.h3>
          </motion.div>
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
          animate={{
            x: isHovered ? ["-100%", "200%"] : "-100%",
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 2,
          }}
          style={{
            transform: "skewX(-20deg)",
          }}
        />

        {/* Border Glow */}
        <div className="absolute inset-0 border border-white/20 group-hover:border-white/40 transition-colors duration-500 pointer-events-none" />
      </motion.div>

      {/* Decorative Line Below */}
      <motion.div
        className="mt-6 sm:mt-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent max-w-[120px] mx-auto"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ margin: "-50px" }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          delay: index * 0.15 + 0.4,
        }}
        animate={{
          scaleX: isHovered ? 1.2 : 1,
          opacity: isHovered ? 1 : 0.6,
        }}
      />
    </article>
  );
}
