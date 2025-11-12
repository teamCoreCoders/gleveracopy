"use client";

import React, { useEffect, useRef, useState } from "react";
import FocusTrap from "focus-trap-react";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: { email: string; phone?: string; consent: boolean }) => void;
};

export default function NewsletterModal({ open, onClose, onSubmit }: Props) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const [isShown, setIsShown] = useState(false);

  // Show only once after 5 seconds
  useEffect(() => {
    const alreadyShown = localStorage.getItem("newsletterShown");
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setIsShown(true);
        localStorage.setItem("newsletterShown", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const visible = open || isShown;
  if (!visible) return null;

  const handleClose = () => {
    setIsShown(false);
    onClose?.();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    onSubmit?.({
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      consent: fd.get("consent") === "on",
    });
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <FocusTrap>
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          className="bg-black text-white rounded-2xl shadow-2xl w-[90%] max-w-sm p-6 relative border border-neutral-800"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={handleClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition"
          >
            ✕
          </button>

          <h2
            id="newsletter-heading"
            className="text-lg font-semibold text-center mb-3"
          >
            Get 15% Off Your First Order 🎉
          </h2>

          <p
            id="newsletter-desc"
            className="text-sm text-gray-300 text-center mb-6"
          >
            Subscribe to receive your discount code and stay updated with our
            latest offers.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm">
              <span className="block mb-1 text-gray-300">Email</span>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg bg-neutral-900 text-white border border-neutral-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white text-sm"
              />
            </label>

            <label className="block text-sm">
              <span className="block mb-1 text-gray-300">Phone number</span>
              <input
                name="phone"
                type="tel"
                pattern="[0-9+\-\s()]{6,}"
                className="w-full rounded-lg bg-neutral-900 text-white border border-neutral-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white text-sm"
              />
            </label>

            <label className="flex items-center gap-2 text-xs text-gray-400">
              <input
                name="consent"
                type="checkbox"
                className="accent-white h-4 w-4"
              />
              Yes, subscribe me to the newsletter
            </label>

            <button
              type="submit"
              className="w-full mt-4 bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-200 transition text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </FocusTrap>
    </div>
  );
}
