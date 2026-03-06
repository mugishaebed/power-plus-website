"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("About Us");

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setActiveLink(link.name);
    const el = document.querySelector(link.href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-[100] px-4 py-4 md:px-8 md:py-6">
      {/* Floating white navbar container */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg px-6 py-1 flex items-center justify-between">

        {/* Logo / Company Name */}
<Link href="/" className="flex-shrink-0 -my-4"> 
  <Image 
    src="/logo.png" 
    alt="Power Plus Technology Logo" 
    width={150} // Increased from 100
    height={60} // Increased from 40
    className="object-contain"
  />
</Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link)}
              className={`text-base font-medium transition-colors cursor-pointer ${
                activeLink === link.name
                  ? "text-[#ff9d00]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.instagram.com/powerplustechnologyltd?igsh=MW16cmJpZmRwYXU1cA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 text-gray-600 hover:text-[#E1306C] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a
              href="https://wa.me/250788563458"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 text-gray-600 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="tel:+250788563458"
              aria-label="Call us"
              className="p-2 text-gray-600 hover:text-[#ff9d00] transition-colors"
            >
              <Phone size={20} />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-5xl mx-auto mt-2 bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  handleClick(e, link);
                  setIsOpen(false);
                }}
                className={`text-base font-medium py-2 border-b border-gray-100 cursor-pointer ${
                  activeLink === link.name
                    ? "text-[#ff9d00]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/powerplustechnologyltd?igsh=MW16cmJpZmRwYXU1cA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 text-gray-600 hover:text-[#E1306C] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a
                href="https://wa.me/250788563458"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 text-gray-600 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="tel:+250788563458"
                aria-label="Call us"
                className="p-2 text-gray-600 hover:text-[#ff9d00] transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
