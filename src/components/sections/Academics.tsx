"use client";

import { motion } from "framer-motion";
import { Heart, Compass, Award, GraduationCap, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Academics() {
  const divisions = [
    {
      id: "kindergarten",
      icon: Heart,
      title: "Kindergarten Division",
      sub: "Pre-KG, LKG & UKG | Ages 3-5",
      points: [
        "Play-based sensory cognitive learning",
        "Phonics, story circle & early numeracy",
        "Fine motor skill & social habit shaping",
        "Safe, colourful audio-visual playrooms"
      ],
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop",
      badgeColor: "bg-pink-100 text-pink-700 border-pink-200",
      accentBorder: "group-hover:border-[#1565C0]",
    },
    {
      id: "primary",
      icon: Compass,
      title: "Primary Section",
      sub: "Grades I to V | Ages 6-10",
      points: [
        "Foundational CBSE & NCERT framework",
        "Mathematical logic & environmental science",
        "Tri-lingual curriculum (English, Hindi, Telugu)",
        "Weekly music, visual arts & physical sports"
      ],
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
      accentBorder: "group-hover:border-[#1565C0]",
    },
    {
      id: "secondary",
      icon: Award,
      title: "Secondary Section",
      sub: "Grades VI to X | Ages 11-15",
      points: [
        "Rigorous practical lab experiment modules",
        "Active digital coding & AI innovation courses",
        "Inter-house quizzes, debates & math Olympiads",
        "Intensive preparation for CBSE Board Exams"
      ],
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
      badgeColor: "bg-amber-100 text-amber-700 border-amber-200",
      accentBorder: "group-hover:border-[#1565C0]",
    },
    {
      id: "senior-secondary",
      icon: GraduationCap,
      title: "Senior Secondary Division",
      sub: "Grades XI & XII | Ages 16-17",
      points: [
        "MPC (Mathematics, Physics, Chemistry) streams",
        "BiPC (Biology, Physics, Chemistry) streams",
        "JEE, NEET & state-level competitive coaching",
        "One-on-one career counseling sessions"
      ],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop",
      badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
      accentBorder: "group-hover:border-[#1565C0]",
    },
  ];

  return (
    <section id="academics" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-2">
          <span className="text-xs font-bold text-[#1565C0] tracking-widest uppercase">
            Academic Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#0B2540] tracking-tight">
            Our Academic Divisions
          </h2>
          <div className="h-1 w-16 bg-[#F57F17] mx-auto mt-2 rounded"></div>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Providing a comprehensive, structured path from early childhood playrooms to advanced senior secondary career preparation.
          </p>
        </div>

        {/* ================= DIVISIONS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((div, i) => {
            const Icon = div.icon;
            return (
              <motion.div
                key={div.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group border-b-2`}
              >
                {/* Header Image with overlay */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={div.image}
                    alt={div.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0B2540]/30" />
                  
                  {/* Category icon */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded bg-[#1565C0] text-white flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Level label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded border bg-white shadow-sm font-poppins`}>
                      {div.sub}
                    </span>
                  </div>
                </div>

                {/* Division Info */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div className="mb-5">
                    <h3 className="font-montserrat font-bold text-base text-[#0B2540] tracking-tight group-hover:text-[#1565C0] transition-colors mb-4">
                      {div.title}
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                      {div.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-slate-500 leading-normal">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1565C0] mt-1.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="#contact"
                    className="flex items-center justify-center gap-1 w-full bg-slate-50 hover:bg-[#1565C0] text-slate-600 hover:text-white border border-slate-100 font-poppins font-bold text-xs py-2 rounded transition-all"
                  >
                    Admission Syllabus
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1565C0] hover:bg-[#0B2540] text-white font-poppins font-extrabold text-xs tracking-wide uppercase px-8 py-3.5 rounded shadow transition-colors"
          >
            Admission Guidance Desk
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
