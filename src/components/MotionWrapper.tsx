"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Props {
  services: any[];
  onIndexChange: (index: number) => void;
}

export default function MotionWrapper({ services, onIndexChange }: Props) {
  const [[page, direction], setPage] = useState([0, 0]);
  const index = Math.abs(page % services.length);

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    onIndexChange(index);
    const timer = setTimeout(() => paginate(1), 6000);
    return () => clearTimeout(timer);
  }, [index, onIndexChange, paginate]);

  return (
    <div className="relative h-full w-full">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={page}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full"
        >
          {/* THE IMAGE */}
          <Image
            src={services[index].imgSrc}
            alt={services[index].title}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          
          {/* FULL SECTION OVERLAY */}
          {/* Changed from w-1/2 to absolute inset-0 */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* CONTENT CONTAINER */}
          {/* Removed w-1/2 and absolute inset-y-0 to let it breathe across the full width */}
          <div className="relative z-20 h-full w-full flex flex-col justify-end px-6 sm:px-8 md:px-16 lg:px-24 pb-40 sm:pb-44 md:pb-48">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="font-black text-white tracking-tighter leading-[0.9] mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-7xl lg:text-8xl"
              >
                {services[index].title.split(" ")[0]}
                <br />
                <span style={{ color: services[index].color }}>
                  {services[index].title.split(" ").slice(1).join(" ")}
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-zinc-200 border-l-2 pl-4 sm:pl-6 leading-relaxed max-w-md text-sm sm:text-base md:text-lg lg:text-xl"
                style={{ borderColor: services[index].color }}
              >
                {services[index].description}
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-6 sm:pt-8 md:pt-10"
              >
                <button className="group flex items-center gap-3 sm:gap-4 bg-white text-black px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 text-sm sm:text-base font-bold uppercase tracking-widest hover:bg-[#ff9d00] hover:text-white transition-all">
                  Get Started <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* FOOTER CONTROLS */}
      <div className="absolute bottom-0 left-0 w-full z-30 px-4 sm:px-6 md:px-12 pb-6 sm:pb-8 md:pb-10">
        <div className="flex items-center justify-between border-t border-white/20 pt-4 sm:pt-6 md:pt-8">
          <div className="flex items-center gap-3 sm:gap-6 w-full max-w-[200px] sm:max-w-xs">
            <span className="font-mono text-xs text-white/50">0{index + 1}</span>
            <div className="h-[2px] flex-1 bg-white/10 relative overflow-hidden">
              <motion.div
                key={index}
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="absolute inset-0 h-full w-full"
                style={{ backgroundColor: services[index].color }}
              />
            </div>
            <span className="font-mono text-xs text-white/50">0{services.length}</span>
          </div>

          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous slide"
              className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:border-[#F07C21] hover:bg-[#F07C21] hover:text-white"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => paginate(1)}
              aria-label="Next slide"
              className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:border-[#F07C21] hover:bg-[#F07C21] hover:text-white"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}