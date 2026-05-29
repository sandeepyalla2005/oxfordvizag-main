"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function EventsNews() {
  const items = [
    {
      day: "28",
      month: "MAY",
      title: "Interactive Smart Class Demo & Campus Tour",
      desc: "An exclusive opportunity for parents registering for the 2026-27 batch to tour our digital labs, meet faculty, and experience dynamic learning first-hand.",
      time: "10:00 AM - 01:00 PM",
      location: "OXFORD Central Hall",
      badge: "Open House",
    },
    {
      day: "15",
      month: "JUN",
      title: "Annual Science and Robotic Innovation Exhibit",
      desc: "Witness custom robotics assemblies, IoT sensors, and machine learning modules built by middle and high school students to solve local Visakhapatnam problems.",
      time: "09:00 AM - 04:00 PM",
      location: "Science Block Arena",
      badge: "Student Exhibition",
    },
    {
      day: "22",
      month: "JUN",
      title: "Elite Career & University Application Seminar",
      desc: "Guided by Stanford alumni and seasoned profile builders, this seminar provides invaluable guidance on building outstanding Ivy League portfolios.",
      time: "02:00 PM - 05:00 PM",
      location: "Digital Learning Studio",
      badge: "Academic Seminar",
    },
  ];

  return (
    <section id="events-news" className="py-24 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="flex flex-col gap-3 max-w-2xl text-left">
            <span className="text-sm font-bold text-brand-blue tracking-widest uppercase">
              Events & Bulletins
            </span>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-brand-navy tracking-tight leading-tight">
              What&apos;s Happening at OXFORD
            </h2>
            <p className="text-brand-navy/70 text-base leading-relaxed">
              Stay updated with active campus registration cycles, scientific research exhibits, parent seminars, and news highlights.
            </p>
          </div>
          
          <Link
            href="#contact"
            className="font-poppins font-bold text-sm text-brand-blue hover:text-brand-navy flex items-center gap-2 group border-b border-brand-blue/30 pb-1 self-start shrink-0 transition-colors"
          >
            Explore All Happenings
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3-Column Grid of Premium Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="glass-card p-6 sm:p-8 rounded-3xl h-full border border-white group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Thin gold bottom hover accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-gold transition-all duration-300 group-hover:w-full" />

              <div className="flex flex-col gap-6">
                
                {/* Date Row */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col bg-brand-blue text-white rounded-2xl w-14 h-16 items-center justify-center shadow-lg shadow-brand-blue/15 font-montserrat">
                    <span className="text-xl font-extrabold tracking-tight leading-none">
                      {item.day}
                    </span>
                    <span className="text-[10px] font-bold tracking-widest leading-none mt-1 opacity-90">
                      {item.month}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest bg-brand-gold/5 border border-brand-gold/15 rounded-full px-3.5 py-1">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-montserrat font-extrabold text-lg text-brand-navy group-hover:text-brand-blue transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-navy/70 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

              </div>

              {/* Time & Place Footer */}
              <div className="border-t border-brand-navy/5 pt-4 mt-6 flex flex-col gap-2 text-xs text-brand-navy/60 font-semibold">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>{item.location}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
