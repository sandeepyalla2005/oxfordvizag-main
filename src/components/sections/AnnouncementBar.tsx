"use client";

import { Megaphone } from "lucide-react";

export default function AnnouncementBar() {
  const notices = [
    "📢 Admissions Open for Academic Session 2026-27 — Apply Now!",
    "🏆 Congratulations to our Class X & XII Board Toppers!",
    "📅 Annual Day Celebration on June 15, 2026 — All parents are invited",
    "🔬 New Robotics & AI Lab inaugurated at Adarsh Oxford Campus",
    "📚 Scholarship Test for Grades 6-10 — Register at Reception",
    "🚌 School Bus Routes Updated — Contact Transport Department",
    "🎨 Summer Camp Registrations Open — Art, Dance, Sports & Coding",
  ];

  const tickerText = notices.join("   •   ");

  return (
    <div className="bg-[#E3F2FD] border-y border-[#BBDEFB] py-2.5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
        {/* Label */}
        <div className="flex-shrink-0 flex items-center gap-2 bg-[#1565C0] text-white text-xs font-bold px-4 py-1.5 rounded-sm">
          <Megaphone className="w-3.5 h-3.5" />
          <span className="uppercase tracking-wider hidden sm:inline">Notices</span>
        </div>

        {/* Scrolling Ticker */}
        <div className="overflow-hidden flex-1 relative h-6">
          <div className="animate-ticker absolute text-xs sm:text-sm font-semibold text-[#0D47A1] whitespace-nowrap">
            {tickerText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tickerText}
          </div>
        </div>
      </div>
    </div>
  );
}
