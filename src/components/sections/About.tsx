"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Target, Landmark } from "lucide-react";
import Link from "next/link";

export default function About() {
  const highlights = [
    "Strict Adherence to CBSE Academic Standards",
    "Highly Interactive Smart Classrooms & Science Labs",
    "Dedicated Coding, Robotics & Digital Innovation Zones",
    "Qualified & Certified Subject Matter Experts",
    "Vibrant Co-curricular Activities & Multi-sport Programs",
    "Safe, Monitored & Caring School Campus",
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-2">
          <span className="text-xs font-bold text-[#1565C0] tracking-widest uppercase">
            About Our Institution
          </span>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#0B2540] tracking-tight">
            Welcome to Adarsh Oxford School
          </h2>
          <div className="h-1 w-16 bg-[#F57F17] mx-auto mt-2 rounded"></div>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Affiliated to Central Board of Secondary Education (CBSE), New Delhi. 
            Providing high-quality education and value systems since 2001.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ================= LEFT: PRINCIPAL SPOTLIGHT & CAMPUS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* School Campus Photo Frame */}
            <div className="relative rounded-lg overflow-hidden shadow-md border border-slate-200 bg-white p-2">
              <div
                className="w-full aspect-[4/3] bg-cover bg-center rounded"
                style={{ backgroundImage: "url('/school-hero.jpg')" }}
              />
              <div className="py-3 px-2 flex justify-between items-center text-xs">
                <span className="font-bold text-[#0B2540]">Adarsh Oxford Campus</span>
                <span className="text-[#F57F17] font-semibold">Seethamadhara, Vizag</span>
              </div>
            </div>

            {/* Principal desk quote card */}
            <div className="bg-slate-50 rounded-lg p-5 border-l-4 border-[#1565C0] shadow-sm">
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                &quot;Our pedagogical model focuses on shaping responsible, confident, and compassionate human beings who are conceptually strong and ready to take on global opportunities.&quot;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1565C0] flex items-center justify-center text-white font-bold text-sm">
                  P
                </div>
                <div>
                  <div className="font-bold text-[#0B2540] text-xs sm:text-sm">Principal, Adarsh Oxford</div>
                  <div className="text-[10px] text-slate-500 font-medium">M.A., M.Ed., Ph.D. (20+ Years Exp.)</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT: LEAN ACADEMIC VALUES & PILLARS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-3">
              <h3 className="font-montserrat font-bold text-lg sm:text-xl text-[#0B2540]">
                Fostering Excellence, Values, &amp; Innovation
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Adarsh Oxford English Medium School is a distinguished educational community where children are motivated to achieve academic distinction. We recognize that education is not merely rote memorization, but the complete molding of character, scientific inquiry, and aesthetic sensibility.
              </p>
            </div>

            {/* Vision and Mission Cards (SFS Style) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-slate-100 rounded-lg p-5 bg-slate-50/50 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1565C0] flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-sm text-[#0B2540] mb-1">Our Core Vision</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                    To raise self-reliant, globally minded, and ethical citizens with top-tier scholastic readiness and deep moral value structures.
                  </p>
                </div>
              </div>

              <div className="border border-slate-100 rounded-lg p-5 bg-slate-50/50 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-[#F57F17] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-sm text-[#0B2540] mb-1">Our Mission</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                    Nurture every young mind with hands-on STEM skills, rigorous CBSE concepts, safe facilities, and strong leadership opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights List */}
            <div className="flex flex-col gap-3">
              <h4 className="font-montserrat font-bold text-xs tracking-wider text-[#0B2540] uppercase flex items-center gap-1.5">
                <Landmark className="w-4 h-4 text-[#1565C0]" />
                Institutional Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="#contact"
                className="bg-[#1565C0] hover:bg-[#0B2540] text-white font-poppins font-bold text-xs rounded px-6 py-3 transition-colors shadow-sm"
              >
                Schedule Campus Tour
              </Link>
              <Link
                href="#academics"
                className="border border-slate-200 text-[#0B2540] hover:bg-[#1565C0] hover:text-white hover:border-transparent font-poppins font-bold text-xs rounded px-6 py-3 transition-all"
              >
                Explore Syllabus
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
