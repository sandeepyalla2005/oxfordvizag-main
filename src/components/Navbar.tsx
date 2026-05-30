"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
    { name: "About Us", href: "#about" },
    { name: "The Advantage", href: "#why-choose-us" },
    { name: "Academics", href: "#academics" },
    { name: "Facilities", href: "#facilities" },
    { name: "Campus Life", href: "#campus-life" },
    { name: "Achievements", href: "#achievements" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      {/* ================= TOP INFO BAR ================= */}
      <div className="bg-[#0B2540] text-white text-[11px] sm:text-xs py-2 px-4 sm:px-8 flex justify-between items-center z-50 relative font-medium border-b border-white/10 w-full">
        <div className="flex items-center gap-5 shrink-0">
          <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            <Phone className="w-3.5 h-3.5 text-[#F57F17]" />
            +91 89787 83153
          </span>
          <span className="hidden md:flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            <Mail className="w-3.5 h-3.5 text-[#F57F17]" />
            admissions@adarshoxford.edu.in
          </span>
          <span className="hidden xl:flex items-center gap-1.5 opacity-80">
            <Clock className="w-3.5 h-3.5 text-[#F57F17]" />
            CBSE Affiliation No: 130132
          </span>
        </div>

        {/* Ticker for important notices */}
        <div className="hidden lg:block overflow-hidden relative flex-grow mx-8 h-5 bg-[#0B2540]">
          <div className="animate-ticker absolute text-[11px] font-extrabold text-[#F57F17] uppercase tracking-wider">
            ★ Admissions Open for Academic Session 2026-27 ★ <span className="text-white">Secure Your Seat Today</span> ★ Pre-Primary to Grade 12 Batches Active ★ CBSE Affiliated Curriculum ★ Click &quot;Apply Online&quot; Below ★
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0 font-semibold text-white">
          <Link href="#contact" className="hover:text-[#F57F17] transition-colors flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#F57F17]" />
            Parent Portal
          </Link>
          <span className="opacity-30">|</span>
          <Link href="#contact" className="hover:text-[#F57F17] transition-colors">
            Admissions Desk
          </Link>
        </div>
      </div>

      {/* ================= MAIN NAVIGATION HEADER ================= */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg border-b border-slate-200 py-2.5"
            : "bg-white/95 border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo & Brand Identity */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#1565C0]/20 flex items-center justify-center bg-white shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.jpg"
                alt="Adarsh Oxford School Logo"
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat font-extrabold text-base sm:text-[19px] tracking-tight text-[#0B2540] leading-none group-hover:text-[#1565C0] transition-colors">
                ADARSH OXFORD
              </span>
              <span className="font-poppins font-bold text-[8px] sm:text-[9.5px] text-[#F57F17] tracking-widest leading-none mt-1.5 uppercase">
                English Medium School
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-poppins font-semibold text-xs tracking-wide text-[#0B2540]/90 hover:text-[#1565C0] transition-colors relative py-1.5 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1565C0] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Calls to Action */}
          <div className="hidden xl:flex items-center gap-3">
            <Link
              href="#contact"
              className="font-poppins font-bold text-xs text-[#1565C0] hover:text-[#0B2540] transition-colors px-3 py-2"
            >
              Fee Portal
            </Link>
            <Link
              href="#contact"
              className="bg-[#1565C0] hover:bg-[#0B2540] text-white font-poppins font-extrabold text-xs rounded px-5 py-2.5 shadow-sm transition-all duration-300 flex items-center gap-2 group border border-transparent"
            >
              Apply Online
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Action */}
          <div className="xl:hidden flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-[#1565C0] text-white font-poppins font-bold text-xs rounded px-4 py-2 shadow-sm"
            >
              Apply
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded border border-slate-200 text-[#0B2540] hover:bg-slate-50 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Full Screen Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden fixed inset-x-0 top-[96px] bg-white border-b border-slate-200 shadow-2xl py-6 px-6 z-30 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block font-poppins font-bold text-[15px] text-[#0B2540] hover:text-[#1565C0] py-2 border-b border-slate-100 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.03 }}
                  className="flex flex-col sm:flex-row gap-3 mt-4"
                >
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center bg-slate-100 text-[#0B2540] font-poppins font-bold text-xs rounded py-3 transition-colors hover:bg-slate-200"
                  >
                    Parent Desk
                  </Link>
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center bg-[#1565C0] text-white font-poppins font-bold text-xs rounded py-3 shadow transition-colors hover:bg-[#0B2540]"
                  >
                    Admission Enquiry 2026-27
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
