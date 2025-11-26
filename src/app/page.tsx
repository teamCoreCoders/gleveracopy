import HomePage from "./pages/HomePage";
import Image from "next/image";

export default function page() {
  return (
    <main className="bg-[#1A1A1D] text-[#F7F5EF]">
      <HomePage />

      {/* WhatsApp button with custom image (bigger size) */}
      <a
        href="https://wa.me/919820026633"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-4 right-4 z-[100] grid place-items-center w-16 h-16 p-1 rounded-full bg-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      >
        <span className="relative inline-flex w-full h-full rounded-full overflow-hidden p-1">
          <Image
            src="/images/whatsapp.png"
            alt="WhatsApp"
            fill
            sizes="48px"
            className="object-contain"
            priority
            quality={100}
          />
        </span>
      </a>
    </main>
  );
}
