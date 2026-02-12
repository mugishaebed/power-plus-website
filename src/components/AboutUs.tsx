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

export default function AboutUs() {
  return (
    <section className="relative min-h-screen py-24 px-6 bg-white overflow-hidden flex items-center">
      {/* Repeating SVG Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, row) =>
          backgroundIcons.map((_, i) => {
            const shuffleOffset = ((row * 3 + i * 7) % backgroundIcons.length);
            const shuffledIcon = backgroundIcons[(i + row * 2 + shuffleOffset) % backgroundIcons.length];
            return (
              <div
                key={`${row}-${i}`}
                className="absolute w-16 h-16 opacity-[0.10]"
                style={{
                  left: `${(i * (90 / backgroundIcons.length)) + (row % 2 === 0 ? 3 : 10)}%`,
                  top: `${row * 35 + 10}%`,
                  backgroundColor: "#ff9d00",
                  WebkitMaskImage: `url(${shuffledIcon})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: `url(${shuffledIcon})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
            );
          })
        )}
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Single Image */}
        <FadeIn direction="left" className="relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/services/service-1.png"
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