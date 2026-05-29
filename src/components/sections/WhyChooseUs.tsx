"use client";

import { motion } from "framer-motion";
import { BookOpen, HeartHandshake, Globe, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: BookOpen,
      color: "text-brand-blue bg-brand-blue/10",
      title: "Academic Rigour",
      highlight: "CBSE & Global Standards",
      desc: "Delivering an inquiry-driven, challenging academic curriculum that instills deep intellectual discipline, scientific temper, and outstanding board results year-on-year.",
      points: ["Expert Faculty", "Conceptual Learning", "Personal Mentoring"],
    },
    {
      icon: HeartHandshake,
      color: "text-brand-gold bg-brand-gold/10",
      title: "Holistic Development",
      highlight: "Beyond Classrooms",
      desc: "Equipping pupils with multi-dimensional life skills through leadership seminars, fine arts, public debating, global sports academies, and emotional intelligence courses.",
      points: ["Sports Academies", "Leadership Programs", "Creative Arts"],
    },
    {
      icon: Globe,
      color: "text-brand-cyan bg-brand-cyan/10",
      title: "Global Outlook",
      highlight: "International Mindset",
      desc: "Nurturing globally-aware citizens by infusing digital modules, global university guidance, and active research programs while keeping local roots firmly intact.",
      points: ["Digital Integration", "Career Counseling", "Global Collaborations"],
    },
    {
      icon: ShieldAlert,
      color: "text-brand-navy bg-brand-navy/10",
      title: "Safety & Care",
      highlight: "Secured Environment",
      desc: "Maintaining a secure physical and psychological space with state-of-the-art GPS school-bus tracking, medical response rooms, and a highly compassionate staff network.",
      points: ["GPS Bus Tracking", "Smart ID Surveillance", "Full-time Counselors"],
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 sm:py-28 bg-gradient-to-br from-bg-soft via-bg-ice to-white relative overflow-hidden"
    >
      {/* Dynamic light gradient background elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 flex flex-col gap-3">
          <span className="text-sm font-bold text-brand-blue tracking-widest uppercase">
            The Adarsh Oxford Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-brand-navy tracking-tight leading-tight">
            Nurturing Elite Thinkers & Global Leaders
          </h2>
          <p className="text-brand-navy/70 text-base max-w-xl mx-auto leading-relaxed">
            Discover the core pillars that distinguish Adarsh Oxford English Medium School as Visakhapatnam&apos;s premier hub for premium education.
          </p>
        </div>

        {/* 4-Column Grid of Premium Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card flex flex-col justify-between p-6 sm:p-8 rounded-3xl h-full border border-white group relative overflow-hidden"
              >
                {/* Thin gold bottom hover border */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                
                <div className="flex flex-col gap-6">
                  {/* Icon Badge */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                      {item.highlight}
                    </span>
                    <h3 className="font-montserrat font-bold text-lg text-brand-navy group-hover:text-brand-blue transition-colors leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-navy/70 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Bullets List */}
                <div className="border-t border-brand-navy/10 pt-4 mt-6">
                  <ul className="flex flex-col gap-2">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs text-brand-navy/80 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
