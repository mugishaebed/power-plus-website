"use client";

import { FC, useRef, useEffect, useState } from "react";
import Image from "next/image";
import { services } from "@/data/services";

const Services: FC = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<Set<number>>(new Set());

  useEffect(() => {
    const container = listRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = new Set(prev);
          entries.forEach((entry) => {
            const id = Number(entry.target.getAttribute("data-id"));
            if (entry.isIntersecting) {
              next.add(id);
            }
          });
          return next;
        });
      },
      { threshold: 0.15 }
    );

    container.querySelectorAll("[data-id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-[#030303]">
      <div className="container mx-auto px-4">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left — heading + service list */}
          <div className="flex-1 min-w-0">
            {/* Heading */}
            <div className="text-left mb-6">
              <p className="text-[#F07C21] uppercase tracking-[0.2em] text-[35px] mb-4">
                Services
              </p>
              <h2 className="text-[25px] font-light text-[#FFFFFF]">
                What We Do
              </h2>
            </div>

            {/* Description */}
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mb-12">
              From design to commissioning, we deliver end-to-end electrical
              engineering solutions that power homes, businesses, and
              critical infrastructure across Rwanda and East Africa.
            </p>

            {/* Service list — all visible, fade in on scroll */}
            <div ref={listRef}>
              {services.map((service) => {
                const isVisible = visible.has(service.id);
                return (
                  <div
                    key={service.id}
                    data-id={service.id}
                    className="border-b border-white/10 transition-all duration-700 ease-out"
                    style={{
                      opacity: isVisible ? 1 : 0.05,
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(16px)",
                    }}
                  >
                    <div className="flex items-center gap-4 md:gap-6 py-5 md:py-6">
                      {/* Number */}
                      <span className="text-sm font-light tracking-wider w-8 flex-shrink-0 text-[#F07C21]">
                        {String(service.id).padStart(2, "0")}
                      </span>

                      {/* Title + description */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-light text-white">
                          {service.name}
                        </h3>
                        <p className="text-sm md:text-base text-white/40 leading-relaxed mt-1.5">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — sticky image */}
          <div className="hidden lg:block lg:w-[45%] xl:w-[42%] flex-shrink-0">
            <div className="sticky top-24">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                {/* Orange accent corners */}
                <div className="absolute top-0 left-0 w-16 h-16 z-20">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#F07C21]" />
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-[#F07C21]" />
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 z-20">
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-[#F07C21]" />
                  <div className="absolute bottom-0 right-0 h-full w-[2px] bg-[#F07C21]" />
                </div>

                <Image
                  src="/services/safety-2.png"
                  alt="Power Plus Technology engineer at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, 45vw"
                  priority
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/60 via-transparent to-transparent z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
