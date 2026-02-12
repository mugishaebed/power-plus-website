"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const backgroundIcons = [
  "/icons/multimeter.svg",
  "/icons/wires.svg",
  "/icons/bulb.svg",
  "/icons/socket.svg",
  "/icons/air-conditioner.svg",
  "/icons/cctv-camera.svg",
  "/icons/fire-extinguisher.svg",
];

// Pre-computed scattered positions (left%, top%) for a natural random look
const scatteredPositions: { left: number; top: number; icon: number }[] = [
  { left: 5, top: 3, icon: 0 },
  { left: 72, top: 7, icon: 3 },
  { left: 38, top: 2, icon: 5 },
  { left: 88, top: 15, icon: 1 },
  { left: 15, top: 18, icon: 4 },
  { left: 55, top: 22, icon: 6 },
  { left: 28, top: 30, icon: 2 },
  { left: 80, top: 35, icon: 0 },
  { left: 3, top: 40, icon: 5 },
  { left: 62, top: 42, icon: 3 },
  { left: 42, top: 50, icon: 1 },
  { left: 90, top: 52, icon: 6 },
  { left: 18, top: 55, icon: 4 },
  { left: 70, top: 60, icon: 2 },
  { left: 8, top: 65, icon: 0 },
  { left: 50, top: 68, icon: 5 },
  { left: 32, top: 75, icon: 3 },
  { left: 85, top: 72, icon: 1 },
  { left: 22, top: 82, icon: 6 },
  { left: 60, top: 85, icon: 4 },
  { left: 78, top: 90, icon: 2 },
  { left: 10, top: 92, icon: 0 },
  { left: 45, top: 95, icon: 5 },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative min-h-screen py-24 px-6 bg-white overflow-hidden flex items-center">
      {/* Repeating SVG Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {scatteredPositions.map((pos, i) => {
          const icon = backgroundIcons[pos.icon];
          return (
            <div
              key={i}
              className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 opacity-[0.10]"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                backgroundColor: "#ff9d00",
                WebkitMaskImage: `url(${icon})`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskImage: `url(${icon})`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />
          );
        })}
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Single Image */}
        <FadeIn direction="left" className="relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/services/safety.png"
              alt="Power Plus Technology at work"
              className="object-cover w-full h-full"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Decorative Grid Circle (Bottom Left) */}
          <div className="absolute -bottom-8 -left-8 w-24 h-24 opacity-40 pointer-events-none">
             <div className="w-full h-full border-[1px] border-[#ff9d00] rounded-full border-dashed animate-spin-slow"></div>
          </div>
        </FadeIn>

        {/* Right Side: Content */}
        <div className="relative z-10">
          <FadeIn direction="right">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              About <span className="text-[#ff9d00] ">US</span>
            </h2>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <p className="text-gray-500 leading-relaxed text-lg max-w-lg">
              Power Plus Technology is Rwanda's premier electrical engineering partner,
                delivering high-performance energy and connectivity solutions.
                We specialize in critical power backup, advanced protection systems, and
                precision fiber connectivity. From government infrastructure to private
                tech hubs, we ensure your business stays powered and connected through
                innovative engineering and rigorous maintenance.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <button className="mt-8 px-8 py-3 bg-[#ff9d00] text-white rounded-full font-medium hover:bg-green-600 transition-colors">
              Learn More
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}