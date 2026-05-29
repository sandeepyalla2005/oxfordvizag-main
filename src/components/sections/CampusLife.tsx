"use client";

import { motion } from "framer-motion";
import { Paintbrush, Award, Cpu, Trees, Check } from "lucide-react";

export default function CampusLife() {
  const sectors = [
    {
      icon: Paintbrush,
      badge: "Creative Expression",
      title: "Arts, Music & Theater Academy",
      desc: "We encourage pupils to explore self-expression and aesthetics through intensive modules. From classical Indian instrumentation and contemporary choir training to graphic illustration workshops and regular musical theatre productions, kids learn to find their unique voice.",
      points: ["Full-scale annual musical productions", "Equipped music and vocal studios", "Professional pottery & art gallery space"],
      image: "https://images.unsplash.com/photo-1460518451285-cd7ba78a256a?q=80&w=800&auto=format&fit=crop",
    },
    {
      icon: Award,
      badge: "Athletic Dominance",
      title: "Elite Sports & Athletic Programs",
      desc: "Our rigorous sports calendar promotes leadership, coordination, and grit. Adarsh Oxford is home to professional academies led by certified national-level trainers who guide students in competitive inter-school leagues and track tournaments.",
      points: ["Professional artificial turf field", "BCCI standard concrete cricket pitches", "Indoor Olympic-style swimming facilities"],
      image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=800&auto=format&fit=crop",
    },
    {
      icon: Cpu,
      badge: "Scientific Discovery",
      title: "Robotics & Innovation Laboratories",
      desc: "To foster the builders of the future, Adarsh Oxford integrates active hands-on innovation modules. Students assemble smart circuits, code remote-controlled microcontrollers, and develop custom AI modules to solve everyday local problems.",
      points: ["3D Printing stations & laser cutters", "Annual inter-school Hackathon leagues", "Collaborative AI & coding studio rooms"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop",
    },
    {
      icon: Trees,
      badge: "Global Leadership",
      title: "Student Councils & Outdoor Excursions",
      desc: "Leadership is forged through active service and field exploration. Our children manage full student councils, draft environmental recycling modules, and travel on deep national and historical field excursions.",
      points: ["Elected active student governing bodies", "Social service campaigns in Visakhapatnam", "Historical research excursions"],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="campus-life" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="section-tag">Campus Experience</span>
          <h2 className="section-title mt-4 mb-4">
            Vibrant <span>Campus Life</span>
          </h2>
          <div className="blue-divider mx-auto mb-4" />
          <p className="text-[#455A64] text-base max-w-2xl mx-auto">
            From creative expression to digital innovation, we provide an exciting range of programs that make school life truly memorable.
          </p>
        </div>

        {/* Alternating Panels */}
        <div className="flex flex-col gap-24 sm:gap-32">
          {sectors.map((sec, idx) => {
            const PanelIcon = sec.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Image Block - Swaps order on large screens */}
                <div
                  className={`lg:col-span-5 relative flex items-center justify-center ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-[#E3F2FD] z-10 group"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{
                        backgroundImage: `url('${sec.image}')`,
                      }}
                    />
                  </motion.div>
                </div>

                {/* Text Content Block */}
                <div
                  className={`lg:col-span-7 flex flex-col gap-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-[#1565C0] self-start bg-[#E3F2FD] border border-[#BBDEFB] rounded-full px-3 py-1">
                      <PanelIcon className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-widest leading-none">
                        {sec.badge}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-[#0D1B2A] mt-2 leading-tight">
                      {sec.title}
                    </h3>
                  </div>

                  <p className="text-[#455A64] text-sm sm:text-base leading-relaxed">
                    {sec.desc}
                  </p>

                  <ul className="flex flex-col gap-2.5 mt-2">
                    {sec.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex gap-2.5 items-center">
                        <div className="w-5 h-5 rounded-full bg-[#E3F2FD] flex items-center justify-center text-[#1565C0] shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm text-[#0D1B2A] font-medium">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
