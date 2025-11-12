"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsletterModal from "../components/NewsletterModal";
import HeroSection from "../sections/HomePageSections/HeroSection";
import BestSellersSection from "../sections/HomePageSections/BestSellersSection";
import ThreeFeatureCards from "../components/ThreeFeatureCards";
import VerticalCarousel from "../components/VerticalCarousel";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <main
      className={`min-h-screen bg-black text-white ${inter.className} overflow-hidden`}
    >
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Newsletter Modal ===== */}
      <NewsletterModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={(data) => console.log(data)}
      />

      {/* ===== Hero Section ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 bg-transparent"
      >
        <HeroSection />
      </motion.section>

      {/* ===== Best Sellers ===== */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="px-6 md:px-12 lg:px-24 py-20 bg-transparent"
      >
        <BestSellersSection />
      </motion.section>

      {/* ===== Vertical Carousel ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="py-24 bg-transparent"
      >
        <VerticalCarousel />
      </motion.section>

      {/* ===== Three Feature Cards ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="py-20 px-6 md:px-12 lg:px-24 border-t border-neutral-800 bg-transparent"
      >
        <ThreeFeatureCards />
      </motion.section>

      {/* ===== Footer ===== */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="bg-black text-white"
      >
        <Footer />
      </motion.footer>
    </main>
  );
}
