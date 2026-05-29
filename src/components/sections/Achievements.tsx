"use client";

import { motion } from "framer-motion";
import { Award, Trophy, GraduationCap, Star } from "lucide-react";

export default function Achievements() {
  const list = [
    {
      icon: Award,
      badge: "Academics",
      studentName: "Aditya Vardhan",
      achievement: "International Math Olympiad - Rank 4",
      desc: "Scored a near-perfect result representing the country, securing a full future scholarship program.",
      year: "2025",
      color: "border-brand-gold",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
    },
    {
      icon: Trophy,
      badge: "Athletics",
      studentName: "Rhea Sen",
      achievement: "National Under-17 Tennis Champion",
      desc: "Won three consecutive gold singles trophies at the School Games Federation of India (SGFI).",
      year: "2025",
      color: "border-brand-blue",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },
    {
      icon: GraduationCap,
      badge: "University Placement",
      studentName: "Devendra K.",
      achievement: "Stanford University Admit (Full Ride)",
      desc: "Admitted into Stanford's elite computer engineering school with a prestigious full merit scholarship.",
      year: "2026",
      color: "border-brand-cyan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-24 sm:py-28 bg-gradient-to-br from-bg-soft via-bg-ice to-white relative overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 flex flex-col gap-3">
          <span className="text-sm font-bold text-brand-blue tracking-widest uppercase">
            Hall of Fame
          </span>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-brand-navy tracking-tight leading-tight">
            Celebrating Standout Student Achievements
          </h2>
          <p className="text-brand-navy/70 text-base max-w-xl mx-auto leading-relaxed">
            Our students continue to excel on national and international stages, setting new standards of excellence across every discipline.
          </p>
        </div>

        {/* 3-Column Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {list.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-card-accent p-6 sm:p-8 rounded-3xl h-full border-t-4 ${item.color} flex flex-col justify-between group`}
              >
                <div className="flex flex-col gap-6">
                  {/* Top Row: Avatar & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${item.avatar}')`,
                        }}
                      />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-brand-gold bg-brand-gold/5 border border-brand-gold/10 rounded-full px-3 py-1 font-bold">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.badge}</span>
                    </div>
                  </div>

                  {/* Core details */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                      Class of {item.year}
                    </span>
                    <h3 className="font-montserrat font-extrabold text-lg text-brand-navy leading-snug">
                      {item.studentName}
                    </h3>
                    <p className="text-sm font-bold text-brand-navy leading-snug border-l-2 border-brand-blue/30 pl-2">
                      {item.achievement}
                    </p>
                    <p className="text-xs sm:text-sm text-brand-navy/70 leading-relaxed font-normal mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Rating / Interactive footer */}
                <div className="border-t border-brand-navy/5 pt-4 mt-6 flex items-center justify-between">
                  <div className="flex gap-0.5 text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-brand-navy/40 uppercase tracking-widest">
                    Honoree
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
