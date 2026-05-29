"use client";

import { motion } from "framer-motion";
import { Tv, FlaskConical, BookOpen, Trophy, Cpu, Bus, Music, Dumbbell } from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      icon: Tv,
      title: "Smart Classrooms",
      desc: "Interactive smart boards, projectors, and digital content in every classroom.",
      img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop",
      color: "text-brand-blue bg-brand-blue/10",
    },
    {
      icon: Cpu,
      title: "Robotics & AI Lab",
      desc: "Dedicated robotics workshop with Arduino kits, AI tools, and 3D printers.",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
      color: "text-brand-cyan bg-brand-cyan/10",
    },
    {
      icon: FlaskConical,
      title: "Science Laboratories",
      desc: "Fully equipped Physics, Chemistry, and Biology labs with modern instruments.",
      img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop",
      color: "text-green-600 bg-green-50",
    },
    {
      icon: BookOpen,
      title: "Digital Library",
      desc: "Thousands of books, e-resources, and digital archives for all students.",
      img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop",
      color: "text-brand-gold bg-brand-gold/10",
    },
    {
      icon: Trophy,
      title: "Sports Arena",
      desc: "Multi-sport ground with cricket, football, basketball, and athletics facilities.",
      img: "https://images.unsplash.com/photo-1540747913346-19212a4b5b57?q=80&w=600&auto=format&fit=crop",
      color: "text-brand-red bg-red-50",
    },
    {
      icon: Music,
      title: "Music & Arts Room",
      desc: "Dedicated studio for music, fine arts, dance, and cultural activities.",
      img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=600&auto=format&fit=crop",
      color: "text-purple-600 bg-purple-50",
    },
    {
      icon: Dumbbell,
      title: "Indoor Gymnasium",
      desc: "Modern gymnasium with fitness equipment and yoga studio.",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
      color: "text-teal-600 bg-teal-50",
    },
    {
      icon: Bus,
      title: "School Transport",
      desc: "GPS-tracked, air-conditioned school buses covering all Visakhapatnam areas.",
      img: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=600&auto=format&fit=crop",
      color: "text-indigo-600 bg-indigo-50",
    },
  ];

  return (
    <section id="facilities" className="py-24 sm:py-28 bg-bg-soft relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-brand-blue/4 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 flex flex-col gap-3">
          <span className="text-sm font-bold text-brand-blue tracking-widest uppercase">
            Campus Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-brand-navy tracking-tight leading-tight">
            World-Class Infrastructure
          </h2>
          <p className="text-brand-navy/70 text-base max-w-xl mx-auto leading-relaxed">
            Our state-of-the-art campus provides everything students need to excel academically, creatively, and physically.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass-card-accent rounded-2xl group overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.img}')` }}
                  />
                  <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/10 transition-all" />
                  <div className={`absolute top-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center shadow ${item.color}`}>
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="font-montserrat font-bold text-brand-navy text-sm group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-brand-navy/60 text-xs leading-relaxed">
                    {item.desc}
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
