"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[88vh] sm:min-h-screen flex items-center overflow-hidden bg-brand-navy">

      {/* Background School Photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/school-hero.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none animate-pulse-orb" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none animate-float-slow" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 w-full">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            Admissions Open 2026-27
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-extrabold text-white leading-tight mb-6"
          >
            Adarsh Oxford
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-300">
              English Medium School
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl font-medium italic"
          >
            "A Way and a Vision" — Seethamadhara, Visakhapatnam
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Link
              href="#contact"
              className="group bg-gradient-to-r from-brand-gold to-amber-500 hover:from-amber-500 hover:to-brand-gold text-white font-poppins font-extrabold text-sm px-8 py-4 rounded-full shadow-xl shadow-brand-gold/25 hover:shadow-brand-gold/40 transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2"
            >
              Apply for Admission
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-poppins font-bold text-sm px-7 py-4 rounded-full border border-white/25 hover:border-white/40 transition-all backdrop-blur-sm"
            >
              <Play className="w-4 h-4 fill-current" />
              Explore Our School
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 sm:h-24 fill-bg-soft">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90.2,27.35,176.49,51,248.8,69.94,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
