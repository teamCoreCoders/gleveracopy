"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

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
    desc: "Chains and pendants designed for stacking and story-telling moments.",
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

const AUTOPLAY_MS = 2800;

export default function VerticalCarousel() {
  const [index, setIndex] = useState(0);
  const wrap = (i: number) => (i + ITEMS.length) % ITEMS.length;

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const start = () => {
    stop();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % ITEMS.length);
    }, AUTOPLAY_MS);
  };
  const stop = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    start();
    return stop;
  }, []);

  const vis = useMemo(() => {
    const prev = wrap(index - 1);
    const curr = wrap(index);
    const next = wrap(index + 1);
    return [prev, curr, next];
  }, [index]);

  const active = ITEMS[index];

  return (
    <section className="bg-black text-white py-10">
      <div className="mx-auto max-w-[1450px] px-6 sm:px-10">

        <div className="grid grid-cols-12 gap-8">
          
          {/* LEFT CONTENT – GLASSY BLOCK */}
          <aside className="col-span-5">
            <div className="relative h-[65vh] flex items-center justify-center">
              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.14)]">
                <h2
                  className="select-none font-[500] fraunces-text leading-[0.95]"
                  style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
                >
                  {active.title}
                </h2>
                {active.subtitle && (
                  <p className="mt-3 text-white/70 text-lg">{active.subtitle}</p>
                )}
                {active.desc && (
                  <p className="mt-4 text-white/60 text-[15px] leading-relaxed max-w-[550px]">
                    {active.desc}
                  </p>
                )}
              </div>
            </div>
          </aside>

          {/* RIGHT – 3-IMAGE CAROUSEL */}
          <div className="col-span-7">
            <Carousel3Up items={ITEMS} vis={vis} onPause={stop} onResume={start} />

            {/* Indicators */}
            <div className="mt-6 flex justify-center gap-3">
              {ITEMS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to ${i + 1}`}
                  className={`h-[6px] rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-white"
                      : "w-3 bg-white/40 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Carousel3Up({
  items,
  vis,
  onPause,
  onResume,
}: {
  items: Item[];
  vis: number[];
  onPause: () => void;
  onResume: () => void;
}) {
  return (
    <div
      className="relative mx-auto w-full max-w-[680px] h-[70vh] min-h-[350px] overflow-hidden rounded-3xl bg-white/5 backdrop-blur-2xl shadow-[0_0_50px_rgba(255,255,255,0.09)]"
      onMouseEnter={onPause}
      onMouseLeave={onResume}
    >
      {/* STACKED IMAGES */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <CarouselImage item={items[vis[0]]} size="small" />
        <CarouselImage item={items[vis[1]]} size="large" />
        <CarouselImage item={items[vis[2]]} size="small" />
      </div>

      {/* Top/Bottom Fade */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black via-black/50 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
    </div>
  );
}

function CarouselImage({ item, size }: { item: Item; size: "small" | "large" }) {
  const boxH = size === "large" ? "56%" : "22%";

  const scale =
    size === "large"
      ? "scale-105 hover:scale-110"
      : "scale-[0.85] opacity-70 hover:opacity-90";

  const glow =
    size === "large"
      ? "drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]"
      : "drop-shadow-[0_0_18px_rgba(255,255,255,0.15)]";

  return (
    <div
      className={`relative w-[88%] sm:w-[75%] my-3 transition-all duration-500 ease-out ${scale} ${glow}`}
      style={{ height: boxH }}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="40vw"
        className="object-contain object-center pointer-events-none"
      />
    </div>
  );
}
