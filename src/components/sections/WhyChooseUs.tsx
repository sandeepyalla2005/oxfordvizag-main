"use client";

import { motion } from "framer-motion";
import { Award, Compass, Laptop, ShieldCheck, Trophy, Users, Check } from "lucide-react";

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: Award,
      title: "CBSE Standard Affiliation",
      desc: "Following the central board guidelines meticulously, combining deep NCERT principles with modern assessment methodologies.",
      iconBg: "bg-blue-50 text-[#1565C0]",
    },
    {
      icon: Compass,
      title: "Conceptual STEM Pedagogy",
      desc: "Ditching rote memorization in favour of query-based learning, practical laboratory experiments, and everyday physical models.",
      iconBg: "bg-amber-50 text-[#F57F17]",
    },
    {
      icon: Users,
      title: "Certified Academic Mentors",
      desc: "Our teaching board consists of M.Ed. & Ph.D. certified educators dedicated to child-centric development and subject expertise.",
      iconBg: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: Laptop,
      title: "Hands-on Robotics & AI Labs",
      desc: "Equipping young builders with computational logic early via microcontrollers, smart circuits, and child-safe coding platforms.",
      iconBg: "bg-purple-50 text-purple-600",
    },
    {
      icon: Trophy,
      title: "Active Co-curricular Board",
      desc: "Rigorous calendar of inter-house contests, debate assemblies, math Olympiads, and competitive sports leagues.",
      iconBg: "bg-rose-50 text-rose-600",
    },
    {
      icon: ShieldCheck,
      title: "GPS-Tracked Campus Security",
      desc: "Inspected safe corridors, full campus surveillance, and transport tracking services to give parents complete peace of mind.",
      iconBg: "bg-sky-50 text-sky-600",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-slate-100 rounded-full blur-3xl pointer-events-none opacity-45" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-2">
          <span className="text-xs font-bold text-[#1565C0] tracking-widest uppercase">
            Our Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#0B2540] tracking-tight">
            The Adarsh Oxford Advantage
          </h2>
          <div className="h-1 w-16 bg-[#F57F17] mx-auto mt-2 rounded"></div>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Discover the six scholastic pillars that make Adarsh Oxford School Visakhapatnam&apos;s premier educational hub.
          </p>
        </div>

        {/* ================= ADVANTAGES 3x2 GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-[#1565C0] transition-all duration-300 flex gap-4"
              >
                {/* Icon Column */}
                <div className={`w-12 h-12 rounded-lg ${adv.iconBg} flex items-center justify-center shrink-0 shadow-sm`}>
                  <Icon className="w-5.5 h-5.5" />
                </div>

                {/* Text Column */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-montserrat font-bold text-[#0B2540] text-sm sm:text-base tracking-tight leading-tight">
                    {adv.title}
                  </h3>
                  <p className="text-slate-500 text-[11.5px] sm:text-xs leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
