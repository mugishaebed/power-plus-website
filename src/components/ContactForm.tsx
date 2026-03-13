"use client";

import { FC, FormEvent, useEffect, useState } from "react";
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

const scatteredPositions: { left: number; top: number; icon: number }[] = [
  { left: 6, top: 8, icon: 1 },
  { left: 75, top: 5, icon: 4 },
  { left: 40, top: 12, icon: 6 },
  { left: 90, top: 20, icon: 2 },
  { left: 10, top: 35, icon: 0 },
  { left: 60, top: 30, icon: 5 },
  { left: 85, top: 45, icon: 3 },
  { left: 20, top: 55, icon: 6 },
  { left: 70, top: 60, icon: 1 },
  { left: 5, top: 70, icon: 4 },
  { left: 50, top: 75, icon: 0 },
  { left: 88, top: 72, icon: 5 },
  { left: 30, top: 88, icon: 2 },
  { left: 65, top: 92, icon: 3 },
];

const contactInfo = [
  {
    label: "Phone",
    value: "+250 788 563 458\n+250 788 333 183",
    href: "tel:+250788563458",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "powerplustechnologyltd@gmail.com",
    href: "mailto:powerplustechnologyltd@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Kigali, Rwanda",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Working Hours",
    value: "Mon – Fri: 8:00 AM – 5:00 PM\nSat: 9:00 AM – 1:00 PM",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const ContactForm: FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 10000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-white border border-[#121212]/10 rounded-lg px-4 py-3 text-[#121212] text-sm placeholder:text-[#121212]/30 outline-none transition-all duration-300 focus:border-[#F07C21] focus:shadow-[0_0_0_3px_rgba(240,124,33,0.1)]";

  return (
    <section id="contact" className="relative bg-white py-16 md:py-20 overflow-hidden">
      {/* Background icons */}
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

      <div className="relative container mx-auto px-4">
        {/* Section header */}
        <FadeIn direction="up" className="text-center mb-10">
          <span className="inline-block border border-[#121212]/20 text-[#121212]/70 text-sm tracking-wider px-6 py-2 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F07C21] uppercase tracking-wider mb-3">
            Get In Touch
          </h2>
          <p className="text-[#121212]/60 max-w-xl mx-auto text-sm">
            Have a project in mind or need a consultation? Send us a message and
            we&apos;ll get back to you shortly.
          </p>
        </FadeIn>

        {/* Content: Contact Info + Form */}
        <FadeIn direction="up" delay={0.2}>
          <div className="relative max-w-6xl mx-auto">
            {/* Decorative L-corner borders */}
            <div className="absolute -top-6 -left-6 w-[30%] h-[40%] border-t-6 border-l-6 border-[#F07C21] border-b-0 border-r-0 z-10 pointer-events-none hidden md:block" />
            <div className="absolute -bottom-6 -right-6 w-[30%] h-[40%] border-b-6 border-r-6 border-[#F07C21] border-t-0 border-l-0 z-10 pointer-events-none hidden md:block" />

            <div className="relative bg-[#f5f5f5] rounded-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr]">
                {/* Left: Contact info panel */}
                <div className="hidden bg-[#121212] p-6 sm:p-8 lg:flex lg:p-10 lg:flex-col lg:justify-between">
                  {/* Desktop: full vertical layout */}
                  <div className="lg:flex lg:flex-col lg:justify-between lg:h-full">
                    <div>
                      <h3 className="text-white text-lg font-bold mb-1">
                        Contact Information
                      </h3>
                      <p className="text-white/40 text-sm mb-8">
                        Reach out to us through any of these channels.
                      </p>

                      <div className="space-y-6">
                        {contactInfo.map((info) => {
                          const content = (
                            <div className="flex items-start gap-4 group">
                              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#F07C21] shrink-0 group-hover:border-[#F07C21] transition-colors duration-300">
                                {info.icon}
                              </div>
                              <div className="min-w-0">
                                <span className="text-white/40 text-xs uppercase tracking-wider block mb-1">
                                  {info.label}
                                </span>
                                <span className="text-white/80 text-sm leading-relaxed whitespace-pre-line group-hover:text-[#F07C21] transition-colors duration-300">
                                  {info.value}
                                </span>
                              </div>
                            </div>
                          );

                          return info.href ? (
                            <a key={info.label} href={info.href}>
                              {content}
                            </a>
                          ) : (
                            <div key={info.label}>{content}</div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Social links */}
                    <div className="flex gap-3 mt-8">
                      <a
                        href="https://www.instagram.com/powerplustechnologyltd?igsh=MW16cmJpZmRwYXU1cA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 transition-all duration-300 hover:border-[#F07C21] hover:text-[#F07C21]"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                      <a
                        href="https://wa.me/250788563458"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 transition-all duration-300 hover:border-[#F07C21] hover:text-[#F07C21]"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right: Form */}
                <div className="relative p-6 sm:p-8 md:p-10">
                  {/* Success overlay */}
                  {status === "success" && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center animate-[fadeScale_0.4s_ease-out] bg-[#f5f5f5]/80 backdrop-blur-sm">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center animate-[bounceIn_0.5s_ease-out]">
                          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-[#121212] text-xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-[#121212]/50 text-sm mb-6">We&apos;ll get back to you shortly.</p>
                        <button
                          type="button"
                          onClick={() => setStatus("idle")}
                          className="px-6 py-2.5 text-sm font-medium rounded-lg border border-[#121212]/10 text-[#121212]/60 hover:text-[#121212] hover:border-[#121212]/20 transition-colors duration-200"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Error message */}
                  {status === "error" && (
                    <div className="mb-6 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                      </svg>
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="hidden"
                      name="access_key"
                      value="79a35642-be7f-4363-b1b0-3bb5809648a3"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-[#121212]/70 text-xs font-medium mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Your Name"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-[#121212]/70 text-xs font-medium mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+250 7XX XXX XXX"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-[#121212]/70 text-xs font-medium mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="name@example.com"
                          pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                          title="Please enter a valid email address (e.g. name@example.com)"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-[#121212]/70 text-xs font-medium mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        placeholder="Project inquiry"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[#121212]/70 text-xs font-medium mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell us about your project..."
                        className={`${inputClasses} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group w-full md:w-auto flex items-center justify-center gap-3 bg-[#F07C21] text-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest hover:bg-[#F07C21]/90 hover:shadow-[0_0_20px_rgba(240,124,33,0.3)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      {status === "sending" ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactForm;
