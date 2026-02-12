"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote:
      "Power Plus Technology's engineering expertise and responsiveness have been critical to the success of our operations. Their team is proactive, detail-oriented, and truly understands the complexity of our needs.",
    name: "Mugisha Patrick",
    role: "Operations Manager, Kigali Convention Centre",
    image:
      "/services/user-fallback.jpg",
  },
  {
    quote:
      "Working with Power Plus has transformed our power infrastructure. Their professionalism and commitment to quality is unmatched in the industry.",
    name: "Mutoni Diane",
    role: "Director of Facilities, Norrsken House Kigali",
    image:
      "/services/user-fallback.jpg",
  },
  {
    quote:
      "The team delivered our fiber connectivity project ahead of schedule and with exceptional quality. They are our go-to partner for all critical infrastructure needs.",
    name: "Habimana Jean-Claude",
    role: "CTO, BK Arena",
    image:
      "/services/user-fallback.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  }, []);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn direction="up" className="text-center mb-16">
          <span className="inline-block border border-[#121212]/20 text-[#121212]/70 text-sm tracking-wider px-6 py-2 rounded-full mb-6">
            What our Clients Say
          </span>
          <h2 className="text-4xl md:text-3xl font-bold text-[#F07C21] uppercase tracking-wider mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-[#121212]/60 max-w-xl mx-auto">
            Hear from our partners who rely on Power Plus Technology for precision,
            performance, and reliability.
          </p>
        </FadeIn>

        {/* Testimonial Card */}
        <FadeIn direction="up" delay={0.2}>
          <div className="relative max-w-5xl mx-auto">
            {/* Top-left decorative L corner */}
            <div className="absolute -top-6 -left-6 w-[45%] h-[55%] border-t-6 border-l-6 border-[#F07C21] border-b-0 border-r-0 z-10 pointer-events-none" />

            {/* Bottom-left decorative L corner */}
            <div className="absolute -bottom-6 -left-6 w-[45%] h-[55%] border-b-6 border-l-6 border-[#F07C21] border-t-0 border-r-0 z-10 pointer-events-none" />

            {/* Main card */}
            <div className="relative bg-[#f5f5f5] rounded-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto]">
                {/* Left: Text content */}
                <div className="p-10 md:p-14 flex flex-col justify-between min-h-[400px]">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={current}
                      custom={direction}
                      initial={{ opacity: 0, x: direction * 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -30 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="flex-1 flex flex-col justify-between"
                    >
                      {/* Quote */}
                      <p className="text-[#121212]/80 text-lg leading-relaxed mb-8">
                        {t.quote}
                      </p>

                      {/* Person info */}
                      <div className="flex items-center gap-0">
                        {/* Decorative overlapping squares */}
                        <div className="relative w-14 h-14 shrink-0">
                          <div className="absolute top-1 left-0 w-8 h-8 bg-[#F07C21]" />
                          <div className="absolute bottom-1 right-1 w-8 h-8 border-2 border-[#F07C21]" />
                        </div>
                        <div className="bg-[#e8e8e8]/80 px-6 py-3">
                          <h4 className="text-[#121212] font-bold text-lg">
                            {t.name}
                          </h4>
                          <p className="text-[#121212]/60 text-sm">{t.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation arrows */}
                  <div className="flex items-center gap-3 mt-8">
                    <button
                      onClick={prev}
                      className="w-10 h-10 rounded-full border border-[#F07C21] text-[#F07C21] flex items-center justify-center hover:bg-[#F07C21] hover:text-white hover:scale-110 hover:shadow-[0_0_12px_rgba(240,124,33,0.4)] active:scale-95 transition-all duration-200"
                      aria-label="Previous testimonial"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      onClick={next}
                      className="w-10 h-10 rounded-full border border-[#F07C21] text-[#F07C21] flex items-center justify-center hover:bg-[#F07C21] hover:text-white hover:scale-110 hover:shadow-[0_0_12px_rgba(240,124,33,0.4)] active:scale-95 transition-all duration-200"
                      aria-label="Next testimonial"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Right: Image with orange border */}
                <div className="relative hidden lg:block w-[380px] py-10 pr-10">
                  {/* Orange border frame - 3-sided (no left), offset top-right from image */}
                  <div className="absolute top-4 right-4 bottom-4 w-[75%] border-t-[6px] border-r-[6px] border-b-[6px] border-l-0 border-[#F07C21]" />
                  {/* Image */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="relative z-10 w-[300px] aspect-[3/4] overflow-hidden"
                    >
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover rounded-md"
                        sizes="300px"
                      />
                    </motion.div>
                  </AnimatePresence>
                  {/* Bottom decorative orange line */}
                  <div className="absolute bottom-0 right-4 w-[60%] h-[3px] bg-[#F07C21] translate-y-2" />
                </div>
              </div>
            </div>

            {/* Dots navigation (right side) */}
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === current
                      ? "bg-[#F07C21]"
                      : "bg-[#121212]/30 hover:bg-[#121212]/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
