"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Academics", href: "#academics" },
    { name: "Facilities", href: "#facilities" },
    { name: "Campus Life", href: "#campus-life" },
    { name: "Achievements", href: "#achievements" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar for premium institution feel */}
      <div className="bg-brand-navy text-white text-[11px] sm:text-xs py-2 px-4 sm:px-8 flex justify-between items-center transition-all duration-300 w-full z-50 relative font-medium">
        <div className="flex items-center gap-4 shrink-0">
          <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            <Phone className="w-3.5 h-3.5 text-brand-gold" />
            +91 89787 83153
          </span>
          <span className="hidden md:flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            <MapPin className="w-3.5 h-3.5 text-brand-gold" />
            Seethamadhara, Visakhapatnam
          </span>
        </div>

        {/* Animated Text Ticker (Center) */}
        <div className="hidden lg:block overflow-hidden relative flex-grow mx-8 h-5 bg-brand-navy">
          <div className="animate-ticker absolute text-[11px] font-extrabold text-brand-gold uppercase tracking-widest">
            ★ Admissions Open for Academic Session 2026-27 ★ <span className="text-brand-red">Secure Your Seat Today</span> ★ Pre-Primary to Grade 12 Batches Active ★ Click &quot;Apply Admission&quot; to Secure Enrollment ★
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0 font-semibold">
          <Link href="#contact" className="hover:text-brand-gold transition-colors">
            Parent Portal
          </Link>
          <span className="opacity-30">|</span>
          <Link href="#contact" className="hover:text-brand-gold transition-colors">
            Careers
          </Link>
        </div>
      </div>

      <header
        className="sticky top-0 z-40 w-full transition-all duration-500 px-4 sm:px-6 lg:px-8 pt-4 pb-2 pointer-events-none"
      >
        <div
          className={`max-w-7xl mx-auto flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 pointer-events-auto ${
            scrolled
              ? "bg-white/85 backdrop-blur-xl border border-white/50 shadow-xl shadow-brand-blue/10"
              : "bg-white/95 border border-brand-blue/5 shadow-md shadow-brand-blue/5"
          }`}
        >
          {/* Logo Brand Area */}
          <Link href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-brand-blue/20 flex items-center justify-center bg-white shadow-md shadow-brand-blue/10 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.jpg"
                alt="Adarsh Oxford School Logo"
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat font-extrabold text-base sm:text-lg tracking-tight text-brand-navy leading-none group-hover:text-brand-blue transition-colors">
                ADARSH OXFORD
              </span>
              <span className="font-poppins font-bold text-[8px] sm:text-[9px] text-brand-gold tracking-widest leading-none mt-1.5 uppercase">
                A Way and a Vision
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-poppins font-semibold text-xs text-brand-navy/85 hover:text-brand-blue transition-colors relative py-1.5 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Call To Action Buttons (Desktop) */}
          <div className="hidden xl:flex items-center gap-3">
            <Link
              href="#contact"
              className="font-poppins font-bold text-xs text-brand-blue hover:text-brand-navy transition-colors px-3 py-1.5"
            >
              Enquire
            </Link>
            <Link
              href="#contact"
              className="bg-gradient-to-r from-brand-gold to-amber-500 hover:from-amber-600 hover:to-brand-gold text-white font-poppins font-extrabold text-xs rounded-full px-5 py-2 shadow-md shadow-brand-gold/15 hover:shadow-brand-gold/25 transition-all transform hover:-translate-y-0.5 hover:scale-105 flex items-center gap-2 group"
            >
              Apply Admission
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r from-brand-gold to-amber-500 text-white font-poppins font-bold text-xs rounded-full px-4 py-2 shadow-sm shadow-brand-gold/15"
            >
              Apply
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-navy hover:bg-brand-blue/5 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Full Screen Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden fixed inset-x-0 top-[96px] bg-white/95 backdrop-blur-xl border-b border-brand-blue/5 shadow-2xl py-6 px-6 z-30 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block font-poppins font-bold text-base text-brand-navy hover:text-brand-blue py-2 border-b border-brand-gray/30 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="flex flex-col sm:flex-row gap-3 mt-4"
                >
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center bg-brand-navy text-white font-poppins font-bold text-sm rounded-xl py-3 shadow-md transition-all hover:bg-brand-blue"
                  >
                    Parent Portal
                  </Link>
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center bg-gradient-to-r from-brand-gold to-amber-500 text-white font-poppins font-bold text-sm rounded-xl py-3 shadow-md shadow-brand-gold/10 hover:opacity-95"
                  >
                    Apply Admission 2026-27
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
