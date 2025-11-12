"use client";

import { useState } from "react";
import { Inter } from "next/font/google";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsletterModal from "../components/NewsletterModal";
import HeroSection from "../sections/HomePageSections/HeroSection";
import BestSellersSection from "../sections/HomePageSections/BestSellersSection";
import ThreeFeatureCards from "../components/ThreeFeatureCards";
import VerticalCarousel from "../components/VerticalCarousel";
import TestimonialsSection from "../components/TestimonialsSection";

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
      <section className="relative z-10 bg-transparent">
        <HeroSection />
      </section>

      {/* ===== Best Sellers ===== */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-transparent">
        <BestSellersSection />
      </section>

      {/* ===== Vertical Carousel ===== */}
      <section className="py-24 bg-transparent">
        <VerticalCarousel />
      </section>

      {/* ===== Three Feature Cards ===== */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-neutral-800 bg-transparent">
        <ThreeFeatureCards />
      </section>

      {/* ===== Testimonials ===== */}
      <section className="bg-black text-white">
        <TestimonialsSection />
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-black text-white">
        <Footer />
      </footer>
    </main>
  );
}
