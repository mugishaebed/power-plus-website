"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";

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

        {/* Right Side: Search Icon & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <button className="hidden lg:flex p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Search size={20} />
          </button>

          {/* Mobile Menu Toggle */}
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
