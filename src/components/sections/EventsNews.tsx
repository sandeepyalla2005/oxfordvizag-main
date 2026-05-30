"use client";

import { motion } from "framer-motion";
import { Bell, FileText, Calendar, Play, Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function EventsNews() {
  const notices = [
    {
      date: "30 May 2026",
      tag: "Admissions",
      title: "Class Commencement Dates for Kindergarten & Primary Sections",
      isNew: true,
    },
    {
      date: "25 May 2026",
      tag: "Exams",
      title: "Schedule of CBSE Term-II Formative Assessment & Practice Tests",
      isNew: true,
    },
    {
      date: "18 May 2026",
      tag: "Innovation",
      title: "Inauguration of New Robotics & AI Innovation Lab (Seethamadhara Campus)",
      isNew: false,
    },
    {
      date: "12 May 2026",
      tag: "Events",
      title: "Oxford Annual Science, Art & Literary Exhibition Registration Open",
      isNew: false,
    },
    {
      date: "05 May 2026",
      tag: "Directives",
      title: "CBSE Board Examination Mandatory Disclosures & Syllabus Guidelines",
      isNew: false,
    },
  ];

  return (
    <section id="events-news" className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-2">
          <span className="text-xs font-bold text-[#1565C0] tracking-widest uppercase">
            School Bulletin
          </span>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#0B2540] tracking-tight">
            News, Notices &amp; Circulars
          </h2>
          <div className="h-1 w-16 bg-[#F57F17] mx-auto mt-2 rounded"></div>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Stay aligned with active board circulars, schedules, campus celebrations, and media updates.
          </p>
        </div>

        {/* ================= SPLIT DUAL-PANEL LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: NOTICE BOARD SCROLLER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-lg p-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
              <h3 className="font-montserrat font-bold text-base text-[#0B2540] flex items-center gap-2">
                <Bell className="w-5 h-5 text-[#F57F17] animate-bounce" />
                Latest Announcements
              </h3>
              <span className="text-[10px] font-bold text-[#1565C0] uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">
                Circulars
              </span>
            </div>

            {/* Vertical notice scroller list */}
            <div className="notice-scroller flex flex-col gap-3 pr-2">
              {notices.map((notice, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-100 rounded p-4 hover:border-[#1565C0] transition-colors shadow-sm flex items-start justify-between gap-4 group cursor-pointer"
                >
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {notice.date}
                      </span>
                      <span className="text-[9px] bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider font-poppins">
                        {notice.tag}
                      </span>
                      {notice.isNew && (
                        <span className="text-[9px] bg-red-100 text-red-600 font-bold px-1.5 py-0.5 rounded font-poppins animate-pulse">
                          NEW
                        </span>
                      )}
                    </div>
                    <h4 className="font-poppins font-bold text-xs sm:text-[13px] text-[#0B2540] leading-snug group-hover:text-[#1565C0] transition-colors">
                      {notice.title}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 text-[#1565C0] group-hover:bg-[#1565C0] group-hover:text-white transition-colors">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: MULTIMEDIA & MAGAZINE BOX */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Embedded Video Showcase */}
            <div className="bg-[#0B2540] text-white rounded-lg p-2 border border-slate-800 shadow-md">
              <div className="relative aspect-[16/9] w-full rounded overflow-hidden bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop"
                  alt="Oxford Science Exhibit Highlight"
                  className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#1565C0]/90 hover:bg-[#1565C0] border-2 border-white text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 bg-[#0B2540]/80 rounded px-2.5 py-1 text-[10px] font-semibold text-white">
                  Oxford Campus Tour Highlight
                </div>
              </div>
            </div>

            {/* School Magazine Box */}
            <div className="border border-slate-200 rounded-lg p-5 bg-slate-50 flex gap-4 items-center justify-between">
              <div className="flex gap-3.5 items-center">
                <div className="w-14 h-16 bg-[#F57F17]/10 text-[#F57F17] rounded flex flex-col items-center justify-center shrink-0 border border-[#F57F17]/20 font-montserrat">
                  <span className="text-[9px] font-bold tracking-widest leading-none mb-1 opacity-70">VOL</span>
                  <span className="text-xl font-extrabold leading-none">24</span>
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-sm text-[#0B2540] mb-0.5">School Handbook 2026-27</h4>
                  <p className="text-[10px] text-slate-500 leading-normal">
                    Download the comprehensive curriculum guide, fee breakups &amp; general rules catalog.
                  </p>
                </div>
              </div>
              <Link
                href="#contact"
                className="w-9 h-9 rounded bg-white hover:bg-[#F57F17] hover:text-white border border-slate-200 text-slate-600 flex items-center justify-center shrink-0 transition-colors shadow-sm"
                aria-label="Download prospectus"
              >
                <Download className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
