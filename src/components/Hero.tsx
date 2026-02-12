"use client";

import MotionWrapper from "./MotionWrapper";
import Navbar from "./Navbar";

export const SERVICES = [
  {
    title: "Electrical Installation",
    description: "Complete wiring, lighting, power distribution, and grounding solutions built to safety standards for homes, businesses, and industrial facilities.",
    imgSrc: "/services/hero-1.png",
    color: "#ff9d00",
  },
  {
    title: "Safety Systems",
    description: "Fire alarms, CCTV surveillance, gas detection, and fire extinguisher solutions to protect your people and property.",
    imgSrc: "/services/safety-2.png",
    color: "#ff9d00",
  },
  {
    title: "Network & Sound",
    description: "Fiber optic connectivity, structured networking, and professional sound system installations for modern buildings.",
    imgSrc: "/services/sound.png",
    color: "#ff9d00",
  },
  {
    title: "Power & Climate",
    description: "Generator backup power, HVAC heating and cooling, and reliable supply of quality electrical materials.",
    imgSrc: "/services/hvac.png",
    color: "#ff9d00",
  },
];

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full bg-[#030303] overflow-hidden">
      {/* Full-screen sliding background images */}
      <div className="absolute inset-0 z-0">
        <MotionWrapper
          services={SERVICES}
          onIndexChange={() => {}}
        />
      </div>

      {/* Navbar floating on top */}
      <Navbar />
    </section>
  );
}