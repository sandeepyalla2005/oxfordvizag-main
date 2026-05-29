"use client";

import { motion } from "framer-motion";
import { CheckCircle, Quote } from "lucide-react";
import Link from "next/link";

export default function About() {
  const highlights = [
    "CBSE Affiliated School (Pre-Primary to Grade XII)",
    "State-of-the-art Smart Classrooms & Science Labs",
    "Experienced & Qualified Faculty Members",
    "Holistic development: Academics + Sports + Arts",
    "Dedicated Robotics, AI & Digital Learning Zones",
    "Safe, inclusive campus environment in Seethamadhara",
  ];

  return (
    <section id="about" className="py-24 sm:py-28 bg-bg-soft relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 flex flex-col gap-3">
          <span className="text-sm font-bold text-brand-blue tracking-widest uppercase">
            About Our School
          </span>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-brand-navy tracking-tight leading-tight">
            Welcome to Adarsh Oxford English Medium School
          </h2>
          <p className="text-brand-navy/70 text-base max-w-xl mx-auto leading-relaxed">
            A premier institution committed to nurturing future leaders through academic excellence, holistic development, and values-based education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: School Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div
                className="w-full aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: "url('/school-hero.jpg')" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/80 to-transparent py-5 px-6">
                <div className="font-montserrat font-bold text-white text-sm">Adarsh Oxford Campus</div>
                <div className="text-xs text-white/70">Seethamadhara, Visakhapatnam</div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-brand-gold text-white rounded-2xl px-4 py-3 shadow-xl text-center hidden sm:block">
              <div className="font-montserrat font-extrabold text-2xl leading-none">25+</div>
              <div className="text-xs font-semibold uppercase tracking-wide">Years</div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Principal Quote */}
            <div className="glass-card-accent rounded-2xl p-5 border-l-4 border-brand-gold relative">
              <Quote className="w-8 h-8 text-brand-blue/10 absolute top-3 right-3" />
              <p className="text-brand-navy text-sm leading-relaxed font-medium italic">
                "At Adarsh Oxford, we believe education is not just about marks — it is about shaping responsible, confident, and compassionate human beings who are ready to lead the world."
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm">
                  P
                </div>
                <div>
                  <div className="font-bold text-brand-navy text-sm">Principal, Adarsh Oxford</div>
                  <div className="text-xs text-brand-gray">M.Ed., Ph.D. — 20+ years experience</div>
                </div>
              </div>
            </div>

            <p className="text-brand-navy/70 leading-relaxed text-base">
              Adarsh Oxford English Medium School, Seethamadhara, Visakhapatnam, is a premier CBSE-affiliated institution committed to academic excellence, character development, and holistic learning. We nurture young minds from Pre-Primary through Grade XII.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-brand-navy">
                  <CheckCircle className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                href="#academics"
                className="bg-brand-blue hover:bg-brand-blue-dark text-white font-poppins font-bold text-sm rounded-full px-6 py-3 transition-all shadow-md shadow-brand-blue/20 hover:shadow-brand-blue/30 hover:-translate-y-0.5"
              >
                Our Academics
              </Link>
              <Link
                href="#contact"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-poppins font-bold text-sm rounded-full px-6 py-3 transition-all"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
