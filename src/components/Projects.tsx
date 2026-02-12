"use client";

import { FC, useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const Portfolio: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(projects.length > 1);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();

    el.addEventListener("scroll", checkScroll, { passive: true });

    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      ro.disconnect();
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(":scope > a")?.offsetWidth ?? 400;
    el.scrollBy({ left: direction === "left" ? -cardWidth - 32 : cardWidth + 32, behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="py-24 bg-[#121212]">
      <div className="container mx-auto px-4">
        {/* Heading + navigation arrows */}
        <div className="flex items-end justify-between mb-20">
          <div className="text-left">
            <p className="text-[#F07C21] uppercase tracking-[0.2em] text-[35px] mb-4">
              Portfolio
            </p>
            <h2 className="text-[25px] font-light text-[#FFFFFF]">
              Featured Work
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#F07C21] hover:text-[#F07C21]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#F07C21] hover:text-[#F07C21]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="block group relative aspect-[3/4] overflow-hidden rounded-lg flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)]"
            >
              {/* Customer badge */}
              <div className="absolute top-6 right-6 z-20 bg-[#F07C21] backdrop-blur-sm px-4 py-2 text-sm tracking-wider font-light text-[#FFFFFF] rounded-sm">
                {project.customer}
              </div>

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70 group-hover:from-black/20 group-hover:to-black/80 transition-all duration-500 z-10" />

              {/* Project image */}
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-10 text-white z-20">
                <h3 className="text-[28px] font-light mb-3 group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                  {project.name}
                </h3>
                <p className="text-gray-200/90 text-base mb-8 leading-relaxed group-hover:translate-y-0 translate-y-2 transition-transform duration-500 delay-75">
                  {project.about}
                </p>
                <span className="inline-flex items-center text-[#F07C21] group-hover:text-orange-400 transition-colors duration-300">
                  <span className="text-sm tracking-wider">READ MORE</span>
                  <svg
                    className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
