"use client";

import { motion } from "framer-motion";
import { Heart, Compass, Award, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Academics() {
  const programs = [
    {
      id: "pre-primary",
      icon: Heart,
      title: "Pre-Primary / Kindergarten",
      age: "Ages 3 – 5 Years",
      color: "text-pink-500 bg-pink-50",
      border: "border-pink-100 group-hover:border-pink-300",
      points: ["Play-Based Learning", "Phonics & Early Literacy", "Sensory Development", "Structured Play Activities"],
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "primary",
      icon: Compass,
      title: "Primary School",
      age: "Grades 1 – 5 | Ages 6 – 10",
      color: "text-brand-blue bg-brand-blue/8",
      border: "border-brand-blue/10 group-hover:border-brand-blue/30",
      points: ["NCERT & CBSE Curriculum", "STEM Foundation", "Creative Arts & Crafts", "Physical Education"],
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "secondary",
      icon: Award,
      title: "Secondary (Middle School)",
      age: "Grades 6 – 8 | Ages 11 – 13",
      color: "text-brand-gold bg-brand-gold/8",
      border: "border-brand-gold/10 group-hover:border-brand-gold/30",
      points: ["Science & Maths Labs", "Social Studies & EVS", "Languages (English, Telugu, Hindi)", "Coding & Digital Literacy"],
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "senior-secondary",
      icon: GraduationCap,
      title: "Senior Secondary",
      age: "Grades 9 – 12 | Ages 14 – 17",
      color: "text-brand-cyan bg-brand-cyan/8",
      border: "border-brand-cyan/10 group-hover:border-brand-cyan/30",
      points: ["Science / Commerce / Arts", "Board Exam Excellence", "Career Counselling", "JEE / NEET / CLAT Prep"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section id="academics" className="py-24 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 flex flex-col gap-3">
          <span className="text-sm font-bold text-brand-blue tracking-widest uppercase">
            Academics
          </span>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-brand-navy tracking-tight leading-tight">
            Our Academic Programs
          </h2>
          <p className="text-brand-navy/70 text-base max-w-xl mx-auto leading-relaxed">
            From nursery to Grade XII, we offer a comprehensive CBSE curriculum designed to nurture each child's potential at every stage of development.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card-accent flex flex-col overflow-hidden rounded-3xl border ${prog.border} group`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${prog.image}')` }}
                  />
                  <div className="absolute inset-0 bg-brand-navy/30" />
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center ${prog.color} shadow-lg`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-white/90 text-brand-navy text-xs font-bold px-3 py-1 rounded-full">
                      {prog.age}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="font-montserrat font-bold text-brand-navy text-base leading-tight group-hover:text-brand-blue transition-colors">
                    {prog.title}
                  </h3>
                  <ul className="flex flex-col gap-1.5">
                    {prog.points.map((pt, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-brand-navy/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contact"
                    className="mt-auto flex items-center gap-1 text-brand-blue font-bold text-xs hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white font-poppins font-bold text-sm rounded-full px-8 py-3.5 shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/30 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            Apply for Admission 2026-27
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
