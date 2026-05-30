"use client";

import { motion } from "framer-motion";
import { Laptop, FlaskConical, BookOpen, Trophy, Cpu, Bus, Music, Home } from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      icon: Cpu,
      title: "Robotics & AI Innovation Lab",
      desc: "Equipped with advanced Arduino programming boards, 3D printers, and active machine learning modules.",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
      badge: "STEM Lab",
    },
    {
      icon: Laptop,
      title: "Smart AV Classrooms",
      desc: "High-resolution overhead projectors, digital whiteboards, and immersive educational software in every block.",
      img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop",
      badge: "Smart Learn",
    },
    {
      icon: FlaskConical,
      title: "Science Research Laboratories",
      desc: "Fully compliant Physics, Chemistry, and Biology workspaces loaded with precision experimental equipment.",
      img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop",
      badge: "NCERT Compliant",
    },
    {
      icon: BookOpen,
      title: "Central Reference Library",
      desc: "Vast repository of academic books, daily journals, early literature, and digital encyclopedia catalogs.",
      img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop",
      badge: "E-Resources",
    },
    {
      icon: Trophy,
      title: "Multi-Sport Complex & Fields",
      desc: "Professionally maintained turf fields for football, basketball courts, and indoor table-tennis halls.",
      img: "https://images.unsplash.com/photo-1540747913346-19212a4b5b57?q=80&w=600&auto=format&fit=crop",
      badge: "Physical Ed",
    },
    {
      icon: Music,
      title: "Performing Arts & Music Studio",
      desc: "Vocal and instrumental practice rooms, dynamic dance mirrors, and fine arts drafting equipment.",
      img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=600&auto=format&fit=crop",
      badge: "Co-Curricular",
    },
    {
      icon: Bus,
      title: "GPS-Tracked Transport Fleet",
      desc: "Fully inspected school buses covering major routes in Visakhapatnam with live location feeds and SMS alerts.",
      img: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=600&auto=format&fit=crop",
      badge: "GPS Secured",
    },
    {
      icon: Home,
      title: "Secure Boys & Girls Hostels",
      desc: "Supervised living halls, healthy mess dining, and study assistance coordinators for resident students.",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
      badge: "Residential",
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-2">
          <span className="text-xs font-bold text-[#1565C0] tracking-widest uppercase">
            Campus Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#0B2540] tracking-tight">
            World-Class School Facilities
          </h2>
          <div className="h-1 w-16 bg-[#F57F17] mx-auto mt-2 rounded"></div>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Providing fully resources-laden facilities for student safety, scholastic curiosity, and physical well-being.
          </p>
        </div>

        {/* ================= FACILITIES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="bg-white border border-slate-200 rounded-lg group overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#1565C0] transition-all duration-300"
              >
                <div>
                  {/* Photo Section */}
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#0B2540]/30" />
                    
                    {/* Badge */}
                    <div className="absolute bottom-3 left-3 bg-[#0B2540]/80 rounded text-[9px] font-bold text-white px-2 py-0.5 font-poppins tracking-wide">
                      {item.badge}
                    </div>

                    {/* Icon Circle */}
                    <div className="absolute top-3 right-3 w-9 h-9 rounded bg-[#1565C0] text-white flex items-center justify-center shadow-md">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-5 flex flex-col gap-2">
                    <h3 className="font-montserrat font-bold text-[#0B2540] text-sm sm:text-[15px] tracking-tight group-hover:text-[#1565C0] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-[11.5px] sm:text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
